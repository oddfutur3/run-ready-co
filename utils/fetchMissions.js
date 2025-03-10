import { cookies } from "next/headers"
import { firebaseAdmin } from "@/firebaseAdmin"

export async function fetchMissions() {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get('__session')
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value)


    let completedMissions = []
    let pendingMissions = []

    //Grab user completed missions
    const userMissionResult = await firebaseAdmin
      .firestore()
      .collection(`users/${token.user_id}/missions`)
      .orderBy('completedDate', 'desc')
      .get()

    await Promise.all(
      userMissionResult.docs.map(async (mission) => {
        if (mission.data().completed) {
          completedMissions.push(mission.id)
        } else {
          pendingMissions.push(mission.id)
        }
      })
    )

    const activitiesResult = await firebaseAdmin
      .firestore()
      .collection('activities')
      .where('uid', '==', token.user_id)
      .orderBy('activityDate', 'desc')
      .get()

    let activities = []

    await Promise.all(
      activitiesResult.docs.map(async (activity) => {
        activity.data().activityDate = new Date(activity.data().activityDate)
        // remove all manual activities
        if (!activity.data().isManual) {
          //Create new object with activity data
          const activityClean = activity.data()
          //Add a formated date to activity data
          activityClean.dateFormated = new Date(
            activity.data().activityDate
          ).toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' })
          // Push to activities array
          activities.push(activityClean)
        }
      })
    )

    const MissionsResult = await firebaseAdmin
      .firestore()
      .collection('missions')
      .orderBy('dateEnd', 'asc')
      // .limit(20)
      .get()

    const Missions = {
      missionsActive: [],
      missionsUpcoming: [],
      missionsExpired: [],
      missionsComplete: [],
      missionsCommunity: [],
    }

    await Promise.all(
      MissionsResult.docs.map(async (mission) => {
        // console.log(mission.id)
        let cleanMission = {
          id: mission.id,
          title: mission.data().title || '',
          desc: mission.data().description || '',
          dateStart: mission.data().dateStart || '',
          expiry: mission.data().dateEnd || '',
          thumb: mission.data().image?.thumb || '',
          missionType: mission.data().missionType || '',
          pointsFee: mission.data().pointsFee || '',
          rewardType: mission.data().rewardType || '',
        }
        if (completedMissions.includes(mission.id)) {
          cleanMission.status = 'completed'
          Missions.missionsComplete.push(cleanMission)
        } else if (mission.data().status == 'hidden') {
          cleanMission.status = 'hidden'
        } else if (mission.data().dateEnd < Date.now() / 1000) {
          cleanMission.status = 'expired'
          Missions.missionsExpired.push(cleanMission)
        } else if (mission.data().missionType.includes('community')) {
          const missionRegex = /((\d+_\d+)_\d+)_[A-Z]+/
          cleanMission.series_id = mission.id.match(missionRegex)[2]
          if (pendingMissions.includes(mission.id)) {
            cleanMission.status =
              mission.data().dateStart > Date.now() / 1000
                ? 'upcoming'
                : 'pending'
          } else {
            cleanMission.status = 'inactive'
          }
          Missions.missionsCommunity.push(cleanMission)
        } else if (mission.data().dateStart > Date.now() / 1000) {
          cleanMission.status = 'upcoming'
          Missions.missionsUpcoming.push(cleanMission)
        } else if (mission.data().dateEnd > Date.now() / 1000) {
          let reqsMet = 0

          //Check if each category of requirements has been met
          if (mission.data().requirementsType.includes('activity')) {
            let activityReqs = 0
            let activityReqPromises = []
            //Check if each activity requirement has been met in the array
            mission.data().requirements.activity.forEach(async (req) => {
              activityReqPromises.push(
                new Promise(async function (resolve, reject) {
                  const uniqueDays = new Set()
                  let eligibleDistance = 0
                  let eligibleDuration = 0
                  let eligibleElevation = 0
                  let paceDiffReq = 0
                  let cityPromises = []

                  //Filter user activities array for eligible activities
                  let eligibleActivities = activities.filter(
                    (activity) =>
                      Date.parse(activity.activityDate) / 1000 >=
                        mission.data().dateStart &&
                      Date.parse(activity.activityDate) / 1000 <=
                        mission.data().dateEnd &&
                      activity.activityDistance >= req.distance &&
                      activity.activityElevation >= req.elevation &&
                      activity.activityMovingDuration >= req.duration &&
                      req.type.includes(activity.activityType) &&
                      activity.activityPace >= req.minAvgPace &&
                      activity.activityMaxSpeed >= req.minMaxPace &&
                      activity.activityMovingDuration <= req.maxDuration &&
                      activity.activityDistance <= req.maxDistance
                  )

                  // Check if there's a maximum start-end distance requirement
                  if (req.startEndDist != 0) {
                    eligibleActivities = eligibleActivities.filter(
                      (activity) =>
                        activity.activityStartEndDist <= req.startEndDist
                    )
                  }

                  // Check if there's a PR Requirement
                  if (req.isPR != 0) {
                    eligibleActivities = eligibleActivities.filter(
                      (activity) => activity.activityPrCount >= req.isPR
                    )
                  }

                  // Check if theres a minimum number of athletes required limit
                  if (req.minNumAthletes > 0) {
                    eligibleActivities = eligibleActivities.filter(
                      (activity) =>
                        activity.activityAthleteCount >= req.minNumAthletes
                    )
                  }

                  // Check if there's a Strava Kudos requirement
                  if (req.minKudos > 0) {
                    eligibleActivities = eligibleActivities.filter(
                      (activity) => activity.activityKudosCount >= req.minKudos
                    )
                  }

                  // Check if there's a Strava Kudos requirement
                  if (req.minPhotosCount > 0) {
                    eligibleActivities = eligibleActivities.filter(
                      (activity) =>
                        activity.activityTotalPhotoCount >= req.minPhotosCount
                    )
                  }

                  // if (req.weekdayLimit.length > 0) {
                  //   eligibleActivities = eligibleActivities.filter(
                  //     (activity) => activity.activityKudosCount >= req.minKudos
                  //   )
                  // }

                  //Check if there's a city requirement, if so, do another filter
                  if (req.city != 0) {
                    eligibleActivities.forEach(async (activity) => {
                      req.city.forEach(async (city) => {
                        cityPromises.push(
                          new Promise(async function (resolve, reject) {
                            if (activity.start_lnglat) {
                              if (await isInside(activity.start_lnglat, city)) {
                                activity.eligibleCity = true
                                resolve(true)
                              } else {
                                resolve(false)
                              }
                            }
                            resolve(false)
                          })
                        )
                      })
                    })
                    const cityBoolArray = await Promise.all(cityPromises)
                    eligibleActivities = eligibleActivities.filter(
                      (activity, index) => cityBoolArray[index]
                    )
                  }

                  // With list of eligible activities, add cumulative metrics
                  eligibleActivities.forEach((activity) => {
                    uniqueDays.add(activity.dateFormated)
                    eligibleDistance += activity.activityDistance
                    eligibleDuration += activity.activityMovingDuration
                    eligibleElevation += activity.activityElevation
                  })

                  Date.prototype.addDays = function (days) {
                    var date = new Date(this.valueOf())
                    date.setDate(date.getDate() + days)
                    return date
                  }

                  //Check if there's a streak requirement, if so, do a streak calculation
                  let streak = 1
                  //Then we reduce over the entire list, checking pairwise for the dates to be consecutive
                  const daysStreak = [...uniqueDays].reduce(
                    (maxStreak, start, i, dates) => {
                      const date = new Date(dates[i])
                      const prevDate = date.addDays(-1)
                      const nextDateInArray = new Date(dates[i + 1])
                      if (prevDate.valueOf() == nextDateInArray.valueOf()) {
                        streak += 1
                        if (streak > maxStreak) {
                          maxStreak = streak
                        }
                      } else {
                        streak = 1
                      }
                      return maxStreak
                    },
                    1
                  )

                  let maxApartCount = 0
                  // Check if there's max hours apart requirement
                  if (req.maxHoursApart > 0) {
                    // Look for max consecutive activities within n hours apart
                    let apartCount = 0
                    let prevTime = 0
                    let withinHours = false
                    eligibleActivities.forEach((activity) => {
                      let activityTime = Date.parse(activity.activityDate)
                      withinHours =
                        prevTime - activityTime / 1000 <
                        req.maxHoursApart * 3600
                      if (withinHours) {
                        apartCount++
                      } else {
                        if (apartCount > maxApartCount) {
                          maxApartCount = apartCount
                        }
                        apartCount = 1
                      }
                      prevTime = activityTime / 1000
                    })
                    if (apartCount > maxApartCount) {
                      maxApartCount = apartCount
                    }
                  }

                  //Check if there's a paceDiff array and there are n runs to check
                  if (
                    req.paceDiff.length > 0 &&
                    eligibleActivities.length >= req.paceDiff[0]
                  ) {
                    // grab fastest run in eligible activities, convert to sec/km
                    // grab slowest run in elgible activities, convert to sec/km
                    const sortedActivities = eligibleActivities.sort((a, b) => {
                      return a.activityPace >= b.activityPace ? 1 : -1
                    })

                    const slowestPace = sortedActivities[0].activityPace
                    const fastestPace =
                      sortedActivities.slice(-1)[0].activityPace

                    //if diff is positive then maxDiff, if negative then minDiff (more common is maxDiff)
                    if (
                      req.paceDiff.length > 0 &&
                      eligibleActivities.length >= req.paceDiff[0]
                    ) {
                      //filter and check if at least n runs qualify within set limit
                      let eligibleSlowPaceActivities = sortedActivities.filter(
                        (activity) =>
                          (1 / activity.activityPace) * 1000 >=
                          slowestPace - req.paceDiff[1]
                      )
                      let eligibleFastPaceActivities = sortedActivities.filter(
                        (activity) =>
                          (1 / activity.activityPace) * 1000 <=
                          fastestPace + req.paceDiff[1]
                      )
                      if (
                        eligibleSlowPaceActivities.length >= req.paceDiff[0] ||
                        eligibleFastPaceActivities.length >= req.paceDiff[0]
                      ) {
                        paceDiffReq += 2
                      }
                    } else {
                      //filter and check if at least n runs qualify outside set limit
                      let eligibleSlowPaceActivities = sortedActivities.filter(
                        (activity) =>
                          (1 / activity.activityPace) * 1000 <=
                          slowestPace + req.paceDiff[1]
                      )
                      let eligibleFastPaceActivities = sortedActivities.filter(
                        (activity) =>
                          (1 / activity.activityPace) * 1000 >=
                          fastestPace - req.paceDiff[1]
                      )
                      if (
                        eligibleSlowPaceActivities.length >= req.paceDiff[0] ||
                        eligibleFastPaceActivities.length >= req.paceDiff[0]
                      ) {
                        paceDiffReq += 2
                      }
                    }
                  }

                  if (
                    eligibleActivities.length >= req.frequencyTotal &&
                    eligibleActivities.length <= req.maxFrequency &&
                    uniqueDays.size >= req.frequencyDaily &&
                    eligibleDistance >= req.cumulativeDistance &&
                    eligibleDuration >= req.cumulativeDuration &&
                    eligibleElevation >= req.cumulativeElevation &&
                    daysStreak >= req.frequencyStreak &&
                    (!req.maxHoursApart ||
                      maxApartCount >= req.frequencyTotal) &&
                    paceDiffReq >= req.paceDiff.length
                  ) {
                    activityReqs += 1
                    resolve(true)
                  } else {
                    resolve(false)
                  }
                })
              )
            })

            await Promise.all(activityReqPromises)

            // If all activity reqs have been met, then activity requirement is met
            if (
              activityReqs == mission.data().requirements.activity.length ||
              activityReqs >= mission.data().requirements?.override?.activity
            ) {
              reqsMet += 1
            }
          }

          if (mission.data().requirementsType.includes('profile')) {
            let profileReqs = 0
            // Loop through each profile requirements and confirm it's equal to it's key
            Object.keys(mission.data().requirements.profile).forEach((key) => {
              try {
                if (
                  eval('userResult.data().' + key) ==
                    mission.data().requirements.profile[key] ||
                  eval('userResult.data().' + key).includes(
                    mission.data().requirements.profile[key]
                  )
                ) {
                  profileReqs += 1
                }
              } catch (e) {
                // console.log('mission error.')
              }
            })

            // If all profile reqs have been met, then profile requirement is met
            if (
              profileReqs ==
                Object.keys(mission.data().requirements.profile).length ||
              profileReqs >= mission.data().requirements?.override?.profile
            ) {
              reqsMet += 1
            }
          }

          // Check if any collectible reqs need to be met
          if (mission.data().requirementsType.includes('collectible')) {
            const userCollectiblesResult = await firebaseAdmin
              .firestore()
              .collection(`users/${token.user_id}/collectibles`)
              .get()

            let collectibleReqs = 0
            let collectibleReqPromises = []
            // Loop through each collectible requirement and confirm it's equal to it's key

            mission.data().requirements.collectible.forEach((requirement) => {
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
                mission.data().requirements.collectible.length ||
              collectibleReqs >=
                mission.data().requirements?.override?.collectible
            ) {
              reqsMet += 1
            }
          }

          if (mission.data().requirementsType.includes('social')) {
            // console.log('includes social')
          }

          if (mission.data().requirementsType.includes('photo')) {
            // console.log('includes photo')
          }

          //Check if user has completed the mission
          if (mission.data().requirementsType.length == reqsMet) {
            cleanMission.status = 'active'
          } else {
            cleanMission.status = 'pending'
          }

          Missions.missionsActive.push(cleanMission)
        }
      })
    )
    Missions.missionsActive.sort((a, b) => (a.dateStart > b.dateStart ? 1 : -1))

    return {uid: token.user_id, missions: Missions}
  } catch (err) {
    console.log(err)
    return {}
  }
}