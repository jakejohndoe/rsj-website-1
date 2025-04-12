import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Contact = () => {
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
      activeNavItem="contact"
      className="relative"
    >
      {/* NUCLEAR SCROLL SOLUTION - SAME AS ACTOR.TSX */}
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
              Contact Stevie
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              For booking inquiries, speaking engagements, or general questions
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Content Card */}
          <Card className={`p-8 rounded-3xl mb-16 ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <h2 className={`text-2xl font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>
                  Get in Touch
                </h2>
                <ul className={`space-y-4 text-lg ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                  <li>
                    <h3 className={`font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Email:</h3>
                    <p>steviejohnson101@gmail.com</p>
                  </li>
                  <li>
                    <h3 className={`font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Phone:</h3>
                    <p>(213) 944-6059</p>
                  </li>
                  <li>
                    <h3 className={`font-serif font-medium ${darkMode ? 'text-white' : 'text-black'}`}>Agents:</h3>
                    <p>True Artists Agency</p>
                    <p>BiCoastal Talent Agency</p>
                    <p>Jenni Sacks Agency</p>
                  </li>
                </ul>

                <div>
                  <h3 className={`font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                    Connect with me:
                  </h3>
                  <div className="flex space-x-4">
                    {socialIcons.map((icon) => (
                      <a 
                        key={icon.alt}
                        href="#"
                        className="w-10 h-10 hover:opacity-80 transition-all duration-300 hover:-translate-y-1"
                      >
                        <img src={icon.src} alt={icon.alt} className="w-full h-full" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className={`w-full p-3 border rounded-lg ${darkMode ? 'bg-black/20 border-white/20 text-white' : 'bg-white border-black/20 text-black'}`}
                />
                <Button
                  type="submit"
                  className={`w-full py-4 text-lg rounded-full transition-all duration-300 hover:translate-y-0.5 ${darkMode ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/90'}`}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MacbookProLayout>
  );
};