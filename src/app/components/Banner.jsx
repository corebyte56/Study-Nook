'use client'
import { Search, Plus, ShieldCheck, Clock3, BadgeDollarSign, Armchair } from "lucide-react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative overflow-hidden px-4 pb-10 pt-6 md:px-8 lg:px-12">
      {/* Background Blur */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl overflow-hidden rounded-[40px] border border-black/5 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-[#0B1120]/80">
        <div className="grid min-h-[750px] grid-cols-1 lg:grid-cols-2">
          {/* LEFT */}
          <div className="flex flex-col justify-center px-6 py-14 md:px-14 lg:px-16">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 w-fit rounded-full bg-violet-100 px-5 py-2 text-sm font-semibold text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
            >
              ✦ Find. Book. Focus.
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-xl text-5xl font-black leading-tight text-slate-900 md:text-7xl dark:text-white"
            >
              Find your perfect{" "}
              <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                study room.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-lg text-lg leading-8 text-slate-600 dark:text-slate-300"
            >
              Book quiet, private study rooms in your library or list your own
              and start earning.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:scale-105">
                <Search size={20} />
                Explore Rooms
              </button>

              <button className="flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-300 hover:border-violet-300 hover:text-violet-600 dark:border-white/10 dark:bg-white/5 dark:text-white">
                <Plus size={20} />
                Add Room
              </button>
            </motion.div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-6">
              {[
                {
                  icon: <Armchair className="text-violet-500" />,
                  title: "500+",
                  subtitle: "Study Rooms",
                },
                {
                  icon: <ShieldCheck className="text-violet-500" />,
                  title: "2K+",
                  subtitle: "Happy Students",
                },
                {
                  icon: <Clock3 className="text-violet-500" />,
                  title: "4.9/5",
                  subtitle: "User Rating",
                },
              ].map((item, index) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={index}
                  className="rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
                >
                  <div>{item.icon}</div>

                  <h3 className="mt-3 text-3xl font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative hidden lg:block">
            <img
              src="https://i.ibb.co/5W6K7jK/study-room.jpg"
              alt="Study Room"
              className="h-full w-full object-cover"
            />

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-10 left-10 max-w-sm rounded-3xl border border-white/20 bg-white/90 p-6 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-violet-100 p-4 text-violet-600">
                  <ShieldCheck size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Join thousands of students
                  </h3>

                  <p className="mt-1 text-slate-500">
                    who study smarter every day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-1 gap-6 border-t border-black/5 bg-white/60 px-6 py-8 md:grid-cols-2 lg:grid-cols-4 lg:px-10 dark:border-white/10 dark:bg-white/5">
          {[
            {
              icon: <ShieldCheck />,
              title: "Secure Booking",
              desc: "Safe & easy booking with real-time updates.",
            },
            {
              icon: <Clock3 />,
              title: "Flexible Hours",
              desc: "Book by the hour that fits your schedule.",
            },
            {
              icon: <Armchair />,
              title: "Premium Spaces",
              desc: "High-quality rooms for deep focus.",
            },
            {
              icon: <BadgeDollarSign />,
              title: "Affordable Prices",
              desc: "Student-friendly study spaces.",
            },
          ].map((feature, index) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={index}
              className="flex items-start gap-4 rounded-2xl p-4 transition-all duration-300 hover:bg-violet-50 dark:hover:bg-violet-500/10"
            >
              <div className="rounded-2xl bg-violet-100 p-4 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
                {feature.icon}
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}