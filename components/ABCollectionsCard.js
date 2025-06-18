'use client';

import { useState, useEffect, useRef } from "react";
import { CADollar } from "@/utils/currency";
import Image from "next/image";
import Link from "next/link";
// import QuickAddModal from "./QuickAddModal";
import { useRouter } from "next/navigation";

export default function ABCollectionsCard({ node }) {
  const [isCompact, setIsCompact] = useState(false);
  const cardRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  console.log("node", node);
  

  const handleCardClick = (e) => {
    e.stopPropagation();
    router.push(`/products/${node?.handle}`);
  };
  const secondImage = node?.images?.edges[1]?.node?.url || node?.image2;
  const hasAccess = false;;
  const membersEarly = node?.tags?.includes("COMINGSOONMEMBERSEARLY");
  const comingSoonTag = node?.tags?.includes("COMINGSOON");
  const saleTag = node?.tags?.includes("SALE") || node?.tags?.includes("Sale");

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

        className="group lg:w-auto min-w-[145px] flex flex-col gap-[1rem] cursor-pointer border border-grey-400 hover:border-brand-green  p-[1rem] transition-colors duration-300 "
        ref={cardRef}
      >
        <div className="aspect-[0.777] relative">
          {/* Main product image */}
          <Image
            src={node?.featuredImage?.url}
            fill={true}
            priority={true}
            sizes="240px"
            alt="Image of Shoe"
            className={
              "object-contain transition-opacity duration-500 " +
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
              sizes="240px"
                    className={"opacity-0 group-hover:opacity-100 transition-opacity duration-500 object-contain " 
           + (!showComingSoonTag && node.availableForSale ? "  group-hover:opacity-50 group-hover:blur-sm " : "")}
            />
          )}

          {/* Tags */}
          {showComingSoonTag && (
            <span className="absolute top-2 right-2 bg-black text-white text-xs font-bold py-1 px-2  ">
              Coming Soon
            </span>
          )}
          {!showComingSoonTag && saleTag && (
            <span className="absolute top-2 right-2 bg-brand-green text-white text-xs font-bold py-1 px-2  ">
              Sale
            </span>
          )}
          {!showComingSoonTag && !node.availableForSale && (
            <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold py-1 px-2  ">
              Sold Out
            </span>
          )}
          {!showComingSoonTag && node.availableForSale && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-[0.5rem] md:opacity-0 md:group-hover:opacity-100 transition-opacity">
              <Link
                        className=" hidden md:block quick-add-button bg-white border border-grey-400 hover:border-brand-green hover:bg-brand-green hover:text-white text-dark-200 text-xs font-semibold pt-1.5 pb-1 px-3    "
             
                href={`https://runasyouare.co/products/${node?.handle}`}
                target="_blank"
              >
                View Product
              </Link>
              {/* <button
                        className="absolute md:hidden quick-add-button bg-white border border-grey-400 hover:border-brand-green hover:bg-brand-green hover:text-white text-dark-200 text-xs font-semibold pt-1.5 pb-1 px-3    w-[110px] bottom-2 right-2 "
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                Add to Bag
              </button>
                    <button
                        className="hidden md:block quick-add-button bg-white border border-grey-400 hover:border-brand-green hover:bg-brand-green hover:text-white text-dark-200 text-xs font-semibold pt-1.5 pb-1 px-3    w-[110px]  "
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(true);
                }}
              >
                Add to Bag
              </button> */}
            </div>
          )}

          {/* 📏 Dynamic ABS/Short Form */}
        </div>
        <div className="space-y-[0.25rem] body-text [&>*]:line-clamp-1">
          <div className="text-[#000000]">{node?.title}</div>
          <span className="flex text-dark-200 w-[fit-content] text-xs ">
            {node?.vendor}
          </span>
          <div>
            <span className="text-dark-200">
              {`${CADollar.format(node?.priceRange?.minVariantPrice?.amount)} ${
                node?.priceRange?.minVariantPrice?.currencyCode
              }`}
            </span>
            {parseFloat(node?.compareAtPriceRange?.minVariantPrice?.amount) >
              parseFloat(node?.priceRange?.minVariantPrice?.amount) && (
              <span className="ml-[0.5rem] text-dark-100 line-through">
                {`${CADollar.format(
                  node?.compareAtPriceRange?.minVariantPrice?.amount
                )} ${node?.compareAtPriceRange?.minVariantPrice?.currencyCode}`}
              </span>
            )}
          </div>
        </div>
        <div className="w-full space-y-[0.5rem]">
          {/* ABSORB Row */}
          <div className="flex items-center space-x-2">
            <span className="text-xs w-[80px]">Absorb</span>
            <div className="flex-1 h-1 bg-grey-200   overflow-hidden">
              <div
                className="h-full bg-brand-green"
                style={{ width: `${(node.barsAbsorb / 9) * 100}%` }}
              />
            </div>
          </div>
          {/* BOUNCE Row */}
          <div className="flex items-center space-x-2">
            <span className="text-xs w-[80px]">Bounce</span>
            <div className="flex-1 h-1 bg-grey-200   overflow-hidden">
              <div
                className="h-full bg-brand-green"
                style={{ width: `${(node.barsBounce / 9) * 100}%` }}
              />
            </div>
          </div>
          {/* STABILITY Row */}
          <div className="flex items-center space-x-2">
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
      {/* {isModalOpen && (
        <QuickAddModal
          product={node}
          toggleModal={setIsModalOpen}
          cookiesLogin={currentUser}
        />
      )} */}
    </>
  );
}
