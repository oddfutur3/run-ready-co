"use client";

import { useState } from "react";
import React from "react";
import Link from "next/link";
import { ppMonumentExtendedBold, ppNeueMontreal } from "@/app/fonts";

const ThreeTab = () => {
  const [tab, changeTab] = useState(0);

  const content = [
    {
      eyebrow:"Assess",
      title: "A comprehensive movement assessment, evaluating your body’s ability in Absorb, Bounce, and Stability.",
      paragraph:
        "Your Performance Score in Absorb, Bounce, and Stability will recommend footwear to prevent injury and enhance performance, and also prescribe a customized exercise program to improve your score.",
      src: "/images/RRWebsite-14.jpg",
    },
    {
      eyebrow:"Match",

      title: "Using your Performance Score, you’re matched with the appropriate footwear for cushioning, responsiveness, and stability.",

      paragraph:
        "We’ve developed a footwear database to standardize the performance across the most popular brands to help runners without limiting them to only medically graded footwear.",
      src: "/images/RRWebsite-17.jpg",
    },
    {
      eyebrow:"Prescribe",

      title: "Receive an exercise program curated from our 2,000+ exercise library to improve your Absorb, Bounce and Stability scores.",
      paragraph:
        "Our methodology is focused on improving Absorb (shock absorption), Bounce (energy return), and Stability, helping you become more flexible, stronger, and adaptable on any surface.",
      src: "/images/RRWebsite-10.jpg",
    },
  ];

  return (
    <section className="wrapper wrapper-content font-secondary mb-[150px] mx-auto">
      <div className=" max-w-[1022px]  mx-auto flex flex-col text-center items-center">
        <div
          className={
            ppNeueMontreal.className +
            " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 "
          }
        >
          The all-in-one running assessment by expert physiotherapists.
        </div>

        <div
          className={
            ppNeueMontreal.className +
            " mb-10  text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2]"
          }
        >
         A simple three steps to comfort and performance: A detailed movement assessment, footwear recommendations to match your needs, and a tailored exercise program designed for you. 

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

      <section className="md:wrapper wrapper-content mx-auto ">
        <div
          className={
            ppNeueMontreal.className +
            " flex flex-col md:flex-row items-stretch relative min-h-[200px]   max-w-[1022px] mx-auto scroll-mt-[305px]"
          }
        >
          <div className="flex flex-1 relative  bg-white  border border-black ">
            <div className="flex-col flex flex-1 justify-center md:items-center">
              <div className=" px-5">
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mb-1 mt-10">
                  {content[tab].eyebrow}
                  </div>
                </div>
                <p className="text-[1.4rem] lg:leading-[1.15] font-medium ">
                  {content[tab].title}
                </p>
                <div className="  text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3] pt-3 pb-[40px] gap-4">
                  {content[tab].paragraph}
                </div>
                {/* <button className=" btn-black text-[17px] leading-[2] md:leading-[1.3] py-6 gap-4">
                  Get Certified
                </button> */}
              </div>
            </div>
          </div>
          <div className="flex justify-center flex-1 relative ">
            <div className="img-container w-[100%] relative border-t border-b border-r  border-black ">
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