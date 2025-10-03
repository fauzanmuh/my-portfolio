import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio website.",
};
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-black text-3xl flex items-center justify-center text-blue-400 dark:text-white">
        Halo
      </div>
    </>
  );
}
