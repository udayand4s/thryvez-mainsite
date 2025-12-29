import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Users, BookOpen } from 'lucide-react';

const instructors = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Full Stack Development Expert',
    specialty: 'Web Development',
    rating: 4.9,
    students: 45320,
    courses: 12,
    avatar: 'SJ',
  },
  {
    name: 'Michael Chen',
    title: 'Senior UX Designer',
    specialty: 'UI/UX Design',
    rating: 4.8,
    students: 38910,
    courses: 8,
    avatar: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Data Science Lead',
    specialty: 'Data Science',
    rating: 4.9,
    students: 52140,
    courses: 15,
    avatar: 'ER',
  },
  {
    name: 'David Park',
    title: 'Marketing Strategist',
    specialty: 'Digital Marketing',
    rating: 4.7,
    students: 28650,
    courses: 10,
    avatar: 'DP',
  },
];

export function Instructors() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl  mb-4">
            Learn from Industry Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our instructors are experienced professionals passionate about teaching
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Avatar className="h-24 w-24 mx-auto mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
                  <AvatarFallback className="bg-primary/10 text-primary text-2xl ">
                    {instructor.avatar}
                  </AvatarFallback>
                </Avatar>

                <h3 className=" text-lg mb-1">
                  {instructor.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {instructor.title}
                </p>

                <Badge variant="secondary" className="mb-4">
                  {instructor.specialty}
                </Badge>

                <div className="flex items-center justify-center gap-1 mb-4">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="">{instructor.rating}</span>
                  <span className="text-sm text-muted-foreground ml-1">rating</span>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{instructor.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{instructor.courses} courses</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  View Profile
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Instructors
          </Button>
        </div>
      </div>
    </section>
  );
}
