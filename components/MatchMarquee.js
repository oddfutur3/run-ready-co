import React from "react";
import { ppNeueMontreal } from "@/app/fonts";
import Marquee from "react-fast-marquee";
import { SectionNewArrivalsV2Marquee } from "./SectionNewArrivalsV2";

const MatchMarquee = (items) => {
  return (
    <section
      className={
        ppNeueMontreal.className +
        " wrapper max-w-[1657px] flex flex-col  justify-start lg:justify-center relative  mx-auto mb-[150px] "
      }
    >
      <div className="flex flex-col lg:flex-row w-full md:gap-x-4 wrapper-content">
        <div className="lg:w-1/2 xl:mt-[90px] mb-14 lg:mb-0 text-center lg:text-left">
          <span className="font-medium  text-[16px]  lg:text-[18px] leading-[1.15] text-black">
            One seamless system
          </span>
          <div
            className={
              ppNeueMontreal.className +
              " text-[1.5rem] lg:text-[2.5rem] lg:leading-[1.15] font-medium mb-6"
            }
          >
            Assess, Match, and Prescribe—all in one place
          </div>
          <div className="  text-[14px] lg:text-[16px] lg:pr-5 ">
            The RunReady Platform makes it easy for practitioners to deliver
            RunReady Performance Program. Automated assessments, guided footwear
            matching, and access to 1000s of personalized exercise programs keep
            client care efficient and effective.
          </div>
        </div>
        <div className="lg:w-2/3 flex justify-end min-h-[265px] relative overflow-hidden border border-solid border-black">
          <SectionNewArrivalsV2Marquee
            rename="Shop the Collection"
            xlGrid={true}
            items={items}
            button={false}
            headingClassName="text-black mx-auto"
            captionClassName="text-black"
            priceClassName="text-black"
            hasMembership={false}
          />
        </div>
      </div>
    </section>
  );
};

export default MatchMarquee;
