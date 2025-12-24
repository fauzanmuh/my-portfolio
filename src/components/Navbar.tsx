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
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[75%] lg:w-[90%] xl:w-[70%] bg-[#E5E7EB]/90 dark:bg-[#234C6A]/80 backdrop-blur-md shadow-lg lg:px-6 transition-transform duration-300 ease-out ${
        isOpen
          ? "scale-y-100 rounded-2xl lg:rounded-full"
          : "scale-y-[0.95] rounded-full"
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
          <p className="hidden lg:block text-[#374151] dark:text-[#EBE1D1] font-bold text-md md:text-xl">
            Muhammad Fauzan
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 text-[#374151] dark:text-[#EBE1D1] font-medium items-center justify-center">
          <Link href="/" className="hover:text-[#FEB05D]">
            Home
          </Link>
          <Link href="#about" className="hover:text-[#FEB05D]">
            About
          </Link>
          <Link href="#services" className="hover:text-[#FEB05D]">
            Pelayanan
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-[#44444E] hover:text-[#44444E] rounded-full bg-amber-300 dark:bg-amber-300 dark:hover:bg-amber-300 hover:bg-amber-300 cursor-pointer"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme("system")}
                className="cursor-pointer"
              >
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
                className="text-[#44444E] dark:text-white bg-amber-300"
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
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="relative bg-white dark:bg-black rounded-full 
             flex items-center gap-1 overflow-hidden"
          >
            {/* MENU TEXT */}
            <AnimatePresence>
              {!isOpen && (
                <motion.h2
                  key="menu-text"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="text-black dark:text-white px-4 whitespace-nowrap"
                >
                  Menu
                </motion.h2>
              )}
            </AnimatePresence>

            {/* BUTTON */}
            <motion.button
              layout
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full bg-yellow-400 p-3"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} className="text-[#44444E]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} className="text-[#44444E]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 pb-6 pt-2 text-[#547792] dark:text-white rounded-2xl">
          <Link
            href="/"
            className="hover:text-[#FEB05D]"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-[#FEB05D]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#services"
            className="hover:text-[#FEB05D]"
            onClick={() => setIsOpen(false)}
          >
            Pelayanan
          </Link>
        </div>
      )}
    </nav>
  );
}
