"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { faHouse, faUser } from "@/graphics/faRegular";
import Image from "next/image";

import { useAuth } from "@/contexts/AuthContext";

export default function SideNav({ activePath, userTier }) {
  const { logout, currentUser, runClubsData } = useAuth();

  const pathNameFull = usePathname();
  const pathName = usePathname().split("/");

  const [activeSubmenu, changeSubmenu] = useState(pathName[pathName.length-2] ? "/" + pathName[pathName.length-2] : "");

  // Build menu dynamically based on runClubsData
  let menu = userTier ? {
    "Dashboard": { icons: [faHouse("inline h-[1rem]")], pathname: "/dashboard" },
    "Clients": { icons: [faUser("inline h-[1rem]")], pathname: "/clients" },
  } : {}

  // If runClubsData is loaded and contains clubs, add them to the menu
  // if (runClubsData && runClubsData.length > 0) {
  //   runClubsData.forEach(club => {
  //     menu[club.name] = { 
  //       icons: [
  //       <Image key={club.id} src={club.profile_small} width={35} height={35} alt={`${club.name} logo`} className="    border border-black " />
  //       ], 
  //       pathname: `/${club.id}` 
  //     };
  //   });
  // }

  return (
    <nav className="max-xl:hidden flex-none w-[14.5625rem] left-0 top-[3.5625rem] space-y-[2.5rem] px-[1rem] py-[2rem]">
      <ul className="space-y-[0.5rem] text-[0.875rem] text-dark-500 leading-[1.6] [&>li>*]:p-[0.5rem] [&>li>*]:flex [&>li>*]:items-center [&>li>*]:gap-[0.5rem] [&>*]:    [&>*]:border [&>*]:border-transparent">
        {Object.keys(menu).map((key, i) =>
          <li key={i} className={pathNameFull === menu[key].pathname || activePath === menu[key].pathname ? "bg-black-100 text-brand-yellow" : "hover:bg-[#F4F4F4] hover:animate-bg-fade-grey"}>
            <Link href={menu[key].pathname} className="font-semibold ">
              <div className="flex items-center gap-2">
                {menu[key].icons.map((icon, index) => (
                  <div key={index} className={"flex-none h-[1.50rem] w-[1.50rem] flex justify-center items-center " + (pathNameFull === menu[key].pathname || activePath === menu[key].pathname ? "fill-brand-yellow" : "fill-black-100")}>
                    {icon}
                  </div>
                ))}
                <span>{key}</span>
              </div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
