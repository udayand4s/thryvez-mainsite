'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


export default function Psychology360Page() {
  const keywords = ["Cognitive Biases","Behavioral Psychology","Emotional Intelligence","Social Influence","Decision Making","Mental Models","Motivation","Therapeutic Techniques","Group Dynamics","Research Methods"];

  const curriculum = [
    {phase:"Phase 1",title:"Foundations of Human Behavior",bullets:["History & approaches (behavioral, cognitive, humanistic)","Research methods & ethical practice"],assignments:1,quizzes:1},
    {phase:"Phase 2",title:"Cognitive Processes",bullets:["Perception & attention","Memory & learning models"],assignments:1,quizzes:1},
    {phase:"Phase 3",title:"Emotion & Motivation",bullets:["Emotional regulation frameworks","Intrinsic vs extrinsic motivation"],assignments:1,quizzes:1},
    {phase:"Phase 4",title:"Social Influence",bullets:["Conformity & persuasion","Group behavior & roles"],assignments:1,quizzes:1},
    {phase:"Phase 5",title:"Applied Psychology",bullets:["Communication & empathy training","Behavior change interventions"],assignments:2,quizzes:1},
    {phase:"Phase 6",title:"Clinical Basics",bullets:["Common disorders overview","When to refer & ethical boundaries"],assignments:1,quizzes:1},
    {phase:"Phase 7",title:"Research & Metrics",bullets:["Designing small studies","Interpreting results & biases"],assignments:1,quizzes:1},
    {phase:"Phase 8",title:"Capstone Project",bullets:["Real-world case study","Implementation & evaluation"],assignments:2,quizzes:0}
  ];

  const mentors = [
    {name:"Dr. Nisha Rao",title:"Clinical Psychologist",creds:"PhD, 12 yrs practice"},
    {name:"Amit Varma",title:"Behavioral Scientist",creds:"Ex-Research Lead, 8 yrs"},
    {name:"Rhea Sen",title:"Organizational Psychologist",creds:"Coach & Consultant"}
  ];

  const faqs = [
    {q:"Who should take Psychology 360?",a:"Anyone curious about human behavior — working professionals, students, coaches, or founders who want applied psychology tools."},
    {q:"Do I need previous knowledge?",a:"No. We begin with foundations and progressively build to applied skills and a capstone."},
    {q:"How is certification awarded?",a:"Complete lessons, assignments and a capstone project. A verified certificate is issued on passing evaluation."}
  ];

  const [openC, setOpenC] = useState<number|null>(null);
  const [openF, setOpenF] = useState<number|null>(null);

  return (
    
    <div className="bg-black text-white antialiased">
      {/* HERO */}
      <header className="relative overflow-hidden min-h-[95vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-60 -left-60 h-[800px] w-[800px] rounded-full bg-[#e2f310]/40 blur-[160px] animate-pulse-slow"/>
          <div className="absolute top-0 right-[-300px] h-[900px] w-[900px] rounded-full bg-[#e2f310]/30 blur-[200px]"/>
          <div className="absolute bottom-[-300px] left-1/4 h-[800px] w-[800px] rounded-full bg-[#e2f310]/25 blur-[180px]"/>
          <div className="absolute top-1/2 right-1/4 h-[600px] w-[600px] rounded-full bg-[#e2f310]/20 blur-[220px]"/>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"/>
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',backgroundSize:'50px 50px'}}/>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}}>
              <motion.span className="inline-block px-5 py-2 rounded-full text-sm bg-[#e2f310]/20 text-[#e2f310] font-medium border border-[#e2f310]/30 backdrop-blur-sm" initial={{scale:0.9}} animate={{scale:1}} transition={{delay:0.2}}>
                ✨ Applied Psychology Program
              </motion.span>
              <h1 className="mt-8 text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Psychology 360<br/>
                <span className="text-[#e2f310]">Understand people.</span><br/>
                <span className="text-white/90">Deeply.</span>
              </h1>
              <p className="mt-8 text-xl text-white/80 max-w-xl leading-relaxed">Learn why people think, feel and act the way they do. A cohort-based, applied psychology program built with real-world cases, assignments and expert mentorship.</p>
              
              <div className="mt-8 flex gap-8">
                <div><div className="text-3xl font-bold text-[#e2f310]">8</div><div className="text-sm text-white/60">Phases</div></div>
                <div><div className="text-3xl font-bold text-[#e2f310]">12</div><div className="text-sm text-white/60">Weeks</div></div>
                <div><div className="text-3xl font-bold text-[#e2f310]">100+</div><div className="text-sm text-white/60">Students</div></div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-[#e2f310] to-[#d4e20f] hover:from-[#d4e20f] hover:to-[#e2f310] text-black px-8 py-6 text-base font-semibold shadow-lg shadow-[#e2f310]/20 transition-all hover:shadow-xl hover:shadow-[#e2f310]/30 hover:scale-105">
                  Apply now <ArrowRight className="ml-2 h-5 w-5"/>
                </Button>
                <Button variant="outline" className="border-white/30 hover:bg-white/10 px-8 py-6 backdrop-blur-sm">Talk to an expert</Button>
              </div>
            </motion.div>

            <motion.div className="hidden md:block" initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:0.8,delay:0.3}}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#e2f310]/30 to-orange-400/30 blur-3xl"/>
                <div className="relative rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-2xl shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#e2f310] to-orange-400 flex items-center justify-center"><Star className="h-5 w-5 text-black"/></div>
                    <div><div className="text-xs text-white/60 uppercase tracking-wider">Inside the program</div><div className="text-lg font-semibold">Real-life psychology cases</div></div>
                  </div>
                  <div className="space-y-4">
                    {[{c:'#e2f310',w:'w-full'},{c:'orange-400',w:'w-5/6'},{c:'purple-400',w:'w-4/6'}].map((d,i)=>(
                      <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                        <div className={`h-2 w-2 rounded-full bg-${d.c} group-hover:scale-125 transition-transform`}/>
                        <div className={`h-3 ${d.w} rounded-full bg-gradient-to-r from-white/20 to-transparent`}/>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div className="flex -space-x-3">{[1,2,3,4].map(i=><div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-[#e2f310] to-orange-400 border-2 border-black"/>)}</div>
                    <div className="text-sm text-white/70">+200 students enrolled</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* KEYWORDS */}
      <section className="py-8 border-y border-white/10 bg-gradient-to-r from-transparent via-white/5 to-transparent">
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-key-scroll">
            {[...keywords,...keywords,...keywords].map((k,i)=>(
              <div key={i} className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm whitespace-nowrap hover:border-[#e2f310]/50 hover:bg-white/15 transition-all group" style={{minWidth:180}}>
                <div className="h-1.5 w-1.5 rounded-full bg-[#e2f310] group-hover:scale-150 transition-transform"/>{k}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 relative">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-[#e2f310]/5 blur-[100px]"/>
        
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Your Learning <span className="text-[#e2f310]">Journey</span></h2>
            <p className="text-white/70 text-lg max-w-2xl">Eight carefully crafted phases that take you from foundations to real-world application</p>
          </div>

          <div className="grid md:grid-cols-[240px_1fr] gap-8">
            {/* Phase Sidebar */}
            <div className="space-y-2">
              {curriculum.map((c,idx)=>(
                <button
                  key={c.phase}
                  onClick={()=>setOpenC(idx)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${openC===idx?'bg-white/10 text-white':'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
                >
                  <div className="text-xs text-white/60 mb-1">{c.phase}</div>
                  <div className="text-sm font-medium">{c.title}</div>
                </button>
              ))}
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
                    <div className="h-12 w-12 rounded-xl bg-[#e2f310] flex items-center justify-center font-bold text-xl text-black">
                      {openC+1}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{curriculum[openC].title}</div>
                      <div className="text-sm text-white/60">{curriculum[openC].phase}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-white/60 mb-4 uppercase tracking-wider">What will you learn?</h3>
                    <ul className="space-y-3">
                      {curriculum[openC].bullets.map((b,i)=>(
                        <li key={i} className="flex items-start gap-3 text-white/80">
                          <CheckCircle className="h-5 w-5 text-[#e2f310] mt-0.5 flex-shrink-0"/>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#e2f310]/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-[#e2f310]"/>
                      </div>
                      <div>
                        <div className="text-sm text-white/60">Assignments</div>
                        <div className="font-semibold">{curriculum[openC].assignments}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-[#e2f310]/20 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-[#e2f310]"/>
                      </div>
                      <div>
                        <div className="text-sm text-white/60">Quizzes</div>
                        <div className="font-semibold">{curriculum[openC].quizzes}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {openC===null && (
                <div className="h-full flex items-center justify-center text-white/40">
                  Select a phase to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MENTORS */}
      <section className="py-20 border-t border-white/6 relative">
        <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[120px]"/>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Your <span className="bg-gradient-to-r from-[#e2f310] to-orange-400 bg-clip-text text-transparent">Mentors</span></h2>
            <p className="text-white/70 text-lg">Expert practitioners who bring real-world psychology to life</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {mentors.map((m,i)=>(
              <motion.div key={m.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}}>
                <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/10 hover:from-white/15 hover:to-white/10 transition-all group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="relative mb-4">
                        <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-[#ffb347] to-[#e2f310] flex items-center justify-center text-black font-bold text-2xl shadow-xl">{m.name.split(" ").map(n=>n[0]).slice(0,2).join("")}</div>
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#ffb347] to-[#e2f310] blur-xl opacity-0 group-hover:opacity-50 transition-opacity"/>
                      </div>
                      <div className="font-semibold text-lg">{m.name}</div>
                      <div className="text-sm text-[#e2f310] mt-1">{m.title}</div>
                      <div className="text-xs text-white/50 mt-2">{m.creds}</div>
                    </div>
                    <p className="text-white/70 text-sm mb-6 leading-relaxed">Works with practical case-studies and hands-on coaching to help you master applied psychology.</p>
                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 text-sm border-white/20 hover:bg-white/10">View profile</Button>
                      <Button className="flex-1 bg-gradient-to-r from-[#e2f310] to-orange-400 hover:from-orange-400 hover:to-[#e2f310] text-black text-sm font-semibold">Book session</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="py-20 relative">
        <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-[#e2f310]/5 blur-[100px]"/>
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Earn Your <span className="bg-gradient-to-r from-[#e2f310] to-orange-400 bg-clip-text text-transparent">Certification</span></h2>
            <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">Complete all lessons, assignments, and submit a capstone. Upon evaluation you receive a verified Psychology 360 certificate — ideal for portfolios, LinkedIn and resumes.</p>
            <div className="mt-12 inline-flex items-center gap-8 bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-3xl border border-white/20 backdrop-blur-xl shadow-2xl">
              <div className="relative">
                <div className="h-28 w-28 rounded-2xl bg-gradient-to-br from-[#e2f310]/20 to-orange-400/20 border border-[#e2f310]/30 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center"><Sparkles className="h-6 w-6 text-[#e2f310] mx-auto mb-2"/><div className="text-xs text-white/60 uppercase tracking-wider">Verified</div><div className="text-sm font-bold text-[#e2f310]">Psychology 360</div></div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#e2f310] to-orange-400 blur-2xl opacity-30"/>
              </div>
              <div className="text-left">
                <div className="text-xs text-white/60 uppercase tracking-wider mb-2">Official Credential</div>
                <div className="text-2xl font-bold mb-1">Applied Psychology Certificate</div>
                <div className="text-sm text-white/70">Digital badge + printable certificate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/6 relative">
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-orange-400/5 blur-[120px]"/>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to join <span className="bg-gradient-to-r from-[#e2f310] to-orange-400 bg-clip-text text-transparent">Psychology 360?</span></h2>
              <p className="text-white/70 text-lg max-w-lg leading-relaxed">Live weekly learning, exclusive community perks and project-based evaluations. Start building applied psychology skills today.</p>
            </motion.div>
            <motion.div initial={{opacity:0,x:20}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">
                <div className="mb-6">
                  <div className="text-sm text-white/60 mb-4 uppercase tracking-wider">Membership includes</div>
                  <ul className="text-sm text-white/80 space-y-3">
                    {["Weekly live learning (AI, product & marketing)","In-person curated monthly events in 11+ cities","AI credits & perks from top brands worth ₹24L","10 self-paced product & marketing programs","5,000+ member community","200+ interview prep lessons"].map((t,i)=><li key={i} className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-[#e2f310] mt-0.5 flex-shrink-0"/>{t}</li>)}
                  </ul>
                </div>
                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-sm text-white/60 line-through">₹24,999</div>
                      <div className="text-5xl font-bold"><span className="bg-gradient-to-r from-[#e2f310] to-orange-400 bg-clip-text text-transparent">₹19,999</span><span className="text-base text-white/70 font-normal">/year</span></div>
                    </div>
                    <div className="px-4 py-2 rounded-xl bg-[#e2f310]/20 text-[#e2f310] text-sm font-semibold">Save 20%</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-[#e2f310] to-orange-400 hover:from-orange-400 hover:to-[#e2f310] text-black text-base font-semibold py-6 shadow-lg shadow-[#e2f310]/20 hover:shadow-xl hover:shadow-[#e2f310]/30">Explore all inclusions <ArrowRight className="ml-2 h-5 w-5"/></Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((f,i)=>(
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden">
                <button className="w-full px-6 py-5 flex justify-between items-center text-left" onClick={()=>setOpenF(openF===i?null:i)}>
                  <span className="font-medium">{f.q}</span>
                  <span className="text-[#e2f310] text-xl">{openF===i?"−":"+"}</span>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openF===i?"max-h-40 pb-5":"max-h-0"}`}>
                  <p className="text-white/70">{f.a}</p>
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
  );
}