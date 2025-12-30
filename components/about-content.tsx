'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';


const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former Growth Lead at Google. 10+ years in tech.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Content',
    bio: 'Ex-Product Director at Meta. Built products used by millions.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Community',
    bio: 'Community builder with 15+ years experience in EdTech.',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
];

const stats = [
  { value: '50K+', label: 'Community Members' },
  { value: '200+', label: 'Expert-Led Courses' },
  { value: '95%', label: 'Career Growth Rate' },
  { value: '50+', label: 'Countries Represented' },
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
      {/* === BACKGROUND BOXES === */}
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto py-24 lg:py-32">
          {/* === MAIN CONTENT (CENTERED) === */}
          <div className="text-center flex flex-col items-center">
            {/* EYEBROW LINE */}
            <span
              className={`
                font-sans
                text-white/40
                text-xs
                uppercase
                tracking-[0.35em]
                mb-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
              `}
            >
              Learning by Building
            </span>
            {/* Line 1 */}
            <h1
              className={`
                --font-playfair
                text-white
                text-[7vw] sm:text-[5vw] lg:text-[4vw]
                leading-[1.04]
                tracking-[-0.02em]
                mb-4
                transition-all duration-700 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              We&apos;re building the future
            </h1>
            <h2
              className={`
                --font-playfair
                text-[#c7f000]
                text-[7vw] sm:text-[5vw] lg:text-[4vw]
                leading-[1]
                tracking-[-0.01em]
                mb-6
                transition-all duration-700 delay-100 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              of professional learning
            </h2>
            {/* DESCRIPTION */}
            <p
              className={`
                max-w-3xl mx-auto
                font-sans font-normal
                text-white/60
                text-base sm:text-lg
                leading-relaxed
                tracking-normal
                mb-10
                transition-all duration-700 delay-200 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
              `}
            >
              Thryvez was founded with a simple mission: to empower young people to build bold skills, original thinking, and a creative identity through hands-on, real-world learning.
            </p>
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
                  Explore the Lab
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </section>

      {/* === STATS === */}
      <section className="border-y border-white/10 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl  text-white mb-2">
                  {s.value}
                </div>
                <div className="text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === STORY === */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl  text-white">
              Our Story
            </h2>
            <p className="text-white/70">
              We started Thryvez because we saw a gap in professional education.
              Traditional courses were outdated, communities were fragmented, and
              practical knowledge was locked behind expensive conferences.
            </p>
            <p className="text-white/70">
              We believed there had to be a better way. A platform where ambitious
              professionals could learn from practitioners, not just theorists. Where they
              could build real connections, not just collect certificates.
            </p>
            <p className="text-white/70">
              Today, we're proud to serve over 50,000 members across 50+ countries,
              with courses taught by leaders from companies like Google, Meta, Stripe,
              and many more.
            </p>
          </div>

          <BackgroundGradient className="rounded-3xl">
            <div className="aspect-square rounded-3xl bg-black/70 border border-white/10 flex items-center justify-center">
              <span className="text-[160px]  text-white/5 select-none">
                Z
              </span>
            </div>
          </BackgroundGradient>
        </div>
      </section>

      {/* === TEAM === */}
      <section className="bg-zinc-950 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl  text-white mb-4">
              Meet the Team
            </h2>
            <p className="text-white/60">
              We're a small but mighty team of educators, builders, and community enthusiasts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((m) => (
              <div
                key={m.name}
                className="group rounded-2xl bg-white/5 border border-white/10 p-6 text-center hover:border-[#E2F310]/40 transition"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
                />
                <h3 className="text-xl  text-white">
                  {m.name}
                </h3>
                <p className="text-[#E2F310] text-sm mb-2">{m.role}</p>
                <p className="text-white/60 text-sm">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl  text-white mb-6">
            Want to join us?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Become a mentor and help shape the next generation of learners.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-14 bg-white/5 border-white/10 text-white"
              required
            />
            <Button
              size="lg"
              className="h-14 px-8 bg-white text-black  group"
            >
              Join now
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}





