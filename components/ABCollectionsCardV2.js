'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ABCollectionsCardV2({ node }) {
  const [isCompact, setIsCompact] = useState(false);
  const cardRef = useRef(null);
  const router = useRouter();

  

  const handleCardClick = (e) => {
    e.stopPropagation();
    router.push(`/products/${node?.handle}`);
  };
  const secondImage = node?.images?.edges[1]?.node?.url || node?.image2;
  const hasAccess = false;;
  const membersEarly = node?.tags?.includes("COMINGSOONMEMBERSEARLY");
  const comingSoonTag = node?.tags?.includes("COMINGSOON");

  // Conditionally show "Coming Soon"
  const showComingSoonTag =
    (membersEarly && !hasAccess) || (!membersEarly && comingSoonTag);

  


  // 🟢 ResizeObserver to detect card width
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const width = entry.contentRect.width;
        // Adjust 250 based on your layout needs
        setIsCompact(width < 300);
      }
    });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <>
      <div
                className="group lg:w-[15rem] flex flex-col gap-[1rem]  border border-grey-400 hover:border-black  p-[1rem] mr-5"
        ref={cardRef}
      >
        <div className="h-[225px] relative ">
          {/* Main product image */}
          <Image
            src={node?.featuredImage?.url}
            fill={true}
            priority={true}
            sizes="120px"
            alt="Image of Shoe"
            className={
              "object-contain transition-opacity duration-500 select-none " +
              (secondImage ? "group-hover:opacity-0 " : "")
            }
          />

          {/* Second image on hover */}
          {!!secondImage && (
            <Image
              src={secondImage}
              fill={true}
              priority={true}
              alt="Image of Shoe"
              sizes="120px"
                    className={"opacity-0 group-hover:opacity-100 transition-opacity duration-500 object-contain select-none " 
           + (!showComingSoonTag && node.availableForSale ? "  " : "")}
            />
          )}




          {/* 📏 Dynamic ABS/Short Form */}
        </div>
        <div className="space-y-[0.25rem] body-text [&>*]:line-clamp-1 select-none">
          <div className="text-[#000000]">{node?.title}</div>
          <span className="flex text-dark-200 w-[fit-content] text-xs ">
            {node?.vendor}
          </span>
        </div>
        <div className="w-full space-y-[0.5rem]">
          {/* ABSORB Row */}
          <div className="flex items-center space-x-2 select-none">
            <span className="text-xs w-[80px]">Absorb</span>
            <div className="flex-1 h-1 bg-grey-200   overflow-hidden">
              <div
                className="h-full bg-brand-green"
                style={{ width: `${(node.barsAbsorb / 9) * 100}%` }}
              />
            </div>
          </div>
          {/* BOUNCE Row */}
          <div className="flex items-center space-x-2 select-none">
            <span className="text-xs w-[80px]">Bounce</span>
            <div className="flex-1 h-1 bg-grey-200   overflow-hidden">
              <div
                className="h-full bg-brand-green"
                style={{ width: `${(node.barsBounce / 9) * 100}%` }}
              />
            </div>
          </div>
          {/* STABILITY Row */}
          <div className="flex items-center space-x-2 select-none">
            <span className="text-xs w-[80px]">Stability</span>
            <div className="flex-1 h-1 bg-grey-200   overflow-hidden">
              <div
                className="h-full bg-brand-green"
                style={{ width: `${(node.barsStability / 9) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
  
    </>
  );
}
