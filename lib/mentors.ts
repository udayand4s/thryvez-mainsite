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
    role: "Clinical Psychologist",
    company: "Psych Insights",
    image:
      "/jivisha-dangi.webp",
    bio: `Jivisha is a Counselling Psychologist and Psychotherapist with almost two years of experience. 
She holds a Master’s in Psychology (Psychosocial Clinical Studies) from Ambedkar University, Delhi, 
and a Postgraduate Diploma in Guidance and Counselling from Jamia Millia Islamia.

She is also an Adult Fellow at the Washington Baltimore Center for Psychoanalysis, where she is 
deepening her engagement with psychoanalytic thought and practice.

As a therapist and mentor, Jivisha believes in combining academic rigor with a reflective, 
human-centered approach to understanding the mind. Her work emphasizes curiosity, dialogue, 
and critical thinking, encouraging learners to not just acquire knowledge but to engage with it meaningfully.

She brings her experience of working with diverse individuals and her grounding in psychoanalytic 
perspectives into her teaching, making complex ideas accessible, relatable, and thought-provoking.`,
    expertise: [
      "Clinical Psychology",
      "Behavioral Science",
      "Mental Health",
      "Cognitive Therapy",
    ],
    courses: [
      { title: "Psychology 360", slug: "psychology360" },
    ],
    socials: {
      linkedin: "https://linkedin.com/in/jivishadangi",
    },
  },
  {
    id: "sanjivani",
    slug: "sanjivani",
    name: "Sanjivani",
    role: "Clinical Psychology Mentor",
    company: "",
    image: "/sanjivani.png",
    bio: "Sanjivani is a clinical psychology mentor focused on helping learners understand human behavior, emotional intelligence, and applied psychology through real-world examples and structured learning frameworks.",
    expertise: [
      "Clinical Psychology",
      "Emotional Intelligence",
      "Behavioral Analysis",
      "Mental Health Awareness",
    ],
    courses: [
      {
        title: "Clinical Psychology",
        slug: "clinical-psy",
      },
    ],
  },
  {
    id: "mirra-lakshmanan",
    slug: "mirra-lakshmanan",
    name: "Mirra Lakshmanan",
    role: "Psychology Educator",
    company: "Thryve Z",
    image: "/mirra.jpeg",
    bio: "Mirra Lakshmanan is a psychology educator passionate about simplifying complex psychological concepts and enabling learners to apply theory into everyday decision-making and personal growth.",
    expertise: [
      "Applied Psychology",
      "Cognitive Psychology",
      "Learning & Memory",
      "Self-Development",
    ],
    courses: [
      {
        title: "Psychology 360",
        slug: "psychology360",
      },
    ],
  }
  
  
];
