// components/layout/MacbookProLayout.tsx
import React from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Separator } from "../ui/separator";
import { Sun, Moon } from "lucide-react";

interface MacbookProLayoutProps {
  children: React.ReactNode;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  activeNavItem?: string;
}

export const MacbookProLayout = ({ 
  children,
  darkMode = false,
  toggleDarkMode = () => {},
  activeNavItem = "home"
}: MacbookProLayoutProps) => {
  const navItems = ["home", "actor", "author", "professor", "courses", "blog", "contact"];

  const themeClasses = {
    text: darkMode ? 'text-white' : 'text-black',
    textMuted: darkMode ? 'text-white/80' : 'text-black/80',
    textDimmed: darkMode ? 'text-white/60' : 'text-black/60',
    textFooter: darkMode ? 'text-white/30' : 'text-black/30',
    bg: darkMode ? 'bg-black/2.5' : 'bg-gray-100/30',
    menuBg: darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-black/20 hover:bg-black/30',
    btnBg: darkMode ? 'bg-white/80 hover:bg-white text-black' : 'bg-black/80 hover:bg-black text-white',
    divider: darkMode ? 'bg-white/20' : 'bg-black/20',
    menuLines: darkMode ? 'bg-white' : 'bg-black'
  };

  return (
    <div className={`flex flex-row justify-center w-full font-sans ${darkMode ? 'dark' : ''}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        .font-fleur { font-family: 'Fleur De Leah', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="bg-transparent overflow-hidden w-full max-w-[1800px] min-h-screen">
        <div className="relative w-full min-h-[calc(100vh-50px)] top-[50px] bg-transparent pb-16">
            <div className={`absolute w-full min-h-full top-0 rounded-[50px] ${themeClasses.bg}`} />

          {/* Header/Navigation */}
          <div className="absolute top-8 w-full px-12 flex items-center justify-between">
            <Button 
              className="w-12 h-12 rounded-full bg-white/60 hover:bg-white/80 transition-all duration-300 hover:rotate-90"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className={`w-full h-1 ${themeClasses.menuLines} rounded transition-all`} />
                ))}
              </div>
            </Button>

            <NavigationMenu>
              <NavigationMenuList className={`rounded-full px-8 py-2 space-x-6 transition-all duration-300 ${themeClasses.menuBg}`}>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item}>
                    <Button 
                      variant="ghost" 
                      asChild
                      className={`text-lg font-serif ${item === activeNavItem ? 'font-medium' : 'font-normal'} 
                        ${themeClasses.text} hover:bg-transparent hover:underline transition-all duration-200`}
                    >
                      <a href={`/${item === "home" ? "" : item}`}>{item}</a>
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Button 
                className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${themeClasses.menuBg}`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className={themeClasses.text} /> : <Moon className={themeClasses.text} />}
              </Button>
              
              <Button className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${themeClasses.btnBg}`}>
                <span className="text-xl font-medium">sign in</span>
              </Button>
            </div>
          </div>

          {/* Main content area */}
          <div className="absolute top-40 w-full px-24">
            {children}
          </div>

          <footer className={`absolute bottom-0 left-0 right-0 py-4 text-center text-sm font-sans transition-all duration-300 ${themeClasses.textFooter}`}>
            @2025 jakejohndoe
          </footer>
        </div>
      </div>
    </div>
  );
};