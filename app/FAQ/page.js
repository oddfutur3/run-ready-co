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


            <div className="mx-auto my-10">
  <div className="text-center mb-8">
    <div
      className={
        ppNeueMontreal.className +
        " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10"
      }
    >
      Got questions? We have some answers.
    </div>
  </div>

  <div className="bg-white border border-black lg:w-[1022px] mx-auto p-6">
    {/* Section: Our Programs */}
    <h2 className="text-2xl font-semibold mb-4">Our Programs</h2>
    {[
      {
        question: "What’s included in each program and how are they different?",
        answer: `RunReady Performance Program (60 mins): Focuses on improving comfort and efficiency. This is a movement-based assessment. This program includes:

• 45 min movement assessment
• 15 min customized exercise program design
• Tailored footwear match recommendation

RunReady Performance Program+ (90 mins): Designed for personal bests and race-day goals—with greater precision in assessment and Performance Score. This is a movement and treadmill-based assessment program. This program includes:

• 45 min movement assessment
• 15 min video gait analysis
• 15 min customized exercise program design
• Tailored footwear match recommendation`,
      },
      {
        question: "Is this a workout? Do I need to warm up? Will I get sweaty?",
        answer:
          "This is a movement assessment, not a workout. You’ll go through specific movements to analyze how your body moves while running. However, you should come dressed as you would for running, and you might get a little sweaty while working through the movements and/or treadmill session. You do not need to warm up in advance of your session, but you can if you want to!",
      },
      {
        question: "Will I be using the treadmill during my session?",
        answer:
          "It depends on which session you book. The RunReady Performance Program does not include use of the treadmill, however the RunReady Performance Program+ does.",
      },
      {
        question: "When should I arrive for my session?",
        answer:
          "We recommend that you come 15 mins early for your session. This will give you time to get checked in, change if needed, and store your belongings prior to your session.",
      },
      {
        question: "What happens after my assessment?",
        answer:
          "You’ll receive your Performance Blueprint, which includes your Performance Score, Match (footwear recommendation), and Prescribe (exercise program) to help improve your running. You can access all these details through your RunAsYouAre account.",
      },
      {
        question: "When should I get fitted for shoes?",
        answer:
          "Ideally, right after your assessment. Your Match is based on today’s Performance Score, so getting fitted sooner ensures your shoes support how you move now. If you can’t do it right away, you can return later, but your current Match is the most relevant fit for you today.",
      },
    ].map((faq, index) => (
      <div key={index} className="border-b border-black last:border-none w-full">
        <details className={ppNeueMontreal.className + " p-4"}>
          <summary className="cursor-pointer text-xl font-medium">
            {faq.question}
          </summary>
          <div className="mt-2 text-black">
            {faq.answer.split("\n").map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </details>
      </div>
    ))}

    {/* Section: Who Our Programs Are For */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Who Our Programs Are For</h2>
    {[
      {
        question: "Who is the RunReady Performance Program for?",
        answer:
          "Improves comfort and efficiency, making running feel easier. Ideal for everyday runners focused on better movement and injury prevention.",
      },
      {
        question: "Who is the RunReady Performance Program+ for?",
        answer: "It's for runners who want to compete and set new PRs.",
      },
      {
        question: "I have a specific race coming up—can you help me prepare?",
        answer:
          "Yes - the RunReady Performance Program+ is designed to help you optimize your running performance and running health, so whether your goal is to run healthy or to have your best race performance, this program can help you get closer to your goals.",
      },
    ].map((faq, index) => (
      <div key={index} className="border-b border-black last:border-none w-full">
        <details className={ppNeueMontreal.className + " p-4"}>
          <summary className="cursor-pointer text-xl font-medium">
            {faq.question}
          </summary>
          <div className="mt-2 text-black">
            {faq.answer.split("\n").map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </details>
      </div>
    ))}

    {/* Section: Insurance + Payments */}
    <h2 className="text-2xl font-semibold mt-8 mb-4">Insurance & Payments</h2>
    {[
      {
        question: "What types of payment do you accept?",
        answer:
          "We accept major credit and debit cards. You will need to provide a credit card on file at the time of booking your session.",
      },
      {
        question: "Can I claim this service through my insurance?",
        answer:
          "Services included in the RunReady Performance Starter Package are all provided by registered Physiotherapists, which are covered by many insurance plans. Check in with your insurance provider to find out if your plan includes Physiotherapy services.",
      },
      {
        question: "Do you bill my insurance company directly?",
        answer:
          "Not at this time. We'll provide a receipt you can submit for reimbursement. We accept major credit and debit cards.",
      },
      {
        question: "Is the footwear purchase covered by insurance?",
        answer:
          "No. The Match service (your footwear recommendation) is covered, but the purchase of footwear is not. You’ll have the option to buy your recommended shoes separately.",
      },
    ].map((faq, index) => (
      <div key={index} className="border-b border-black last:border-none w-full">
        <details className={ppNeueMontreal.className + " p-4"}>
          <summary className="cursor-pointer text-xl font-medium">
            {faq.question}
          </summary>
          <div className="mt-2 text-black">
            {faq.answer.split("\n").map((line, i) => (
              <p key={i} className="mb-2">{line}</p>
            ))}
          </div>
        </details>
      </div>
    ))}
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
