// Import the functions you need from the SDKs you need
import { firebase, getApp, getApps, initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  ReCaptchaV3Provider,
} from 'firebase/app-check'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// const appCheck = initializeAppCheck(app, {
//   provider: new ReCaptchaEnterpriseProvider(
//     process.env.RECAPTCHA_ENTERPRISE_KEY
//   ),
//   provider: new ReCaptchaV3Provider('6LdxgnsiAAAAAIssecvWbp6ITJVj4ODBUAC-jyGo'),
//   isTokenAutoRefreshEnabled: true,
// })
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
export const functions = getFunctions()

// ONLY TOGGLE WHEN TESTING CLOUD FUNCTIONS LOCALLY
// connectFunctionsEmulator(functions, 'localhost', 5001)
