export type Mentor = {
    id: string;
    slug: string;
    name: string;
    role: string;
    company: string;
    image: string;
    bio: string;
    expertise: string[];
    courses: {
      title: string;
      slug: string;
    }[];
    socials?: {
      linkedin?: string;
      twitter?: string;
    };
  };
  
  export const mentors: Mentor[] = [
    {
      id: "jivisha-dangi",
      slug: "jivisha-dangi",
      name: "Jivisha Dangi",
      role: "Senior Psychologist",
      company: "Psych Insights",
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&q=60",
      bio:
        "Jivisha is a senior psychologist with extensive experience in behavioral science, therapy, and applied psychology for modern learners.",
      expertise: [
        "Clinical Psychology",
        "Behavioral Science",
        "Mental Health",
        "Cognitive Therapy",
      ],
      courses: [
        { title: "Psychology 360", slug: "psychology360" },
        { title: "Psychology 360 (Self Paced)", slug: "psychology360" },
      ],
      socials: {
        linkedin: "https://linkedin.com/in/jivishadangi",
      },
    },
  ];
   