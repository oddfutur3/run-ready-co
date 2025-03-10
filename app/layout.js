import "./globals.css";
import localFont from "next/font/local";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import { matterMono, ppMonumentExtendedBold, saans, ppNeueMontreal } from "./fonts";
import ConfigureAmplifyClientSide from "@/amplifyClient.config";



export default function RootLayout({ children }) {
  return (
    <>
    {process.env.firebase_project_id === "raya-production" && (
      <GoogleTagManager gtmId="GTM-MMKP5QHW" />
    )}
      <html
        lang="en"
        className={`${ppMonumentExtendedBold.variable} ${matterMono.variable} ${saans.variable} ${ppNeueMontreal.variable} font-secondary h-full`}
      >
        <body className="h-full" id="document-body">
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MMKP5QHW" height="0" width="0" style={{display:"none",visibility:"hidden"}}>
            </iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <ConfigureAmplifyClientSide />
          {children}
        </body>
        {/* <Script src="/font-icons/fontawesome.min.js" />
        <Script src="/font-icons/regular.min.js" /> */}
      </html>
    </>
    
  );
}
