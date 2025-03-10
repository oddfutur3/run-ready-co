import { cookies } from "next/headers"
import { firebaseAdmin } from "@/firebaseAdmin"

export async function fetchRedemptions() {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get('__session')
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value)

    // Grab completed missions
    let completedMissions = []

    const userMissionResult = await firebaseAdmin
      .firestore()
      .collection(`users/${token.user_id}/missions`)
      .where('completed', '==', true)
      .orderBy('completedDate', 'desc')
      .get()

    await Promise.all(
      userMissionResult.docs.map(async (mission) => {
        if (mission.data().completed && mission.data().series_id) {
          completedMissions.push(mission.data().series_id)
        } else if (mission.data().completed) {
          completedMissions.push(mission.id)
        } else {
          pendingMissions.push(mission.id)
        }
      })
    )

    //Grab completed redemptions

    let completedRedemptions = {}

    const userRedemptionResult = await firebaseAdmin
      .firestore()
      .collection(`users/${token.user_id}/redemptions`)
      .where('numUserRedemptions.total', '>=', 1)
      .orderBy('numUserRedemptions.total', 'desc')
      .orderBy('firstRedeemedDate', 'desc')
      .get()

    await Promise.all(
      userRedemptionResult.docs.map(async (redemption) => {
        completedRedemptions[redemption.data().id] = redemption.data()
      })
    )

    const RedemptionsResult = await firebaseAdmin
      .firestore()
      .collection('redemptions')
      .orderBy('dateEnd', 'asc')
      .get()

    const Redemptions = {
      redemptionsUpcoming: [],
      redemptionsActive: [],
      redemptionsExpired: [],
      redemptionsCompleted: [],
    }

    await Promise.all(
      RedemptionsResult.docs.map(async (redemption) => {
        let cleanRedemption = {
          id: {
            id: redemption.id,
            series_id: redemption.data().series_id || '',
            sub_series_id: redemption.data().sub_series_id || '',
            sub_sub_series_id: redemption.data().sub_sub_series_id || '',
          },
          title: redemption.data().title || '',
          desc: redemption.data().description || '',
          dateStart: redemption.data().dateStart || '',
          expiry: redemption.data().dateEnd || '',
          thumb: redemption.data().image?.thumb || '',
          redemptionType: redemption.data().redemptionType || '',
          requirements: redemption.data().requirements || '',
          pointsFee: redemption.data().pointsFee || '',
          showQty: redemption.data().showQty || '',
          qtyRemaining:
            Math.min(
              redemption.data().maxTotalRedemptions.series_id -
                redemption.data().currentTotalRedemptions.series_id,
              redemption.data().maxTotalRedemptions.sub_series_id -
                redemption.data().currentTotalRedemptions.sub_series_id,
              redemption.data().maxTotalRedemptions.sub_sub_series_id -
                redemption.data().currentTotalRedemptions.sub_sub_series_id
            ) || '',
          rewardType: redemption.data().rewardType || '',
          rewardInstantType: redemption.data().rewardInstantType || '',
          rewardInstant: redemption.data().rewardInstant || '',
          numUserRedemptions: completedRedemptions[redemption.data().series_id]
            ?.numUserRedemptions || {
            series_id: 0,
            sub_series_id: 0,
            sub_sub_series_id: 0,
          },
        }

        if (
          completedRedemptions[redemption.data().series_id] !== undefined &&
          completedRedemptions[redemption.data().series_id]?.numUserRedemptions
            .total >= redemption.data().maxUserRedemptions.series_id &&
          completedRedemptions[
            redemption.data().series_id
          ]?.numUserRedemptions.sub_sub_series_id.includes(
            redemption.data().sub_sub_series_id
          )
        ) {
          cleanRedemption.status = completedRedemptions[
            redemption.data().series_id
          ].fulfilled
            ? 'fulfilled'
            : 'completed'
          Redemptions.redemptionsCompleted.push(cleanRedemption)
        } else if (redemption.data().status == 'hidden') {
          cleanRedemption.status = 'hidden'
        } else if (
          redemption.data().dateEnd < Date.now() / 1000 ||
          redemption.data().status == 'expired'
        ) {
          cleanRedemption.status = 'expired'
          Redemptions.redemptionsExpired.push(cleanRedemption)
        } else if (
          redemption.data().currentTotalRedemptions.sub_sub_series_id ==
            redemption.data().maxTotalRedemptions.sub_sub_series_id ||
          redemption.data().currentTotalRedemptions.sub_series_id ==
            redemption.data().maxTotalRedemptions.sub_series_id ||
          redemption.data().currentTotalRedemptions.series_id ==
            redemption.data().maxTotalRedemptions.series_id
        ) {
          cleanRedemption.status = 'depleted'
          Redemptions.redemptionsExpired.push(cleanRedemption)
        } else if (redemption.data().dateStart > Date.now() / 1000) {
          cleanRedemption.status = 'upcoming'
          Redemptions.redemptionsUpcoming.push(cleanRedemption)
        } else if (redemption.data().dateEnd > Date.now() / 1000) {
          let reqsMet = 0
          if (redemption.data().requirementsType.includes('missions')) {
            let missionsReqs = 0
            let missionsReqPromises = []

            redemption.data().requirements.missions.forEach(async (req) => {
              missionsReqPromises.push(
                new Promise(async function (resolve, reject) {
                  if (completedMissions.includes(req['missionId'])) {
                    missionsReqs += 1
                    resolve(true)
                  } else {
                    resolve(false)
                  }
                })
              )
            })

            await Promise.all(missionsReqPromises)

            // If all activity reqs have been met, then activity requirement is met
            if (
              missionsReqs == redemption.data().requirements.missions.length ||
              missionsReqs >= redemption.data().requirements?.override?.missions
            ) {
              reqsMet += 1
            }
          }

          // Check if any collectible reqs need to be met
          if (redemption.data().requirementsType.includes('collectible')) {
            const userCollectiblesResult = await firebaseAdmin
              .firestore()
              .collection(`users/${token.user_id}/collectibles`)
              .get()

            let collectibleReqs = 0
            let collectibleReqPromises = []
            // Loop through each collectible requirement and confirm it's equal to it's key

            redemption
              .data()
              .requirements.collectible.forEach((requirement) => {
                collectibleReqPromises.push(
                  new Promise(async function (resolve, reject) {
                    let numCollectibles = 0
                    userCollectiblesResult.docs.map(async (collectible) => {
                      let traitsMet = 0
                      Object.keys(requirement).forEach((key) => {
                        if (
                          requirement[key].includes(
                            eval('collectible.data().metadata["' + key + '"]')
                          )
                        ) {
                          traitsMet += 1
                          return
                        }
                      })
                      if (traitsMet === Object.keys(requirement).length) {
                        numCollectibles += 1
                      }
                    })
                    if (numCollectibles > 0) {
                      collectibleReqs += 1
                      resolve(true)
                    } else {
                      resolve(true)
                    }
                  })
                )
              })

            await Promise.all(collectibleReqPromises)

            // If all collectible reqs have been met, then activity requirement is met
            if (
              collectibleReqs ==
                redemption.data().requirements.collectible.length ||
              collectibleReqs >=
                redemption.data().requirements?.override?.collectible
            ) {
              reqsMet += 1
            }
          }

          if (redemption.data().requirementsType.length == reqsMet) {
            //Check if user has completed the mission
            cleanRedemption.status = 'active'
          } else {
            cleanRedemption.status = 'locked'
          }

          Redemptions.redemptionsActive.push(cleanRedemption)
        }
      })
    )

    return {

        uid: token.user_id,
        redemptions: Redemptions,
      }
    
  } catch (err) {
    console.log(err)
    return {}
  }
}