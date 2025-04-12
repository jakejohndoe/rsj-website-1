import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

export const Professor = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  // Sample data - replace with your actual information
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
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="professor"
      className="relative"
    >
      {/* Scroll Container */}
      <div 
        className="overflow-y-auto"
        style={{ 
          height: 'calc(100vh - 10rem)',
          position: 'fixed',
          top: '10rem',
          left: 0,
          right: 0,
          padding: '2rem'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-[3rem] md:text-[5rem] font-fleur leading-[0.8] ${darkMode ? 'text-white' : 'text-black'}`}>
              {professorData.name}
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              {professorData.title} at {professorData.institution}
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Button
              variant={activeTab === "about" ? "default" : "outline"}
              onClick={() => setActiveTab("about")}
              className={`rounded-full px-6 ${
                darkMode 
                  ? activeTab === "about" 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'border-white text-white hover:bg-white/10'
                  : activeTab === "about"
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-black text-black hover:bg-black/10'
              }`}
            >
              About
            </Button>
            <Button
              variant={activeTab === "courses" ? "default" : "outline"}
              onClick={() => setActiveTab("courses")}
              className={`rounded-full px-6 ${
                darkMode 
                  ? activeTab === "courses" 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'border-white text-white hover:bg-white/10'
                  : activeTab === "courses"
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-black text-black hover:bg-black/10'
              }`}
            >
              Courses
            </Button>
            <Button
              variant={activeTab === "office" ? "default" : "outline"}
              onClick={() => setActiveTab("office")}
              className={`rounded-full px-6 ${
                darkMode 
                  ? activeTab === "office" 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'border-white text-white hover:bg-white/10'
                  : activeTab === "office"
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-black text-black hover:bg-black/10'
              }`}
            >
              Office Hours
            </Button>
            <Button
              variant={activeTab === "contact" ? "default" : "outline"}
              onClick={() => setActiveTab("contact")}
              className={`rounded-full px-6 ${
                darkMode 
                  ? activeTab === "contact" 
                    ? 'bg-white text-black hover:bg-white/90' 
                    : 'border-white text-white hover:bg-white/10'
                  : activeTab === "contact"
                    ? 'bg-black text-white hover:bg-black/90'
                    : 'border-black text-black hover:bg-black/10'
              }`}
            >
              Contact
            </Button>
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {activeTab === "about" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'} lg:col-span-2`}>
                  <h2 className={`text-2xl font-serif font-medium mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Teaching Speech/Acting
                  </h2>
                  <p className={`text-base ${darkMode ? 'text-white/80' : 'text-black/80'} mb-4`}>
                    I believe education should be transformative, engaging, and accessible. My approach combines:
                  </p>
                  <ul className={`space-y-3 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
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

                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                  <h2 className={`text-2xl font-serif font-medium mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Education
                  </h2>
                  <div className="space-y-4">
                    {professorData.education.map((item, index) => (
                      <div key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
                        <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{item.degree}</h3>
                        <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-black/70'}`}>{item.institution}</p>
                        <p className={`text-xs ${darkMode ? 'text-white/50' : 'text-black/50'}`}>{item.year}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "courses" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {professorData.courses.map((course, index) => (
                  <Card key={index} className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'} hover:shadow-lg transition-shadow duration-300`}>
                    <div className="flex items-start mb-3">
                      <span className={`font-mono font-bold mr-3 ${darkMode ? 'text-white' : 'text-black'}`}>{course.code}</span>
                      <h3 className={`text-lg font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{course.title}</h3>
                    </div>
                    <p className={`text-sm ${darkMode ? 'text-white/80' : 'text-black/80'}`}>{course.description}</p>
                    <Button
                      variant="outline"
                      className={`mt-4 rounded-full ${
                        darkMode 
                          ? 'border-white text-white hover:bg-white/10' 
                          : 'border-black text-black hover:bg-black/10'
                      }`}
                    >
                      View Syllabus
                    </Button>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "office" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                  <h2 className={`text-2xl font-serif font-medium mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Office Hours
                  </h2>
                  <div className="space-y-4">
                    {professorData.officeHours.map((item, index) => (
                      <div key={index} className="flex justify-between items-center border-b pb-3 last:border-b-0 last:pb-0">
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-black'}`}>{item.day}</span>
                        <span className={`${darkMode ? 'text-white/80' : 'text-black/80'}`}>{item.time}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                  <h2 className={`text-2xl font-serif font-medium mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Appointment Scheduling
                  </h2>
                  <p className={`text-base mb-6 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                    For appointments outside of regular office hours, please use the university scheduling system or contact me directly.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      className={`rounded-full ${
                        darkMode 
                          ? 'bg-white text-black hover:bg-white/90' 
                          : 'bg-black text-white hover:bg-black/90'
                      }`}
                    >
                      Schedule Appointment
                    </Button>
                    <Button
                      variant="outline"
                      className={`rounded-full ${
                        darkMode 
                          ? 'border-white text-white hover:bg-white/10' 
                          : 'border-black text-black hover:bg-black/10'
                      }`}
                    >
                      Virtual Meeting Options
                    </Button>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === "contact" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                  <h2 className={`text-2xl font-serif font-medium mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Email</h3>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}>{professorData.contact.email}</p>
                    </div>
                    <div>
                      <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Phone</h3>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}>{professorData.contact.phone}</p>
                    </div>
                    <div>
                      <h3 className={`text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Office</h3>
                      <p className={`${darkMode ? 'text-white' : 'text-black'}`}>{professorData.contact.office}</p>
                    </div>
                  </div>
                </Card>

                <Card className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                  <h2 className={`text-2xl font-serif font-medium mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Get In Touch
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          darkMode 
                            ? 'bg-black/30 border-white/20 text-white placeholder-white/50' 
                            : 'bg-white border-black/20 text-black placeholder-black/50'
                        } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Your Email</label>
                      <input
                        type="email"
                        id="email"
                        className={`w-full px-4 py-2 rounded-lg border ${
                          darkMode 
                            ? 'bg-black/30 border-white/20 text-white placeholder-white/50' 
                            : 'bg-white border-black/20 text-black placeholder-black/50'
                        } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        className={`w-full px-4 py-2 rounded-lg border ${
                          darkMode 
                            ? 'bg-black/30 border-white/20 text-white placeholder-white/50' 
                            : 'bg-white border-black/20 text-black placeholder-black/50'
                        } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    <Button
                      type="submit"
                      className={`rounded-full ${
                        darkMode 
                          ? 'bg-white text-black hover:bg-white/90' 
                          : 'bg-black text-white hover:bg-black/90'
                      }`}
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
    </MacbookProLayout>
  );
};