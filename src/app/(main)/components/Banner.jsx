"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight, Play } from "lucide-react";

export default function Banner() {
  const [query, setQuery] = useState("");
  const [floor, setFloor] = useState("all");

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[#0F172A]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(59,130,246,0.15),rgba(20,184,166,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Glow */}
      <div className="absolute top-24 left-10 md:left-1/4 w-40 md:w-64 h-40 md:h-64 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 md:right-1/4 w-40 md:w-64 h-40 md:h-64 bg-teal-400/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs text-blue-300 font-medium">
            BUBT University Library — Smart Room Booking
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-5">
          Find Your Perfect{" "}
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Study Space
          </span>{" "}
          Today
        </h1>

        {/* Subtitle */}
        <p className="text-white/60 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10">
          Book premium study rooms instantly. Quiet zones, group labs and
          collaborative spaces — all in one platform.
        </p>

        {/* Search */}
        <div className="w-full max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-3 mb-10">

          <div className="flex flex-col lg:flex-row gap-3">

            <div className="flex items-center gap-3 flex-1 px-4 py-3 rounded-xl bg-white/5">
              <Search className="w-5 h-5 text-white/40" />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search room, floor..."
                className="w-full bg-transparent outline-none text-white placeholder:text-white/30"
              />
            </div>

            <select
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
              className="w-full lg:w-[180px] bg-white/5 text-white rounded-xl px-4 py-3 outline-none"
            >
              <option className="text-white bg-black" value="all">All Floors</option>
              <option className="text-white bg-black" value="1">Floor 1</option>
              <option className="text-white bg-black" value="2">Floor 2</option>
              <option className="text-white bg-black" value="3">Floor 3</option>
            </select>

            <button className="w-full lg:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold hover:opacity-90 transition cursor-pointer">
              Search
            </button>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-14">

          <Link
            href="/rooms"
            className="flex justify-center items-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-4 rounded-xl"
          >
            Explore Rooms
            <ArrowRight size={18} />
          </Link>

          <button className="flex justify-center items-center gap-2 border border-white/15 bg-white/5 text-white px-8 py-4 rounded-xl hover:bg-white/10">
            <Play size={18} />
            How it works
          </button>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            { num: "50+", label: "Study Rooms" },
            { num: "2K+", label: "Active Students" },
            { num: "98%", label: "Satisfaction" },
            { num: "24/7", label: "Available" },
          ].map((s, i) => (
            <div key={i}>
              <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                {s.num}
              </h2>

              <p className="text-sm sm:text-lg text-white/50 mt-2">
                {s.label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}