import React from "react";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { faXmark, faHouse, faUser } from "@/graphics/faRegular";
import { VScrollContext } from "../VScrollContext";
import { useMobileNav } from "./MobileNavProvider";

export default function MobileMenu({ activePath }) {
  const pathNameFull = usePathname();
  const { toggleMobileNav } = useMobileNav();
  const { toggleVScroll } = useContext(VScrollContext);

  // Default menu items


  // If on "what-to-expect" page, modify the menu
  const menu = [
    {
      title: "Run Assessment",
      children: [
        { title: "Performance Program", pathname: "/performance-program" },
        { title: "What to Expect", pathname: "/what-to-expect" },
      ],
    },
    {
      title: "Group Phyiso",
      children: [
        { title: "Race Ready", pathname: "/raceready" },
      ],
    },
    {
      title: "Careers",
      pathname: "/careers",
    },
  ];

  return (
    <>
    <nav className=" flex-none bg-white w-full sm:max-w-[30rem] h-[250px] absolute left-0 top-0 px-[1rem] py-[2rem] sm:border-r border-b border-black z-50 ">
      <button
        onClick={() => {
          toggleVScroll(false);
          toggleMobileNav(false);
        }}
        className="absolute top-[0.75rem] right-[1rem] p-[0.5rem] "
      >
        {faXmark("h-[1.25rem]")}
      </button>
      {/* <img
        src="/images/Logo_Badge_Green.svg"
        className="h-[2rem] object-cover mb-[2rem] min-[430px]:hidden"
      /> */}
      <div className="space-y-[2.5rem]  ">
      <ul className="space-y-4 text-sm text-dark-500 mt-5">
  {menu.map((item, i) => {
    if (item.children) {
      return (
        <li key={i}>
          {/* Section Label */}
          <div className="text-xs font-bold uppercase tracking-wide text-gray-600 px-1 mb-1">
            {item.title}
          </div>

          {/* Submenu Items */}
          <ul className="space-y-1 pl-4">
            {item.children.map((child, j) => (
              <li
                key={j}
                className={`border border-transparent rounded-sm ${
                  pathNameFull === child.pathname || activePath === child.pathname
                    ? "bg-black-100 text-brand-yellow"
                    : "hover:bg-[#F4F4F4] hover:animate-bg-fade-grey"
                }`}
              >
                <Link
                  href={child.pathname}
                  className="block py-2 px-3 font-medium"
                  onClick={() => {
                    toggleVScroll(false);
                    toggleMobileNav(false);
                  }}
                >
                  {child.title}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      );
    }

    // Regular top-level link
    return (
      <li
        key={i}
        className={`border border-transparent rounded-sm ${
          pathNameFull === item.pathname || activePath === item.pathname
            ? "bg-black-100 text-brand-yellow"
            : "hover:bg-[#F4F4F4] hover:animate-bg-fade-grey"
        }`}
      >
        <Link
          href={item.pathname}
          className="block py-2 px-3 font-medium"
          onClick={() => {
            toggleVScroll(false);
            toggleMobileNav(false);
          }}
        >
          {item.title}
        </Link>
      </li>
    );
  })}
</ul>
      </div>
    </nav>
        <div className="fixed inset-0 z-20 flex justify-start">
          <div
            className="absolute left-0 top-[87px] w-full h-[calc(100vh-87px)] bg-black/50"
            onClick={() => {
              toggleVScroll(false);
              toggleMobileNav(false);
            }}
          ></div>
        </div>
    </>
  );
}
