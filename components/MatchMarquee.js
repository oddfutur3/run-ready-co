import React from "react";
import { ppNeueMontreal } from "@/app/fonts";
import Marquee from "react-fast-marquee";
import { SectionNewArrivalsV2Marquee } from "./SectionNewArrivalsV2";

const MatchMarquee = (items) => {
  return (
    <section
      className={
        ppNeueMontreal.className +
        " wrapper max-w-[1657px] flex flex-col  justify-start lg:justify-center relative  mx-auto mb-[100px] "
      }
    >
      <div className="flex flex-col lg:flex-row w-full md:gap-x-4 wrapper-content">
        <div className="lg:w-1/2 xl:mt-[90px] mb-14 lg:mb-0 text-center lg:text-left">
              <p className="text-xs font-medium uppercase tracking-widest text-black ">
            SHOP, GRADE & EARN
          </p>
          <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] mb-6">
           Bought a pair from RunAsYouAre or thinking about it? You can grade it.
          </div>
              <div className="text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2] lg:pr-5">
           You&apos;ll get $25 off each shoe you review, redeemable at RunAsYouAre. No application needed. Just follow the steps in your order confirmation to get started.
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
