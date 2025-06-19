"use client";
import Image from "next/image";
import Link from "next/link";
import MatchMarquee from "@/components/MatchMarquee";

import NavBar from "@/components/NavBar/NavBar";
import { ppNeueMontreal } from "../fonts";
import {
  faCalendar,
  faClock,
  faLocationPin,
  faMagnifyingGlass,
  faShareNodes,
} from "@/graphics/faRegular";
import { faCheck } from "@/graphics/faSolid";
import Footer from "@/components/Footer";

export default function CommunityGrading(items) {
  return (
    <div className="flex flex-col">
      <div className="">
        <NavBar />
      <div className="relative w-full h-[92vh] flex items-center justify-center">
        <Image
          src="/images/WebsiteHero.svg"
          alt="Community Grading Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
        <img
          src="/images/Lockup.svg"
          className=" h-[50px]  md:h-[75px] absolute top-10 left-[1rem]  md:left-[4rem]  z-10"
        />
        <section className="relative z-20 wrapper flex flex-col-reverse lg:flex-row items-center justify-center h-full max-w-[1657px] mx-auto text-center">
            <div className="text-white flex flex-col w-full lg:w-[800px] h-full justify-center text-center z-10">
                     <span className=" text-[38px] lg:text-5xl   text-[transparent]  [-webkit-text-stroke:3px_#EDFC34] uppercase font-semibold ">BECOME A COMMUNITY GRADER</span>
            
              <div
                className={
                  ppNeueMontreal.className +
                  "  text-[38px] lg:text-3xl leading-none font-medium mb-6 lg:mb-6 text-white  "
                }
              >
                <span className="   ">
                  Grade the shoes that help you move better
                </span>
                <br />
              </div>
              <span
                className={
                  ppNeueMontreal.className +
                  " text-[16px] md:text-[20px]  leading-[1.4] lg:leading-[1.2] text-white"
                }
              >
                We grade every shoe at RunAsYouAre. As a community grader,
                you&apos;ll help us refine those grades so more people can find
                shoes that match how their body moves.
              </span>
              {/* 
    <div className="mt-10">
      <Link
        href="https://runready.janeapp.com/"
        target="_blank"
        className="btn-black"
      >
        Get started today
      </Link>
    </div> 
    */}
            </div>
        </section>
      </div>
        <div>
          <section className=" mb-10 font-secondary pt-[100px]">
            <div className="flex justify-center">
              <div className="lg:w-[920px] text-center">
                <p className="text-xs uppercase font-medium  tracking-widest text-black ">
                  The Grading Pool
                </p>
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                  }
                  style={{ lineHeight: "normal" }}
                >
                  How it works
                </div>
              </div>
            </div>
          </section>

          <section
            className={
              ppNeueMontreal.className + " wrapper wrapper-content mb-[100px] "
            }
          >
            <div
              className={
                ppNeueMontreal.className +
                " flex flex-col-reverse md:flex-row items-stretch relative min-h-[200px] gap-12 max-w-[1022px] mx-auto scroll-mt-[305px]"
              }
            >
              <div className="flex flex-1 relative ">
                <div className="flex-col flex flex-1 justify-center md:items-center">
                  <div className="">
                    <ul>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black">
                          1
                        </div>
                        <div>
                          <span className="font-medium  text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Apply to join one of our in-person grading events.
                          </span>          
                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black">
                          2
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            If accepted, we&apos;ll onboard you as a grader.
                          </span>

                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black">
                          3
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Your name is part of our grader pool.
                          </span>

                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black">
                          4
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Every month, we&apos;ll reach out with available
                            timeslots.
                          </span>

                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex items-center justify-center w-8 h-8 border-2 border-black rounded-full text-black">
                          5
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Book a time, test shoes, and submit your grades.
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="text-black font-semibold text-[16px] lg:text-[18px]">
                      Graders are compensated for every completed session.

                    </div>
                    <div className="mt-10">
                      <Link
                        href="https://runasyouare.typeform.com/to/e06LjsNo?typeform-source=www.google.com"
                        target="_blank"
                        className="btn-yellow block w-[fit-content] cursor-pointer hover:opacity-80"
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-1 relative items-center">
                <div className="img-container relative ">
                  <img
                    src="/images/DSC_0954.JPG"
                    className="w-[500px] h-[500px]  border border-black object-cover"
                  />
                  {/* <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded">
                    <span className="font-semibold">
                      Physio Group Class Leaders
                    </span>
                    <br />
                    Dani, Kendra and Sean
                    <br />
                    <Link
                      href="/raceready/physios-behind-the-class"
                      className="text-white underline text-sm font-medium "
                    >
                      Read More
                    </Link>
                  </div> */}
                </div>
                {/* <div className="absolute left-2 bottom-[-2rem]">
                    <Link
                      href="/raceready/physios-behind-the-class"
                      className="text-black underline text-sm font-medium hover:text-[#492AFF]"
                    >
                      Get to know your Physios
                    </Link>
                  </div> */}
              </div>
            </div>
          </section>

          <section
            className={
              ppNeueMontreal.className + " wrapper  lg:w-[1222px] mx-auto "
            }
            style={{ paddingBottom: "100px" }}
          >
            <div className="w-full   mx-auto flex flex-col text-center items-center">
              <p className="text-xs font-medium uppercase tracking-widest text-black ">
                WHAT YOU&apos;LL DO
              </p>
              <div
                className={
                  ppNeueMontreal.className +
                  " w-3/4 lg:w-full text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem]   "
                }
              >
                What you&apos;ll be grading
              </div>

              <p
                className={
                  ppNeueMontreal.className +
                  " mt-10 wrapper  text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2]"
                }
              >
                We review all feedback before grades go live. Submitted grades
                are weighted based on your running and activity level to keep
                results consistent, accurate, and fair.
              </p>
            </div>
            <section className="!mt-[1rem] sm:!mt-[1.5rem] md:!mt-[2rem] xl:!mt-[3rem] grid grid-cols-1 gap-[1rem] md:grid-cols-3 md:gap-[2rem] bg-grey-100 w-full h-auto md:h-[15.0625rem]  items-center justify-items-center p-[1rem] sm:p-[1.5rem] md:p-[2rem] xl:p-[2.5rem]">
              {/* ABSORB */}
              <div className="flex flex-col items-center text-center space-y-[0.5rem]  ">
                <div className="flex items-center gap-[0.5rem]">
                  <div className="text-brand-green">
                    <img
                      className="  h-[25px] md:h-[40px] "
                      src="/images/RR_Absorb_Icon.svg"
                      alt=" "
                    />
                  </div>
                  <div
                    className={"  text-[1.3rem] lg:text-[2rem] leading-[1.4] "}
                  >
                    Absorb
                  </div>
                </div>
                <div
                  className={
                    " text-[0.875rem] leading-[1.4] text-dark-200 max-w-[20rem]"
                  }
                >
How cushioned it feels  <br/>  (1 = firm, 10 = soft)                </div>
              </div>
              {/* BOUNCE */}
              <div className="flex flex-col items-center text-center space-y-[0.5rem]  ">
                <div className="flex items-center gap-[0.5rem]">
                  <div className="text-brand-green">
                    <img
                      className="  h-[25px] md:h-[40px] "
                      src="/images/RR_Bounce_Icon.svg"
                      alt=" "
                    />
                  </div>
                  <div
                    className={"  text-[1.3rem] lg:text-[2rem] leading-[1.4] "}
                  >
                    Bounce
                  </div>
                </div>
                <div
                  className={
                    " text-[0.875rem] leading-[1.4] text-dark-200 max-w-[20rem]"
                  }
                >
                  How much it helps you push forward  <br/>  (1 = flat, 10 = springy)
                </div>
              </div>
              {/* STABILITY */}
              <div className="flex flex-col items-center text-center space-y-[0.5rem]  ">
                <div className="flex items-center gap-[0.5rem]">
                  <div className="text-brand-green">
                    <img
                      className="  h-[25px] md:h-[40px] "
                      src="/images/RR_Support_Icon.svg"
                      alt=" "
                    />
                  </div>
                  <div
                    className={"  text-[1.3rem] lg:text-[2rem] leading-[1.4] "}
                  >
                    Stability
                  </div>
                </div>
                <div
                  className={
                    " text-[0.875rem] leading-[1.4] text-dark-200 max-w-[20rem]"
                  }
                >
                 How steady and supported it feels <br/> (1 = wobbly, 10 = very stable)
                </div>
              </div>
            </section>
          </section>
        </div>

        <MatchMarquee items={items} />

        <section className="wrapper mb-[100px]    ">
          <div className="wrapper-content flex flex-col items-center justify-center">
            <div
              className={
                ppNeueMontreal.className + " lg:w-[1022px] text-center mb-10"
              }
            >
              <p className="text-xs uppercase font-medium  tracking-widest text-black ">
                Top Running Brands
              </p>
              <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] mb-10 lg:mb-6">
                The brands you&apos;ll help grade
              </div>
              <div className="text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2]">
                Every shoe you grade comes straight from the RunAsYouAre lineup,
                the same ones you&apos;ll see on their shelves.
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
            " wrapper max-w-[1657px] flex flex-col  justify-start lg:justify-center relative  mx-auto mb-[100px] "
          }
        >
          <div className="lg:grid grid-cols-2 w-full  md:gap-x-4 wrapper-content">
            <div className=" xl:mt-[90px]   xl:w-[560px] mb-14 lg:mb-0 text-center lg:text-left">
                <p className="text-xs uppercase font-medium  tracking-widest text-black ">
                Join Us
              </p>
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[1.5rem] lg:text-[2.5rem] lg:leading-[1.15] font-medium mb-6"
                }
              >
                Ready to grade?
              </div>
              <div className="text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2] lg:pr-5 ">
                Once you&apos;re in the grader pool, we&apos;ll contact you each month
                  with available times. Choose a slot, come to the RunReady
                  Studio (inside RunAsYouAre), test multiple pairs, and submit
                  your grades. Each session takes about an hour and is paid
                  (amount TBD).
              </div>
                <div className="mt-10 lg:text-left text-center">
                      <Link
                        href="https://runasyouare.typeform.com/to/e06LjsNo?typeform-source=www.google.com"
                        target="_blank"
                        className="btn-yellow inline-block w-[fit-content] cursor-pointer hover:opacity-80"
                      >
                        Apply Now
                      </Link>
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
        {/* <div className="mb-40"></div> */}
        {/* <div className=" px-[2.5em] max-w-[1657px] wrapper  !mx-auto w-[100%]  relative z-[2]  ">
          <div className="flex flex-col lg:flex-row bg-black  justify-between items-center p-6 sm:p-[2em] gap-4 lg:gap-8">
            <div className="flex justify-center">
              <div className=" ">
                <p className="text-xs uppercase font-medium  tracking-widest text-white ">
                  Join Us
                </p>
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] text-white "
                  }
                  style={{ lineHeight: "normal" }}
                >
                  Ready to grade?
                </div>
                <div className="text-[16px] md:text-[20px]  leading-[1.4]  lg:leading-[1.2] text-white">
                  Once you’re in the grader pool, we’ll contact you each month
                  with available times. Choose a slot, come to the RunReady
                  Studio (inside RunAsYouAre), test multiple pairs, and submit
                  your grades. Each session takes about an hour and is paid
                  (amount TBD).
                </div>
              </div>
            </div>
            <Link
              className="btn-yellow-inverse border border-brand-yellow font-semibold text-center w-[200px]"
                        href="https://runasyouare.typeform.com/to/e06LjsNo?typeform-source=www.google.com"
              target="_blank"
            >
              Apply Now
            </Link>
          </div>
        </div> */}

        <div
          className=" pt-[100px] footer-gradient "
      
        >
          <div id="faq" className="text-center mb-8">
          <div className="text-[1.5rem] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] mb-10 lg:mb-6">
              Frequently Asked Questions
            </div>
          </div>
          <div className="wrapper">
            <div className="bg-white border border-black lg:w-[1022px] mx-auto p-6">
              {/* Section: General */}
              {[
                {
                  question: "Do I need to be a seasoned runner?",
                  answer:
                    "No. This is open to walkers, joggers, new runners, seasoned runners, and anyone who moves regularly. A mix of movement styles gives our team deeper insight.",
                },
                {
                  question: "Where do I grade the shoes?",
                  answer:
                    "At the RunReady Studio inside RunAsYouAre at 2033 W 4th Ave, Vancouver, BC.",
                },
                {
                  question: "How long is each grading session?",
                  answer:
                    "One hour, including trying the shoes on and doing a short test run inside the store, plus time to submit your grades.",
                },
                {
                  question: "Do I get to keep the shoes I grade?",
                  answer:
                    "No. You’re testing pairs from our footwear lineup to help refine the grades for others.",
                },
                {
                  question: "How do I receive my compensation?",
                  answer:
                    "You’ll be paid electronically 48-hours after your session. Details are shared during onboarding.",
                },
                {
                  question: "Can I apply again if I’m not selected?",
                  answer:
                    "Yes. RunReady opens applications before each new round, and you’re always welcome to reapply.",
                },
               
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-black last:border-none w-full"
                >
                  <details className={ppNeueMontreal.className + " p-4"}>
                    <summary className="cursor-pointer text-xl font-medium">
                      {faq.question}
                    </summary>
                    <div className="mt-2 text-black">
                      {faq.answer.split("\n").map((line, i) => (
                        <p key={i} className="mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
          {/* <div className="mb-40"></div> */}
          <div className="mb-[100px] "></div>

          <Footer />
        </div>
      </div>
    </div>
  );
}
