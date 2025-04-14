"use client";
import Image from "next/image";
import Footer from "@/components/Footer";

import NavBar from "@/components/NavBar/NavBar";
import { ppNeueMontreal } from "../fonts";
import {
  faLocationPin,
  faMagnifyingGlass,
  faShareNodes,
} from "@/graphics/faRegular";
import { faCheck } from "@/graphics/faSolid";

export default function FreeRRPP() {
  return (
    <div className="flex flex-col">
      <div className="hero-gradient">
        <NavBar />

        <div className="relative">
          {/* Overlay for dark effect */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-5"></div>

          {/* Centered Text on Video */}
          <div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        text-black flex flex-col min-w-[300px] z-10"
          >
            <div
              className={
                ppNeueMontreal.className +
                " text-[38px] lg:text-5xl leading-none font-medium mb-6 lg:mb-6 text-white text-center"
              }
            >
              Try the most advanced physio-led running assessment.
            </div>
          </div>

          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[calc(65vh-80px)] object-cover border-black border-b pointer-events-none"
          >
            <source src="/videos/HDWebsite15.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <section className=" wrapper wrapper-content mt-[150px] ">
          <div className="w-full  lg:w-[1022px] mx-auto flex flex-col text-center items-center">
          <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] leading-[1.28]  lg:leading-[1.25] font-medium">
          RunReady Performance Program session assesses how you move,
              matches you with the right footwear, and prescribes tailored
              exercises—so you can run better, move easier, and reduce injury
              risk.
            </div>
          </div>

          <section className="pt-8 mt-[150px] border border-black bg-black mx-auto  max-w-[1022px]">
            <div className="border-b border-black">
              <h2
                className={
                  ppNeueMontreal.className +
                  " text-white  mx-8 text-2xl font-bold mb-6 "
                }
              >
               Got your exclusive offer card? Let&apos;s get you booked.
              </h2>
            </div>
            <div className="bg-white text-center">
              <ul className="text-left">
                {[
                  {
                    step: "1",
                    title:
                      "Call the RunReady Studio to book your session and mention your exclusive complimentary offer.",
                  },
                  {
                    step: "2",
                    title: "Bring your card with you and present it when you arrive.",
                  },
                ].map(
                  ({ step, title, description, list, extra }, index, array) => (
                    <li
                      key={index}
                      className={`flex flex-col sm:flex-row items-center py-6 sm:py-8 transition duration-300 hover:bg-gray-100 ${
                        index !== array.length - 1
                          ? "border-b border-black"
                          : ""
                      }`}
                    >
                      <div className="px-4 sm:px-6 flex-shrink-0">
                        <span className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-grey-400 text-white text-3xl sm:text-4xl font-bold rounded-full">
                          {step}
                        </span>
                      </div>
                      <div className="px-4 text-center sm:text-left">
                        <h3
                          className={
                            ppNeueMontreal.className +
                            " text-[16px]  lg:text-[18px] font-semibold mt-4 md:mt-0"
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
        </section>

        {/* <section
          className={ppNeueMontreal.className + "   "}
          style={{ marginBottom: "150px", marginTop: "150px" }}
        >
          <div className="w-full  lg:w-[1022px] mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
              Performance Program, designed for you.
            </div>

            <p className="my-10 wrapper text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
              Your session includes a 1-on-1 advanced running assessment with a
              RunReady physiotherapist. In three easy steps they will:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-between pb-0 wrapper max-w-[1657px] mx-auto">
            {[
              {
                title: "Assess how you move",
                description:
                  "We study how people run, build the RunReady Performance Program, design exercise programs, work with the tech team and grade footwear to help runners move better.",
                icon: "/images/icons/RR6-centralized-icon.svg",
              },
              {
                title: "Match you with the right footwear",
                description:
                  "RunReady Therapists deliver the RunReady Performance Program, providing expert assessments, precise footwear matching, and tailored exercise programs to improve running health.",
                icon: "/images/icons/RR_Match_Icon.svg",
              },
              {
                title: "Prescribe exercises to help you run better",
                description:
                  "We connect with clinics, therapists, and industry partners to expand access to RunReady Performance Program—helping people run comfortably and perform better.",
                icon: "/images/icons/RR2-painfree-icon.svg",
              },
            ].map((block, index) => (
              <div key={index} className="text-no-underline w-full">
                <div className="box-border bg-white border border-black p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="">
                    <div className="mb-4 text-3xl">
                      <Image
                        src={block.icon}
                        alt={block.title}
                        width={50}
                        height={50}
                      />
                    </div>
                    <h3 className="text-[16px]  lg:text-[18px] font-bold mt-4">
                      {block.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full wrapper lg:w-[1022px] mx-auto flex flex-col text-center items-center">
            <p className="mt-10  text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
              At the end, you&apos;ll get expert insights, including a
              Performance Score and a personalized Performance Blueprint—your
              step-by-step plan to improve your running.
            </p>
          </div>
        </section> */}

        <section
          className={ppNeueMontreal.className + "   "}
          style={{ marginBottom: "150px", marginTop: "150px" }}
        >
          <div className="w-full  lg:w-[1022px] mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
              Claim your complimentary Performance Program session.
            </div>

            <p className="my-10 wrapper text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
              Reach out to book your session today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-between pb-0 wrapper max-w-[1022px] mx-auto">
            {[
              {
                description: (
                  <a
                    href="tel:+17783123343"
                    className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                  >
                {faShareNodes("h-[1rem] fill-black mr-2")}
                  <span>(778) 312-3343</span>
                  </a>
                ),
              },
              {
                description: (
                  <a
                    href="mailto:info@runready.co"
                    className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                  >
                  {faMagnifyingGlass("h-[1rem] fill-black mr-2")}
                  <span>info@runready.co</span>
                  </a>
                ),
              },
            ].map((block, index) => (
              <div key={index} className="text-no-underline w-full">
                <div className="box-border bg-white border border-black py-4 h-full flex flex-col justify-center items-center text-center">
                  <div className="">
                    <h3 className="text-[16px]  lg:text-[18px]  ">
                      {block.description}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-transparent mb-10 font-secondary ">
          <div className="flex justify-center">
            <div className="lg:w-[920px] text-center">
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                }
              >
              Run better, built around you.
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
                  <ul className={ppNeueMontreal.className}>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-black last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem]")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                          Everything you need in three steps:
                        </span>
                        <div className=" text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          A movement assessment, footwear match, and exercise program in one session
                        </div>
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-black last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem]")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                          Tailored just for you:
                        </span>
                        <div className="   text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                          The service focuses on your unique movement ability and needs. This complete care approach ensures that every solution - from footwear to exercises - fits you perfectly.
                        </div>
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b  border-black last:border-0">
                      <div className="flex-shrink-0 h-4 w-4">
                        {faCheck("h-[1rem]")}
                      </div>
                      <div>
                        <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                          Expert-led, science-backed care:
                        </span>
                        <div className="  text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                        Backed by physiotherapy expertise and running science, this service is built on the latest research and tailored to your performance needs.
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
                  className="w-[500px] h-[500px]   border border-1 border-black object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="wrapper wrapper-content mb-[150px]">
          <div className="flex wrapper-content mx-auto justify-center">
            <div className="text-black text-center flex flex-col justify-center max-w-[1657px]">
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem]"
                }
              >
                RunReady Studio in Kitsilano, Vancouver.
              </div>
              <p className="my-10 wrapper text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
                Visit us for advanced running assessments and running health
                services. We offer a dedicated assessment area, private lockers,
                and a water station to ensure a comfortable experience while you
                get the support you need to run better.
              </p>

              {/* Contact Info in One Line */}
              <div className="flex flex-wrap items-center gap-6 text-[16px] md:text-[20px] text-black mx-auto mb-10">
                {/* Phone */}
                <a
                  href="tel:+17783123343"
                  className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                >
                  {faShareNodes("h-[1rem] fill-black mr-2")}
                  <span>(778) 312-3343</span>
                </a>

                {/* Address */}
                <a
                  href="https://maps.app.goo.gl/T552YAw7An1eryj79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                >
                  {faLocationPin("h-[1rem] fill-black mr-2")}
                  <span>RunReady Studio - 2033 W4th Avenue Vancouver, BC</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@runready.co"
                  className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                >
                  {faMagnifyingGlass("h-[1rem] fill-black mr-2")}
                  <span>info@runready.co</span>
                </a>
              </div>

              {/* Photo Gallery Section */}
              <div className="   grid grid-cols-1  md:grid-cols-2 gap-4 lg:gap-6 mx-auto w-full max-w-[1657px]">
                <div className="relative">
                  <img
                    src="/images/rr-studio.jpg"
                    alt="RunReady Studio Interior"
                    className="w-full h-[300px] lg:h-[400px] object-cover border border-black"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/images/rr-keep-going.jpg"
                    alt="Physiotherapy in Action"
                    className="w-full h-[300px] lg:h-[400px] object-cover border border-black"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/images/rr-sign.jpg"
                    alt="Treadmill Running Assessment"
                    className="w-full h-[300px] lg:h-[400px] object-cover  border border-black"
                  />
                </div>
                <div className="relative">
                  <img
                    src="/images/studio-wall.jpg"
                    alt="RunReady Footwear Matching"
                    className="w-full h-[300px] lg:h-[400px] object-cover  border border-black"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="footer-gradient transparent">
          <div className="text-center mb-8">
            <div
              className={
                ppNeueMontreal.className +
                " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10"
              }
            >
              Frequently Asked Questions
            </div>
          </div>
          <div className="wrapper">
            <div className=" bg-white border border-black lg:w-[1022px] mx-auto p-6">
              {[
                {
                  question: "What is the RunReady Performance Program?",
                  answer: `It's the most advanced physio-led running assessment. In three easy steps:

                • Assess how your body moves.
                • Match you with the right footwear.
                • Prescribe tailored exercises to improve comfort and performance.`,
                },
                {
                  question: "Who delivers the RunReady Performance Program?",
                  answer:
                    "A licensed RunReady Physiotherapist leads your session, providing expert movement analysis and personalized recommendations.",
                },
                {
                  question: "Who is the RunReady Performance Program for?",
                  answer:
                    "Anyone who wants to run more comfortably, move better, and reduce injury risk—whether you're new to running or experienced.",
                },
                {
                  question: "What’s included in the complimentary session?",
                  answer: `• Performance Program: It’s a 60-minute movement-based assessment, footwear match, and personalized exercises.
                • Performance Program+: It’s a 90-minute movement assessment and treadmill analysis for more detailed insights.`,
                },
                {
                  question: "How do I use my complimentary session?",
                  answer:
                    "This card is valid for one free session and must be booked in advance. It cannot be transferred or exchanged for cash.",
                },
                {
                  question: "When does my card expire?",
                  answer:
                    "The expiry date is listed on your card. Be sure to book before then.",
                },
                {
                  question: "Can I book follow-up sessions?",
                  answer:
                    "If you decide to book another session, you’ll be charged the standard rate. You'll receive a receipt that you can submit to your insurance provider for physiotherapy coverage—check with them to confirm eligibility.",
                },
                {
                  question: "Will I be using a treadmill?",
                  answer:
                    "Only if you’re booked for Performance Program+. The standard Performance Program session does not include a treadmill assessment.",
                },
                {
                  question: "Where is this offered?",
                  answer:
                    "At RunReady Studio, 2033-W 4th Ave inside the RunAsYouAre shop.",
                },
                {
                  question: "Do I need a referral?",
                  answer: "No, you can book directly.",
                },
                {
                  question: "Is this a workout? Do I need to warm up?",
                  answer:
                    "No, it’s an assessment, not a workout. You’ll move through different tests but won’t need to warm up beforehand.",
                },
                {
                  question: "What should I wear and bring?",
                  answer:
                    "Wear fitted running gear and bring your current running shoes. You may go barefoot for some tests.",
                },
                {
                  question: "What happens after my session?",
                  answer:
                    "You’ll get a Performance Score and a personalized Performance Blueprint with recommendations for footwear and exercises to improve your running.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-black last:border-none w-full"
                >
                  <details className="p-4">
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

          <Footer />
        </div>
      </div>
    </div>
  );
}
