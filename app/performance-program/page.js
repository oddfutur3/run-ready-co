import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import Link from "next/link";
import { faCheck } from "@/graphics/faSolid";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { ppNeueMontreal } from "../fonts";
import {
  faBars,
  faCalendar,
  faCircleInfo,
  faLocationPin,
  faMagnifyingGlass,
  faShareNodes,
} from "@/graphics/faRegular";
import { notFound } from "next/navigation";
import ThreeTab from "@/components/ThreeTab";
import CardGrid from "@/components/HoverCards";

export const metadata = {
  title: "RunReady - Performance Program",
};

export default function RunReady() {
  // notFound()
  return (
    <VScrollProvider>
      <main className="">
        <div className="flex flex-col">
          <div className="hero-gradient">
            <NavBar />
            <section
              className="wrapper flex flex-col-reverse lg:flex-row lg:h-[91vh] max-w-[1657px] mx-auto"
              style={{ alignItems: "center" }}
            >
              <div className="text-black flex flex-col w-full lg:w-4/5 justify-center text-center lg:text-left lg:pr-[6rem] pr-5">
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[38px] lg:text-5xl xl:leading-none font-medium mb-6 lg:mb-6"
                  }
                >
                  The Most Advanced Running Assessment.
                  <br />
                  By Expert Physiotherapists.{" "}
                </div>
                <span
                  className={
                    ppNeueMontreal.className +
                    " text-[16px] md:text-[20px] leading-[1.4]  lg:leading-[1.2]"
                  }
                >
                  RunReady Performance Program assesses how you move, matches
                  you with the right footwear, and prescribes tailored
                  exercises—so you can run better, move easier, and reduce
                  injury risk.
                </span>
                <div className="mt-10">
                  <Link
                    href="https://runready.janeapp.com/"
                    target="_blank"
                    className="btn-black"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end my-10 lg:my-0 w-full lg:w-auto">
                <div className="relative xl:w-[663px]  max-w-md md:max-w-none">
                  <img
                    src="/images/RRWebsite-9.jpg"
                    className="md:w-[850px] h-auto   md:h-[75vh] border border-black object-cover"
                    alt="Run Ready Hero"
                  />
                </div>
              </div>
            </section>

            <div className=" mb-[100px]"></div>

            <section className="wrapper   max-w-[1657px] mx-auto  ">
              <div className="w-full lg:w-[1022px] mx-auto flex flex-col text-center items-center">
                <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
                  Our team of health professionals are here to help you run
                  healthy.
                </div>

                <p className="my-10 text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
                  Our services are provided by licensed physiotherapists, and
                  are eligible for insurance coverage, making it both beneficial
                  and affordable for you.
                </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 mt-20 gap-8">
                {/* First Session */}
                <div className="col-span-1 xl:col-span-2 relative">
                  <div className="absolute -top-10 left-0 right-0 bg-black text-white text-center py-2 font-bold border border-black z-10">
                    YOUR FIRST SESSION
                  </div>
                  <div className="absolute top-[50%] left-[47.3%]  bg-black text-white text-center py-2 font-bold border border-black z-10 w-[50px]">
                    OR
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2  relative">
                    <div className="bg-white border-b border-l border-black flex flex-col p-6 sm:p-8 md:p-10 ">
                      <div className="lg:h-[280px]">
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                          Performance Program (RRPP)
                        </p>
                        <h3 className="text-black font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                          Movement <br /> Assessment
                        </h3>
                        <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                          60 MIN | $179 SESSION
                        </p>

                        <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                          A movement assessment with a physiotherapist. You will
                          receive scores that measure Absorb, Bounce, and
                          Stability to match you with the proper footwear to
                          complement your needs and a customized exercise
                          program.
                        </p>
                      </div>

                      <ul className="text-[14px] lg:text-[16px] space-y-2">
                        <li className="border-b border-black pb-2 flex items-center">
                          {faCheck("h-[1rem] mr-2")} Movement assessment
                        </li>
                        <li className="border-b border-black pb-2 flex items-center">
                          {faCheck("h-[1rem] mr-2")} Footwear matching
                        </li>
                        <li className="border-b border-black pb-2 flex items-center">
                          {faCheck("h-[1rem] mr-2")} Exercise program
                        </li>
                        <li className="border-b border-black pb-2 flex items-center">
                          {faCheck("h-[1rem] mr-2")} Performance Score
                        </li>
                      </ul>

                      {/* CTA pinned to bottom */}
                      <div className="mt-auto pt-6">
                        <Link
                          href="https://runready.janeapp.com/#/discipline/1/treatment/9"
                          target="_blank"
                          className="bg-brand-yellow text-black x-[1.5rem] py-[0.75rem] lg:px-[2.25rem] lg:py-[1rem]; w-full  transition text-center block  hover:opacity-[80%] uppercase"
                        >
                          Book a Session
                        </Link>
                      </div>
                    </div>
                    <div className="bg-white border border-black flex flex-col relative p-6 sm:p-8 md:p-10 xl:mt-0 mt-8">
                      <div className="flex flex-col flex-grow">
                        {/* Eyebrow Text */}
                        <div className="lg:h-[280px]">
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                            Performance Program plus (RRPP+)
                          </p>

                          {/* Title */}
                          <h3 className="text-black font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                            Movement + Treadmill Assessment
                          </h3>
                          <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                            90 MIN | $249 SESSION
                          </p>

                          {/* Description */}
                          <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                            Everything from RRPP in addition to a treadmill
                            analysis with a physiotherapist. We analyze your
                            running form to measure Symmetry, allowing more
                            details and precision in footwear recommendations
                            and exercise programs.
                          </p>
                        </div>

                        {/* Session Details */}

                        {/* Features List */}
                        <ul className="text-[14px] lg:text-[16px] space-y-2">
                          <li className="border-b border-black pb-2 flex items-center">
                            {faCheck("h-[1rem] mr-2")} Movement assessment
                          </li>
                          <li className="border-b border-black pb-2 flex items-center">
                            {faCheck("h-[1rem] mr-2")} Footwear matching
                          </li>
                          <li className="border-b border-black pb-2 flex items-center">
                            {faCheck("h-[1rem] mr-2")} Exercise program
                          </li>
                          <li className="border-b border-black pb-2 flex items-center">
                            {faCheck("h-[1rem] mr-2")} Treadmill analysis
                          </li>
                          <li className="border-b border-black pb-2 flex items-center">
                            {faCheck("h-[1rem] mr-2")} Performance Score
                          </li>
                        </ul>

                        {/* CTA pinned to bottom */}
                        <div className="mt-auto pt-6">
                          <Link
                            href="https://runready.janeapp.com/#/discipline/1/treatment/10"
                            target="_blank"
                            className="bg-brand-yellow text-black  w-full x-[1.5rem] py-[0.75rem] lg:px-[2.25rem] lg:py-[1rem];transition text-center block  hover:opacity-[80%] uppercase"
                          >
                            Book a Session
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Massage Therapy */}
                <div
                  className="bg-white border border-black flex flex-col p-6 sm:p-8 md:p-10 h-[]
                "
                >
                  <div className="flex flex-col flex-grow">
                    <div className="lg:h-[280px]">
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                        Progress Session
                      </p>
                      <h3 className="text-black font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                        Performance Program Follow-up
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                        30 MIN | $99 SESSION
                      </p>

                      <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                        This follow-up session fine-tunes your movements with a
                        physiotherapist to improve your form for the best
                        results.
                      </p>
                    </div>

                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                      <li className="border-b border-black pb-2 flex items-center">
                        {faCheck("h-[1rem] mr-2")} Active physiotherapy
                      </li>
                      <li className="border-b border-black pb-2 flex items-center">
                        {faCheck("h-[1rem] mr-2")} Expert guidance to perfect
                        your form
                      </li>
                      <li className="border-b border-black pb-2 flex items-center">
                        {faCheck("h-[1rem] mr-2")} Exercise program
                      </li>
                    </ul>

                    {/* CTA pinned to bottom */}
                    <div className="mt-auto pt-6">
                      <Link
                        href="https://runready.janeapp.com/#/discipline/1/treatment/11"
                        target="_blank"
                        className="bg-brand-yellow text-black x-[1.5rem] py-[0.75rem] lg:px-[2.25rem] lg:py-[1rem]; w-full   transition text-center block  hover:opacity-[80%] uppercase"
                      >
                        Book a Session
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="relative mt-8">
              <div className="px-[2.5em] max-w-[1657px] wrapper !mx-auto w-[100%] relative z-[2]">
                <div className=" bg-black text-white text-left pl-4 py-2 font-bold">
                  BEST VALUE
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-stretch bg-white border border-black">
                  <div className="py-6 px-6 lg:px-12 lg:w-1/3 lg:border-r lg:border-black flex flex-col justify-between">
                    <div>
                    <h3 className="text-black  font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                        Performance Program Starter Pack
                      </h3>
                      <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                      The perfect way to take your running to the next level.
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-5">
                      <div className="text-[2.5rem] font-bold">$349</div>
                      <Link
                        href="https://checkout.runready.io/b/dR67tX2Iy7Ea6mQ5kl"
                        target="_blank"
                        className="bg-brand-yellow text-black py-2 px-4 w-full font-bold transition  text-center block"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>

                  <div className="py-6  px-6 lg:px-12 lg:w-1/3 lg:border-r lg:border-black">
                    <h3 className="text-lg font-bold mb-3">What&apos;s Included</h3>
                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                    <li className="border-b border-black pb-2">
                    RunReady Performance Program</li>
                    <li className="border-b border-black pb-2">
                        3x Performance Program Sessions</li>
                        <li className="border-b border-black pb-2">
                        Fine-tune your movement and maximize your performance
                        with expert guidance
                      </li>
                    </ul>
                  </div>

                  <div className="py-6 px-6 lg:px-12 lg:w-1/3">
                    <h3 className="text-lg font-bold mb-3">Extra Perks</h3>
                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                    <li className="border-b border-black pb-2">
                        Recovery ball + loop band</li>
                        <li className="border-b border-black pb-2">
                        $25 off your first footwear purchase</li>
                        <li className="border-b border-black pb-2">
                        RunReady Half Marathon Performance Plan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section> */}

            <section className="bg-transparent mb-10 font-secondary mt-[150px] ">
              <div className="flex justify-center">
                <div className="lg:w-[920px] text-center">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                    }
                  >
                    The only all-in-one solution available today
                  </div>
                </div>
              </div>
            </section>

            <section className="wrapper wrapper-content mb-[150px] font-secondary">
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
                              A movement assessment, footwear match, and
                              exercise program in one session.
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
                              This service focuses on your unique movement
                              ability and needs. This complete care approach
                              ensures that every solution—from footwear to
                              exercises—fits you perfectly.
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
                              With physiotherapy expertise and running science,
                              this service provides personalized solutions based
                              on the latest research paired with your
                              performance needs.
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
                      alt=" "
                    />
                  </div>
                </div>
              </div>
            </section>
            {/* <section className="bg-transparent mb-10 font-secondary ">
              <div className="flex justify-center">
                <div className="lg:w-[920px] text-center">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                    }
                  >
                    Benefits of the RunReady Performance Program
                  </div>
                </div>
              </div>
            </section> */}

            {/* <CardGrid /> */}

            {/* <div className=" px-[2.5em] max-w-[1657px] wrapper  !mx-auto w-[100%]  relative z-[2] ">
              <div className="flex flex-col lg:flex-row bg-black  justify-between items-center p-6 sm:p-[4em] gap-4 lg:gap-8">
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[32px] leading-[1.2] tracking-[-1.26px] text-white text-center lg:text-left "
                  }
                >
                  Start Running Healthier Today
                </div>

                <Link
                  href="https://runready.janeapp.com/"
                  target="_blank"
                  className="btn-black !border !border-2 !text-white !bg-transparent"
                >
                  Book now
                </Link>
              </div>
            </div> */}

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
                    services. We offer a dedicated assessment area, private
                    lockers, and a water station to ensure a comfortable
                    experience while you get the support you need to run better.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 text-[16px] md:text-[20px] text-black mx-auto mb-10">
                    {/* Phone */}
                    <a
                      href="tel:+17783121322"
                      className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                    >
                      {faShareNodes("h-[1rem] fill-black mr-2")}
                      <span>(778) 312-1322</span>
                    </a>

                    {/* Address */}
                    <a
                      href="https://maps.app.goo.gl/T552YAw7An1eryj79"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center lg:text-[16px] text-[14px] hover:underline"
                    >
                      {faLocationPin("h-[1rem] fill-black mr-2")}
                      <span>
                        RunReady Studio - 2033 W4th Avenue Vancouver, BC
                      </span>
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
                  FAQ
                </div>
              </div>

              <div className="bg-white border border-black lg:w-[1022px] mx-auto p-6">
                {[
                  {
                    question: "What is the RunReady Performance Program?",
                    answer: `It's the most advanced physio-led running assessment, in three easy steps:

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
                    question:
                      "What’s included in the RunReady Performance Program? How are the two programs different?",
                    answer: `• Performance Program: A 60-minute movement-based assessment, footwear match, and personalized exercises.
• Performance Program+: A 90-minute movement assessment and treadmill analysis for more detailed insights.`,
                  },
                  {
                    question: "How long will my session be?",
                    answer: `The length of your session will vary depending on the service that you book in for:
• RunReady Performance Program: 60 minutes
• RunReady Performance Program+: 90 minutes
• RunReady Performance Progress Session: 30 minutes`,
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
                    answer: `RunReady Performance Program and RunReady Performance Program+ are assessments, not a workout. You’ll move through different movement tests and/or run on a treadmill for a short period of time.
      
RunReady Performance Progress Sessions are active physiotherapy training sessions, so be prepared to sweat.

*A warm-up is always recommended before movement, so feel free to come in a few minutes early to stretch.`,
                  },
                  {
                    question: "What should I wear and bring?",
                    answer:
                      "Wear fitted running gear and bring your current running shoes. You may go barefoot for some tests.",
                  },
                  {
                    question:
                      "What happens after my session? Do I need to come back?",
                    answer: `Your RunReady Physiotherapist will guide you after your assessment. They will provide a Performance Blueprint that includes recommendations for the number of sessions and frequency to improve your Performance Score.

The RunReady Performance Program is designed to help you benchmark your current running movement and improve your running health and performance. At minimum, we recommend reassessing your movement every 3-6 months, depending on your running goals.

We also offer 30-minute Performance Progress Sessions designed to help you improve your score. These sessions will be recommended by your Physiotherapist based on your program results and goals.`,
                  },
                  {
                    question:
                      "How is the RunReady Performance Program different from regular physiotherapy?",
                    answer:
                      "The RunReady Performance Program is designed to be fully comprehensive for assessments, footwear recommendations, and exercise programming. We collaborate with run specialists, footwear specialists, and footwear brands to develop our program.",
                  },
                  {
                    question:
                      "Will the RunReady Performance Program treat my injuries?",
                    answer: `The RunReady Performance Program is built by physiotherapists and is intended for non-injured runners. However, the assessment is designed to detect pain and injuries during the movement tests.

If any issues are identified, your Physiotherapist will recommend the appropriate course of action, which may or may not include treatment for injuries.`,
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

              {/* <div className="mb-40"></div> */}
              <div className="mb-[150px] "></div>

              <Footer />
            </div>
          </div>
        </div>
      </main>
    </VScrollProvider>
  );
}
