'use server'

import { cookies } from "next/headers";
import { firebaseAdmin } from "@/firebaseAdmin";
import { exerciseCache } from "@/utils/cacheFetch";
// import { User } from "discord.js";

// export async function fetchExercises() {
//   try {

//      let ExercisesResult = await exerciseCache()


//     // const Exercises = {
//     //   exercisesAll: [],
//     // };

//     // await Promise.all(
//     //   ExercisesResult.docs.map(async (exercise) => {
//     //     // console.log(mission.id)
//     //     let cleanExercise = {
//     //       id: exercise.id,
//     //       ...exercise.data(),
//     //     };

//     //     Exercises.exercisesAll.push(cleanExercise);
//     //   })
//     // );

//     return { exercises: ExercisesResult };
//   } catch (err) {
//     console.log(err);
//     return {};
//   }
// }


export async function fetchFilteredExercises(startIndex, quantity, filters,query) {
  try {

      let exercisesData = await exerciseCache()

      
      exercisesData = exercisesData.filter(exercise => {
        
        let match = true
        for (const field in filters) {
          if (Array.isArray(filters[field]) && filters[field].every(value => value.value.trim() !== exercise[field].trim())) {
            match = false
            break
          }
        }
        if (query) {
          let queryMatch = false
          for (const field in exercise) {
            if (typeof exercise[field] == "string" && exercise[field].toLowerCase().includes(query.toLowerCase())) {
              queryMatch = true
              break
            }
          }
          if (!queryMatch) {
            match = false
          }
        }
        return match

      })
            
            
    exercisesData = exercisesData.slice(startIndex, startIndex + quantity)

    return exercisesData
  } catch (err) {
    console.log(err);
    return [];
  }
}

export async function fetchExercise(exerciseID) {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    let exercise = null;

    const ExerciseResult = await firebaseAdmin
      .firestore()
      .doc(`exercises/${exerciseID}`)
      // .orderBy('dateEnd', 'asc')
      // .limit(20)
      .get();

    if (ExerciseResult.exists) {
      exercise = { id: exerciseID, ...ExerciseResult.data() };
    }
    // console.log(exercise)

    return exercise;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function fetchExerciseAssets(exerciseID) {
  try {

    let exercise = null;

    const ExerciseResult = await firebaseAdmin
      .firestore()
      .doc(`exercises/${exerciseID}`)
      .get();

    if (ExerciseResult.exists) {
      const exerciseData = ExerciseResult.data()
      exercise = { videos: exerciseData.videos, images: exerciseData.images,}
    }
    // console.log(exercise)

    return exercise;
  } catch (err) {
    console.log(err);
    return {};
  }
}


export async function fetchUserPrograms() {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    let ProgramsResult = await firebaseAdmin
      .firestore()
      .collection(`users/${token.user_id}/programs`)
      .orderBy("latestUnlock", "desc")
      // .limit(20)
      .get();

    const Programs = {
      programsAll: [],
    };

    await Promise.all(
      ProgramsResult.docs.map(async (program) => {
        // console.log(program.id);
        let cleanProgram = {
          id: program.id,
          ...program.data(),
        };

        let programResult = await firebaseAdmin
          .firestore()
          .collection(`programs`)
          .doc(`${program.id}`)
          .get();

        let exercisesAll = [];

        await Promise.all(
          programResult.data()["sets"].map(async (set) => {
            await Promise.all(
              set["exercises"].map(async (exercise) => {
                let exerciseResult = await firebaseAdmin
                  .firestore()
                  .collection(`exercises`)
                  .doc(`${exercise}`)
                  .get();

                exercisesAll.push(exercise);
                // console.log(exerciseResult.data());
              })
            );
          })
        );

        cleanProgram["exercises"] = exercisesAll;
        cleanProgram["name"] = programResult.data()["name"];
        cleanProgram["url"] = programResult.data()["url"];
        cleanProgram["exercise_count"] = programResult.data()["exercise_count"];
        cleanProgram["thumbnail_photo"] =
          programResult.data()["thumbnail_photo"];
        // console.log(programResult.data());

        Programs.programsAll.push(cleanProgram);
      })
    );

    return { programs: Programs };
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function fetchUserProgram(programID) {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    let ProgramsResult = await firebaseAdmin
      .firestore()
      .collection(`programs`)
      .where("url", "==", programID)
      // .orderBy('dateEnd', 'asc')
      .limit(1)
      .get();

    if (ProgramsResult.docs.length == 0) {
      throw new Error("Program does not exist");
    }

    const Programs = {
      programsAll: [],
    };

    await Promise.all(
      ProgramsResult.docs.map(async (program) => {
        // console.log(program.id);
        let cleanProgram = {
          id: program.id,
          ...program.data(),
        };

        let exercisesAll = [];

        // await Promise.all(
        //   program.data()["sets"].map(async (set) => {
        //     let setExercises = [];
        //     await Promise.all(
        //       set["exercises"].map(async (exercise) => {
        //         let exerciseResult = await firebaseAdmin
        //           .firestore()
        //           .collection(`exercises`)
        //           .doc(`${exercise}`)
        //           .get();

        //         setExercises.push(exerciseResult.data());
        //         // console.log(exerciseResult.data());
        //       })
        //     );
        //     exercisesAll.push(setExercises);
        //   })
        // );

        Programs.programsAll.push(cleanProgram);
      })
    );

    let UserAccessCheck = await firebaseAdmin
      .firestore()
      .collection(`users/${token.user_id}/programs`)
      .doc(Programs.programsAll[0].id)
      // .orderBy('dateEnd', 'asc')
      // .limit(20)
      .get();

    if (!UserAccessCheck.data()) {
      throw new Error("no user access found");
    }

    return { programs: Programs };
  } catch (err) {
    console.log(err);
    if (err == "Error: Program does not exist") {
      throw new Error("no program url found");
    } else if (err == "Error: no user access found") {
      throw new Error("no user access found");
    } else if (
      (err =
        "FirebaseAuthError: Firebase ID token has expired. Get a fresh ID token from your client app and try again (auth/id-token-expired). See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token.")
    ) {
      throw new Error("firebase auth error");
    }
    return {};
  }
}

export async function fetchSetExercises(exerciseArray = []) {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    // console.log(exerciseArray);

    // const Exercises = {
    //   exercisesAll: [],
    // };

    const exercisesAll = await Promise.all(
      exerciseArray.map(async (exercise) => {
        // console.log(exercise);
        let exerciseData = {};
        exerciseData = await fetchExercise(exercise);

        exerciseData["id"] = exercise;

        // let cleanExercise = {
        //   id: exercise,
        //   exerciseData,
        // };
        // console.log(exerciseData);
        return exerciseData;
        // Exercises.exercisesAll.push(exerciseData);
      })
    );

    const Exercises = {
      exercisesAll,
    };

    // console.log(Exercises.exercisesAll);

    return { exercises: Exercises };
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function fetchDailyExercises() {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    let DailyExerciseResult = await firebaseAdmin
      .firestore()
      .collection("users")
      .doc(`${token.uid}`)
      .collection("dailyExercises")
      .limit(1)
      .orderBy("date_created", "desc")
      .get();

    const Exercises = {
      exercisesDaily: [],
    };

    await Promise.all(
      DailyExerciseResult.docs.map(async (exercise) => {
        // console.log(mission.id)
        let cleanExercise = {
          id: exercise.id,
          exercises: [...exercise.data().exercises],
        };

        Exercises.exercisesDaily.push(cleanExercise);
      })
    );

    // console.log(Exercises)

    return { exercises: Exercises };
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function fetchShoeRecs(uid) {
  try {
    let ShoeRecsResult = await firebaseAdmin
      .firestore()
      .collection("users")
      .doc(`${uid}`)
      .collection("shoeRecs")
      .limit(1)
      .orderBy("date_created", "desc")
      .get();

    const ShoeRecs = {
      shoeRecsRecent: [],
    };

    await Promise.all(
      ShoeRecsResult.docs.map(async (shoeRec) => {
        let cleanShoeRec = {
          id: shoeRec.id,
          ...shoeRec.data(),
        };

        ShoeRecs.shoeRecsRecent.push(cleanShoeRec);
      })
    );

    return ShoeRecs.shoeRecsRecent;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function redeemProgram(code) {
  try {
    //validate auth user
    const cookiesLogin = (await cookies()).get("token");
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);

    // console.log(code);

    const ProgramsResult = await firebaseAdmin
      .firestore()
      .collectionGroup("programs")
      .where("code", "==", code.toUpperCase())
      .get();

    let programArray = [];

    if (ProgramsResult.docs.length == 0) {
      programArray.push({
        isRedeemed: false,
      });
      throw new Error("Program does not exist");
    }

    await Promise.all(
      ProgramsResult.docs.map(async (program) => {
        let cleanProgram = {
          id: program.id,
          ...program.data(),
        };

        // Check to see if user already has access to program
        let userProgramDoc = await firebaseAdmin
          .firestore()
          .collection(`users/${token.user_id}/programs`)
          .doc(program.id)
          .get();

        if (userProgramDoc.exists) {
          // console.log("user is part of runClub");
          cleanProgram["isRedeemed"] = true;
          // set status to attend
          await userProgramDoc.ref.update({
            latestUnlock: Math.floor(Date.now() / 1000),
          });

          programArray.push(cleanProgram);
          return { programStatus: programArray };
        } else {
          await userProgramDoc.ref.set({
            firstUnlock: Math.floor(Date.now() / 1000, 0),
            latestUnlock: Math.floor(Date.now() / 1000, 0),
          });
          cleanProgram["isRedeemed"] = true;
          programArray.push(cleanProgram);
        }
      })
    );
    // unlock assigned program

    return { programStatus: programArray };
  } catch (err) {
    console.log(err);
    if (err == "Error: Program does not exist") {
      console.log("here");
      throw new Error("no program found");
    } else if (
      err ==
      "FirebaseAuthError: Firebase ID token has expired. Get a fresh ID token from your client app and try again (auth/id-token-expired). See https://firebase.google.com/docs/auth/admin/verify-id-tokens for details on how to retrieve an ID token."
    ) {
      throw new Error("firebase auth error");
    } else if (err == "Error: user already redeemed") {
      throw new Error("user already redeemed");
    }
    return {};
  }
}
