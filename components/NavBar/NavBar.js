"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NavLogo from "./NavLogo";
import NavClient, { MobileNav, MobileNavButton } from "./NavClient";
import { usePathname } from "next/navigation";
import { MobileNavProvider } from "./MobileNavProvider";

export default function NavBar() {
  const pathname = usePathname();

  const hideMobileNav = pathname === "/login";

  const landingPages = [
    "/",
    "/careers",
    "/performance-program",
    "/performance-program-v2",
    "/what-to-expect",
    "/starter-package",
    "/privacy-policy",
    "/terms-of-service",
    "/landing-page",
    "/FAQ",
    "/experience",
    "/raceready",
    "/raceready/physios-behind-the-class"
  ];

  const isPathnameLanding = landingPages.includes(pathname);

  // State to track scroll position
  const [showGreyBar, setShowGreyBar] = useState(false);

  const [scrollDirection, setScrollDirection] = useState("up");
  const lastScrollY = useRef(0);

  const NAVBAR_HEIGHT = 90; // or whatever your nav height is in px

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      // Always show the nav if near top
      if (currentScrollY <= NAVBAR_HEIGHT) {
        setScrollDirection("up");
        lastScrollY.current = currentScrollY;
        return;
      }
  
      // Only allow hiding if scrolled past navbar height
      if (currentScrollY > lastScrollY.current && currentScrollY > NAVBAR_HEIGHT) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDirection("up");
      }
  
      lastScrollY.current = currentScrollY;
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   if (!isPathnameLanding) return;

  //   const handleScroll = () => {
  //     setShowGreyBar(window.scrollY === 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [isPathnameLanding]);

  return (
    <div className={`sticky top-0 z-30 transition-transform duration-300 ease-in-out ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}>
      <MobileNavProvider>
        {/* Smooth Transition for Grey Bar */}
        {isPathnameLanding && (
          <div
            className={`w-full bg-[#F5F5F5] transition-all duration-300 ease-in-out ${
              showGreyBar ? "h-[30px] opacity-100 border-b border-black" : "h-0 opacity-0 invisible"
            }`}
          >
            <div className="flex items-center justify-end h-full pr-4">
              <Link
                href="https://runasyouare.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 group transition-opacity duration-300"
              >
                <span className="text-sm text-black group-hover:underline">
                  Running footwear, apparel & gear
                </span>
                <img
                  src="/images/RunAsYouAre_Evergreen.svg"
                  alt="RunAsYouAre Logo"
                  className="h-[1rem] w-auto"
                />
              </Link>
            </div>
          </div>
        )}
        <nav
          className={
            isPathnameLanding
              ? "wrapper relative z-20 bg-white border-b border-black"
              : "relative z-20 bg-white-100 border-b border-grey-400"
          }
        >
          <div
            className={`mx-auto relative flex items-center justify-between gap-[0.0625rem] ${
              isPathnameLanding
                ? "wrapper-content py-[10px] md:py-[20px] max-md:pl-[0rem] md:max-xl:pl-[0rem] md:min-h-[5.375rem]"
                : "py-[0.75rem] max-md:pl-[1rem] md:max-xl:pl-[2rem] px-[1.5rem]"
            }`}
          >
            {!hideMobileNav && <MobileNavButton />}
            <NavLogo logo={isPathnameLanding ? "full" : "icon"} />
            <NavClient />
          </div>
        </nav>
        {!hideMobileNav && <MobileNav />}
      </MobileNavProvider>
    </div>
  );
}
