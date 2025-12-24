"use client";

import { useTheme } from "next-themes";
import Squares from "./Squares";
import { HandMetal } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
  const { theme } = useTheme();
  const words = [
    {
      text: "A",
      className: "text-[#DE802B] font-normal text-[20px] lg:text-[28px]",
    },
    {
      text: "Front",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
    {
      text: "End",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
    {
      text: "Developer",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
    {
      text: "|",
      className: "text-[#DE802B] font-normal text-[20px] lg:text-[28px]",
    },
    {
      text: "Full",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
    {
      text: "Stack",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
    {
      text: "Developer.",
      className: "text-[#DE802B] font-bold text-[20px] lg:text-[28px]",
    },
  ];

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={100}
          direction="diagonal"
          borderColor={theme === "light" ? "#9CA3AF" : "#00F5FF"}
          hoverFillColor={theme === "light" ? "#FAD691" : "#FF2EDF"}
        />

        <div className="absolute inset-0 z-10 pt-50 px-4 pointer-events-none">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-3 lg:gap-6 pointer-events-auto">
            <HandMetal className="text-[#FEB05D] dark:text-[#FEB05D] w-16 h-auto" />
            <h2 className="text-[#111827] dark:text-white font-bold text-3xl lg:text-[50px] text-center font-comic-neue">
              Hello<span className="text-[#FEB05D]">!</span> I`m{" "}
              <span className="text-[#FEB05D] drop-shadow-[0_0_6px_rgba(254,176,93,0.5)]">
                Muhammad Fauzan
              </span>
            </h2>
          </div>
          <div className="mt-3">
            <TypewriterEffect words={words} cursorClassName="text-[#DE802B]" />
          </div>
        </div>
      </div>
    </>
  );
}
