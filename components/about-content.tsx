'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    bio: 'Former Growth Lead at Google. 10+ years in tech.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Content',
    bio: 'Ex-Product Director at Meta. Built products used by millions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Community',
    bio: 'Community builder with 15+ years experience in EdTech.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
  },
];

const stats = [
  { value: '50K+', label: 'Community Members' },
  { value: '200+', label: 'Expert-Led Courses' },
  { value: '95%', label: 'Career Growth Rate' },
  { value: '50+', label: 'Countries Represented' },
];

export function AboutContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We're building the future of
              <span className="block text-white/60">professional learning</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Thryvez was founded with a simple mission: to empower young people to build bold skills, original thinking, and a creative identity through hands-on, real-world learning.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Story</h2>
              <div className="space-y-4 text-white/60">
                <p>
                  We started Thryvez because we saw a gap in professional education. Traditional courses were outdated, communities were fragmented, and practical knowledge was locked behind expensive conferences.
                </p>
                <p>
                  We believed there had to be a better way. A platform where ambitious professionals could learn from practitioners, not just theorists. Where they could build real connections, not just collect certificates.
                </p>
                <p>
                  Today, we're proud to serve over 50,000 members across 50+ countries, with courses taught by leaders from companies like Google, Meta, Stripe, and many more.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[200px] font-bold text-white/5 select-none">X</div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              We're a small but mighty team of educators, builders, and community enthusiasts.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className={`group text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden mb-6 bg-zinc-900 border border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-white/60 text-sm mb-2">{member.role}</p>
                <p className="text-white/40 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to join us?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Start your learning journey today and join thousands of professionals accelerating their careers.
            </p>
            <Link href="/courses">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-semibold group">
                Explore Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
