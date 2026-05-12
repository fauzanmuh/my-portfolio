"use client";

import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineEntry[];
  heading?: string;
  description?: string;
}

export const Timeline = ({
  data,
  heading = "Changelog from my journey",
  description = "A quick look at the milestones that shaped the work I do today.",
}: TimelineProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
          Experience
        </p>
        <h2 className="mb-4 mt-3 max-w-4xl font-comic-neue text-4xl font-bold text-[#1F2937] dark:text-white md:text-5xl">
          {heading}
        </h2>
        <p className="max-w-2xl text-sm leading-7 text-neutral-700 dark:text-neutral-300 md:text-base">
          {description}
        </p>
      </div>

      <div ref={ref} className="relative mx-auto max-w-7xl pb-20">
        {data.map((item) => (
          <div key={item.id} className="flex justify-start pt-8 md:gap-4">
            <div className="sticky top-40 z-40 flex max-w-xs self-start md:w-full lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8ED] dark:bg-[#102437]">
                <div className="h-4 w-4 rounded-full border border-[#DE802B]/40 bg-[#FEB05D] p-2 shadow-[0_0_0_6px_rgba(254,176,93,0.14)] dark:border-[#FEB05D]/40 dark:bg-[#FFD08A]" />
              </div>
              <h3 className="hidden font-comic-neue text-5xl font-bold text-[#B9681D]/70 md:block md:pl-20 dark:text-[#FEB05D]/60">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block font-comic-neue text-3xl font-bold text-[#B9681D]/80 md:hidden dark:text-[#FEB05D]/70">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 top-0 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent via-[#DE802B]/20 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-[#FEB05D]/20"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-linear-to-t from-[#DE802B] via-[#FEB05D] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
