import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { Sun, Moon } from "lucide-react";
import { SignInModal } from "../../components/auth/SignInModal";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";

export const MacbookPro = (): JSX.Element => {
  // ===== STATE MANAGEMENT =====
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode for the blue theme
  const [activeVideoDot, setActiveVideoDot] = useState(0);
  const [activeGalleryDot, setActiveGalleryDot] = useState(0);
  const [showSignInModal, setShowSignInModal] = useState(false);

  // ===== DATA COLLECTIONS =====
  const navItems = [
    "home", "actor", "author", "professor", "courses", "blog", "contact"
  ];

  const videoReels = [
    { id: "_p5b5KJrIT4", title: "Theatrical Reel (2025)" },
    { id: "i1S82a1Ag1Q", title: "History of Breakfast (Commercial)" },
    { id: "G8KOUnPRwJE", title: "Real Spit! (Trailer)" },
    { id: "enrZJWfOL6s", title: "Blueberry - Short Film (Full)" },
  ];

  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  const galleryImages = [
    { id: 1, src: "/stevie_headshot_008.jpg", alt: "Headshot (1)" },
    { id: 2, src: "/stevie_headshot_207.jpg", alt: "Headshot (2)" },
    { id: 3, src: "/stevie_headshot_287.jpg", alt: "Headshot (3)" },
    { id: 4, src: "/stevie_lovepotion.jpg", alt: "Headshot (4)" },
  ];

  // ===== THEME CLASSES =====
  const themeClasses = {
    text: darkMode ? 'text-blue-100' : 'text-purple-900',
    textMuted: darkMode ? 'text-blue-200/80' : 'text-purple-800/80',
    textDimmed: darkMode ? 'text-blue-200/60' : 'text-purple-800/60',
    textFooter: darkMode ? 'text-blue-200/30' : 'text-purple-800/30',
    bg: darkMode ? 'bg-blue-950/80' : 'bg-purple-50/80',
    menuBg: darkMode ? 'bg-blue-800/20 hover:bg-blue-800/30' : 'bg-purple-400/20 hover:bg-purple-400/30',
    btnBg: darkMode ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-purple-700 hover:bg-purple-800 text-white',
    divider: darkMode ? 'bg-blue-800/40' : 'bg-purple-400/40',
    cardBg: darkMode ? 'bg-blue-900/50' : 'bg-purple-200/50',
    navDot: darkMode ? 'bg-blue-400/30 dark:bg-blue-300/30' : 'bg-purple-400/30 dark:bg-purple-200/30',
    activeDot: darkMode ? 'bg-blue-400 dark:bg-blue-300' : 'bg-purple-500 dark:bg-purple-300',
    glow: darkMode ? 'text-glow-blue' : ''
  };

  // ===== GALLERY NAVIGATION =====
  const navigateGallery = (direction: 'prev' | 'next') => {
    setActiveGalleryDot(prev => {
      if (direction === 'prev') {
        return prev === 0 ? galleryImages.length - 1 : prev - 1;
      } else {
        return prev === galleryImages.length - 1 ? 0 : prev + 1;
      }
    });
  };

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="home"
    >
      <div className="text-center mb-4">
        <div className="flex justify-center items-center space-x-4">
          {["Stevie", "Johnson"].map((name, i) => (
            <h1 key={i} className={`text-[10rem] font-fleur leading-[0.8] ${i === 0 ? 'tracking-tight' : ''} transition-all duration-500 ${themeClasses.text} ${themeClasses.glow}`}>
              {name}
            </h1>
          ))}
        </div>
        <p className={`text-xl mt-6 font-serif transition-all duration-300 ${themeClasses.textMuted}`}>
          Actor / Author / Professor / Director
        </p>
      </div>

      <Separator className={`my-8 transition-all duration-300 ${themeClasses.divider}`} />

      <div className="flex space-x-24">
        {/* Video Reel Section */}
        <div className="w-2/3 flex flex-col">
          <div className={`transition-all duration-300 ${themeClasses.text} mb-3`}>
            <h2 className="text-3xl font-serif font-medium">
              {videoReels[activeVideoDot].title}
            </h2>
            <div className={`flex space-x-4 text-sm font-sans mt-2 transition-all duration-300 ${themeClasses.textDimmed}`}>
              {["Watch later", "Share"].map((action, i) => (
                <button key={i} className="hover:underline">{action}</button>
              ))}
            </div>
          </div>
          
          <div className="relative group" style={{ height: '600px' }}>
            <Card className={`rounded-3xl overflow-hidden transition-all duration-500 h-full ${themeClasses.cardBg} ${darkMode ? 'neon-glow' : ''}`}>
              <iframe
                className="w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                src={`https://www.youtube.com/embed/${videoReels[activeVideoDot].id}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              />
            </Card>
            
            {["polygon-2.svg", "polygon-1.svg"].map((src, i) => (
              <button 
                key={i}
                className={`absolute ${i === 0 ? '-left-16' : '-right-16'} top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                onClick={() => setActiveVideoDot((prev) => {
                  if (i === 0) return prev === 0 ? videoReels.length - 1 : prev - 1;
                  return prev === videoReels.length - 1 ? 0 : prev + 1;
                })}
              >
                <img 
                  src={`/${src}`} 
                  alt={i === 0 ? "Previous" : "Next"} 
                  className={`h-12 w-12 hover:scale-110 transition-transform duration-200 ${darkMode ? 'filter brightness-125 saturate-150' : ''}`} 
                />
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-3 p-2 rounded-full">
            {videoReels.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveVideoDot(i)}
                className={`h-3 rounded-full transition-all duration-300 
                  ${i === activeVideoDot ? 'w-8 ' + themeClasses.activeDot : 'w-4 ' + themeClasses.navDot}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="w-1/3 flex flex-col">
          <div className={`transition-all duration-300 ${themeClasses.text} mb-3`}>
            <h2 className="text-3xl font-serif font-medium">
              Gallery
            </h2>
            <div className={`flex space-x-4 text-sm font-sans mt-2 transition-all duration-300 ${themeClasses.textDimmed}`}>
              <span className="opacity-0">Spacer</span>
            </div>
          </div>
          
          <div className="relative group" style={{ height: '600px' }}>
            <Card className={`rounded-3xl overflow-hidden transition-all duration-500 h-full ${themeClasses.cardBg} ${darkMode ? 'neon-glow' : ''}`}>
              <img
                src={galleryImages[activeGalleryDot].src}
                alt={galleryImages[activeGalleryDot].alt}
                className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
              />
            </Card>
            
            {["polygon-2.svg", "polygon-1.svg"].map((src, i) => (
              <button 
                key={i}
                className={`absolute ${i === 0 ? '-left-12' : '-right-12'} top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                onClick={() => navigateGallery(i === 0 ? 'prev' : 'next')}
              >
                <img 
                  src={`/${src}`} 
                  alt={i === 0 ? "Previous" : "Next"} 
                  className={`h-10 w-10 hover:scale-110 transition-transform duration-200 ${darkMode ? 'filter brightness-125 saturate-150' : ''}`} 
                />
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 space-x-2">
            {galleryImages.map((_, i) => (
              <button 
                key={i}
                onClick={() => setActiveGalleryDot(i)}
                className={`h-3 rounded-full transition-all duration-300 
                  ${i === activeGalleryDot ? 'w-8 ' + themeClasses.activeDot : 'w-4 ' + themeClasses.navDot}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 w-full">
        <Separator className={`my-6 transition-all duration-300 ${themeClasses.divider}`} />
        
        <div className="flex flex-col items-center">
          <h2 className={`text-4xl font-serif font-medium mb-4 transition-all duration-300 ${themeClasses.text}`}>
            About Me
          </h2>
          <ul className={`text-lg leading-relaxed font-sans text-center max-w-3xl transition-all duration-300 ${themeClasses.textMuted} space-y-2 list-none pl-0`}>
            <li><strong>Stevie Johnson is an actor, director, producer, and professor dedicated to storytelling.</strong></li>
            <li>• A father, artist, and visionary</li>
            <li>• Brings passion and authenticity to every project</li>
            <li>• Committed to artistic excellence</li>
          </ul>
          
          <div className="mt-8 flex space-x-6">
            {socialIcons.map((icon, index) => (
              <a 
                key={index}
                href="#"
                className="w-12 h-12 object-cover hover:opacity-80 transition-opacity duration-300 hover:-translate-y-1"
              >
                <img alt={icon.alt} src={icon.src} className="w-full h-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </MacbookProLayout>
  );
};