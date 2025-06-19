"use client";

import { CADollar } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import ABCollectionsCardV2 from "./ABCollectionsCardV2";
import Marquee from "react-fast-marquee";

export function SectionNewArrivalsV2Marquee({
  hasMembership,
  items = {},
}) {
  const hasAccess = false
  const [selectedItem, setSelectedItem] = useState(null);

const { items: { items: productItems = [] } = {} } = items;


const repeatedItems =  [...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems]
  
return (
  <section className="w-full
  ">
    <Marquee
      speed={50}
      pauseOnHover
     
      className="my-5 "
    >
      {productItems.map((item, i) => {
        const isMembersEarly = item.tags?.includes("COMINGSOONMEMBERSEARLY");
        const isMembersOnly = item.tags?.includes("MEMBERSONLY");
        const isComingSoon = item.tags?.includes("COMINGSOON");


        return (
          <div key={i} className="">
            <ABCollectionsCardV2
              node={item}
              isMembersEarly={isMembersEarly}
              isMembersOnly={isMembersOnly}
              isComingSoon={isComingSoon}
              hasMembership={hasMembership}
              hasAccess={hasAccess}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          </div>
        );
      })}
    </Marquee>
  </section>
);
}