"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import Folder, { type FolderItem } from "@/components/Folder";

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
  {
    id: "idisurabaya",
    title: "IDI Cabang Surabaya",
    description: "With team build website organization of IDI Surabaya Branch",
    image: "/assets/projects/idisurabaya.png",
    demoUrl: "https://idisurabaya.id/",
    codeUrl: "#",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Laravel 13", "MySQL"],
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const projectFolders = Array.from(
    { length: Math.ceil(projects.length / 3) },
    (_, index) => projects.slice(index * 3, index * 3 + 3),
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsImageOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F7E5C6] px-4 py-20 text-[#1F2937] dark:bg-[#0C1B2A] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-0 top-12 h-64 w-64 rounded-full bg-[#FEB05D]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#DE802B]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-8">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
            Projects
          </p>
          <h2 className="font-comic-neue text-4xl font-bold lg:text-5xl">
            A Few Things I&apos;ve Built.
          </h2>
          <p className="text-sm leading-7 text-neutral-600 dark:text-neutral-300">
            Open a folder, then pick a project to see the details.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projectFolders.map((folderProjects, folderIndex) => {
            const items: FolderItem[] = folderProjects.map((project) => ({
              title: project.title,
              image: project.image,
              alt: project.title,
            }));

            return (
              <div
                key={folderProjects[0].id}
                className="flex justify-center py-6"
              >
                <Folder
                  items={items}
                  label={`Projects ${String(folderIndex + 1).padStart(2, "0")}`}
                  color={folderIndex % 2 === 0 ? "#DE802B" : "#B9681D"}
                  paperColor="#FFF8ED"
                  layout="spread"
                  size={1.14}
                  draggable={false}
                  zoomOnClick={false}
                  theme="light"
                  onItemClick={(_, index) =>
                    setSelectedProject(folderProjects[index])
                  }
                />
              </div>
            );
          })}
        </div>

        <article className="grid overflow-hidden rounded-[30px] border border-white/40 bg-[#111827] shadow-[0_20px_60px_rgba(154,90,28,0.18)] md:grid-cols-[1.1fr_0.9fr]">
          <button
            type="button"
            aria-label={`View ${selectedProject.title} image in full screen`}
            onClick={() => setIsImageOpen(true)}
            className="group relative aspect-16/10 min-h-82 cursor-zoom-in overflow-hidden md:aspect-auto"
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 grid place-items-center bg-[#0C1B2A]/0 text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:bg-[#0C1B2A]/45 group-hover:opacity-100">
              Click to expand image
            </span>
          </button>
          <div className="flex flex-col justify-center p-6 text-white lg:p-8">
            <div className="flex flex-wrap gap-2">
              {selectedProject.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#FEB05D]/40 bg-[#1F2937]/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#FFE2B4]"
                >
                  {item}
                </span>
              ))}
            </div>
            <h3 className="mt-5 font-comic-neue text-3xl font-bold">
              {selectedProject.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#E5E7EB]">
              {selectedProject.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={selectedProject.demoUrl}
                className="inline-flex items-center gap-2 rounded-full bg-[#FEB05D] px-4 py-2 text-sm font-semibold text-[#1F2937] transition-transform hover:-translate-y-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
              <Link
                href={selectedProject.codeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
              >
                <Github className="h-4 w-4" />
                View Code
              </Link>
            </div>
          </div>
        </article>
      </div>

      {isImageOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} preview`}
          onClick={() => setIsImageOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#07111C]/90 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(event) => event.stopPropagation()}
            className="relative h-[min(80vh,760px)] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/20 bg-[#0C1B2A] shadow-2xl"
          >
            <Image
              src={selectedProject.image}
              alt={selectedProject.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-contain"
            />
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setIsImageOpen(false)}
              className="absolute right-4 top-4 grid size-10 place-items-center rounded-full bg-black/60 text-white transition-transform hover:scale-105"
            >
              <X className="size-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
