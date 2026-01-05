'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function AboutContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* == HERO == */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        {/* BACKGROUND */}
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto py-24 lg:py-32">
            <div className="text-center flex flex-col items-center">
              {/* Eyebrow */}
              <span
                className={`
                  font-sans text-white/90 text-xs uppercase tracking-[0.35em] mb-4
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
              >
                Learning by Building
              </span>

              {/* Headings */}
              <h1
                className={`
                  --font-playfair text-white
                  text-[7vw] sm:text-[5vw] lg:text-[4vw]
                  leading-[1.04] tracking-[-0.02em] mb-4
                  transition-all duration-700 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                We&apos;re building the future
              </h1>

              <h2
                className={`
                  --font-playfair text-[#c7f000]
                  text-[7vw] sm:text-[5vw] lg:text-[4vw]
                  leading-[1] tracking-[-0.01em] mb-6
                  transition-all duration-700 delay-100 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                of professional learning
              </h2>

              {/* Description */}
              <p
                className={`
                  max-w-3xl mx-auto font-sans
                  text-white/90 text-base sm:text-lg leading-relaxed mb-10
                  transition-all duration-700 delay-200 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                ThryveZ was founded with a simple mission: to empower young people to build bold skills,
                original thinking, and a creative identity through hands-on, real-world learning.
              </p>

              {/* CTA */}
              <div
                className={`
                  transition-all duration-700 delay-300 ease-out
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                <Link href="/courses">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base group"
                  >
                    Explore the Lab
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* == CONTENT SECTIONS == */}
      <section className="relative py-24 bg-black overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
          h-[700px] w-[700px] bg-[#e2f310]/10 blur-[180px] rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 space-y-20">
          {[
            {
              title: 'What Thryve Z Is',
              content: [
                'Thryve Z is a virtual creative lab focused on building real careers in the creative space.',
                'We work in areas that are still considered unconventional in India.',
                'This is where creative ambition meets structured learning.',
              ],
            },
            {
              title: 'The Gap We’re Addressing',
              content: [
                'In India, most career paths follow the same narrow routes.',
                'Creative roles are often misunderstood or treated as risky.',
                'Thryve Z exists to open that door.',
              ],
            },
            {
              title: 'What We Focus On',
              content: [
                'We upskill learners in niche creative fields with real market demand.',
                'Skill matters more than degrees.',
                'Our goal is simple: visibility, access, practicality.',
              ],
            },
            {
              title: 'How Thryve Z Is Different',
              content: [
                'This is not hobby learning.',
                'Programs are designed with career outcomes in mind.',
                'No noise. Just clarity.',
              ],
            },
            {
              title: 'Who This Is For',
              content: [
                'Students and early professionals who know there is more.',
                'If you want structured creative growth, this lab is for you.',
              ],
            },
          ].map((section, i) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
              className="relative p-8 sm:p-10 rounded-3xl
                bg-gradient-to-br from-white/10 to-white/5
                border border-white/10 backdrop-blur-xl"
            >
              <h2 className="text-2xl sm:text-3xl mb-6">
                <span className="text-[#e2f310]">—</span> {section.title}
              </h2>

              <div className="space-y-4 text-white/85 leading-relaxed">
                {section.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-10 border-t border-white/10 text-center sm:hidden"
          >
            <p className="text-white/90">
              Creative careers are real.<br />
              We help you take them seriously.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
