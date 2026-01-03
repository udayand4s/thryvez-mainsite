'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Boxes } from '@/components/ui/background-boxes';

const questions = [
  {
    question: 'Which cognitive bias causes people to overvalue their first impression?',
    options: [
      'Confirmation Bias',
      'Anchoring Bias',
      'Halo Effect',
      'Survivorship Bias',
    ],
    correct: 2,
  },
  {
    question: 'What does classical conditioning primarily focus on?',
    options: [
      'Reward-based learning',
      'Stimulus-response association',
      'Trial-and-error learning',
      'Observational learning',
    ],
    correct: 1,
  },
  {
    question: 'Which part of the brain is most associated with decision making?',
    options: [
      'Amygdala',
      'Cerebellum',
      'Prefrontal Cortex',
      'Hippocampus',
    ],
    correct: 2,
  },
];

export function SimulationContent() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const progress = ((current + 1) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setTimeout(() => setCurrent((p) => p + 1), 400);
    } else {
      setTimeout(() => setShowResult(true), 600);
    }
  };

  const score = answers.filter(
    (a, i) => a === questions[i].correct
  ).length;

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
                Try a Real Assignment
              </h1>

              <p
                className={`
                  max-w-3xl text-white/90 text-base sm:text-lg mb-10
                  transition-all duration-700 delay-200
                  ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                `}
              >
                Experience how learning on ThryveZ feels — no login required.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
      </section>

      {/* ================= QUIZ SECTION ================= */}
      <section className="container mx-auto px-6 py-24 max-w-3xl">
        {!showResult ? (
          <>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-8">
              <div
                className="h-full bg-[#E2F310] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>

            <Card className="glass border-white/10">
              <CardHeader>
                <h3 className="text-xl text-white">
                  {questions[current].question}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                {questions[current].options.map((option, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left hover:border-[#E2F310]"
                    onClick={() => handleAnswer(index)}
                  >
                    {option}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="glass border-white/10 text-center">
            <CardContent className="py-16 space-y-6">
              {score >= 2 ? (
                <CheckCircle className="mx-auto h-16 w-16 text-[#E2F310]" />
              ) : (
                <XCircle className="mx-auto h-16 w-16 text-red-500" />
              )}

              <h2 className="text-3xl text-white">
                You scored {score}/{questions.length}
              </h2>

              <p className="text-white/90 max-w-md mx-auto">
                This is exactly how assignments and evaluations feel inside a full course.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button asChild size="lg">
                  <Link href="/courses">Unlock Full Access</Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setCurrent(0);
                    setAnswers([]);
                    setShowResult(false);
                  }}
                >
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </>
  );
}
