'use client';



import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Boxes } from '@/components/ui/background-boxes';

type CourseKey =
  | 'psych360'
  | 'clinical'
  | 'ai'
  | 'forensic';

const COURSE_LABELS: Record<CourseKey, string> = {
  psych360: 'Psychology 360',
  clinical: 'Clinical Psychology',
  ai: 'AI Marketing',
  forensic: 'Forensic Psychology',
};
type Question = {
  q: string;
  options: string[];
  correct: number;
};


/* ================= QUESTIONS ================= */

const QUESTIONS: Record<CourseKey, Question[]> = {
  forensic: [
    {
      q: 'Which statement best captures the difference between first-degree murder and second-degree murder',
      options: [
        'First-degree murder always involves multiple victims',
        'First-degree murder involves premeditation and intent',
        'Second-degree murder is always accidental',
        'First-degree murder only occurs in public',
      ],
      correct: 1,
    },
    {
      q: 'This evaluation primarily concerns:',
      options: [
        'Criminal intent under IPC',
        'Fitness to stand trial under Section 329 CrPC',
        'Insanity defense under Section 84 IPC',
        'Sentencing recommendations',
      ],
      correct: 1,
    },
    {
      q: 'Which task is most appropriate for a forensic psychologist?',
      options: [
        'Long-term psychotherapy',
        'Career guidance testing',
        'Assessing risk of reoffending',
        'Prescribing medication',
      ],
      correct: 2,
    },
    {
      q: 'What best defines a serial killer?',
      options: [
        'Multiple victims in one incident',
        'Multiple murders with cooling-off periods',
        'Repeated killings of strangers',
        'Kills due to mental illness',
      ],
      correct: 1,
    },
  ],

  clinical: [
    {
      q: 'What would a clinical psychologist focus on first?',
      options: [
        'Choosing a diagnosis',
        'Understanding context and recent changes',
        'Deciding medication',
        'Matching a checklist',
      ],
      correct: 1,
    },
    {
      q: 'The most accurate way to view this experience?',
      options: [
        'Clear anxiety disorder',
        'Stress to be ignored',
        'Distress understood in context',
        'Long-term illness',
      ],
      correct: 2,
    },
    {
      q: 'What likely triggered the distress?',
      options: [
        'Being 19',
        'Moving away from home',
        'Attending classes',
        'Having a friend',
      ],
      correct: 1,
    },
    {
      q: 'Which conclusion is appropriate?',
      options: [
        'Has anxiety disorder',
        'Needs immediate treatment',
        'Adjustment-related stress',
        'Will last long-term',
      ],
      correct: 2,
    },
  ],

  psych360: [
    {
      q: 'This scenario reflects:',
      options: [
        'Being fake',
        'Multiple false selves',
        'Different social roles',
        'Personality disorder',
      ],
      correct: 2,
    },
    {
      q: 'This difference best highlights:',
      options: [
        'Intelligence',
        'Cultural interpretations of distress',
        'Severity',
        'Personality',
      ],
      correct: 1,
    },
    {
      q: 'This pattern is most consistent with:',
      options: [
        'Secure attachment',
        'Anxious attachment',
        'Avoidant attachment',
        'Disorganized attachment',
      ],
      correct: 2,
    },
    {
      q: 'This strategy is best described as:',
      options: [
        'Emotional expression',
        'Emotional suppression',
        'Cognitive reappraisal',
        'Mindfulness',
      ],
      correct: 1,
    },
  ],

  ai: [
    {
      q: 'Why are AI + automation useful in marketing?',
      options: [
        'Replace marketers',
        'Handle repetitive work efficiently',
        'Only for big companies',
        'Design logos',
      ],
      correct: 1,
    },
    {
      q: 'What just happened?',
      options: [
        'Chatbot reply',
        'Workflow automation',
        'Newsletter sent',
        'AI wrote a post',
      ],
      correct: 1,
    },
    {
      q: 'This is an example of:',
      options: [
        'Content repurposing',
        'Behaviour-based automation',
        'Landing page optimisation',
        'Manual segmentation',
      ],
      correct: 1,
    },
    {
      q: 'Why use n8n for later-stage workflows?',
      options: [
        'Only cheaper',
        'Supports complex branching logic',
        'Zapier cannot email',
        'Required for Stripe',
      ],
      correct: 1,
    },
  ],
};

/* ================= FEEDBACK ================= */

function feedbackCopy(wrong: number) {
  if (wrong === 0)
    return 'Your fundamentals are solid, and that already puts you ahead.\nThat said, knowing concepts and applying them confidently in real scenarios are two different things.\nOur course goes beyond questions like these, into case-based thinking, real-world application, and depth that builds actual confidence.\nIf you want to sharpen this further and turn understanding into expertise,leave your number below and we’ll help you take the next step.';
  if (wrong === 1)
    return 'You’re very close! Just a small gap to bridge.\nYour understanding is strong, and with a little guidance, you’d have this fully nailed.\nIf you’d like personalised feedback or next steps, leave your number below and we’ll reach out.';
  if (wrong === 2)
    return 'You’re on the right track, but some concepts need clarity.\nThis is a solid starting point, a bit of structured learning can make things click fast.\nWant to understand exactly what to work on?\nDrop your number and we’ll help you figure it out.';
  if (wrong === 3)
    return 'Looks like the foundations need strengthening, and that’s okay.\nThese concepts aren’t intuitive, and many people struggle without proper guidance.\nIf you want help building this from the ground up, leave your number and we’ll connect with you.';
  return 'This subject might be newer than you thought, and that’s completely normal.\n It simply means you haven’t had the chance to learn it yet.\nIf you’re curious to explore this properly and avoid common beginner mistakes, share your number and we’ll guide you on where to start.';
}

/* ================= COMPONENT ================= */

export function SimulationContent() {
  const [visible, setVisible] = useState(false);
  const [course, setCourse] = useState<CourseKey | null>(null);
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => setVisible(true), []);

  const questions = course ? QUESTIONS[course] : [];
  const score = answers.filter(
    (a, i) => a === questions[i]?.correct
  ).length;

  const progress = ((current + 1) / 4) * 100;
  const resetTest = (resetCourse = false) => {
    setStarted(false);
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
  
    if (resetCourse) {
      setCourse(null);
    }
  };
  

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto py-24 lg:py-32">
            <div className="text-center flex flex-col items-center">
              <span
                className={`
                  text-white/90 text-xs uppercase tracking-[0.35em] mb-4
                  transition-all duration-700
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                `}
              >
                Learning by Building
              </span>

              <h1
                className={`
                  text-white text-[7vw] sm:text-[5vw] lg:text-[4vw]
                  leading-[1.04] tracking-tight mb-4
                  transition-all duration-700
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                Test Your Knowledge
              </h1>

              <p
                className={`
                  max-w-3xl text-white/90 text-base sm:text-lg mb-10
                  transition-all duration-700 delay-200
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                Answer the questions using what you already know. No pressure to look anything up.
                The point isn’t to get everything right, it’s to see where you’re at right now.
                Be honest with yourself.
                And that’s how this actually becomes useful.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* ================= COURSE SELECTION ================= */}
      {!course && (
        <section className="container mx-auto px-6 py-24 max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(Object.keys(COURSE_LABELS) as CourseKey[]).map((key) => (
            <Card
              key={key}
              onClick={() => setCourse(key)}
              className="
                glass cursor-pointer text-white
                transition-all duration-300
                hover:-translate-y-2 hover:border-[#E2F310]
                hover:shadow-[0_0_40px_-10px_#E2F310]
              "
            >
              <CardContent className="py-12 text-center space-y-3">
                <h3 className="text-lg">{COURSE_LABELS[key]}</h3>
                <p className="text-white/60 text-sm">
                  4-question simulation
                </p>
              </CardContent>
            </Card>
          ))}
        </section>
      )}

      {/* ================= START ================= */}
      {course && !started && (
        <section className="py-24 text-center">
          <Button size="lg" onClick={() => setStarted(true)}>
            Start Simulation
          </Button>
        </section>
      )}

      {/* ================= QUIZ ================= */}
      {started && !showResult && (
        <section className="container mx-auto px-6 py-24 max-w-3xl">
          <Card className="glass border-white/10">
            <CardHeader className="space-y-4">
              <Progress value={progress} />
              <p className="text-white/60 text-sm">
                Question {current + 1} of 4
              </p>
              <h3 className="text-xl text-white">
                {questions[current].q}
              </h3>
            </CardHeader>

            <CardContent className="space-y-4">
              {questions[current].options.map((o, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="
                    w-full justify-start text-left
                    hover:bg-white/10 hover:border-[#E2F310]
                  "
                  onClick={() => {
                    const next = [...answers];
                    next[current] = i;
                    setAnswers(next);
                    current < 3
                      ? setCurrent((c) => c + 1)
                      : setShowResult(true);
                  }}
                >
                  {o}
                </Button>
              ))}
            </CardContent>
          </Card>
        </section>
      )}

      {/* ================= RESULT ================= */}
      {showResult && (
        <section className="container mx-auto px-6 py-24 max-w-xl">
          <Card className="glass border-white/10 text-center">
            <CardContent className="py-14 space-y-8">
              <div>
                <h2 className="text-4xl text-white font-semibold">
                  {score}/4
                </h2>
                <p className="text-white/70 mt-2">
                  {feedbackCopy(4 - score)}
                </p>
              </div>

              <div className="space-y-3">
                <Input
                  placeholder="Your phone number"
                  className="text-center"
                />

                <Button className="w-full">
                  Talk to an expert
                </Button>

                {/* NEW ACTIONS */}
                <div className="flex flex-col gap-2 pt-4">
                  <Button
                    variant="outline"
                    onClick={() => resetTest(false)}
                  >
                    Retake this test
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => resetTest(true)}
                    className="text-white/70"
                  >
                    Choose another course
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

    </>
  );
}
