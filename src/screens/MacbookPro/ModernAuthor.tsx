import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ExternalLink, Star, Calendar, BookOpen, ShoppingCart, Award, Download, ChevronRight, Mail, Globe, Feather, Bookmark, PenTool } from "lucide-react";

export const ModernAuthor = () => {
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  
  const books = [
    {
      title: "How To Survive Speech 101",
      cover: "/Speech_101_Bookcover.png",
      price: 49.99,
      description: "Essential public speaking techniques",
      longDescription: "Comprehensive guide to conquering public speaking anxiety. Packed with exercises, real-world examples, and Stevie's proven techniques from 30+ years of teaching.",
      amazonUrl: "https://www.amazon.com/How-Survive-Speech-101-Workbook/dp/1500874523",
      publishDate: "August 2014",
      pages: 192,
      rating: "4.7/5",
      genre: "Education",
      color: "from-primary-500 to-primary-600",
      status: "published"
    },
    {
      title: "Convertible Chocolate",
      cover: "/Convertible_Chocolate_Cover.png",
      price: 15.99,
      description: "One man's journey to finding true love",
      longDescription: "A heartfelt memoir exploring love, identity, and self-discovery through chocolate-making. Chronicles Stevie's personal journey with humor and vulnerability.",
      amazonUrl: "https://www.amazon.com/Convertible-Chocolate-R-Steven-Johnson/dp/0989372502",
      publishDate: "June 2013",
      pages: 218,
      rating: "4.5/5",
      genre: "Memoir",
      color: "from-accent-500 to-accent-600",
      status: "published"
    },
    {
      title: "The Holistic Actor",
      cover: "/book-holistic-actor.jpg",
      price: "Coming Soon",
      description: "Mind, body, and spirit in performance",
      longDescription: "A comprehensive approach to acting that integrates physical, emotional, and spiritual practices for authentic performance.",
      amazonUrl: "#",
      publishDate: "2025",
      pages: "TBD",
      rating: "New",
      genre: "Performance",
      color: "from-primary-400 to-accent-400",
      status: "upcoming"
    },
    {
      title: "Quick Access To Enriching Performances",
      cover: "/book-quick-access.jpg",
      price: "Coming Soon",
      description: "Instant techniques for powerful acting",
      longDescription: "Fast, effective methods for accessing deep emotional truth in performance. Perfect for professionals and students alike.",
      amazonUrl: "#",
      publishDate: "2025",
      pages: "TBD",
      rating: "New",
      genre: "Performance",
      color: "from-accent-400 to-primary-400",
      status: "upcoming"
    }
  ];

  const upcomingIcons = [Feather, PenTool, Bookmark, BookOpen];

  return (
    <ModernLayout activeNavItem="author">
      {/* COMPACT HEADER SECTION */}
      <section className="py-12">
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl md:text-6xl font-black leading-none tracking-tight mb-4">
            <span className="text-holographic">AUTHOR • STEVIE JOHNSON</span>
          </h1>
          <p className="text-lg text-white/80 font-body max-w-2xl mx-auto">
            Published works exploring memoir, education, and creative arts
          </p>
        </div>

        {/* COMPACT STATS ROW */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { value: "4", label: "Books", icon: BookOpen },
            { value: "2+", label: "Genres", icon: Award },
            { value: "4.6★", label: "Rating", icon: Star },
            { value: "10K+", label: "Readers", icon: Globe }
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

      {/* MAIN CONTENT LAYOUT */}
      <section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT & CENTER COLUMNS - PUBLISHED BOOKS */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                PUBLISHED WORKS
              </h2>
              <span className="px-4 py-2 rounded-full bg-primary-500/20 text-primary-400 font-heading text-sm">Available Now</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {books.filter(book => book.status === 'published').map((book, index) => (
                <Card 
                  key={book.title} 
                  className="glass rounded-3xl p-6 hover-lift group overflow-hidden relative"
                >
                  {/* Book Cover with 3D Flip Effect */}
                  <div className="perspective-1000 mb-6">
                    <div 
                      className="relative w-full aspect-[2/3] transition-transform duration-700 preserve-3d cursor-pointer"
                      style={{
                        transform: selectedBook === index ? "rotateY(180deg)" : "rotateY(0deg)"
                      }}
                      onClick={() => setSelectedBook(selectedBook === index ? null : index)}
                    >
                      {/* Front Side */}
                      <div className="absolute inset-0 backface-hidden">
                        <div className="relative rounded-2xl overflow-hidden h-full group-hover:shadow-2xl transition-all duration-500">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t ${book.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                        </div>
                      </div>
                      
                      {/* Back Side */}
                      <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${book.color} p-4 flex flex-col justify-between text-white`}>
                          <div>
                            <h3 className="font-heading font-bold text-lg mb-3">{book.title}</h3>
                            <p className="text-sm opacity-90 leading-relaxed">{book.longDescription}</p>
                          </div>
                          <div className="space-y-2 text-xs opacity-80">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3 h-3" />
                              {book.publishDate}
                            </div>
                            <div className="flex items-center gap-2">
                              <BookOpen className="w-3 h-3" />
                              {book.pages} pages
                            </div>
                            <div className="flex items-center gap-2">
                              <Star className="w-3 h-3 fill-current" />
                              {book.rating}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white`}>
                        {book.genre}
                      </span>
                      <div className="flex items-center gap-1 text-accent-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{book.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-accent-400 transition-colors duration-300">
                      {book.title}
                    </h3>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {book.description}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="font-heading text-2xl font-bold text-accent-400">
                        ${book.price}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          className="px-4 py-2 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500 hover:text-white transition-all duration-300 text-xs font-medium"
                          onClick={() => setSelectedBook(selectedBook === index ? null : index)}
                        >
                          Details
                        </Button>
                        <Button 
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:scale-105 transition-all duration-300 text-xs font-medium group"
                          asChild
                        >
                          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <ShoppingCart className="w-3 h-3 mr-1 group-hover:animate-pulse" />
                            Buy
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                </Card>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN - UPCOMING WORKS */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading text-xl font-bold text-holographic">Upcoming Releases</h3>
              <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-sm">2025</span>
            </div>

            <div className="space-y-3">
              {books.filter(book => book.status === 'upcoming').map((book, index) => {
                const IconComponent = upcomingIcons[index % upcomingIcons.length];
                return (
                  <Card 
                    key={book.title}
                    className="glass rounded-xl p-4 hover-lift group border border-accent-400/20 bg-accent-400/5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-400/20 to-primary-400/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-accent-400" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-heading text-sm font-bold text-white group-hover:text-accent-400 transition-colors truncate">
                          {book.title}
                        </h4>
                        <p className="text-white/60 text-xs mt-1">{book.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white`}>
                            {book.genre}
                          </span>
                          <span className="text-accent-400 text-xs font-medium">2025</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT THE AUTHOR SECTION - PROMINENT BOTTOM */}
      <section className="py-20">
        <Card className="glass rounded-3xl p-12 hover-lift">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
                About the Author
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-accent-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <p className="text-xl text-white/90 font-body leading-relaxed">
                  Stevie Johnson brings decades of experience in performance, education, and creative writing 
                  to his published works. As both a practicing artist and dedicated educator, his books offer 
                  unique insights that bridge theoretical knowledge with real-world application.
                </p>
                
                <p className="text-lg text-white/80 font-body leading-relaxed">
                  From intimate memoirs to comprehensive educational guides, each publication reflects 
                  Stevie's commitment to authentic storytelling and practical wisdom gained through 
                  30+ years in the entertainment and education industries.
                </p>

                <p className="text-lg text-white/80 font-body leading-relaxed">
                  His writing philosophy centers on accessibility and genuine connection with readers, 
                  whether sharing personal journey insights in memoir form or providing practical tools 
                  for overcoming public speaking challenges.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-accent-400">4</div>
                    <div className="text-white/60 text-sm">Books Published</div>
                  </div>
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-primary-400">4.6</div>
                    <div className="text-white/60 text-sm">Average Rating</div>
                  </div>
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-accent-400">30+</div>
                    <div className="text-white/60 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-primary-400">10K+</div>
                    <div className="text-white/60 text-sm">Readers Reached</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-2xl overflow-hidden neon-glow">
                    <img
                      src="/stevie_headshot_287.jpg"
                      alt="Stevie Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                    <Button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300" asChild>
                      <a href="mailto:steviejohnson101@gmail.com?subject=Literary%20Inquiry">
                        <Mail className="w-4 h-4 mr-2" />
                        Contact Author
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </ModernLayout>
  );
};