import React from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";

export const Courses = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="author"
    >
      {/* Your author page content */}
    </MacbookProLayout>
  );
};