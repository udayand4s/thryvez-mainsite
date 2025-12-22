"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { CheckCircle, ArrowRight, Star, Sparkles, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


/* ---------------- CONFIG ---------------- */
const ACCENT_COLOR = "#D4AC0D";

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    quote:
      "I really liked the classes and the way everything was taught, and I genuinely enjoyed doing the assignments. Since I'm a hosteller, it was sometimes difficult to attend the 8–9 PM classes consistently because that's our dinner time, so managing both was a bit challenging. But the recorded class videos were a huge help, they allowed me to catch up whenever I missed a session.",
    name: "Anshika",
    college: "Goswami Ganesh Dutta Sanatan Dharma College",
    year: "2027",
  },
  {
    quote: "All the sessions were really great and I learned so many things.",
    name: "Shailja",
    college: "Government Doon Medical College",
    year: "2030",
  },
  {
    quote:
      "It was a wonderful experience. I learnt a lot about myself and the people around me.",
    name: "Suhaas N",
    college: "Bangalore Medical College and Research Institute",
    year: "2030",
  },
  {
    quote:
      "It was really a wonderful and optimistic journey, learning with such great and kind hearted teachers ready to help at each and every point.",
    name: "Anshika",
    college: "Goswami Ganesh Dutta Sanatan Dharma College",
    year: "2027",
  },
  {
    quote:
      "The curriculum was structured in a simple and practical way. The assignments helped apply learning immediately and strengthened my understanding.",
    name: "Ziya Shaikh",
    college: "Nagindas Khandwala College",
    year: "2028",
  },
  {
    quote:
      "The interactive sessions inspired me to study psychology further to become a better physiotherapist for my patients.",
    name: "Aryan Mann",
    college: "SGT University",
    year: "2030",
  },
  {
    quote:
      "At first I was skeptical, but the sessions were very interactive and concepts were explained beautifully.",
    name: "Mirra Varshini Gowrishankar",
    college: "ACS Medical College",
    year: "2030",
  },
  {
    quote:
      "The sessions on emotional life were very helpful. This course completely changed my perspective on psychology.",
    name: "Rishi TM",
    college: "Dayananda Sagar Medical College",
    year: "2030",
  },
  {
    quote:
      "It was very well planned and executed. The mentor was sweet and made concepts understandable.",
    name: "Rhea Jakkani",
    college: "Nagindas Khandwala College",
    year: "2027",
  },
  {
    quote:
      "You responded to everyone's queries with so much patience. Thank you so much!",
    name: "Deepika T M",
    college: "Bangalore Medical College",
    year: "2030",
  },
  {
    quote:
      "The sessions were knowledge-filled, optimistic, and deeply meaningful.",
    name: "Manogya Vasudev",
    college: "Siddaganga Medical College",
    year: "2030",
  },
  {
    quote:
      "The sessions were very lovely and enjoyable.",
    name: "N. Chandra Kaladhar",
    college: "Gandhi Medical College, Secunderabad",
    year: "2030",
  },
  {
    quote:
      "The teacher’s warm and friendly approach made me genuinely look forward to every class.",
    name: "Anjana Srinivasan",
    college: "ACS Medical College and Hospital",
    year: "2030",
  },
  {
    quote:
      "Even though I was new to some terms, the concepts were explained very clearly.",
    name: "Nikita R",
    college: "St John’s Medical College",
    year: "2030",
  },
];

/* ---------------- COMPONENT ---------------- */
export function Testimonials() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const keywords = ["Cognitive Biases","Behavioral Psychology","Emotional Intelligence","Social Influence","Decision Making","Mental Models","Motivation","Therapeutic Techniques","Group Dynamics","Research Methods"];


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;

      const segmentLength = video.duration / testimonials.length;
      const index = Math.min(
        Math.floor(video.currentTime / segmentLength),
        testimonials.length - 1
      );

      setActiveIndex(index);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const { quote, name, college, year } = testimonials[activeIndex];

  return (
    <div className="relative min-h-[70vh] w-full p-6 md:p-12 bg-muted/30 text-white overflow-hidden">
      <div className="z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

        {/* LEFT: TEXT */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <Quote className={`h-10 w-10 text-[${ACCENT_COLOR}]`} />

          <p className="text-lg md:text-xl font-light leading-relaxed">
            "{quote}"
          </p>

          <div className="pt-6 border-t border-white/30 flex items-center gap-4">
            <div
              className={`h-14 w-14 rounded-full border-2 border-[${ACCENT_COLOR}]  flex items-center justify-center font-semibold`}
            >
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <div>
              <p className="text-xl font-bold text-[#E2F310]/90">{name}</p>
              <p className="text-sm text-gray-400">
                {college}, {year}
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: VIDEO */}
        <div className="relative aspect-video rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
          <video
            ref={videoRef}
            src="/path-to-your-long-edited-video.mp4"
            className="w-full h-full object-cover"
            muted
            playsInline
            controls
          />
        </div>
        
      </div>
      <span>
        
      </span>
      {/* KEYWORDS */}
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
                hover:border-[#e2f310]/50 hover:bg-white/15
                transition-all group min-w-[150px]"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-[#e2f310]
                group-hover:scale-150 transition-transform" />
                {k}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    

    </div>
    
  );
}
