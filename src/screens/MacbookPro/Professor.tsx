import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { GraduationCap, BookOpen, Clock, Mail, Phone, MapPin, Star, Award, Users, Calendar, Download, ChevronRight, Building, Quote } from "lucide-react";

export const Professor = () => {
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);

  const professorData = {
    courses: [
      {
        code: "COMM 401",
        title: "Advanced Public Speaking",
        description: "Masterclass in professional presentation skills and audience engagement techniques.",
        credits: 3,
        level: "Advanced"
      },
      {
        code: "WRIT 350", 
        title: "Character Development Workshop",
        description: "Creating compelling characters for stage, screen, and literature.",
        credits: 3,
        level: "Intermediate"
      },
      {
        code: "PERF 210",
        title: "Improvisation Fundamentals", 
        description: "Building spontaneity and creative thinking through theatrical exercises.",
        credits: 2,
        level: "Beginner"
      },
      {
        code: "COMM 101",
        title: "Speech Fundamentals",
        description: "Essential techniques for confident public speaking in academic and professional settings.",
        credits: 3,
        level: "Beginner"
      }
    ],
    specialties: [
      "Performance Theory & Practice",
      "Rhetorical Studies", 
      "Interpersonal Communication",
      "Improvisational Techniques",
      "Public Speaking Pedagogy",
      "Creative Writing Workshop"
    ],
    education: [
      { degree: "Ph.D in Performance Studies", institution: "Columbia University", year: "2008" },
      { degree: "MFA - USC", institution: "University of Southern California", year: "2005" },
      { degree: "MFA in Creative Writing", institution: "New York University", year: "2004" },
      { degree: "BA in Theater Arts", institution: "University of California", year: "2001" }
    ],
    testimonials: [
      {
        text: "Professor Johnson's approach to public speaking transformed my confidence. His practical exercises made complex concepts accessible.",
        student: "Sarah M., COMM 401",
        rating: 5
      },
      {
        text: "The improvisation techniques I learned have helped me in both performance and everyday communication. Incredible class!",
        student: "Marcus L., PERF 210", 
        rating: 5
      },
      {
        text: "His character development workshop gave me tools I use in my writing every day. Highly recommend to all creative students.",
        student: "Elena R., WRIT 350",
        rating: 5
      }
    ]
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
            Communication & Performance Studies • University of Southern California
          </p>
          <p className="text-sm text-white/60 font-body">
            35+ years of transformative education
          </p>
        </div>

        {/* COMPACT STATS ROW */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "35+", label: "Years", icon: GraduationCap },
            { value: "5+", label: "Courses", icon: BookOpen },
            { value: "8K+", label: "Alumni", icon: Users },
            { value: "Ph.D", label: "Columbia", icon: Award }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="cinematic-theater holographic-border rounded-xl px-6 py-3 flex items-center gap-3"
            >
              <stat.icon className="w-5 h-5 text-accent-400" />
              <div className="text-center">
                <div className="font-heading text-xl font-bold text-holographic">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - COURSES */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-holographic">Course Catalog</h2>
              <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm">Active</span>
            </div>

            <div className="space-y-3">
              {professorData.courses.map((course, index) => (
                <Card 
                  key={course.code}
                  className="glass rounded-xl p-4 hover-lift group cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedCourse(selectedCourse === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-accent-400 font-mono font-bold text-sm">{course.code}</span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          course.level === 'Beginner' ? 'bg-green-500/20 text-green-400' :
                          course.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-red-500/20 text-red-400'
                        }`}>
                          {course.level}
                        </span>
                        <span className="text-white/50 text-xs">{course.credits} credits</span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                        {course.title}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">{course.description}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-primary-400 group-hover:translate-x-1 transition-all ml-2" />
                  </div>
                  
                  {/* Expanded Details */}
                  {selectedCourse === index && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                      <div className="grid grid-cols-2 gap-4 text-xs text-white/50">
                        <div>
                          <span className="font-medium">Prerequisites:</span>
                          <p>None required</p>
                        </div>
                        <div>
                          <span className="font-medium">Format:</span>
                          <p>Interactive workshop</p>
                        </div>
                      </div>
                      <Button className="mt-3 px-4 py-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-all text-xs">
                        View Syllabus
                      </Button>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* TEACHING PHILOSOPHY CARD */}
            <Card className="glass rounded-xl p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-6 h-6 text-accent-400" />
                <h3 className="font-heading text-lg font-bold text-holographic">Teaching Philosophy</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                I believe education should be transformative, engaging, and accessible. My approach combines 
                practical hands-on learning with personalized feedback, creating inclusive spaces where students 
                can develop both technical skills and creative confidence.
              </p>
            </Card>
          </div>

          {/* RIGHT COLUMN - CREDENTIALS & TESTIMONIALS */}
          <div className="space-y-6">
            {/* ACADEMIC CREDENTIALS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-bold text-holographic">Academic Background</h3>
                <GraduationCap className="w-5 h-5 text-accent-400" />
              </div>

              <div className="space-y-3">
                {professorData.education.map((edu, index) => (
                  <Card key={index} className="glass rounded-xl p-4 group hover-lift transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-heading text-sm font-bold text-white group-hover:text-primary-400 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-white/60 text-xs mt-1">{edu.institution}</p>
                      </div>
                      <span className="text-accent-400 text-xs font-mono">{edu.year}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* SPECIALTIES */}
            <Card className="glass rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-holographic mb-4">Teaching Specialties</h3>
              <div className="grid grid-cols-1 gap-2">
                {professorData.specialties.map((specialty, index) => (
                  <div key={index} className="flex items-center gap-2 p-2 rounded-lg glass text-sm">
                    <div className="w-2 h-2 bg-accent-400 rounded-full flex-shrink-0" />
                    <span className="text-white/80">{specialty}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* STUDENT TESTIMONIALS */}
            <div>
              <h3 className="font-heading text-lg font-bold text-holographic mb-4">Student Feedback</h3>
              <div className="space-y-3">
                {professorData.testimonials.map((testimonial, index) => (
                  <Card key={index} className="glass rounded-xl p-4 group hover-lift transition-all duration-300">
                    <div className="flex items-start gap-3">
                      <Quote className="w-4 h-4 text-accent-400 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <p className="text-white/70 text-xs leading-relaxed mb-2">
                          "{testimonial.text}"
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary-400 text-xs font-medium">{testimonial.student}</span>
                          <div className="flex gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-accent-400 fill-current" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* OFFICE HOURS & CONTACT */}
            <Card className="glass rounded-xl p-6">
              <h3 className="font-heading text-lg font-bold text-holographic mb-4">Office & Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-accent-400" />
                  <div>
                    <span className="text-white font-medium">Office Hours:</span>
                    <p className="text-white/60">Mon/Wed/Fri 10AM-12PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="w-4 h-4 text-accent-400" />
                  <div>
                    <span className="text-white font-medium">Location:</span>
                    <p className="text-white/60">Creative Arts Building, Room 302</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-accent-400" />
                  <div>
                    <span className="text-white font-medium">Email:</span>
                    <p className="text-primary-400">john498@usc.edu</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                <Button className="w-full h-10 px-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300" asChild>
                  <a href="mailto:john498@usc.edu?subject=Academic%20Inquiry">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Professor
                  </a>
                </Button>
                <Button className="w-full h-10 px-4 rounded-xl glass text-white hover:bg-white/20 transition-all text-sm" asChild>
                  <a href="/stevie-johnson-cv.pdf" download>
                    <Download className="w-3 h-3 mr-2" />
                    Download CV
                  </a>
                </Button>
              </div>
            </Card>
          </div>
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