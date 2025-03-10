export const authConfig = {
  Cognito: {
    userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
    userPoolClientId: process.env.NEXT_PUBLIC_USER_POOL_CLIENT_ID,
    loginWith: {
      oauth: {
        domain: "runreadyapp.auth.us-east-1.amazoncognito.com",
        scopes: ['openid email phone'],
        redirectSignIn: [
         process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGN_IN,
        ],
        redirectSignOut: [
          process.env.NEXT_PUBLIC_COGNITO_REDIRECT_SIGN_OUT,        
        ],
        responseType: "code",
      }
    },
  },
};