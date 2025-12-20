"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MentorLink } from "@/components/mentor-link";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const courses = [
  {
    id: "psychology360",
    title: "Psychology 360",
    instructor: "Jivisha Dangi",
    rating: 4.9,
    students: 153,
    oldprice: 10999,
    price: 5999,
    duration: "16 hours",
    level: "Intermediate",
    category: "Psychology",
    trending: true,
    image: "/psychology.webp",
  },
  {
    id: "psychology360-self",
    title: "Psychology 360 (Self Paced)",
    instructor: "Jivisha Dangi",
    rating: 4.6,
    students: 64,
    oldprice: 9999,
    price: 4499,
    duration: "16 hours",
    level: "Intermediate",
    category: "Psychology",
    trending: false,
    image: "/psychology.webp",
  },
  {
    id: "data-science-ai",
    title: "Data Science with AI",
    instructor: "Deepak Kumar",
    rating: 4.6,
    students: 57,
    oldprice: 9999,
    price: 4499,
    duration: "14 hours",
    level: "Advanced",
    category: "Data Science",
    trending: true,
    image: "/ds.webp",
  },
];

export function CoursesContent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden pt-16 pb-24">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
          <div className="absolute inset-0 bg-[#E2F310]/10 blur-[160px] rounded-full animate-pulse-slow" />
          <div className="absolute inset-0 bg-[#E2F310]/20 blur-[200px] rounded-full opacity-40 animate-float" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                  <span className="text-[#E2F310]">Explore Our Top-</span>
                  <span className="block text-white">Rated Courses</span>
                </h1>

                <p className="mt-4 text-white/70 max-w-xl">
                  Handpicked by thousands of learners worldwide — now more
                  visual, more immersive, and taught by domain experts.
                </p>
              </div>

              <div />
            </div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E2F310]/90 mb-8">
          Courses
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
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
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10">
                      {course.level}
                    </span>

                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-white">
                    {course.title}
                  </h3>

                  <p className="text-sm text-white/60 mb-4">
                    by {course.instructor}
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
      </section>

      {/* MENTORS */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#E2F310]/90 mb-8">
          Meet Our Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Jivisha Dangi",
              slug: "jivisha-dangi",
              role: "Senior Psychologist",
              company: "Psych Insights",
              image:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=60",
            },
            {
              name: "Deepak Kumar",
              slug: "deepak-kumar",
              role: "Data Scientist",
              company: "AI Labs",
              image:
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=60",
            },
            {
              name: "Aarav Malhotra",
              slug: "aarav-malhotra",
              role: "Behavioral Coach",
              company: "MindWorks",
              image:
                "https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=60",
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

              <h3 className="text-xl font-semibold">
                <MentorLink
                  name={m.name}
                  slug={m.slug}
                  className="text-white hover:text-[#E2F310] transition"
                />
              </h3>

              <p className="text-white/60 mt-1">{m.role}</p>
              <p className="text-white/40 text-sm">{m.company}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
