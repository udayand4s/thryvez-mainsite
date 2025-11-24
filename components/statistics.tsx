import { Users, BookOpen, GraduationCap, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50K+',
    label: 'Active Students',
    description: 'Learning every day',
  },
  {
    icon: BookOpen,
    value: '10K+',
    label: 'Online Courses',
    description: 'Across all categories',
  },
  {
    icon: GraduationCap,
    value: '500+',
    label: 'Expert Instructors',
    description: 'Industry professionals',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    description: 'Course completion',
  },
];

export function Statistics() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of learners achieving their goals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-background border shadow-sm flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all">
                <stat.icon className="h-10 w-10 text-primary" />
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
