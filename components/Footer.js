"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ppNeueMontreal } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { createKlayEvent } from "@/serverActions/createKlayEvent";
import { useState } from "react";
import { LoadingButton } from "./LoadingButton";

const Footer = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSub = async () => {
    if (!isChecked) {
      setError(
        "Please agree to the data privacy statement before subscribing."
      );
      return;
    }

    if (!validateEmail(inputEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setError(""); // Clear any previous errors
      console.log("Submitting with email:", inputEmail); // Debug log

      const payload = JSON.stringify({
        data: {
          type: "event",
          attributes: {
            properties: {
              "event-name": "RunReady Newsletter Sign Up", // Fallback if undefined
              // "url-link": `https://staging.runasyouare.co/subscribed?email=${inputEmail}`, // Fallback if undefined
            },
            metric: {
              data: {
                type: "metric",
                attributes: {
                  name: "RunReady Newsletter Sign Up",
                },
              },
            },
            profile: {
              data: {
                type: "profile",
                attributes: {
                  properties: {
                    username: "User",
                  },
                  meta: {
                    patch_properties: {
                      append: {
                        newKey: "New Value",
                      },
                    },
                  },
                  email: inputEmail || "no-email@example.com", // Use inputted email
                },
              },
            },
          },
        },
      });

      await createKlayEvent(payload); // Send the payload
      console.log("Event submitted successfully!");
      setSubmitted(true);
    } catch (err) {
      console.error("Error submitting email:", err); // Error logging
      setSubmitted(false);
    }
  };

  return (
    <section
      style={{ margin: "0 auto" }}
      className=" w-full bg-transparent text-black  "
    >
      <div
        className={
          ppNeueMontreal.className + "    pt-12 lg:pt-24 bg-primary-300 wrapper"
        }
      >
        <div className="wrapper-content">
          {/* <div className="flex flex-col lg:flex-row text-center lg:text-left justify-between w-full mb-20 lg:mb-32">
            <div style={{whiteSpace:"nowrap"}} className="text-black text-label2 font-medium mb-12 lg:mb-0">
            We are proud to partner with:
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <div className="flex w-10/12 justify-center lg:justify-between flex-wrap gap-10 fill-white">
                <Link href="#">
                  <img
                    src="/images/RAYA-short.svg"
                    className="h-[36px] w-[100px] lg:w-[136px] lg:h-[44px] object-contain fill-white"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/images/RAYA-short.svg"
                    className="h-[36px] w-[100px] lg:w-[136px] lg:h-[44px] object-contain"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/images/RAYA-short.svg"
                    className="h-[36px] w-[100px] lg:w-[136px] lg:h-[44px] object-contain"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/images/RAYA-short.svg"
                    className="h-[36px] w-[100px] lg:w-[136px] lg:h-[44px] object-contain"
                  />
                </Link>
                <Link href="#">
                  <img
                    src="/images/RAYA-short.svg"
                    className="h-[36px] w-[100px] lg:w-[136px] lg:h-[44px] object-contain"
                  />
                </Link>
              </div>
            </div>
          </div> */}
          <div className="flex flex-col lg:flex-row justify-between mb-[90px] lg:gap-12">
            <div className="">
              <form className="flex flex-col w-full lg:max-w-[440px]">
                <label
                  htmlFor="email"
                  className="text-label2 lg:text-label1 font-medium text-black lg:w-3/4 text-center lg:text-left"
                >
                  Stay updated on RunReady
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete="off"
                  name="email"
                  className="h-11 bg-gray-100 mt-6 px-4 py-3 w-full border border-1 border-gray-400 focus:bg-white"
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSub();
                    }
                  }}
                  disabled={submitted} // Disable input after submission
                />

                <div
                  className={`text-black flex gap-2 items-center mt-5 text-xs ${
                    submitted ? "invisible" : ""
                  }`}
                >
                  You may unsubscribe at any time using the link in our
                  newsletter.
                </div>

                <div
                  className={`mt-2 inline-flex items-center ${
                    submitted ? "invisible" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={isChecked}
                    onChange={() => {
                      setIsChecked(!isChecked);
                      if (error) setError(""); // Clear error if user checks
                    }}
                  />
                  <div className="text-xs text-black">
                    I agree to receive your newsletters and accept the data
                    privacy statement.
                  </div>
                </div>

                <div className="flex gap-2  items-center md:items-baseline">
                  <LoadingButton
                    action={handleSub}
                    wrapperClass="  w-min mt-8"
                    buttonClass="hover:bg-opacity-[0.8] bg-black !font-secondary caption text-white-100 px-[1.5rem] py-[0.75rem]"
                    disabled={
                      submitted ||
                      !inputEmail ||
                      !isChecked ||
                      !validateEmail(inputEmail)
                    }
                    onSuccess={() => console.log("Subscription successful")}
                    onFail={() => console.log("Subscription failed")}
                  >
                    {submitted ? "Subscribed" : "Subscribe"}
                  </LoadingButton>
                  {error && (
                    <div className="text-red-600 text-xs mt-6">{error}</div>
                  )}
                </div>
              </form>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-14 lg:flex lg:gap-[70px] mt-20 lg:mt-0">
              {/* <div>
                <p className="mb-7 text-black text-[14px] leading-[1.15] font-semibold">
                  Learn More
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-7 text-black text-[14px] leading-[1.15] font-semibold">
                  Learn More
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div> */}

              {/* <div>
                <p className="mb-7 text-black text-[14px] leading-[1.15] font-semibold">
                  Software
                </p>

                <div className="flex flex-col gap-4"> */}
                  {/* <div className="flex gap-2 items-center">
                    <Link
                      href="/login"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      Login
                    </Link>
                  </div> */}
                  {/* <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="#"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div> */}
                {/* </div> */}
              {/* </div> */}

              <div className="lg:ml-10">
                <p className="mb-7 lg:mr-10    text-black text-[14px] leading-[1.15] font-semibold">
                  Learn More
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Link
                      href="/careers"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      Careers
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Link
                      href="/FAQ"
                      className="text-black text-[14px] leading-[1.5] hover:underline"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="mb-7 mr-10    text-black text-[14px] leading-[1.15] font-semibold">
                  Flagship Studio
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex gap-2 items-center">
                    <Link
                      href="https://maps.app.goo.gl/2MGWsqy1g2MWNYdd7"
                      target="_blank"
                      className="text-black text-[14px] leading-[1.5] "
                    >
                      2033 W 4th Ave,
                      <br /> Vancouver, BC V6J 1N3
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="text-black text-[14px] leading-[1.5] ">
                      (778) 312-1322
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="text-black text-[14px] leading-[1.5]">
                      info@runready.io
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-x-[1rem]  flex justify-end mb-[40px]">
            <a
              href="https://www.instagram.com/runready.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center  h-[1.5rem] aspect-square  btn-hover-bg-opacity"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[1.375rem] text-black"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/runready"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center  h-[1.5rem] aspect-square  btn-hover-bg-opacity"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[1.375rem] text-black"
              />
            </a>
            <a
              href="https://www.facebook.com/people/RunReady/61573187944976/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex justify-center items-center  h-[1.5rem] aspect-square  btn-hover-bg-opacity"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-[1.375rem] text-black"
              />
            </a>
          </div>
          <div className="border-solid border-0 border-t border-black py-10 text-center lg:text-left flex flex-col lg:flex-row justify-center lg:justify-between">
            <div className="flex gap-x-4 text-xs font-medium text-black flex-col lg:flex-row mb-9 lg:mb-0 items-center">
              <span className="mb-4 lg:mb-0">
                ©2025 RunReady. All rights reserved.
              </span>
              {/* <div className="flex gap-4">
                <Link href="/terms-of-service" className="hover:underline lg:mr-0">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="hover:underline lg:mr-0">
                  Privacy Policy
                </Link>
              </div> */}
            </div>
            <div className=" lg:ml-auto       ">
              <Link
                href="https://www.runasyouare.co/"
                target="_blank"
                className="text-black text-xs lg:w-2/5 hover:underline text-right"
              >
                <Image
                  width={150}
                  height={100}
                  src="/images/runready-by-runasyouare-black.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
