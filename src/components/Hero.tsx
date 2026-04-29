"use client";

import { useTheme } from "next-themes";
import Squares from "./Squares";
import { Github, HandMetal, Instagram, Linkedin } from "lucide-react";
import { TypewriterEffect } from "./ui/typewriter-effect";

export default function Hero() {
  const { theme } = useTheme();
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/fauzanmuh/",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/fauzanmuh",
      icon: Github,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/fauzanmuh__/",
      icon: Instagram,
    },
  ];
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
          <div className="mt-8 flex flex-col items-center gap-3 pointer-events-auto">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#9A5A1C] dark:text-[#FFD08A]">
              Get In Touch
            </p>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map(({ name, href, icon: Icon }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FEB05D]/60 bg-white/70 text-[#DE802B] shadow-[0_10px_30px_rgba(254,176,93,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#FEB05D] hover:text-[#1F2937] hover:shadow-[0_16px_40px_rgba(254,176,93,0.35)] dark:bg-[#1F2937]/70 dark:text-[#FEB05D] dark:hover:text-[#111827]"
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
