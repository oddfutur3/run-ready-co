// "use client";
// import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import HomeHero from "./landing-page/HomeHero";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import Link from "next/link";


export const metadata = {
  title: "RunReady - All things running healthy",
};

export default function Home() {
  // State to track whether to show the floating button
  // const [showFloatingButton, setShowFloatingButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowFloatingButton(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <VScrollProvider>
      {/* Floating Button (Only Visible When Scrolling) */}
      <Link
        href="https://runasyouare.co"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-50 text-2xl font-bold cursor-pointer transition-opacity duration-300 
       
        `}
      >
        {/* <span className="relative group block w-fit ">
          <span className="absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white p-2 text-brand-green border-t border-b border-r border-black w-max invisible group-hover:visible">
            <div>RunAsYouAre.</div>
            <div className="body-text">Lorem Ipsum blah blah</div>
          </span>
          <span className="group-hover:opacity-0 transition-opacity duration-300 block">
            <img
              className="h-[5rem] border-t border-b border-r border-black"
              src="/images/Logo_Badge_Green.svg"
              alt="RunAsYouAre Logo"
            />
          </span>
        </span> */}
      </Link>

      {/* Page Content */}
      <main className="relative">
        <HomeHero />
      </main>
      <div className="footer-gradient">
        <Footer />
      </div>
    </VScrollProvider>
  );
}