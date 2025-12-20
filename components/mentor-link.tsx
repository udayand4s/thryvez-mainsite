import Link from "next/link";

export function MentorLink({
  name,
  slug,
  className = "",
}: {
  name: string;
  slug: string;
  className?: string;
}) {
  return (
    <Link
      href={`/mentors/${slug}`}
      className={`text-[#E2F310] hover:underline ${className}`}
    >
      {name}
    </Link>
  );
}
