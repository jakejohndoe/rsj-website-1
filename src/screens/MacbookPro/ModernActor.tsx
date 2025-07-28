import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Play, Award, Calendar, MapPin, ExternalLink, Download, Instagram, Youtube, Film } from "lucide-react";

export const ModernActor = () => {
  const [darkMode, setDarkMode] = useState(true);

  const upcomingCredits = [
    {
      title: "Untitled Project",
      role: "TBA",
      type: "Feature Film",
      year: "2025",
      venue: "Production",
      description: "Details coming soon",
      color: "from-accent-400 to-accent-500"
    }
  ];

  const recentCredits = [
    {
      title: "Buffalo Daze",
      role: "Joseph Blackburn Bass",
      type: "Feature Film",
      year: "2023",
      venue: "Supporting Role",
      description: "Drama exploring rural American life",
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "Triple O.G.",
      role: "Robert",
      type: "Short Film", 
      year: "2022",
      venue: "Lead Role",
      description: "Award-winning short film - Black Silk Award",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Animal Kingdom",
      role: "Detective",
      type: "Television",
      year: "2021",
      venue: "Guest Star",
      description: "Crime drama series on TNT",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Blueberry",
      role: "Director/Producer",
      type: "Short Film",
      year: "2023",
      venue: "Independent",
      description: "Award-winning short film",
      color: "from-green-500 to-teal-500"
    }
  ];

  const skills = [
    { category: "Acting", items: ["Method Acting", "Improvisation", "Character Development", "Voice Work"] },
    { category: "Direction", items: ["Theatre Direction", "Film Direction", "Actor Coaching", "Script Analysis"] },
    { category: "Production", items: ["Project Management", "Casting", "Creative Development", "Post-Production"] },
    { category: "Private Coaching", items: ["Public Speaking", "Acting Classes", "Workshops", "Mentoring"] }
  ];

  const representation = {
    agent: "True Artists Agency",
    manager: "BiCoastal Talent Agency", 
    publicist: "Jenni Sacks Agency",
    location: "Los Angeles, CA"
  };

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="actor"
    >
      {/* UNIFIED HEADER SECTION */}
      <section className="py-20">
        <div className="text-center mb-16">
          <div className="space-y-6">
            <h1 className="font-display text-5xl md:text-7xl font-black leading-none tracking-tight">
              <span className="block text-holographic">ACTOR</span>
              <span className="block text-holographic">STEVIE JOHNSON</span>
            </h1>
            <p className="text-xl md:text-2xl font-heading text-white/80 max-w-3xl mx-auto">
              <span className="text-holographic font-bold">Bringing Stories to Life Through Performance</span>
              <br />30+ years of stage and screen experience
            </p>
            <p className="text-lg text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
              Stevie Johnson delivers authentic performances that resonate with audiences and bring depth to every character. 
              Member of SAG-AFTRA and Equity eligible/pending.
            </p>
          </div>

          {/* UNIFIED STATS SECTION */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {[
              { value: "30+", label: "Years Experience", icon: Award },
              { value: "100+", label: "Film/Theatre/TV Credits", icon: Play },
              { value: "15", label: "Awards Won", icon: Award },
              { value: "SAG", label: "Union Member", icon: Award }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="cinematic-theater holographic-border rounded-2xl p-6 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400" />
                <div className="font-heading text-2xl font-bold text-holographic">{stat.value}</div>
                <div className="text-white/60 text-sm font-body">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* UNIFIED CALL TO ACTION */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button className="px-10 py-5 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold text-lg hover:scale-105 transition-all duration-500 holographic-border screen-glow group">
              <Play className="w-6 h-6 mr-3" />
              Watch Performance Reel
            </Button>
            <Button className="px-10 py-5 rounded-full glass-strong text-white font-heading font-medium text-lg hover-lift cinematic-theater" asChild>
              <a href="mailto:steviejohnson101@gmail.com?subject=Acting%20Inquiry">
                <Download className="w-5 h-5 mr-3" />
                Contact for Bookings
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO SECTION */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-lift">
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-holographic mb-2">
                Theatrical Reel (2025)
              </h3>
              <p className="text-white/60">
                Latest performance showcase featuring recent work
              </p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden screen-glow">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_p5b5KJrIT4"
                title="Theatrical Reel 2025"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Card>
        </div>
      </section>

      {/* Upcoming Credits */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500 mb-4">
            UPCOMING CREDITS
          </h2>
          <p className="text-xl text-white/60 font-body">
            Exciting projects in development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingCredits.map((credit, index) => (
            <Card 
              key={credit.title} 
              className="glass rounded-3xl p-8 hover-lift group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-400 group-hover:to-accent-500 transition-all duration-300">
                      {credit.title}
                    </h3>
                    <p className="text-accent-400 font-heading font-semibold">
                      {credit.role}
                    </p>
                  </div>
                  <Calendar className="w-6 h-6 text-accent-400/50" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-white/60">
                    <Film className="w-4 h-4" />
                    <span className="text-sm font-body">{credit.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-body">{credit.venue}</span>
                  </div>
                  <p className="text-white/50 text-sm font-body italic">
                    {credit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-accent-400 font-heading font-bold text-lg">
                    {credit.year}
                  </span>
                </div>
              </div>

              <div 
                className={`absolute inset-0 bg-gradient-to-br ${credit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />
            </Card>
          ))}
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
                <p className="text-white/80 text-sm flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {representation.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300"
                asChild
              >
                <a href="mailto:steviejohnson101@gmail.com?subject=Booking%20Inquiry">
                  Contact for Bookings
                </a>
              </Button>
              
              <div className="flex gap-3">
                <Button 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 p-0 hover:scale-110 transition-transform duration-300"
                  asChild
                >
                  <a href="https://www.instagram.com/steviejohnson" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-5 h-5 text-white" />
                  </a>
                </Button>
                <Button 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 p-0 hover:scale-110 transition-transform duration-300"
                  asChild
                >
                  <a href="https://www.youtube.com/@steviejohnson" target="_blank" rel="noopener noreferrer">
                    <Youtube className="w-5 h-5 text-white" />
                  </a>
                </Button>
                <Button 
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-400 to-accent-500 p-0 hover:scale-110 transition-transform duration-300"
                  asChild
                >
                  <a href="https://www.imdb.com/name/steviejohnson" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </ModernLayout>
  );
};