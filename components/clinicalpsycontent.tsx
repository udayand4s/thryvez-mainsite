'use client'
import { CheckCircle, ArrowRight, Star, Sparkles, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CourseWhySection } from '@/components/course-why-section';
import { Boxes } from '@/components/ui/background-boxes';
import Link from 'next/link';
import { TalkToExpertModal } from "./TalkToExpertModal";
import { useRouter } from 'next/navigation';

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const AUTOPLAY_INTERVAL = 6000; // ms

/*---------TESTIMONIALS--------------*/

const testimonials = [
  {
    quote:
      "As a beginner, I thought psychology would be tough, but the sessions were clear and interactive. Within two classes I started enjoying learning.",
    name: "Madhubala",
    college: "Yenepoya Medical College",
    year: "",
  },
  {
    quote:
      "The sessions were very useful and engaging. Topics like emotions, personality disorders, and attachment styles made me curious to learn more.",
    name: "A Mithinkumar",
    college: "Madurai Medical College",
    year: "2030",
  },
  {
    quote:
      "Even though I was new to some terms, the mentor explained everything well. I gained a better understanding of the mind and people.",
    name: "Nikita R",
    college: "St. John’s Medical College",
    year: "2030",
  },
  {
    quote:
      "It was a wonderful experience. I learnt a lot about myself and the people around me.",
    name: "Suhaas N",
    college: "Bangalore Medical College",
    year: "2030",
  }

];


export default function ClinicalPsychologyPage() {
  const router = useRouter();
  const [expertOpen, setExpertOpen] = useState(false);

  const [preview, setPreview] = useState<null | "certificate" | "lor">(null);
  const keywords = [
    "Clinical Thinking",
    "Case Vignettes",
    "Diagnostic Systems",
    "Mental Status Examination",
    "Distress vs Disorder",
    "4P Case Formulation",
    "Film-Based Analysis",
    "Ethical Practice",
    "Therapy Approaches",
    "Clinical Career Pathways",
  ];
  

  const curriculum = [
    {
      phase: "Week 1",
      title: "Foundations of Clinical Thinking",
      bullets: [
        "What clinical psychologists actually do (beyond stereotypes)",
        "Thinking clinically without over-diagnosing",
        "Introduction to case vignettes and ethical boundaries",
        "Understanding distress in context, not labels",
      ],
      assignments: 1,
      quizzes: 0,
    },
    {
      phase: "Week 2",
      title: "Diagnostic Systems & Disorders",
      bullets: [
        "Overview of DSM & ICD systems",
        "Differentiating distress vs disorder",
        "Film-based symptom and behaviour analysis",
        "Understanding diagnosis as a tool, not a tag",
      ],
      assignments: 1,
      quizzes: 0,
    },
    {
      phase: "Week 3",
      title: "Neurodevelopmental Disorders & Case Formulation",
      bullets: [
        "Introduction to neurodevelopmental conditions",
        "Applying the 4P model (Predisposing, Precipitating, Perpetuating, Protective)",
        "Building structured case formulations",
        "Common formulation mistakes and clinical reasoning tricks",
      ],
      assignments: 1,
      quizzes: 0,
    },
    {
      phase: "Week 4",
      title: "Practice, Therapy & Clinical Careers",
      bullets: [
        "Mental Status Examination (MSE) basics",
        "Introduction to therapy approaches and roles",
        "Mock therapy role-plays and applied discussions",
        "Career pathways in clinical psychology & allied fields",
      ],
      assignments: 1,
      quizzes: 0,
    },
  ];
  

  const mentors = [
    {name:"Dr. Nisha Rao",title:"Clinical Psychologist",creds:"PhD, 12 yrs practice"},
    {name:"Amit Varma",title:"Behavioral Scientist",creds:"Ex-Research Lead, 8 yrs"},
    {name:"Rhea Sen",title:"Organizational Psychologist",creds:"Coach & Consultant"}
  ];

  const faqs = [
    {
      q: "Who is this course for?",
      a: "Psychology students, CUET aspirants, and anyone seeking a structured, practical introduction to mental health and clinical thinking.",
    },
    {
      q: "Do we diagnose real people in this course?",
      a: "No. The course strongly emphasizes ethical practice and learning without casual or real-life diagnosis.",
    },
    {
      q: "Is this suitable before a Master’s in Clinical Psychology?",
      a: "Yes. It is designed to build clarity, confidence, and foundational clinical reasoning before higher studies.",
    },
  ];
  

  const [openC, setOpenC] = useState<number>(0);
  const [openF, setOpenF] = useState<number|null>(null);

  return (
    <>
    
      <div className="bg-black text-white antialiased">
        {/* HERO */}
        <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-black">
          {/* BACKGROUND */}
          <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
          <Boxes />

          <div className="container mx-auto px-6 lg:px-10 relative z-10">
            <div className="max-w-6xl mx-auto py-24 lg:py-32">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center flex flex-col items-center"
              >
                {/* EYEBROW */}
                <span className="text-white/90 text-xs uppercase tracking-[0.35em] mb-4">
                  Cohort-based Applied Program
                </span>

                {/* HEADLINE */}
                <h1 className="text-white text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-[1.05] tracking-tight mb-2">
                  Clinical Psychology
                </h1>

                <h2 className="text-[#e2f310] text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-[1] tracking-tight mb-6">
                  Concepts, Cases <span className="text-white/90">& Careers</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="max-w-3xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed mb-10">
                  This course introduces clinical psychology through real-world cases,
                  films, and practical frameworks , without over-diagnosing or
                  oversimplifying mental distress.
                </p>

                <p className="max-w-3xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed mb-10">
                  Learn how clinical psychologists think, analyse, and work through
                  guided discussions, role-plays, case formulation, and ethical practice.
                </p>

                {/* STATS */}
                <div className="flex gap-10 mb-12">
                  <div>
                    <div className="text-3xl text-[#e2f310]">4</div>
                    <div className="text-sm text-white/90">Weeks</div>
                  </div>
                  <div>
                    <div className="text-3xl text-[#e2f310]">8</div>
                    <div className="text-sm text-white/90">Phases</div>
                  </div>
                  <div>
                    <div className="text-3xl text-[#e2f310]">1900+</div>
                    <div className="text-sm text-white/90">Learners</div>
                  </div>
                </div>


                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base group"
                    onClick={() => router.push('/lms')}
                  >
                    Apply now
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 px-8 py-6"
                    onClick={() => setExpertOpen(true)}
                  >
                    Talk to an expert
                  </Button>
                </div>
              </motion.div>

              {/* KEYWORDS / MARQUEE */}
              <div className="mt-20">
                <div className="relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

                  <div className="flex animate-key-scroll gap-4">
                    {[...keywords, ...keywords, ...keywords].map((k, i) => (
                      <div
                        key={i}
                        className="
                          inline-flex items-center gap-2
                          px-5 py-3
                          rounded-xl
                          border border-white/10
                          bg-white/[0.04]
                          backdrop-blur-sm
                          text-white/90 text-sm
                          whitespace-nowrap
                          hover:border-[#e2f310]/50
                          transition-all
                        "
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#e2f310]" />
                        {k}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
        </section>


        {/* CURRICULUM */}
        <section className="py-20 relative">
          <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#e2f310]/5 blur-[100px]"/>
          
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl  mb-4">Your Learning <span className="text-[#e2f310]">Journey</span></h2>
              <p className="text-white/90 text-lg max-w-2xl">Eight carefully crafted phases that take you from foundations to real-world application</p>
            </div>

            <div className="grid md:grid-cols-[240px_1fr] gap-8">
              {/* Phase Sidebar */}
              <div className="relative pl-6">
                {/* The Background Track */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 rounded-full" />

                {/* The Animated Progress Fill */}
                <motion.div 
                  className="absolute left-0 top-0 w-1 bg-[#e2f310] rounded-full shadow-[0_0_15px_rgba(226,243,16,0.5)]"
                  initial={false}
                  animate={{ 
                    height: `${((openC + 1) / curriculum.length) * 100}%` 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />

                <div className="space-y-2">
                  {curriculum.map((c, idx) => (
                    <button
                      key={c.phase}
                      onClick={() => setOpenC(idx)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all relative group ${
                        openC === idx ? 'bg-white/10 text-white' : 'text-white/90 hover:text-white/90 hover:bg-white/5'
                      }`}
                    >
                      {/* Optional: Indicator Dot per Phase */}
                      <div className={`absolute -left-[27px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-black transition-colors duration-300 ${
                        openC >= idx ? 'bg-[#e2f310]' : 'bg-neutral-800'
                      }`} />
                      
                      <div className="text-xs text-white/90 mb-1">{c.phase}</div>
                      <div className="text-sm font-medium">{c.title}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Panel */}
              <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-8 min-h-[500px]">
                {openC!==null && (
                  <motion.div
                    key={openC}
                    initial={{opacity:0,y:10}}
                    animate={{opacity:1,y:0}}
                    transition={{duration:0.3}}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-[#e2f310] flex items-center justify-center  text-xl text-black">
                        {openC+1}
                      </div>
                      <div>
                        <div className="text-2xl ">{curriculum[openC].title}</div>
                        <div className="text-sm text-white/90">{curriculum[openC].phase}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-sm  text-white/90 mb-4 uppercase tracking-wider">What will you learn?</h3>
                      <ul className="space-y-6">
                        {curriculum[openC].bullets.map((b, i) => (
                          <li key={i} className="space-y-2">

                            {/* MAIN LESSON */}
                            <div className="flex items-start gap-3 text-white/90">
                              <CheckCircle className="h-5 w-5 text-[#e2f310] mt-0.5 flex-shrink-0" />
                              <span className="leading-relaxed">{b}</span>
                            </div>

                            {/* SUB ITEM / NOTES / ASSIGNMENT */}
                            <div className="flex items-start gap-3 pl-8 text-white/90">
                              <ClipboardCheck className="h-4 w-4 text-[#e2f310]/80 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">
                                {b}
                              </span>
                            </div>

                          </li>
                        ))}
                      </ul>

                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#e2f310]/20 flex items-center justify-center">
                          <ClipboardCheck className="h-5 w-5 text-[#e2f310]"/>
                        </div>
                        <div>
                          <div className="text-sm text-white/90">Assignments</div>
                          <div className="">{curriculum[openC].assignments}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-[#e2f310]/20 flex items-center justify-center">
                          <CheckCircle className="h-5 w-5 text-[#e2f310]"/>
                        </div>
                        <div>
                          <div className="text-sm text-white/90">Quizzes</div>
                          <div className="">{curriculum[openC].quizzes}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {openC===null && (
                  <div className="h-full flex items-center justify-center text-white/90">
                    Select a phase to view details
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* MENTORS */}
        <section className="py-20 border-t border-white/6 relative">
          <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl  mb-4">
                Meet Your <span className="text-[#e2f310]">Mentor</span>
              </h2>
            </div>

            <Card className="bg-black border border-white/10 backdrop-blur-xl">
            <CardContent className="p-8 grid md:grid-cols-[500px_1fr] gap-20 items-start">
                {/* Avatar */}
                <img
                  src='/sanjivani.png'
                  className="w-full h-300 object-cover rounded-2xl mb-4"
                />

                {/* Bio */}
                <div>
                  <h3 className="text-2xl mb-1">Sanjivani</h3>
                  <p className="text-white/90 mb-4">MA Clinical Psychology</p>

                  <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {`Sanjivani is a psychologist and art therapy practitioner with experience
                  supporting individuals with relationship concerns, anxiety, everyday stress,
                  anger management, time management, and work–life balance.

                  As a clinical psychology mentor, she focuses on applied learning, ethical
                  practice, and reflective clinical thinking. She conducts online and offline
                  workshops, facilitates art-based therapeutic experiences, and actively mentors
                  students on academic pathways, professional development, and early career
                  decisions in psychology and allied mental health fields.`}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "Clinical Psychology",
                      "Case Formulation",
                      "Mental Health",
                      "Art Therapy",
                      "Ethical Practice",
                    ].map((e) => (
                      <span
                        key={e}
                        className="px-3 py-1 rounded-full text-xs bg-[#e2f310]/20 text-[#e2f310]"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <CourseWhySection />

        <section className="relative w-full py-24 bg-black overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
      
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl text-white mb-3">
                What Our Learners Say
              </h2>
              <p className="text-white/60 max-w-xl mx-auto">
                Honest feedback from students across colleges and disciplines
              </p>
            </div>
      
            {/* TESTIMONIALS , TOP */}
            <div className="relative h-[34rem] overflow-hidden">
            <InfiniteMovingCards
              items={testimonials.map(t => ({
                quote: t.quote,
                name: t.name,
                title: `${t.college} · ${t.year}`,
              }))}
              direction="left"
              speed="slow"
              pauseOnHover
              className="pt-6"
            />
            </div>
      
          </div>
        </section>
        

        {/* CERTIFICATION */}
        <section className="py-20 relative">
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#e2f310]/5 blur-[100px]"/>
          <div className="max-w-5xl mx-auto px-6 text-center relative">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <h2 className="text-4xl md:text-5xl  mb-4">Earn Your <span className="text-[#e2f310]">Certification</span></h2>
              <p className="mt-4 text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">Complete all lessons, assignments, and submit a capstone. Upon evaluation you receive a verified Psychology 360 certificate , ideal for portfolios, LinkedIn and resumes.</p>
            </motion.div>
          </div>
          {/* SAMPLE CERTIFICATE & LOR */}
          <section className="mt-24 relative">
            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Certificate */}
              <motion.button
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPreview("certificate")}
                className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur-xl focus:outline-none"
              >
                {/* Image */}
                <img
                  src="/certificates/Certificate (2).png"
                  alt="Sample Certificate"
                  className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest text-white/60">
                    Sample Credential
                  </span>
                  <h3 className="text-2xl text-white mt-1">
                    Course Completion Certificate
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                    <Sparkles className="w-4 h-4 text-[#e2f310]" />
                    Click to preview
                  </div>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e2f310]/10 via-transparent to-[#e2f310]/10" />
                </div>
              </motion.button>

              {/* LOR */}
              <motion.button
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPreview("lor")}
                className="group relative rounded-3xl overflow-hidden border border-white/15 bg-white/[0.04] backdrop-blur-xl focus:outline-none"
              >
                {/* Image */}
                <img
                  src="/certificates/Sample- LOR.png"
                  alt="Sample Letter of Recommendation"
                  className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-xs uppercase tracking-widest text-white/60">
                    Sample Endorsement
                  </span>
                  <h3 className="text-2xl text-white mt-1">
                    Letter of Recommendation
                  </h3>

                  <div className="mt-4 flex items-center gap-2 text-sm text-white/70">
                    <Star className="w-4 h-4 text-[#e2f310]" />
                    Issued by your mentor
                  </div>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#e2f310]/10 via-transparent to-[#e2f310]/10" />
                </div>
              </motion.button>
            </div>
          </section>


        </section>

        {/* CTA */}
        <section className="py-20 border-t border-white/6 relative">
          <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-400/5 blur-[120px]"/>
          <div className="max-w-6xl mx-auto px-6 relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
                <h2 className="text-4xl md:text-5xl mb-6">
                  Ready to explore <span className="text-[#e2f310]">Clinical Psychology?</span>
                </h2>
                <p className="text-white/90 text-lg max-w-lg leading-relaxed">Live weekly learning, exclusive community perks and project-based evaluations. Start building applied psychology skills today.</p>
              </motion.div>
              <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                  <div className="mb-6">
                    <div className="text-sm text-white/90 mb-4 uppercase tracking-wider">Membership includes</div>
                    <ul className="text-sm text-white/90 space-y-3">
                      {["Weekly live learning (AI, product & marketing)","In-person curated monthly events in 11+ cities","AI credits & perks from top brands worth ₹24L","10 self-paced product & marketing programs","5,000+ member community","200+ interview prep lessons"].map((t,i)=><li key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#e2f310] mt-0.5 flex-shrink-0"/>{t}</li>)}
                    </ul>
                  </div>
                  <div className="border-t border-white/10 pt-6">
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <div className="text-sm text-white/90 line-through">₹9,999</div>
                        <div className="text-5xl "><span className=" text-[#e2f310]">₹7,999</span><span className="text-base text-white/90 font-normal"></span></div>
                      </div>
                      <div className="px-4 py-2 rounded-xl bg-[#e2f310]/20 text-[#e2f310] text-sm ">Save 20%</div>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-[#e2f310] to-orange-400 hover:from-orange-400 hover:to-[#e2f310] text-black text-base  py-6 shadow-lg shadow-[#e2f310]/20 hover:shadow-xl hover:shadow-[#e2f310]/30"
                    onClick={() => {window.location.href = 'https://learn.thryvez.in/lms'}}
                    >
                      Explore all inclusions <ArrowRight className="ml-2 h-5 w-5"/>
                      </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl  mb-8">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((f,i)=>(
                <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                  <button className="w-full px-6 py-5 flex justify-between items-center text-left" onClick={()=>setOpenF(openF===i?null:i)}>
                    <span className="font-medium">{f.q}</span>
                    <span className="text-[#e2f310] text-xl">{openF===i?"−":"+"}</span>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openF===i?"max-h-40 pb-5":"max-h-0"}`}>
                    <p className="text-white/90">{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

    

        <style>{`
          @keyframes key-scroll{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}
          .animate-key-scroll{display:flex;width:max-content;animation:key-scroll 40s linear infinite}
          .animate-key-scroll:hover{animation-play-state:paused}
          @keyframes pulse-slow{0%,100%{opacity:1}50%{opacity:0.7}}
          .animate-pulse-slow{animation:pulse-slow 4s ease-in-out infinite}
          @media(max-width:640px){.animate-key-scroll{animation-duration:60s}}
        `}</style>
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {preview && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setPreview(null)}
        >
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            src={
              preview === "certificate"
                ? "/certificates/Certificate (2).png"
                : "/certificates/Sample- LOR.png"
            }
            alt="Preview"
            className="max-h-[90vh] max-w-[95vw] rounded-xl shadow-2xl border border-white/10"
          />
        </div>
      )}


      <TalkToExpertModal
        open={expertOpen}
        onOpenChange={setExpertOpen}
      />
    </>
  );
}
