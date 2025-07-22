import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Play, Award, Calendar, MapPin, ExternalLink, Download, Instagram, Youtube } from "lucide-react";

export const ModernActor = () => {
  const [darkMode, setDarkMode] = useState(true);

  const recentCredits = [
    {
      title: "The Tempest",
      role: "Prospero",
      type: "Theater",
      year: "2024",
      venue: "USC Theatre",
      description: "Lead role in Shakespeare's masterpiece",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Blueberry",
      role: "Director/Producer", 
      type: "Short Film",
      year: "2023",
      venue: "Independent",
      description: "Award-winning short film",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real Spit!",
      role: "Lead Actor",
      type: "Feature Film",
      year: "2023",
      venue: "Independent",
      description: "Drama exploring urban life",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "History of Breakfast",
      role: "Lead",
      type: "Commercial",
      year: "2024",
      venue: "National Campaign",
      description: "Humorous breakfast commercial",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const skills = [
    { category: "Acting", items: ["Method Acting", "Improvisation", "Character Development", "Voice Work"] },
    { category: "Direction", items: ["Theatre Direction", "Film Direction", "Actor Coaching", "Script Analysis"] },
    { category: "Production", items: ["Project Management", "Casting", "Creative Development", "Post-Production"] },
    { category: "Teaching", items: ["Public Speaking", "Acting Classes", "Workshops", "Mentoring"] }
  ];

  const representation = {
    agent: "Creative Artists Agency",
    manager: "Brillstein Entertainment",
    publicist: "Rogers & Cowan",
    location: "Los Angeles, CA"
  };

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="actor"
    >
      {/* Hero Section */}
      <section className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="font-display text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
                ACTOR
              </h1>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white/90 mb-6">
                Bringing Stories to Life
              </h2>
              <p className="text-xl text-white/70 font-body leading-relaxed">
                With over two decades of experience in theater, film, and television, 
                Stevie Johnson delivers authentic performances that resonate with audiences 
                and bring depth to every character.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300 neon-glow group">
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Watch Reel
              </Button>
              <Button className="px-8 py-4 rounded-full glass text-white font-heading font-medium hover-lift group">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-3xl font-bold text-accent-400">20+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-3xl font-bold text-primary-400">50+</div>
                <div className="text-white/60 text-sm">Productions</div>
              </div>
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-3xl font-bold text-accent-400">15</div>
                <div className="text-white/60 text-sm">Awards</div>
              </div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <Card className="glass rounded-3xl p-6 hover-lift">
              <div className="aspect-video rounded-2xl overflow-hidden neon-glow mb-4">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/_p5b5KJrIT4"
                  title="Theatrical Reel 2025"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-white mb-2">
                  Theatrical Reel (2025)
                </h3>
                <p className="text-white/60 text-sm">
                  Latest performance showcase featuring recent work
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Credits */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
            RECENT CREDITS
          </h2>
          <p className="text-lg text-white/70 font-body">
            Selected works from recent years across multiple mediums
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recentCredits.map((credit, index) => (
            <Card 
              key={credit.title} 
              className="glass rounded-3xl p-8 hover-lift group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${credit.color} text-white mb-3`}>
                      {credit.type}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-accent-400 transition-colors duration-300">
                      {credit.title}
                    </h3>
                    <p className="text-primary-400 font-medium text-lg">
                      {credit.role}
                    </p>
                  </div>
                  <div className="text-right text-white/60">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      {credit.year}
                    </div>
                    <div className="flex items-center gap-2 text-sm mt-1">
                      <MapPin className="w-4 h-4" />
                      {credit.venue}
                    </div>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed mb-6">
                  {credit.description}
                </p>

                <Button className="px-6 py-2 rounded-xl glass text-white hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>

              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${credit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
            </Card>
          ))}
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
            EXPERTISE
          </h2>
          <p className="text-lg text-white/70 font-body">
            Comprehensive skills across the entertainment industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <Card key={skillGroup.category} className="glass rounded-3xl p-6 hover-lift">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  {skillGroup.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skill} className="text-white/70 text-sm flex items-center">
                    <div className="w-2 h-2 bg-accent-400 rounded-full mr-3 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* Representation */}
      <section className="py-20">
        <Card className="glass rounded-3xl p-12 text-center hover-lift">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
              REPRESENTATION
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-bold text-accent-400 mb-2">Agent</h3>
                <p className="text-white/80 text-sm">{representation.agent}</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-bold text-primary-400 mb-2">Manager</h3>
                <p className="text-white/80 text-sm">{representation.manager}</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-bold text-accent-400 mb-2">Publicist</h3>
                <p className="text-white/80 text-sm">{representation.publicist}</p>
              </div>
              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-bold text-primary-400 mb-2">Location</h3>
                <p className="text-white/80 text-sm">{representation.location}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300">
                Contact for Bookings
              </Button>
              
              <div className="flex gap-3">
                <Button className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 p-0 hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-5 h-5 text-white" />
                </Button>
                <Button className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-red-600 p-0 hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </ModernLayout>
  );
};