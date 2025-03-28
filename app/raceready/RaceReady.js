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
              Train Smarter, Run Stronger
            </div>
            <span
              className={
                ppNeueMontreal.className +
                " text-[16px] md:text-[20px] leading-[1.4]  lg:leading-[1.2]"
              }
            >
              8-week group training program designed to improve flexibility,
              strength, and adaptability while reducing injury risk. Led by
              RunReady physiotherapists, this program helps you build resilience
              and confidence for the Vancouver Half Marathon or your next big
              goal.
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
                Reserve Your Spot Now
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
                          Physio-led training sessions
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
                          Covered by most insurance providers
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
                          Limited to 20 participants only
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
                          Price: $400 ($50 per session, receipts available)
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
                    What&apos;s included:
                  </div>
                  <ul className="text-white list-disc pl-2 mt-2 text-[14px] lg:text-[16px] leading-[1.6]">
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
                    {/* <li className="pl-2"> Limited to 100 packages</li> */}
                  </ul>
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
                What to expect
                </p>
              Every Session Has A Purpose.
            </div>

            <p className="mt-10 wrapper text-white text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
              Expect something unique and special for each session, with
              exercise programs and movements designed to improve Absorb,
              Bounce, and Stability–the three key components of your stride.
            </p>
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
                      Schedule
                </p>
                Weekly Sessions To Create Lasting Change.
              </div>
            </div>
          </div>
        </section>

        <section
          // style={{ margin: "0 auto" }}
          className="wrapper wrapper-content mb-[150px] font-secondary"
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
                  <section className=" border border-white bg-black">
                    <div className="border-b border-black">
                      <div
                        className={
                          ppNeueMontreal.className +
                          " text-white  mx-4  font-bold py-2 "
                        }
                      >
                        Dates
                      </div>
                    </div>
                    <div className="bg-white text-center">
                      <ul className="text-left">
                        {[
                          {
                            step: "1",
                            description: "April 29, 2025",
                          },
                          {
                            step: "2",
                            description: "May 6, 2025",
                          },
                          {
                            step: "3",
                            description: "May 13, 2025",
                          },
                          {
                            step: "4",
                            description: "May 20, 2025",
                          },
                          {
                            step: "5",
                            description: "May 27, 2025",
                          },
                          {
                            step: "6",
                            description: "June 3, 2025",
                          },
                          {
                            step: "7",
                            description: "June 10, 2025",
                          },
                          {
                            step: "8",
                            description: "June 17, 2025",
                          },
                        ].map(
                          (
                            { step, title, description, list, extra },
                            index,
                            array
                          ) => (
                            <li
                              key={index}
                              className={`flex flex-col sm:flex-row items-center py-2 transition duration-300 hover:bg-gray-100 ${
                                index !== array.length - 1
                                  ? "border-b border-black"
                                  : ""
                              }`}
                            >
                              <div className="pr-2  flex-shrink-0">
                                <span className="ml-4 w-5 h-5  flex items-center justify-center bg-grey-400 text-white   rounded-full">
                                  {step}
                                </span>
                              </div>
                              <div className="px-4 text-center sm:text-left">
                                <h3
                                  className={
                                    ppNeueMontreal.className +
                                    " text-lg sm:text-xl font-semibold"
                                  }
                                >
                                  {title}
                                </h3>
                                <p
                                  className={
                                    ppNeueMontreal.className +
                                    " text-gray-600 text-sm sm:text-base"
                                  }
                                >
                                  {description}
                                </p>
                                {list && (
                                  <ul className="list-disc list-inside text-left pl-5 text-sm">
                                    {list.map((item, i) => (
                                      <li key={i}>{item}</li>
                                    ))}
                                  </ul>
                                )}
                                {extra && (
                                  <p className="text-gray-600 text-sm sm:text-base">
                                    {extra}
                                  </p>
                                )}
                              </div>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </section>
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
                          7:00pm - 8:00pm
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1 relative ">
              <div className="img-container relative">
                <img
                  src="/images/RRWebsite-21.jpg"
                  className="w-[500px] h-[500px]   border border-1 border-white object-cover"
                />
              </div>
            </div>
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
                    "This program is designed with Vancouver ½ Marathon runners in mind but is great for anyone looking to fine-tune their movement and stay injury-free this Spring-Summer season.",
                },
                {
                  question: "Do I need to be an experienced runner to join?",
                  answer:
                    "Not at all! Runners of all levels are welcome. We’ll provide modifications and progressions to make sure everyone gets the most out of each session.",
                },
                {
                  question: "Do I need to bring anything specific?",
                  answer:
                    "Comfortable running gear, water, and any personal items you may need. We’ll provide everything else!",
                },
                {
                  question: "What if I miss a session, can I make it up?",
                  answer:
                    "We totally understand that life gets busy, and while we’d love to offer make-up sessions, the program is designed as a structured, progressive series with a set small group. Because of this, we aren’t able to offer make-up classes. That said, we’ll always do our best to keep you in the loop! If you have to miss a session, we encourage you to check in with a leader so you can stay on track with key takeaways from that session.",
                },
                {
                  question: "What if I am running late?",
                  answer:
                    "Try to arrive on time, but if you’re running late, just check in quietly when you arrive—we’ll get you caught up!",
                },
                {
                  question: "What if I have an injury or concern?",
                  answer:
                    "Let your RunReady Physiotherapists know at the start of the session, and they’ll provide modifications as needed.",
                },
                {
                  question: "Will there be storage for my belongings?",
                  answer:
                    "Yes! You can leave small items and bags at the shop during the session.",
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
                    "Expect a dynamic warm-up, followed by mobility work to enhance flexibility and movement quality. From there, we’ll progress into strength and movement drills designed to boost power, improve stride efficiency, and build stability—all with the goal of keeping you strong and injury-free.",
                },
                {
                  question: "Will there be running involved in each session?",
                  answer:
                    "While this isn’t a run club, some sessions may include movement drills and short running components to apply what you’re learning.",
                },
                {
                  question: "Do I need to bring any equipment?",
                  answer:
                    "Nope! Just wear comfortable workout gear and running shoes—you’ll have everything you need at the session.",
                },
                {
                  question:
                    "How much attention will I get in a small group setting?",
                  answer:
                    "With a 20-person cap, our physio-led coaching ensures you get hands-on guidance and personal feedback throughout each session.",
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
                    "Services included in the program are provided by registered Physiotherapists, which are covered by many insurance plans. Check with your provider to see if Physiotherapy is included.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit and debit cards. Full payment upfront is required, and receipts after each session will be provided for reimbursements",
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
                    "Twice during the program, you’ll get to run in demo shoes from leading brands—an opportunity to feel the difference in support (stability), cushioning (absorb), and responsiveness (bounce).",
                },
                {
                  question: "Will I get discounts on running shoes or gear?",
                  answer:
                    "Yes! Expect exclusive access to product discounts during the program.",
                },
                {
                  question: "What kind of exclusive perks should I expect?",
                  answer:
                    "You’ll receive exclusive online access to an exercise library that contains the movements covered in each session. Plus, you’ll receive a mobility ball and resistance bands to support your training. Expect discounts and gifts from our partnering neighborhood businesses as an extra bonus!",
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
