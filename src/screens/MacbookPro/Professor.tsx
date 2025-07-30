import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { GraduationCap, BookOpen, Star, Award, Users, ChevronRight, ExternalLink, Quote, Heart, TrendingUp, Zap } from "lucide-react";

export const Professor = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const professorData = {
    courses: [
      {
        code: "THTR 101",
        title: "Introduction to Theatre",
        description: "Foundational course exploring theatre history, dramatic literature, and performance techniques.",
        credits: 4,
        level: "Beginner",
        grade: "A/A+"
      },
      {
        code: "THTR 152", 
        title: "Acting Fundamentals",
        description: "Basic acting techniques including scene study, character development, and stage presence.",
        credits: 3,
        level: "Beginner",
        grade: "A/A+"
      },
      {
        code: "THTR 252B",
        title: "Advanced Acting Workshop",
        description: "Intensive workshop focusing on advanced performance techniques and professional skills.",
        credits: 3,
        level: "Intermediate",
        grade: "A"
      },
      {
        code: "COMM 401",
        title: "Advanced Public Speaking",
        description: "Masterclass in professional presentation skills and audience engagement techniques.",
        credits: 3,
        level: "Advanced",
        grade: "A"
      }
    ],
    education: [
      { degree: "Ph.D in Performance Studies", institution: "Columbia University", year: "2008" },
      { degree: "MFA - USC", institution: "University of Southern California", year: "2005" },
      { degree: "MFA in Creative Writing", institution: "New York University", year: "2004" },
      { degree: "BA in Theater Arts", institution: "University of California", year: "2001" }
    ],
    rateMyProfessors: {
      rating: 4.8,
      totalReviews: 17,
      wouldTakeAgain: 95,
      difficulty: 2.1,
      tags: ["Participation matters", "Gives good feedback", "Inspirational", "Caring", "Amazing lectures"],
      reviews: [
        {
          text: "HE LITERALLY CHANGED MY LIFE. Prof Johnson is like a father to all his students. His energy is infectious and he makes every class enjoyable.",
          course: "THTR 101",
          rating: 5,
          semester: "Fall 2023"
        },
        {
          text: "Best Professor ever! Very enthusiastic and had a lot of energy. Even if you're not an actor, you'll love his class. Highly recommend for GE!",
          course: "THTR 152",
          rating: 5,
          semester: "Spring 2023"
        },
        {
          text: "Always engaging and truly cares about his students' growth. His feedback is constructive and inspiring. Would definitely take again!",
          course: "THTR 252B",
          rating: 5,
          semester: "Fall 2022"
        }
      ]
    }
  };

  return (
    <ModernLayout activeNavItem="professor">
      {/* COMPACT HEADER SECTION */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-none tracking-tight mb-4">
            <span className="text-holographic">PROFESSOR • STEVIE JOHNSON</span>
          </h1>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto mb-2">
            Theatre & Communication Studies • University of Southern California
          </p>
          <p className="text-sm text-white/60 font-body">
            35+ years of transformative education
          </p>
        </div>

        {/* ENHANCED STATS ROW WITH RATEMYPROFESSORS DATA */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            /* { value: "4.8★", label: "Rating", icon: Star, color: "text-yellow-400" },
            { value: "95%", label: "Would Retake", icon: Heart, color: "text-red-400" },
            { value: "17", label: "Reviews", icon: Users, color: "text-blue-400" }, */
            { value: "Ph.D", label: "Columbia", icon: Award, color: "text-accent-400" }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="cinematic-theater holographic-border rounded-xl px-6 py-3 flex items-center gap-3 group hover:scale-105 transition-all duration-300"
            >
              <stat.icon className={`w-5 h-5 ${stat.color} group-hover:animate-pulse`} />
              <div className="text-center">
                <div className="font-heading text-xl font-bold text-holographic">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OPTIMIZED LAYOUT - BETTER SPACE UTILIZATION */}
      <section className="pb-12">
        {/* TOP SECTION - COURSE CATALOG WITH BETTER PROPORTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
          
          {/* LEFT SECTION - ENHANCED COURSE GRID - Now full width since right section is commented */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-3xl font-bold text-holographic">Course Catalog</h2>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">High Ratings</span>
              </div>
            </div>

            {/* CREATIVE 2x2 COURSE GRID - OPTIMIZED SPACING */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {professorData.courses.map((course, index) => (
                <Card 
                  key={course.code}
                  className="glass rounded-2xl p-4 hover-lift group cursor-pointer transition-all duration-500 hover:scale-105 relative overflow-hidden"
                  onClick={() => setSelectedCourse(selectedCourse === index ? null : index)}
                >
                  {/* Course Level Indicator */}
                  <div className={`absolute top-0 right-0 w-16 h-16 -mr-4 -mt-4 rotate-45 ${
                    course.level === 'Beginner' ? 'bg-green-500/20' :
                    course.level === 'Intermediate' ? 'bg-yellow-500/20' :
                    'bg-red-500/20'
                  }`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <span className="text-accent-400 font-mono font-bold text-base">{course.code}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                            course.level === 'Beginner' ? 'bg-green-500/30 text-green-300' :
                            course.level === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-300' :
                            'bg-red-500/30 text-red-300'
                          }`}>
                            {course.level}
                          </span>
                          <span className="text-white/50 text-xs">{course.credits} units</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-sm">{course.grade}</div>
                        <div className="text-white/40 text-xs">Avg Grade</div>
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-base font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                      {course.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-3">{course.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                        <span className="text-yellow-400 text-xs ml-1">5.0</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {selectedCourse === index && (
                    <div className="mt-3 pt-3 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-2 gap-4 text-xs text-white/50 mb-3">
                        <div>
                          <span className="font-medium">Format:</span>
                          <p>Interactive workshop</p>
                        </div>
                        <div>
                          <span className="font-medium">Attendance:</span>
                          <p>Participation matters</p>
                        </div>
                      </div>
                      <Button className="w-full px-4 py-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-all text-sm">
                        View Syllabus
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION - STUDENT FEEDBACK COMPACT (2/5 width) */}
          {/* <div className="lg:col-span-2 space-y-5">
            {/* RATEMYPROFESSORS SHOWCASE - COMPACT */}
            {/* <Card className="glass rounded-2xl p-5 border border-yellow-400/30 bg-yellow-400/5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-yellow-400/20">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-white">Student Reviews</h3>
                    <p className="text-yellow-400 text-xs">RateMyProfessors.com</p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">{professorData.rateMyProfessors.rating}</div>
                  <div className="text-white/50 text-xs">{professorData.rateMyProfessors.totalReviews} reviews</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                <div className="text-center p-2 rounded-lg glass">
                  <div className="text-green-400 font-bold text-base">{professorData.rateMyProfessors.wouldTakeAgain}%</div>
                  <div className="text-white/60 text-xs">Would Take Again</div>
                </div>
                <div className="text-center p-2 rounded-lg glass">
                  <div className="text-blue-400 font-bold text-base">{professorData.rateMyProfessors.difficulty}/5</div>
                  <div className="text-white/60 text-xs">Difficulty</div>
                </div>
              </div>

              <Button className="w-full px-4 py-2 rounded-xl bg-yellow-400/20 text-yellow-300 hover:bg-yellow-400/30 transition-all text-sm" asChild>
                <a href="https://www.ratemyprofessors.com/professor/2482775" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View All Reviews
                </a>
              </Button>
            </Card> */}

            {/* COMPACT STUDENT TESTIMONIALS */}
            {/* <div>
              <h3 className="font-heading text-base font-bold text-holographic mb-3">What Students Say</h3>
              <div className="space-y-3">
                {professorData.rateMyProfessors.reviews.slice(0, 2).map((review, index) => (
                  <Card key={index} className="glass rounded-xl p-3 group hover-lift transition-all duration-300">
                    <div className="flex items-start gap-2">
                      <Quote className="w-3 h-3 text-accent-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-white/80 text-xs leading-relaxed mb-2">
                          "{review.text.length > 100 ? review.text.substring(0, 100) + '...' : review.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary-400 text-xs font-medium">{review.course}</span>
                          <div className="flex gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-2 h-2 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div> */}
        </div>

        {/* FULL-WIDTH SECTIONS - BETTER SPACE USAGE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* TEACHING PHILOSOPHY - EXPANDED */}
          <Card className="glass rounded-2xl p-6 border-l-4 border-accent-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-accent-500 to-primary-500">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-holographic">Teaching Philosophy</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              <span className="text-accent-400 font-semibold">"Education should be transformative."</span> I believe in creating 
              inclusive spaces where students develop both technical skills and creative confidence through practical, 
              hands-on learning experiences combined with personalized feedback and mentorship.
            </p>
            {/* <div className="flex flex-wrap gap-2">
              {professorData.rateMyProfessors.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs">
                  {tag}
                </span>
              ))}
            </div> */}
          </Card>

          {/* ACADEMIC BACKGROUND - PROMINENTLY DISPLAYED */}
          <Card className="glass rounded-2xl p-6 border-l-4 border-primary-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-holographic">Academic Credentials</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {professorData.education.map((edu, index) => (
                <div key={index} className="p-4 rounded-xl glass hover-lift transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-accent-400 text-xs font-mono font-bold group-hover:text-primary-400 transition-colors">{edu.year}</span>
                    <Award className="w-4 h-4 text-white/40 group-hover:text-accent-400 transition-colors" />
                  </div>
                  <div className="font-semibold text-white text-sm mb-1 group-hover:text-holographic transition-colors">{edu.degree}</div>
                  <div className="text-white/60 text-xs leading-relaxed">{edu.institution}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
        .duration-300 {
          animation-duration: 300ms;
        }
      `}</style>
    </ModernLayout>
  );
};