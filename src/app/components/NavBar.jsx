'use client'
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Add Room", href: "/add-room" },
    { name: "My Bookings", href: "/my-bookings" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1120]/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        {/* Logo */}
        <div>
          <h1 className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-3xl font-black tracking-tight text-transparent">
            StudyNook
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/70 px-2 py-2 shadow-sm dark:border-white/10 dark:bg-white/5 lg:flex">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-violet-100 hover:text-violet-700 dark:text-gray-200 dark:hover:bg-violet-500/10 dark:hover:text-violet-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:scale-105 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:border-violet-400"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Login */}
          <button className="hidden rounded-full px-5 py-2 text-sm font-semibold text-violet-600 transition-all duration-300 hover:bg-violet-100 md:block dark:text-violet-300 dark:hover:bg-violet-500/10">
            Login
          </button>

          {/* CTA */}
          <button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:scale-105 hover:shadow-violet-500/40">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
