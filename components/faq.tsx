'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: 'What is Thryve Z?',
    answer: 'Thryve Z is a virtual creative lab designed to bridge the gap between education and real-world careers. We focus on practical learning, real projects, and community-driven growth, so you don’t just learn, you build.',
  },
  {
    question: 'Who is Thryve Z for?',
    answer: 'Thryve Z is for students, fresh graduates, and working professionals who feel stuck with outdated learning systems and want skills that actually translate into opportunities.',
  },
  {
    question: 'How is Thryve Z different from other learning platforms?',
    answer: 'We don’t believe in passive learning or certificate-only outcomes. At Thryve Z, you work on real projects, build portfolios, collaborate with peers, and learn skills employers actually care about.',
  },
  {
    question: 'How long do I have access to the material for?',
    answer: 'Yes. Once you enroll, you get lifetime access to the course content, including future updates. You can revisit the material anytime, at your own pace.',
  },
  {
    question: 'Is Thryve Z beginner-friendly?',
    answer: 'Absolutely. Our programs are designed to meet you where you are—whether you’re just starting out or looking to transition into a new role or industry.',
  },
  {
    question: 'What kind of support will I receive?',
    answer: 'You’ll have access to 24×7 support for doubts, guidance, and technical help. You’re never left figuring things out alone.',
  },
  {
    question: 'Are the courses self-paced or live?',
    answer: 'We deliver live, structured learning experiences backed by hands-on practice and ongoing guidance, so you benefit from real-time interaction without losing the freedom to revisit and reinforce concepts.',
  },
  {
    question: 'Will I receive a certificate?',
    answer: 'Yes, but more importantly, you’ll leave with real projects, Letters of recommendations, a strong portfolio, and practical experience things that matter far more than a certificate alone.',
  },
  {
    question: 'Does Thryve Z help with career growth?',
    answer: 'Yes. We focus on skills, confidence, and exposure. Through projects, mentorship, and community, we help you become job-ready and opportunity-ready.',
  },
  {
    question: 'Is Thryve Z just about courses?',
    answer: 'No. Thryve Z is a community. You grow alongside like-minded peers, mentors, and professionals who support and challenge you to do better.',
  },  
];


export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            {/* CTA */}
            <div
              style={{ marginBottom: '100px' }}
              className={`transition-all duration-700 delay-300 ease-out
                ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90  px-8 py-6 text-base group"
                >
                  Explore Courses
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl  text-[#E2F310]/90 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/90 text-lg">
              Everything you need to know about ThryveZ
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border border-white/10 rounded-xl overflow-hidden transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${100 + index * 50}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white text-base sm:text-lg pr-4">
                    {index === 0 && (
                      <>
                        What is Thryve<span className="text-[#E2F310]"> Z</span>?
                      </>
                    )}

                    {index === 1 && (
                      <>
                        Who is Thryve<span className="text-[#E2F310]"> Z</span> for?
                      </>
                    )}

                    {index === 2 && (
                      <>
                        How is Thryve<span className="text-[#E2F310]"> Z</span>{' '}
                        <span className="text-[#E2F310]">different</span> from other learning platforms?
                      </>
                    )}

                    {index === 3 && (
                      <>
                        How long do I have <span className="text-[#E2F310]">access</span> to the material for?
                      </>
                    )}

                    {index === 4 && (
                      <>
                        Is Thryve<span className="text-[#E2F310]"> Z</span>{' '}
                        <span className="text-[#E2F310]">beginner-friendly</span>?
                      </>
                    )}

                    {index === 5 && (
                      <>
                        What kind of <span className="text-[#E2F310]">support</span> will I receive?
                      </>
                    )}

                    {index === 6 && (
                      <>
                        Are the courses self-paced or <span className="text-[#E2F310]">live</span>?
                      </>
                    )}

                    {index === 7 && (
                      <>
                        Will I receive a <span className="text-[#E2F310]">certificate</span>?
                      </>
                    )}

                    {index === 8 && (
                      <>
                        Does Thryve<span className="text-[#E2F310]"> Z</span> help with{' '}
                        <span className="text-[#E2F310]">career</span>{' '}
                        <span className="text-[#E2F310]">growth</span>?
                      </>
                    )}

                    {index === 9 && (
                      <>
                        Is Thryve<span className="text-[#E2F310]"> Z</span> just about courses?
                      </>
                    )}
                  </span>

                  <ChevronDown 
                    className={`h-5 w-5 text-white/90 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/90 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
