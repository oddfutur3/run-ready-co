import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import { ppNeueMontreal } from "../fonts";

export default function PrivacyPolicy() {
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
                  Privacy Policy
                </div>
                <span
                  className={
                    ppNeueMontreal.className +
                    " text-[18px] leading-[1.4] lg:text-[20px] lg:leading-[1.2]"
                  }
                >
                  We take your privacy seriously. This policy outlines how we collect, use, and protect your personal data.
                </span>
              </div>
            </section>

            <section className="wrapper z-1 relative max-w-[1657px] mx-auto mt-[200px] mb-[240px]">
              <div className="bg-white border border-black p-10">
                <div className={ppNeueMontreal.className + " text-[1.5rem] lg:text-[2.5rem] mb-6"}>
                  Information We Collect
                </div>
                <p className="text-[17px] leading-[2] md:leading-[1.3]">
                  We collect personal information you provide to us, such as your name, email, and contact details, when you use our services.
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
