import { redirect } from "next/navigation";
import { firebaseAdmin } from "@/firebaseAdmin";
import { cookies } from "next/headers";
import Home from "./LandingpPage";

export default async function DashboardWrapper() {
  //validate auth user
  const cookiesLogin = (await cookies()).get("__session");
  let userDoc = undefined;
  try {
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);
    userDoc = await firebaseAdmin
      .firestore()
      .doc(`users/${token.user_id}`)
      .get();
  } catch (err) {
    console.log(err);
    // redirect(`/?redirect=announcements`);
  }

  // console.log(userDoc.data().roles);
  const roles = userDoc?.data().roles || [];
  if (!roles.includes("Admin") && !roles.includes("Retail") && !roles.includes("RunReady") && !roles.includes("Community")) {
    redirect("https://staging.runasyouare.co/login");
  }

  return <Home></Home>;
}
