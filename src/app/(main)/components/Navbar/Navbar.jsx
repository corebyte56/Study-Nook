"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/add-room", label: "Add Room" },
  { href: "/my-listings", label: "My Listings" },
  { href: "/my-bookings", label: "My Bookings" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = scrolled
    ? "bg-[#0F172A]/90 backdrop-blur-md border-b border-white/8 shadow-lg"
    : "bg-transparent border-b border-white/5";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center group-hover:scale-105 transition-transform">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-[17px] font-bold text-white font-poppins">StudyNook</span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            const linkClass = active
              ? "text-sm font-inter transition-colors text-white font-medium"
              : "text-sm font-inter transition-colors text-white/60 hover:text-white";
            return (
              <li key={link.href}>
                <Link href={link.href} className={linkClass}>
                  {link.label}
                  {active && (
                    <span className="block h-0.5 mt-0.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/sign-in" className="text-sm text-white/70 hover:text-white border border-white/20 hover:border-white/40 px-4 py-1.5 rounded-lg transition-all font-inter">
            Sign In
          </Link>
          <Link href="/sign-up" className="text-sm font-medium text-white px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-90 transition-opacity font-inter">
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)} aria-label="toggle menu">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#0F172A]/95 backdrop-blur-md border-t border-white/8 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/70 hover:text-white font-inter py-1 transition-colors" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <hr className="border-white/8" />
          <Link href="/sign-in" className="text-sm text-white/70 font-inter">Sign In</Link>
          <Link href="/sign-up" className="text-sm text-white font-medium font-inter">Get Started</Link>
        </div>
      )}
    </nav>
  );
}