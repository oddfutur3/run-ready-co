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

export default function PerformanceProgram() {
  // notFound()
  return (
    <VScrollProvider>
      <main className="">
        <div className="flex flex-col">
          <div className="hero-gradient">
            <NavBar />
            <section
              className="wrapper flex flex-col-reverse lg:flex-row lg:h-[87vh] max-w-[1657px] mx-auto"
              style={{ alignItems: "center" }}
            >
              <div className="text-black flex flex-col w-full lg:w-4/5 justify-center text-center lg:text-left lg:pr-[9rem] pr-5">
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[38px] lg:text-5xl xl:leading-none font-medium mb-6 lg:mb-6"
                  }
                >
                  Get Ready for Your Best Run
                </div>
                <span
                  className={
                    ppNeueMontreal.className +
                    " text-[16px] md:text-[20px] leading-[1.4]  lg:leading-[1.2]"
                  }
                >
                  Complete care to improve running comfort and performance. The
                  RunReady Performance Program at RunAsYouAre offers physio-led
                  assessments, personalized footwear matching, and tailored
                  exercise programs to help you feel better on every run.
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
                    className="md:w-[850px] h-auto   md:h-[75vh] border border-black object-cover"
                    alt="Run Ready Hero"
                  />
                </div>
              </div>
            </section>

            <section className="wrapper   max-w-[1657px] mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 mt-20">
                {/* First Session */}
                <div className="bg-white border border-black flex flex-col  p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col flex-grow">
                  <div className="xl:h-[180px]">

                    <h3 className="text-black font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                       Performance Program
                    </h3>

                    <p className="text-[14px] lg:text-[16px] mb-4 text-left">
                      Improves comfort and efficiency, making running feel
                      easier. Ideal for everyday runners focused on better
                      movement and injury prevention.
                    </p>
                    </div>

                    <div>
                      <div className="flex justify-start mb-4">
                        <div className="text-center mr-10">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            60
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Minutes
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            $179
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Session
                          </p>
                        </div>
                      </div>
                      <Link
                        href="https://runready.janeapp.com/#/discipline/1/treatment/9"
                        target="_blank"
                        className="bg-brand-yellow text-black py-2 px-4 w-full font-bold transition mb-4 mt-auto text-center block"
                      >
                        Book Now
                      </Link>
                    </div>

                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                      <li className="border-b border-black pb-2">
                        Movement assessment
                      </li>
                      <li className="border-b border-black pb-2">
                        Footwear matching
                      </li>
                      <li className="border-b border-black pb-2">
                        Exercise program
                      </li>
                      <li className="border-b border-black pb-2">
                        Performance Score
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Physiotherapy & Chiropractics */}
                <div className="bg-white border border-black relative p-6 sm:p-8 md:p-10 mt-8 xl:mt-0">
                <div className="flex flex-col flex-grow">
                <div className="absolute -top-10 left-[-1px] right-[-1px] bg-black text-white text-center py-2 font-bold">
                MOST POPULAR
                  </div>

                  <div className="xl:h-[180px]">
                    <h3 className="text-black  font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                       Performance  Program+
                    </h3>

                    <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                    Builds on efficiency to help you handle more, for longer. Designed for runners who want to compete and set new PRs.
                    </p>
                  </div>

                    <div>
                      <div className="flex justify-start mb-4">
                        <div className="text-center mr-10">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            90
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Minutes
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            $249
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Session
                          </p>
                        </div>
                      </div>
                      <Link
                        href="https://runready.janeapp.com/#/discipline/1/treatment/10"
                        target="_blank"
                        className="bg-brand-yellow text-black py-2 px-4 w-full font-bold transition mb-4 mt-auto text-center block"
                      >
                        Book Now
                      </Link>
                    </div>

                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                    <li className="border-b border-black pb-2">
                        Movement assessment
                      </li>
                      <li className="border-b border-black pb-2">
                        Footwear matching
                      </li>
                      <li className="border-b border-black pb-2">
                        Exercise program
                      </li>
                      <li className="border-b border-black pb-2">
                        Performance Score
                      </li>
                      <li className="border-b border-black pb-2">
                        Treadmill analysis for deeper insights
                      </li>
                      <li className="border-b border-black pb-2">
                        More precise scoring
                      </li>
                      <li className="border-b border-black pb-2">
                        Advanced recommendations
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Massage Therapy */}
                <div className="bg-white border border-black flex flex-col p-6 sm:p-8 md:p-10">
                  <div className="flex flex-col flex-grow">

                  <div className="xl:h-[180px]">

                    <h3 className="text-black font-bold text-[1.4rem] lg:text-[1.625rem] leading-[1.3] mb-4">
                      Performance Progress Session
                    </h3>

                    <p className="text-[14px] lg:text-[16px] mb-4 text-left ">
                      This follow-up session fine-tunes your movements to
                      improve your form for the best results.
                      
                    </p>

                    </div>

                    <div>
                      <div className="flex justify-start mb-4">
                        <div className="text-center mr-10">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            30
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Minutes
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-[1.5rem] lg:text-[2.5rem] font-bold">
                            $99
                          </p>
                          <p className="text-xs md:text-sm text-gray-400">
                            Session
                          </p>
                        </div>
                      </div>
                      <Link
                        href="https://runready.janeapp.com/#/discipline/1/treatment/11"
                        target="_blank"
                        className="bg-brand-yellow text-black py-2 px-4 w-full font-bold transition mb-4 mt-auto text-center block"
                      >
                        Book Now
                      </Link>
                    </div>

                    <ul className="text-[14px] lg:text-[16px] space-y-2">
                      <li className="border-b border-black pb-2">
                        Expert guidance to perfect your form
                      </li>
                      <li className="border-b border-black pb-2">
                        Technique adjustments to improve efficiency and prevent
                        injuries
                      </li>
                      <li className="border-b border-black pb-2">
                        Updated exercise program based on progress
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative mt-8">
              <div className="px-[2.5em] max-w-[1657px] wrapper !mx-auto w-[100%] relative z-[2]">
                {/* Header */}
                <div className=" bg-black text-white text-left pl-4 py-2 font-bold">
                  BEST VALUE
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row justify-between items-stretch bg-white border border-black">
                  {/* Left Section: Package Info */}
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

                  {/* Middle Section: What's Included */}
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

                  {/* Right Section: Extra Perks */}
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
            </section>

            <section className="wrapper z-1 relative   mt-[200px] mb-[240px]  max-w-[1657px] mx-auto ">
              <div className="">
                <div className="w-[100%]  mx-auto">
                  <div className="bg-white lg:border-y lg:border-r lg:border-1 lg:border-black grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12   ">
                    <div className="   my-[-5em] overflow-hidden relative ">
                      <img
                        src="/images/RRWebsite-16.jpg"
                        className="w-full h-[100%] max-h-[750px] object-cover  border border-1 border-black"
                      />
                    </div>
                    <div className="flex flex-col justify-center py-[4rem] lg:pr-[4rem]  px-[2rem] lg:pl-0  border border-black    lg:border-none">
                      <div
                        className={
                          ppNeueMontreal.className +
                          " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 mt-10 lg:mt-0 "
                        }
                      >
                        Running Shouldn&apos;t Hurt—But Support Is All Over the
                        Place
                      </div>
                      <div
                        className={
                          ppNeueMontreal.className +
                          " text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]"
                        }
                      >
                        Running support is scattered—you get shoes from one
                        place, physio from another, and exercises from apps or
                        classes. When it&apos;s all separate, getting focused
                        results is tough.
                      </div>
                      {/* <div className="mt-10">
                        <Link href="#" className="btn-black">
                          See how it works
                        </Link>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <ThreeTab />

            <section className="bg-transparent mb-10 font-secondary ">
              <div className="flex justify-center">
                <div className="lg:w-[920px] text-center">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                    }
                  >
                    Why Choose RunReady Performance Program?
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
                              Tailored just for you:
                            </span>
                            <div className=" text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                              This service focuses on your unique movement
                              patterns and needs. This complete care approach
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
                              All-in-one solution in one visit:
                            </span>
                            <div className="   text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]">
                              Get a movement assessment, footwear match, and
                              exercise program in one session. Conveniently
                              available at RunAsYouAre and through your account
                              dashboard.
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
                              With Physiotherapy expertise and running science,
                              this service provides personalized solutions based
                              on your movement and performance needs.
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
            <section className="bg-transparent mb-10 font-secondary ">
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
            </section>

            <CardGrid />

            <section className="relative mt-[150px]">
              <div className=" px-[2.5em] max-w-[1657px] wrapper  !mx-auto w-[100%]  relative z-[2]  mb-[-5em]">
                <div className="flex flex-col lg:flex-row bg-black  justify-between items-center p-6 sm:p-[4em] gap-4 lg:gap-8">
                  <div
                    className={
                      ppNeueMontreal.className +
                      "text-[1.5rem] lg:text-[2.5rem] leading-[1.2] ' text-white text-center lg:text-left "
                    }
                  >
                    Start Running Healthier Today
                  </div>

                  <Link
                    href="https://runready.janeapp.com/"
                    target="_blank"
                    className="bg-brand-yellow p-5 font-semibold text-center "
                  >
                    Book now
                  </Link>
                </div>
              </div>

              <div className=" h-[80vh] relative overflow-hidden ">
                <Image
                  src="/images/RRWebsite-20.jpg"
                  fill={true}
                  alt="hero image"
                  className="object-cover object-top"
                  sizes="(max-width: 639px) 100vw, 100vw"
                />
              </div>
            </section>
            <div className="mb-[150px] "></div>

            <div className="mx-auto [&>*]:px-[1rem] [&>*]:md:px-[2rem] [&>*]:xl:px-[calc(3rem+0.22*(100vw-1280px))]">
              <section className="bg-transparent  font-secondary">
                <div className="flex justify-center">
                  <div className="lg:w-[920px] text-center">
                    <div
                      className={
                        ppNeueMontreal.className +
                        " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem]  "
                      }
                    >
                      Real Results from Real Runners
                    </div>
                  </div>
                </div>
              </section>

              <Testimonials />
              <div style={{ marginBottom: "150px" }}></div>
            </div>

            {/* <div className=" px-[2.5em] max-w-[1657px] wrapper  !mx-auto w-[100%]  relative z-[2] ">
              <div className="flex flex-col lg:flex-row bg-black  justify-between items-center p-6 sm:p-[4em] gap-4 lg:gap-8">
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[32px] leading-[1.2] ' text-white text-center lg:text-left "
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
            <div style={{ marginBottom: "150px" }}></div>
            <div className="wrapper max-w-[1657px] mx-auto">
              <div className=" flex wrapper-content mx-auto  justify-center">
                <div className="text-black text-center flex flex-col  justify-center lg:w-[750px] ">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                    }
                  >
                    Our Location
                  </div>

                  <div className=" mt-10 bg-white  flex flex-col w-[fit-content] mx-auto overflow-hidden border-1  border-black border ">
                    <div className="">
                      <img
                        src="/images/location.jpg"
                        className="h-[500px] object-cover object-center   border-black border-1 border-b"
                      />
                    </div>
                    <div className="p-[1.5em]">
                      <div className="  fold-bold text-2xl text-left">
                        Vancouver
                      </div>

                      <Link
                        href="https://maps.app.goo.gl/2MGWsqy1g2MWNYdd7"
                        target="_blank"
                        className="flex mt-5 "
                        style={{ alignItems: "center" }}
                      >
                        {faLocationPin("h-[1rem] fill-black mr-5  ")}
                        <div className="text-left">
                          2033 W 4th Ave, Vancouver, BC V6J 1N3
                        </div>
                      </Link>

                      <div
                        className="flex   my-5"
                        style={{ alignItems: "center" }}
                      >
                        {faShareNodes("h-[1rem] fill-black mr-5")}
                        <div>(778) 312-3343</div>
                      </div>

                      <div className="flex  " style={{ alignItems: "center" }}>
                        {faMagnifyingGlass("h-[1rem] fill-black mr-5")}
                        <div>info@runready.io</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginBottom: "150px" }}></div>
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
                <div className="bg-white border border-black lg:w-[1022px] mx-auto">
                  {[
                    {
                      question:
                        "Who is the RunReady Performance Program for? Can I do this program if I'm not a 'serious' runner?",
                      answer:
                        "It's for anyone who wants to improve their running experience, whether you're a beginner or seasoned runner.",
                    },
                    {
                      question:
                        "What’s included in the RunReady Performance Program? How are the two programs different?",
                      answer: `RunReady Performance Program (60 mins): Focuses on improving comfort and efficiency. This is a movement-based assessment. This program includes:
      
• 45 min detailed movement assessment
• 15 min personalized exercise program design
• Tailored footwear match recommendation

RunReady Performance Program+ (90 mins): Designed for personal bests and race-day goals—with greater precision in assessment and Performance Score. This is a movement and treadmill-based assessment program. This program includes:

• 45 min movement assessment
• 30 min treadmill analysis
• 15 min customized exercise program design
• Tailored footwear match recommendation`,
                    },
                    {
                      question: "How long will my session be?",
                      answer: `The length of your session will vary depending on the service that you book in for:

• RunReady Performance Program: 60 minutes
• RunReady Performance Program+: 90 minutes
• RunReady Performance Progress Session: 30 minutes`,
                    },
                    {
                      question:
                        "Will I be using the treadmill during my session?",
                      answer:
                        "It depends on which session you book. The RunReady Performance Program+ utilizes the treadmill for a running analysis, but the RunReady Performance Program does not.",
                    },
                    {
                      question:
                        "Where is the RunReady Performance Program offered?",
                      answer:
                        "This program is currently available exclusively at the RunAsYouAre shop in Vancouver.",
                    },
                    {
                      question: "How do I get started?",
                      customAnswer: (
                        <>
                          <p>
                            Start by booking a RunReady Performance Program or a
                            RunReady Performance Program+, or by purchasing our{" "}
                            <a
                              href="/starter-package"
                              className="text-brand-green underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              limited edition RunReady Performance Starter
                              Package
                            </a>
                            .
                          </p>
                          <p className="mt-2">
                            After your initial session, our team will help you
                            determine what the best timeframe for follow-up is
                            for your unique needs.
                          </p>
                        </>
                      ),
                    },
                    {
                      question: "Do I need a referral to book a session?",
                      answer:
                        "No, referrals are not required to book any RunReady services.",
                    },
                    {
                      question: "Are sessions 1:1 or in a group?",
                      answer:
                        "All of our sessions are offered on a 1:1 basis so our Physiotherapists can provide you with focused attention and customized support.",
                    },
                    {
                      question:
                        "How often should I complete the RunReady Performance Program?",
                      answer: `Your RunReady Physiotherapist will guide you after your initial assessment. They will provide a Performance Blueprint that includes recommendations for the number of sessions and frequency to improve your Performance Score.

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
                      answer: `The RunReady Performance Program is built by Physiotherapists and is intended for non-injured runners. However, the assessment is designed to detect pain and injuries during the movement tests. 

If any issues are identified, your Physiotherapist will recommend the appropriate course of action, which may or may not include treatment for injuries.`,
                    },
                    {
                      question:
                        "What happens after my first session? How often should I book follow-up sessions?",
                      answer: `Your RunReady Physiotherapist will provide you with a Performance Blueprint, which includes recommendations on when to schedule your next session based on your program results and running goals.`,
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border-b border-black last:border-none w-full"
                    >
                      <details className={ppNeueMontreal.className + " p-4"}>
                        <summary className="cursor-pointer text-[16px] md:text-[20px] font-medium">
                          {faq.question}
                        </summary>
                        <div className="mt-2 text-black text-[14px] lg:text-[16px]  ">
                          {faq.customAnswer
                            ? faq.customAnswer
                            : faq.answer.split("\n").map((line, i) => (
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
            </div>
            {/* <div style={{ marginBottom: "150px" }}></div> */}
          </div>
        </div>
      </main>
      <Footer />
    </VScrollProvider>
  );
}
