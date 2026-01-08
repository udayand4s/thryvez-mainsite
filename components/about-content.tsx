'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Boxes } from '@/components/ui/background-boxes';
import {
  Sparkles,
  Users,
  Target,
  Layers,
  Compass,
  ArrowRight,
  UserCheck
} from 'lucide-react';

const beliefs = [
  'Creative careers are misunderstood',
  'Degrees don’t equal skill',
  'Most learning is too passive',
  'Talent needs structure',
  'Access is unequal',
  'Career clarity comes late',
  'Creativity lacks guidance',
  'Potential goes unused',
];

const pillars = [

  {
    icon: Target,
    title: 'The Gap We Address',
    desc: 'We challenge rigid career paths and create space for unconventional, high-value skills.',
  },
  {
    icon: Layers,
    title: 'What We Focus On',
    desc: 'Niche creative roles with real demand , where skill matters more than credentials.',
  },
  {
    icon: Compass,
    title: 'How We’re Different',
    desc: 'No hobby learning. No fluff. Every program is built around outcomes and clarity.',
  },
  {
    icon: UserCheck,
    title: "Who This Is For",
    desc: "Students and early professionals who know there is more. If you want structured creative growth, this lab is for you.",
  },
  
];

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


      <div className="min-h-screen flex flex-col bg-black">
        <main className="flex-1 container mx-auto px-6 py-20 max-w-4xl">
          <article className="space-y-16">


            {/* Our Beginning */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">Our Beginning</h2>

              <p className="text-white/80 leading-relaxed">
                We didn’t start Thryve Z to build just another learning platform.
                We started it because we lived the same struggles most young Indians
                face today.
              </p>

              <p className="text-white/80 leading-relaxed">
                We sat in classrooms that taught memorisation, but never application.
                We enrolled in courses that promised the world but left us with nothing
                more than a certificate buried in a folder. We watched smart,
                ambitious people lose confidence , not because they lacked potential,
                but because they never received the right direction.
              </p>
            </section>

            {/* The Frustration */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">The Frustration</h2>

              <p className="text-white/80 leading-relaxed">
                Both of us took different paths, but the frustration was the same.
                One of us saw technology moving faster than education could keep up.
                The other saw talented people boxed into outdated systems that cared
                more about degrees than skills.
              </p>

              <p className="text-white/80 leading-relaxed italic">
                What if learning in India could actually prepare people for the real world?
              </p>
            </section>

            {/* Birth of Thryve Z */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">The Birth of Thryve Z</h2>

              <p className="text-white/80 leading-relaxed">
                That’s where Thryve Z was born , not out of a pitch deck or a business plan,
                but out of a personal need.
              </p>

              <p className="text-white/80 leading-relaxed">
                A need to create a place where learning isn’t passive, it’s alive.
                Where you don’t just watch someone teach , you build, solve, and create.
                Where certificates are replaced with real projects, portfolios,
                and opportunities employers can’t ignore.
              </p>
            </section>

            {/* Community */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">The Power of Community</h2>

              <p className="text-white/80 leading-relaxed">
                More than anything, we wanted to build a community.
                Growth doesn’t happen in isolation. The right peers, mentors,
                and opportunities can completely change someone’s career trajectory.
              </p>

              <p className="text-white/80 leading-relaxed">
                That’s what we’re building every single day at Thryve Z.
              </p>
            </section>

            {/* Why We Exist */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">Why We Exist</h2>

              <p className="text-white/80 leading-relaxed">
                India doesn’t have a talent problem , it has a bridge problem.
                The gap between ambition and opportunity is massive.
              </p>

              <p className="text-white/80 leading-relaxed">
                Thryve Z exists to close that gap. For students tired of outdated syllabi.
                For professionals who feel stuck. For people who want to do more
                than just survive the competition.
              </p>
            </section>

            {/* Our Promise */}
            <section className="space-y-6">
              <h2 className="text-2xl text-white">Our Promise</h2>

              <p className="text-white/80 leading-relaxed">
                This is our way of rewriting the script , not just for ourselves,
                but for an entire generation that refuses to settle.
              </p>

              <p className="text-white/80 leading-relaxed font-medium">
                Welcome to Thryve Z.
                <br />
                We don’t just prepare you for the future , we help you create it.
              </p>
            </section>

          </article>
        </main>
      </div>



      {/* == ABOUT CONTENT == */}
      <section className="relative py-24 bg-black overflow-hidden">
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          h-[600px] w-[600px] bg-[#e2f310]/10 blur-[160px] rounded-full"
        />

        <div className="relative max-w-6xl mx-auto px-6 text-center">


          {/* BELIEFS */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {beliefs.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full
                  bg-white/5 border border-white/10 text-sm text-white/90
                  hover:border-[#e2f310]/40 transition"
              >
                <Users className="h-4 w-4 text-[#e2f310]" />
                {b}
              </motion.div>
            ))}
          </div>





          {/* CTA */}
          <div
            className={`mt-16 transition-all duration-700 delay-300 ease-out
              ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
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
          {/* CONNECTOR */}
          <div className="relative flex justify-center my-12 h-20 overflow-hidden">
            <div className="absolute inset-y-0 w-px bg-white/10" />
            <motion.div
              className="absolute top-0 w-[2px] bg-[#e2f310]
                shadow-[0_0_18px_rgba(226,243,16,0.9)]"
              animate={{
                height: ['0%', '100%', '100%'],
                opacity: [1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 0.5,
              }}
            />
          </div>
          <p
            className={`
            max-w-3xl mx-auto font-sans
            text-white/90 text-base sm:text-lg leading-relaxed mb-10
            transition-all duration-700 delay-200 ease-out
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
            `}
            >
            Creative careers are real.
            We help you take them seriously.
          </p>
        </div>
      </section>
    </div>
  );
}
