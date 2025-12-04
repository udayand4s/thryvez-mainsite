'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What makes Thryvez different from other learning platforms?',
    answer: 'Thryvez combines expert-led courses with an exclusive community of growth leaders. Unlike traditional platforms, you get direct access to practitioners who have scaled products at top companies, plus a peer network that accelerates your learning.',
  },
  {
    question: 'Who are the courses designed for?',
    answer: 'Our courses are designed for ambitious professionals - product managers, marketers, founders, and growth leaders who want to level up their skills. Whether you\'re early in your career or a seasoned executive, our content is crafted to deliver actionable insights.',
  },
  {
    question: 'How long do I have access to the courses?',
    answer: 'Once enrolled, you have lifetime access to the course content. This includes all future updates and new modules that get added. Learn at your own pace, revisit lessons anytime.',
  },
  {
    question: 'Is there a community or networking component?',
    answer: 'Absolutely. Community is at the core of ThryvezX. You get access to exclusive Slack channels, monthly AMAs with industry leaders, and networking events. Many of our members have found co-founders, mentors, and career opportunities through the community.',
  },
  {
    question: 'What if the course isn\'t right for me?',
    answer: 'We offer a 14-day money-back guarantee. If you\'re not satisfied with the course content or it doesn\'t meet your expectations, simply reach out and we\'ll process a full refund, no questions asked.',
  },
  {
    question: 'Do you offer team or enterprise plans?',
    answer: 'Yes, we offer custom packages for teams and organizations. Get in touch with us to discuss volume discounts, custom learning paths, and dedicated support for your team.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E2F310]/90 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/60 text-lg">
              Everything you need to know about Thryvez
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
                  <span className="font-semibold text-white text-base sm:text-lg pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown 
                    className={`h-5 w-5 text-white/60 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-white/60 leading-relaxed">
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
