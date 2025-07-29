import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { BookOpen, Users, Clock, Award, Film, Sparkles, GraduationCap, DollarSign, Calendar, ChevronRight, Star, MapPin, Mail } from "lucide-react";

export const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const courseCategories = [
    { id: "all", label: "All Courses", count: 12 },
    { id: "communication", label: "Communication", count: 5 },
    { id: "acting", label: "Acting & Performance", count: 4 },
    { id: "writing", label: "Creative Writing", count: 3 }
  ];

  const courses = [
    {
      code: "COMM 401",
      title: "Advanced Public Speaking",
      description: "Master professional presentation skills with advanced techniques in audience engagement, persuasive speaking, and handling Q&A sessions.",
      category: "communication",
      term: "Fall 2024",
      credits: 3,
      level: "Advanced",
      price: "$899",
      duration: "12 weeks",
      icon: Users,
      color: "accent",
      enrolled: 18,
      maxStudents: 25,
      rating: 4.9
    },
    {
      code: "WRIT 350",
      title: "Character Development Workshop",
      description: "Create compelling characters through psychological profiling, backstory development, and dynamic dialogue techniques.",
      category: "writing",
      term: "Spring 2024",
      credits: 4,
      price: "$1,199",
      duration: "16 weeks",
      level: "Intermediate",
      icon: BookOpen,
      color: "primary",
      enrolled: 22,
      maxStudents: 24,
      rating: 4.8
    },
    {
      code: "PERF 210",
      title: "Improvisation Fundamentals",
      description: "Build spontaneity and creative thinking through theatrical exercises and real-world scenario practice.",
      category: "acting",
      term: "Winter 2024",
      credits: 3,
      price: "$699",
      duration: "8 weeks",
      level: "Beginner",
      icon: Film,
      color: "accent",
      enrolled: 15,
      maxStudents: 20,
      rating: 5.0
    },
    {
      code: "COMM 101",
      title: "Speech Fundamentals",
      description: "Essential techniques for confident public speaking in academic and professional settings.",
      category: "communication",
      term: "Summer 2024",
      credits: 3,
      price: "$599",
      duration: "10 weeks",
      level: "Introductory",
      icon: Sparkles,
      color: "primary",
      enrolled: 28,
      maxStudents: 30,
      rating: 4.7
    },
    {
      code: "THTR 152",
      title: "Acting Fundamentals",
      description: "Basic acting techniques including scene study, character development, and stage presence for beginners.",
      category: "acting",
      term: "Fall 2024",
      credits: 3,
      price: "$799",
      duration: "12 weeks",
      level: "Beginner",
      icon: Film,
      color: "accent",
      enrolled: 20,
      maxStudents: 22,
      rating: 4.9
    },
    {
      code: "WRIT 201",
      title: "Screenwriting Basics",
      description: "Learn the fundamentals of screenplay structure, dialogue, and character arcs for film and television.",
      category: "writing",
      term: "Spring 2024",
      credits: 4,
      price: "$999",
      duration: "14 weeks",
      level: "Intermediate",
      icon: BookOpen,
      color: "primary",
      enrolled: 16,
      maxStudents: 18,
      rating: 4.8
    },
    {
      code: "COMM 250",
      title: "Business Presentation Skills",
      description: "Professional communication skills for corporate environments, meetings, and executive presentations.",
      category: "communication",
      term: "Fall 2024",
      credits: 2,
      price: "$749",
      duration: "6 weeks",
      level: "Intermediate",
      icon: Users,
      color: "accent",
      enrolled: 25,
      maxStudents: 30,
      rating: 4.6
    },
    {
      code: "PERF 301",
      title: "Advanced Scene Study",
      description: "Intensive scene work focusing on emotional truth, subtext, and advanced character development techniques.",
      category: "acting",
      term: "Winter 2024",
      credits: 4,
      price: "$1,299",
      duration: "16 weeks",
      level: "Advanced",
      icon: Film,
      color: "primary",
      enrolled: 12,
      maxStudents: 15,
      rating: 5.0
    },
    {
      code: "WRIT 401",
      title: "Novel Writing Workshop",
      description: "Complete novel development from concept to publication-ready manuscript with professional feedback.",
      category: "writing",
      term: "Spring 2024",
      credits: 6,
      price: "$1,599",
      duration: "20 weeks",
      level: "Advanced",
      icon: BookOpen,
      color: "accent",
      enrolled: 8,
      maxStudents: 12,
      rating: 4.9
    },
    {
      code: "COMM 175",
      title: "Voice & Diction Workshop",
      description: "Improve vocal clarity, projection, and articulation for professional and performance applications.",
      category: "communication",
      term: "Summer 2024",
      credits: 2,
      price: "$449",
      duration: "4 weeks",
      level: "Beginner",
      icon: Users,
      color: "primary",
      enrolled: 24,
      maxStudents: 25,
      rating: 4.8
    },
    {
      code: "PERF 155",
      title: "Stage Combat Basics",
      description: "Safe and effective stage combat techniques for theatrical and film productions.",
      category: "acting",
      term: "Fall 2024",
      credits: 2,
      price: "$649",
      duration: "8 weeks",
      level: "Beginner",
      icon: Film,
      color: "accent",
      enrolled: 14,
      maxStudents: 16,
      rating: 4.7
    },
    {
      code: "COMM 320",
      title: "Podcast Production Workshop",
      description: "Complete podcast creation from concept to distribution, including audio editing and marketing strategies.",
      category: "communication",
      term: "Winter 2024",
      credits: 3,
      price: "$899",
      duration: "10 weeks",
      level: "Intermediate",
      icon: Sparkles,
      color: "primary",
      enrolled: 19,
      maxStudents: 20,
      rating: 4.9
    }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <ModernLayout activeNavItem="courses">
      {/* COMPACT HEADER SECTION */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-none tracking-tight mb-4">
            <span className="text-holographic">COURSES • STEVIE JOHNSON</span>
          </h1>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto mb-2">
            Professional development courses designed to elevate your craft and career
          </p>
          <p className="text-sm text-white/60 font-body">
            Small class sizes • Expert instruction • Proven results
          </p>
        </div>

        {/* COMPACT STATS ROW */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "12", label: "Active Courses", icon: BookOpen, color: "text-blue-400" },
            { value: "350+", label: "Students Taught", icon: Users, color: "text-green-400" },
            { value: "20+", label: "Years Teaching", icon: Clock, color: "text-yellow-400" },
            { value: "4.8★", label: "Avg Rating", icon: Star, color: "text-accent-400" }
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

      {/* COURSE CATEGORIES */}
      <section className="pb-6">
        <div className="flex justify-center mb-6">
          <div className="flex gap-2 p-1 rounded-xl glass">
            {courseCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.label} <span className="text-xs opacity-60">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COMPACT COURSE GRID */}
      <section className="pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.code}
              className="glass rounded-2xl p-4 hover-lift group transition-all duration-300 hover:scale-102"
            >
              {/* Course Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${course.color === 'primary' ? 'bg-primary-500/20' : 'bg-accent-500/20'}`}>
                    <course.icon className={`w-4 h-4 ${course.color === 'primary' ? 'text-primary-400' : 'text-accent-400'}`} />
                  </div>
                  <div>
                    <span className="text-accent-400 font-mono font-bold text-sm">{course.code}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        course.level === 'Beginner' || course.level === 'Introductory' ? 'bg-green-500/30 text-green-300' :
                        course.level === 'Intermediate' ? 'bg-yellow-500/30 text-yellow-300' :
                        'bg-red-500/30 text-red-300'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary-400 font-bold text-lg">{course.price}</div>
                  <div className="text-white/40 text-xs">{course.duration}</div>
                </div>
              </div>
              
              {/* Course Title & Description */}
              <h3 className="font-heading text-base font-bold text-white group-hover:text-primary-400 transition-colors mb-2">
                {course.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3 line-clamp-2">
                {course.description}
              </p>
              
              {/* Course Details */}
              <div className="grid grid-cols-2 gap-3 mb-3 text-xs text-white/50">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{course.term}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GraduationCap className="w-3 h-3" />
                  <span>{course.credits} credits</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span>{course.enrolled}/{course.maxStudents}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Enrollment Status */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-white/60 mb-1">
                  <span>Enrollment</span>
                  <span>{course.enrolled}/{course.maxStudents}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full ${
                      (course.enrolled / course.maxStudents) > 0.8 ? 'bg-red-400' :
                      (course.enrolled / course.maxStudents) > 0.6 ? 'bg-yellow-400' :
                      'bg-green-400'
                    }`}
                    style={{ width: `${(course.enrolled / course.maxStudents) * 100}%` }}
                  />
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-2">
                <Button className="flex-1 px-3 py-2 rounded-lg bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-all text-sm">
                  View Details
                </Button>
                <Button className="px-3 py-2 rounded-lg bg-accent-500/20 text-accent-400 hover:bg-accent-500 hover:text-white transition-all">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACT & ENROLLMENT SECTION */}
      <section className="pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Quick Enrollment */}
          <Card className="glass rounded-2xl p-6 border-l-4 border-primary-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-holographic">Ready to Enroll?</h3>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Join our community of learners and take your skills to the next level. Classes fill up quickly, 
              so secure your spot today.
            </p>
            <div className="space-y-3">
              <Button className="w-full px-4 py-3 rounded-xl bg-primary-500 text-white hover:bg-primary-600 transition-all">
                <Mail className="w-4 h-4 mr-2" />
                Contact for Enrollment
              </Button>
              <Button className="w-full px-4 py-3 rounded-xl glass text-white hover:bg-white/10 transition-all">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </Card>

          {/* Course Information */}
          <Card className="glass rounded-2xl p-6 border-l-4 border-accent-400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-gradient-to-r from-accent-500 to-primary-500">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-heading text-xl font-bold text-holographic">Course Information</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-4 h-4 text-accent-400" />
                <span>University of Southern California & Online</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4 text-accent-400" />
                <span>Flexible scheduling available</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="w-4 h-4 text-accent-400" />
                <span>Small class sizes (12-30 students)</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Award className="w-4 h-4 text-accent-400" />
                <span>Certificate of completion provided</span>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </ModernLayout>
  );
};
