'use client';

import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  XCircle,
  Users,
  Brain,
  Layers,
  Rocket,
  ArrowRight,
} from "lucide-react";

const problems = [
  "Passive video learning",
  "No real-world application",
  "Lack of expert guidance",
  "Outdated curriculum",
  "Low engagement",
  "No clear learning path",
  "One-size-fits-all courses",
  "Isolation while learning",
];

const solutions = [
  {
    icon: Brain,
    title: "Live & Interactive Learning",
    desc: "Weekly live sessions that force thinking, questioning, and participation — not passive watching.",
  },
  {
    icon: Layers,
    title: "Hands-on, Project-Based",
    desc: "Every concept is applied through real-world projects, assignments, and case studies.",
  },
  {
    icon: Users,
    title: "Mentor-Led Guidance",
    desc: "Learn directly from practitioners who’ve done the work — not just taught theory.",
  },
  {
    icon: Rocket,
    title: "Outcome-Focused Curriculum",
    desc: "Structured learning paths designed to produce real skills, confidence, and clarity.",
  },
];

export function LearningProblems() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-[#e2f310]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* TOP */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl  mb-10"
        >
          Learning problems <span className="text-[#e2f310]">we all face</span>
        </motion.h2>

        {/* PROBLEMS */}
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full
                bg-white/5 border border-white/10 text-sm text-white/70
                hover:border-[#e2f310]/40 hover:text-white transition"
            >
              <XCircle className="h-4 w-4 text-[#e2f310]" />
              {p}
            </motion.div>
          ))}
        </div>

        {/* CONNECTOR */}
        <div className="relative flex justify-center my-24 h-44 overflow-hidden">
          <div className="absolute inset-y-0 w-px bg-white/10" />

          <motion.div
            className="absolute top-0 w-[2px] bg-[#e2f310]
              shadow-[0_0_18px_rgba(226,243,16,0.9)]"
            animate={{
              height: ["0%", "100%", "100%"],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </div>

        {/* BOTTOM */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl  mb-12"
        >
          The <span className="text-[#e2f310]">Thryve Z</span> way
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl
                  bg-gradient-to-br from-white/10 to-white/5
                  border border-white/10 backdrop-blur-xl
                  hover:border-[#e2f310]/40 transition"
              >
                <div className="mb-4">
                  <div className="h-10 w-10 rounded-xl
                    bg-[#e2f310]/20 flex items-center justify-center
                    group-hover:bg-[#e2f310]/30 transition">
                    <Icon className="h-5 w-5 text-[#e2f310]" />
                  </div>
                </div>

                <h4 className=" mb-2">{s.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
        {/* CONNECTOR */}
        <div className="relative flex justify-center my-24 h-44 overflow-hidden">
          <div className="absolute inset-y-0 w-px bg-white/10" />

          <motion.div
            className="absolute top-0 w-[2px] bg-[#e2f310]
              shadow-[0_0_18px_rgba(226,243,16,0.9)]"
            animate={{
              height: ["0%", "100%", "100%"],
              opacity: [1, 1, 0],
            }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          />
        </div>
          
        {/* CTA */}
        <div
          className={`transition-all duration-700 delay-300 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Link href="/courses">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90  px-8 py-6 text-base group"
            >
              Explore Courses
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
