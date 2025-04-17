import Image from "next/image";
import Link from "next/link";
import NavClient from "@/components/NavBar/NavClient";

import Footer from "@/components/Footer";
import { ppNeueMontreal } from "@/app/fonts";
import Line from "@/components/Line";

export const metadata = {
  title: "RunAsYouAre - Aire Libre Interview",
};

export default async function RaceReadyQNA() {
  return (
    <div className="">
      <div className="mx-auto [&>*]:px-[1rem] [&>*]:md:px-[2rem] [&>*]:xl:px-[calc(3rem+0.22*(100vw-1280px))]">
        <div className="relative">
          <div className="absolute inset-0 bg-black opacity-50 z-10 pointer-events-none"></div>
          <Image
            src="/images/RacereadyHero.png"
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
                    className="md:h-[3rem] "
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
                    className="md:h-[5rem] h-[4rem] object-contain "
                  />
                </a>
              </div>
              <div>
                {/* <NavClient /> */}
              </div>
            </nav>

            <div
              className="absolute bottom-[10%] md:bottom-[7rem] left-1/2 -translate-x-1/2 p-10 rounded-lg z-20"
              style={{
                textAlign: "center",
              }}
            >
              <div
                className={
                  
                  "  text-white text-[55px] leading-[1.2] tracking-[-1.26px]"
                }
              >
                The Other Side of Running
              </div>
              <div
                className={
                  ppNeueMontreal.className +
                  " font-bold text-white text-[32px] leading-[1.2] tracking-[-1.26px]"
                }
              >
                {" "}
                A conversation with Mauricio Díaz of Aire Libre on running,
                culture, and pushing beyond the familiar.{" "}
              </div>
              <div
                className={
                  ppNeueMontreal.className +
                  " text-white font-bold text-center mt-2"
                }
                style={{ fontSize: "18px" }}
              >
                Interview by: Rob Smith
              </div>
            </div>
          </section>
        </div>

        <section className="pt-[5rem] pb-[8rem] md:pb-[11rem] space-y-6 md:space-y-6">
          <div className="space-y-[1rem] max-w-[47.0625rem] text-black mx-auto text-center">
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              When it comes to running, some connections feel inevitable. The
              time we spend on the open road, the people we meet, the places we
              discover. They all lead to something bigger. That&apos;s why
              teaming up with Aire Libre for a running retreat in Oaxaca,
              Mexico, just fits.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              Aire Libre isn&apos;t your typical running brand. It&apos;s about
              adventure, community, and rediscovery. Founded by three friends in
              2016 after an unforgettable run through the Sonoran Desert, Aire
              Libre grew from a love of movement, culture, and storytelling.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              RunAsYouAre and Aire Libre were always going to cross paths. Same
              energy. Same belief that running is about more than performance.
              It&apos;s about connection, clarity, and those moments where it
              all falls into place. Whether you&apos;re new to running or have
              been at it for years, running has a way of bringing people
              together. That&apos;s exactly what our upcoming summer experience
              is all about.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              Oaxaca is the stage. Trails that challenge you. Experiences that
              linger. Culture that changes how you see the world. This
              isn&apos;t about personal bests. It&apos;s about running as a way
              to explore yourself, the land, and the people around you.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              We spoke with Mauricio Díaz of Aire Libre to hear about their
              beginnings, why Oaxaca is the perfect setting, and what makes this
              journey worth remembering.
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
                As one of the three founders at Aire Libre, when did it all
                begin?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              Aire Libre was founded, without us knowing it, in December of
              2016. My co-founders Manuel, Daniel, and I went on an adventure to
              run across no man&apos;s land in northern Mexico. We ran through
              the Sonoran Desert on the land of the native Seri people. We
              covered approximately 90 kilometers, and out of that life-changing
              experience, Aire Libre was born.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                What inspired Aire Libre, and how would you describe what
                it&apos;s all about?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              The inspiration came from following my passion and that of the
              other founders. We loved running, adventure, nature, and discovery
              through movement. Aire Libre grew out of this first adventure.{" "}
              <br /> <br />
              What made it unique was that it was more than just a run or
              adventure. It involved the Seri people, learning from them,
              gaining permission to run on their sacred land, and much more. We
              documented the experience in a short film, and when it came time
              to name the project, Aire Libre was born.
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              The goal back then, which is still relevant today, was to use
              these adventures, stories, and experiences to inspire as many
              people as possible to connect with nature and be more active. For
              us, these are the pillars of a wholesome, centered, and happy
              life.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>What is it about running that you love the most?</strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              There are so many things, Rob. What I love the most is the sense
              of connection I get when I&apos;m running, especially in nature.
              There&apos;s nothing else that makes me feel as centered,
              balanced, and joyful.
              <br />
              <br />
              Whether I&apos;m alone or with a group, when I&apos;m running
              through trails, in the woods, mountains, desert, or jungle,
              that&apos;s when I feel the most alive and the most connected to
              myself. It&apos;s the best version of me that comes out during
              those runs.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                At RunAsYouAre, we believe running belongs to everyone. Whether
                you&apos;re new, a long-term runner, or a seasoned vet. How does
                that fit with what you&apos;re doing at Aire Libre?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              We&apos;ve always said that running is the most accessible form of
              movement. It doesn&apos;t require anything but your body.
              We&apos;ve designed our experiences to be inclusive, no matter
              your level. You might have someone who&apos;s only run a couple of
              10Ks alongside a seasoned ultramarathoner. Because of how we
              structure things, both can coexist. This combination of diverse
              levels and experiences makes the journey richer for everyone.
            </div>

            <blockquote className="border-l-4 border-black pl-4 italic text-black text-[32px] ">
              “Running is the most accessible form of movement.”
            </blockquote>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                Our retreat this June takes place in Oaxaca, Mexico. How do the
                culture and landscape of Oaxaca shape the experience for those
                who join?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              For us, running is the vehicle. It&apos;s not the end goal. You
              don&apos;t join an Aire Libre experience just to run. If
              that&apos;s what you want, you sign up for a marathon.
              <br />
              <br />
              With us, running is how you connect with the land, yourself, and
              your community on a deeper level.
              <br />
              <br />
              Oaxaca is a magical place. It&apos;s rich in culture, arts, and
              culinary traditions. This retreat combines all of that.
              You&apos;ll enjoy incredible food, run some of the best trails,
              experience Oaxaca City&apos;s history and vibrancy, visit
              pyramids, and even take part in ancient Temazcal ceremonies.
              It&apos;s a deeply enriching experience.
            </div>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                I like it. A cultural experience with running on the side. When
                people walk away from an Aire Libre retreat, what do you hope
                stays with them?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              A couple of things. First, I hope they stay connected. Connected
              with each other and with the Aire Libre community. Over the years,
              thousands of people have joined us and become part of something
              larger.
              <br />
              <br />
              Second, I hope this experience adds significant value to their
              lives. Life is a sum of experiences, and if someone commits their
              time, money, and energy to join Aire Libre, I want it to be
              something they look back on and think, that was absolutely worth
              it.
            </div>

            <blockquote className="border-l-4 border-black pl-4 italic text-black text-[32px] ">
              “Life is a sum of experiences. I want (somebody to) look back and
              think, &apos;that was absolutely worth it.&apos;”
            </blockquote>

            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              <strong>
                Aire Libre has created so many unique experiences. What&apos;s
                next for you?
              </strong>
            </div>
            <div
              className={ppNeueMontreal.className}
              style={{ fontSize: "18px" }}
            >
              Our slogan is, “discover the world running.” In six or seven
              years, we&apos;ve operated experiences in about 15 or 16
              countries. But that&apos;s just scratching the surface. The world
              is vast and beautiful. I&apos;m excited about the potential new
              destinations, like Japan and Greece this year, and so many more in
              the future.
              <br /> <br />
              Also, running as a sport is evolving. It&apos;s no longer just
              about marathons and races. People are seeking something deeper.
              What we call experiential running. We&apos;ve been pioneers in
              this space, and I think there&apos;s a great opportunity to
              innovate and combine running with other elements.
            </div>
          </div>
          <div className="text-center">
            <a
                        href="https://checkout.runready.io/b/4gweWp5UK6A63aE9AF"
                        target="_blank"
              className={
                ppNeueMontreal.className +
                " text-[20px] font-bold inline-block text-center   min-w-[11.5rem] px-[1.25rem] py-[0.65rem] lg:py-[0.875rem] lg:px-[1.75rem] bg-[#492AFF] text-white  btn-hover-bg-opacity"
              }
            >
              Resigter Now
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
            src="/images/RacereadyHero.png"
            fill={true}
              alt="hero image"
              sizes="(max-width: 1080px) 100vw, 50vw"
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
        </div>

        <div className="relative h-[100vh]">
          <Image
            src="/images/RacereadyHero.png"
            fill={true}
            sizes="(max-width: 1080px) 100vw, 100vw"
            alt="hero image"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1.5rem]">
          <div className="relative aspect-[0.8]">
            <Image
            src="/images/RacereadyHero.png"
            fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
            src="/images/RacereadyHero.png"
            fill={true}
              sizes="(max-width: 1080px) 100vw, 33vw"
              alt="hero image"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[0.8]">
            <Image
            src="/images/RacereadyHero.png"
            fill={true}
              alt="hero image"
              sizes="(max-width: 1080px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative h-[80vh]">
          <Image
            src="/images/RacereadyHero.png"
            fill={true}
            sizes="(max-width: 1080px) 100vw, 100vw"
            alt="hero image"
            className="object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem]">
          <div className="relative aspect-[0.8]">
            <Image
            src="/images/RacereadyHero.png"
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
        </div>

        <div className="relative h-[100vh]">
          <Image
            src="/images/RacereadyHero.png"
            fill={true}
            alt="hero image"
            sizes="(max-width: 1080px) 100vw, 100vw"
            className="object-cover"
          />
        </div>

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
