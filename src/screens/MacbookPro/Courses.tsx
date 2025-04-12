import React from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export const Courses = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const courses = [
    {
      code: "COMM 401",
      title: "Advanced Public Speaking",
      description: "Master professional presentation skills with advanced techniques in audience engagement, persuasive speaking, and handling Q&A sessions.",
      term: "Fall 2023",
      credits: 3,
      level: "Advanced"
    },
    {
      code: "WRIT 350",
      title: "Character Development Workshop",
      description: "Create compelling characters through psychological profiling, backstory development, and dynamic dialogue techniques.",
      term: "Spring 2024",
      credits: 4,
      level: "Intermediate"
    },
    {
      code: "PERF 210",
      title: "Improvisation Fundamentals",
      description: "Build spontaneity and creative thinking through theatrical exercises and real-world scenario practice.",
      term: "Winter 2024",
      credits: 3,
      level: "Beginner"
    },
    {
      code: "COMM 101",
      title: "Speech Fundamentals",
      description: "Essential techniques for confident public speaking in academic and professional settings.",
      term: "Summer 2024",
      credits: 3,
      level: "Introductory"
    }
  ];

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="courses"
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-[3rem] md:text-[5rem] font-fleur leading-[0.8] ${darkMode ? 'text-white' : 'text-black'}`}>
              Course Catalog
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              Current and upcoming course offerings
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Course Cards - Centered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'} hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex justify-between items-start mb-2">
                  <span className={`font-mono font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                    {course.code}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    darkMode 
                      ? 'bg-white/10 text-white/80' 
                      : 'bg-black/10 text-black/80'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <h2 className={`text-xl font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                  {course.title}
                </h2>
                
                <p className={`text-sm mb-4 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                  {course.description}
                </p>
                
                <div className={`flex justify-between text-xs mb-4 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                  <span>{course.term}</span>
                  <span>{course.credits} credit{course.credits !== 1 ? 's' : ''}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className={`rounded-full text-xs px-4 py-1 ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white/10' 
                        : 'border-black text-black hover:bg-black/10'
                    }`}
                  >
                    View Syllabus
                  </Button>
                  <Button
                    variant="outline"
                    className={`rounded-full text-xs px-4 py-1 ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white/10' 
                        : 'border-black text-black hover:bg-black/10'
                    }`}
                  >
                    Register
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MacbookProLayout>
  );
};