'use client';

import React, { useState } from "react";
import Image from "next/image";
import { ppNeueMontreal } from "@/app/fonts";

const CardList = () => {
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    { title: "Training for a race?", icon: "/images/icons/RR1-race-icon.svg", description: "Get the right shoes and strength plan to go longer and feel better." },
    { title: "Running in discomfort?", icon: "/images/icons/RR2-discomfort-icon.svg", description: "Identify what’s causing pain and make real improvements." },
    { title: "Coming back from injury?", icon: "/images/icons/RR3-injury-icon.svg", description: "Get expert-led care and a program designed just for you." },
    { title: "Looking to improve?", icon: "/images/icons/RR4-improve-icon.svg", description: "RunReady’s complete system helps you move with more ease and efficiency." },
  ];

  return (
    <div className={ppNeueMontreal.className + " flex justify-center items-center font-secondary px-4 pt-10"}>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-[1022px] justify-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 transition-transform transform hover:scale-105 cursor-pointer bg-white border border-black w-full sm:w-1/2   lg:w-1/4 text-center"
          >
            <div className="mb-4">
              <Image src={card.icon} alt={card.title} width={40} height={40}  />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
