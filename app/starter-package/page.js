import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import Link from "next/link";
import { faCheck } from "@/graphics/faSolid";
import Image from "next/image";
import Testimonials from "@/components/Testimonials";
import { ppMonumentExtendedBold } from "../fonts";
import { faCalendar } from "@/graphics/faRegular";
import { notFound } from "next/navigation";
import ThreeTab from "@/components/ThreeTab";
import CardGrid from "@/components/HoverCards";
import { PageHeading } from "@/components/UIComponents";
import CardList from "@/components/Cardlist";
import { ppNeueMontreal } from "../fonts";

export const metadata = {
  title: "RunReady - Starter Package",
};

export default function StarterPackage() {
  // notFound()
  return (
    <VScrollProvider>
      <main className="">
        <div className="flex flex-col">
          <div className="hero-gradient">
            <NavBar />
            <div className="">
              <section
                className="wrapper flex flex-col-reverse lg:flex-row lg:h-[87vh] max-w-[1657px] mx-auto"
                style={{ alignItems: "center" }}
              >
                <div className="text-black flex flex-col w-full lg:w-4/5 justify-center text-center lg:text-left lg:pr-[9rem] pr-5">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[38px] lg:text-5xl  xl:leading-none font-medium mb-6 lg:mb-6"
                    }
                  >
                    Get Ready for Your Best Run—Before Anyone Else
                  </div>
                  <span
                    className={
                      ppNeueMontreal.className +
                      " text-[16px] md:text-[20px leading-[1.4] lg:text-[20px] lg:leading-[1.2]"
                    }
                  >
                    The RunReady Performance Program Starter Package at
                    RunAsYouAre is your all-in-one way to improve running
                    comfort and performance. Be the first 100 to try.
                  </span>
                  <div className="mt-10">
                    <Link
                      href="https://checkout.runready.io/b/dR67tX2Iy7Ea6mQ5kl"
                      target="_blank"
                      className="btn-black"
                    >
                      Reserve Your Spot
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center lg:justify-end my-10 lg:my-0 w-full lg:w-auto">
                  <div className="relative xl:w-[663px]  max-w-md md:max-w-none">
                    <img
                      src="/images/RRWebsite-6.jpg"
                      className="w-full h-auto md:h-[75vh] border border-black object-cover"
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
                        " text-[1.5rem] lg:text-[2.5rem]   "
                      }
                    >
                      Exclusive Limited Time Offer
                    </div>
                  </div>
                </div>
              </section>

              <section
                className={
                  ppNeueMontreal.className +
                  " wrapper wrapper-content mb-[150px] "
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
                              {faCheck("h-[1rem]")}
                            </div>
                            <div>
                              <span className="font-medium  text-[16px] lg:text-[18px] leading-[1.15] text-black">
                                RunReady Physiotherapist-led movement
                                assessments
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
                              {faCheck("h-[1rem]")}
                            </div>
                            <div>
                              <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                                Personalized footwear matching
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
                              {faCheck("h-[1rem]")}
                            </div>
                            <div>
                              <span className="font-medium text-[16px] lg:text-[18px] leading-[1.15] text-black">
                                Tailored exercise program to help you run
                                stronger and with less discomfort
                              </span>
                              {/* <div className="  text-[17px] leading-[2] md:leading-[1.3]">
                            With physiotherapy expertise and running science,
                            this service provides personalized solutions based
                            on your movement and performance needs.
                          </div> */}
                            </div>
                          </li>
                        </ul>
                        <div className=" font-semibold text-[16px] lg:text-[18px]">
                          What’s included for $349:
                        </div>
                        <ul className="list-disc list-inside mt-2 text-[14px] lg:text-[16px] leading-[1.6]">
                          <li className="pl-2">
                            RunReady Performance Program + 3 follow-up sessions
                          </li>
                          <li className="pl-2">
                            Mobility ball + loop band for at-home recovery
                          </li>
                          <li className="pl-2">
                            $25 off your first footwear purchase
                          </li>
                          <li className="pl-2">
                            14-week half marathon training plan
                          </li>
                          {/* <li className="pl-2"> Limited to 100 packages</li> */}
                        </ul>
                        <div className="mt-10">
                          <Link
                            href="https://checkout.runready.io/b/dR67tX2Iy7Ea6mQ5kl"
                            target="_blank"
                            className="btn-black block w-[fit-content]"
                          >
                            Reserve Your Spot
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center flex-1 relative items-center">
                    <div className="img-container relative ">
                      <img
                        src="/images/RRWebsite-2.jpg"
                        className="w-[500px] h-[500px]  border border-black object-cover"
                      />
                    </div>
                  </div>
                </div>
              </section>

              <section className="wrapper z-1 relative   mt-[240px] mb-[240px]  max-w-[1657px] mx-auto ">
                <div className="">
                  <div className="w-[100%]  mx-auto">
                    <div className="bg-white lg:border-y lg:border-r lg:border-1 lg:border-black grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-12   ">
                      <div className="   my-[-5em] overflow-hidden relative">
                        <img
                          src="/images/RRWebsite-5.jpg"
                          className="w-full h-[100%] max-h-[750px] object-cover    border border-1 border-black"
                        />
                      </div>
                      <div className="flex flex-col justify-center py-[4rem] lg:pr-[4rem]  px-[2rem] lg:pl-0  border border-black    lg:border-none">
                        <div
                          className={
                            ppNeueMontreal.className +
                            " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 mt-10 lg:mt-0"
                          }
                        >
                          Running Shouldn&apos;t Hurt—But Support Is All Over
                          the Place
                        </div>
                        <div
                          className={
                            ppNeueMontreal.className +
                            " text-[14px] lg:text-[16px] leading-[2] md:leading-[1.3]"
                          }
                        >
                          Right now, running support is scattered—you get shoes
                          from one place, physio from another, and exercises
                          from an app. When it&apos;s all separate, getting real
                          results is tough. <br />
                          <br />
                          The RunReady Performance Program puts everything in
                          one place—so you can run easier, with less pain and
                          more confidence.
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

              <section className="bg-transparent  font-secondary ">
                <div className="flex justify-center">
                  <div className="lg:w-[920px] text-center">
                    <div
                      className={
                        ppNeueMontreal.className +
                        " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] "
                      }
                    >
                      Whether You Run, Train, or Recover—This is Built for You
                    </div>
                  </div>
                </div>
              </section>

              <CardList />
            </div>

            <div className="mx-auto wrapper">
              <div className=" flex wrapper-content mx-auto justify-center"></div>
              <div style={{ marginBottom: "150px" }}></div>
              <div className="wrapper-content mx-auto my-10 lg:w-[1022px]">
                <div className="text-center mb-8">
                  <div
                    className={
                      ppNeueMontreal.className +
                      " text-[1.5rem] lg:text-[2.5rem] leading-[1.2] tracking-[-0.05rem] mb-10 "
                    }
                  >
                    Frequently Asked Questions
                  </div>
                </div>
                <div className="bg-white border border-black">


  <div className="">
    {[
      {
        question: "Who is the RunReady Performance Program for? Can I do this program if I'm not a 'serious' runner?",
        answer: "It's for anyone who wants to improve their running experience, whether you're a beginner or seasoned runner.",
      },
      {
        question: "What’s included in the RunReady Performance Starter Package, and how is it different?",
        answer: `1x RunReady Performance Program (60 mins): Focuses on improving comfort and efficiency. This is a movement-based assessment. This program includes:

• 45 min movement assessment
• 15 min customized exercise program design
• Tailored footwear match recommendation

3x RunReady Performance Progress Sessions (30 mins each): Designed to help you maximize your progress with expert, hands-on guidance. These follow-up sessions fine-tune your movements and exercises to improve your form for the best results. It includes an updated exercise program to match your progress and keep you on track.

• Recovery ball + loopband for at-home flexibility and strength
• $25 off your first footwear purchase at RunAsYouAre
• 14-Week RunReady Half Marathon Performance Plan`,
      },
      {
        question: "Is the RunReady Performance Starter Package eligible for insurance reimbursement?",
        answer: "Services included in the RunReady Performance Starter Package are all provided by registered Physiotherapists, which are covered by many insurance plans. Check with your insurance provider to find out if your plan includes physiotherapy services.",
      },
      {
        question: "How can I claim these services through my insurance?",
        answer: `If your insurance plan covers Physiotherapy services, you should be able to claim RunReady Performance Starter Package sessions.

• We will provide you with a receipt for your initial Starter Package payment as a record of your purchase.
• We will also provide you with a service receipt for each completed session, showing your discounted service fee amount, which you can submit to your insurance provider.`,
      },
      {
        question: "Can I purchase the RunReady Performance Starter Package as a gift?",
        answer: `This special package requires the booking of a session, which can only be booked by the person attending the session and therefore cannot be gifted directly.

If you would like to purchase the RunReady Performance Starter Package as a gift, we recommend that you purchase a gift card and let your recipient know about this special, limited-time offer. They can then use their gift card to purchase the Starter Package or any other services at RunReady booked directly by the person redeeming the package.`,
      },
      {
        question: "What are the Terms & Conditions of the RunReady Performance Starter Package?",
        answer: `• Activates upon purchase and expires 1 year after purchase.
• Not eligible for cancellation or refund and has no cash value.
• Not eligible for hold or extension.
• Cannot be shared or transferred.`,
      },
      {
        question: "What is the Refund / Cancellation Policy for the RunReady Performance Starter Package?",
        answer: `The RunReady Performance Starter Package is not eligible for cancellation or refund and has no cash value. If you are dealing with extenuating circumstances that prevent you from utilizing your Starter Package, please reach out to us and we will do our best to work with you to find a solution.

Services booked as part of the RunReady Performance Starter Package are subject to our standard cancellation policy, which requires 24 hours’ notice for session changes or cancellations. Services that are cancelled within 24 hours or result in a no-show will be subject to a cancellation fee equivalent to the full service fee.`,
      },
      {
        question: "Can I get an extension? What if I have an injury?",
        answer: `We understand that injuries and life events happen. If you're working through extenuating circumstances that prevent you from utilizing your Starter Package, please reach out to us and we will do our best to work with you to find a solution.`,
      },
    ].map((faq, index) => (
      <div key={index} className="border-b border-black last:border-none w-full">
        <details className={ppNeueMontreal.className + " p-4"}>
          <summary className="cursor-pointer text-[16px] md:text-[20px] font-medium">
            {faq.question}
          </summary>
          <div className="mt-2 text-black text-[14px] lg:text-[16px]">
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
            </div>
            <div style={{ marginBottom: "100px" }}></div>

            <Footer />
          </div>
        </div>
      </main>
    </VScrollProvider>
  );
}
