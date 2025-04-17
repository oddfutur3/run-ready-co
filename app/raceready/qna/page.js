import Image from "next/image";
import Link from "next/link";
import NavClient from "@/components/NavBar/NavClient";

import Footer from "@/components/Footer";
import { ppNeueMontreal } from "@/app/fonts";
import Line from "@/components/Line";

export const metadata = {
  title: "RunAsYouAre - raceready Q&A",
};

export default async function RaceReadyQNA() {
  return (
    <div className="">
      <div className="mx-auto [&>*]:px-[1rem] [&>*]:md:px-[2rem] [&>*]:xl:px-[calc(3rem+0.22*(100vw-1280px))]">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
          <Image
            src="/images/RR_Blog_Hero.jpg"
            fill={true}
            alt="hero image"
            className="object-cover z-0 object-bottom"
            sizes="(max-width: 639px) 100vw, 100vw"
          />
          <section
            className={
              " bg-transparent z-10 bg-cover bg-center h-[100svh] md:h-screen flex items-center justify-center relative  "
            }
          >
            <nav className="w-full flex items-center justify-between gap-[1.5rem] sm:gap-[2rem]  py-[2rem] absolute top-0 left-1/2 -translate-x-1/2  z-30">
              <div className="h-[1.5rem] flex items-center gap-[1rem] min-[590px]:gap-[2rem] min-[690px]:gap-[3rem]">
                <Link
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-hover-opacity"
                >
                  <img
                    src="/images/RunReady_Logo_White.svg"
                    className="md:h-[3rem] h-[1.5rem] "
                    fill="#1B3A89"
                  />
                </Link>
                <div className="bg-white w-[3px] md:h-[1.5rem] h-[1rem]"></div>
                <a
                  href="/raceready"
                  rel="noreferrer"
                  className="btn-hover-opacity"
                >
                  <img
                    src="/images/white_raceready_wordmark.svg"
                    className="md:h-[5rem] h-[2.5rem] object-contain "
                  />
                </a>
              </div>
              <div>{/* <NavClient /> */}</div>
            </nav>

            <div className="text-white flex flex-col w-full lg:w-[800px] h-full justify-center text-center z-10 mt-40">
           
              <div
                className={
                  ppNeueMontreal.className +
                  " text-[38px] text-[#492AFF] lg:text-4xl xl:leading-none font-bold mb-6 uppercase "
                }
              >
                <span className=" text-5xl  lg:text-7xl text-[transparent]  [-webkit-text-stroke:3px_#EDFC34] italic ">
                Where Physio Meets 
                </span>
                <br />
                <span className="mt-3 inline-block">the Finish Line</span>
              </div>
              <span
                className={
                  ppNeueMontreal.className +
                  " text-[16px] md:text-[20px] leading-[1.4] lg:leading-[1.2]"
                }
              >
                A conversation with RunReady physiotherapists Dani, Sean, and Kendra on how this class helps you move better, stay injury-free, and feel more ready on race day.
              </span>
            </div>
          </section>
        </div>

        <section className="pt-[5rem] pb-[8rem] md:pb-[11rem] space-y-6 md:space-y-6">
          <div className="space-y-[1rem] max-w-[47.0625rem] text-black mx-auto text-center">
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              Training for a race can be exciting and overwhelming all at once.
              Some days feel great. Other days, your body feels off. Something&apos;s
              tight, something aches, and you&apos;re not totally sure why. That&apos;s
              where having a foundation matters.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              RunReady and the physiotherapists behind the RunReady Performance
              Program are introducing race ready, an 8-week group class built
              for anyone preparing for a race and wanting to feel stronger, more
              balanced, and better supported while they train.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              We caught up with Dani, Sean and Kendra. They&apos;re physiotherapists
              leading the class. Not a coach. Not a running app. Not a generic
              training plan. They shared how this class can help you train
              smarter and feel more ready on race day.
            </div>
          </div>

          {/* Full Interview */}
          <div className="space-y-6 max-w-[47.0625rem] text-black mx-auto text-left">
            <div className="max-w-[140px] mx-auto">
              <Line
                thickness="2px"
                width="50px"
                height="50px"
                padding="5rem 0"
              />
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                race ready isn&apos;t just another workout class or run group. It&apos;s
                an 8-week physio-led group class where you get assessed at the
                start, guided each week, and re-assessed at the end. Dani,
                you&apos;ve worked with runners for years. What changes when you
                bring that into a group class setting?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              The attention to detail from one-on-one sessions is still a
              priority, but fostering a welcoming environment where participants
              can feed off of one another&apos;s hard work is part of this class I am
              most looking forward to. The camaraderie of training together, and
              building lasting relationships with other runners is important.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>What made you all want to lead this class?</strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Kendra: </strong>
              As a runner myself, I understand the balance between running,
              proactively preventing injury, and prioritizing long-term health.
              I believe that moving better and getting stronger are key to
              becoming a more consistent and durable runner, whether you&apos;re
              training for a goal or just running for your health.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>What makes being trained by a physio different?</strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              This class is led by physiotherapists and built around how your
              body actually moves. You get assessed at the start, do the
              exercises, and get re-assessed at the end. The feedback you get
              comes from what we see in your movement, and it&apos;s based on our
              experience working with runners and people who move in lots of
              different ways. That&apos;s what helps us tell you what to focus on,
              based on how your body moves.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Sean: </strong>I couldn&apos;t agree more with what Dani said.
              What makes this class special is how much experience and insight
              we bring from both the physio world and the running world. As
              physiotherapists and runners ourselves, we live and breathe this
              stuff. That excitement shows up in how we coach and break down
              your movement in real time to help you move better and stay
              injury-free.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                What kinds of things usually show up in a movement assessment
                that most runners wouldn&apos;t notice on their own?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              There is often an “ah-ha moment” when I am working with runners
              and taking them through the movement assessment. I get to show
              them a pattern or imbalance they didn&apos;t know existed. This class
              holds people accountable to learning their personal strengths and
              weaknesses when it comes to their movement patterns. Ignorance can
              be bliss until that bliss turns into injury.
            </div>

            <blockquote className="border-l-4 border-black pl-4 italic text-black text-[32px] ">
              “Most runners don&apos;t realize how much they&apos;re compensating until
              they see it for the first time” - Dani
            </blockquote>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                The classes focus on Absorb, Bounce, and Stability. That means
                how well your body handles impact, pushes off the ground, and
                stays steady while you run. Why do those things matter?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Sean: </strong>
              Think of your body like a rubber band. When you land, you&apos;re
              stretching that band. That&apos;s your body absorbing energy. When you
              push off, you release that energy to move forward. The better you
              are at handling impact and staying steady during that motion, the
              more efficient and powerful your stride becomes. If something&apos;s
              off, like limited mobility or poor control, you lose energy and
              your body has to work harder than it should. Learning how to
              absorb impact, push off, and stay stable helps you run more
              efficiently and with less effort.
            </div>

            <blockquote className="border-l-4 border-black pl-4 italic text-black text-[32px] ">
              “The better you are at handling impact and staying steady during
              that motion, the more efficient and powerful your stride.” - Sean
            </blockquote>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              Adding to that, knowing where you should precisely be putting in
              work to better your mechanics helps dial in, and ideally increase
              your motivation to better yourself so that you can stop injuries
              from brewing while you&apos;re training.The class makes it easier to
              learn what your body needs and gives you time each week to work on
              it.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>What do runners often overlook when training?</strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Kendra: </strong>
              It&apos;s not just about running. Mobility work, strength, and
              cross-training like cycling or yoga can improve performance and
              reduce injury risk. It&apos;s easy to get caught up in doing everything
              perfectly, but staying consistent over time matters more.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Sean: </strong>
              As a runner myself, we often get tunnel vision on our finish time,
              but forget to check in on how we feel. Hitting a time goal is
              great, but so is feeling strong, moving well, and actually
              enjoying the race. Strength, mobility, and mileage all matter just
              as much as speed. When you train with those in balance, the race
              becomes something to enjoy, not just endure.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              Often I think the easy parts are overlooked. Rest and nutrition
              become even more important when you&apos;re pushing your body.
            </div>

            {/* <blockquote className="border-l-4 border-black pl-4 italic text-black text-[32px] ">
              “Life is a sum of experiences. I want (somebody to) look back and
              think, &apos;that was absolutely worth it.&apos;”
            </blockquote> */}

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                What are some early signs your body isn&apos;t handling training
                well?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Kendra: </strong>
              New or lingering aches and pains, feeling low energy or tired, and
              not feeling motivated or enjoying running are big ones. Also,
              things like trouble sleeping are signs that your body might not be
              recovering well. These things aren&apos;t always obvious, so being
              mindful of your body&apos;s cues and tracking them over time can help
              you prioritize rest and adjust your training to prevent more
              serious issues coming up.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              I&apos;d love to emphasize the mental aspect that training can have.
              You&apos;re not going to love every workout or every run, but you
              should be in a place where that hasn&apos;t become the norm of how
              you&apos;re feeling about training.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Who is this class for?</strong>
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>Dani: </strong>
              This class is a good fit if you&apos;re training for a race or just
              want to run with less discomfort. The fact you&apos;ll get assessed by
              a physio, do the exercises, and get re-assessed at the end is not
              a type of class you can easily find and sign up for. The guidance
              is specific to how your body moves, and you&apos;ll get feedback you
              can actually use to run better. If you have extended health
              benefits, you can also claim it under physio coverage, which is
              always a bonus. By the end, you&apos;ll feel more prepared and
              confident for whatever kind of race you&apos;re training for.
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://checkout.runready.io/b/4gweWp5UK6A63aE9AF"
              target="_blank"
              className={
                ppNeueMontreal.className +
                " btn-yellow-inverse-2 mt-10 inline-block"
              }
            >
              Join race ready now
            </a>
          </div>
        </section>
      </div>
      <div className="space-y-[1.5rem]  pb-[7rem]">
        {/* 
              <div className="relative h-[100vh] h-[150vh] md:h-[190vh]">
                <picture>
                  <source
                    media="(max-width: 639px)"
                    srcSet="/images/ikb-collections/hero-plus.jpg"
                  />
                  <Image
                    src="/images/ikb-collections/hero-plus-top.jpg"
                    fill={true}
                    alt="hero image"
                    className="object-cover"
                    sizes="(max-width: 639px) 100vw, 100vh"
                  />
                </picture>
              </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <div className="relative  aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-2.jpg"
              fill={true}
              alt="hero image"
              sizes="(max-width: 1080px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-4.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 50vw"
              alt="hero image"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative h-[100vh]">
          <Image
              src="/images/RR_Blog_WebRes-3.jpg"
              fill={true}
            sizes="(max-width: 1080px) 100vw, 100vw"
            alt="hero image"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-6.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-7.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-5.jpg"
              fill={true}
              alt="hero image"
              sizes="(max-width: 1080px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* <div className="relative h-[80vh]">
          <Image
              src="/images/RR_Blog_WebRes-1.jpg"
              fill={true}
            sizes="(max-width: 1080px) 100vw, 100vw"
            alt="hero image"
            className="object-cover"
          />
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RR_Blog_WebRes-1.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 50vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
              src="/images/RacereadyHero.png"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 50vw"
              alt="hero image"
              className="object-cover"
            />
          </div>
        </div> */}
{/* 
        <div className="relative h-[100vh]">
          <Image
            src="/images/RacereadyHero.png"
            fill={true}
            alt="hero image"
            sizes="(max-width: 1080px) 100vw, 100vw"
            className="object-cover"
          />
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          <div className="relative aspect-[1.5]">
            <Image
              src="/images/bandit-3.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative h-full max-md:aspect-[1.5]">
            <Image
              src="/images/bandit-15.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative h-full max-md:aspect-[1.5]">
            <Image
              src="/images/bandit-16.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          <div className="relative aspect-[0.8] md:col-span-1">
            <Image
              src="/images/bandit-8.jpg"
              fill={true}
              alt="hero image"
              sizes="(max-width: 1080px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-full max-md:aspect-[1.5]  md:col-span-2">
            <Image
              src="/images/bandit-9.jpg"
              fill={true}
              sizes="(max-width: 1080px) 100vw, 66vw"
              alt="hero image"
              className="object-cover"
            />
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
