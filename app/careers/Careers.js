"use client";
import Image from "next/image";
import Link from "next/link";
import { faCheck, faArrowRight } from "@/graphics/faSolid";
import { faGear } from "@/graphics/faRegular";
import { faPlay } from "@/graphics/faSolid";
import Footer from "@/components/Footer";

import NavBar from "@/components/NavBar/NavBar";
import LandingPageTabs from "@/components/landingpage/LandingPageTabs";
import { ppNeueMontreal } from "../fonts";



export default function Careers() {
  return (
    <div className="flex flex-col">
      <div className="hero-gradient">
        <NavBar />

        <section
          className=" wrapper flex flex-col-reverse lg:flex-row lg:h-[87vh] max-w-[1657px] mx-auto"
          style={{ alignItems: "center" }}
        >
                    <div className="text-black flex flex-col w-full lg:w-4/5 justify-center text-center lg:text-left  pr-5">
                    <div
                className={
                  ppNeueMontreal.className +
                  " text-[38px] xl:text-7xl xl:leading-none font-medium mb-6 lg:mb-6  lg:pr-[9rem] pr-0"
                }
              >
                Move Running Forward
              </div>
              <span
                className={
                  ppNeueMontreal.className +
                  " text-[16px] md:text-[20px]  leading-[1.3]  w-full md:w-[80%] lg:leading-[1.2]"
                }
              >
                RunReady is redefining running health through research,
                innovation, and real-world testing. Join us in shaping the
                future of how people run.
              </span>
              <div className="mt-10">
                <Link
                  className="btn-black"
                  href="https://secure.collage.co/jobs/runasyouare"
                  target="_blank"
                >
                  Open Roles
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end my-10 lg:my-0 w-full lg:w-auto">
            <div className="relative xl:w-[663px]  max-w-md md:max-w-none">
                <img
                  src="/images/RRWebsite-13.jpg"
                  className="w-full h-auto md:h-[75vh] border border-black object-cover"
                  alt="Run Ready Hero"
                />
              </div>
            </div>
         
        </section>

        {/* 3 COL SECTION */}

        {/* SECTION 4 */}
        {/* <ThreeTab /> */}

        {/* <section className=" h-[90vh] wrapper flex flex-col lg:min-h-[640px] justify-start lg:justify-center relative pt-8 lg:pt-0">
        <div className="md:grid grid-cols-2 w-full mb-5 lg:mb-10 md:gap-x-4 wrapper-content">
          <div className="lg:w-[560px] mb-14 lg:mb-0 text-center lg:text-left">
            <span className="font-medium text-[18px] leading-[1.15] text-black">
              Our Impact Portfolio
            </span>
            <div className="text-2xl lg:text-5xl lg:leading-[1.15] font-medium mt-6">
              We offer a wide range of nature, carbon, and biodiversity projects
              to help restore our planet.{" "}
            </div>
            <Link href="#" className="relative inline-flex btn-black mt-12">
              <span className="mx-auto inline-flex items-center gap-2 self-center">
                View Impact Portfolio
              </span>
            </Link>
          </div>
          <div className="flex justify-end">
            <div className="img-container relative border border-1 border-black">
              <img
                src="https://placehold.co/390x370/FFFFFF/00000/png"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
        </div>
      		</section>
      	<section className="bg-transparent mb-10 lg:mb-20">
        <div className="flex justify-center">
          <div className="lg:w-[920px] text-center">
            <div className="lg:text-[60px] text-[34px] leading-[1.25] lg:font-medium mb-10 lg:mb-6">
              Nature and climate solutions that meet your business needs
            </div>
          </div>
        </div>
      	</section> */}

        {/* <section
          // style={{ margin: "0 auto" }}
          className="wrapper wrapper-content mt-[100px] mb-[150px] "
        >
          <div
            className={
              ppNeueMontreal.className +
              " flex flex-col-reverse md:flex-row items-stretch relative min-h-[200px] gap-12  max-w-[1022px] mx-auto scroll-mt-[305px]"
            }
          >
            <div className="flex flex-1 relative">
              <div className="flex-col flex flex-1 justify-center md:items-center">
                <div className="">
                  <div>
                    <span className="font-medium text-[18px] leading-[1.15] text-black">
                      Our Culture
                    </span>
                    <div className="text-2xl lg:text-3xl lg:leading-[1.15] font-medium mt-6">
                      Built for Progress
                    </div>
                    <div>
                      RunReady is built on curiosity, collaboration, and a drive
                      to keep runners moving at their best. Our culture is
                      shaped by these core values:
                    </div>
                  </div>
                  <ul>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      {faCheck("h-[1rem]")} Lorem Ipsum is simply dummy text of
                      the printing and typesetting industry.
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      {faCheck("h-[1rem]")}Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      {faCheck("h-[1rem]")} Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s
                    </li>
                  </ul>
                  <Link href="#" className="mt-6 lg:mt-12 btn-black">
                  Learn more about our tech
                </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1 relative ">
              <div className="img-container relative  ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[500px] h-[500px]  border border-black object-cover"
                  >
                  <source src="/videos/HDWebsite15.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section> */}

        <section
          className={ppNeueMontreal.className + "   "}
          style={{ marginBottom: "150px", marginTop:"100px" }}
        >
          <div className="w-full lg:w-[1022px] mx-auto flex flex-col text-center items-center">
            <div className="w-3/4 lg:w-full text-gray-800 text-[1.5rem] leading-[1.28] lg:text-[2.5rem] lg:leading-[1.25] font-medium">
              Innovating for Healthier Running
            </div>

            <p className="my-10 text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]">
              Whether you&apos;re helping runners move better, pushing the
              boundaries of research, or building new partnerships, every role
              at RunReady plays a part in changing the way the world runs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-[1.1rem] gap-y-[2rem] auto-cols-fr justify-between pb-0 wrapper max-w-[1657px] mx-auto">
  {[
    {
      title: "Research & Development",
      description:
        "We study how people run, build the RunReady Performance Program, design exercise programs, work with the tech team and grade footwear to help runners move better.",
    },
    {
      title: "RunReady Studio",
      description:
        "RunReady Therapists deliver the RunReady Performance Program, providing expert assessments, precise footwear matching, and tailored exercise programs to improve running health.",
    },
    {
      title: "Business Development",
      description:
        "We connect with clinics, therapists, and industry partners to expand access to RunReady Performance Program—helping people run comfortably and perform better.",
    },
  ].map((block, index) => (
    <div key={index} className="text-no-underline w-full">
      <div className="box-border bg-white border border-black p-8 h-full flex flex-col justify-center items-center text-center">
        <div className="mb-6">
          <h3 className="text-black text-[1.4rem] lg:text-[1.625rem] leading-[1.3] font-bold">
            {block.title}
          </h3>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-black  text-[14px] lg:text-[16px]">{block.description}</p>
        </div>
      </div>
    </div>
  ))}
            {/* <div className="text-no-underline w-inline-block">
              <div class="box-border bg-white border border-1 border-black  p-8 overflow-hidden  lg:h-[474px] ">
              <div class=" gap-y-[11px] justify-end flex flex-col items-start xl:h-48 mb-6 ml-0 pl-0">
              {faGear("h-[2rem] fill-black   hidden lg:block")}
                  <div
                    style={{ fontWeight: "700" }}
                    className="text-black text-[1.625rem] leading-[1.3] "
                  >
                    Education & Course Development
                  </div>
                </div>
                <div class="gap-x-[29px] gap-y-[29px] justify-start items-center flex">
                  <p className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum nec ligula ut nisl aliquet cursus. Sed ut orci
                    non sapien accumsan facilisis at eu est facilisis at eu
                    estfacilisis at eu est.
                  </p>
                  {faArrowRight("h-[2rem] ml-auto flex-shrink-0 fill-black  hidden xl:block  ")}
                </div>
              </div>
            </div> */}
</div>

        </section>
        {/* <section
        style={{ margin: "0 auto" }}
        className="wrapper wrapper-content lg:mb-20"
      	>
        <div className="flex flex-col md:flex-row items-stretch relative min-h-[200px] gap-12 mb-16 lg:mb-36 max-w-[1322px] mx-auto scroll-mt-[305px]">
          <div className="flex justify-center flex-1 relative lg:px-16">
            <div className="img-container relative border border-1 border-black">
              <img
                src="https://placehold.co/390x370/FFFFFF/00000/png"
                className="w-full h-full object-contain object-center"
              />
            </div>
          </div>
          <div className="flex flex-1 relative lg:px-16">
            <div className="flex-col flex flex-1 justify-center md:items-center">
              <div className="two-items__one max-w-[440px]">
                <div>
                  <span className="font-medium text-[18px] leading-[1.15] text-black">
									How We Lead
                  </span>
                  <div className="text-2xl lg:text-3xl lg:leading-[1.15] font-medium mt-6">
                  Innovating for Healthier Running 
                  </div>
									<div>
									Whether you're helping runners move better, pushing the boundaries of research, or building new partnerships, every role at RunReady plays a part in changing the way the world runs.
									</div>
                </div>
                <ul>
                  <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-gray-300 last:border-0">

										<div>

                    {faCheck("h-[1rem]")} 
										</div>
										<div>
									
										 Research & Development (We study how people run, build the RunReady Performance Program, design exercise programs, work with the tech team and grade footwear to help runners move better.)
										</div>



                  </li>
                  <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-gray-300 last:border-0">
                    {faCheck("h-[1rem]")} We verify, digitize, and store your
                    impact through blockchain
                  </li>
                </ul>
                <Link href="#" className="mt-6 lg:mt-12 btn-black">
                  Learn more about our tech
                </Link>
              </div>
            </div>
          </div>
        </div>
      	</section> */}

        <section
          // style={{ margin: "0 auto" }}
          className="wrapper wrapper-content mb-[150px] "
        >
          <div
            className={
              ppNeueMontreal +
              " flex flex-col md:flex-row items-stretch relative min-h-[200px] gap-12 mb-16 lg:mb-36 max-w-[1022px] mx-auto"
            }
          >
            <div className="flex flex-1 relative ">
              <div className="flex-col flex flex-1 justify-center md:items-center">
                <div className="">
                  <div>
                    <span className="font-medium text-[16px]  lg:text-[18px] leading-[1.15] text-black">
                      Find Your Fit
                    </span>
                    <div className="text-[1.4rem] lg:text-[1.625rem] lg:leading-[1.15] font-medium mt-6">
                      Be Part of Something Bigger
                    </div>
                    <div className="text-[14px] lg:text-[16px]" >
                      Be part of something that moves running forward. Explore
                      open roles:
                    </div>
                  </div>
                  <ul className=" text-[14px] lg:text-[16px]">
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Physiotherapist -{" "}
                        </span>
                        Help runners move better as a certified RunReady
                        Therapist.
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Clinical Product Specialist -{" "}
                        </span>
                        Support to build RunReady Performance Program through
                        data and science
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Community Specialist -{" "}
                        </span>
                        Grow RunReady&apos;s reach by building strong
                        partnerships
                      </div>
                    </li>
                    <li className="text-subtitle2 flex py-6 gap-4 items-center border-b border-black last:border-0">
                      <div>{faCheck("h-[1rem]")}</div>
                      <div>
                        <span className="font-semibold">
                          Education Specialist -{" "}
                        </span>
                        Build clinical curriculum for ongoing courses and
                        certification
                      </div>
                    </li>
                  </ul>
                  {/* <Link href="#" className="mt-6 lg:mt-12 btn-black">
                  Learn more about our tech
                </Link> */}
                </div>
              </div>
            </div>
            <div className="flex justify-center flex-1 relative ">
              <div className="img-container relative border border-1 border-black">
                <img
                  src="/images/RRWebsite-2.jpg"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <section
        style={{ margin: "0" }}
        className="wrapper py-20 lg:pt-[88px] lg:pb-36 "
      	>
        <div className="wrapper-content flex flex-col items-center justify-center">
          <div className="lg:w-[920px] lg:text-center mb-10">
            <div className="text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium mb-10 lg:mb-6">
            RunReady is designed to recommend footwear by the world&apos;s leading brands, not just medically graded models.

            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-between gap-y-10 px-1 py-6 lg:py-12 lg:gap-y-20 lg:px-24 w-full lg:gap-x-20 border-t border-b border-solid border-0 border-gray-300">
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-adidas.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/altra-logo.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-asics.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-nike.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/norda-logo.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/on-logo.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-contain"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-puma.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>{" "}
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-salomon.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-saucony.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/self-assessment/brand-thenorthface.png"
                className="h-[36px] w-[100px] lg:w-[156px] lg:h-[84px] object-cover"
              />
            </div>
          </div>
        </div>
      	</section> */}

        {/* <div className="footer-gradient"> */}
        {/* <div className="footer-gradient">

        <section className="py-[120px] lg:px-28 lg:py-32 lg:mt-[140px] text-black">
        <div className="w-full lg:w-[910px] mx-auto flex flex-col text-center items-center">
          <div className="w-3/4 lg:w-full text-gray-800 text-2xl leading-[1.28] lg:text-4xl lg:leading-[1.25] font-medium">
          Join our movement as we re-shape the industry and help runners run healthy across the globe
          </div>
          <Link className="btn-black mt-10" href="#">
            Join Us
          </Link>
        </div>
      	</section>
        <Footer />
        </div> */}
        {/* <LandingPageTabs /> */}
        <div className="footer-gradient transparent">
          {/* <div className="mb-40"></div> */}
          <div className=" px-[2.5em] max-w-[1657px] wrapper  !mx-auto w-[100%]  relative z-[2]  mb-[-5em] ]">
                <div className="flex flex-col lg:flex-row bg-black  justify-between items-center p-6 sm:p-[4em] gap-4 lg:gap-8">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] ' text-white text-center lg:text-left "
                    }
                  >
                Join our movement as we re-shape  the industry <br/> and help runners
                run healthy across the globe
              </div>
              <Link
                className="bg-brand-yellow p-5 font-semibold text-center "
                href="https://secure.collage.co/jobs/runasyouare
"
                target="_blank"
              >
                Open Roles
              </Link>
              </div>
              </div>
              <div className="mb-[150px] "></div>

        
          <Footer />
        </div>
      </div>
    </div>
  );
}
