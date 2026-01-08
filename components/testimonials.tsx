"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/* ---------------- CONFIG ---------------- */
const ACCENT_COLOR = "#E2F310";


/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    quote:
      "Psychology sessions were clear, practical, and connected to real life. Case studies and behavior analysis helped me understand better than textbooks. The mentor’s support even after class made a big difference.",
    name: "Ilsa",
    college: "Deloitte",
    year: "Business Development Trainee",
  },
  {
    quote:
      "I was skeptical at first, but Thryvez completely changed my view on online learning. Krishna Kumar made tough topics simple and tied them to real-world work. The Blinkit case study and use of AI tools were true highlights.",
    name: "Vikasni",
    college: "Deloitte",
    year: "Business Development Trainee",
  },
  {
    quote:
      "The course felt like a game—fun, structured, and kept me engaged till the end. Real case studies like Blinkit and AI-based data cleaning felt like solving business problems.",
    name: "Raghav M.",
    college: "Mercedes-Benz",
    year: "",
  },
  {
    quote:
      "I usually drop online courses, but this one kept me hooked till the end. Real projects like Flipkart’s demand forecasting felt like actual work, not theory.",
    name: "Sreyan Kumar",
    college: "Accenture",
    year: "Data Analyst",
  },

];



/* ---------------- COMPONENT ---------------- */
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const keywords = [
    "Cognitive Biases",
    "Behavioral Psychology",
    "Emotional Intelligence",
    "Social Influence",
    "Decision Making",
    "Mental Models",
    "Motivation",
    "Therapeutic Techniques",
    "Group Dynamics",
    "Research Methods",
  ];

  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const prev = () =>
    setActiveIndex((i) =>
      i === 0 ? testimonials.length - 1 : i - 1
    );

  const { quote, name, college, year } = testimonials[activeIndex];

  return (
    <div className="relative w-full overflow-hidden text-white">

      <section className="relative w-full py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid gap-8 lg:grid-cols-2 items-stretch">

            {/* ================= TESTIMONIAL SLIDER ================= */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -100) next();
                    if (info.offset.x > 100) prev();
                  }}
                >
                  <Card className="h-[420px] bg-black/40 border border-white/10 backdrop-blur-xl">
                    <CardContent className="p-8 h-full flex flex-col">
                      <Quote className="h-10 w-10" style={{ color: ACCENT_COLOR }} />

                      <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-lg md:text-l font-light leading-relaxed">
                          “{quote}”
                        </p>
                      </div>

                      <div className="pt-6 border-t border-white/20 flex items-center gap-4">
                        <div
                          className="h-14 w-14 rounded-full border-2 flex items-center justify-center font-semibold"
                          style={{ borderColor: ACCENT_COLOR }}
                        >
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>

                        <div>
                          <p className="text-lg text-[#E2F310]/90">{name}</p>
                          <p className="text-sm text-gray-400">
                            {college}, {year}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute -left-6 top-1/2 -translate-y-1/2
                p-2 rounded-full border border-white/20 bg-black/40
                hover:bg-white/10 transition"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={next}
                className="absolute -right-6 top-1/2 -translate-y-1/2
                p-2 rounded-full border border-white/20 bg-black/40
                hover:bg-white/10 transition"
              >
                <ChevronRight />
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-2.5 w-2.5 rounded-full transition
                    ${i === activeIndex ? "bg-[#E2F310]" : "bg-white/30"}`}
                  />
                ))}
              </div>
            </div>

            {/* ================= VIDEO PLACEHOLDER CARD ================= */}
            <div className="relative">
              <Card className="h-full bg-black/40 border border-white/10 backdrop-blur-xl overflow-hidden">
                <CardContent className="p-0 h-full">

                  {/* Replace this div with <video> later 
                  <div
                    className="relative h-full min-h-[360px] flex items-center justify-center
                    bg-gradient-to-br from-black/60 to-black/30 cursor-pointer group"
                  >
                    <div
                      className="h-20 w-20 rounded-full flex items-center justify-center
                      border-2 border-[#E2F310] text-[#E2F310]
                      bg-black/60 backdrop-blur
                      group-hover:scale-110 transition"
                    >
                      ▶
                    </div>

                    <div className="absolute bottom-6 left-6 right-6 text-center">
                      <p className="text-lg font-medium">
                        Student Testimonials Compilation
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Click to play video
                      </p>
                    </div>
                  </div>
                  */}

                
                    <video
                      src="/Student Testimonials for Website.mp4"
                      controls
                      className="w-full h-full object-cover"
                    />
                
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>


      {/* KEYWORDS STRIP */}
      <section className="py-4 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-4 w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 26,
              ease: "linear",
            }}
          >
            {[...keywords, ...keywords].map((k, i) => (
              <div
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                text-xs font-medium border border-white/10
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-sm whitespace-nowrap
                transition-all min-w-[150px]"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#e2f310]" />
                {k}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}