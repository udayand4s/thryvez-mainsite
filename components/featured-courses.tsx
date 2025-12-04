import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Clock, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';


const courses = [
  {
    id: 1,
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
    image: 'psychology.webp',
  },
  {
    id: 2,
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
    image: 'psychology.webp',
  },
  {
    id: 3,
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
    image: 'ds.webp',
  }
];

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Featured Courses</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#E2F310]/90">
            Most Popular Courses
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our top-rated courses chosen by thousands of students worldwide
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="space-y-0 pb-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 relative overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  {course.trending && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium">
                      <TrendingUp className="h-3 w-3 text-primary" />
                      <span>Trending</span>
                    </div>
                  )}
                  <Badge className="absolute top-3 right-3">{course.category}</Badge>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <Button size="lg" className="rounded-full">
                      View Course
                    </Button>
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
                <p className="text-sm text-muted-foreground">by {course.instructor}</p>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-baseline gap-2">
                  <span className="text-muted-foreground line-through text-sm">
                    ₹{course.oldprice.toLocaleString()}
                  </span>

                  <span className="text-2xl font-bold text-white">
                    ₹{course.price.toLocaleString()}
                  </span>

                  {/* <span className="ml-1 px-2 py-0.5 rounded-full bg-[#E2F310]/20 text-[#E2F310]/90 text-xs">
                    Save {Math.round(((course.oldprice - course.price) / course.oldprice) * 100)}%
                  </span> */}
                </div>

                <Button>Enroll Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}