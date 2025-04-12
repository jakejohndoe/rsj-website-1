import React from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";

export const Blog = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  
  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="blog"
    >
      <div>Blog content goes here</div>
    </MacbookProLayout>
  );
};