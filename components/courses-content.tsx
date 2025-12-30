"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MentorLink } from "@/components/mentor-link";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Boxes } from '@/components/ui/background-boxes';




const courses = [
  {
    id: 'psychology360',
    title: 'Psychology 360',
    instructor: 'Jivisha Dangi',
    qual: 'Counsellinhg Psychologist',
    rating: 4.9,
    students: 153,
    oldprice: 10999,
    price: 5999,
    duration: '4 Weeks',
    category: 'Psychology',
    trending: true,
    image: '/psychology.webp',
    comingSoon: false,

  },
  {
    id: 'clinical-psy',
    title: 'Clinical Psycology',
    instructor: 'Sanjivani',
    qual:'MA Clinical Psychology',
    rating: 4.6,
    students: 64,
    oldprice: 9999,
    price: 4499,
    duration: '4 weeks',
    category: 'Psychology',
    trending: false,
    image: '/psychology.webp',
    comingSoon: false,

  },
  {
    id: 'ai-mark',
    title: 'AI Marketing',
    instructor: 'Mirra Lakshmanan',
    qual:'IIM Nagpur | AI Brand Strategist',
    rating: 4.6,
    students: 57,
    oldprice: 9999,
    price: 4499,
    duration: '4 Weeks',
    category: 'AI',
    trending: true,
    image: '/ds.webp',
    comingSoon: false,

  },
  {
    id: 'video-editing',
    title: 'Video Editing',
    instructor: 'Lorem Ipsum',
    qual: 'Professional Video Editor',
    rating: 4.7,
    students: 112,
    oldprice: 8999,
    price: 3999,
    duration: '4 Weeks',
    category: 'Creative',
    trending: true,
    image: '/ds.webp',
    comingSoon: true,

  },
  {
    id: 'makeup-beauty',
    title: 'Makeup/Beauty',
    instructor: 'Lorem Ipsum',
    qual: 'Certified Makeup Artist',
    rating: 4.8,
    students: 96,
    oldprice: 7999,
    price: 3499,
    duration: '3 Weeks',
    category: 'Beauty',
    trending: true,
    image: '/ds.webp',
    comingSoon: true,

  },
  {
    id: 'freelancing',
    title: 'Freelancing',
    instructor: 'Lorem Ipsum',
    qual: 'Top-rated Freelancer & Consultant',
    rating: 4.6,
    students: 140,
    oldprice: 6999,
    price: 2999,
    duration: '4 Weeks',
    category: 'Career',
    trending: false,
    image: '/ds.webp',
    comingSoon: true,

  },
  
];
const liveCourses = courses.filter(c => !c.comingSoon);
const comingSoonCourses = courses.filter(c => c.comingSoon);

export function CoursesContent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
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
                Explore Our Top
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
                Rated Courses
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
                Handpicked by thousands of learners worldwide — now more visual, more immersive, and taught by domain experts.
              </p>

            </div>
  
          </div>
        </div>
  
        {/* Bottom fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl sm:text-4xl  text-[#E2F310]/90 mb-8">
          Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {liveCourses.map((course, index) => (
            <div
              key={course.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="group relative transition-all duration-700"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 scale-[0.96] transition-all duration-700 group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                <BackgroundGradient
                  animate={false}
                  containerClassName="rounded-2xl"
                  className="rounded-2xl"
                />
              </div>

              {/* Card */}
              <div className="relative z-10 bg-black/80 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.015] group-hover:shadow-[0_0_60px_rgba(226,243,16,0.25)]">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {course.trending && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/70 text-xs">
                      <TrendingUp className="h-3 w-3 text-[#E2F310]" />
                      Trending
                    </div>
                  )}

                  <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/70 text-xs">
                    {course.category}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <Link href={`/courses/${course.id}`}>
                      <Button size="lg" className="rounded-full">
                        View Course
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">


                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg  text-white">
                    {course.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4">
                    By {course.instructor}, {course.qual}
                  </p>

                  <div className="flex items-center gap-5 text-xs text-white/50">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* COMING SOON */}
        <section className="mt-20">
          <h2 className="text-3xl sm:text-4xl  text-white/90 mb-8">
            Coming <span className="text-[#E2F310]">Soon</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonCourses.map((course) => (
              <div
                key={course.id}
                className="relative rounded-2xl overflow-hidden border border-white/10
                          bg-white/5 backdrop-blur-xl
                          transition-all duration-500
                          hover:border-[#E2F310]/40"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover grayscale
                              opacity-80 scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <div className="text-center">
                      <div className="mb-2 text-sm tracking-widest uppercase text-[#E2F310]">
                        Coming Soon
                      </div>
                      <div className="text-white/70 text-xs">
                        Launching shortly
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <span className="absolute top-3 right-3 px-2 py-1 rounded-full bg-black/70 text-xs">
                    {course.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg  text-white">
                    {course.title}
                  </h3>

                  <p className="text-sm text-white/60 mt-1">
                    {course.qual}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-white/50 mt-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students}+
                    </div>
                  </div>

                  {/* CTA */}
                  <Button
                    disabled
                    variant="outline"
                    className="w-full mt-5 border-white/20 text-white/40 cursor-not-allowed"
                  >
                    Notify Me
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

      </section>

      {/* MENTORS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-3xl sm:text-4xl  text-[#E2F310]/90 mb-8">
          Meet Our Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jivisha Dangi",
              slug: "jivisha-dangi",
              role: "Senior Psychologist",
              qual: "Counselling Psychologist",
              image:
                "/jivisha-dangi.png",
            },
            {
              name: "Sanjivani",
              slug: "sanjivani",
              role: "Clinical Psychologist",
              qual:"MA Clinical Psychology",
              image:
                "/sanjivani.png",
            },
            {
              name: "Mirra Lakshmanan",
              slug: "mirra",
              role: "AI Marketing",
              qual:"IIM Nagpur | AI Brand Strategist",
              image:
                "mirra.jpeg",
            },
          ].map((m) => (
            <div
              key={m.name}
              className="rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition"
            >
              <img
                src={m.image}
                alt={m.name}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl ">
                <MentorLink
                  name={m.name}
                  slug={m.slug}
                  className="text-white hover:text-[#E2F310] transition"
                />
              </h3>

              <p className="text-white/60 mt-1">{m.qual}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
