"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Quote, ChevronLeft, ChevronRight} from "lucide-react";
import { CheckCircle, ArrowRight, Star, Sparkles, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


/* ---------------- CONFIG ---------------- */
const ACCENT_COLOR = "#D4AC0D";

/* ---------------- TESTIMONIALS ---------------- */
const testimonials = [
  {
    quote:
      "I really liked the classes and the way everything was taught, and I genuinely enjoyed doing the assignments. Since I'm a hosteller, it was sometimes difficult to attend the 8–9 PM classes consistently because that's our dinner time, so managing both was a bit challenging. But the recorded class videos were a huge help, they allowed me to catch up whenever I missed a session. It was really a wonderful and optimistic journey, learning with such great and kind-hearted teachers ready to help at each and every point with a smiling face.",
    name: "Anshika",
    college: "Goswami Ganesh Dutta Sanatan Dharma College",
    year: "2027",
  },

  {
    quote:
      "All the sessions were really great and I learned so many things. Thank you 💕",
    name: "Shailja",
    college: "Government Doon Medical College",
    year: "2030",
  },

  {
    quote:
      "The curriculum was structured in a simple and practical way, with each topic explained clearly and supported by examples that made it easy to connect theories to real-life situations. The assignments were very helpful and strengthened my understanding. I felt supported and engaged throughout the course. The sessions were interesting, friendly, and genuinely valuable for anyone interested in psychology.",
    name: "Ziya Shaikh",
    college: "Nagindas Khandwala College (Malad West)",
    year: "2028",
  },

  {
    quote:
      "It’s easy to follow even for those with zero prior knowledge. The assignments felt like weekly check-ins on our own feelings and helped apply learning in real life. Both the facilitator and mentor were very approachable. I was initially skeptical about an online course, but I’m glad I was proven wrong.",
    name: "Jagnya Seni Pati",
    college: "Gandhi Medical College, Hyderabad",
    year: "2030",
  },

  {
    quote:
      "Before attending these classes, I didn’t know there was so much behind our feelings. The course taught me the importance of psychology in life and how to manage emotions. The class atmosphere was very welcoming, and I felt truly connected to the brand and the team.",
    name: "Rishi TM",
    college: "Dayananda Sagar Medical College",
    year: "2030",
  },

  {
    quote:
      "I loved the sessions, they were so knowledge-filled, optimistic, and meaningful!",
    name: "Manogya Vasudev",
    college: "Siddaganga Medical College and Research Institute",
    year: "2030",
  },

  {
    quote:
      "Both the teacher and the facilitator were very patient and supportive. Every query was addressed with care. Thank you so much!",
    name: "Deepika T M",
    college: "Bangalore Medical College and Research Institute",
    year: "2030",
  },

  {
    quote:
      "It was a very happy, interactive experience. I learned a lot about psychology and human behaviour, which inspired me to study psychology further. Learning with ma’am was a great experience due to her excellent and engaging teaching style.",
    name: "Aryan Mann",
    college: "Sukriti World",
    year: "2025",
  },

  {
    quote:
      "At first I was skeptical, but the sessions were interactive and concepts were made very understandable and interesting. Thank you ma’am for such an engaging experience ❤️",
    name: "Mirra Varshini Gowrishankar",
    college: "ACS Medical College",
    year: "2030",
  },

  {
    quote:
      "Even though I was new to some terms, the mentor explained everything well. I gained a better understanding of the mind, myself, and other people.",
    name: "Nikita R",
    college: "St. John’s Medical College",
    year: "2030",
  },

  {
    quote:
      "I loved the classes. The teacher’s warm and friendly approach reminded me of my school days, where learning felt welcoming and joyful.",
    name: "Anjana Srinivasan",
    college: "ACS Medical College and Hospital",
    year: "2030",
  },

  {
    quote:
      "It was very well planned and executed. The mentor was sweet and made concepts understandable and interesting.",
    name: "Rhea Jakkani",
    college: "Nagindas Khandwala College",
    year: "2027",
  },

  {
    quote:
      "This was my first extracurricular class, and it changed my perspective on psychology. The sessions on emotional life were especially helpful. The mentor’s warm teaching style made learning easy and enjoyable.",
    name: "Rishi TM",
    college: "Dayananda Sagar Medical College",
    year: "2030",
  },

  {
    quote:
      "The sessions were very useful and engaging. Topics like emotions, personality disorders, and attachment styles made me curious to learn more. The teaching style was highly student-centered and effective.",
    name: "A Mithinkumar",
    college: "Madurai Medical College",
    year: "2030",
  },

  {
    quote:
      "Just keep going 👍 The sessions were very lovely and enjoyable 😄",
    name: "N. Chandra Kaladhar",
    college: "Gandhi Medical College, Secunderabad",
    year: "2030",
  },

  {
    quote:
      "It was a wonderful experience. I learnt a lot about myself and the people around me, all thanks to this course.",
    name: "Suhaas N",
    college: "Bangalore Medical College and Research Institute",
    year: "2030",
  },
];



/* ---------------- COMPONENT ---------------- */
export function Testimonials() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
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

  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setActiveIndex((i) =>
      i === 0 ? testimonials.length - 1 : i - 1
    );

  const { quote, name, college, year } = testimonials[activeIndex];

  return (
    <div className="relative min-h-[70vh] w-full p-6 md:p-12 bg-muted/30 text-white overflow-hidden">
      <section className="relative w-full py-20 bg-muted/30 text-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative">

          {/* SLIDER */}
          <div className="relative overflow-hidden">
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
                <Card className="bg-black/40 border border-white/10 backdrop-blur-xl">
                  <CardContent className="p-10 space-y-8">
                    <Quote className={`h-10 w-10 text-[${ACCENT_COLOR}]`} />

                    <p className="text-lg md:text-xl font-light leading-relaxed">
                      “{quote}”
                    </p>

                    <div className="pt-6 border-t border-white/20 flex items-center gap-4">
                      <div
                        className={`h-14 w-14 rounded-full border-2 border-[${ACCENT_COLOR}]
                        flex items-center justify-center font-semibold`}
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
            
            {/* ARROWS */}
            <button
              onClick={prev}
              className="absolute -left-12 top-1/2 -translate-y-1/2
              p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute -right-12 top-1/2 -translate-y-1/2
              p-2 rounded-full border border-white/20 hover:bg-white/10 transition"
            >
              <ChevronRight />
            </button>
          </div>
          
          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
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
        {/* ARROW CONTROLS */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-6">
          <button
            aria-label="Previous testimonial"
            onClick={prev}
            className="pointer-events-auto
              p-2 md:p-3 rounded-full
              border border-white/20
              bg-black/40 backdrop-blur
              hover:bg-white/10
              focus:outline-none focus:ring-2 focus:ring-[#E2F310]
              transition"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          <button
            aria-label="Next testimonial"
            onClick={next}
            className="pointer-events-auto
              p-2 md:p-3 rounded-full
              border border-white/20
              bg-black/40 backdrop-blur
              hover:bg-white/10
              focus:outline-none focus:ring-2 focus:ring-[#E2F310]
              transition"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>

      </section>
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
