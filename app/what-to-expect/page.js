import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import Link from "next/link";
import { faCheck } from "@/graphics/faSolid";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { ppMonumentExtendedBold, ppNeueMontreal } from "../fonts";
import { faCalendar } from "@/graphics/faRegular";
import { notFound } from "next/navigation";
import ThreeTab from "@/components/ThreeTab";
import CardGrid from "@/components/HoverCards";

export const metadata = {
  title: "RunReady - What To Expect",
};

export default function WhatToExpect() {
  // notFound()
  return (
    <VScrollProvider>
      <div className="hero-gradient">
        <NavBar />

        <main className="">
          <div className="wrapper   max-w-[1657px] mx-auto">
            <section className=" !font-secondary mt-10 flex items-center justify-center ">
              <section className="pt-8 border border-black bg-black">
                <div className="border-b border-black">
                  <h2
                    className={
                      ppNeueMontreal.className +
                      " text-white  mx-8 text-2xl font-bold mb-6 "
                    }
                  >
                    First time? Here&apos;s What to Expect
                  </h2>
                </div>
                <div className="bg-white text-center">
                  <ul className="text-left">
                    {[
                      {
                        step: "1",
                        title: "Checking In",
                        description:
                          "RunReady is inside RunAsYouAre on 2033 W 4th. Arrive 15 minutes early to check in. Stop by the front desk or scan the QR code at the entrance. Still unsure where to go? Ask a team member to call a RunReady Experience Coordinator and we'll set you up.",
                      },
                      {
                        step: "2",
                        title: "What to Wear and Bring",
                        description:
                          "Wear running gear or activewear—think shorts, leggings, a tank top, or a sports bra. Nothing too loose, so we can accurately see how your body moves. For the assessment, you may need to remove your shirt to get a clearer view of your movement. Lockers are available to store your belongings.",
                      },
                      {
                        step: "3",
                        title: "Your Assessment",
                        description:
                          "Your Assess is a movement assessment, not a workout. A RunReady Physiotherapist will analyze your movement, balance, and strength. After, you'll get a Performance Score that guides your Match and Prescribe recommendations to help you run better.",
                      },
                      {
                        step: "4",
                        title: "Treadmill Analysis",
                        description:
                          "Booked a RunReady Performance Program+? This includes a treadmill analysis to assess your running form at different speeds for deeper insights.",
                      },
                      {
                        step: "5",
                        title: "Your Footwear Recommendations",
                        description:
                          "After you receive your Performance Score, you’ll get your Match—your footwear recommendation based on how you move today. The right shoes improve efficiency and reduce strain.",
                      },
                      {
                        step: "6",
                        title: "Your Performance Blueprint",
                        description:
                          "After your assessment, you’ll receive your Performance Blueprint—your custom plan of care designed to improve how your body handles running. It includes:",
                        list: [
                          "Your Performance Score",
                          "Your graded footwear match",
                          "Your targeted exercise focus areas",
                        ],
                        extra:
                          "Think of it as your roadmap to running better. It's the foundation for your Exercise Program, helping you move with more ease, absorb impact more efficiently, and reduce strain.",
                      },
                      {
                        step: "7",
                        title: "Your Exercise Program",
                        description:
                          "With your Performance Blueprint in place, Prescribe delivers a custom exercise program to help you improve comfort, absorb impact better, and reduce strain. We'll set you up on the RunReady Platform, where you can access your results, Performance Score, Match, and Exercise Program anytime.",
                      },
                      {
                        step: "8",
                        title: "Checking Out & Booking",
                        description:
                          "A RunReady Experience Coordinator will check you out and answer any questions. To make sure you’re progressing towards achieving your goals, be sure to book your next session before you leave.",
                      },
                      {
                        step: "9",
                        title: "Your Footwear Fitting",
                        description:
                          "With Match—your footwear recommendation based on how you move today, you can get fitted with a RunAsYouAre Run Specialist to find the perfect shoes.",
                      },
                    ].map(
                      (
                        { step, title, description, list, extra },
                        index,
                        array
                      ) => (
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
            </section>
            <div style={{ marginBottom: "150px" }}></div>

            <div className="mx-auto my-10">
  <div className="text-center mb-8">
    <div
      className={
        ppNeueMontreal.className +
        " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10"
      }
    >
      Still got questions? Check out our {" "}
      <Link
                      href="/FAQ"
                      className=" hover:underline"
                    >
       FAQ
       </Link> page.
    </div>
  </div>


</div>

          </div>

          <div style={{ marginBottom: "100px" }}></div>

          <Footer />
        </main>
      </div>
    </VScrollProvider>
  );
}
