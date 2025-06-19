"use client";

import { useState } from "react";
import Image from "next/image";
import { faChevronLeft, faChevronRight } from "@/graphics/faRegular";
import { aireLibreRobotoCon, aireLibreJosefin } from "../fonts";

const testimonials = [
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "I ran my first half marathon and the RunReady Performance Program completely transformed how I run. No more discomfort, just a smoother and stronger run.",
    name: "Rob Smith ",
    title: "Pro Runner",
  },
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "I was new to running and unsure if this service would help. I ran my first half marathon and the, and RunReady’s personalized approach made all the difference—I now run more confidently and with less pain.",
    name: "Vicki",
    title: "Reluctant Runner",
  },
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "Myodetox helps me live a pain-free life. Most importantly, the team helps me understand when I've pushed my body too much and educates me on how to maintain it.",
    name: "Daman",
    title: "TV Host",
  },
  // Add more testimonials here
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
         <div className="max-w-[1140px] text-center mb-[16px]" style={{ margin: "0 auto", lineHeight: "normal" }}>
         <div
          className={
            aireLibreJosefin.className +
            " font-bold italic  text-[1.5rem] lg:text-[2.5rem]"
          }
        >
                Testimonials
              </div>
            </div>
      {/* Slider Component */}
      <div className=" flex flex-col md:flex-row items-center justify-center  relative  pb-[5rem] space-y-8 md:space-y-0 px-5">
        {/* Left Image */}


        {/* Right Testimonial Content */}
        <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center items-center md:items-start text-center md:text-left pt-10">
          <blockquote className={ aireLibreRobotoCon.className + " text-2xl leading-8 font-semibold text-gray-900"}>
          &quot;{testimonials[currentIndex].quote}&quot;
          </blockquote>
          <div className={ aireLibreRobotoCon.className + " mt-4 text-lg font-medium text-black"}>
            <p>{testimonials[currentIndex].name}</p>
            <p className="text-[#DEC54B]">{testimonials[currentIndex].title}</p>
          </div>

          {/* Slider Navigation */}
          <div className="flex mt-6 space-x-2 ml-auto">
            <button
              onClick={handlePrev}
              className=""
            >
              {faChevronLeft("transition h-[3rem] fill-[#DEC54B] hover:fill-white bg-gray-200 hover:bg-[#DEC54B] py-[10px] px-[15px] rounded-full ")}
            </button>
            <button
              onClick={handleNext}
            >
              {faChevronRight("transition h-[3rem] fill-[#DEC54B] hover:fill-white bg-gray-200 hover:bg-[#DEC54B] py-[10px] px-[15px] rounded-full ")}
              </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 flex justify-center w-full space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-[#DEC54B]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
