"use client";
import Image from "next/image";
import Link from "next/link";
import CustomFooter from "./CustomFooter";

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

export default function RaceReady() {
  return (
    <div className="flex flex-col">
      <div className="bg-[#ADDAD9]">
        <NavBar />
        <div
          style={{
            alignItems: "center",
            backgroundImage: "url('/images/RacereadyHero.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          className="relative"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>

          <section className="wrapper flex flex-col-reverse lg:flex-row items-center justify-center h-[92vh] max-w-[1657px] mx-auto text-center">
            <div className="text-white flex flex-col w-full lg:w-[800px] h-full justify-center text-center z-10">
              <img
                src="/images/white_raceready_wordmark.svg"
                className="h-[75px]"
              />
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[38px] text-[#492AFF] lg:text-4xl xl:leading-none font-bold mb-6 uppercase "
                }
              >
                <span className=" text-5xl  lg:text-7xl text-[transparent]  [-webkit-text-stroke:3px_#EDFC34] italic ">
                  Train smart
                </span>
                <br />
                <span className="mt-3 inline-block">for race day</span>
              </div>
              <span
                className={
                  ppNeueMontreal.className +
                  " text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]"
                }
              >
                8-week small group training led by RunReady physiotherapists.
                Build strength, mobility, and adaptability—just in time for the
                Vancouver Half.
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
        <div
          style={{
            alignItems: "center",
            backgroundImage:
              "url('/images/raceready-pattern-background-1.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className=" mb-10 font-secondary pt-[100px]">
            <div className="flex justify-center">
              <div className="lg:w-[920px] text-center">
                <p className="text-xs uppercase font-medium  tracking-widest text-black ">
                  Limited Time Offer
                </p>
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[1.5rem] lg:text-[2.5rem] text-[#492AFF] uppercase italic   "
                  }
                  style={{ lineHeight: "normal" }}
                >
                  Everything you need, <br /> nothing you don&apos;t.
                </div>
              </div>
            </div>
          </section>

          <section
            className={
              ppNeueMontreal.className + " wrapper wrapper-content mb-[75px] "
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
                        <div className="flex-shrink-0 h-4 w-4">
                          {faCheck("h-[1rem] fill-black")}
                        </div>
                        <div>
                          <span className="font-medium  text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            8 weekly physio-led, group training classes <br />{" "}
                            (April 29 - June 17)
                          </span>
                          {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            This service focuses on your unique movement
                            patterns and needs. This complete care approach
                            ensures that every solution—from footwear to
                            exercises—fits you perfectly.
                            </div> */}
                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex-shrink-0 h-4 w-4">
                          {faCheck("h-[1rem] fill-black")}
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Strength + mobility training to reduce injury
                          </span>
                          {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            Get a movement assessment, footwear match, and
                            exercise program in one session. Conveniently
                            available at RunAsYouAre and through your account
                            dashboard.
                            </div> */}
                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex-shrink-0 h-4 w-4">
                          {faCheck("h-[1rem] fill-black")}
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Small group. Sharper results.
                          </span>
                          {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            With physiotherapy expertise and running science,
                            this service provides personalized solutions based
                            on your movement and performance needs.
                            </div> */}
                        </div>
                      </li>
                      <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                        <div className="flex-shrink-0 h-4 w-4">
                          {faCheck("h-[1rem] fill-black")}
                        </div>
                        <div>
                          <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                            Test top running shoes in exclusive demo runs
                          </span>
                          {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            With physiotherapy expertise and running science,
                            this service provides personalized solutions based
                            on your movement and performance needs.
                            </div> */}
                        </div>
                      </li>
                    </ul>
                    <div className="text-black font-semibold text-[16px] lg:text-[18px]">
                      Just $49/session. $399 total.
                      <br /> Covered by most
                      insurance providers. <br />
                      <span className="font-normal italic">
                        Free starter kit included
                      </span>
                    </div>
                    {/* <ul className="text-black list-disc pl-2 mt-2 text-[14px] lg:text-[16px] leading-[1.6]">
                    <li className="pl-2">
                    8 Weekly Small Group Training Sessions (Tuesdays, April 29
                    – June 17, 2025)
                    </li>
                    <li className="pl-2">
                    Strength & Mobility work to prevent injuries and boost
                    efficiency
                    </li>
                    <li className="pl-2">
                    Footwear Demo Runs with top tier running brands
                    </li>
                    <li className="pl-2">
                    Exclusive Perks (Post-run drinks, surprise activations)
                    </li>
                    </ul> */}
                    <div className="mt-10">
                      <Link
                        href="https://checkout.runready.io/b/4gweWp5UK6A63aE9AF"
                        target="_blank"
                        className="btn-yellow block w-[fit-content]"
                      >
                        Register Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-1 relative items-center">
                <div className="img-container relative ">
                  <img
                    src="/images/RR_WebRes-6.jpg"
                    className="w-[500px] h-[500px]  border border-black object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-60 text-white text-sm px-3 py-1 rounded">
                    <span className="font-semibold">
                  Physio Group Class Leaders 
                    </span>
                  <br/>
                  Dani, Kendra and Sean<br/>
                  <Link
                      href="/raceready/physios-behind-the-class"
                      className="text-white underline text-sm font-medium "
                    >
                      Read More
                    </Link>
                  </div>
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
            className={ppNeueMontreal.className + " wrapper  lg:w-[1222px] mx-auto "}
            style={{ paddingBottom: "75px" }}
          >
            <div className="w-full   mx-auto flex flex-col text-center items-center">
              <p className="text-xs font-medium uppercase tracking-widest text-black ">
                What to Expect
              </p>
              <div className="w-3/4 lg:w-full text-[#492AFF] text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium uppercase italic">
                Training that moves <br /> you forward
              </div>

              <p className="mt-10 wrapper text-black text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
                Each week targets how you land (Absorb), push off (Bounce), and
                stay balanced (Stability), helping you put less stress on your
                joints, run with more energy, and stay steady while you run.
              </p>
            </div>
          </section>
        </div>
        <section
          className="wrapper pb-[75px] pt-[75px]  text-black  "
          style={{
            alignItems: "center",
            backgroundImage: "url('/images/rr-brand-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="wrapper-content flex flex-col items-center justify-center">
            <div
              className={
                ppNeueMontreal.className + " lg:w-[1022px] text-center mb-10"
              }
            >
              <p className="text-xs font-medium uppercase tracking-widest text-black ">
                Brand Partners
              </p>
              <div className="text-[1.5rem]  text-[#492AFF] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] font-medium mb-10 lg:mb-6 uppercase italic">
                Access perks by top brands
              </div>
              {/* <div className="text-[16px] md:text-[20px]">
                RunReady grades footwear based on Absorb, Bounce, and
                Stability—ensuring clients get the right footwear based on how
                they move. Our system bridges your assessment with the
                world&apos;s leading brands.
              </div> */}
            </div>
            <div className="grid grid-cols-2  md:grid-cols-4 justify-around gap-y-10 px-1 py-6 lg:py-12 lg:gap-y-20 lg:px-24 w-full lg:gap-x-20 border-t border-b border-solid border-0 border-[#492AFF]">
              {/* Top Row Logos */}
              {[
                "/images/partner-logos/On_Logo_Black.svg",
                "/images/partner-logos/Asics_Logo_Black.svg",
                "/images/partner-logos/Stance_logo.svg",
                "/images/partner-logos/JuiceTruck_Logo.svg",
              ].map((src, i) => (
                <div key={i} className="flex justify-center">
                  <img
                    src={src}
                    className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
                  />
                </div>
              ))}

              {/* Bottom Row Logos - wrapped and centered */}
              <div className="col-span-full flex justify-center gap-x-10 md:gap-x-40">
  {[
    "/images/partner-logos/Formula_Fig_logo.svg",
    "/images/partner-logos/human_logo.svg",
    "/images/partner-logos/SuperBoltLab_logo.svg",
  ].map((src, i) => {
    const isBig =
      src.includes("Formula_Fig") || src.includes("SuperBoltLab");

    return (
      <div key={i} className="flex justify-center">
        <img
          src={src}
          className={`object-contain ${
            isBig
              ? "h-[48px] w-[120px] lg:h-[100px] lg:w-[200px]"
              : "h-[36px] w-[100px] lg:h-[84px] lg:w-[156px]"
          }`}
        />
      </div>
    );
  })}
</div>
            </div>
            <div
                id="schedule"
              className={
                ppNeueMontreal.className + " lg:w-[920px] lg:text-center "
              }
            ></div>
          </div>
        </section>
        <div
          style={{
            alignItems: "center",
            backgroundImage:
              "url('/images/raceready-pattern-background-1.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <section className="bg-transparent  pt-[75px] font-secondary ">
            <div className="flex justify-center">
              <div className="lg:w-[920px] text-center">
                  <p className="text-xs uppercase font-medium tracking-widest text-black ">
                  Your weekly plan
                  </p>
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[1.5rem] text-[#492AFF] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] uppercase italic mb-10"
                  }
                >
                  8 workouts to run stronger
                </div>
              </div>
            </div>
          </section>

          <section className="wrapper wrapper-content  font-secondary pb-[75px]">
            <div
              className={
                ppNeueMontreal.className +
                " flex flex-col lg:flex-row items-stretch relative min-h-[200px] gap-10  max-w-[1022px] mx-auto scroll-mt-[305px]"
              }
            >
              <div className="flex flex-1 relative">
                <div className="flex-col flex flex-1 justify-center md:items-center">
                  <div>
                    <section className="border border-black bg-black w-full">
                      {/* <div className="border-b border-black">
                      <div
                        className={
                          ppNeueMontreal.className +
                          " text-black mx-4 font-bold py-2"
                        }
                      >
                        Training Schedule
                      </div>
                    </div> */}
                      <div className="bg-white overflow-x-auto">
                        <table className="min-w-full text-left text-sm">
                          <thead className="bg-[#e7fc4b] text-black uppercase tracking-wider text-xs border-b border-black">
                            <tr>
                              <th className="py-3 px-4 border-r border-black">
                                Week
                              </th>
                              <th className="py-3 px-4 border-r border-black">
                                Date
                              </th>
                              <th className="py-3 px-4">Session Focus</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              {
                                step: "1",
                                description: "April 29",
                                sessionFocus:
                                  "Learn how to land softer and protect your joints while running",
                              },
                              {
                                step: "2",
                                description: "May 6",
                                sessionFocus:
                                  "Build more strength to push off better",
                              },
                              {
                                step: "3",
                                description: "May 13*",
                                sessionFocus: (
                                  <>
                                    Improve how your body handles impact +{" "}
                                    <br /> try new footwear from ASICS
                                  </>
                                ),
                              },
                              {
                                step: "4",
                                description: "May 20",
                                sessionFocus:
                                  "Train your legs to feel lighter and bounce back faster between steps",
                              },
                              {
                                step: "5",
                                description: "May 27",
                                sessionFocus:
                                  "Strengthen how you land to stay more stable and in control",
                              },
                              {
                                step: "6",
                                description: "June 3*",
                                sessionFocus: (
                                  <>
                                    Boost power and speed off the ground + test
                                    shoes from On Running
                                  </>
                                ),
                              },
                              {
                                step: "7",
                                description: "June 10",
                                sessionFocus:
                                  "Improve control and form so you stay strong as you get tired",
                              },
                              {
                                step: "8",
                                description: "June 17",
                                sessionFocus:
                                  "Sharpen your final push—feel quicker and lighter at the end of your run",
                              },
                            ].map(
                              ({ step, description, sessionFocus }, index) => (
                                <tr
                                  key={index}
                                  className="border-b border-gray-300 hover:bg-gray-100 transition"
                                >
                                  <td className="pr-2 flex-shrink-0">
                                    <span className="ml-4 w-5 h-5 flex items-center justify-center bg-grey-400 text-black rounded-full">
                                      {step}
                                    </span>
                                  </td>
                                  <td className="py-3 px-1 text-gray-700 font-semibold">
                                    {description}
                                  </td>
                                  <td className="py-3 px-4 text-gray-700">
                                    {sessionFocus}
                                  </td>
                                </tr>
                              )
                            )}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  </div>
                  <ul className={ppNeueMontreal.className}>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-black last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faLocationPin("h-[1rem] fill-black")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                          Location:
                        </span>
                        <div className=" text-black text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          RunAsYouAre at 2033 West 4th Avenue in Vancouver, BC{" "}
                        </div>
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-black last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faClock("h-[1rem] fill-black")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                          Time:
                        </span>
                        <div className=" text-black  text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          7:00pm - 8:00pm <br />
                          7:00pm - 8:30pm{"  "}
                          <span className="ml-2">*shoe demo night</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex justify-center flex-1 relative">
                <div className="img-container relative">
                  <img
                    src="/images/RR_WebRes-5.jpg"
                    className="w-[500px] h-[542px] border border-1 border-black object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

        </div>

        <div
          className=" pt-[75px]  "
          style={{
            backgroundImage: "url('/images/rr-faq-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          >
          <div 
          id="faq"
            className="text-center mb-8" 
          >
            <div
              className={
                ppNeueMontreal.className +
                " text-[#492AFF] text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 uppercase italic"
              }
            >
              frequently Asked Questions
            </div>
          </div>
          <div className="wrapper">
            <div className="bg-white border border-black lg:w-[1022px] mx-auto p-6">
              {/* Section: General */}
              <h2 className="text-2xl font-semibold mb-4">General</h2>
              {[
                {
                  question: "Who is the program best suited for?",
                  answer:
                    "This program is built for anyone training for a race, but it’s also a great fit if you just want to move better and avoid injury this spring or summer, even if you’re not racing.",
                },
                {
                  question: "Do I need to be an experienced runner to join?",
                  answer:
                    "All experience levels are welcome. We’ll make sure every session includes options so everyone can train at their own pace.",
                },
                {
                  question: "Do I need to bring anything specific?",
                  answer:
                    "Just wear comfortable running clothes, bring some water, and anything else you need personally. We’ll take care of the rest.",
                },
                {
                  question: "What if I miss a session, can I make it up?",
                  answer:
                    "Since this is a small group and each session builds on the last, we’re not able to offer make-up classes. But if you miss one, check in with your RunReady Physiotherapist, they’ll help you catch up on the key takeaways so you can stay on track.",
                },
                {
                  question: "What if I am running late?",
                  answer:
                    "Try to be on time, but if you’re late, just check in quietly when you arrive. We’ll help you catch up.",
                },
                {
                  question: "What if I have an injury or concern?",
                  answer:
                    "Let your physiotherapist know before the session starts. They’ll give you any needed modifications so you can still get the most out of it.",
                },
                {
                  question: "Will there be storage for my belongings?",
                  answer:
                    "Yes. You can safely leave bags and small personal items at the shop during your session.",
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

              {/* Section: Training */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">Training</h2>
              {[
                {
                  question:
                    "What kind of exercises will I be doing in the sessions?",
                  answer:
                    "We’ll start with a dynamic warm-up, followed by mobility work to improve flexibility and movement. Then we’ll get into strength and movement drills to improve your power, efficiency, and control, everything designed to help you run stronger and reduce injury risk.",
                },
                {
                  question: "Will there be running involved in each session?",
                  answer:
                    "This isn’t a run club, but some sessions may include short running drills or movements to help you apply what you’re learning.",
                },
                {
                  question: "Do I need to bring any equipment?",
                  answer:
                    "Just show up in comfortable workout gear and running shoes. Everything else is provided.",
                },
                {
                  question:
                    "How much attention will I get in a small group setting?",
                  answer:
                    "We keep it capped at 20 people, and every session is led by licensed RunReady Physiotherapists, so you’ll get personal feedback and plenty of hands-on guidance.",
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

              {/* Section: Insurance & Payments */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Insurance & Payments
              </h2>
              {[
                {
                  question:
                    "How does insurance coverage work for this program?",
                  answer:
                    "Because race ready is led by licensed physiotherapists, it qualifies as physiotherapy treatment. You’ll get an official receipt after each session that you can submit to your extended health provider. Coverage depends on your individual plan.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "You can pay using most major credit and debit cards. Full payment is required up front to reserve your spot. After each session, you’ll get an individual receipt for insurance claims.",
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

              {/* Section: Footwear & Perks */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Footwear & Perks
              </h2>
              {[
                {
                  question: "How do the footwear demo runs work?",
                  answer:
                    "Twice during the program, you’ll have the chance to run in demo shoes from top running brands. It’s a great way to feel the difference in support (stability), cushioning (absorb), and responsiveness (bounce)—all key parts of your stride.",
                },
                {
                  question: "Will I get discounts on running shoes or gear?",
                  answer:
                    "Not directly, but some of our brand and local partners may offer surprise discounts or perks during the program.",
                },
                {
                  question: "What kind of exclusive perks should I expect?",
                  answer:
                    "You’ll get online access to a private exercise library with all the movements we cover in the sessions. You’ll also receive a mobility ball and resistance bands to use at home. Plus, there may be surprise gifts or discounts from our local business partners.",
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

              {/* Section: Choosing the Right Program
               */}
              <h2 className="text-2xl font-semibold mt-8 mb-4">
                Choosing the Right Program
              </h2>
              {[
                {
                  question:
                    "What’s the difference between race ready and the RunReady Performance Program?",
                  answer:
                    "race ready is a group training program designed to help you get stronger, move better, and stay injury-free in the lead-up to race day. It follows a weekly class format with up to 20 people, guided by a licensed physiotherapist. The RunReady Performance Program is a one-on-one assessment that looks at how your body moves, then matches you with the right footwear and a personalized exercise plan. If you want a consistent, community-based program to build up to a race, choose race ready. If you’re looking for a deep, personalized plan based on your unique movement, go with the Performance Program.",
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
          <div className="mb-[150px] "></div>

          <CustomFooter />
        </div>
      </div>
    </div>
  );
}
