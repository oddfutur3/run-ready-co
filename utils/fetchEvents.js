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

async function getClubEvents(RunClubId = " ") {
  let writeStream = fs.createWriteStream(
    `utils/usersStatsPull/${process.env.firebase_project_id}_pull_${RunClubId}_events.csv`
  );

  var headers = [
    "runClub",
    "event_name",
    "event_date",
    "event_date_clean",
    "members_attended_count",
    "qrURL",
  ];

  writeStream.write(headers.join(",") + "\n", () => {});

  const EventResult = await firebaseAdmin
    .firestore()
    .collection("runClubs")
    .doc(RunClubId)
    .collection("events")
    .get();

  let runClubDoc = await firebaseAdmin
    .firestore()
    .collection("runClubs")
    .doc(RunClubId)
    .get();

  await Promise.all(
    EventResult.docs.map(async (event) => {
      let code = [];
      let docData = event.data();
      let eventDateClean = new Date(docData.event_date * 1000);
      console.log(eventDateClean);
      console.log(runClubDoc.data().name);

      code.push(runClubDoc.data().name);
      code.push(docData.event_name);
      code.push(docData.event_date);
      code.push(eventDateClean);
      code.push(docData.members_attended_count);
      code.push(docData.qrAttendURL);

      writeStream.write(code.join(",") + "\n", () => {
        // a line was written to stream
      });
    })
  );

  writeStream.end();

  writeStream
    .on("finish", () => {
      console.log("finshed writing file");
    })
    .on("error", (err) => {
      console.log(err);
    });
}

async function getClubEvents_Attendees(RunClubId = " ") {
  let writeStream = fs.createWriteStream(
    `utils/usersStatsPull/${process.env.firebase_project_id}_pull_${RunClubId}_attendees.csv`
  );

  var headers = [
    "runClub",
    "event_name",
    "event_date",
    "event_date_clean",
    "member_attended",
    "email",
    "accountCreated",
  ];

  writeStream.write(headers.join(",") + "\n", () => {});

  const EventResult = await firebaseAdmin
    .firestore()
    .collection("runClubs")
    .doc(RunClubId)
    .collection("events")
    .get();

  let runClubDoc = await firebaseAdmin
    .firestore()
    .collection("runClubs")
    .doc(RunClubId)
    .get();

  const promisesEvent = [];

  await Promise.all(
    EventResult.docs.map(async (event) => {
      promisesEvent.push(
        new Promise(async function (resolve, reject) {
          const promises = [];
          let docData = event.data();

          docData.members_attended.forEach(async (member) => {
            promises.push(
              new Promise(async function (resolve, reject) {
                const collectionRef = db.collection("users").doc(member);

                const collectionGet = await collectionRef.get();

                let code = [];
                let docDataMember = collectionGet.data();

                let eventDateClean = new Date(docData.event_date * 1000);
                // console.log(eventDateClean);
                console.log(
                  runClubDoc.data().name +
                    " | " +
                    member +
                    " | " +
                    docDataMember.email
                );

                code.push(runClubDoc.data().name);
                code.push(docData.event_name);
                code.push(docData.event_date);
                code.push(eventDateClean);
                code.push(member);
                code.push(docDataMember.email);
                code.push(docDataMember.accountCreated);

                writeStream.write(code.join(",") + "\n", () => {
                  // a line was written to stream
                });

                resolve(true);
              })
            );
          });
          await Promise.all(promises).then(() => {
            resolve(true);
          });
        })
      );
    })
  );

  await Promise.all(promisesEvent).then((values) => {
    writeStream.end();

    writeStream
      .on("finish", () => {
        console.log("finshed writing file");
      })
      .on("error", (err) => {
        console.log(err);
      });
  });

  // writeStream.end();

  // writeStream
  //   .on("finish", () => {
  //     console.log("finshed writing file");
  //   })
  //   .on("error", (err) => {
  //     console.log(err);
  //   });
}

// getClubEvents("flight-crew-vancouver");
// getClubEvents_Attendees("flight-crew-vancouver");
