import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certificates />
      <Projects />
    </>
  );
}
