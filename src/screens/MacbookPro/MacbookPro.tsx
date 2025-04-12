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
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";

export const MacbookPro = (): JSX.Element => {
  // ===== STATE MANAGEMENT =====
  // Controls dark/light mode toggle
  const [darkMode, setDarkMode] = useState(false);
  // Tracks which video is active in the carousel
  const [activeVideoDot, setActiveVideoDot] = useState(0);
  // Tracks which gallery image is active in the carousel
  const [activeGalleryDot, setActiveGalleryDot] = useState(0);

  // ===== DATA COLLECTIONS =====
  // Navigation items for the header menu
  const navItems = [
    "home", "actor", "author", "professor", "courses", "blog", "contact"
  ];

  // Video reel data for the video player section
  const videoReels = [
    { id: "_p5b5KJrIT4", title: "Theatrical Reel (2025)" }, // YouTube video IDs
    { id: "i1S82a1Ag1Q", title: "History of Breakfast (Commercial)" }, // Extracted YouTube video ID
    { id: "G8KOUnPRwJE", title: "Real Spit! (Trailer)" },
    { id: "enrZJWfOL6s", title: "Blueberry - Short Film (Full)" }, // Extracted YouTube video ID
  ];

  // Social media icons data
  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  // Gallery images data
  const galleryImages = [
    { id: 1, src: "/stevie_headshot_008.jpg", alt: "Headshot (1)" },
    { id: 2, src: "/stevie_headshot_207.jpg", alt: "Headshot (2)" },
    { id: 3, src: "/stevie_headshot_287.jpg", alt: "Headshot (3)" },
    { id: 4, src: "/stevie_lovepotion.jpg", alt: "Headshot (4)" },
  ];

  // ===== THEME CLASSES =====
  // Dynamic classes that change based on darkMode state
  const themeClasses = {
    text: darkMode ? 'text-white' : 'text-black', // Text color
    textMuted: darkMode ? 'text-white/80' : 'text-black/80', // Secondary text
    textDimmed: darkMode ? 'text-white/60' : 'text-black/60', // Tertiary text
    textFooter: darkMode ? 'text-white/30' : 'text-black/30', // Footer text
    bg: darkMode ? 'bg-black/2.5' : 'bg-gray-100/30', // Background
    menuBg: darkMode ? 'bg-white/20 hover:bg-white/30' : 'bg-black/20 hover:bg-black/30', // Menu background
    btnBg: darkMode ? 'bg-white/80 hover:bg-white text-black' : 'bg-black/80 hover:bg-black text-white', // Button styles
    divider: darkMode ? 'bg-white/20' : 'bg-black/20', // Divider line
    menuLines: darkMode ? 'bg-white' : 'bg-black' // Hamburger menu lines
  };

  // ===== GALLERY NAVIGATION =====
  // Handles gallery image navigation (previous/next)
  const navigateGallery = (direction: 'prev' | 'next') => {
    setActiveGalleryDot(prev => {
      if (direction === 'prev') {
        return prev === 0 ? galleryImages.length - 1 : prev - 1; // Loop to end if at start
      } else {
        return prev === galleryImages.length - 1 ? 0 : prev + 1; // Loop to start if at end
      }
    });
  };

  return (
    // ===== ROOT CONTAINER =====
    // Applies dark mode class and centers content
    <div className={`flex flex-row justify-center w-full font-sans ${darkMode ? 'dark' : ''}`}>
      
      {/* ===== GLOBAL STYLES ===== */}
      {/* Imports and defines custom fonts for the entire application */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600&display=swap');
        .font-fleur { font-family: 'Fleur De Leah', cursive; } // Decorative font for name
        .font-serif { font-family: 'Playfair Display', serif; } // Elegant serif font
        .font-sans { font-family: 'Montserrat', sans-serif; } // Clean sans-serif font
      `}</style>

      {/* ===== MAIN LAYOUT CONTAINER ===== */}
      {/* Sets max width and ensures full viewport height */}
      <div className="bg-transparent overflow-hidden w-full max-w-[1800px] min-h-screen">
        
        {/* ===== CONTENT WRAPPER ===== */}
        {/* Positions all content relative to this container */}
        <div className="relative w-full h-[1600px] top-[50px] bg-transparent">
          
          {/* ===== BACKGROUND PANEL ===== */}
          {/* Creates the rounded background behind content */}
          <div className={`absolute w-full h-[1550px] top-0 rounded-[50px] ${themeClasses.bg}`} />

          {/* ===== HEADER/NAVIGATION SECTION ===== */}
          {/* Fixed header with menu, navigation, and theme controls */}
          <div className="absolute top-8 w-full px-12 flex items-center justify-between">
            
            {/* ===== MENU BUTTON ===== */}
            {/* Hamburger menu button with animated rotation */}
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

            {/* ===== NAVIGATION MENU ===== */}
            {/* Centered navigation links in a pill-shaped container */}
            <NavigationMenu>
              <NavigationMenuList className={`rounded-full px-8 py-2 space-x-6 transition-all duration-300 ${themeClasses.menuBg}`}>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <Button 
                      variant="ghost" 
                      asChild
                      className={`text-lg font-serif ${index === 0 ? 'font-medium' : 'font-normal'} 
                        ${themeClasses.text} hover:bg-transparent hover:underline transition-all duration-200`}
                    >
                      <a href={`/${item === "home" ? "" : item}`}>{item}</a>
                    </Button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* ===== RIGHT CONTROLS ===== */}
            {/* Theme toggle and sign-in button */}
            <div className="flex items-center space-x-4">
              
              {/* Dark/Light Mode Toggle */}
              <Button 
                className={`w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 ${themeClasses.menuBg}`}
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                {darkMode ? 
                  <Sun className={themeClasses.text} /> : 
                  <Moon className={themeClasses.text} />
                }
              </Button>
              
              {/* Sign In Button */}
              <Button className={`px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 ${themeClasses.btnBg}`}>
                <span className="text-xl font-medium">sign in</span>
              </Button>
            </div>
          </div>

          {/* ===== MAIN CONTENT AREA ===== */}
          {/* All page content below the header */}
          <div className="absolute top-40 w-full px-24">
            
            {/* ===== NAME HEADER ===== */}
            {/* Large decorative name display */}
            <div className="text-center mb-4">
              <div className="flex justify-center items-center space-x-4">
                {["Stevie", "Johnson"].map((name, i) => (
                  <h1 key={i} className={`text-[10rem] font-fleur leading-[0.8] ${i === 0 ? 'tracking-tight' : ''} transition-all duration-500 ${themeClasses.text}`}>
                    {name}
                  </h1>
                ))}
              </div>
              <p className={`text-xl mt-6 font-serif transition-all duration-300 ${themeClasses.textMuted}`}>
                Actor / Author / Professor / Director
              </p>
            </div>

            {/* ===== DIVIDER ===== */}
            {/* Horizontal separator line */}
            <Separator className={`my-8 transition-all duration-300 ${themeClasses.divider}`} />

            {/* ===== MEDIA SECTION ===== */}
            {/* Contains video player and image gallery side-by-side */}
            <div className="flex space-x-24">
              
              {/* ===== VIDEO PLAYER (2/3 WIDTH) ===== */}
              <div className="w-2/3 flex flex-col">
                
                {/* Video Title and Actions */}
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
                
                {/* Video Player Container */}
                <div className="relative group" style={{ height: '600px' }}>
                  <Card className={`rounded-3xl overflow-hidden transition-all duration-500 h-full ${darkMode ? 'bg-black' : 'bg-black'}`}>
                    <iframe
                      className="w-full h-full group-hover:opacity-90 transition-opacity duration-300"
                      src={`https://www.youtube.com/embed/${videoReels[activeVideoDot].id}`}
                      title="YouTube video player"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </Card>
                  
                  {/* Video Navigation Arrows */}
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
                        className="h-12 w-12 hover:scale-110 transition-transform duration-200" 
                      />
                    </button>
                  ))}
                </div>
                
                {/* Video Progress Dots */}
                <div className="flex justify-center mt-6 space-x-3 p-2 bg-black/0 dark:bg-white/0 rounded-full">
                  {videoReels.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveVideoDot(i)}
                      className={`h-3 rounded-full transition-all duration-300 
                        ${i === activeVideoDot ? 'w-8 bg-black dark:bg-white' : 'w-4 bg-black/30 dark:bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>

              {/* ===== GALLERY (1/3 WIDTH) ===== */}
              <div className="w-1/3 flex flex-col">
                
                {/* Gallery Title */}
                <div className={`transition-all duration-300 ${themeClasses.text} mb-3`}>
                  <h2 className="text-3xl font-serif font-medium">
                    Gallery
                  </h2>
                  {/* Hidden spacer for alignment */}
                  <div className={`flex space-x-4 text-sm font-sans mt-2 transition-all duration-300 ${themeClasses.textDimmed}`}>
                    <span className="opacity-0">Spacer</span>
                  </div>
                </div>
                
                {/* Gallery Image Container */}
                <div className="relative group" style={{ height: '600px' }}>
                  <Card className={`rounded-3xl overflow-hidden transition-all duration-500 h-full ${darkMode ? 'bg-black/20' : 'bg-white/20'}`}>
                    <img
                      src={galleryImages[activeGalleryDot].src}
                      alt={galleryImages[activeGalleryDot].alt}
                      className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                    />
                  </Card>
                  
                  {/* Gallery Navigation Arrows */}
                  {["polygon-2.svg", "polygon-1.svg"].map((src, i) => (
                    <button 
                      key={i}
                      className={`absolute ${i === 0 ? '-left-12' : '-right-12'} top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      onClick={() => navigateGallery(i === 0 ? 'prev' : 'next')}
                    >
                      <img 
                        src={`/${src}`} 
                        alt={i === 0 ? "Previous" : "Next"} 
                        className="h-10 w-10 hover:scale-110 transition-transform duration-200" 
                      />
                    </button>
                  ))}
                </div>
                
                {/* Gallery Progress Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                  {galleryImages.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveGalleryDot(i)}
                      className={`h-3 rounded-full transition-all duration-300 
                        ${i === activeGalleryDot ? 'w-8 bg-black dark:bg-white' : 'w-4 bg-black/30 dark:bg-white/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* ===== ABOUT ME SECTION ===== */}
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
                
                {/* ===== SOCIAL ICONS ===== */}
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
          </div>

          {/* ===== FOOTER ===== */}
          {/* Fixed footer at bottom of viewport */}
          <footer className={`fixed bottom-0 left-0 right-0 py-4 text-center text-sm font-sans transition-all duration-300 ${themeClasses.textFooter}`}>
            @2025 jakejohndoe
          </footer>
        </div>
      </div>
    </div>
  );
};