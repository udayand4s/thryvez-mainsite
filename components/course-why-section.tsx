'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Users,
  Sparkles,
  FlaskConical,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Real-life & Indian context',
    desc: 'Psychology connected to everyday life and Indian culture.',
  },
  {
    icon: Users,
    title: 'Experiential learning',
    desc: 'Learn by doing through journals, projects, and case studies.',
  },
  {
    icon: Sparkles,
    title: 'Strong foundation & career insight',
    desc: 'Clear basics of psychology with guidance on future paths.',
  },
  {
    icon: FlaskConical,
    title: 'Job Ready Skills and Real World Prep',
    desc: 'Certificate and LOR that recruiters value.',
  },
];

export function CourseWhySection() {
  return (
    <section className="relative py-28 bg-black">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-block mb-4 px-4 py-1 rounded-full glass text-sm text-white/80">
          What makes this course different
        </div>

        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl  text-white mb-3">
          Why choose this program?
        </h2>

        <p className="text-white/70 max-w-2xl mx-auto mb-14">
          Real skills. Real projects. Real community.
        </p>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative mx-auto max-w-md rounded-3xl p-8
                     bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl
                     border border-white/10 shadow-2xl"
        >
          <div className="space-y-8 text-left">
            {features.map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center
                             bg-white/10 text-[#E2F310]"
                >
                  <item.icon className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
