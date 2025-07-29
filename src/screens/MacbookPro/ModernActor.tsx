import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Play, Award, Calendar, MapPin, ExternalLink, Download, Instagram, Youtube, Film, ChevronRight } from "lucide-react";

export const ModernActor = () => {
  const [activeReel, setActiveReel] = useState(0);

  const reels = [
    { id: "_p5b5KJrIT4", title: "Theatrical Reel (2025)", description: "Latest performance showcase" },
    { id: "G8KOUnPRwJE", title: "Real Spit! Trailer", description: "Independent film" },
    { id: "enrZJWfOL6s", title: "Blueberry", description: "Short film" }
  ];

  const allCredits = [
    {
      title: "Untitled Project",
      role: "TBA",
      type: "Feature Film",
      year: "2025",
      status: "upcoming",
      color: "from-accent-400 to-accent-500"
    },
    {
      title: "Buffalo Daze",
      role: "Joseph Blackburn Bass",
      type: "Feature Film",
      year: "2023",
      status: "recent",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Triple O.G.",
      role: "Robert",
      type: "Short Film", 
      year: "2022",
      status: "recent",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Animal Kingdom",
      role: "Detective",
      type: "Television",
      year: "2021",
      status: "recent",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blueberry",
      role: "Director/Producer",
      type: "Short Film",
      year: "2023",
      status: "recent",
      color: "from-green-500 to-teal-500"
    }
  ];

  const representation = {
    agent: "True Artists Agency",
    manager: "BiCoastal Talent Agency", 
    publicist: "Jenni Sacks Agency",
    location: "Los Angeles, CA"
  };

  return (
    <ModernLayout activeNavItem="actor">
      {/* COMPACT HEADER SECTION */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-none tracking-tight mb-4">
            <span className="text-holographic">ACTOR • STEVIE JOHNSON</span>
          </h1>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto">
            30+ years bringing stories to life • SAG-AFTRA Member
          </p>
        </div>

        {/* COMPACT STATS ROW */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "30+", label: "Years", icon: Award },
            { value: "100+", label: "Credits", icon: Play },
            { value: "15", label: "Awards", icon: Award },
            { value: "SAG", label: "Union", icon: Film }
          ].map((stat) => (
            <div 
              key={stat.label}
              className="cinematic-theater holographic-border rounded-xl px-6 py-3 flex items-center gap-3"
            >
              <stat.icon className="w-5 h-5 text-accent-400" />
              <div className="text-center">
                <div className="font-heading text-xl font-bold text-holographic">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - VIDEO REEL */}
          <div className="space-y-6">
            <Card className="cinematic-theater holographic-border rounded-2xl p-6">
              <div className="mb-4">
                <h3 className="font-heading text-xl font-bold text-holographic mb-2">
                  {reels[activeReel].title}
                </h3>
                <p className="text-white/60 text-sm">{reels[activeReel].description}</p>
              </div>
              
              <div className="aspect-video rounded-xl overflow-hidden screen-glow mb-4">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${reels[activeReel].id}`}
                  title={reels[activeReel].title}
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Reel Navigation */}
              <div className="flex gap-2">
                {reels.map((reel, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReel(index)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      index === activeReel 
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white' 
                        : 'glass text-white/70 hover:text-white'
                    }`}
                  >
                    {reel.title.split('(')[0].trim()}
                  </button>
                ))}
              </div>
            </Card>

            {/* CONTACT BUTTONS */}
            <div className="flex gap-4">
              <Button className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300" asChild>
                <a href="mailto:steviejohnson101@gmail.com?subject=Acting%20Inquiry">
                  <Download className="w-4 h-4 mr-2" />
                  Contact Booking
                </a>
              </Button>
              <div className="flex gap-2">
                <Button className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 p-0 hover:scale-110 transition-transform duration-300" asChild>
                  <a href="https://www.instagram.com/steviejohnson" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </Button>
                <Button className="w-12 h-12 rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 p-0 hover:scale-110 transition-transform duration-300" asChild>
                  <a href="https://www.youtube.com/@steviejohnson" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - CREDITS */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-heading text-2xl font-bold text-holographic">Credits & Projects</h2>
              <div className="flex gap-2 text-sm">
                <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400">Upcoming</span>
                <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400">Recent</span>
              </div>
            </div>

            {/* COMPACT CREDIT CARDS */}
            <div className="space-y-3 max-h-[600px] overflow-y-auto custom-scrollbar">
              {allCredits.map((credit, index) => (
                <Card 
                  key={`${credit.title}-${index}`}
                  className={`glass rounded-xl p-4 hover-lift group cursor-pointer transition-all duration-300 ${
                    credit.status === 'upcoming' ? 'border-l-4 border-accent-400' : ''
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="font-heading text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                          {credit.title}
                        </h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${credit.color} text-white`}>
                          {credit.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary-400 font-medium">{credit.role}</span>
                        <span className="text-white/50">{credit.year}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-accent-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REPRESENTATION SECTION - COMPACT */}
      <section className="pb-16">
        <Card className="glass rounded-2xl p-8">
          <h2 className="font-heading text-2xl font-bold text-holographic mb-6 text-center">Representation</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <h3 className="text-accent-400 text-sm font-bold mb-1">Agent</h3>
              <p className="text-white/70 text-sm">{representation.agent}</p>
            </div>
            <div className="text-center">
              <h3 className="text-primary-400 text-sm font-bold mb-1">Manager</h3>
              <p className="text-white/70 text-sm">{representation.manager}</p>
            </div>
            <div className="text-center">
              <h3 className="text-accent-400 text-sm font-bold mb-1">Publicist</h3>
              <p className="text-white/70 text-sm">{representation.publicist}</p>
            </div>
            <div className="text-center">
              <h3 className="text-primary-400 text-sm font-bold mb-1">Location</h3>
              <p className="text-white/70 text-sm flex items-center justify-center gap-1">
                <MapPin className="w-3 h-3" />
                {representation.location}
              </p>
            </div>
          </div>
        </Card>
      </section>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </ModernLayout>
  );
};