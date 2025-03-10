import Footer from "@/components/Footer";
import LandingPage from "@/components/landingpage/LandingpPage";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Careers from "./Careers";

export const metadata = {
  title: "RunReady - Careers",
};

export default function CareerPage() {
  return (
    <VScrollProvider>
        <main>
          <Careers />
        </main>
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
 {/* <section
      style={{ margin: "0 auto" }}
      className=" w-full bg-transparent text-black  "
    >
      <div className="p-12 lg:p-24 bg-primary-300 wrapper">
        <div className="wrapper-content">
          <div className="border-solid border-0 border-t border-black pt-10 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="flex gap-x-4 text-xs font-medium text-black flex-col lg:flex-row mb-9 lg:mb-0 items-center">
              <span className="mb-4 lg:mb-0">
                ©2024 RunReady. All rights reserved.
              </span>
              <div className="flex gap-4">
                <Link href="#" className="hover:underline lg:mr-0">
                  Terms of Service
                </Link>
                <Link href="#" className="hover:underline lg:mr-0">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <Link href="https://www.runasyouare.co/" target="_blank" className="text-black text-xs lg:w-2/5 hover:underline text-center md:text-right">
            <Image width={150} height={100} src="/images/runready-by-runasyouare-black.png" />
            </Link>
          </div>
        </div>
      </div>
    </section> */}
    </VScrollProvider>
  );
}
