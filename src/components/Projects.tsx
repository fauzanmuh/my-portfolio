"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Github } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  stack: string[];
};

const projects: Project[] = [
  {
    id: "polinema-library",
    title: "Polinema Library",
    description:
      "With a team created a book management system and website-based book lending transactions",
    image: "/assets/projects/perpus.png",
    demoUrl: "#",
    codeUrl: "https://github.com/fauzanmuh/MalangLibary",
    stack: ["Laravel 8", "Bootstrap", "MySQL"],
  },
  {
    id: "ipam",
    title: "IP Address Management",
    description:
      "With the IPAM website you can manage IP networks in Malang City.",
    image: "/assets/projects/monitoringIP.png",
    demoUrl: "#",
    codeUrl: "https://github.com/fauzanmuh/Monitoring-IP",
    stack: ["HTML", "JavaScript", "CSS", "PHP", "MySQL"],
  },
  {
    id: "Collegetivity",
    title: "Collegetivity",
    description:
      "This website acts as a workspace intended for students to become more productive and organized.",
    image:
      "https://user-images.githubusercontent.com/46257169/171705042-12da6cff-6118-45f9-9349-04d9704ca12a.png",
    demoUrl: "#",
    codeUrl: "https://github.com/fauzanmuh/ToDOList",
    stack: ["Laravel 9", "Tailwind CSS", "MySQL"],
  },
  {
    id: "bengkel-sahabat",
    title: "Bengkel Sahabat",
    description: "Website Company Profile from Bengkel Sahabat",
    image:
      "https://github.com/fauzanmuh/BengkelSahabat/raw/master/assets/img/utama.png",
    demoUrl: "https://fauzanmuh.github.io/BengkelSahabat",
    codeUrl: "https://github.com/fauzanmuh/BengkelSahabat",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: "uklam-uklam",
    title: "Uklam-Uklam",
    description:
      "Website to search for tourist destinations based on desires using the Fuzzy Tahani method",
    image: "/assets/projects/uklamuklam.png",
    demoUrl: "https://uklamuklam.my.id",
    codeUrl: "https://github.com/fauzanmuh/SPK-WisataMLGv3",
    stack: ["HTML", "PHP", "CSS", "JavaScript", "MySQL"],
  },
  {
    id: "tokopaido",
    title: "Tokopaido",
    description:
      "Website e-commerce Tokopaido integrated with midtrans payment gateway",
    image: "/assets/projects/tokopaido.png",
    demoUrl: "#",
    codeUrl: "https://github.com/fauzanmuh/OnlineShop-Laravel11",
    stack: ["Laravel 11", "Filament 3", "Tailwind CSS", "MySQL"],
  },
  {
    id: "blockchain-society",
    title: "Blockchain Society",
    description:
      "IBS plays a pivotal role in aligning stakeholders—government, businesses, academic institutions, and global partners—to drive Indonesia’s blockchain adoption",
    image: "/assets/projects/ibs.png",
    demoUrl: "https://blockchainsociety.id/",
    codeUrl: "#",
    stack: ["WordPress"],
  },
  {
    id: "trimatour",
    title: "TrimaTour",
    description:
      "Website Bali tours and travel company, providing comprehensive information about tour packages, destinations, and booking options.",
    image: "/assets/projects/trimatour.png",
    demoUrl: "https://trimatour.com",
    codeUrl: "#",
    stack: ["Laravel 11", "Tailwind CSS", "Filament 3", "MySQL"],
  },
  {
    id: "ppds",
    title: "PPDS",
    description:
      "Build form and admin for PPDS Orthopaedi Universitas Brawijaya",
    image: "/assets/projects/ppds.png",
    demoUrl: "#",
    codeUrl: "#",
    stack: ["Laravel 11", "Tailwind CSS", "MySQL"],
  },
  {
    id: "mindwell",
    title: "Mindwell",
    description:
      "With team build website booking psikologi services, providing comprehensive information about services, and booking options also integrated with DOKU payment gateway",
    image: "/assets/projects/mindwell.png",
    demoUrl: "https://mindwellbyhmc.com",
    codeUrl: "#",
    stack: ["Laravel 11", "Tailwind CSS", "Next.js", "MySQL"],
  },
  {
    id: "ihks",
    title: "IHKS",
    description:
      "With team build website for Indonesian Hip & Knee Society, providing comprehensive information about the society, events, and membership options also integrated with DOKU payment gateway. This website also has a member area.",
    image: "/assets/projects/ihks.png",
    demoUrl: "https://ihks.or.id",
    codeUrl: "#",
    stack: ["Laravel 12", "Tailwind CSS", "MySQL"],
  },
  {
    id: "jadicomm",
    title: "Jadicomm",
    description:
      "With team build website booking event and seminar, providing comprehensive information about events, and booking options also integrated with DOKU payment gateway",
    image: "/assets/projects/jadicomm.png",
    demoUrl: "https://event.ijen.dev",
    codeUrl: "#",
    stack: ["Laravel 12", "Tailwind CSS", "MySQL"],
  },
  {
    id: "sustainix-landing",
    title: "Sustainix Landing Page",
    description:
      "Build landing page for Sustainix, a company that provides sustainable solutions for businesses. The landing page provides information about the company, its services, and contact options.",
    image: "/assets/projects/sustainix-landing-page.png",
    demoUrl: "https://sustainix.id",
    codeUrl: "#",
    stack: ["Next.js", "Tailwind CSS"],
  },
  {
    id: "sustainix-portal",
    title: "Sustainix Portal",
    description:
      "With team build website Sustainix helps waste operators, hotels, restaurants, and businesses turn waste handling into trusted proof-with simple scoring, public visibility, and blockchain-backed records.",
    image: "/assets/projects/sustainix-portal.png",
    demoUrl: "https://app.sustainix.id",
    codeUrl: "#",
    stack: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Hono.js",
      "PostgreSQL",
    ],
  },
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const container = carouselRef.current;

    if (!container) return;

    const updateScrollState = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      setCanScrollLeft(container.scrollLeft > 4);
      setCanScrollRight(container.scrollLeft < maxScrollLeft - 4);
    };

    updateScrollState();
    container.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const container = carouselRef.current;

    if (!container) return;
    if (direction === "left" && !canScrollLeft) return;
    if (direction === "right" && !canScrollRight) return;

    const card = container.querySelector<HTMLElement>("[data-project-card]");

    if (!card) return;

    const gap = 24;
    const scrollAmount =
      direction === "left" ? -(card.offsetWidth + gap) : card.offsetWidth + gap;

    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F7E5C6] px-4 py-20 text-[#1F2937] dark:bg-[#0C1B2A] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#FEB05D]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DE802B]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
              Projects
            </p>
            <h2 className="font-comic-neue text-4xl font-bold lg:text-5xl">
              A Few Things I&apos;ve Built.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Scroll projects left"
              disabled={!canScrollLeft}
              onClick={() => handleScroll("left")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FEB05D]/50 bg-white/80 text-[#B9681D] shadow-[0_12px_30px_rgba(154,90,28,0.14)] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:border-[#D6C7B4] disabled:bg-[#F5E7D1] disabled:text-[#C4A482] disabled:shadow-none disabled:hover:translate-y-0 dark:bg-white/10 dark:text-[#FFD08A] dark:disabled:border-white/10 dark:disabled:bg-white/5 dark:disabled:text-white/30 cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll projects right"
              disabled={!canScrollRight}
              onClick={() => handleScroll("right")}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#FEB05D]/50 bg-white/80 text-[#B9681D] shadow-[0_12px_30px_rgba(154,90,28,0.14)] transition-transform duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:border-[#D6C7B4] disabled:bg-[#F5E7D1] disabled:text-[#C4A482] disabled:shadow-none disabled:hover:translate-y-0 dark:bg-white/10 dark:text-[#FFD08A] dark:disabled:border-white/10 dark:disabled:bg-white/5 dark:disabled:text-white/30 cursor-pointer"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              data-project-card
              className="group relative flex h-full w-[92%] min-w-[92%] snap-center flex-col overflow-hidden rounded-[30px] border border-white/40 bg-white/70 shadow-[0_20px_60px_rgba(154,90,28,0.14)] backdrop-blur-md sm:w-[88%] sm:min-w-[88%] lg:mx-auto lg:w-[78%] lg:min-w-[78%]"
            >
              <div className="relative aspect-[16/10] overflow-hidden max-h-[500px] sm:aspect-[16/9]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 hidden bg-gradient-to-t from-[#050816]/96 via-[#050816]/55 to-transparent transition-opacity duration-300 sm:block" />
              </div>

              <div className="relative z-10 -mt-6 flex flex-1 flex-col rounded-t-[28px] bg-[#111827] p-4 text-white sm:mt-0 sm:rounded-none sm:bg-transparent sm:p-6 sm:absolute sm:inset-0 sm:justify-end">
                <div className="space-y-3 transition-transform duration-300 sm:group-hover:-translate-y-2">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[#FEB05D]/40 bg-[#1F2937]/85 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FFE2B4] shadow-[0_8px_20px_rgba(0,0,0,0.2)] sm:px-3 sm:text-xs sm:tracking-[0.18em]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-comic-neue text-2xl leading-tight font-bold text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)] sm:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <div className="mt-4 flex flex-col gap-4 sm:translate-y-6 sm:opacity-0 sm:transition-all sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                  <p className="max-w-xl text-sm leading-7 text-[#E5E7EB]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={project.demoUrl}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FEB05D] px-4 py-2 text-sm font-semibold text-[#1F2937] shadow-[0_10px_24px_rgba(254,176,93,0.28)] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                    <Link
                      href={project.codeUrl}
                      className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#111827]/75 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-1"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
