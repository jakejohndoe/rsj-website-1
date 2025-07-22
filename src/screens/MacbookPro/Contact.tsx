import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Contact = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  
  const socialIcons = [
    { src: "/img-icons8-1.png", alt: "Facebook" },
    { src: "/img-icons8-1-1.png", alt: "Instagram" },
    { src: "/img-icons8-2-1.png", alt: "YouTube" },
    { src: "/img-icons8-3-1.png", alt: "TikTok" },
  ];

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="contact"
    >
      <div className="overflow-y-auto pt-4 px-24" style={{ 
        height: 'calc(100vh - 10rem)',
        top: '10rem',
        padding: '2rem'
      }}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-[3rem] md:text-[5rem] font-fleur leading-[0.8] text-blue-100 text-glow-blue">
              Contact
            </h1>
            <p className="text-lg md:text-xl font-serif text-blue-200/80">
              For booking inquiries, speaking engagements, or general questions
            </p>
          </div>

          <Separator className="my-6 bg-blue-800/40" />

          {/* Content Card */}
          <Card className="p-8 rounded-3xl mb-16 bg-blue-900/30 neon-glow">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Contact Info */}
              <div className="space-y-6">
                <h2 className="text-2xl font-serif font-medium text-blue-100">
                  Get in Touch
                </h2>
                <ul className="space-y-4 text-lg text-blue-200/80">
                  <li>
                    <h3 className="font-serif font-medium text-blue-100">Email:</h3>
                    <p>steviejohnson101@gmail.com</p>
                  </li>
                  <li>
                    <h3 className="font-serif font-medium text-blue-100">Phone:</h3>
                    <p>(213) 944-6059</p>
                  </li>
                  <li>
                    <h3 className="font-serif font-medium text-blue-100">Agents:</h3>
                    <p>True Artists Agency</p>
                    <p>BiCoastal Talent Agency</p>
                    <p>Jenni Sacks Agency</p>
                  </li>
                </ul>

                <div>
                  <h3 className="font-serif font-medium mb-3 text-blue-100">
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
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-blue-200/70">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Smith"
                    className="w-full p-3 border border-blue-800/40 rounded-lg bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-blue-200/70">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-blue-800/40 rounded-lg bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-blue-200/70">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can I help you?"
                    className="w-full p-3 border border-blue-800/40 rounded-lg bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-4 text-lg rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-all duration-300 hover:translate-y-0.5"
                >
                  Send Message
                </Button>
              </div>
            </div>
          </Card>

          {/* Additional Contact Card */}
          <Card className="p-6 rounded-3xl bg-blue-900/30 neon-glow">
            <div className="text-center">
              <h2 className="text-xl font-serif font-medium text-blue-100 mb-2">
                Looking for immediate assistance?
              </h2>
              <p className="text-blue-200/80 mb-4">
                Contact my agent directly for urgent booking inquiries
              </p>
              <Button
                variant="outline"
                className="rounded-full border-blue-400 text-blue-200 hover:bg-blue-900/30"
              >
                Agent Contact Info
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </ModernLayout>
  );
};