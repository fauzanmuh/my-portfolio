"use client";

import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";

const certificates = [
  {
    id: "hari-senin",
    title: "Full Stack Developer - Hari Senin",
    image: "/assets/certificates/hari-senin.png",
    alt: "Hari Senin certificate",
    width: 1600,
    height: 1200,
  },
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative overflow-hidden bg-[#FFF8ED] px-4 py-20 text-[#1F2937] dark:bg-[#102437] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-1/2 top-10 h-60 w-60 -translate-x-1/2 rounded-full bg-[#FEB05D]/20 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
            Certificates
          </p>
        </div>

        <div className="space-y-8">
          {certificates.map((certificate) => (
            <DraggableCardContainer
              key={certificate.id}
              className="flex w-full items-center justify-center overflow-hidden rounded-[32px] px-3 py-4 sm:px-4 sm:py-6 md:min-h-[520px] md:px-12 md:py-10 lg:px-20"
            >
              <DraggableCardBody className="group w-full max-w-lg rounded-[28px] border border-[#FEB05D]/40 bg-[#fffaf3] p-3 dark:bg-[#0F1F2F]">
                <div className="relative overflow-hidden rounded-[22px] border border-[#FEB05D]/20 bg-white/80 dark:bg-white/5">
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    width={certificate.width}
                    height={certificate.height}
                    draggable={false}
                    className="pointer-events-none h-auto w-full select-none object-contain"
                    priority
                  />
                  <div className="pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl bg-[#111827]/78 px-4 py-3 text-white opacity-0 shadow-lg backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FEB05D]">
                      Certificate
                    </p>
                    <p className="mt-1 font-comic-neue text-xl font-bold">
                      {certificate.title}
                    </p>
                  </div>
                </div>
              </DraggableCardBody>
            </DraggableCardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}
