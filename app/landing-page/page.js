import Footer from "@/components/Footer";
import LandingPage from "@/components/landingpage/LandingpPage";
import NavBar from "@/components/NavBar/NavBar";
import { VScrollProvider } from "@/components/VScrollContext";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import HomeHero from "./HomeHero";
import { getHighAbsorbShoes } from "@/serverActions/fetchShoesByABS";


export default async function Home() {


  const shoes = await getHighAbsorbShoes();
  console.log("shoes", shoes);
  

  return (
    <VScrollProvider>
        <main>
          <HomeHero items={shoes} />
        </main>
        <div className="footer-gradient">


        <Footer />
        </div> 

    </VScrollProvider>
  );
}
