"use client";
import Link from "next/link";
import { faArrowRight } from "@/graphics/faSolid";
import { faGear } from "@/graphics/faRegular";
import { faCheck } from "@/graphics/svgs";
import { ppNeueMontreal } from "@/app/fonts";
import LandingPageTabs from "@/components/landingpage/LandingPageTabs";
import ThreeTab from "@/components/landingpage/ThreeTab";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";
import NavClient from "@/components/NavBar/NavClient";

export default function HomeHero() {
  return (
    <div className="flex flex-col">
        <NavBar />
      <div className="relative">
        <div className="absolute max-[1520px]:left-[73px] max-[1520px]:top-[181px] min-[1521px]:left-[196px] min-[1521px]:top-[411px]  top-[230px] max-[640px]:top-[230px] text-black flex flex-col max-[1520px]:w-[519px] justify-center min-[1521px]:w-[689px]  max-[640px]:w-auto max-[640px]:pr-10 max-[760px]:left-[24px]    z-10">
          <div
            className={
              ppNeueMontreal.className +
              " text-[38px] lg:text-7xl leading-none font-medium mb-6 lg:mb-6 text-white"
            }
          >
            The future of running health starts here
          </div>
          <span
            className={
              ppNeueMontreal.className +
              " text-[16px] md:text-[20px]  leading-[1.4] lg:leading-[1.2] text-white"
            }
          >
            RunReady Physiotherapists study running, develop health running
            services, design exercise programs, and work with Footwear
            Specialists to grade shoes for Absorb, Bounce, and Stability—helping
            runners move better.
          </span>

          <div className="mt-10 relative z-50">
            <Link href="/starter-package" className="btn-black">
              Get Started Now
            </Link>
          </div>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[calc(100vh-80px)] object-cover border-black border-b pointer-events-none"
        >
          <source src="/videos/HDWebsite15.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="hero-gradient">
        <section
          className={
            ppNeueMontreal.className +
            " wrapper max-w-[1657px] mx-auto mb-[150px] mt-[50px]"
          }
        >
          <div className="w-full lg:w-[910px] mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] lg:text-[2.5rem]   leading-[1.28]  lg:leading-[1.25] font-medium my-10">
              Turning research into results
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-between pb-0">
            {/* Block 1 */}
            <div className="text-no-underline w-inline-block">
              <div className="box-border bg-white border border-black p-8 overflow-hidden h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="text-black  text-[1.4rem] lg:text-[1.625rem] leading-[1.3] font-bold">
                    Research & Development
                  </div>
                </div>
                <div className="flex-grow flex items-center">
                  <p className="text-black    text-[14px] lg:text-[16px]    ">
                    RunReady Physiotherapists study how people run, build
                    running health services, design exercise programs, and
                    together with Footwear Specialists, grade footwear to help
                    runners move better.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="text-no-underline w-inline-block">
              <div className="box-border bg-white border border-black p-8 overflow-hidden h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="text-black text-[1.4rem] lg:text-[1.625rem] leading-[1.3] font-bold">
                    RunReady Physiotherapists
                  </div>
                </div>
                <div className="flex-grow flex items-center">
                  <p className="text-black text-[14px] lg:text-[16px] ">
                    Our Physiotherapists deliver expert assessments, precise
                    footwear matching, and tailored exercise programs at the
                    RunReady Studio in Vancouver, BC.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 3 */}
            <div className="text-no-underline w-inline-block">
              <div className="box-border bg-white border border-black p-8 overflow-hidden h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="text-black text-[1.4rem] lg:text-[1.625rem] leading-[1.3] font-bold">
                    Education & Certification
                  </div>
                </div>
                <div className="flex-grow flex items-center">
                  <p className="text-black   text-[14px] lg:text-[16px]">
                    We create specialized courses and certify
                    Physiotherapists—equipping them with the tools to provide
                    expert running health care through the RunReady Performance
                    Program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 */}
        <ThreeTab />

        <section
          className={
            ppNeueMontreal.className +
            " wrapper max-w-[1657px] flex flex-col  justify-start lg:justify-center relative  mx-auto mb-[150px] "
          }
        >
          <div className="lg:grid grid-cols-2 w-full  md:gap-x-4 wrapper-content">
            <div className=" xl:mt-[90px]   xl:w-[560px] mb-14 lg:mb-0 text-center lg:text-left">
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
                RunReady Performance Program. Automated assessments, guided
                footwear matching, and access to 1000s of personalized exercise
                programs keep client care efficient and effective.
              </div>
            </div>
            <div className="flex justify-end">
              <div className="img-container relative ">
                <img
                  src="/images/RRWebsite-20.jpg"
                  className="w-full xl:h-[444px] border border-1 border-black  object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper mb-[150px]    ">
          <div className="wrapper-content flex flex-col items-center justify-center">
            <div
              className={
                ppNeueMontreal.className + " lg:w-[1022px] text-center mb-10"
              }
            >
              <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] font-medium mb-10 lg:mb-6">
                Matched with top footwear brands
              </div>
              <div className="text-[16px] md:text-[20px]">
                RunReady grades footwear based on Absorb, Bounce, and
                Stability—ensuring clients get the right footwear based on how
                they move. Our system bridges your assessment with the
                world&apos;s leading brands.
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-y-10 px-1 py-6 lg:py-12 lg:gap-y-20 lg:px-24 w-full lg:gap-x-20 border-t border-b border-solid border-0 border-black">
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/adidas_mountain_logo.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/Altra-Logo.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/Asics_Logo_Black.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/nike-swoosh-logo.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/Norda_Horz_Logo_Black.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/On_Logo_Black.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/Puma_Logo_Black.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>{" "}
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/salomon.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/Saucony-brandmark-black.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cotain"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src="/images/partner-logos/TNF_Logo_b.svg"
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                />
              </div>
            </div>
            <div
              className={
                ppNeueMontreal.className + " lg:w-[920px] lg:text-center mt-10"
              }
            ></div>
          </div>
        </section>

        <section
          className={
            ppNeueMontreal.className +
            " wrapper max-w-[1657px] mx-auto mb-[150px] mt-[50px]"
          }
        >
          {/* <div className="w-full lg:w-[910px] mx-auto flex flex-col text-center items-center">
        <div className="w-3/4 lg:w-full text-gray-800 text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium my-10">
      The certification that sets you apart
        </div>
        </div> */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-center pb-0 flex-wrap items-center">
      {[
      {
        title: "Become a Running Health Expert",
        description: "Get certified in the industry’s leading running health program and set yourself apart in your field.",
      },
      {
        title: "Science-Backed Education",
        description: "Gain exclusive access to specialized training, ongoing education, and research-driven methodologies.",
      },
      {
        title: "Precision Movement Assessments",
        description: "Use validated scoring methods to analyze how clients Absorb impact, Bounce, and maintain Stability—no more guesswork.",
      },
      {
        title: "Footwear as a Prescription",
        description: "Recommend graded footwear as part of treatment, tailored to how each client moves post-assessment.",
      },
      {
        title: "Integrated Care, Simplified",
        description: "Streamline client care with a structured, step-by-step system that ensures consistency and results.",
      },
      {
        title: "Stand Out and Grow Your Practice",
        description: "Attract more clients, improve retention, and offer the gold standard in running assessments, footwear matching, and exercise programming.",
      },
      ].map((item, index) => (
      <Link key={index} href="#" className="text-no-underline w-full relative">
      <div className="box-border bg-white border border-1 border-black p-8 overflow-hidden h-[230px] flex flex-col  items-center justify-start text-left">
        <div className="w-full text-left items-center justify-center">
          <div style={{ fontWeight: "700" }} className="text-black text-[1.625rem] leading-[1.3]">
            {item.title}
          </div>
        </div>
          <div class="gap-x-[29px] gap-y-[29px] justify-center items-center flex w-[80%] mr-auto">
          <p className="text-black text-left">{item.description}</p>
        </div>
        <div className="mt-4 absolute top-[6rem] right-5">
          {faArrowRight("h-[2rem] flex-shrink-0 fill-black")}
        </div>
        </div>
        </Link>
        ))}
          </div> */}
        </section>

        <LandingPageTabs />
      </div>
    </div>
  );
}
