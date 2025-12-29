import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Database, LineChart, Megaphone, Camera, Globe, BookOpen } from 'lucide-react';

const categories = [
  {
    icon: Code,
    name: 'Development',
    courses: 2543,
    color: 'text-blue-600 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: Palette,
    name: 'Design',
    courses: 1876,
    color: 'text-pink-600 dark:text-pink-400',
    bgColor: 'bg-pink-50 dark:bg-pink-950/30',
  },
  {
    icon: Database,
    name: 'Data Science',
    courses: 1432,
    color: 'text-green-600 dark:text-green-400',
    bgColor: 'bg-green-50 dark:bg-green-950/30',
  },
  {
    icon: LineChart,
    name: 'Business',
    courses: 2198,
    color: 'text-orange-600 dark:text-orange-400',
    bgColor: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    icon: Megaphone,
    name: 'Marketing',
    courses: 987,
    color: 'text-red-600 dark:text-red-400',
    bgColor: 'bg-red-50 dark:bg-red-950/30',
  },
  {
    icon: Camera,
    name: 'Photography',
    courses: 756,
    color: 'text-cyan-600 dark:text-cyan-400',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    icon: Globe,
    name: 'Languages',
    courses: 1234,
    color: 'text-teal-600 dark:text-teal-400',
    bgColor: 'bg-teal-50 dark:bg-teal-950/30',
  },
  {
    icon: BookOpen,
    name: 'Personal Development',
    courses: 1543,
    color: 'text-amber-600 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/30',
  },
];

export function Categories() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl  mb-4">
            Explore Top Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover courses across multiple categories and find the perfect path for your learning journey
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary"
            >
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${category.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                </div>
                <h3 className=" mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.courses.toLocaleString()} courses
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
