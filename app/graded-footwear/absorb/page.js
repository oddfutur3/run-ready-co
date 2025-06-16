import { redirect } from "next/navigation";
import { firebaseAdmin } from "@/firebaseAdmin";
import { cookies } from "next/headers";
import { getHighAbsorbShoes } from "@/serverActions/fetchShoesByABS";
import ABSSShoeDisplay from "@/components/ABSShoeDisplay";
import { VScrollProvider } from "@/components/VScrollContext";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer";
import SlantedAccordion from "@/components/SlantedAccordion";


export const metadata = {
  title: "RunReady - Graded Footwear / Absorb",
};

export default async function HighAbsorb() {
  //validate auth user
  const cookiesLogin = cookies().get("token");
  let userDoc = undefined;
  try {
    const token = await firebaseAdmin.auth().verifyIdToken(cookiesLogin.value);
    userDoc = await firebaseAdmin
      .firestore()
      .doc(`users/${token.user_id}`)
      .get();
  } catch (err) {}
  const shoes = await getHighAbsorbShoes();

  return (
    <VScrollProvider>
      <NavBar
        navMenu={true}
        fixed={true}
        current=""
        absolute={true}
        invertColor={true}
      />

      <main className="space-y-[8rem] pt-[1rem] md:pt-[2rem] xl:pt-[3rem]">
        <section className="wrapper max-w-[1657px] mx-auto space-y-[4.5rem]">
          <div className="space-y-[1rem]">
            <div className="flex flex-col gap-[1.3125rem]">
              <div className="flex gap-[0.75rem] items-center">
                <div className="body-text text-dark-100">RunReady</div>
                    <div className="body-text text-dark-200">/</div>
                <div className="body-text text-[0.75rem] leading-[1.4] text-dark-100">
                  Graded Footwear
                </div>
                <div className="body-text text-dark-200">/</div>
                <div className="body-text text-[0.75rem] leading-[1.4] text-dark-500">
                  Absorb Footwear
                </div>
              </div>
            </div>
            <div className="">
              <div className="collection-title text-black">
                Different Brands, One Clear System
              </div>
              <div className="flex  displayS text-black justify-left text-black   ">
                All brands, graded by Absorb, Bounce and Stability so you know
                what each shoe does best.{" "}
              </div>
            </div>

            <div className="w-full h-auto md:h-[25rem] md:max-h-[20rem]  overflow-auto md:overflow-hidden relative border border-black">
              {/* SLANTED 3 COLUMN ACCORIAN GOES HERE */}
              <SlantedAccordion />

              <div className="absolute bottom-0 left-0 hidden md:block w-full bg-brand-green text-brand-secondary-green py-2 z-20 displayS-m text-left pl-[52px] border-t border-black">
                Learn how RunReady grades all footwear on Absorb, Bounce, and
                Stability.{" "}
              </div>

              <div className=" md:hidden w-full bg-brand-green text-brand-secondary-green  py-2 z-20 displayS-m text-left pl-[18px] border-t border-black">
                Learn how RunReady grades all footwear on Absorb, Bounce, and Stability
              </div>
            </div>
          </div>
          {/* <div className="space-y-[0.75rem] max-w-[47.0625rem] text-[#000000] mx-auto text-center">
            <div className="displayM">
            Absorb for Softer Landings.
            </div>
            <div className="body-text opacity-[0.8]">
            Every footwear is graded for Absorb, Bounce, and Stability. Absorb cushions impact, reducing stress for smoother, more comfortable steps. Less fatigue, fresher runs.
            </div>
          </div> */}
          <ABSSShoeDisplay
            shoes={shoes}
            title="Absorb Footwear"
            threshold={5}
          />
        </section>
        <div className="mb-150"></div>
      </main>
      <Footer />
    </VScrollProvider>
  );
}
