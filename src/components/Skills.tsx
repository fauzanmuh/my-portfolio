"use client";

type SkillItem = {
  name: string;
  badge: string;
  learning?: boolean;
};

type SkillCategory = {
  title: string;
  description: string;
  items: SkillItem[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Tech Stack",
    description: "Core languages I use to turn ideas into real products.",
    items: [
      {
        name: "HTML",
        badge:
          "https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white",
      },
      {
        name: "CSS",
        badge:
          "https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff",
      },
      {
        name: "PHP",
        badge:
          "https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white",
      },
      {
        name: "Java",
        badge:
          "https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white",
      },
      {
        name: "JavaScript",
        badge:
          "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000",
      },
      {
        name: "TypeScript",
        badge:
          "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff",
      },
    ],
  },
  {
    title: "Framework Stack",
    description: "Frameworks and UI tools I reach for during development.",
    items: [
      {
        name: "Node.js",
        badge:
          "https://img.shields.io/badge/Node.js-6DA55F?logo=node.js&logoColor=white",
      },
      {
        name: "React",
        badge:
          "https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB",
      },
      {
        name: "Laravel",
        badge:
          "https://img.shields.io/badge/Laravel-%23FF2D20.svg?logo=laravel&logoColor=white",
      },
      {
        name: "Next.js",
        badge:
          "https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white",
      },
      {
        name: "Tailwind CSS",
        badge:
          "https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white",
      },
      {
        name: "Bootstrap",
        badge:
          "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=fff",
      },
      {
        name: "Alpine.js",
        badge:
          "https://img.shields.io/badge/Alpine.js-8BC0D0?logo=alpinedotjs&logoColor=fff",
      },
      {
        name: "jQuery",
        badge:
          "https://img.shields.io/badge/jQuery-0769AD?logo=jquery&logoColor=fff",
      },
      {
        name: "shadcn/ui",
        badge:
          "https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff",
      },
    ],
  },
  {
    title: "Database Stack",
    description: "Storage layers I use for structured, scalable applications.",
    items: [
      {
        name: "MySQL",
        badge:
          "https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=fff",
      },
      {
        name: "Postgres",
        badge:
          "https://img.shields.io/badge/Postgres-%23316192.svg?logo=postgresql&logoColor=white",
        learning: true,
      },
      {
        name: "Supabase",
        badge:
          "https://img.shields.io/badge/Supabase-3FCF8E?logo=supabase&logoColor=fff",
        learning: true,
      },
    ],
  },
  {
    title: "Developer Tools",
    description: "The workflow stack that helps me build, debug, and ship.",
    items: [
      {
        name: "Composer",
        badge:
          "https://img.shields.io/badge/Composer-885630?logo=composer&logoColor=fff",
      },
      {
        name: "npm",
        badge:
          "https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=fff",
      },
      {
        name: "pnpm",
        badge:
          "https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=fff",
      },
      {
        name: "Bun",
        badge:
          "https://img.shields.io/badge/Bun-000?logo=bun&logoColor=fff",
      },
      {
        name: "Postman",
        badge:
          "https://img.shields.io/badge/Postman-FF6C37?logo=postman&logoColor=white",
      },
      {
        name: "GitHub Pages",
        badge:
          "https://img.shields.io/badge/GitHub%20Pages-121013?logo=github&logoColor=white",
      },
      {
        name: "Netlify",
        badge:
          "https://img.shields.io/badge/Netlify-%23000000.svg?logo=netlify&logoColor=%2300C7B7",
      },
      {
        name: "Vercel",
        badge:
          "https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white",
      },
      {
        name: "Git",
        badge:
          "https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff",
      },
      {
        name: "GitHub",
        badge:
          "https://img.shields.io/badge/GitHub-%23121011.svg?logo=github&logoColor=white",
      },
      {
        name: "GitHub Actions",
        badge:
          "https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white",
      },
    ],
  },
  {
    title: "Workspace & Collaboration",
    description: "Editors and collaboration tools that keep projects moving.",
    items: [
      {
        name: "Visual Studio Code",
        badge:
          "https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7.svg?logo=vsc&logoColor=white",
      },
      {
        name: "NetBeans IDE",
        badge:
          "https://img.shields.io/badge/NetBeans%20IDE-1B6AC6.svg?logo=apache-netbeans-ide&logoColor=white",
      },
      {
        name: "Sublime Text",
        badge:
          "https://img.shields.io/badge/Sublime%20Text-%23575757.svg?logo=sublime-text&logoColor=important",
      },
      {
        name: "Jira",
        badge:
          "https://img.shields.io/badge/Jira-0052CC?logo=jira&logoColor=fff",
      },
      {
        name: "Trello",
        badge:
          "https://img.shields.io/badge/Trello-0052CC?logo=trello&logoColor=fff",
      },
      {
        name: "Zoom",
        badge:
          "https://img.shields.io/badge/Zoom-2D8CFF?logo=zoom&logoColor=white",
      },
      {
        name: "Google Chrome",
        badge:
          "https://img.shields.io/badge/Google%20Chrome-4285F4?logo=GoogleChrome&logoColor=white",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F7E5C6] px-4 py-20 text-[#1F2937] dark:bg-[#0C1B2A] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FEB05D]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#DE802B]/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-12">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
            Skills & Tools
          </p>
          <h2 className="font-comic-neue text-4xl font-bold lg:text-5xl">
            Tech I Use to Build, Ship, and Scale.
          </h2>
          <p className="max-w-2xl text-base leading-8 text-[#5B6472] dark:text-[#CBD5E1]">
            A curated snapshot of the stack, tools, and platforms I use across
            design-to-development workflows. From frontend polish to backend
            architecture, this is the gear behind how I work.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {skillCategories.map((category, index) => (
            <article
              key={category.title}
              className={`rounded-[28px] border border-white/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="mb-6 space-y-2">
                <h3 className="font-comic-neue text-2xl font-bold">
                  {category.title}
                </h3>
                <p className="text-sm leading-7 text-[#6B7280] dark:text-[#CBD5E1]">
                  {category.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="group flex items-center gap-2 rounded-2xl border border-[#FEB05D]/30 bg-[#FFF8ED] px-3 py-2 transition-transform duration-300 hover:-translate-y-1 dark:bg-[#102437]/80"
                  >
                    <img
                      src={item.badge}
                      alt={item.name}
                      className="h-7 w-auto rounded-md"
                    />
                    {item.learning ? (
                      <span className="rounded-full bg-[#DE802B]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#B9681D] dark:bg-[#FEB05D]/10 dark:text-[#FFD08A]">
                        Learning
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
