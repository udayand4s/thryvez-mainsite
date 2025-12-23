'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

const questions = [
  {
    question: 'Which cognitive bias causes people to overvalue their first impression?',
    options: ['Confirmation Bias', 'Anchoring Bias', 'Halo Effect', 'Survivorship Bias'],
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
    options: ['Amygdala', 'Cerebellum', 'Prefrontal Cortex', 'Hippocampus'],
    correct: 2,
  },
];

export function SimulationContent() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const progress = ((current + 1) / questions.length) * 100;

  const handleAnswer = (index: number) => {
    const updated = [...answers];
    updated[current] = index;
    setAnswers(updated);

    if (current < questions.length - 1) {
      setTimeout(() => setCurrent(current + 1), 400);
    } else {
      setTimeout(() => setShowResult(true), 600);
    }
  };

  const score = answers.filter(
    (a, i) => a === questions[i].correct
  ).length;

  return (
    <section className="container mx-auto px-6 py-24 max-w-3xl">
      {!showResult ? (
        <>
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-white mb-2">
              Try a Real Assignment
            </h1>
            <p className="text-white/70">
              Experience how learning on Thryve Z feels — no login required.
            </p>
          </div>

          {/* PROGRESS */}
          <div className="mb-8">
            <Progress value={progress} />
            <p className="text-xs text-white/50 mt-2 text-right">
              Question {current + 1} of {questions.length}
            </p>
          </div>

          {/* QUESTION CARD */}
          <Card className="glass border-white/10">
            <CardHeader>
              <h2 className="text-xl text-white font-semibold">
                {questions[current].question}
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              {questions[current].options.map((opt, idx) => (
                <Button
                  key={idx}
                  variant="outline"
                  className="w-full justify-start text-left hover:border-[#E2F310]"
                  onClick={() => handleAnswer(idx)}
                >
                  {opt}
                </Button>
              ))}
            </CardContent>
          </Card>
        </>
      ) : (
        /* RESULT */
        <Card className="glass border-white/10 text-center">
          <CardContent className="py-16 space-y-6">
            {score >= 2 ? (
              <CheckCircle className="mx-auto h-16 w-16 text-[#E2F310]" />
            ) : (
              <XCircle className="mx-auto h-16 w-16 text-red-500" />
            )}

            <h2 className="text-3xl font-bold text-white">
              You scored {score}/{questions.length}
            </h2>

            <p className="text-white/70 max-w-md mx-auto">
              This is exactly how assignments and evaluations feel inside a full course.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/courses">
                  Unlock Full Access
                </Link>
              </Button>

              <Button variant="outline" size="lg" onClick={() => {
                setCurrent(0);
                setAnswers([]);
                setShowResult(false);
              }}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
