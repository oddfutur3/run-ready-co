import firebaseAdmin from "firebase-admin";

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

export { firebaseAdmin };
