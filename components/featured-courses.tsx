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
    id: 'psychology360-live',
    title: 'Psychology 360',
    instructor: 'Jivisha Dangi',
    rating: 4.9,
    students: 153,
    oldprice: 10999,
    price: 5999,
    duration: '16 hours',
    level: 'Intermediate',
    category: 'Psychology',
    trending: true,
    image: '/psychology.webp',
  },
  {
    id: 'psychology360-self',
    title: 'Psychology 360 (Self Paced)',
    instructor: 'Jivisha Dangi',
    rating: 4.6,
    students: 64,
    oldprice: 9999,
    price: 4499,
    duration: '16 hours',
    level: 'Intermediate',
    category: 'Psychology',
    trending: false,
    image: '/psychology.webp',
  },
  {
    id: 'data-science-ai',
    title: 'Data Science with AI',
    instructor: 'Deepak Kumar',
    rating: 4.6,
    students: 57,
    oldprice: 9999,
    price: 4499,
    duration: '14 hours',
    level: 'Advanced',
    category: 'Data Science',
    trending: true,
    image: '/ds.webp',
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="transition-all duration-700"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <BackgroundGradient
                animate
                containerClassName="
                  rounded-2xl
                  bg-gradient-to-br
                  from-[#434804]
                  via-[#e2f310]
                  to-[#434804]
                  opacity-80
                  hover:opacity-100
                  transition
                "
                className="rounded-2xl"
              >
                <Card
                  className="
                    group
                    bg-black/80
                    backdrop-blur-xl
                    border border-white/5
                    rounded-2xl
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_0_40px_rgba(226,243,16,0.25)]
                  "
                >
                  <CardHeader className="space-y-0 pb-4">
                    <div className="aspect-video rounded-lg mb-4 relative overflow-hidden">
                      <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />

                      {course.trending && (
                        <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                          <TrendingUp className="h-3 w-3 text-primary" />
                          Trending
                        </div>
                      )}

                      <Badge className="absolute top-3 right-3">
                        {course.category}
                      </Badge>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                        <Link href={`/courses/${course.id}`}>
                          <Button size="lg" className="rounded-full">
                            View Course
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{course.level}</Badge>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {course.instructor}
                    </p>
                  </CardHeader>

                  <CardContent className="pb-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
              </BackgroundGradient>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
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
