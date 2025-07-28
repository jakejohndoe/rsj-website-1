import React, { useState, useEffect } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";
import { BookOpen, Users, Clock, Award, Film, Sparkles } from "lucide-react";

export const Courses = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const courses = [
    {
      code: "COMM 401",
      title: "Advanced Public Speaking",
      description: "Master professional presentation skills with advanced techniques in audience engagement, persuasive speaking, and handling Q&A sessions.",
      term: "Fall 2023",
      credits: 3,
      level: "Advanced",
      icon: Users,
      color: "accent",
    },
    {
      code: "WRIT 350",
      title: "Character Development Workshop",
      description: "Create compelling characters through psychological profiling, backstory development, and dynamic dialogue techniques.",
      term: "Spring 2024",
      credits: 4,
      level: "Intermediate",
      icon: BookOpen,
      color: "primary",
    },
    {
      code: "PERF 210",
      title: "Improvisation Fundamentals",
      description: "Build spontaneity and creative thinking through theatrical exercises and real-world scenario practice.",
      term: "Winter 2024",
      credits: 3,
      level: "Beginner",
      icon: Film,
      color: "accent",
    },
    {
      code: "COMM 101",
      title: "Speech Fundamentals",
      description: "Essential techniques for confident public speaking in academic and professional settings.",
      term: "Summer 2024",
      credits: 3,
      level: "Introductory",
      icon: Sparkles,
      color: "primary",
    },
  ];

  return (
    <ModernLayout
      darkMode={darkMode}
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="courses"
    >
      {/* BACKGROUND EFFECTS REMOVED FOR CONSISTENCY - Using global pixely background */}

      <div className="relative min-h-screen py-32 px-6">
        {/* LIGHTING OVERLAY REMOVED - Using consistent pixely background */}
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 🎪 CINEMATIC HEADER */}
          <div 
            className="text-center mb-16"
          >
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tight">
                <span className="text-holographic block">COURSES</span>
                <span className="text-holographic block">STEVIE JOHNSON</span>
              </h1>
              <p className="text-xl md:text-2xl font-heading text-white/80 max-w-2xl mx-auto">
                <span className="text-holographic font-bold">Professional development courses</span> designed to elevate your craft and career
              </p>
            </div>

            {/* CINEMATIC STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { value: "4", label: "Active Courses", icon: BookOpen },
                { value: "200+", label: "Students Taught", icon: Users },
                { value: "15+", label: "Years Teaching", icon: Clock },
                { value: "98%", label: "Success Rate", icon: Award }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`cinematic-theater holographic-border rounded-2xl p-6 text-center animate-depth-float`}
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400 animate-float" />
                  <div className="font-heading text-3xl font-bold text-holographic">{stat.value}</div>
                  <div className="text-white/60 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent h-px" />

          {/* 🎬 CINEMATIC COURSES GRID */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`cinematic-theater holographic-border rounded-3xl p-8 transition-all hover:scale-105 hover-glow duration-700 screen-glow ${isLoaded ? '' : 'opacity-0'}`}
                style={{ animationDelay: `${1.5 + index * 0.3}s` }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${course.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} screen-glow`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-lg font-mono font-bold text-holographic">
                        {course.code}
                      </span>
                      <span className={`block text-xs px-3 py-1 rounded-full ${course.color === 'primary' ? 'bg-primary-500/20 text-primary-400' : 'bg-accent-500/20 text-accent-400'} font-body w-fit mt-1`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-holographic mb-4 text-holographic">
                  {course.title}
                </h2>
                <p className="text-white/80 font-body leading-relaxed mb-6">
                  {course.description}
                </p>

                <div className="flex justify-between items-center text-sm text-white/60 mb-6 font-body">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {course.term}
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    {course.credits} credit{course.credits !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex gap-3">
                  <Button className="flex-1 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-heading font-semibold hover:scale-105 transition-all duration-500 screen-glow">
                    View Syllabus
                  </Button>
                  <Button className="flex-1 rounded-full glass-strong text-white font-heading font-medium hover-lift cinematic-theater border border-accent-500/50">
                    Register
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* 🌟 CALL TO ACTION */}
          <div 
            className={`text-center mt-20 ${isLoaded ? '' : 'opacity-0'}`}
            style={{ animationDelay: '3s' }}
          >
            <Card className="max-w-4xl mx-auto cinematic-theater holographic-border rounded-3xl p-12">
              <h3 className="font-display text-5xl font-bold text-holographic mb-6">
                READY TO ELEVATE?
              </h3>
              <p className="text-xl text-white/80 font-body mb-8 max-w-2xl mx-auto">
                Join hundreds of students who have transformed their communication and performance skills through these proven methodologies.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="px-12 py-6 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-heading font-bold text-lg hover:scale-105 transition-all duration-500 screen-glow">
                  <BookOpen className="w-6 h-6 mr-3" />
                  Browse All Courses
                </Button>
                <Button className="px-12 py-6 rounded-full glass-strong text-white font-heading font-medium text-lg hover-lift cinematic-theater border border-primary-500/50">
                  Contact Professor
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};
