"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";



export function CoursesContent() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  /* Avatar Component */
  const Avatar = ({ name }: { name: string }) => {
    const initials = name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
    const colors = [
      "from-rose-500 to-yellow-400",
      "from-indigo-500 to-purple-600",
      "from-emerald-400 to-teal-500",
      "from-yellow-400 to-orange-500",
      "from-sky-500 to-indigo-500",
    ];
    const idx = name.charCodeAt(0) % colors.length;

    return (
      <div
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${colors[idx]} flex items-center justify-center text-white font-semibold`}
      >
        {initials}
      </div>
    );
  };

  /* Course Card */
  const CourseCard = ({ course, delay }: { course: any; delay?: number }) => {
    return (
      <article
        className="bg-gradient-to-tr from-black/40 to-white/5 border border-white/5 rounded-2xl overflow-hidden transition transform hover:-translate-y-1"
        style={{ transitionDelay: `${delay ?? 0}ms` }}
      >
        <div className="relative h-40 sm:h-44 lg:h-36">
          <img
            src={course.image}
            alt={course.subtitle}
            className="w-full h-full object-cover brightness-[0.55] contrast-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/10 text-xs text-white/70">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <Avatar name={course.instructor} />
              <div>
                <div className="text-lg sm:text-xl font-semibold text-white leading-tight">
                  {course.title}
                </div>
                <h3 className="text-sm text-white/60 uppercase tracking-wider">
                  {course.subtitle}
                </h3>
                <div className="text-xs text-white/50 mt-1">
                  {course.instructor} • {course.role}
                </div>
              </div>
            </div>

            {/* <div className="text-right">
              <div className="text-sm text-white/50">{course.hours}</div>
              <div className="text-xl font-bold text-white mt-2">{course.price}</div>
            </div> */}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-white/50">
              <div className="inline-flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{course.hours}</span>
              </div>
              <div className="inline-flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{course.students.toLocaleString()}</span>
              </div>
            </div>
            
            <Link href={`/courses/${course.id}`}>
            <Button size="sm" className="bg-white text-black hover:bg-white/95">
              View Course
            </Button>
            </Link>
          </div>
        </div>
      </article>
    );
  };

  return (
  <div className="w-full">

    {/* HERO SECTION — NEON #E2F310 GLOW RIGHT SIDE */}
    <section className="relative w-full overflow-hidden pt-16 pb-24">

      {/* Aesthetic nebula (green-yellow glow) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px]">
        <div className="
          absolute inset-0 
          bg-[#E2F310]/10 
          blur-[160px] 
          rounded-full 
          animate-pulse-slow
        " />
        <div className="
          absolute inset-0 
          bg-[#E2F310]/20 
          blur-[200px] 
          rounded-full 
          opacity-40 
          animate-float
        " />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className={`relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT TEXT */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#e2f310] bg-clip-text leading-tight ">
                Explore Our Top-
                <p className="text-white">Rated Courses</p>
              </h1>

              <p className="mt-4 text-white/70 max-w-xl">
                Handpicked by thousands of learners worldwide — now more visual, 
                more immersive, and taught by domain experts.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
              </div>
            </div>

            {/* RIGHT SIDE EMPTY (keeps layout aligned) */}
            <div />

          </div>
        </div>
      </div>
    </section>

    {/* COURSES SECTION */}
    <section className="max-w-7xl mx-auto px-6 pb-24">

      <h2 className="text-3xl sm:text-4xl font-bold text-[#E2F310]/90 mb-8">
        Courses
      </h2>

      {/* 3 courses only — updated from screenshot */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* Psychology 360 */}
        <CourseCard
          course={{
            id: "psychology360",
            title: "Psychology 360",
            subtitle: "Beginner to Advanced",
            instructor: "Jivisha Dangi",
            role: "Senior Psychologist",
            
            image:
              "psychology.webp",
            price: "₹5,999",
            rating: 4.9,
            students: 153,
            hours: "16 hours"
          }}
        />

        {/* Psychology 360 Self-Paced */}
        <CourseCard
          course={{
            id: "psychology360",
            title: "Psychology 360 (Self Paced)",
            subtitle: "Learn at Your Own Speed",
            instructor: "Jivisha Dangi",
            role: "Senior Psychologist",
            company: "Psych Insights",
            image:
              "psychology.webp",
            price: "₹4,499",
            rating: 4.6,
            students: 64,
            hours: "16 hours"
          }}
        />

        {/* Data Science with AI */}
        <CourseCard
          course={{
            title: "Data Science with AI",
            subtitle: "Hands-On Bootcamp",
            instructor: "Deepak Kumar",
            role: "Data Scientist",
            company: "AI Labs",
            image:
              "ds.webp",
            price: "₹4,499",
            rating: 4.6,
            students: 57,
            hours: "14 hours"
          }}
        />

      </div>
    </section>

    {/* MEET OUR MENTORS SECTION */}
    <section className="max-w-7xl mx-auto px-6 pb-32">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#E2F310]/90 mb-8">
        Meet Our Mentors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {[
          {
            name: "Jivisha Dangi",
            role: "Senior Psychologist",
            company: "Psych Insights",
            image:
              "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=60",
          },
          {
            name: "Deepak Kumar",
            role: "Data Scientist",
            company: "AI Labs",
            image:
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=60",
          },
          {
            name: "Aarav Malhotra",
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
            <h3 className="text-xl font-semibold text-white">{m.name}</h3>
            <p className="text-white/60 mt-1">{m.role}</p>
            <p className="text-white/40 text-sm">{m.company}</p>
          </div>
        ))}

      </div>
    </section>

  </div>
  );
}
