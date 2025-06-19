"use client";

import { useState } from "react";
import { aireLibreJosefin, aireLibreRobotoCon } from "../fonts";
import { faXmark, faChevronLeft, faChevronRight } from "@/graphics/faRegular";

export default function PhotoGallery() {
  const description = `
      Oaxaca is more than a destination. It’s an invitation to immerse yourself in its vibrant culture, stunning natural beauty, and unforgettable flavours. From its ancient ruins to its bustling streets, every corner holds a story waiting to be discovered. Over four days, you’ll explore challenging trails, connect with the land’s rich traditions, and experience the unique warmth of Oaxaca’s people through food, art, and community.
    `;

  const imagesRow1 = [
    "/images/aire-backshot.jpg",
    "/images/aire-yellow.jpg",
    "/images/aire-four-run.jpg",
  ];

  const imagesRow2 = [
    "/images/aire-topshot.jpg",
    "/images/aire-red.jpg",
    "/images/aire-green.jpg",
    "/images/aire-tree.jpg",
    "/images/aire-frontshot.jpg",
  ];

  const images = [...imagesRow1, ...imagesRow2]; // Combine all images into one array

  const [lightboxIndex, setLightboxIndex] = useState(null); // Track the current image index
  const [isLightboxOpen, setIsLightboxOpen] = useState(false); // Lightbox visibility

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsLightboxOpen(false);
  };

  const showNextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setLightboxIndex((prevIndex) =>
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <section className="px-5">
      {/* Title */}
      <div className="text-center md:text-left">
        <div
          className={
            aireLibreJosefin.className +
            " font-bold italic text-[1.5rem] lg:text-[2.5rem] text-white"
          }
        >
          Photo Gallery
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Description */}
        <div
          className={
            aireLibreRobotoCon.className +
            " md:w-1/2 text-white text-lg leading-relaxed"
          }
        >
          <p>{description}</p>
          <ul className="list-disc pl-10 mt-3">
            <li>
              Connect with Oaxaca&apos;s rich Zapotec heritage through sacred
              ceremonies and local stories.
            </li>
            <li>
              Learn about mezcal from the artisans who craft it, right in their
              palenques.
            </li>
            <li>
              Discover the vibrant culinary traditions that make Oaxaca a global
              food destination.
            </li>
            <li>
              Run through historic sites and natural reserves that showcase the
              region&apos;s beauty.
            </li>
            <li>
              Experience a journey designed to challenge, inspire, and leave a
              lasting impression.
            </li>
          </ul>
        </div>

        {/* Right: First Row of Images */}
        <div
          className="md:w-1/2 flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          style={{
            whiteSpace: "nowrap",
            maxWidth: "100vw", // Prevent content from exceeding viewport
          }}
        >
          {imagesRow1.map((image, index) => (
            <div
              key={index}
              className="h-[500px] w-full md:w-[275px] md:w-auto overflow-hidden rounded-lg shadow-md"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full cursor-pointer rounded-lg"
                onClick={() => openLightbox(index)} // Open lightbox with index
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row of Images */}
      <div className="hidden md:grid grid-cols-6 gap-4 mt-8">
        {imagesRow2.map((image, index) => (
          <div
            key={index + imagesRow1.length}
            className="h-[580px] overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={image}
              alt={`Gallery image ${index + 4}`}
              className="object-cover w-full h-full cursor-pointer rounded-lg"
              onClick={() => openLightbox(index + imagesRow1.length)} // Open lightbox with index
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        >
          <button
            className="absolute top-5 right-10 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            {faXmark("h-[2rem] fill-white")}
          </button>
          <button
            className="absolute left-10 text-white text-3xl font-bold"
            onClick={showPreviousImage}
          >
            {faChevronLeft("h-[2rem] fill-white")}
            </button>
          <img
            src={images[lightboxIndex]}
            alt="Selected"
            className="max-w-[90%] max-h-[90%] rounded-[2rem] shadow-lg"
          />
          <button
            className="absolute right-10 text-white text-3xl font-bold"
            onClick={showNextImage}
          >
            {faChevronRight("h-[2rem] fill-white")}
          </button>
        </div>
      )}
    </section>
  );
}
