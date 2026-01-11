'use client';



import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import { Boxes } from '@/components/ui/background-boxes';
import axios from 'axios';

const courses: {
  id: CourseKey;
  title: string;
  students: string;
  byline: string;
}[] = [
  {
    id: 'ai',
    title: 'AI Marketing',
    students: '4000+ students have already tried this',
    byline: 'Test your knowledge',
  },
  {
    id: 'clinical',
    title: 'Clinical Psychology',
    students: '5000+ students have already tried this',
    byline: 'Test your knowledge',
  },
  {
    id: 'psych360',
    title: 'Psychology 360',
    students: '3000+ students have already tried this',
    byline: 'Test your knowledge',
  },
  {
    id: 'forensic',
    title: 'Forensic Psychology',
    students: '6000+ students have already tried this',
    byline: 'Test your knowledge',
  },
];

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
      q: 'Which statement best captures the difference between first-degree murder and second-degree murder?',
      options: [
        'First-degree murder always involves multiple victims, while second-degree murder involves only one.',
        'First-degree murder involves premeditation and intent, while second-degree murder involves intent but no prior planning.',
        'Second-degree murder is always accidental, while first-degree murder is intentional.',
        'First-degree murder occurs only in public places, while second-degree murder occurs in private settings.',
      ],
      correct: 1,
    },
    {
      q: 'A forensic psychologist is asked to evaluate an accused who understands the charges against them but is unable to communicate meaningfully with their lawyer due to severe psychotic symptoms. This evaluation primarily concerns:',
      options: [
        'Criminal intent under IPC',
        'Fitness to stand trial under Section 329 CrPC',
        'Insanity defense under Section 84 IPC',
        'Sentencing recommendations',
      ],
      correct: 1,
    },
    {
      q: 'Which of the following tasks is most appropriate for a forensic psychologist working within the Indian criminal justice system?',
      options: [
        'Providing long-term psychotherapy to inmates',
        'Conducting personality tests for career guidance',
        'Assessing risk of reoffending to assist courts or parole boards',
        'Prescribing psychiatric medication',
      ],
      correct: 2,
    },
    {
      q: 'Which of the following best defines a serial killer in forensic psychology?',
      options: [
        'A person who kills multiple people in a single incident',
        'A person who commits multiple murders with a cooling-off period between each act',
        'A person who commits repeated killings of individuals with no prior relational history',
        'A person who kills due to mental illness',
      ],
      correct: 1,
    },
  ],

  clinical: [
    {
      q: `Mini Case: How Would a Clinical Psychologist Think About This?\n

A 19-year-old college student has been feeling unusually anxious and distracted over the past few weeks. Since moving away from home for college, they’ve been struggling to adjust, worrying constantly about academics and friendships. They report poor sleep, frequent overthinking, and feeling “on edge,” especially before classes and exams. Despite this, they attend lectures regularly and stay in touch with a close friend from home.\n

When reading this situation, what would a clinical psychologist focus on first?`,
      options: [
        'Deciding which disorder fits best',
        'Understanding context and recent changes',
        'Determining whether medication is required',
        'Comparing symptoms to a diagnostic checklist',
      ],
      correct: 1,
    },
    {
      q: 'Based on the information given, what is the most accurate way to view this experience?',
      options: [
        'Clear evidence of an anxiety disorder',
        'Normal stress that should be ignored',
        'Psychological distress that needs to be understood in context',
        'A long-term mental illness',
      ],
      correct: 2,
    },
    {
      q: 'Which factor would most likely fall under “what triggered the distress” in this case?',
      options: [
        'Being 19 years old',
        'Moving away from home for college',
        'Attending classes regularly',
        'Having a close friend',
      ],
      correct: 1,
    },
    {
      q: 'Based only on this information, which conclusion is appropriate?',
      options: [
        'The student has an anxiety disorder',
        'The student needs immediate clinical treatment',
        'The student is going through an adjustment-related stressful phase',
        'The student will continue feeling this way long-term',
      ],
      correct: 2,
    },
  ],

  psych360: [
    {
      q: `Scenario:
At home, a student is quiet and obedient. With friends, they’re expressive and outspoken. Online, they curate a confident, “put-together” version of themselves.

From a psychological perspective, this most closely reflects:`,
      options: [
        'Being fake or dishonest',
        'The existence of multiple “false selves”',
        'Different roles across social contexts',
        'A personality disorder',
      ],
      correct: 2,
    },
    {
      q: `Scenario:
Two people experience panic symptoms. One seeks therapy. The other visits a spiritual healer because their family views the symptoms as a spiritual imbalance.

This difference best highlights:`,
      options: [
        'Intelligence levels',
        'Cultural interpretations of distress',
        'Severity of symptoms',
        'Personality differences',
      ],
      correct: 1,
    },
    {
      q: `Scenario:
Someone values independence, feels uncomfortable relying on others, and withdraws when relationships become emotionally intense.

This pattern is most consistent with:`,
      options: [
        'Secure attachment',
        'Anxious attachment',
        'Avoidant attachment',
        'Disorganized attachment',
      ],
      correct: 2,
    },
    {
      q: `Scenario:
After a conflict, a person tells themselves, “There’s no point feeling upset, others have it worse,” and pushes the emotion away.

This strategy is best described as:`,
      options: [
        'Emotional expression',
        'Emotional suppression',
        'Cognitive reappraisal',
        'Mindfulness',
      ],
      correct: 1,
    },
    {
      q: `Scenario:
A 19-year-old student feels deeply anxious when their close friend doesn’t reply for hours. They replay conversations, worry they’ve done something wrong, and feel relieved only when the friend responds.

Which attachment pattern best explains this reaction?`,
      options: [
        'Secure — comfortable with closeness and distance',
        'Anxious — heightened fear of abandonment',
        'Avoidant — discomfort with emotional closeness',
        'Disorganized — fear mixed with withdrawal',
      ],
      correct: 1,
    },
  ],

  ai: [
    {
      q: 'A company wants to grow online without manually doing everything. Which best explains why AI + automation are useful in marketing?',
      options: [
        'They completely replace human marketers',
        'They help do repetitive work faster and more consistently',
        'They only work for large companies',
        'They are mainly used for designing logos',
      ],
      correct: 1,
    },
    {
      q: 'A user fills a “Get a Free Trial” form and the marketing team immediately receives an email notification, without anyone checking the form manually. What just happened?',
      options: [
        'A chatbot replied to the user',
        'A workflow automation was triggered',
        'The CRM sent a newsletter',
        'AI wrote a social media post',
      ],
      correct: 1,
    },
    {
      q: 'Your company sends two different follow-up emails depending on whether a user opened the previous email. This is an example of:',
      options: [
        'Content repurposing',
        'Behaviour-based automation',
        'Landing page optimisation',
        'Manual segmentation',
      ],
      correct: 1,
    },
    {
      q: 'Why would a company use n8n instead of only Zapier for later-stage workflows like payment → CRM → internal alerts → data logging?',
      options: [
        'Only cheaper',
        'Supports complex branching logic',
        'Zapier cannot email',
        'Required for Stripe payments',
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

  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const submitSim = async () => {
    try {
      if (!phone) return alert('Enter phone number');


      setLoading(true);


      await axios.post('/api/simdb', {
      userId: 'anonymous',
      phone: Number(phone),
      });


      alert('Thanks! We will contact you shortly.');
      setPhone('');
    } catch (error) {
    console.error(error);
    alert('Something went wrong');
    } finally {
    setLoading(false);
    }
    };

  useEffect(() => setVisible(true), []);

  const questions = course ? QUESTIONS[course] : [];
  const score = answers.filter(
    (a, i) => a === questions[i]?.correct
  ).length;

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
                Test Your <span className="text-[#E2F310]">Knowledge</span>
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
        <section className="py-24 ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    
            {/* Cards */}
            <div className="flex flex-col gap-8 max-w-5xl mx-auto">
              {courses.map((c, index) => (
                <Card
                  key={c.id}
                  style={{ transitionDelay: `${index * 80}ms` }}
                  className="
                    bg-black/80
                    border border-white/15
                    rounded-2xl
                    transition-colors duration-300
                    hover:border-[#E2F310]
                  "
                >
                  <div className="p-8 flex flex-col gap-6">

                    {/* Title */}
                    <h3 className="text-2xl leading-tight">
                      {c.id === 'ai' && (
                        <>AI <span className="text-[#E2F310]">Marketing</span></>
                      )}
                      {c.id === 'clinical' && (
                        <>Clinical <span className="text-[#E2F310]">Psychology</span></>
                      )}
                      {c.id === 'psych360' && (
                        <>Psychology <span className="text-[#E2F310]">360</span></>
                      )}
                      {c.id === 'forensic' &&(
                        <>Forensic <span className="text-[#E2F310]">Psychology</span></>
                      )}
                    </h3>

                    {/* Byline */}
                    <p className="text-sm text-white/70">
                      {c.byline}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <Users className="h-4 w-4" />
                        {c.students}
                      </div>

                      <Button
                        size="lg"
                        className="
                          rounded-full px-6
                          bg-white text-black
                          hover:bg-[#E2F310]
                        "
                        onClick={() => {
                          setCourse(c.id);
                          setStarted(true);
                        }}
                      >
                        Test Your Knowledge
                      </Button>
                    </div>

                  </div>
                </Card>
              ))}
            </div>


          </div>
        </section>
      )}



      {/* ================= QUIZ ================= */}
      {started && !showResult && (
        <section className="container mx-auto px-6 py-24 max-w-3xl">
          <Card className="glass border-white/10">
            <CardHeader className="space-y-4">
              <p className="text-white/60 text-sm">
                Question {current + 1} of {questions.length}
              </p>
              <h3 className="text-xl text-white whitespace-pre-line">
                {questions[current].q}
              </h3>
            </CardHeader>

            <CardContent className="space-y-4">
              {questions[current].options.map((o, i) => (
                <Button
                  key={i}
                  variant="outline"
                  className="
                    w-full
                    h-auto
                    items-start
                    justify-start
                    text-left
                    whitespace-normal
                    break-words
                    leading-relaxed
                    py-4 px-5
                    hover:bg-white/10
                    hover:border-[#E2F310]
                  "
                  onClick={() => {
                    const next = [...answers];
                    next[current] = i;
                    setAnswers(next);
                    if (current < questions.length - 1) {
                      setCurrent((c) => c + 1);
                    } else {
                      setShowResult(true);
                    }                    
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
                  {score}/{questions.length}
                </h2>
                <p className="text-white/70 mt-2 whitespace-pre-line">
                  {feedbackCopy(questions.length - score)}
                </p>
              </div>

              <div className="space-y-3">
                <Input
                  placeholder="Your phone number"
                  className="text-center"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                <Button
                  className="w-full"
                  onClick={submitSim}
                  disabled={loading}
                  >
                  {loading ? 'Submitting...' : 'Talk to an expert'}
                  </Button>

                {/* NEW ACTIONS */}
                <div className="flex flex-col gap-2 pt-4">
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
  
