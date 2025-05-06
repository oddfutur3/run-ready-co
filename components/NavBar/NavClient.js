"use client";

import Image from "next/image";
import Link from "next/link";
import { faBagShopping, faBars, faChevronDown } from "@/graphics/faRegular";
import { useContext, useEffect, useRef, useState } from "react";
import { useMobileNav } from "./MobileNavProvider";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { VScrollContext } from "../VScrollContext";
import { useHoverDropdown } from "@/utils/useHoverDropdown";

export function RunReady() {
  return (
    <Link href="/" className="hover:text-[#1d2530]">
      RunReady
    </Link>
  );
}

export default function NavClient() {
  const pathname = usePathname();
  const [isContextNavOpen, toggleContextNav] = useState(false);
  const contextNavButton = useRef(null);
  const contextNavRef = useRef(null);

  // const { handleEnter, handleLeave } = useHoverDropdown();

  const [openDropdown, setOpenDropdown] = useState(null); // "group" | "services" | null
  const timeoutRef = useRef(null);
  const servicesRef = useRef(null);
  const groupRef = useRef(null);

  const handleEnter = (key) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(key);
  };
  
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };


  return (
    <div className="order-2 min-[430px]:order-3 gap-[1.0625rem] flex relative">
              <div
          className="relative  hidden xl:block "
          ref={servicesRef}
          onMouseEnter={() => handleEnter("services")}
          onMouseLeave={handleLeave}
        >
          <button className="hidden font-medium text-center xl:flex   items-center gap-5 py-3 px-3  ">
            <div>Run Assessment</div>
            <div>{faChevronDown("h-[1rem]")}</div>
          </button>

          {openDropdown === "services" && (
            <div className="absolute bg-white w-[180px] border border-black mt-2  z-50">
              <Link
                href="/performance-program"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                Performance Program
              </Link>
              <Link
                href="/what-to-expect"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                What to Expect
              </Link>
              {/* <Link
                  href="https://www.runasyouare.co/"
                  target="_blank"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  RunAsYouAre
                </Link> */}
            </div>
          )}
        </div>
      <div className="flex " style={{ alignItems: "center" }}>
                <div
          className="relative mr-10 hidden xl:block "
          ref={groupRef}
          onMouseEnter={() => handleEnter("group")}
          onMouseLeave={handleLeave}
        >
          <button className="hidden font-medium text-center xl:flex   items-center gap-5 py-3 px-3  ">
            <div>Group Physio</div>
            <div>{faChevronDown("h-[1rem]")}</div>
          </button>

          {openDropdown === "group" && (
            <div className="absolute bg-white w-[180px] border border-black mt-2  z-50">
              <Link
                href="/raceready"
                className="block px-3 py-2 hover:bg-gray-100"
              >
                race ready
              </Link>
           
              {/* <Link
                  href="https://www.runasyouare.co/"
                  target="_blank"
                  className="block px-3 py-2 hover:bg-gray-100"
                >
                  RunAsYouAre
                </Link> */}
            </div>
          )}
        </div>


  
  <Link
    className="btn-yellow-inverse-2"
    href="https://runready.janeapp.com"
    target="_blank"
  >
    Book Now
  </Link>

      </div>
    </div>
  );
}

export function MobileNavButton() {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  const { isVScrollDisabled, toggleVScroll } = useContext(VScrollContext);

  return (
    <button
      onClick={() => {
        toggleVScroll(!isMobileNavOpen);
        toggleMobileNav(!isMobileNavOpen);
      }}
      className="order-1 xl:hidden flex items-center justify-start w-[2rem] h-[2rem]  relative  min-[430px]:right-[0rem] md:right-[0rem] mr-2 "
    >
      {faBars("h-[1.5rem]")}
    </button>
  );
}

export function MobileNav() {
  const { isMobileNavOpen, toggleMobileNav } = useMobileNav();
  const { toggleVScroll } = useContext(VScrollContext);

  return (
    <>
      {isMobileNavOpen && (
        <div className="xl:hidden relative top-0 h-[calc(100vh-100%)] w-screen ">
          <div
            onClick={() => {
              toggleVScroll(false), toggleMobileNav(false);
            }}
            className="h-full w-full bg-black/50 "
          ></div>
          <MobileMenu />
        </div>
      )}
    </>
  );
}
