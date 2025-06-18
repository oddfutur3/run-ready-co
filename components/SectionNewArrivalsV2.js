"use client";

import Marquee from "react-fast-marquee";
import { CADollar } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ABCollectionsCard from "./ABCollectionsCard";



export function SectionNewArrivalsV2Marquee({
  hasMembership,
  headingClassName = "",
  rename = "",
  button = true,
  captionClassName = "",
  priceClassName = "",
  items = {},
}) {
  const hasAccess = false
  const [selectedItem, setSelectedItem] = useState(null);
  const router = useRouter();

const { items: { items: productItems = [] } = {} } = items;

console.log("productItems", productItems);

const repeatedItems =  [...productItems, ...productItems, ...productItems, ...productItems, ...productItems, ...productItems]
  


return (
  <section className={``}>
    <Marquee gradient={false} speed={100} r  className="my-5 min-h-[420px]">
      <div className="flex space-x-[50px]">
        {repeatedItems.map((item, i) => {
          const isMembersEarly = item.tags?.includes("COMINGSOONMEMBERSEARLY");
          const isMembersOnly = item.tags?.includes("MEMBERSONLY");
          const isComingSoon = item.tags?.includes("COMINGSOON");
          const saleTag = item.tags?.includes("SALE") || item.tags?.includes("Sale");

          return (
            <div key={i} className="flex flex-col justify-between h-[540px] w-[300px] shrink-0">
              <ABCollectionsCard
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
      </div>
    </Marquee>
  </section>
  );
}