'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Users,
  Sparkles,
  FlaskConical,
  BookOpen,
  Target,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Real-life & Indian Context',
    desc: 'Psychology concepts explained through everyday life, Indian culture, and relatable examples.',
  },
  {
    icon: Users,
    title: 'Experiential Learning',
    desc: 'Learn by doing through reflective journals, applied assignments, and real case studies.',
  },
  {
    icon: Sparkles,
    title: 'Strong Foundations & Career Insight',
    desc: 'Build clear fundamentals in psychology with guidance on higher studies and career paths.',
  },
  {
    icon: FlaskConical,
    title: 'Job-Ready & Real-World Prep',
    desc: 'Portfolio-worthy work, certification, and LORs that add real value for recruiters.',
  },
  {
    icon: BookOpen,
    title: 'Practical and Project First',
    desc: 'Every concept is applied through hands-on projects, real cases, and a guided capstone , no passive learning.',
  },
  {
    icon: Target,
    title: 'Active Internship Driven Network',
    desc: 'Connect with mentors and internship opportunities that help you move from learning to real-world experience.',
  },
];

export function CourseWhySection() {
  return (
    <section className="relative py-28 bg-black">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-sm text-white/80">
          What makes this course different
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl text-white mb-3">
          Why choose this program?
        </h2>

        <p className="text-white/90 max-w-2xl mx-auto mb-16">
          Real skills. Real projects. Real understanding.
        </p>

        {/* Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((item, idx) => (
            <div
              key={idx}
              className="
                bg-white/5 border border-white/10 rounded-2xl p-6
                text-left backdrop-blur-xl
                hover:bg-white/10 transition-all duration-300
              "
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-white/10 text-[#E2F310] mb-4">
                <item.icon className="w-5 h-5" />
              </div>

              <h4 className="text-white  mb-2">
                {item.title}
              </h4>

              <p className="text-white/90 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
