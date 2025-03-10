"use client";

import { createContext, useEffect, useState } from "react";

export const VScrollContext = createContext({});

export function VScrollProvider({ children }) {
  const [isVScrollDisabled, toggleVScroll] = useState(false);

  const [scrollPosnY, setScrollPosnY] = useState(0);

  const value = { isVScrollDisabled, toggleVScroll };

  const handleVScroll = () => {
    if (!isVScrollDisabled) {
      const posn = window.scrollY;
      setScrollPosnY(posn);
    }
  };

  useEffect(() => {
    if (!isVScrollDisabled) {
      window.scrollTo({ top: scrollPosnY, behavior: "instant" });
    }

    window.addEventListener("scroll", handleVScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleVScroll);
    };
  }, [isVScrollDisabled]);

  return (
    <VScrollContext.Provider value={value}>
      <div
        className={
          "h-full " +
          (isVScrollDisabled
            ? "overflow-y-hidden relative"
            : "")
        }
      >
        <div
          className={"h-full flex flex-col items-stretch justify-stretch " + (isVScrollDisabled ? "absolute w-full" : "")}
          style={{
            ...(isVScrollDisabled ? { top: `-${scrollPosnY}px` } : {}),
          }}
        >
          {children}
        </div>
      </div>
    </VScrollContext.Provider>
  );
}
