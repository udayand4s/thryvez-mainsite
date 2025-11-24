import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'Software Engineer',
    company: 'Tech Corp',
    content: 'The web development course completely transformed my career. The instructors are knowledgeable and the content is up-to-date with industry standards.',
    rating: 5,
    avatar: 'ET',
  },
  {
    name: 'Marcus Johnson',
    role: 'UX Designer',
    company: 'Design Studio',
    content: 'Amazing platform with high-quality courses. I learned UI/UX design from scratch and now I am working at my dream company. Highly recommend!',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Sarah Williams',
    role: 'Data Analyst',
    company: 'Analytics Inc',
    content: 'The data science courses are comprehensive and practical. I gained hands-on experience with real-world projects that prepared me for my career.',
    rating: 5,
    avatar: 'SW',
  },
  {
    name: 'David Chen',
    role: 'Marketing Manager',
    company: 'Brand Co',
    content: 'LearnHub helped me transition into digital marketing. The courses are engaging and the community support is exceptional. Worth every penny!',
    rating: 5,
    avatar: 'DC',
  },
  {
    name: 'Lisa Anderson',
    role: 'Product Manager',
    company: 'Startup XYZ',
    content: 'The flexibility to learn at my own pace was crucial. The course quality is outstanding and the instructors truly care about student success.',
    rating: 5,
    avatar: 'LA',
  },
  {
    name: 'James Rodriguez',
    role: 'Mobile Developer',
    company: 'App Studio',
    content: 'I completed the iOS development course and launched my first app within months. The practical approach and mentorship made all the difference.',
    rating: 5,
    avatar: 'JR',
  },
];

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Read success stories from students who transformed their careers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-sm mb-6 leading-relaxed">
                  {testimonial.content}
                </p>

                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
