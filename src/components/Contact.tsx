"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "mufauzan18@gmail.com",
    href: "mailto:mufauzan18@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Malang, Indonesia",
    href: "https://maps.google.com/?q=Malang,Indonesia",
  },
];

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

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message.");
      }

      form.reset();
      setStatus("success");
      setStatusMessage("Message sent. I'll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#FFF8ED] px-4 py-20 text-[#1F2937] dark:bg-[#102437] dark:text-[#F8FAFC]"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#FEB05D]/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#DE802B]/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl space-y-10">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#B9681D] dark:text-[#FEB05D]">
            Contact
          </p>
          <h2 className="font-comic-neue text-4xl font-bold lg:text-5xl">
            Let&apos;s Build Something That Hits.
          </h2>
          <p className="text-base leading-8 text-[#5B6472] dark:text-[#CBD5E1]">
            Got a project, collaboration idea, or just want to say hi? Hit me up
            and let&apos;s make something clean, useful, and actually memorable.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-[30px] border border-white/40 bg-white/70 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <h3 className="font-comic-neue text-3xl font-bold">
                Reach Me Directly
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#6B7280] dark:text-[#CBD5E1]">
                Fastest way to connect is through email. I usually reply as soon
                as I can.
              </p>

              <div className="mt-6 space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <Link
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-3xl border border-[#FEB05D]/25 bg-[#FFF8ED] px-4 py-4 transition-transform duration-300 hover:-translate-y-1 dark:bg-[#102437]/80"
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-[#FEB05D]/15 p-3 text-[#DE802B] dark:bg-[#FEB05D]/10 dark:text-[#FFD08A]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9681D] dark:text-[#FFD08A]">
                          {label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-[#1F2937] dark:text-white">
                          {value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-[#B9681D] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-[#FFD08A]" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/40 bg-[#1F2937] p-6 text-white shadow-[0_20px_60px_rgba(17,24,39,0.18)] dark:border-white/10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#FEB05D]">
                Socials
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <Link
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon className="h-4 w-4 text-[#FEB05D]" />
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-white/40 bg-white/75 p-6 shadow-[0_20px_60px_rgba(154,90,28,0.12)] backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#B9681D] dark:text-[#FFD08A]">
                Send Message
              </p>
              <h3 className="font-comic-neue text-3xl font-bold">
                Tell Me About Your Idea
              </h3>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#374151] dark:text-[#E5E7EB]">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-[#FEB05D]/25 bg-[#FFF8ED] px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors focus:border-[#DE802B] dark:bg-[#102437]/80 dark:text-white dark:placeholder:text-[#94A3B8]"
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium text-[#374151] dark:text-[#E5E7EB]">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-2xl border border-[#FEB05D]/25 bg-[#FFF8ED] px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors focus:border-[#DE802B] dark:bg-[#102437]/80 dark:text-white dark:placeholder:text-[#94A3B8]"
                  />
                </label>
              </div>

              <label className="space-y-2">
                <span className="text-sm font-medium text-[#374151] dark:text-[#E5E7EB]">
                  Subject
                </span>
                <input
                  name="subject"
                  type="text"
                  placeholder="Project inquiry, collab, freelance, etc."
                  required
                  className="w-full rounded-2xl border border-[#FEB05D]/25 bg-[#FFF8ED] px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors focus:border-[#DE802B] dark:bg-[#102437]/80 dark:text-white dark:placeholder:text-[#94A3B8]"
                />
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-[#374151] dark:text-[#E5E7EB]">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me what you're building or what you need help with..."
                  required
                  className="w-full resize-none rounded-2xl border border-[#FEB05D]/25 bg-[#FFF8ED] px-4 py-3 text-sm text-[#1F2937] outline-none transition-colors focus:border-[#DE802B] dark:bg-[#102437]/80 dark:text-white dark:placeholder:text-[#94A3B8]"
                />
              </label>

              {statusMessage ? (
                <p
                  className={`text-sm font-medium ${
                    status === "success"
                      ? "text-emerald-700 dark:text-emerald-300"
                      : "text-red-700 dark:text-red-300"
                  }`}
                >
                  {statusMessage}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-[#FEB05D] px-5 py-3 mt-2 text-sm font-semibold text-[#1F2937] shadow-[0_12px_28px_rgba(254,176,93,0.28)] transition-transform duration-300 hover:-translate-y-1 cursor-pointer disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
