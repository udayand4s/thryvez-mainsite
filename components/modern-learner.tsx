'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function ModernLearner() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Made for the
              <span className="block">modern learner</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              You're serious about education. We're serious about engaging your students and turning them into loyal customers.
            </p>

            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Innovative student dashboard</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Highly-rated mobile app</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Drip content</span>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
            <div className="relative z-10 transform -rotate-6 scale-75 sm:scale-90 lg:scale-100">
              <Card className="w-48 sm:w-56 lg:w-64 shadow-2xl border-4 sm:border-8 border-background">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-t-lg px-4 py-3 flex items-center justify-center gap-2">
                    <div className="w-16 h-4 bg-slate-950 rounded-full"></div>
                  </div>
                  <div className="p-6 bg-white space-y-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-slate-900 mb-2">Test your knowledge</h3>
                      <p className="text-xs text-slate-600">Question 9/16</p>
                    </div>
                    
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-primary"></div>
                    </div>

                    <div className="aspect-video bg-gradient-to-br from-emerald-800 to-emerald-900 rounded-lg flex items-center justify-center relative">
                      <div className="text-6xl">🧠</div>
                      <div className="absolute bottom-2 right-2 bg-white px-3 py-1 rounded-md">
                        <span className="text-sm font-bold text-slate-900">83%</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs text-slate-600">You need to analyze feedback. Which AI tool category would be most suitable?</p>
                      <div className="space-y-1.5">
                        <div className="bg-slate-100 text-slate-700 text-xs py-2 px-3 rounded">Predictive Analytics Software</div>
                        <div className="bg-slate-100 text-slate-700 text-xs py-2 px-3 rounded">Business Intelligence Dashboard</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative z-20 transform translate-y-8 scale-75 sm:scale-90 lg:scale-100">
              <Card className="w-64 sm:w-72 lg:w-80 shadow-2xl">
                <CardContent className="p-6 bg-white space-y-4">
                  <h3 className="font-semibold text-slate-900">Quiz scores</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-4">
                        <span className="text-slate-600 w-32">LESSON NAME</span>
                        <span className="text-slate-600 w-16">AVG</span>
                      </div>
                      <span className="text-slate-600 w-20">COMPLETED</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center gap-4">
                        <span className="text-slate-900 w-32 text-sm">Tool Categories</span>
                        <span className="text-slate-900 w-16 text-sm">72%</span>
                      </div>
                      <span className="text-slate-900 w-20 text-sm">42</span>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b">
                      <div className="flex items-center gap-4">
                        <span className="text-slate-900 w-32 text-sm">Text Analysis</span>
                        <span className="text-slate-900 w-16 text-sm">53%</span>
                      </div>
                      <span className="text-slate-900 w-20 text-sm">36</span>
                    </div>

                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-4">
                        <span className="text-slate-900 w-32 text-sm">Review Systems</span>
                        <span className="text-slate-900 w-16 text-sm">83%</span>
                      </div>
                      <span className="text-slate-900 w-20 text-sm">27</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-24">
          <div className="order-2 lg:order-1 relative flex items-center justify-center gap-3 sm:gap-6 px-4 sm:px-0">
            <div className="relative z-10 scale-75 sm:scale-90 lg:scale-100">
              <Card className="w-64 sm:w-72 lg:w-80 shadow-2xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="w-24 h-3 bg-white/90 rounded"></div>
                        <div className="w-16 h-2 bg-white/70 rounded"></div>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 bg-white/20 rounded"></div>
                        <div className="w-8 h-8 bg-white/20 rounded"></div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 bg-slate-200 rounded"></div>
                        <div className="flex-1 h-3 bg-slate-200 rounded"></div>
                      </div>
                      <div className="aspect-video bg-gradient-to-br from-rose-500 to-orange-500 rounded relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white text-4xl">💪</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="bg-white/20 rounded-lg p-3">
                        <div className="w-32 h-3 bg-white/90 rounded mb-1"></div>
                        <div className="w-24 h-2 bg-white/70 rounded"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative z-20 transform -translate-y-8 scale-75 sm:scale-90 lg:scale-100">
              <Card className="w-60 sm:w-64 lg:w-72 shadow-2xl">
                <CardContent className="p-6 bg-white space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="font-semibold text-slate-900 mb-1">Add content</h3>
                  </div>
                  
                  <div>
                    <p className="text-xs text-slate-600 mb-3 uppercase tracking-wide">CONTENT</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">📝</div>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">🎥</div>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">📄</div>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">🔊</div>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">🖼️</div>
                      </div>
                      <div className="aspect-square bg-slate-100 rounded flex items-center justify-center">
                        <div className="text-2xl">📎</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600 mb-3 uppercase tracking-wide">EDUCATIONAL TOOLS</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-slate-100 rounded"></div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600 mb-3 uppercase tracking-wide">MARKETING TOOLS</p>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-video bg-slate-100 rounded"></div>
                      <div className="aspect-video bg-slate-100 rounded"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              More time for
              <span className="block">what matters</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              We automate the operational headaches so you can keep growing your business without adding busywork.
            </p>

            <div className="space-y-3 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Drag-and-drop course builders</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Built-in AI creation and translation tools</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Sales and VAT tax handling</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Tax filing and affiliate payouts</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-left">Assisted migration and custom support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
