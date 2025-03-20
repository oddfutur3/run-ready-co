"use client";
import { useState, useRef } from "react";
import { cards } from "./cards";
import { faPlay, faXmark } from "@/graphics/faSolid";

const LandingPageTabs = () => {
  const [tab, changeTab] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const cardContainerRef = useRef(null);

  const tabs = {
    0: { name: "Docu-Series", length: "100" },
    1: { name: "Blog", length: "100" },
    2: { name: "Research", length: "100" },

    // Add more tabs here if necessary
  };
  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const openModal = (videoUrl) => {
    setVideoUrl(videoUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl("");
  };

  return (
    <div className="wrapper overflow-x-hidden mb-[50px] ">
      <div className="wrapper-content">
        <div className=" text-[1.5rem] lg:text-[2.5rem] leading-[1.28]  lg:leading-[1.25] font-medium lg:w-[665px] mb-16">
        Explore our curated resources designed to deepen your knowledge of RunReady.
        </div>
        <div className="w-full h-[2rem] relative overflow-x-auto mb-6">
          <div className="absolute bottom-[17px] inline-flex gap-[3rem] text-text-contrast [&>*]:font-medium [&>*]:text-[0.875rem] [&>*]:leading-[1.2] [&>*]:tracking-[-1%]">
            {Object.keys(tabs).map((key) => (
              <div className="relative" key={key}>
                <button
                  onClick={() => changeTab(Number(key))}
                  className={
                    "whitespace-nowrap " +
                    (tab === Number(key) ? "" : "opacity-[0.3]")
                  }
                >
                  {tabs[key].name}
                </button>
                {tab === Number(key) && (
                  <svg
                    className="absolute top-[31px] left-1/2 -translate-x-1/2 "
                    width={tabs[tab].length}
                    height="3"
                    viewBox={`0 0 ${tabs[tab].length} 3`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={`M0.208984 1.75H${tabs[tab].length}`}
                      stroke="black"
                      strokeWidth="2"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
          <svg
            className="absolute bottom-0"
            viewBox="0 0 649 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.2"
              d="M0.208984 1.75H648.209"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div
  ref={cardContainerRef}
  className="flex gap-[1.5rem] overflow-x-auto scrollbar 
  min-[768px]:!mr-[-4rem] 
  min-[1655px]:!mr-[calc((1513px-100vw)/2)]
  !mr-[-1.5rem] pr-[1.5rem]"
  style={{ scrollBehavior: "smooth" }}
>
  {cards[tab].map((card, index) => (
  <div
  key={index}
  className={` 
    ${card.title === "Coming Soon" ? "" : "flex flex-shrink-0 w-full max-w-[670px] min-w-[670px] h-auto max-h-[380px] object-cover group hover:opacity-80 transition-opacity duration-300 border border-black shadow-md relative"}`}
  style={{ cursor: card.title === "Coming Soon" ? "default" : "pointer" }}
  onClick={() => card.title !== "Coming Soon" && openModal(card.videoUrl)}
>
      {/* If card is "Coming Soon", show only this */}
      {card.title === "Coming Soon" ? (
      <div>
        Coming Soon...
      </div>
      ) : (
        <>
          {/* Image Container */}
          <div className="relative w-[300px] h-[370px] flex-shrink-0">
            {/* Image Thumbnail */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Play Icon Overlay (Centered in the Image) */}
            <div className="absolute inset-0 flex justify-center items-center pt-10">
              {faPlay("h-[4rem] fill-[#edfd35]")}
            </div>
          </div>

          {/* Card Details */}
          <div className="min-w-[330px] px-4 pt-4 lg:px-6 lg:pt-6 relative bg-white">
            <div className="text-sm text-gray-600 caption">{tabs[tab].name}</div>

            <div className="my-5">
              <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
            </div>

            <p className="text-sm overflow-auto max-h-[240px]">{card.description}</p>
          </div>
        </>
      )}
    </div>
  ))}
</div>

      </div>

      {/* Modal Component */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white  p-8 relative max-w-[800px] w-full">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black text-lg"
            >
              {faXmark("h-[1rem]")}
            </button>
            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageTabs;
