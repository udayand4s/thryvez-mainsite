'use client';

import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from '@/components/ui/background-gradient';

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
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <Badge variant="outline" className="mb-4">
            Featured Courses
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E2F310]/90">
            Most Popular Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our top-rated courses chosen by thousands of students worldwide
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.id}
              style={{ transitionDelay: `${index * 120}ms` }}
              className="group relative transition-all duration-700"
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 scale-[0.96]
                transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:opacity-100 group-hover:scale-100 pointer-events-none">
                <BackgroundGradient
                  animate={false}
                  containerClassName="rounded-2xl"
                  className="rounded-2xl"
                />
              </div>

              {/* Card */}
              <Card
                className="
                  relative z-10
                  bg-black/80 backdrop-blur-xl
                  border border-white/5
                  rounded-2xl overflow-hidden
                  transition-all duration-500
                  ease-[cubic-bezier(.22,1,.36,1)]
                  group-hover:scale-[1.015]
                  group-hover:shadow-[0_0_60px_rgba(226,243,16,0.25)]
                "
              >
                <CardHeader className="pb-4 space-y-0">
                  {/* Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="
                        object-cover
                        transition-all duration-700
                        ease-[cubic-bezier(.22,1,.36,1)]
                        group-hover:scale-110
                        group-hover:brightness-110
                      "
                    />

                    {course.trending && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-medium">
                        <TrendingUp className="h-3 w-3 text-primary" />
                        Trending
                      </div>
                    )}

                    <Badge className="absolute top-3 right-3">
                      {course.category}
                    </Badge>

                    {/* Hover CTA */}
                    <div className="
                      absolute inset-0 flex items-center justify-center
                      bg-black/40
                      opacity-0
                      transition-all duration-500
                      ease-[cubic-bezier(.22,1,.36,1)]
                      group-hover:opacity-100
                    ">
                      <Link href={`/courses/${course.id}`}>
                        <Button
                          size="lg"
                          className="rounded-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                        >
                          View Course
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-lg leading-tight transition-colors group-hover:text-primary">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    by {course.instructor}
                  </p>
                  <p className="text-sm text-muted-foreground">
                      {course.qual}
                  </p>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="flex items-center gap-5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {course.students.toLocaleString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Footer C T A */}
        <div className="text-center mt-14">
          <Link href="/courses">
            <Button variant="outline" size="lg">
              View All Courses
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
  
