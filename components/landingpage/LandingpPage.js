"use client";
import Link from "next/link";
import { faArrowRight } from "@/graphics/faSolid";
import { faGear } from "@/graphics/faRegular";
import { faCheck } from "@/graphics/svgs";
import LandingPageTabs from "./LandingPageTabs";
import Footer from "../Footer";
import ThreeTab from "./ThreeTab";
import NavBar from "../NavBar/NavBar";
import { ppNeueMontreal } from "@/app/fonts";
import MatchMarquee from "../MatchMarquee";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <div className="hero-gradient">
        <NavBar />

        <section
          className=" wrapper flex h-[91vh] max-w-[1657px] mx-auto "
          style={{ alignItems: "center" }}
        >
          <div className="text-black flex flex-col lg:w-4/5 justify-center pr-[9rem] ">
            <div
              className={
                ppNeueMontreal.className +
                "  text-[48px]   xl:text-7xl xl:leading-none	 font-medium mb-6 lg:mb-6"
              }
            >
              The future of running health starts here
            </div>
            <span
              className={
                ppNeueMontreal.className +
                " text-[18px] leading-[1.4] lg:text-[20px] lg:leading-[1.2]"
              }
            >
              RunReady Physiotherapists study running, develop health running
              services, design exercise programs, and work with Footwear
              Specialists to grade shoes for Absorb, Bounce, and
              Stability—helping runners move better.
            </span>

            <div className="mt-10">
              <Link
                className="btn-black"
                href="/starter-package"
                // target="_blank"
              >
                Get Started Now
              </Link>
            </div>
          </div>
          <div className="flex justify-end">
          <div className="relative w-[663px] max-w-md md:max-w-none">
          <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto md:h-[75vh] border border-black object-cover"
              >
                <source src="/videos/HDWebsite15.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* HERO SECTION */}
        {/* <section className=" h-[100vh] wrapper flex flex-col lg:min-h-[640px]  relative pt-8 ">
          <div className="flex flex-col wrapper-content mx-auto  justify-center">
            <div className="md:grid grid-cols-2 w-full md:gap-x-4">
              <div className="text-black flex flex-col lg:w-4/5 justify-center ">
                <div
                  className={
                    ppNeueMontreal.className +
                    "  text-[48px]   xl:text-7xl xl:leading-none	 font-medium mb-6 lg:mb-6"
                  }
                >
                  The future of running health starts here
                </div>
                <span
                  className={
                    ppNeueMontreal.className +
                    " text-[18px] leading-[1.4] lg:text-[20px] lg:leading-[1.2]"
                  }
                >
                  RunReady Physiotherapists study running, develop health
                  running services, design exercise programs, and work with
                  Footwear Specialists to grade shoes by Absorb, Bounce, and
                  Stability—helping runners move better.
                  <br />
                  <br />
                  Coming Fall 2024.
                </span>

                <div className="mt-10">
                  <Link
                    className="btn-black"
                    href="https://runasyouare.typeform.com/to/rvNJgzpG"
                    target="_blank"
                  >
                    Join Waitlist
                  </Link>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="relative w-full max-w-md md:max-w-none">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto md:h-[50vh] border border-black object-cover"
                  >
                    <source src="/videos/HDWebsite15.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div> */}

        {/* CARDS */}
        {/* <div className="wrapper-content w-full grid grid-cols-2 gap-3 lg:gap-6 mt-10">
            <Link href="#" className="lg:flex hidden">
              <div
                className="rounded-lg w-full p-8 relative rounded-xl overflow-hidden flex items-center"
                style={{ backgroundColor: "black" }}
              >
                <div className="flex flex-col gap-2 z-10 pb-[18px]">
                  <span className="font-medium text-[18px] leading-[1.15] text-white">
                    Education & Certification
                  </span>
                  <div className="text-2xl leading-[1.25] w-3/4 font-medium text-white">
                    Learn and apply the foundational concepts
                  </div>
                </div>
                {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-white")}
              </div>
            </Link>

            <Link href="#" className="lg:flex hidden">
              <div
                className="rounded-lg w-full p-8 relative rounded-xl overflow-hidden flex items-center"
                style={{ backgroundColor: "black" }}
              >
                <div className="flex flex-col gap-2 z-10 pb-[18px]">
                  <span className="font-medium text-[18px] leading-[1.15] text-white">
                    Digital Performance Tool
                  </span>
                  <div className="text-2xl leading-[1.25] w-3/4 font-medium text-white">
                    Upgrade and advance your run assessment offering
                  </div>
                </div>
                {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-white")}
              </div>
            </Link>
          </div> */}
        {/* </section> */}
        {/* HERO END */}
        {/* <section className="bg-transparent mt-[150px] ">
        <div className="flex justify-center">
          <div className="lg:w-[920px] text-center">
            <div className="text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium mb-6">
              Built to deliver powerful run assessment programs to bridge the
              gap between health, recovery and footwear technology
            </div>
          </div>
        </div>
      </section>
      </div>

      
      <section className="wrapper wrapper-content ">
        <img src="/images/runready-screenshot.png" />
      </section> */}

        {/* 3 COL SECTION */}

        <section
          className={
            ppNeueMontreal.className +
            " wrapper max-w-[1657px] mx-auto mb-[150px] mt-[50px]"
          }
        >
          <div className="w-full lg:w-[910px] mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-gray-800 text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium my-10">
            Turning research into results
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-between pb-0 flex-wrap ">
            <Link href="#" className="text-no-underline w-inline-block">
              <div class="box-border bg-white border border-1 border-black  p-8 overflow-hidden h-[402px] ">
                <div class=" gap-y-[11px] justify-end flex flex-col items-start h-48 mb-6 ml-0 pl-0">
                  {faGear("h-[2rem] fill-black")}
                  <div
                    style={{ fontWeight: "700" }}
                    className="text-black text-[1.625rem] leading-[1.3] "
                  >
                    Research & Development
                  </div>
                </div>
                <div class="gap-x-[29px] gap-y-[29px] justify-start items-center flex">
                  <p className="text-black">
                    RunReady Physiotherapists studies how people run, builds
                    running health services, designs exercise programs, and
                    together with Footwear Specialists, grades footwear to help
                    runners move better.
                  </p>
                  {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-black")}
                </div>
              </div>
            </Link>

            <Link href="#" className="text-no-underline w-inline-block">
              <div class="box-border bg-white border border-1 border-black  p-8 overflow-hidden h-[402px] ">
                <div class=" gap-y-[11px] justify-end flex flex-col items-start h-48  mb-6 ml-0 pl-0">
                  {faGear("h-[2rem] fill-black")}
                  <div
                    style={{ fontWeight: "700" }}
                    className="text-black text-[1.625rem] leading-[1.3] "
                  >
                    RunReady Physiotherapists
                  </div>
                </div>
                <div class="gap-x-[29px] gap-y-[29px] justify-start items-center flex">
                  <p className="text-black">
                    Our Physiotherapists deliver expert assessments, precise
                    footwear matching, and tailored exercise programs at the
                    RunReady Studio in Vancouver, BC.
                  </p>
                  {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-black")}
                </div>
              </div>
            </Link>

            <Link href="#" className="text-no-underline w-inline-block">
              <div class="box-border bg-white border border-1 border-black  p-8 overflow-hidden h-[402px] ">
                <div class=" gap-y-[11px] justify-end flex flex-col items-start h-48 mb-6 ml-0 pl-0">
                  {faGear("h-[2rem] fill-black")}
                  <div
                    style={{ fontWeight: "700" }}
                    className="text-black text-[1.625rem] leading-[1.3] "
                  >
                    Education & Certification
                  </div>
                </div>
                <div class="gap-x-[29px] gap-y-[29px] justify-start items-center flex">
                  <p className="text-black">
                    We create specialized courses and certify
                    Physiotherapists—equipping them with the tools to provide
                    expert running health care through the RunReady Performance
                    Program.
                  </p>
                  {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-black")}
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* SECTION 4 */}
        <ThreeTab />

<MatchMarquee />

        <section  className="wrapper mb-[150px]    ">
          <div className="wrapper-content flex flex-col items-center justify-center">
            <div
              className={
                ppNeueMontreal.className + " max-w-[1022px] lg:text-center mb-10"
              }
            >
              <div className="text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium mb-10 lg:mb-6">
                Matched with top footwear brands
              </div>
              <div className="">
                RunReady grades footwear based on Absorb, Bounce, and
                Stability—ensuring clients get the right footwear based on how
                they move. Our system bridges your assessment with the world’s
                leading brands.
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
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
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
                  className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
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
            >
              {/* <div className="text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium mb-10 lg:mb-6">
                The missing link between movement and footwear
              </div>
              <div className="">
                Physiotherapists understand movement. Running stores know shoes.
                But neither connects the two. RunReady bridges the gap—grading
                footwear by Absorb, Bounce, and Stability so your assessment
                leads to the right fit.
              </div> */}
            </div>
          </div>
        </section>

        <section
          // style={{ margin: "0 0 150px auto" }}
          className="wrapper wrapper-content mx-auto mb-[150px]"
        >
          <div
            className={
              ppNeueMontreal.className +
              " flex flex-col md:flex-row items-stretch relative min-h-[200px] gap-12  max-w-[1022px] mx-auto scroll-mt-[305px]"
            }
          >
            <div className="flex flex-1 relative ">
              <div className="flex-col flex flex-1 justify-center md:items-center">
                <div className="">
                  <div>
                    <span className="font-medium text-[18px] leading-[1.15] text-black">
                      Elevate your expertise
                    </span>
                    <div className="text-2xl lg:text-3xl lg:leading-[1.15] font-medium mt-6">
                      The certification that sets you apart
                    </div>
                  </div>
                  <ul>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Become a Running Health Expert -{" "}
                        </span>
                        Get certified in the industry’&apos; leading running
                        health program and set yourself apart in your field.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Science-Backed Education -{" "}
                        </span>
                        Gain exclusive access to specialized training, ongoing
                        education, and research-driven methodologies.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Precision Movement Assessments -{" "}
                        </span>
                        Use validated scoring methods to analyze how clients
                        Absorb impact, Bounce, and maintain Stability—no more
                        guesswork.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Footwear as a Prescription -{" "}
                        </span>
                        Recommend graded footwear as part of treatment, tailored
                        to how each client moves post-assessment.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Integrated Care, Simplified -{" "}
                        </span>
                        Streamline client care with a structured, step-by-step
                        system that ensures consistency and results.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Stand Out and Grow Your Practice -{" "}
                        </span>
                        Attract more clients, improve retention, and offer the
                        gold standard in running assessments, footwear matching
                        and exercise programming.
                      </div>
                    </li>
                  </ul>
                  {/* <Link href="#" className="mt-6 lg:mt-12 btn-black">
                        Learn more about our tech
                      </Link> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1 relative items-center">
              <div className="img-container relative  w-[500px] h-[500px]  ">
                <img
                  src="/images/RRWebsite-2.jpg"
                  className="w-[500px] h-[500px]  border border-black object-cover"
                  />
              </div>
            </div>
          </div>
        </section>
        {/* <section className=" lg:px-28   text-black">
          <div
            className={
              ppNeueMontreal.className +
              " lg:w-[920px] lg:text-center mb-10 mx-auto"
            }
          >
            <div className="text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium mb-10 lg:mb-6">
              Work with RunReady
            </div>
            <div className="mb-10">
              We&apos;re always looking for Physiotherapists,etc etc to help
              shape the future of running health. Explore our open roles and
              become part of the team.
            </div>

            <Link
              className="btn-black "
              href="https://secure.collage.co/jobs/runasyouare
"
              target="_blank"
            >
              Open Roles
            </Link>
          </div>
        </section> */}

        {/* <section
          className={
            ppNeueMontreal.className +
            " wrapper flex max-w-[1657px] mx-auto flex-col lg:min-h-[640px] justify-start lg:justify-center relative "
          }
        >
          <div className="md:grid grid-cols-2 w-full mb-5 lg:mb-10 md:gap-x-4 wrapper-content ">
            <div className="lg:w-[560px] mb-14 lg:mb-0 text-center lg:text-left md:mt-20">
              <span className="font-medium text-[18px] leading-[1.15] text-black">
                Lead the change
              </span>
              <div
                className={
                  ppNeueMontreal.className +
                  " text-2xl lg:text-5xl lg:leading-[1.15] font-medium mb-6"
                }
              >
                Join the movement
              </div>
              <div>
                Certify your clinic in the RunReady Performance Program and set
                the standard in running health.
              </div>

              <Link href="#" className="relative inline-flex btn-black mt-6">
                <span className="mx-auto inline-flex items-center gap-2 self-center">
                  Get certified
                </span>
              </Link>
            </div>
            <div className="flex justify-end">
              <div className="img-container relative border border-1 border-black">
                <img
                  src="/images/RRWebsite-20.jpg"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="footer-gradient"> */}

        <LandingPageTabs />
      </div>
    </div>
  );
}
