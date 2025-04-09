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
      <div className="bg-black">
        <NavBar />

        <section
          className="wrapper flex flex-col-reverse lg:flex-row lg:h-[87vh] max-w-[1657px] mx-auto "
          style={{ alignItems: "center" }}
        >
          <div className="text-white flex flex-col w-full lg:w-4/5 justify-center text-center lg:text-left lg:pr-[9rem] pr-5">
            <p className="text-xs uppercase tracking-widest  mb-1">RaceReady</p>
            <div
              className={
                ppNeueMontreal.className +
                " text-[38px] text-[#e7fc4b] lg:text-5xl xl:leading-none font-medium mb-6 lg:mb-6"
              }
            >
             Train smart for race day
            </div>
            <span
              className={
                ppNeueMontreal.className +
                " text-[16px] md:text-[20px] leading-[1.4]  lg:leading-[1.2]"
              }
            >
             8-week small group training led by RunReady physiotherapists. Build strength, mobility, and adaptability—just in time for the Vancouver Half.
            </span>
            {/* <div className="mt-10">
                  <Link
                    href="https://runready.janeapp.com/"
                    target="_blank"
                    className="btn-black"
                  >
                    Get started today
                  </Link>
                </div> */}
          </div>
          <div className="flex justify-center lg:justify-end my-10 lg:my-0 w-full lg:w-auto">
            <div className="relative xl:w-[663px]  max-w-md md:max-w-none">
              <img
                src="/images/RRWebsite-9.jpg"
                className="md:w-[850px] h-auto   md:h-[75vh] border border-white object-cover"
                alt="Run Ready Hero"
              />
            </div>
          </div>
        </section>

        <section className="bg-transparent mb-10 font-secondary mt-[100px]">
          <div className="flex justify-center">
            <div className="lg:w-[920px] text-center">
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[1.5rem] lg:text-[2.5rem] text-[#e7fc4b]  "
                }
              >
                <p className="text-xs uppercase tracking-widest text-white ">
                  Limited Time Offer
                </p>
                Everything you need, nothing you don&apos;t.
              </div>
            </div>
          </div>
        </section>

        <section
          className={
            ppNeueMontreal.className + " wrapper wrapper-content mb-[150px] "
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
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium  text-[16px] lg:text-[18px] leading-[1.15] text-white">
                        8 weekly physio-led, group training classes <br/> (April 29-June 17)
                        </span>
                        {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            This service focuses on your unique movement
                            patterns and needs. This complete care approach
                            ensures that every solution—from footwear to
                            exercises—fits you perfectly.
                          </div> */}
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-white">
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
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-white">
                        Limited spots. Small group. Sharper results.
                        </span>
                        {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            With physiotherapy expertise and running science,
                            this service provides personalized solutions based
                            on your movement and performance needs.
                          </div> */}
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-white">
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
                  <div className="text-white font-semibold text-[16px] lg:text-[18px]">
                  Just $50/session. $400 total. Covered by most insurance.
                  Free starter kit included
                  </div>
                  {/* <ul className="text-white list-disc pl-2 mt-2 text-[14px] lg:text-[16px] leading-[1.6]">
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
                      href="https://checkout.runready.io/b/dR67tX2Iy7Ea6mQ5kl"
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
                  src="/images/RRWebsite-2.jpg"
                  className="w-[500px] h-[500px]  border border-white object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className={ppNeueMontreal.className + " wrapper  "}
          style={{ marginBottom: "150px", marginTop: "150px" }}
        >
          <div className="w-full   mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-[#e7fc4b] text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
              <p className="text-xs uppercase tracking-widest text-white ">
              Why it works
              </p>
              Every session builds a stronger run
            </div>

            <p className="mt-10 wrapper text-white text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
            Each class focuses on how your body handles impact, pushes off the ground, and stays stable—three key parts of running better. You’ll build strength and control step by step, so you feel more ready (and less likely to get hurt) by race day.
            </p>
          </div>
        </section>
        <section className="wrapper mb-[150px]  text-white  ">
          <div className="wrapper-content flex flex-col items-center justify-center">
            <div
              className={
                ppNeueMontreal.className + " lg:w-[1022px] text-center mb-10"
              }
            >
              <p className="text-xs uppercase tracking-widest text-white ">
              Why it works
              </p>
              <div className="text-[1.5rem]  text-[#e7fc4b] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] font-medium mb-10 lg:mb-6">
              Backed by leaders in running
              </div>
              {/* <div className="text-[16px] md:text-[20px]">
                RunReady grades footwear based on Absorb, Bounce, and
                Stability—ensuring clients get the right footwear based on how
                they move. Our system bridges your assessment with the
                world&apos;s leading brands.
              </div> */}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-y-10 px-1 py-6 lg:py-12 lg:gap-y-20 lg:px-24 w-full lg:gap-x-20 border-t border-b border-solid border-0 border-white">
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

        <section className="bg-transparent mb-10 font-secondary ">
          <div className="flex justify-center">
            <div className="lg:w-[920px] text-center">
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[1.5rem] text-[#e7fc4b] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                }
              >
                <p className="text-xs uppercase tracking-widest text-white ">
                The Schedule
                </p>
                8 workouts. 1 goal.
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper wrapper-content mb-[150px] font-secondary">
          <div
            className={
              ppNeueMontreal.className +
              " flex flex-col lg:flex-row items-stretch relative min-h-[200px] gap-12  max-w-[1022px] mx-auto scroll-mt-[305px]"
            }
          >
            <div className="flex flex-1 relative">
              <div className="flex-col flex flex-1 justify-center md:items-center">
                <div>
                  <section className="border border-white bg-black w-full">
                    {/* <div className="border-b border-white">
                      <div
                        className={
                          ppNeueMontreal.className +
                          " text-white mx-4 font-bold py-2"
                        }
                      >
                        Training Schedule
                      </div>
                    </div> */}
                    <div className="bg-white overflow-x-auto">
                      <table className="min-w-full text-left text-sm">
                        <thead className="bg-black text-white uppercase tracking-wider text-xs">
                          <tr>
                            <th className="py-3 px-4 border-r border-white">Week</th>
                            <th className="py-3 px-4 border-r border-white">Date</th>
                            <th className="py-3 px-4">Session Focus</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              step: "1",
                              description: "April 29",
                              sessionFocus: "Absorb Focus 1",
                            },
                            {
                              step: "2",
                              description: "May 6",
                              sessionFocus: "Bounce Focus 1",
                            },
                            {
                              step: "3",
                              description: "May 13*",
                              sessionFocus: (<>
                              Absorb Focus 2 + <br/> Demo w Asics (Gel Nimbus) or Nike (Invincible)
                              </>
                            ),
                            },
                            {
                              step: "4",
                              description: "May 20",
                              sessionFocus: "Bounce Focus 2",
                            },
                            {
                              step: "5",
                              description: "May 27",
                              sessionFocus: "Absorb Focus 3",
                            },
                            {
                              step: "6",
                              description: "June 3",
                              sessionFocus: (<>
                              Bounce Focus 3 + <br/> Demo by On CloudMonsterHyper
                              </>
                              ),
                            },
                            {
                              step: "7",
                              description: "June 10*",
                              sessionFocus: "Absorb Focus 4",
                            },
                            {
                              step: "8",
                              description: "June 17",
                              sessionFocus: "Bounce Focus 4",
                            },
                          ].map(
                            ({ step, description, sessionFocus }, index) => (
                              <tr
                                key={index}
                                className="border-b border-gray-300 hover:bg-gray-100 transition"
                              >
                                <td className="pr-2 flex-shrink-0">
                                  <span className="ml-4 w-5 h-5 flex items-center justify-center bg-grey-400 text-white rounded-full">
                                    {step}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-gray-700">
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
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faLocationPin("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-white">
                          Location:
                        </span>
                        <div className=" text-white text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          RunAsYouAre at 2033 West 4th Avenue in Vancouver, BC{" "}
                        </div>
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-white last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faClock("h-[1rem] fill-white")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-white">
                          Time:
                        </span>
                        <div className=" text-white  text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          7:00pm - 8:00pm <br/>
                          *Shoe Demo Night 7:00pm-8:30pm

                        </div>
                      </div>
                    </li>
                  </ul>
              </div>
            </div>

            <div className="flex justify-center flex-1 relative">
              <div className="img-container relative">
                <img
                  src="/images/RRWebsite-21.jpg"
                  className="w-[500px] h-[500px] border border-1 border-white object-cover"
                />
              </div>
            </div>
          </div>
        </section>



        <section
          className={ppNeueMontreal.className + " wrapper  "}
          style={{ marginBottom: "150px", marginTop: "150px" }}
        >
          <div className="w-full   mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-[#e7fc4b] text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
              <p className="text-xs uppercase tracking-widest text-white ">
                What to expect
              </p>
              Every session builds on the last.
            </div>

            <p className="mt-10 wrapper text-white text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
            You&apos;ll progress through training that improves Absorb (shock absorption), Bounce (energy return), and Stability (balance + control)—the foundation of every strong run.
            </p>
          </div>
        </section>

        <div className=" transparent">
          <div className="text-center mb-8">
            <div
              className={
                ppNeueMontreal.className +
                " text-[#e7fc4b] text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10"
              }
            >
              FAQ
            </div>
          </div>
          <div className="wrapper">
            <div className="bg-white border border-white lg:w-[1022px] mx-auto p-6">
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
                          <h2 className="text-2xl font-semibold mt-8 mb-4">Choosing the Right Program
                          </h2>
              {[
                {
                  question:
                    "What’s the difference between race ready and the RunReady Performance Program?",
                  answer:
                    "Race ready is a group training program designed to help you get stronger, move better, and stay injury-free in the lead-up to race day. It follows a weekly class format with up to 20 people, guided by a licensed physiotherapist. The RunReady Performance Program is a one-on-one assessment that looks at how your body moves, then matches you with the right footwear and a personalized exercise plan. If you want a consistent, community-based program to build up to a race, choose race ready. If you’re looking for a deep, personalized plan based on your unique movement, go with the Performance Program.",
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
