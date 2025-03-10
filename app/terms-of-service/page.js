import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import { ppNeueMontreal } from "../fonts";

export default function TermsPrivacy() {
  return (
    <VScrollProvider>
      <main className="">
        <div className="flex flex-col">
          <div className="hero-gradient">
            <NavBar />
            <section
              className="wrapper flex h-[91vh] max-w-[1657px] mx-auto"
              style={{ alignItems: "center" }}
            >
              <div className="text-black flex flex-col lg:w-4/5 justify-center lg:pr-[9rem] pr-5 ">
                <div
                  className={
                    ppNeueMontreal.className +
                    " text-[48px] xl:text-7xl xl:leading-none font-medium mb-6 lg:mb-6"
                  }
                >
                  Terms & Privacy
                </div>
                <span
                  className={
                    ppNeueMontreal.className +
                    " text-[18px] leading-[1.4] lg:text-[20px] lg:leading-[1.2]"
                  }
                >
                  Learn about our terms of service and privacy policies. We value transparency and are committed to protecting your data and rights.
                </span>
              </div>
            </section>

            <section className="wrapper z-1 relative mt-[200px] mb-[240px] max-w-[1657px] mx-auto">
              <div className="bg-white border border-black p-10">
                <div className={ppNeueMontreal.className + " text-[1.5rem] lg:text-[2.5rem] mb-6"}>
                  Terms of Service
                </div>
                <p className="text-[17px] leading-[2] md:leading-[1.3]">
                  By using our services, you agree to the following terms... (Insert Terms Here)
                </p>
              </div>
            </section>

 
          </div>
        </div>
      </main>
      <Footer />
    </VScrollProvider>
  );
}