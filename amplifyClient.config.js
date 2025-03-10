"use client";

import { Amplify } from "aws-amplify";
import 'aws-amplify/auth/enable-oauth-listener';
import { authConfig } from "./amplify.config";


Amplify.configure(
  {
    Auth: authConfig,
  },
  { ssr: true }
);


export default function ConfigureAmplifyClientSide() {
  return null;
}
