"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Play } from "lucide-react";

export default function Banner() {
  const [query, setQuery] = useState("");
  const [floor, setFloor] = useState("all");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

      {/* Background effects */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(59,130,246,0.15),rgba(20,184,166,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-1.5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-xs text-blue-300 font-inter font-medium">BUBT University Library — Smart Room Booking</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold font-poppins text-white leading-tight mb-4">
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Study Space
          </span>{" "}
          Today
        </h1>

        {/* Subtext */}
        <p className="text-white/55 font-inter text-base md:text-lg max-w-lg leading-relaxed mb-8">
          Book premium study rooms instantly. Quiet zones, group labs and collaborative spaces — all in one platform.
        </p>

        {/* Search bar */}
        <div className="flex items-center gap-2 w-full max-w-xl bg-white/5 border border-white/12 rounded-2xl p-2 mb-5">
          <Search className="w-4 h-4 text-white/35 ml-2 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by room name, floor or amenity..."
            className="flex-1 bg-transparent outline-none text-sm text-white placeholder:text-white/30 font-inter"
          />
          <select
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
            className="bg-white/8 border-none outline-none text-white/70 text-xs font-inter rounded-lg px-3 py-2 cursor-pointer"
          >
            <option value="all">All Floors</option>
            <option value="1">Floor 1</option>
            <option value="2">Floor 2</option>
            <option value="3">Floor 3</option>
          </select>
          <button className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm font-medium font-inter px-5 py-2 rounded-xl hover:opacity-90 transition-opacity shrink-0">
            Search
          </button>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-3 mb-12">
          <Link
            href="/rooms"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold font-poppins text-sm px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
          >
            Explore Rooms <ArrowRight className="w-4 h-4" />
          </Link>
          <button className="flex items-center gap-2 bg-white/5 border border-white/15 text-white font-medium font-poppins text-sm px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
            <Play className="w-4 h-4" /> How it works
          </button>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-8">
          {[
            { num: "50+",  label: "Study Rooms"     },
            { num: "2K+",  label: "Active Students" },
            { num: "98%",  label: "Satisfaction"    },
            { num: "24/7", label: "Available"       },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold font-poppins bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {s.num}
              </div>
              <div className="text-xs text-white/45 font-inter mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}