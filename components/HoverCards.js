"use client";

import React, { useState } from "react";
import { ppNeueMontreal } from "@/app/fonts";
import Image from "next/image";

const CardGrid = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      title: "Break through limits in speed and distance",
      icon: "/images/icons/RR1-speed-icon.svg",
      description:
        "RunReady’s Physiotherapists analyze your movement, making targeted adjustments to unlock new levels of speed, distance, and comfort for every run.",
    },
    {
      title: "Run pain-free by reducing body aches and pains",
      icon: "/images/icons/RR2-painfree-icon.svg",
      description:
        "By identifying and correcting movement imbalances, RunReady minimizes stress on your joints and muscles, reducing pain and lowering your risk of common running injuries.",
    },
    {
      title: "Get shoes matched to your body's needs",
      icon: "/images/icons/RR_Match_Icon.svg",
      description:
        "With shoes selected for your movement, you get shock absorption to soften impact, energy return to drive you forward, and stability to keep you comfortable and reduce wear on your body.",
    },
    {
      title: "Gain flexibility and build strength in every step",
      icon: "/images/icons/RR4-gain-icon.svg",
      description:
        "RunReady improves your range of motion and builds strength in those areas, giving you smoother strides and a more resilient, injury-resistant foundation for running.",
    },
    {
      title: "Stay stable and confident on any surface",
      icon: "/images/icons/RR5-stay-stable-icon.svg",
      description:
        "RunReady’s exercises target stability and balance, so you can feel secure and in control whether you’re on the road, trail, or uneven terrain.",
    },
    {
      title: "All your care in one place",
      icon: "/images/icons/RR6-centralized-icon.svg",
      description:
        "RunReady offers a full assessment, custom footwear, and tailored exercises in a single session at RunAsYouAre, with all progress and recommendations accessible in your dashboard.",
    },
  ];

  return (
    <div className="flex justify-center items-center font-secondary">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-[1657px] wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center justify-between p-6 transition-transform transform  cursor-pointer ${
              activeCard === index
                ? "bg-white border-2 border-brand-green"
                : "bg-white border border-black"
            }`}
            style={{ height: "250px" }}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            {/* Icon Container (Fixed Height) */}
            {/* Title or Description */}
            <div className="flex-grow flex flex-col justify-center">
              {activeCard !== index ? (
                <>
                  <div className="h-14 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3
                    className={
                      ppNeueMontreal.className +
                      ` text-[16px]  lg:text-[18px] font-bold mt-4 ${
                        activeCard === index
                          ? "text-brand-green"
                          : "text-gray-800"
                      }`
                    }
                  >
                    {card.title}
                  </h3>
                </>
              ) : (
                <>
                  <div className="h-14 flex items-center justify-center">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <p className=" text-[14px] lg:text-[16px] text-gray-600 mt-4">
                    {card.description}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
