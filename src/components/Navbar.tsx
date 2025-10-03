"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] lg:w-[90%] xl:w-[70%] bg-[#D1D3D4] dark:bg-white backdrop-blur-md shadow-lg lg:px-6 py-3 ${
        isOpen ? "rounded-2xl lg:rounded-full" : "rounded-full"
      }`}
    >
      <div className="px-4 flex items-center justify-between h-14 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/logoku.png"
            alt="Logo"
            width={48}
            height={48}
            className="w-12 h-10"
          />
          <p className="text-[#0BA6DF] font-bold text-md md:text-xl">
            Muhammad Fauzan
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-[#C1856D] font-medium items-center justify-center">
          <Link
            href="/"
            className="hover:text-[#C1856D] hover:border-b hover:border-[#C1856D]"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#C1856D] hover:border-b hover:border-[#C1856D]"
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-[#C1856D] hover:border-b hover:border-[#C1856D]"
          >
            Pelayanan
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-[#44444E] bg-amber-300"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-[#44444E] bg-amber-300"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="relative bg-white dark:bg-black rounded-full flex items-center justify-between gap-2">
            <h2 className="text-black dark:text-white px-4">Menu</h2>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full bg-amber-300 p-3"
            >
              {isOpen ? (
                <X size={20} className="text-[#44444E]" />
              ) : (
                <Menu size={20} className="text-[#44444E]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6 pt-2 text-[#547792] rounded-2xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="#services" onClick={() => setIsOpen(false)}>
            Pelayanan
          </Link>
        </div>
      )}
    </nav>
  );
}
