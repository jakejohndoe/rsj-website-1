import React, { useState, useEffect } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send, 
  Star, 
  Users, 
  Instagram, 
  Youtube, 
  Facebook,
  Globe,
  Clock,
  CheckCircle
} from "lucide-react";

export const Contact = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      primary: "steviejohnson101@gmail.com",
      description: "Professional inquiries & bookings",
      color: "primary"
    },
    {
      icon: Phone,
      title: "Phone",
      primary: "(213) 944-6059",
      description: "Direct line for urgent matters",
      color: "accent"
    },
    {
      icon: Users,
      title: "Representation",
      primary: "Professional Agents",
      description: "True Artists • BiCoastal • Jenni Sacks",
      color: "primary"
    }
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#", color: "from-pink-500 to-purple-500" },
    { icon: Youtube, label: "YouTube", href: "#", color: "from-red-500 to-red-600" },
    { icon: Facebook, label: "Facebook", href: "#", color: "from-blue-500 to-blue-600" },
    { icon: Globe, label: "Website", href: "#", color: "from-emerald-500 to-teal-500" },
  ];

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="contact"
    >
      {/* 🎬 OPTIMIZED BACKGROUND EFFECTS */}
      <div className="particle-field">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * -20}s`,
              animationDuration: `${20 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="matrix-overlay" />

      {/* REDUCED ATMOSPHERIC PARTICLES */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="atmospheric-particle"
          style={{
            width: `${3 + Math.random() * 2}px`,
            height: `${3 + Math.random() * 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * -30}s`,
            animationDuration: `${25 + Math.random() * 10}s`
          }}
        />
      ))}

      <div className="relative min-h-screen py-32 px-6">
        <div className="lighting-overlay opacity-40" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* 🎪 CINEMATIC HEADER */}
          <div 
            className={`text-center mb-16 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '0.5s' }}
          >
            <div className="space-y-6">
              <h1 className="font-display text-6xl md:text-8xl font-black leading-none tracking-tight">
                <span className="kinetic-text block">LET'S</span>
                <span className="kinetic-text block text-holographic" style={{ animationDelay: '0.5s' }}>CONNECT</span>
              </h1>
              <p className="text-xl md:text-2xl font-heading text-white/80 max-w-3xl mx-auto">
                <span className="text-holographic font-bold">Ready to collaborate?</span> 
                <br />For booking inquiries, speaking engagements, or general questions
              </p>
            </div>

            {/* CONTACT STATS */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              {[
                { value: "24/7", label: "Available", icon: Clock },
                { value: "< 1hr", label: "Response Time", icon: MessageCircle },
                { value: "100%", label: "Professional", icon: CheckCircle },
                { value: "Global", label: "Reach", icon: Globe }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`cinematic-theater holographic-border rounded-2xl p-6 text-center animate-depth-float`}
                  style={{ animationDelay: `${1 + index * 0.2}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400 animate-float" />
                  <div className="font-heading text-2xl font-bold text-holographic">{stat.value}</div>
                  <div className="text-white/60 text-sm font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-12 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent h-px" />

          {/* 🎬 CONTACT METHODS */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '1.5s' }}
          >
            {contactMethods.map((method, index) => (
              <Card key={method.title} className="group cinematic-theater holographic-border rounded-3xl p-8 hover:scale-105 hover-glow duration-700 screen-glow">
                <div className="text-center space-y-6">
                  <div className={`p-4 mx-auto w-20 h-20 rounded-full bg-gradient-to-r ${method.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} screen-glow flex items-center justify-center`}>
                    <method.icon className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-holographic mb-3 kinetic-text">
                      {method.title}
                    </h3>
                    <p className="text-xl font-body text-white font-semibold mb-2">
                      {method.primary}
                    </p>
                    <p className="text-white/70 font-body text-sm">
                      {method.description}
                    </p>
                  </div>
                  <Button className={`w-full rounded-full bg-gradient-to-r ${method.color === 'primary' ? 'from-primary-500 to-primary-600' : 'from-accent-500 to-accent-600'} text-white font-heading font-semibold hover:scale-105 transition-all duration-500 screen-glow`}>
                    <method.icon className="w-5 h-5 mr-2" />
                    Contact Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* 🎬 MAIN CONTACT FORM */}
          <div 
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '2s' }}
          >
            {/* LEFT: CONTACT FORM */}
            <Card className="cinematic-theater holographic-border rounded-3xl p-10 hover-glow screen-glow">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-holographic">
                  Send a Message
                </h2>
              </div>
              
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block font-heading font-semibold mb-3 text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Smith"
                      className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-heading font-semibold mb-3 text-white">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block font-heading font-semibold mb-3 text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block font-heading font-semibold mb-3 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-6 py-4 rounded-2xl glass-strong border border-primary-500/30 text-white placeholder-white/50 focus:outline-none focus:border-accent-500/50 focus:ring-2 focus:ring-accent-500/20 transition-all duration-500 resize-none"
                  ></textarea>
                </div>
                
                <Button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-accent-500 to-accent-600 text-white font-heading font-bold text-lg py-6 hover:scale-105 transition-all duration-500 screen-glow"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* RIGHT: ADDITIONAL INFO & SOCIAL */}
            <div className="space-y-8">
              {/* SOCIAL MEDIA CARD */}
              <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-gradient-to-r from-accent-500 to-accent-600 screen-glow">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-holographic">
                    Connect & Follow
                  </h3>
                </div>
                <p className="text-white/80 font-body mb-8 leading-relaxed">
                  Stay connected and get behind-the-scenes content, updates, and exclusive insights.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={social.label}
                      className={`group flex items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-r ${social.color} hover:scale-105 transition-all duration-500 hover-glow screen-glow`}
                      asChild
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-6 h-6 text-white" />
                        <span className="font-heading font-semibold text-white">{social.label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
              </Card>

              {/* URGENT CONTACT CARD */}
              <Card className="cinematic-theater holographic-border rounded-3xl p-8 hover-glow screen-glow">
                <div className="text-center space-y-6">
                  <div className="p-4 mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 screen-glow flex items-center justify-center animate-pulse">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-holographic mb-3 kinetic-text">
                      Urgent Inquiries?
                    </h3>
                    <p className="text-white/80 font-body leading-relaxed mb-6">
                      For time-sensitive booking inquiries or immediate assistance, contact my representation directly.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <Button className="w-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600 text-white font-heading font-semibold hover:scale-105 transition-all duration-500 screen-glow">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (213) 944-6059
                    </Button>
                    <Button className="w-full rounded-full glass-strong text-white font-heading font-medium hover-lift cinematic-theater border border-accent-500/50">
                      Agent Information
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* 🌟 CLOSING CTA */}
          <div 
            className={`text-center ${isLoaded ? 'animate-cinematic-reveal' : 'opacity-0'}`}
            style={{ animationDelay: '2.5s' }}
          >
            <Card className="max-w-4xl mx-auto cinematic-theater holographic-border rounded-3xl p-12">
              <h3 className="font-display text-5xl font-bold kinetic-text mb-6">
                READY TO CREATE?
              </h3>
              <p className="text-xl text-white/80 font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                Whether it's a film, commercial, live performance, or speaking engagement — let's bring your vision to life together.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button className="px-12 py-6 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-bold text-lg hover:scale-105 transition-all duration-500 screen-glow">
                  <Mail className="w-6 h-6 mr-3" />
                  Start a Conversation
                </Button>
                <Button className="px-12 py-6 rounded-full glass-strong text-white font-heading font-medium text-lg hover-lift cinematic-theater border border-primary-500/50">
                  View Portfolio
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ModernLayout>
  );
};