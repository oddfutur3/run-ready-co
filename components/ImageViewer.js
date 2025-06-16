"use client";

import { faChevronLeft, faChevronRight } from "@/graphics/faRegular";
import Image from "next/image";
import { useState } from "react";


export function ImageViewer({ featuredImage, images, barsAbsorb, barsBounce, barsStability, isShoe }) {
  const detailGraphic = () => (
    <div className=" flex flex-col gap-[0.5rem] w-[15rem] border border-grey-400 rounded-[0.5rem]   p-[0.75rem]  md:p-[1.5rem] h-[fit-content] absolute top-0 right-0 z-10">
      {/* <div className="body-text text-dark-200">{property}</div> */}
      <div className="space-y-[1.5rem]">
        {/* Shoe ABSORB/BOUNCE/STABILITY bars */}
          <div className="space-y-[0.5rem]">
            <div className="flex items-center space-x-2">
              <span className="text-xs w-[80px]">Absorb</span>
              <div className="flex-1 h-1 bg-grey-200 rounded overflow-hidden">
                <div
                  className="h-full bg-brand-green"
                  style={{ width: `${(barsAbsorb / 9) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs w-[80px]">Bounce</span>
              <div className="flex-1 h-1 bg-grey-200 rounded overflow-hidden">
                <div
                  className="h-full bg-brand-green"
                  style={{ width: `${(barsBounce / 9) * 100}%` }}
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs w-[80px]">Stability</span>
              <div className="flex-1 h-1 bg-grey-200 rounded overflow-hidden">
                <div
                  className="h-full bg-brand-green"
                  style={{ width: `${(barsStability / 9) * 100}%` }}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
  const [selectedImage, changeImage] = useState(0);

  return (
    <div className="w-full lg:w-[31.25rem] max-w-[31.25rem] mx-auto flex flex-col items-center gap-[1rem] ">
      <div className="w-full aspect-[0.75] relative">
        {isShoe && detailGraphic()}
        <Image
          src={featuredImage?.url}
          fill={true}
          priority={true}
          sizes="470px"
          className={"object-contain " + (selectedImage === -1 ? "" : "hidden")}
          alt="Featured Image"
        />
        {images.map((image, i) => (
          <Image
            key={i}
            src={image.node?.url}
            fill={true}
            priority={true}
            sizes="470px"
            className={
              "object-contain " + (selectedImage === i ? "" : "hidden")
            }
            alt={`Image ${i}`}
          />
        ))}
      </div>

      <div className="w-full max-w-[29.5rem] flex items-center justify-between">
        <button
          onClick={() => selectedImage > 0 && changeImage(selectedImage - 1)}
          className="flex-none w-[2rem] h-[2rem] flex items-center justify-center bg-white-100 rounded-full shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_24px_0px_rgba(0,0,0,0.2)]"
        >
          {faChevronLeft("h-[1rem] fill-dark-500")}
        </button>
        <div className="w-full flex gap-[0.75rem] flex-wrap">
          {images.map((edge, i) => (
            <button
              key={i}
              onClick={() => changeImage(i)}
              className={
                "h-[3rem] w-[3rem] border relative " +
                (selectedImage == i ? "border-black-100" : "border-grey-300")
              }
            >
              <Image
                src={edge.node?.url}
                fill={true}
                priority={true}
                sizes="46px"
                className="object-contain"
                alt={`Thumb ${i}`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() =>
            selectedImage < images.length - 1 && changeImage(selectedImage + 1)
          }
          className="flex-none w-[2rem] h-[2rem] flex items-center justify-center bg-white-100 rounded-full shadow-[0px_4px_24px_0px_rgba(0,0,0,0.04)] hover:shadow-[0px_4px_24px_0px_rgba(0,0,0,0.2)]"
        >
          {faChevronRight("h-[1rem] fill-dark-500")}
        </button>
      </div>
    </div>
  );
}
