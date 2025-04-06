import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { Sun, Moon } from "lucide-react"; // For dark/light mode toggle

export const MacbookPro = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeDot, setActiveDot] = useState(0);

  // Navigation menu items
  const navItems = [
    { name: "home", isActive: true },
    { name: "actor", isActive: false },
    { name: "author", isActive: false },
    { name: "professor", isActive: false },
    { name: "courses", isActive: false },
    { name: "blog", isActive: false },
    { name: "contact", isActive: false },
  ];

  // Video reel data
  const videoReels = [
    { id: "_p5b5KJrIT4", title: "Theatrical Reel (2025)" },
    { id: "example1", title: "Dramatic Work (2024)" },
    { id: "example2", title: "Commercial Work (2023)" },
  ];

  // Social media icons
  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  return (
    <div className={`flex flex-row justify-center w-full font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Custom font definitions */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        .font-fleur { font-family: 'Fleur De Leah', cursive; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
      `}</style>

      <div className="bg-transparent overflow-hidden w-[1728px] h-[1117px]">
        <div className="relative w-[1442px] h-[1017px] top-[103px] left-36 bg-transparent">
          {/* Background container - now supports dark mode */}
          <div className={`absolute w-[1440px] h-[1014px] top-0 left-0 rounded-[50px] backdrop-blur-sm
            ${darkMode ? 'bg-black/70' : 'bg-white/20'}`} />

          {/* Header/Navigation section */}
          <div className="absolute top-8 w-full px-12 flex items-center justify-between">
            {/* Menu button with animation */}
            <Button 
              className="w-12 h-12 rounded-full bg-white/60 hover:bg-white/80 transition-all duration-300 hover:rotate-90"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6 flex flex-col justify-between items-center">
                <div className={`w-full h-1 ${darkMode ? 'bg-white' : 'bg-black'} rounded transition-all`} />
                <div className={`w-full h-1 ${darkMode ? 'bg-white' : 'bg-black'} rounded transition-all`} />
                <div className={`w-full h-1 ${darkMode ? 'bg-white' : 'bg-black'} rounded transition-all`} />
              </div>
            </Button>

            {/* Navigation menu */}
            <NavigationMenu>
              <NavigationMenuList className={`rounded-full px-8 py-2 space-x-6 transition-all duration-300
                ${darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-black/20 hover:bg-black/30'}`}>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Button 
                      variant="ghost" 
                      asChild
                      className={`text-lg font-serif ${item.isActive ? 'font-medium' : 'font-normal'} 
                        ${darkMode ? 'text-white hover:text-white/80' : 'text-black hover:text-black/80'}
                        hover:bg-transparent hover:underline transition-all duration-200`}
                    >
                      <a href={`/${item.name === "home" ? "" : item.name}`}>
                        {item.name}
                      </a>
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              {/* Search button */}
              <Button 
                className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110
                  ${darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-black/20 hover:bg-black/30'}`}
                aria-label="Search"
              >
                <div className="relative w-7 h-[23px]">
                  <div className={`w-[23px] h-5 left-0 rounded-[11.72px/10.12px] border-[3px] border-solid 
                    ${darkMode ? 'border-white' : 'border-black'} absolute top-0 transition-all`} />
                  <img
                    className="absolute w-[11px] h-2.5 top-[13px] left-[17px]"
                    alt="Line"
                    src="/line-1.svg"
                  />
                </div>
              </Button>

              {/* Dark/Light mode toggle */}
              <Button 
                className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110
                  ${darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-black/20 hover:bg-black/30'}`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-black'}`} />
                ) : (
                  <Moon className={`w-5 h-5 ${darkMode ? 'text-white' : 'text-black'}`} />
                )}
              </Button>
              
              {/* Sign in button */}
              <Button 
                className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105
                  ${darkMode ? 'bg-white/80 hover:bg-white text-black' : 'bg-black/80 hover:bg-black text-white'}`}
              >
                <span className="text-xl font-medium">sign in</span>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="absolute top-48 w-full px-24">
            {/* Name Header */}
            <div className="text-center mb-6">
              <div className="flex justify-center items-center space-x-4">
                <h1 className={`text-[12rem] font-fleur leading-[0.8] tracking-tight transition-all duration-500
                  ${darkMode ? 'text-white' : 'text-black'}`}>
                  Stevie
                </h1>
                <h1 className={`text-[12rem] font-fleur leading-[0.8] transition-all duration-500
                  ${darkMode ? 'text-white' : 'text-black'}`}>
                  Johnson
                </h1>
              </div>
              <p className={`text-xl mt-4 font-serif transition-all duration-300
                ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                Actor / Professor / Director / Therapist / Father
              </p>
            </div>

            {/* Divider */}
            <Separator className={`my-12 transition-all duration-300 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

            {/* Video Section */}
            <div className="flex space-x-16">
              <div className="w-2/3">
                {/* Video title and actions */}
                <div className={`transition-all duration-300 ${darkMode ? 'text-white' : 'text-black'}`}>
                  <h2 className="text-3xl font-serif font-medium mb-1">
                    {videoReels[activeDot].title}
                  </h2>
                  <div className={`flex space-x-4 text-sm font-sans transition-all duration-300
                    ${darkMode ? 'text-white/60 hover:text-white/80' : 'text-black/60 hover:text-black/80'}`}>
                    <button className="hover:underline">Watch later</button>
                    <button className="hover:underline">Share</button>
                  </div>
                </div>
                
                {/* Video Player */}
                <div className="relative group">
                  <Card className={`aspect-video w-full rounded-3xl overflow-hidden transition-all duration-500
                    ${darkMode ? 'bg-black/90' : 'bg-white/90'}`}>
                    <iframe
                      className="w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                      src={`https://www.youtube.com/embed/${videoReels[activeDot].id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </Card>
                  
                  {/* Navigation Arrows */}
                  <button 
                    className="absolute -left-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setActiveDot((prev) => (prev === 0 ? videoReels.length - 1 : prev - 1))}
                  >
                    <img 
                      src="/polygon-2.svg" 
                      alt="Previous" 
                      className="h-10 w-10 hover:scale-110 transition-transform duration-200" 
                    />
                  </button>
                  <button 
                    className="absolute -right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => setActiveDot((prev) => (prev === videoReels.length - 1 ? 0 : prev + 1))}
                  >
                    <img 
                      src="/polygon-1.svg" 
                      alt="Next" 
                      className="h-10 w-10 hover:scale-110 transition-transform duration-200" 
                    />
                  </button>
                </div>
                
                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 space-x-2">
                  {videoReels.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveDot(i)}
                      className={`w-3 h-3 rounded-full transition-all duration-300
                        ${i === activeDot ? 
                          (darkMode ? 'bg-white w-6' : 'bg-black w-6') : 
                          (darkMode ? 'bg-white/30' : 'bg-black/30')}`}
                    />
                  ))}
                </div>
              </div>

              {/* About Me Section */}
              <div className="w-1/3 pt-12">
                <h2 className={`text-4xl font-serif font-medium mb-6 transition-all duration-300
                  ${darkMode ? 'text-white' : 'text-black'}`}>
                  About Me:
                </h2>
                <p className={`text-lg leading-relaxed font-sans transition-all duration-300
                  ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                  Stevie Johnson is an actor, director, producer, and professor dedicated to storytelling in all its forms.
                  <br /><br />
                  A father, artist, and visionary, Stevie brings passion and authenticity to every project he undertakes.
                </p>
                
                {/* Social Icons */}
                <div className="mt-12 flex space-x-4">
                  {socialIcons.map((icon, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="w-12 h-12 object-cover hover:opacity-80 transition-opacity duration-300 hover:-translate-y-1"
                    >
                      <img
                        alt={icon.alt}
                        src={icon.src}
                        className="w-full h-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className={`absolute bottom-8 w-full text-center text-sm font-sans transition-all duration-300
            ${darkMode ? 'text-white/30' : 'text-black/30'}`}>
            @2025 jakejohndoe
          </footer>
        </div>
      </div>
    </div>
  );
};