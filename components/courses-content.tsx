"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const featuredCourse = {
  title: "Advanced Bootcamp Strategy",
  description: "Join the fastest way forward — because the future won’t wait.",
  companies: ["CRED", "Swiggy", "Canva", "Zerodha", "Google", "Paytm", "Flipkart"],
  price: "$299",
  duration: "4 weeks",
  rating: 4.9,
};

const courseCategories = [
  {
    tag: "BRAND FOCUSED COURSES",
    title: "Brand focused courses",
    description:
      "Great brands aren't built on clicks. They're built on trust. Craft narratives that resonate, campaigns that stand out, and brands that last.",
    courses: [
      {
        id: 1,
        title: "CRAFT",
        subtitle: "Brand Strategy",
        instructor: "Priya Sharma",
        role: "Brand Director",
        company: "Swiggy",
        image:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=60&auto=format&fit=crop",
        price: "$89.99",
        rating: 4.8,
        students: 8421,
        hours: "42 hours",
      },
      {
        id: 2,
        title: "CRAFT",
        subtitle: "Performance Marketing",
        instructor: "Rahul Verma",
        role: "Growth Lead",
        company: "CRED",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=60&auto=format&fit=crop",
        price: "$79.99",
        rating: 4.7,
        students: 7120,
        hours: "28 hours",
      },
      {
        id: 3,
        title: "CRAFT",
        subtitle: "Content Strategy",
        instructor: "Ananya Gupta",
        role: "Content Head",
        company: "Razorpay",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=60&auto=format&fit=crop",
        price: "$69.99",
        rating: 4.8,
        students: 5632,
        hours: "26 hours",
      },
    ],
  },
  {
    tag: "PRODUCT COURSES",
    title: "Product management courses",
    description:
      "Build products users love. Learn from PMs who have shipped features to millions of users at top companies.",
    courses: [
      {
        id: 4,
        title: "BUILD",
        subtitle: "Product Strategy",
        instructor: "Vikram Singh",
        role: "Product Lead",
        company: "Google",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=60&auto=format&fit=crop",
        price: "$129.99",
        rating: 4.9,
        students: 10432,
        hours: "36 hours",
      },
      {
        id: 5,
        title: "BUILD",
        subtitle: "User Research",
        instructor: "Meera Nair",
        role: "UX Research",
        company: "Microsoft",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=60&auto=format&fit=crop",
        price: "$99.99",
        rating: 4.7,
        students: 6120,
        hours: "24 hours",
      },
      {
        id: 6,
        title: "BUILD",
        subtitle: "Data-Driven PM",
        instructor: "Arjun Patel",
        role: "Senior PM",
        company: "Meta",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=60&auto=format&fit=crop",
        price: "$119.99",
        rating: 4.8,
        students: 7320,
        hours: "30 hours",
      },
    ],
  },
  {
    tag: "GROWTH COURSES",
    title: "Growth & strategy courses",
    description:
      "Scale from 0 to 1 and beyond. Learn growth frameworks that have helped startups become unicorns.",
    courses: [
      {
        id: 7,
        title: "SCALE",
        subtitle: "Growth Hacking",
        instructor: "Kiran Rao",
        role: "Growth Head",
        company: "Zerodha",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=60&auto=format&fit=crop",
        price: "$109.99",
        rating: 4.7,
        students: 4310,
        hours: "32 hours",
      },
      {
        id: 8,
        title: "SCALE",
        subtitle: "Startup Scaling",
        instructor: "Neha Kulkarni",
        role: "COO",
        company: "Meesho",
        image:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=60&auto=format&fit=crop",
        price: "$89.99",
        rating: 4.6,
        students: 3921,
        hours: "22 hours",
      },
      {
        id: 9,
        title: "SCALE",
        subtitle: "GTM Strategy",
        instructor: "Amit Joshi",
        role: "VP Strategy",
        company: "Flipkart",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=60&auto=format&fit=crop",
        price: "$129.99",
        rating: 4.85,
        students: 8500,
        hours: "40 hours",
      },
    ],
  },
];

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
                <div className="text-sm text-white/60 uppercase tracking-wider">
                  {course.title}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-tight">
                  {course.subtitle}
                </h3>
                <div className="text-xs text-white/50 mt-1">
                  {course.instructor} • {course.role} • {course.company}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-sm text-white/50">{course.hours}</div>
              <div className="text-xl font-bold text-white mt-2">{course.price}</div>
            </div>
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

            <Button size="sm" className="bg-white text-black hover:bg-white/95">
              Enroll
            </Button>
          </div>
        </div>
      </article>
    );
  };

  return (
    <div className="w-full">

      {/* FIXED HERO — WITH SUBTLE RED GLOW */}
      <section className="relative w-full overflow-hidden pt-16 pb-24">
        
        {/*  SUBTLE RED GLOW (blur + low opacity) */}
        <div className="absolute inset-0">
          <div className="absolute left-1/2 -translate-x-1/2 top-20 w-[600px] h-[600px] rounded-full bg-red-700/20 blur-[140px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div
            className={`relative p-0 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">

              {/* LEFT SIDE */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
                  {featuredCourse.title}
                </h1>

                <p className="mt-4 text-white/70 max-w-xl">
                  {featuredCourse.description}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Button className="bg-white text-black hover:bg-white/90 font-semibold px-5 py-3">
                    Explore Program <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <div className="text-sm text-white/50 ml-2">
                    <div>50+ case studies covered</div>
                    <div className="mt-2 flex flex-wrap gap-3 text-xs text-white/40">
                      {featuredCourse.companies.map((c) => (
                        <span key={c}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN EMPTY FOR NOW */}

            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-24 py-9">
        {courseCategories.map((category, categoryIndex) => (
          <div key={category.tag} className="mb-20">
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/30 border border-white/5 mb-4"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <span className="w-2 h-2 rounded-full bg-lime-400" />
              <span className="text-xs text-lime-400 uppercase tracking-wide">
                {category.tag}
              </span>
            </div>

            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-red-800">
                {category.title}
              </h2>
              <p className="mt-2 text-white/60 max-w-2xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.courses.map((course, idx) => (
                <div
                  key={course.id}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: `${200 + categoryIndex * 80 + idx * 60}ms`,
                  }}
                >
                  <CourseCard course={course} delay={100 + idx * 40} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
