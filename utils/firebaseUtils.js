const firebaseAdmin = require("firebase-admin");
const { FieldValue } = require("firebase-admin/firestore");
require("dotenv").config();
const prompt = require("prompt-sync")({ sigint: true });
var fs = require("fs");
const { parse } = require("csv-parse");
const { faLastfmSquare } = require("@fortawesome/free-brands-svg-icons");
var qr = require("qr-image");
const { v1: uuidv1, v4: uuidv4 } = require("uuid");
var shortid = require("shortid");

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.firebase_private_key
        ? process.env.firebase_private_key.replace(/\\n/gm, "\n")
        : undefined,
      clientEmail: process.env.firebase_client_email,
      projectId: process.env.firebase_project_id,
    }),
  });
}

const db = firebaseAdmin.firestore();

async function addFieldsToShoeDoc() {
  const shoesRef = db.collection("shoes");
  const shoesColl = await shoesRef.get();

  shoesColl.forEach(async (doc) => {
    const data = { "marathon-yes": 0, "marathon-no": 0 };
    const res = await shoesRef.doc(doc.id).set({ ...data }, { merge: true });
  });
}

async function addRolesToUsers(uids, rolesArray) {
  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to add roles: ${rolesArray} to ${uids} on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Add roles aborted.`);
      return;
    }
  }

  // await db.collection('users').doc(`${uid}`).set(
  //   {
  //     roles: []
  //   }
  // ,{merge: true})

  uids.forEach(
    async (uid) =>
      await db
        .collection("users")
        .doc(`${uid}`)
        .update({
          roles: FieldValue.arrayUnion(...rolesArray),
        })
  );
}

async function initializeUserFields(field, value) {
  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to initialize field: ${field} for all users on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Initialize field aborted.`);
      return;
    }
  }

  const db = firebaseAdmin.firestore();
  let allUsers = await db.collection("users").get();

  allUsers.forEach(async (doc) => {
    await doc.ref.set(
      {
        [field]: value,
      },
      { merge: true }
    );
  });
}

async function importExercises(fileName) {
  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to import exercises to ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Importing exercises aborted.`);
      return;
    }
  }

  function randomString(length, chars) {
    let string = "";
    for (let i = length; i > 0; --i) {
      string += chars[Math.floor(Math.random() * chars.length)];
    }
    return string;
  }

  const db = firebaseAdmin.firestore();

  // const exerciseColl = await db.collection('exercises')

  const columnsToKeys = [
    (data, value) => (data["exercise-name"] = value),
    (data, value) => (data["folderID"] = encodeURIComponent(value)),
    (data, value) => (data["video-name"] = value),
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "foot"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "ankle"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "knee"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "hip"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "pelvis"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "back"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "shoulder"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "elbow"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "wrist"];
      }
    },
    (data, value) => {
      if (value == "Y") {
        data["body-part"] = [...data["body-part"], "hand"];
      }
    },
    (data, value) =>
      (data["primary"] =
        value == "Absorb"
          ? ["Load"]
          : value == "Bounce"
          ? ["Launch"]
          : value == "Absorb + Bounce"
          ? ["Load", "Launch"]
          : []),
    (data, value) =>
      (data["secondary"] =
        value == "Mobility"
          ? "Creation"
          : value == "Strength"
          ? "Control"
          : value == "Functional"
          ? "Capacity"
          : ""),
    (data, value) => (data["tertiary"] = value),
    (data, value) => (data["position"] = value),
    (data, value) => (data["targetP"] = value),
    (data, value) => (data["targetS"] = value),
    (data, value) => (data["plane-of-movement"] = value),
    (data, value) => (data["uni-bi-lateral"] = value),
    (data, value) => (data["equipment"] = value),
    (data, value) => (data["difficulty"] = value),
    (data, value) => (data["stability"] = value),
    (data, value) => (data["start-position"] = value),
    (data, value) => (data["movement"] = value),
    (data, value) => (data["details"] = value),
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
    (data, value) => {},
  ];

  let exercises = fs
    .createReadStream(`utils/Exercises/` + fileName)
    .pipe(parse({ delimiter: ",", from_line: 3 }))
    .on("data", async function (row) {
      const data = {};
      data["body-part"] = [];
      row.forEach((value, i) => {
        if (value) {
          columnsToKeys[i](data, value);
        }
      });

      const exerciseID = data.folderID;
      delete data.folderID;

      data.nonce = randomString(
        16,
        "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );

      await db.collection("exercises").doc(`${exerciseID}`).set(data);

      console.log(data);
    })
    .on("error", function (error) {
      console.log(error.message);
    })
    .on("end", function () {
      console.log("complete");
    });
}

async function createRunClub(id) {
  const RunClubId = id; // Format: MMYY_ID_SUBID_BM, B|E|S for Base, El, Sp, ID is num in list, used to link RunClubs,

  const db = firebaseAdmin.firestore();
  const docRef = db.collection("runClubs").doc(RunClubId);

  const docCheck = await docRef.get();

  if (docCheck.exists) {
    console.log(`Existing RunClub ${RunClubId} found, about to overwrite.`);
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating RunClub ${RunClubId} aborted.`);
      return;
    }
  }

  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to create ${RunClubId} on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating RunClub ${RunClubId} aborted.`);
      return;
    }
  }

  const res = await docRef.set({
    isParentClub: false, // only set to True if expected to have children clubs, will not show up on run clubs
    childrenClubs: [""], // takes in array ["slowpokes-toronto"]
    url: RunClubId,
    name: "November Project Vancouver",
    description: `We are a Free, Open to all, Fitness Group!`,
    tagline: `We are a Free, Open to all, Fitness Group!`,
    status: "active", //['active','hidden']
    city: "Vancouver", // set as primary location
    province: "ON", // set as primary location
    country: "Canada", // set as primary location
    default_timezone: "America/Vancouver", // timezone options available here: https://nodatime.org/TimeZones ["America/Toronto", "America/Vancouver", "America/Winnipeg", "America/Whitehorse", "America/Moncton"]
    club_type: "runClub",
    date_created: Date.now() / 1000,
    is_run_ready: false,
    private: false, //set to true if parent
    members: [],
    member_count: 0,
    // metadata: {
    //   difficulty: ["medium"],
    // },
    cover_photo: "/images/run-club-banner.png",
    profile_medium:
      "https://firebasestorage.googleapis.com/v0/b/raya-production.appspot.com/o/RunClubs%2Fnovember-project-vancouver%2FNP%20Vancouver%20Logo.jpg?alt=media&token=12e775cf-38e0-4c79-9a62-e8f691976c1f",
    profile_small:
      "https://firebasestorage.googleapis.com/v0/b/raya-production.appspot.com/o/RunClubs%2Fnovember-project-vancouver%2FNP%20Vancouver%20Logo.jpg?alt=media&token=12e775cf-38e0-4c79-9a62-e8f691976c1f",
  });
  console.log(
    `Created RunClub: ${RunClubId} on ${process.env.firebase_project_id}`
  );
}

async function createEvent(RunClubId = " ") {
  const EventId = shortid.generate();

  const db = firebaseAdmin.firestore();

  let docRef = [];
  let runClubName = "";
  let runClubTimezone = "";
  let runClubImage = "";
  let runClubRunReady = "";
  let runClubRef = [];

  if (RunClubId == " ") {
    docRef = db.collection("events").doc(EventId);
    runClubRef = db.collection("runClubs").doc(RunClubId);
  } else if (RunClubId) {
    docRef = db
      .collection("runClubs")
      .doc(RunClubId)
      .collection("events")
      .doc(EventId);

    runClubRef = db.collection("runClubs").doc(RunClubId);
  } else {
    docRef = db.collection("events").doc(EventId);
  }

  const docCheck = await docRef.get();
  const runClubCheck = await runClubRef.get();
  let docRef2 = await db
    .collectionGroup("events")
    .where("url", "==", EventId)
    .get();

  if (docCheck.exists || docRef2.size > 0) {
    console.log(`Existing Event ${EventId} found, about to overwrite.`);
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating Event ${EventId} aborted.`);
      return;
    }
  }

  if (runClubCheck.exists) {
    runClubName = runClubCheck.data().name;
    runClubTimezone = runClubCheck.data().default_timezone;
    runClubImage = runClubCheck.data().profile_small;
    runClubRunReady = runClubCheck.data().is_run_ready;

    console.log(`Creating event for ${runClubName}`);
  } else {
    console.log(`${RunClubId} not found, about to create a RAYA event.`);
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      runClubName = "RAYA";
      console.log(`Creating Event ${EventId} aborted.`);
      return;
    }
  }

  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to create ${EventId} on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating Event ${EventId} aborted.`);
      return;
    } else {
      var siteUrl = `runasyouare.co/attend/${EventId}`;
    }
  } else {
    var siteUrl = `staging.runasyouare.co/attend/${EventId}`;
  }

  try {
    var qrURL = await createQR(siteUrl, `Events/qr-codes/${EventId}`);
  } catch (e) {
    console.log(e);
  }

  const res = await docRef.set({
    url: EventId,
    id: EventId,
    qrAttendURL: qrURL,
    event_name:
      "RunAsYouAre Shakeout Run hosted by Flight Crew Run Club + Slowpokes",
    status: "hidden", //['active','hidden']
    city: "Vancouver",
    province: "BC",
    country: "Canada",
    address: "RunAsYouAre - 2033 W 4th Ave",
    event_type: ["social"], // ['run', 'marketing', 'social', 'education']
    event_date: 1714834800,
    date_created: Math.floor(Date.now() / 1000),
    default_timezone: runClubTimezone, // uses default or override
    is_run_ready: runClubRunReady, // uses runClub runReady unless override
    members_only: false,
    private: false,
    registration_start: 1713805200,
    members_registered: [],
    members_registered_count: 0,
    members_attended: [],
    members_attended_count: 0,
    max_users: 10, // default to 99999999 for unlimited,
    programs: [], // ["AZC4qypva", "dSfQtsNN5"]
    cover_photo: runClubImage, // uses runClub logo unless override
    profile_medium: runClubImage, // uses runClub logo unless override
    profile_small: runClubImage, // uses runClub logo unless override
    metadata: {
      // runClubName: runClubName,
      // difficulty: ["easy"],
      // description: ``,
      // distance: [5000], // Accepts array to be split by ", " Shows in km
      // duration: 3600,
      // elevation: 0,
      // minAvgPace: "5k: 6:00/km - 6:30/km Various: 4:30/km - 5:00/km", //Can override by making a string ["All", "5 min/km"]
    },
  });
  console.log(
    `Created Event: ${EventId} on ${process.env.firebase_project_id}`
  );
}

export async function createQR(urlRef, storagePath) {
  return new Promise(async function (resolve, reject) {
    var qr_png = qr.imageSync(urlRef);

    var bucket, url

    if (process.env.firebase_project_id == "raya-production") {
      bucket = firebaseAdmin
        .storage()
        .bucket("gs://raya-production.appspot.com");
    } else {
      bucket = firebaseAdmin.storage().bucket("gs://raya-sandbox.appspot.com");
    }

    const imageRef = bucket.file(storagePath);

    const uuid = uuidv4();

    await imageRef
      .save(qr_png, {
        metadata: {
          contentType: "image/png",
          cacheControl: "public, max-age=31536000",
          firebaseStorageDownloadTokens: uuid,
        },
      })
      .then(() => {
        url =
          "https://firebasestorage.googleapis.com/v0/b/" +
          bucket.name +
          "/o/" +
          encodeURIComponent(imageRef.name) +
          "?alt=media&token=" +
          uuid;
        console.log("file uploaded at:" + url);
        resolve(url);
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        reject();
      });
  });
}

async function makeId(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
}

async function createProgram() {
  const ProgramId = shortid.generate();

  const db = firebaseAdmin.firestore();

  let docRef = [];

  docRef = db.collection("programs").doc(ProgramId);

  const docCheck = await docRef.get();

  if (docCheck.exists) {
    console.log(`Existing Program ${ProgramId} found, about to overwrite.`);
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating Program ${ProgramId} aborted.`);
      return;
    }
  }

  let isUniqueCode = 0;
  let ProgramCode = "";

  while (isUniqueCode == 0) {
    ProgramCode = await makeId(5);

    console.log(ProgramCode);

    let docCodeRef = await db
      .collection("programs")
      .where("code", "==", ProgramCode.toUpperCase())
      .get();

    if (docCodeRef.docs.length > 0) {
      isUniqueCode = 0;
    } else {
      isUniqueCode = 1;
    }
  }

  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to create ${ProgramId} on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Creating Program ${ProgramId} aborted.`);
      return;
    } else {
      var siteUrl = `runasyouare.co/runready/programs/redeem/${ProgramCode}`;
    }
  } else {
    var siteUrl = `staging.runasyouare.co/runready/programs/redeem/${ProgramCode}`;
  }

  try {
    var qrURL = await createQR(siteUrl, `Programs/qr-codes/${ProgramId}`);
  } catch (e) {
    console.log(e);
  }

  const res = await docRef.set({
    url: ProgramId,
    name: "RunAsYouAre + Slowpokes: 04/16/24",
    description: "",
    code: ProgramCode,
    qrRedeemURL: qrURL,
    date_created: Math.floor(Date.now() / 1000),
    is_run_ready: false,
    members_only: false,
    private: false,
    sets: [
      {
        name: "Pre-Run Warm Up",
        description: "",
        exercises: ["0187", "0134", "0174", "0072"],
      },
      {
        name: "Post-Run Recovery",
        description: "",
        exercises: ["0104", "0100", "0008", "0197"],
      },
    ],
    exercise_count: 8,
    thumbnail_photo: "/images/exercise-program-thumbnail.png",
  });
  console.log(
    `Created Program: ${ProgramId} on ${process.env.firebase_project_id}`
  );
}

async function updateShoesABCategory() {
  if (process.env.firebase_project_id == "raya-production") {
    console.log(
      `About to update shoes' Absorb/Bounce category on ${process.env.firebase_project_id}`
    );
    const confirmSelect = prompt("Continue? (Y/N): ");

    if (confirmSelect != "Y") {
      console.log(`Update shoes A/B category aborted.`);
      return;
    }
  }

  const shoesColl = await firebaseAdmin.firestore().collection("shoes").get();

  shoesColl.forEach((shoe) => {
    const shoeData = shoe.data();
    const deltaScore = Math.abs(shoeData?.load - shoeData?.launch);
    const abCategory = [];

    console.log(deltaScore);

    if (deltaScore || deltaScore === 0) {
      if (deltaScore <= 2) {
        abCategory.push("Balanced");
      }

      if (shoeData.load > 5 && shoeData.load > shoeData.launch) {
        abCategory.push("Absorb");
      }
      if (shoeData.launch > 5 && shoeData.launch > shoeData.load) {
        abCategory.push("Bounce");
      }

      if (abCategory.length) {
        shoe.ref.update({
          delta: Math.abs(deltaScore),
          abCategory: abCategory,
        });
      }
    }
  });
}

async function unlockUserProgram(uid, programArr) {
  await Promise.all(
    programArr.map(async (program) => {
      console.log(program);

      let UserAccessCheck = await firebaseAdmin
        .firestore()
        .collection(`users/${uid}/programs`)
        .doc(program)
        // .orderBy('dateEnd', 'asc')
        // .limit(20)
        .get();

      if (UserAccessCheck.data()) {
        // updated latest Unlock
        await UserAccessCheck.ref.update({
          latestUnlock: Math.floor(Date.now() / 1000, 0),
        });
      } else {
        // Add to programs
        await UserAccessCheck.ref.set({
          firstUnlock: Math.floor(Date.now() / 1000, 0),
          latestUnlock: Math.floor(Date.now() / 1000, 0),
        });
      }
    })
  );
}

// addFieldsToShoeDoc()
// addRolesToUsers(['G1o84S8sftdzIamBOWzFIUmR5vG3','SGt6XuYjK9gLYwuV1R0Vnhj4pFl2'], ['Admin'])
// initializeUserFields('roles', [])
// importExercises("Exercise Master - Master List (4).csv");
// createRunClub("november-project-vancouver");
// createEvent();
// createQR(
//   "runasyouare.co/runready/programs/redeem/XIDIW",
//   "Programs/dSfQtsNN5.png"
// );
// createProgram();
// updateShoesABCategory()
// unlockUserProgram("el4TyM7u4wMjwkHUWd2TvHllRjI2", [
//   "XRCEDzA6W",
//   "50zb7YULE",
//   "GBup1vz9W",
//   "BA0RpC1IX",
//   "PdTEvwPmG",
// ]);
