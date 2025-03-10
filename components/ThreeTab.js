"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import { ppMonumentExtendedBold, ppNeueMontreal } from "@/app/fonts";
import { PageHeading } from "./UIComponents";

const ThreeTab = () => {
  const [tab, changeTab] = useState(0);

  const content = [
    {
      title: "Assess",
      paragraph:
        "We analyze your Flexibility, Strength, and Adaptability to see where you are today. This helps determine if you need more Absorb (shock absorption), Bounce (energy return), or Stability to reduce discomfort and injury risk.",
      src: "/images/RRWebsite-14.jpg",
    },
    {
      title: "Match",

      paragraph:
        "Based on your assessment, we recommend footwear with the right blend of Absorb, Bounce, and Stability to match how you move right now—helping you run in comfort and with less fatigue.",
      src: "/images/RRWebsite-17.jpg",
    },
    {
      title: "Prescribe",

      paragraph:
        "You’ll receive a personalized exercise program designed to improve your Flexibility, Strength, and Adaptability—so you can move more easily and efficiently on any surface.",
      src: "/images/RRWebsite-10.jpg",
    },
  ];

  return (
    <section className="warpper font-secondary mb-[150px]">
      <div className="w-full w-[1022px] mx-auto flex flex-col text-center items-center">
        <div
          className={
            ppNeueMontreal.className +
            " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 "
          }
        >
          Three Easy Steps to Comfort, All Under One Roof
        </div>

        <div  className="mb-10 text-[16px] md:text-[20px] leading-[1.4] lg:text-[20px] lg:leading-[1.2]"> 
        Led by certified Physiotherapists, the RunReady Performance Program at RunAsYouAre offers complete care to improve your running performance.
        </div>
      </div>
      <div className="wrapper-content flex justify-center mb-[1.1rem]">
        <div
          className={
            ppNeueMontreal.className +
            " inline-block p-[0.5rem] bg-border-primary border border-black flex flex-wrap justify-center sm:flex-nowrap space-y-2 sm:space-y-0 sm:space-x-[1rem]"
          }
        >
             <button
            className={
              "caption w-full sm:w-[7.25rem] px-[1rem] py-[0.75rem] " +
              (tab === 0 ? "btn-toggle-on border border-1 " : "btn-toggle-off")
            }
            onClick={() => changeTab(0)}
          >
            Assess
          </button>
          <button
            className={
              "caption w-full sm:w-[7.25rem] px-[1rem] py-[0.75rem] " +
              (tab === 1 ? "btn-toggle-on border border-1 " : "btn-toggle-off")
            }
            onClick={() => changeTab(1)}
          >
            Match
          </button>
          <button
            className={
              "caption w-full sm:w-[7.25rem] px-[1rem] py-[0.75rem] " +
              (tab === 2 ? "btn-toggle-on border border-1 " : "btn-toggle-off")
            }
            onClick={() => changeTab(2)}
          >
            Prescribe
          </button>
        </div>
      </div>
      <section
        className="wrapper wrapper-content mx-auto"
      >
        <div
          className={
            ppNeueMontreal.className +
            " flex flex-col md:flex-row items-stretch relative min-h-[200px]   max-w-[1022px] mx-auto scroll-mt-[305px] "
          }
        >
          <div className="flex flex-1 relative  bg-white  border border-black ">
            <div className="flex-col flex flex-1 justify-center md:items-center">
              <div className=" px-10">
                <div>
                </div>
                <p className="text-[1.4rem] lg:text-[1.625rem] lg:leading-[1.15] font-medium mt-10">
                  {content[tab].title}
                </p>
                <div className=" text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3] pt-6 pb-[40px] gap-4">
                  {content[tab].paragraph}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-1 relative ">
            <div className="img-container w-[100%] relative border border-1 border-black     ">
              <img
                src={content[tab].src}
                className="w-full h-[444px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ThreeTab;
