import Footer from "@/components/Footer";
import LandingPage from "@/components/landingpage/LandingpPage";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HomeHero from "./HomeHero";



export default async function Home() {
  return (
    <VScrollProvider>
        <main>
          <HomeHero />
        </main>
        <div className="footer-gradient">


        <Footer />
        </div> 

    </VScrollProvider>
  );
}
