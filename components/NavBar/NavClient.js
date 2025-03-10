"use client";

import Image from "next/image";
import Link from "next/link";
import {
  faBagShopping,
  faBars,
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faPerson,
  faQuestion,
  faUser,
} from "@/graphics/faRegular";
import { useContext, useEffect, useRef, useState } from "react";
import { useMobileNav } from "./MobileNavProvider";
import MobileMenu from "./MobileMenu";
import { usePathname, useRouter } from "next/navigation";
import { VScrollContext } from "../VScrollContext";

export function RunReady() {

  return (
    <Link
      href="/"
      className="hover:text-[#1d2530]"
    >
      RunReady
    </Link>
  );
}

export default function NavClient() {

  const pathname = usePathname();
  const [isContextNavOpen, toggleContextNav] = useState(false);
  const contextNavButton = useRef(null);
  const contextNavRef = useRef(null);

  const router = useRouter();

  const isMember = false;

  const uuidExp = /^\/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/





  useEffect(() => {
    if (isContextNavOpen) {
      contextNavRef.current.focus();
    }
  }, [isContextNavOpen]);

  return (
    <div className="order-2 min-[430px]:order-3 gap-[1.0625rem] flex relative">
 
        <div className="flex " style={{ alignItems: "center" }}>
          <Link
            href="/performance-program"
            className=" hidden xl:block   font-medium text-center mr-10"
          >
            Performance Program
          </Link>
          <Link
            href="/what-to-expect"
            className=" hidden xl:block  font-medium text-center mr-10"
          >
            What to Expect
          </Link>
  {/* {   pathname === "/" &&(      <Link
            href="/login"
            className=" hidden md:block  font-medium text-center mr-5"
          >
            Login
          </Link>)} */}
          <Link
            className="btn-black"
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
