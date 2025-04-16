import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Separator } from "../../components/ui/separator";

export const Courses = () => {
  const [darkMode, setDarkMode] = useState(true); // Match Actor.tsx

  const courses = [
    {
      code: "COMM 401",
      title: "Advanced Public Speaking",
      description: "Master professional presentation skills with advanced techniques in audience engagement, persuasive speaking, and handling Q&A sessions.",
      term: "Fall 2023",
      credits: 3,
      level: "Advanced",
    },
    {
      code: "WRIT 350",
      title: "Character Development Workshop",
      description: "Create compelling characters through psychological profiling, backstory development, and dynamic dialogue techniques.",
      term: "Spring 2024",
      credits: 4,
      level: "Intermediate",
    },
    {
      code: "PERF 210",
      title: "Improvisation Fundamentals",
      description: "Build spontaneity and creative thinking through theatrical exercises and real-world scenario practice.",
      term: "Winter 2024",
      credits: 3,
      level: "Beginner",
    },
    {
      code: "COMM 101",
      title: "Speech Fundamentals",
      description: "Essential techniques for confident public speaking in academic and professional settings.",
      term: "Summer 2024",
      credits: 3,
      level: "Introductory",
    },
  ];

  return (
    <MacbookProLayout
      darkMode={darkMode}
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="courses"
    >
      <div
        className="overflow-y-auto pt-4 px-24"
        style={{
          height: "calc(100vh - 10rem)",
          top: "10rem",
          padding: "2rem",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1
              className={`text-[3rem] md:text-[5rem] font-fleur leading-[0.8] ${
                darkMode ? "text-blue-100 text-glow-blue" : "text-blue-900"
              }`}
            >
              Course Catalog
            </h1>
            <p
              className={`text-lg md:text-xl font-serif ${
                darkMode ? "text-blue-200/80" : "text-blue-800/80"
              }`}
            >
              Current and upcoming course offerings
            </p>
          </div>

          <Separator className="my-6 bg-blue-800/40" />

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className={`p-6 rounded-3xl bg-blue-900/30 neon-glow transition-all hover:scale-[1.01] duration-300`}
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-sm font-mono font-bold text-blue-100">
                    {course.code}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-800/30 text-blue-200/80">
                    {course.level}
                  </span>
                </div>

                <h2 className="text-xl font-serif font-medium text-blue-100 mb-2">
                  {course.title}
                </h2>
                <p className="text-sm text-blue-200/80 mb-4">
                  {course.description}
                </p>

                <div className="flex justify-between text-xs text-blue-200/60 mb-4">
                  <span>{course.term}</span>
                  <span>
                    {course.credits} credit{course.credits !== 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    className="rounded-full text-xs px-4 py-1 border-blue-200 text-blue-200 hover:bg-blue-800/20 transition"
                  >
                    View Syllabus
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full text-xs px-4 py-1 border-blue-200 text-blue-200 hover:bg-blue-800/20 transition"
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
