import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};
export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
