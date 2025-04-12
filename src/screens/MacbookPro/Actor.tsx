import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Actor = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="actor"
      className="relative"
    >
      {/* NUCLEAR SCROLL SOLUTION - THIS WILL WORK */}
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
              Stevie Johnson, Actor
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              Professional acting portfolio and credits
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Content Card */}
          <Card className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Bio */}
              <div className="space-y-6">
                <h2 className={`text-2xl font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                  Actor Bio
                </h2>
                <div className={`space-y-4 text-lg ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                  <p>20+ years of stage and screen experience</p>
                  <p>100+ Film/Theatre/Television Credits</p>
                  <p>Member of SAG-AFTRA and Actors' Equity</p>
                </div>

                <div>
                  <h3 className={`font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Recent Credits:
                  </h3>
                  <ul className={`space-y-2 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                    <li>- "Buffalo Daze" (Joseph Blackburn Bass - Supporting, 2023)</li>
                    <li>- "Triple O.G." (Robert - Lead, 2022)</li>
                    <li>- "Animal Kingdom" (Detective - Guest Star, 2021)</li>
                  </ul>
                </div>

                <div>
                  <h3 className={`font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Connect with me:
                  </h3>
                  <div className="flex space-x-4">
                    {socialIcons.map((icon) => (
                      <a key={icon.alt} href="#" className="w-10 h-10 hover:opacity-80 transition-all duration-300 hover:-translate-y-1">
                        <img src={icon.src} alt={icon.alt} className="w-full h-full" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Reel */}
              <div className="space-y-6">
                <h2 className={`text-2xl font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                  Theatrical Reel
                </h2>
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/_p5b5KJrIT4"
                    className="w-full h-full"
                    title="Stevie Johnson - Theatrical Reel (2025)"
                    allowFullScreen
                  />
                </div>

                <div>
                  <h3 className={`font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                    Representation:
                  </h3>
                  <ul className={`mt-2 space-y-1 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                    <li>• True Artists Agency</li>
                    <li>• BiCoastal Talent Agency</li>
                    <li>• Jenni Sacks Agency</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MacbookProLayout>
  );
};