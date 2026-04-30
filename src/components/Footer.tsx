"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#FEB05D]/20 bg-[#1F2937] px-4 py-6 text-[#F8FAFC] dark:bg-[#08131F]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
        <p className="text-sm text-white/80">Copyright © {currentYear}.</p>
        <p className="inline-flex items-center gap-2 text-sm text-[#FFE2B4]">
          Made with
          <Heart className="h-4 w-4 fill-[#e22d1d] text-[#e22d1d]" />
          by Fauzan
        </p>
      </div>
    </footer>
  );
}
