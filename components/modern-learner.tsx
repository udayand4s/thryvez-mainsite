'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ModernLearner() {
   const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
  ];
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible1(true);
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible2(true);
      },
      { threshold: 0.2 }
    );

    if (section1Ref.current) observer1.observe(section1Ref.current);
    if (section2Ref.current) observer2.observe(section2Ref.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={section1Ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className={`space-y-4 sm:space-y-6 text-center lg:text-left transition-all duration-700 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E2F310]/90">
              Made for the
              <span className="block">modern learner</span>
            </h2>
            
            <p className=" sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 text-black">
              We don’t believe India has a talent problem. What we have is a bridge problem-the gap between ambition and opportunity. For every student who’s tired of outdated syllabuses. For every professional who feels stuck. For every dreamer who wants to do more than survive the competition
            </p>

            <div className="space-y-2 sm:space-y-3 inline-block text-left">
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Constant, ongoing support and Guidance
</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Learn directly from experienced professionals</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Network, collaborate, and grow with peers</span>
              </div>
            </div>
          </div>

          {/* <div className={`transition-all duration-700 delay-200 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mx-auto my-10 max-w-7xl rounded-2xl bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
              <ThreeDMarquee images={images} />
            </div>
          </div> */}

          <div className={`relative flex items-center justify-center transition-all duration-700 delay-200 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <div className="relative z-10 transform sm:-rotate-6 w-full max-w-[240px] sm:max-w-[256px]">
                <Card className="shadow-2xl border-4 sm:border-8 border-background">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-t-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-center gap-2">
                      <div className="w-12 sm:w-16 h-3 sm:h-4 bg-slate-950 rounded-full"></div>
                    </div>
                    <div className="p-4 sm:p-6 bg-white space-y-3 sm:space-y-4">
                      <div className="text-center">
                        <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1 sm:mb-2">Test your knowledge</h3>
                        <p className="text-xs text-slate-600">Question 9/16</p>
                      </div>
                      
                      <div className="w-full h-1.5 sm:h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-primary"></div>
                      </div>

                      <div className="aspect-video bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg flex items-center justify-center relative">
                        <div className="text-4xl sm:text-6xl">🧠</div>
                        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md">
                          <span className="text-xs sm:text-sm font-bold text-slate-900">83%</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <p className="text-xs text-slate-600 hidden sm:block">You need to analyze feedback. Which AI tool category would be most suitable?</p>
                        <div className="space-y-1 sm:space-y-1.5">
                          <div className="bg-slate-100 text-slate-700 text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded">Predictive Analytics</div>
                          <div className="bg-slate-100 text-slate-700 text-xs py-1.5 sm:py-2 px-2 sm:px-3 rounded">Business Intelligence</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-20 sm:transform sm:translate-y-8 w-full max-w-[280px] sm:max-w-[320px] hidden md:block">
                <Card className="shadow-2xl">
                  <CardContent className="p-4 sm:p-6 bg-white space-y-3 sm:space-y-4">
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base">Quiz scores</h3>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-slate-600 w-20 sm:w-32">LESSON NAME</span>
                          <span className="text-slate-600 w-10 sm:w-16">AVG</span>
                        </div>
                        <span className="text-slate-600 w-12 sm:w-20">DONE</span>
                      </div>
                      
                      <div className="flex items-center justify-between py-1.5 sm:py-2 border-b">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-slate-900 w-20 sm:w-32 text-xs sm:text-sm">Tool Categories</span>
                          <span className="text-slate-900 w-10 sm:w-16 text-xs sm:text-sm">72%</span>
                        </div>
                        <span className="text-slate-900 w-12 sm:w-20 text-xs sm:text-sm">42</span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 sm:py-2 border-b">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-slate-900 w-20 sm:w-32 text-xs sm:text-sm">Text Analysis</span>
                          <span className="text-slate-900 w-10 sm:w-16 text-xs sm:text-sm">53%</span>
                        </div>
                        <span className="text-slate-900 w-12 sm:w-20 text-xs sm:text-sm">36</span>
                      </div>

                      <div className="flex items-center justify-between py-1.5 sm:py-2">
                        <div className="flex items-center gap-2 sm:gap-4">
                          <span className="text-slate-900 w-20 sm:w-32 text-xs sm:text-sm">Review Systems</span>
                          <span className="text-slate-900 w-10 sm:w-16 text-xs sm:text-sm">83%</span>
                        </div>
                        <span className="text-slate-900 w-12 sm:w-20 text-xs sm:text-sm">27</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div> 
        </div>

        <div ref={section2Ref} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-16 sm:mt-20 lg:mt-24">
          <div className={`order-2 lg:order-1 relative flex items-center justify-center transition-all duration-700 delay-200 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
              <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px]">
                <Card className="shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-4 sm:p-6 space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="w-20 sm:w-24 h-2 sm:h-3 bg-white/90 rounded"></div>
                          <div className="w-14 sm:w-16 h-1.5 sm:h-2 bg-white/70 rounded"></div>
                        </div>
                        <div className="flex gap-1.5 sm:gap-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded"></div>
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/20 rounded"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-1">
                        <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-slate-200 rounded"></div>
                          <div className="flex-1 h-2 sm:h-3 bg-slate-200 rounded"></div>
                        </div>
                        <div className="aspect-video bg-gradient-to-br from-rose-500 to-orange-500 rounded relative overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-3xl sm:text-4xl">💪</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="bg-white/20 rounded-lg p-2 sm:p-3">
                          <div className="w-24 sm:w-32 h-2 sm:h-3 bg-white/90 rounded mb-0.5 sm:mb-1"></div>
                          <div className="w-20 sm:w-24 h-1.5 sm:h-2 bg-white/70 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="relative z-20 sm:transform sm:-translate-y-8 w-full max-w-[260px] sm:max-w-[288px] hidden md:block">
                <Card className="shadow-2xl">
                  <CardContent className="p-4 sm:p-6 bg-white space-y-3 sm:space-y-4">
                    <div className="border-b pb-3 sm:pb-4">
                      <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-0.5 sm:mb-1">Add content</h3>
                    </div>
                    
                    <div>
                      <p className="text-xs text-slate-600 mb-2 sm:mb-3 uppercase tracking-wide">CONTENT</p>
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">📝</div>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">🎥</div>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">📄</div>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">🔊</div>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">🖼️</div>
                        </div>
                        <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                          <div className="text-lg sm:text-2xl">📎</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-slate-600 mb-2 sm:mb-3 uppercase tracking-wide">TOOLS</p>
                      <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                        <div className="aspect-video bg-slate-100 rounded"></div>
                        <div className="aspect-video bg-slate-100 rounded"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className={`order-1 lg:order-2 space-y-4 sm:space-y-6 text-center lg:text-left transition-all duration-700 ${isVisible2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E2F310]/90">
              More time for
              <span className="block">what matters</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              This is our way of rewriting the script. Not just for us, but for an entire generation that refuses to settle. Welcome to Thryve Z. Where we don’t just prepare you for the future— we help you create it.
            </p>

            <div className="space-y-2 sm:space-y-3 inline-block text-left">
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Time to stop surviving and start thriving</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Time to choose passion over pressure</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Time to bet on yourself, not the algorithm</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Time to create opportunities instead of waiting for them</span>
              </div>
              <div className="flex items-start gap-2 sm:gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">Time to learn from mentors who’ve already cracked the code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
