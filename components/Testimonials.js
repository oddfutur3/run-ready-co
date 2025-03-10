"use client";

import { useState } from "react";
import Image from "next/image";
import { faChevronLeft, faChevronRight } from "@/graphics/faRegular";
import { ppNeueMontreal } from "@/app/fonts";

const testimonials = [
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "I used to feel pain every time I ran. But after a few weeks the exercise programs helped me move better. To be honest, I feel less discomfort when running nowadays.",
    name: "Jamie",
    // title: "Pro Runner",
  },
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "I was chasing a PR for years. But this program helped me fix my form, and I feel confident with my marathon goal this year.",
    name: "Alex",
    // title: "Reluctant Runner",
  },
  {
    image: "https://placehold.co/480x580/FFFFFF/00000/png",
    quote:
      "I’ve always been active, but running felt like a mystery. With everything in one program, assessments, shoe recommendations, and exercises, I finally move smarter and feel more confident every time I run.",
    name: "Paula",
    // title: "TV Host",
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
      {/* Slider Component */}
      <div className="flex flex-col md:flex-row items-center justify-center  relative  pb-[2rem] space-y-8 md:space-y-0 max-w-[1022px] mx-auto">
        {/* Left Image */}


        {/* Right Testimonial Content */}
        <div className="w-full  flex flex-col justify-center items-center md:items-start text-center pt-10">
          <blockquote className={ ppNeueMontreal.className + " text-[16px] md:text-[20px]  leading-8 font-semibold text-gray-900"}>
          &quot;{testimonials[currentIndex].quote}&quot;
          </blockquote>
          <div className={ppNeueMontreal.className +  " mt-4 text-lg font-medium text-black ml-auto"}>
            <p>- {testimonials[currentIndex].name}</p>
            <p className="text-gray-500">{testimonials[currentIndex]?.title}</p>
          </div>

          {/* Slider Navigation */}
          <div className="flex mt-6 space-x-2 ml-auto">
            <button
              onClick={handlePrev}
              className=""
            >
              {faChevronLeft("transition h-[3rem] fill-black hover:fill-white bg-gray-200 hover:bg-black py-[10px] px-[15px] rounded-full ")}
            </button>
            <button
              onClick={handleNext}
            >
              {faChevronRight("transition h-[3rem] fill-black hover:fill-white bg-gray-200 hover:bg-black py-[10px] px-[15px] rounded-full ")}
              </button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 flex justify-center w-full space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 rounded-full ${
                index === currentIndex ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
