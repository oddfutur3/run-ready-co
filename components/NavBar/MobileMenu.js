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
  const menu = {
      "Performance Program": { pathname: "/performance-program" },
      "What to Expect": { pathname: "/what-to-expect" },
      Careers: { pathname: "/careers" },
    };
  

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
        <ul className="space-y-[0.5rem] text-[0.875rem] text-dark-500 leading-[1.6] [&>li>*]:p-[0.5rem] [&>li>*]:flex [&>li>*]:items-center [&>li>*]:gap-[0.5rem] [&>*]:border [&>*]:border-transparent mt-5 ">
          {Object.keys(menu).map((key, i) => (
            <li
              key={i}
              className={
                pathNameFull === menu[key].pathname ||
                activePath === menu[key].pathname
                  ? "bg-black-100 text-brand-yellow"
                  : "hover:bg-[#F4F4F4] hover:animate-bg-fade-grey"
              }
            >
              <Link
                href={menu[key].pathname}
                className="font-semibold"
                onClick={() => {
                  toggleVScroll(false);
                  toggleMobileNav(false);
                }}
              >
                <div className="flex items-center gap-2">
                  {menu[key].icon}
                  <span>{key}</span>
                </div>
              </Link>
            </li>
          ))}
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
