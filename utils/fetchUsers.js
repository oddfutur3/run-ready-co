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

async function unlockFirstEvent() {
  let writeStream = fs.createWriteStream(
    `utils/usersStatsPull/${process.env.firebase_project_id}_pull_first_event.csv`
  );

  var headers = [
    "email",
    "uid",
    "accountCreated",
    "emailVerified",
    "joinedClub",
    "joinedEvent",
  ];

  writeStream.write(headers.join(",") + "\n", () => {});

  const EventResult = await firebaseAdmin
    .firestore()
    .collectionGroup("events")
    .where("id", "==", "wPLu7TuzX")
    .get();

  let runClubDoc = await firebaseAdmin
    .firestore()
    .collection("runClubs")
    .doc("slowpokes-vancouver")
    .get();

  await Promise.all(
    EventResult.docs.map(async (event) => {
      console.log(event.data());
      console.log(runClubDoc.data());

      const collectionRef = db
        .collection("users")
        .where("accountCreated", ">=", 1705901086)
        .where("accountCreated", "<=", 1706246686);

      const collectionGet = await collectionRef.get();
      const promises = [];

      collectionGet.forEach(async (doc) => {
        promises.push(
          new Promise(async function (resolve, reject) {
            let code = [];
            let docData = doc.data();

            code.push(docData.email);
            code.push(docData.uid);
            code.push(docData.accountCreated);
            code.push(docData.emailVerified);

            if (event.data().members_attended.includes(docData.uid)) {
              // already in event AND runClub
              code.push(1);
              code.push(1);
              writeStream.write(code.join(",") + "\n", () => {
                // a line was written to stream
              });
              resolve(true);
            } else {
              // join user into event
              await event.ref.update({
                members_attended: firebaseAdmin.firestore.FieldValue.arrayUnion(
                  docData.uid
                ),
                members_attended_count:
                  firebaseAdmin.firestore.FieldValue.increment(1),
              });
              // unlock assigned program
              await Promise.all(
                event.data().programs.map(async (program) => {
                  //   console.log(program);

                  // Check if user already has access
                  let UserAccessCheck = await firebaseAdmin
                    .firestore()
                    .collection(`users/${docData.uid}/programs`)
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

              if (runClubDoc.data().members.includes(docData.uid)) {
                // user in runClub not event
                code.push(1);
                code.push(0);
                writeStream.write(code.join(",") + "\n", () => {
                  // a line was written to stream
                });
                resolve(true);
              } else {
                // user not in runClub or event
                code.push(0);
                code.push(0);
                // Check if user already has access
                let UserRunClubCheck = await firebaseAdmin
                  .firestore()
                  .collection(`users/${docData.uid}/runClubs`)
                  .doc("slowpokes-vancouver")
                  // .orderBy('dateEnd', 'asc')
                  // .limit(20)
                  .get();

                await UserRunClubCheck.ref.set({
                  joinDate: Math.floor(Date.now() / 1000, 0),
                  roles: ["member"],
                });

                await runClubDoc.ref.update({
                  members: firebaseAdmin.firestore.FieldValue.arrayUnion(
                    docData.uid
                  ),
                  member_count: firebaseAdmin.firestore.FieldValue.increment(1),
                });
                writeStream.write(code.join(",") + "\n", () => {
                  // a line was written to stream
                });
                resolve(true);
              }
            }
          })
        );
      });

      await Promise.all(promises).then((values) => {
        writeStream.end();

        writeStream
          .on("finish", () => {
            console.log("finshed writing file");
          })
          .on("error", (err) => {
            console.log(err);
          });
      });
    })
  );

  //   let writeStream = fs.createWriteStream(
  //     `utils/usersStatsPull/${process.env.firebase_project_id}_pull_${Math.floor(
  //       Date.now() / 1000
  //     )}.csv`
  //   );
}

// unlockFirstEvent();
