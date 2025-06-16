"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SlantedAccordion() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 868);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const items = [
    {
      title: "Absorb",
      description:
        "Built with enhanced cushioning to reduce repeated impact and improve comfort when landings feel too firm. ",
      bgImage: "/images/rr-assets/Gradient_Sunburst_1.jpg",
      link: "/graded-footwear/absorb",
      icon: "/images/RR_Absorb_Icon.svg",
    },
    {
      title: "Bounce",
      description:
        "Built to return more energy and help you push off  easily when you need extra spring or propulsion. ",
      bgImage: "/images/rr-assets/Gradient_Blue_2.jpg",
      link: "/graded-footwear/bounce",
      icon: "/images/RR_Bounce_Icon.svg",
    },
    {
      title: "Stability",
            bgImage: "/images/rr-assets/Gradient_Green_1.jpg",
      description:
        "Built for added support to improve control when balance feels off or uneven, helping you stay steady on any terrain.",
      link: "/graded-footwear/stability",
      icon: "/images/RR_Support_Icon.svg",
    },
  ];

  const activeIndex = items.findIndex((item) =>
    pathname.toLowerCase().includes(item.title.toLowerCase())
  );
  const expandedIndex = hovered !== null ? hovered : activeIndex;

  return (
    <>
      {!isMobile ? (
        <div className="w-full h-full relative flex min-h-[400px]">
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`relative transition-all duration-300 cursor-pointer text-black p-4 flex flex-col justify-center ${
                index !== 0 ? "ml-[-140px]" : ""
              } ${expandedIndex === index ? "items-start" : "items-center"} ${
                item.title === "Bounce" ? "bounce-section" : ""
              }`}
              style={{
                backgroundImage:
                  expandedIndex === index ? `url(${item.bgImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor:
                  expandedIndex === index ? "transparent" : "#F9F9F9",
                flex: expandedIndex === index ? 2 : 1,
                clipPath:
                  index === 0
                    ? "polygon(0 0, 100% 0, calc(100% - 140px) 100%, 0 100%)"
                    : index === 1
                    ? "polygon(140px 0, 100% 0, calc(100% - 140px) 100%, 0 100%)"
                    : "polygon(140px 0, 100% 0, 100% 100%, 0 100%)",
                opacity: expandedIndex === index ? 1 : 0.8,
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className={`h-[9rem] flex flex-col transition-all ${
                  expandedIndex === index && index !== 0
                    ? "pl-[140px]"
                    : "pl-[40px]"
                } ${expandedIndex === index ? "items-start" : "items-center"}`}
              >
                <div className="flex items-center">
                  <img
                    src={item.icon}
                    alt={`${item.title} icon`}
                    className={`h-[40px] mr-2 transition-all ${
                      expandedIndex === index ? "opacity-100" : "opacity-50"
                    }`}
                  />
                  <h3
                    className={`displayM font-bold transition-all ${
                      expandedIndex === index
                        ? "text-black scale-105"
                        : "text-gray-500 scale-95"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`body-text mt-2 max-w-[550px] transition-all duration-500 transform pr-20 ${
                    expandedIndex === index
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-full"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={`flex flex-col space-y-4 `}>
          {items.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`flex items-center space-x-4 p-4 bg-white !mt-0 ${
                index === 1 ? "border-t border-b border-black" : ""
              }`}
              style={{
                backgroundImage:
                  expandedIndex === index ? `url(${item.bgImage})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundColor:
                  expandedIndex === index ? "transparent" : "#F9F9F9",
                flex: expandedIndex === index ? 2 : 1,
              }}
            >
              <img
                src={item.icon}
                alt={`${item.title} icon`}
                className="h-8 w-8"
              />
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 ">{item.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
