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
import { SignInModal } from "../auth/SignInModal";

interface MacbookProLayoutProps {
  children: React.ReactNode;
  darkMode?: boolean;
  toggleDarkMode?: () => void;
  activeNavItem?: string;
}

export const MacbookProLayout = ({ 
  children,
  darkMode = true,
  toggleDarkMode = () => {},
  activeNavItem = "home"
}: MacbookProLayoutProps) => {
  const [showSignInModal, setShowSignInModal] = React.useState(false);
  const navItems = ["home", "actor", "author", "professor", "courses", "contact"];

  const themeClasses = {
    text: darkMode ? 'text-blue-100' : 'text-purple-900',
    textMuted: darkMode ? 'text-blue-200/80' : 'text-purple-800/80',
    textDimmed: darkMode ? 'text-blue-200/60' : 'text-purple-800/60',
    textFooter: darkMode ? 'text-blue-200/30' : 'text-purple-800/30',
    bg: darkMode ? 'bg-blue-950/10' : 'bg-purple-50/80',
    menuBg: darkMode ? 'bg-blue-800/30 hover:bg-blue-800/50' : 'bg-purple-400/10 hover:bg-purple-400/20',
    btnBg: darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-purple-700 hover:bg-purple-800 text-white',
    divider: darkMode ? 'bg-blue-800/40' : 'bg-purple-400/40',
    menuLines: darkMode ? 'bg-blue-200' : 'bg-purple-800',
    activeItem: darkMode ? 'text-blue-300 font-medium' : 'text-purple-500 font-medium',
    glow: darkMode ? 'neon-glow' : ''
  };

  return (
    <div className={`flex flex-col min-h-screen w-full font-sans ${darkMode ? 'dark' : ''}`}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        .font-fleur { font-family: 'Fleur De Leah', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}</style>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-[100px]">
        <div className="w-full px-12 flex items-center justify-between h-full">
          <Button 
            className={`w-12 h-12 rounded-full bg-transparent hover:bg-blue-500/20 transition-all duration-300 hover:rotate-[360deg] overflow-hidden p-0 ${themeClasses.glow}`}
            aria-label="Menu"
          >
            <img 
              src="/ChromeTransparent.png" 
              alt="Menu" 
              className="w-full h-full object-cover"
            />
          </Button>

          <NavigationMenu>
            <NavigationMenuList className={`rounded-full px-8 py-2 space-x-6 transition-all duration-300 ${themeClasses.menuBg} backdrop-blur-md`}>
              {navItems.map((item) => (
                <NavigationMenuItem key={item}>
                  <Button 
                    variant="ghost" 
                    asChild
                    className={`text-lg font-serif ${item === activeNavItem ? themeClasses.activeItem : 'font-normal'} 
                      ${themeClasses.text} hover:bg-transparent hover:text-blue-400 transition-all duration-200`}
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
            
            <Button 
              className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${themeClasses.btnBg} ${themeClasses.glow}`}
              onClick={() => setShowSignInModal(true)}
            >
              <span className="text-xl font-medium">sign in</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Scrollable Content Area */}
      <main className="flex-grow pt-[100px] pb-16">
        <div className={`absolute inset-0 -z-10 ${themeClasses.bg} backdrop-blur-sm rounded-[50px]`} />
        <div className="w-full max-w-[1800px] mx-auto px-24">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className={`py-4 text-center text-sm font-sans ${themeClasses.textFooter}`}>
        @2025 jakejohndoe
      </footer>

      {/* Sign In Modal */}
      {showSignInModal && (
        <SignInModal 
          darkMode={darkMode}
          onClose={() => setShowSignInModal(false)}
        />
      )}
    </div>
  );
};