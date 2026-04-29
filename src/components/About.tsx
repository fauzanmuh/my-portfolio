"use client";

import { CometCard } from "@/components/ui/comet-card";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF8ED] px-4 py-20 text-[#1F2937] dark:bg-[#102437] dark:text-[#F8FAFC]"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start">
          <CometCard className="w-full max-w-sm">
            <div
              className="rounded-[18px] border border-[#FEB05D]/40 bg-[#1D1F24] p-3 shadow-[0_24px_80px_rgba(222,128,43,0.2)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden rounded-[22px] border border-white/10">
                <Image
                  src="/assets/me.jpeg"
                  alt="Dummy portrait for About Me section"
                  className="h-[440px] w-full object-cover"
                  width={1200}
                  height={440}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#111827] via-[#111827]/70 to-transparent p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FEB05D]">
                    About Me
                  </p>
                  <h3 className="mt-2 font-comic-neue text-3xl font-bold text-white">
                    Building clean, playful, and bold web experiences.
                  </h3>
                </div>
              </div>
            </div>
          </CometCard>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#DE802B] dark:text-[#FEB05D]">
              Who Am I
            </p>
            <h2 className="font-comic-neue text-4xl font-bold lg:text-5xl">
              About Me
            </h2>
          </div>

          <div className="space-y-4 text-justify leading-8 text-[#4B5563] dark:text-[#D1D5DB]">
            <p>
              I am a Web Developer focused on building high-performance,
              scalable, and maintainable web applications using Laravel, React,
              and Next.js.
            </p>
            <p>
              I have experience building end-to-end applications, from backend
              architecture design, REST API development, and database
              optimization to implementing modern frontends that are fast,
              responsive, and focused on user experience. For me, clean code,
              efficiency, and scalability are not just best practices, they are
              the standard.
            </p>
            <p>
              Beyond technical skills, I bring solid time management, clear
              communication, and a structured approach to problem-solving. I am
              comfortable working under pressure, adapt quickly to changing
              requirements, and stay consistent in delivery without compromising
              quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
