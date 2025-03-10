import Link from "next/link";

export default function NavLogo({ logo }) {
  



  return (
    <Link
      href="/"
      className="flex-none order-1 max-[429px]:mr-auto min-[430px]:order-2 relative select-none "
    >
      <div className="flex items-center gap-[0.5rem] hover:opacity-[60%] ">
        {/* <img src="/images/Logo_Badge_Midnight.svg" className="h-[2rem] object-cover max-[429px]:hidden" /> */}

        {logo == "full" ? (
          <img
            src="/images/runready-wordmark.png"
            className=" h-[1.4rem]  lg:h-[2rem]  object-cover"
          />
        ) : (
          <img
            src="/images/Logo_Badge_Yellow.png"
            className="h-[2rem] object-cover rounded-[0.25rem] max-[429px]:hidden"
          />
        )}
      </div>
      {/*
            <Image
              src={imgRayaLogo}
              layout="fill"
              placeholder="blur"
              sizes="(max-width: 767px) 101px, 10vw"
            />
            */}
    </Link>
  );
}
