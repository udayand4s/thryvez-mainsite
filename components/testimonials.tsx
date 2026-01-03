"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "react-day-picker";


const AUTOPLAY_INTERVAL = 6000; // ms


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
      "It was a very happy, interactive experience. I learned a lot about psychology and human behaviour, which inspired me to study psychology further. Learning with ma’am was a great experience due to her excellent and engaging teaching style.",
    name: "Aryan Mann",
    college: "Sukriti World",
    year: "2025",
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
      "Just keep going 👍 The sessions were very lovely and enjoyable 😄",
    name: "N. Chandra Kaladhar",
    college: "Gandhi Medical College, Secunderabad",
    year: "2030",
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
      "I loved the sessions, they were so knowledge-filled, optimistic, and meaningful!",
    name: "Manogya Vasudev",
    college: "Siddaganga Medical College and Research Institute",
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
  const [active, setActive] = useState(0);

  /* -------- Auto scroll -------- */
  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % testimonials.length),
      AUTOPLAY_INTERVAL
    );
    return () => clearInterval(id);
  }, []);

  const prev = () =>
    setActive((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActive((i) => (i + 1) % testimonials.length);

  const t = testimonials[active];

  return (
    <section className="relative w-full py-24 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl text-white mb-3">What Our Learners Say</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            Real feedback from students across colleges and disciplines.
          </p>
        </div>

        {/* Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <Card className="glass">
                <CardContent
                  className={cn(
                    "p-8 md:p-10",
                    "grid md:grid-cols-[220px_1fr] gap-8",
                    "min-h-[320px]" // 🔒 fixed height (prevents jump)
                  )}
                >
                  {/* Video Placeholder */}
                  <div className="relative rounded-xl overflow-hidden bg-black/60 border border-white/10 flex items-center justify-center aspect-[9/16]">
                    <Play className="h-12 w-12 text-[#E2F310]" />
                    <span className="absolute bottom-3 text-xs text-white/60">
                      Student video
                    </span>
                    {/* 
                    <video
                      src={t.video}
                      controls
                      preload="metadata"
                      className="h-full w-full object-cover"
                      poster="/video-poster.webp" // optional thumbnail
                    />
                    */}
                  </div>

                  {/* Text */}
                  <div className="flex flex-col justify-between">
                    <Quote className="h-8 w-8 text-[#E2F310] mb-4" />

                    <p className="text-lg text-white/90 leading-relaxed">
                      “{t.quote}”
                    </p>

                    <div className="mt-8 pt-6 border-t border-white/10">
                      <p className="text-white">{t.name}</p>
                      <p className="text-sm text-white/50">
                        {t.college} · {t.year}
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
            className="absolute -left-14 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/15 bg-black/50 hover:bg-white/10 transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute -right-14 top-1/2 -translate-y-1/2 p-3 rounded-full border border-white/15 bg-black/50 hover:bg-white/10 transition"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "h-2.5 w-2.5 rounded-full transition",
                i === active ? "bg-[#E2F310]" : "bg-white/30"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}