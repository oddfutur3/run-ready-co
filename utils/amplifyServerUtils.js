import { authConfig } from "@/amplify.config";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import { fetchAuthSession, getCurrentUser } from "aws-amplify/auth/server";
import { cookies } from "next/headers";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: {
    Auth: authConfig
  }
})

export async function authenticatedUser(context) {
  return await runWithAmplifyServerContext({
    nextServerContext: context,
    operation: async (contextSpec) => {
      try {
        // console.log(contextSpec)
        const session = await fetchAuthSession(contextSpec)
        // console.log(session)
        if (!session.tokens) {
          return
        }

        const user = {
          ...(await getCurrentUser(contextSpec)),
          isAdmin: false,
        }

        const groups = session.tokens.accessToken.payload["cognito:groups"]
        user.isAdmin = groups && groups.includes("Admins")
        
        return user

      } catch (err) {
        console.log(err)
      }
    }
  })
}

export const fetchSessionFromServer = async () => {
  const currentSession = await runWithAmplifyServerContext({
    nextServerContext: { cookies },
    operation: (contextSpec) => fetchAuthSession(contextSpec),
  });
  return currentSession;
};

export const fetchUserFromServer = async () => {
    const currentUser = runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
};