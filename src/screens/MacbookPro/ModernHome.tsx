import React, { useState, useEffect } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ChevronLeft, ChevronRight, Play, ExternalLink, Instagram, Youtube } from "lucide-react";

export const ModernHome = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Data collections
  const videoReels = [
    { id: "_p5b5KJrIT4", title: "Theatrical Reel (2025)", description: "Latest performance showcase" },
    { id: "i1S82a1Ag1Q", title: "History of Breakfast", description: "Commercial work" },
    { id: "G8KOUnPRwJE", title: "Real Spit! Trailer", description: "Independent film" },
    { id: "enrZJWfOL6s", title: "Blueberry - Short Film", description: "Full feature" },
  ];

  const galleryImages = [
    { id: 1, src: "/stevie_headshot_008.jpg", alt: "Professional Headshot 1" },
    { id: 2, src: "/stevie_headshot_207.jpg", alt: "Professional Headshot 2" },
    { id: 3, src: "/stevie_headshot_287.jpg", alt: "Professional Headshot 3" },
    { id: 4, src: "/stevie_lovepotion.jpg", alt: "Character Portrait" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/steviejohnson", color: "from-pink-500 to-purple-500" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@steviejohnson", color: "from-red-500 to-red-600" },
    { icon: ExternalLink, label: "IMDb", href: "https://www.imdb.com/name/steviejohnson", color: "from-yellow-500 to-orange-500" },
  ];

  const roles = ["Actor", "Author", "Professor", "Director"];
  const [currentRole, setCurrentRole] = useState(0);

  // Auto-rotate roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="home"
    >
      {/* Hero Section with Actor Showcase */}
      <section className="relative py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Side - Actor Introduction */}
          <div className="space-y-8 animate-fade-in">
            {/* Main Title */}
            <div>
              <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 leading-none tracking-tight mb-4">
                STEVIE JOHNSON
              </h1>
              
              {/* Animated Role Display */}
              <div className="h-12 flex items-center mb-6">
                <div className="font-heading text-2xl md:text-3xl font-bold text-white/90 tracking-wide">
                  {roles.map((role, index) => (
                    <span
                      key={role}
                      className={`absolute transition-all duration-500 ${
                        index === currentRole
                          ? 'opacity-100 transform translate-y-0 text-glow-accent'
                          : 'opacity-0 transform translate-y-4'
                      }`}
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-lg text-white/80 font-body leading-relaxed max-w-lg">
                <strong>Stevie Johnson is an actor, director, producer, and professor dedicated to storytelling.</strong>
                <br />A father, artist, and visionary bringing passion and authenticity to every project.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-2xl font-bold text-accent-400">20+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-2xl font-bold text-primary-400">100+</div>
                <div className="text-white/60 text-sm">Productions</div>
              </div>
              <div className="text-center glass rounded-2xl p-4">
                <div className="font-heading text-2xl font-bold text-accent-400">4</div>
                <div className="text-white/60 text-sm">Books Published</div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Button 
                className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold text-lg hover:scale-105 transition-all duration-300 neon-glow group"
                onClick={() => {
                  const reelElement = document.querySelector('iframe');
                  if (reelElement) {
                    reelElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Watch Theatrical Reel
              </Button>
              <Button className="px-8 py-4 rounded-full glass text-white font-heading font-medium text-lg hover-lift" asChild>
                <a href="/actor">View Full Portfolio</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  className={`w-12 h-12 rounded-full bg-gradient-to-r ${social.color} p-0 hover:scale-110 transition-all duration-300 hover-glow`}
                  aria-label={social.label}
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Right Side - Reel & Headshot */}
          <div className="space-y-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
            {/* Featured Video Reel */}
            <Card className="glass rounded-3xl p-6 hover-lift">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-heading text-xl font-bold text-white mb-1">
                    {videoReels[activeVideoIndex].title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {videoReels[activeVideoIndex].description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    className="w-8 h-8 rounded-full glass hover-glow text-xs"
                    onClick={() => setActiveVideoIndex((prev) => prev === 0 ? videoReels.length - 1 : prev - 1)}
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </Button>
                  <Button
                    className="w-8 h-8 rounded-full glass hover-glow text-xs"
                    onClick={() => setActiveVideoIndex((prev) => (prev + 1) % videoReels.length)}
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>

              <div className="aspect-video rounded-2xl overflow-hidden neon-glow mb-4">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${videoReels[activeVideoIndex].id}`}
                  title="Video Player"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              {/* Video Navigation Dots */}
              <div className="flex justify-center gap-2">
                {videoReels.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeVideoIndex
                        ? 'bg-accent-400 w-6'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => setActiveVideoIndex(index)}
                  />
                ))}
              </div>
            </Card>

            {/* Professional Headshot Gallery */}
            <Card className="glass rounded-3xl p-6 hover-lift">
              <h3 className="font-heading text-lg font-bold text-white mb-4">Professional Headshots</h3>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-4 neon-glow">
                <img
                  src={galleryImages[activeGalleryIndex].src}
                  alt={galleryImages[activeGalleryIndex].alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex justify-center gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeGalleryIndex
                        ? 'bg-primary-400 w-6'
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    onClick={() => setActiveGalleryIndex(index)}
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-accent-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-32 w-6 h-6 bg-primary-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-32 w-3 h-3 bg-accent-500 rounded-full animate-float opacity-80" style={{ animationDelay: '2s' }} />
      </section>


      {/* About Section */}
      <section className="py-20">
        <Card className="glass rounded-3xl p-12 text-center hover-lift">
          <h2 className="font-display text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80 font-body leading-relaxed">
            <p className="text-xl font-medium text-white">
              <strong>Stevie Johnson is an actor, director, producer, and professor dedicated to storytelling.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="glass rounded-2xl p-6">
                <div className="text-accent-400 font-heading font-semibold">Artist</div>
                <div className="text-white/60 text-sm mt-2">A father, artist, and visionary</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-primary-400 font-heading font-semibold">Passion</div>
                <div className="text-white/60 text-sm mt-2">Brings passion and authenticity to every project</div>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="text-accent-400 font-heading font-semibold">Excellence</div>
                <div className="text-white/60 text-sm mt-2">Committed to artistic excellence</div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </ModernLayout>
  );
};