import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  resendSignUpCode,
  autoSignIn,
} from "aws-amplify/auth";

export async function handleSignUp({
  username,
  password,
  email,
  phone_number,
}) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          // phone_number // E.164 number convention
        },
        // optional
        autoSignIn: true, // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      },
    });

    console.log(userId);
  } catch (error) {
    console.log("error signing up:", error);
    throw error;
  }
}

export async function handleSignUpConfirmation({ username, confirmationCode }) {
  try {
    const { isSignUpComplete, nextStep } = await confirmSignUp({
      username,
      confirmationCode,
    });
    autoSignIn()
    return {isSignUpComplete: isSignUpComplete, nextStep: nextStep}
  } catch (error) {
    console.log("error confirming sign up", error);
    throw error;
  }
}

export async function handleAutoSignIn() {
  try {
    const signInOutput = await autoSignIn();
    // handle sign-in steps
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function handleSignIn({ username, password }) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
    return { isSignedIn: isSignedIn, nextStep: nextStep };
  } catch (error) {
    console.log("error signing in", error);
    throw error;
  }
}

export async function handleSignOut() {
  try {
    await signOut();
  } catch (error) {
    console.log("error signing out: ", error);
    throw error;
  }
}
