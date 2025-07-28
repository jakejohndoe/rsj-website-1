import React, { useState, useEffect } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import { GraduationCap, BookOpen, Clock, Mail, Phone, MapPin, Star, Award, Users, Calendar, Download } from "lucide-react";

export const Professor = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const professorData = {
    name: "Professor Stevie Johnson",
    title: "Professor of Communication / Performance Studies",
    institution: "University of Southern California",
    bio: "Dedicated educator with 35+ years of experience in performance arts, public speaking, and creative writing. Committed to fostering student growth through innovative teaching methods and practical application.",
    education: [
      {
        degree: "Ph.D in Performance Studies",
        institution: "Columbia University",
        year: "2008"
      },
      {
        degree: "MFA - USC",
        institution: "University of Southern California",
        year: "2005"
      },
      {
        degree: "MFA in Creative Writing",
        institution: "New York University",
        year: "2004"
      },
      {
        degree: "BA in Theater Arts",
        institution: "University of California",
        year: "2001"
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
    courses: [
      {
        code: "COMM 401",
        title: "Advanced Public Speaking",
        description: "Masterclass in professional presentation skills and audience engagement techniques."
      },
      {
        code: "WRIT 350",
        title: "Character Development Workshop",
        description: "Creating compelling characters for stage, screen, and literature."
      },
      {
        code: "PERF 210",
        title: "Improvisation Fundamentals",
        description: "Building spontaneity and creative thinking through theatrical exercises."
      },
      {
        code: "COMM 101",
        title: "Speech Fundamentals",
        description: "Essential techniques for confident public speaking in academic and professional settings."
      }
    ],
    officeHours: [
      { day: "Monday", time: "10:00 AM - 12:00 PM" },
      { day: "Wednesday", time: "2:00 PM - 4:00 PM" },
      { day: "Friday", time: "9:00 AM - 11:00 AM" }
    ],
    contact: {
      email: "john498@usc.edu",
      phone: "(555) 123-4567",
      office: "Creative Arts Building, Room 302"
    }
  };

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="professor"
    >
      {/* 🎬 OPTIMIZED BACKGROUND EFFECTS */}
      <div className="particle-field">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * -20}s`,
              animationDuration: `${20 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="matrix-overlay" />

      {/* REDUCED ATMOSPHERIC PARTICLES */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="atmospheric-particle"
          style={{
            width: `${3 + Math.random() * 2}px`,
            height: `${3 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * -30}s`,
            animationDuration: `${25 + Math.random() * 10}s`
          }}
        />
      ))}

      <div className="relative min-h-screen py-32 px-6">
        <div className="lighting-overlay opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 🎪 CINEMATIC HEADER */}
          <div 
            className={`text-center mb-16 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-6">
              <h1 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tight">
                <span className="kinetic-text block">PROFESSOR</span>
                <span className="kinetic-text block text-holographic" style={{ animationDelay: '0.5s' }}>STEVIE JOHNSON</span>
              </h1>
              <p className="text-xl md:text-2xl font-heading text-white/80 max-w-3xl mx-auto">
                <span className="text-holographic font-bold">Professor of Communication & Performance Studies</span>
                <br />University of Southern California
              </p>
            </div>

            {/* ACADEMIC STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { value: "35+", label: "Years Teaching", icon: GraduationCap },
                { value: "5+", label: "Courses", icon: BookOpen },
                { value: "8K+", label: "Alumni", icon: Users },
                { value: "Ph.D", label: "Columbia University", icon: Award }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`cinematic-theater holographic-border rounded-2xl p-6 text-center animate-depth-float`}
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400 animate-float" />
                  <div className="font-heading text-2xl font-bold text-holographic">{stat.value}</div>
                  <div className="text-white/60 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent h-px" />

          {/* 🎬 CINEMATIC NAVIGATION TABS */}
          <div 
            className={`flex flex-wrap justify-center gap-4 mb-12 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '1.5s' }}
          >
            {[
              { id: "about", label: "About", icon: Star },
              { id: "courses", label: "Courses", icon: BookOpen },
              { id: "office", label: "Office Hours", icon: Clock },
              { id: "contact", label: "Contact", icon: Mail }
            ].map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-center gap-3 px-8 py-4 rounded-full font-heading font-semibold text-lg transition-all duration-500 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white screen-glow hover:scale-105'
                    : 'glass-strong text-white hover-lift cinematic-theater border border-primary-500/30 hover:border-accent-500/50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </Button>
            ))}
          </div>

          {/* 🎬 TAB CONTENT */}
          <div className="space-y-8">
            {activeTab === "about" && (
              <div 
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '2s' }}
              >
                {/* Teaching Philosophy Card */}
                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow lg:col-span-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Teaching Philosophy
                    </h2>
                  </div>
                  <p className="font-body text-white/80 mb-6 leading-relaxed">
                    I believe education should be transformative, engaging, and accessible. My approach combines:
                  </p>
                  <ul className="space-y-4 text-white/80">
                    {[
                      "Practical, hands-on learning experiences",
                      "Personalized feedback and mentorship",
                      "Integration of performance techniques",
                      "Creating inclusive spaces for expression"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
                        <span className="font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                {/* Teaching Specialties Card */}
                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow lg:col-span-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 screen-glow">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Teaching Specialties
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {professorData.specialties.map((specialty, index) => (
                      <div 
                        key={index} 
                        className="group p-4 rounded-2xl glass-strong border border-primary-500/20 hover:border-accent-500/50 transition-all duration-500 hover-lift"
                      >
                        <div className="flex items-center gap-3">
                          <Star className="w-5 h-5 text-accent-400 group-hover:animate-pulse" />
                          <span className="font-body text-white/90 group-hover:text-holographic transition-colors duration-500">{specialty}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Education Card */}
                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow lg:col-span-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Education
                    </h2>
                  </div>
                  <div className="space-y-6">
                    {professorData.education.map((item, index) => (
                      <div key={index} className="group p-4 rounded-2xl glass-strong hover-lift transition-all duration-500">
                        <h3 className="font-heading font-bold text-holographic mb-2">{item.degree}</h3>
                        <p className="text-white/80 font-body mb-1">{item.institution}</p>
                        <p className="text-accent-400 text-sm font-mono">{item.year}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "courses" && (
              <div 
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '2s' }}
              >
                {professorData.courses.map((course, index) => (
                  <Card key={index} className="cinematic-theater holographic-border rounded-3xl p-8 hover:scale-105 hover-glow duration-700 screen-glow">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 screen-glow">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-lg font-mono font-bold text-holographic">{course.code}</span>
                        <h3 className="text-xl font-heading font-bold text-white mt-1">{course.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/80 font-body leading-relaxed mb-6">{course.description}</p>
                    <Button className="w-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-heading font-semibold hover:scale-105 transition-all duration-500 screen-glow">
                      View Syllabus
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "office" && (
              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '2s' }}
              >
                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Office Hours
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {professorData.officeHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-4 rounded-2xl glass-strong border border-primary-500/20">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-accent-400" />
                          <span className="font-heading font-bold text-white">{item.day}</span>
                        </div>
                        <span className="font-body text-white/80">{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 screen-glow">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Appointment Scheduling
                    </h2>
                  </div>
                  <p className="font-body text-white/80 mb-8 leading-relaxed">
                    For appointments outside of regular office hours, please use the university scheduling system or contact me directly.
                  </p>
                  <div className="space-y-4">
                    <Button className="w-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-heading font-semibold hover:scale-105 transition-all duration-500 screen-glow">
                      Schedule Appointment
                    </Button>
                    <Button className="w-full rounded-full glass-strong text-white font-heading font-medium hover-lift cinematic-theater border border-accent-500/50">
                      Virtual Meeting Options
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "contact" && (
              <div 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
                style={{ animationDelay: '2s' }}
              >
                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Contact Information
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div className="p-4 rounded-2xl glass-strong border border-primary-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Mail className="w-5 h-5 text-accent-400" />
                        <h3 className="font-heading font-semibold text-white">Email</h3>
                      </div>
                      <p className="text-holographic font-body">{professorData.contact.email}</p>
                    </div>
                    <div className="p-4 rounded-2xl glass-strong border border-primary-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Phone className="w-5 h-5 text-accent-400" />
                        <h3 className="font-heading font-semibold text-white">Phone</h3>
                      </div>
                      <p className="text-holographic font-body">{professorData.contact.phone}</p>
                    </div>
                    <div className="p-4 rounded-2xl glass-strong border border-primary-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <MapPin className="w-5 h-5 text-accent-400" />
                        <h3 className="font-heading font-semibold text-white">Office</h3>
                      </div>
                      <p className="text-holographic font-body">{professorData.contact.office}</p>
                    </div>
                  </div>
                </Card>

                <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 screen-glow">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-holographic">
                      Get In Touch
                    </h2>
                  </div>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-heading font-semibold mb-3 text-white">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-heading font-semibold mb-3 text-white">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block font-heading font-semibold mb-3 text-white">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500 resize-none"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className="w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-heading font-bold text-lg py-6 hover:scale-105 transition-all duration-500 screen-glow"
                    >
                      <Mail className="w-6 h-6 mr-3" />
                      Send Message
                    </Button>
                    
                    <Separator className="my-6 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent h-px" />
                    
                    <Button 
                      className="w-full rounded-full glass-strong text-white font-heading font-medium hover-lift cinematic-theater border border-primary-500/50"
                      asChild
                    >
                      <a href="/stevie-johnson-cv.pdf" download="Stevie-Johnson-CV.pdf">
                        <Download className="w-5 h-5 mr-3" />
                        Download Curriculum Vitae
                      </a>
                    </Button>
                  </form>
                </Card>
              </div>
            )}
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};