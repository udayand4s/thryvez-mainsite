import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { mentors } from "@/lib/mentors";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";



export default function MentorPage({
  params,
}: {
  params: { slug: string };
}) {
  const mentor = mentors.find((m) => m.slug === params.slug);

  if (!mentor) return notFound();

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-20 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12">

          {/* LEFT */}
          <div className="md:col-span-1">
            <Image
              src={mentor.image}
              alt={mentor.name}
              width={400}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>

          {/* RIGHT */}
          <div className="md:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white">
                {mentor.name}
              </h1>
              <p className="text-[#E2F310] mt-2">
                {mentor.role} · {mentor.company}
              </p>
            </div>

            <p className="text-white/80 leading-relaxed">
              {mentor.bio}
            </p>

            {/* Expertise */}
            <div>
              <h3 className="text-white font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div>
              <h3 className="text-white font-semibold mb-2">
                Courses by {mentor.name}
              </h3>
              <ul className="space-y-2">
                {mentor.courses.map((course) => (
                  <li key={course.slug}>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="text-[#E2F310] hover:underline"
                    >
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
   
