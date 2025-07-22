import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

export const Professor = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("about");

  const professorData = {
    name: "Professor Stevie Johnson",
    title: "Professor of Communication / Performance Studies",
    institution: "University of Southern California",
    bio: "Dedicated educator with 15+ years of experience in performance arts, public speaking, and creative writing. Committed to fostering student growth through innovative teaching methods and practical application.",
    education: [
      {
        degree: "Ph.D in Performance Studies",
        institution: "Columbia University",
        year: "2008"
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
      <div className="overflow-y-auto pt-4 px-24" style={{ 
        height: 'calc(100vh - 10rem)',
        top: '10rem',
        padding: '2rem'
      }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-[3rem] md:text-[5rem] font-fleur leading-[0.8] text-blue-100 text-glow-blue`}>
              {professorData.name}
            </h1>
            <p className={`text-lg md:text-xl font-serif text-blue-200/80`}>
              {professorData.title} at {professorData.institution}
            </p>
          </div>

          <Separator className="my-6 bg-blue-800/40" />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeTab === "about" ? "default" : "outline"}
              onClick={() => setActiveTab("about")}
              className={`rounded-full px-6 ${
                activeTab === "about" 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'border-blue-400 text-blue-200 hover:bg-blue-900/30'
              }`}
            >
              About
            </Button>
            <Button
              variant={activeTab === "courses" ? "default" : "outline"}
              onClick={() => setActiveTab("courses")}
              className={`rounded-full px-6 ${
                activeTab === "courses" 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'border-blue-400 text-blue-200 hover:bg-blue-900/30'
              }`}
            >
              Courses
            </Button>
            <Button
              variant={activeTab === "office" ? "default" : "outline"}
              onClick={() => setActiveTab("office")}
              className={`rounded-full px-6 ${
                activeTab === "office" 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'border-blue-400 text-blue-200 hover:bg-blue-900/30'
              }`}
            >
              Office Hours
            </Button>
            <Button
              variant={activeTab === "contact" ? "default" : "outline"}
              onClick={() => setActiveTab("contact")}
              className={`rounded-full px-6 ${
                activeTab === "contact" 
                  ? 'bg-blue-500 text-white hover:bg-blue-600' 
                  : 'border-blue-400 text-blue-200 hover:bg-blue-900/30'
              }`}
            >
              Contact
            </Button>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === "about" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Teaching Philosophy Card */}
                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow lg:col-span-1`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100`}>
                    Teaching Philosophy
                  </h2>
                  <p className={`text-blue-200/80 mb-4`}>
                    I believe education should be transformative, engaging, and accessible. My approach combines:
                  </p>
                  <ul className={`space-y-3 text-blue-200/80`}>
                    <li className="flex items-start">
                      <span className="inline-block mr-2">•</span>
                      <span>Practical, hands-on learning experiences</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block mr-2">•</span>
                      <span>Personalized feedback and mentorship</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block mr-2">•</span>
                      <span>Integration of performance techniques across disciplines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block mr-2">•</span>
                      <span>Creating inclusive spaces for creative expression</span>
                    </li>
                  </ul>
                </Card>

                {/* Teaching Specialties Card - NEW CARD */}
                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow lg:col-span-1`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100 mb-4`}>
                    Teaching Specialties
                  </h2>
                  <div className="grid grid-cols-2 gap-3">
                    {professorData.specialties.map((specialty, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded-lg bg-blue-800/20 border border-blue-700/30 flex items-center`}
                      >
                        <span className={`text-blue-300 mr-2`}>✓</span>
                        <span className={`text-blue-200/80 text-sm`}>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Education Card */}
                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow lg:col-span-1`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100`}>
                    Education
                  </h2>
                  <div className="space-y-4">
                    {professorData.education.map((item, index) => (
                      <div key={index} className="border-b border-blue-800/40 pb-3 last:border-b-0 last:pb-0">
                        <h3 className={`font-medium text-blue-100`}>{item.degree}</h3>
                        <p className={`text-sm text-blue-200/70`}>{item.institution}</p>
                        <p className={`text-xs text-blue-200/50`}>{item.year}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {/* Rest of the tab content remains the same */}
            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professorData.courses.map((course, index) => (
                  <Card key={index} className={`p-6 rounded-3xl bg-blue-900/30 neon-glow hover:shadow-lg transition-shadow duration-300`}>
                    <div className="flex items-start mb-3">
                      <span className={`font-mono font-bold mr-3 text-blue-300`}>{course.code}</span>
                      <h3 className={`text-lg font-serif font-medium text-blue-100`}>{course.title}</h3>
                    </div>
                    <p className={`text-sm text-blue-200/80`}>{course.description}</p>
                    <Button
                      variant="outline"
                      className={`mt-4 rounded-full border-blue-400 text-blue-200 hover:bg-blue-900/30`}
                    >
                      View Syllabus
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "office" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100 mb-6`}>
                    Office Hours
                  </h2>
                  <div className="space-y-4">
                    {professorData.officeHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b border-blue-800/40 pb-3 last:border-b-0 last:pb-0">
                        <span className={`font-medium text-blue-100`}>{item.day}</span>
                        <span className={`text-blue-200/80`}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100 mb-6`}>
                    Appointment Scheduling
                  </h2>
                  <p className={`text-blue-200/80 mb-6`}>
                    For appointments outside of regular office hours, please use the university scheduling system or contact me directly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      className={`rounded-full bg-blue-500 text-white hover:bg-blue-600`}
                    >
                      Schedule Appointment
                    </Button>
                    <Button
                      variant="outline"
                      className={`rounded-full border-blue-400 text-blue-200 hover:bg-blue-900/30`}
                    >
                      Virtual Meeting Options
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100 mb-6`}>
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-sm font-medium mb-1 text-blue-200/70`}>Email</h3>
                      <p className={`text-blue-100`}>{professorData.contact.email}</p>
                    </div>
                    <div>
                      <h3 className={`text-sm font-medium mb-1 text-blue-200/70`}>Phone</h3>
                      <p className={`text-blue-100`}>{professorData.contact.phone}</p>
                    </div>
                    <div>
                      <h3 className={`text-sm font-medium mb-1 text-blue-200/70`}>Office</h3>
                      <p className={`text-blue-100`}>{professorData.contact.office}</p>
                    </div>
                  </div>
                </Card>

                <Card className={`p-6 rounded-3xl bg-blue-900/30 neon-glow`}>
                  <h2 className={`text-2xl font-serif font-medium text-blue-100 mb-6`}>
                    Get In Touch
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-1 text-blue-200/70`}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-2 rounded-lg border border-blue-800/40 bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-1 text-blue-200/70`}>Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 rounded-lg border border-blue-800/40 bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium mb-1 text-blue-200/70`}>Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`w-full px-4 py-2 rounded-lg border border-blue-800/40 bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50`}
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className={`rounded-full bg-blue-500 text-white hover:bg-blue-600`}
                    >
                      Send Message
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