import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ExternalLink, Star, Calendar, BookOpen, ShoppingCart, Award, Download, ChevronRight, Mail, Globe } from "lucide-react";

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

      {/* MAIN TWO-COLUMN LAYOUT */}
      <section className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* LEFT COLUMN - PUBLISHED BOOKS */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-heading text-2xl font-bold text-holographic">Published Works</h2>
              <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-sm">Available Now</span>
            </div>

            <div className="space-y-4">
              {books.filter(book => book.status === 'published').map((book, index) => (
                <Card 
                  key={book.title}
                  className="glass rounded-xl p-4 hover-lift group cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedBook(selectedBook === index ? null : index)}
                >
                  <div className="flex gap-4">
                    {/* Book Cover Thumbnail */}
                    <div className="w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Book Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-bold text-white group-hover:text-primary-400 transition-colors truncate">
                            {book.title}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">{book.description}</p>
                        </div>
                        <div className="flex items-center gap-2 ml-2">
                          <span className="text-accent-400 font-bold text-lg">${book.price}</span>
                          <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-xs text-white/50">
                          <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${book.color} text-white`}>
                            {book.genre}
                          </span>
                          <span>{book.publishDate}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current text-accent-400" />
                            <span>{book.rating}</span>
                          </div>
                        </div>
                        <Button
                          className="px-3 py-1 rounded-lg bg-gradient-to-r from-accent-500 to-primary-500 text-white hover:scale-105 transition-all text-xs"
                          asChild
                          onClick={(e) => e.stopPropagation()}
                        >
                          <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
                            <ShoppingCart className="w-3 h-3 mr-1" />
                            Buy
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expanded Details */}
                  {selectedBook === index && (
                    <div className="mt-4 pt-4 border-t border-white/10 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-white/70 text-sm leading-relaxed mb-3">
                        {book.longDescription}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <span>{book.pages} pages</span>
                        <span>Published {book.publishDate}</span>
                        <span>Amazon Rating: {book.rating}</span>
                      </div>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            {/* AUTHOR BIO CARD */}
            <Card className="glass rounded-xl p-6 mt-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="/stevie_headshot_287.jpg"
                    alt="Stevie Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-holographic mb-2">About the Author</h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Stevie Johnson brings decades of experience in performance, education, and creative writing. 
                    Each book reflects his commitment to authentic storytelling and practical wisdom.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* RIGHT COLUMN - UPCOMING & CONTACT */}
          <div className="space-y-6">
            {/* UPCOMING BOOKS */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-2xl font-bold text-holographic">Upcoming Releases</h2>
                <span className="px-3 py-1 rounded-full bg-accent-500/20 text-accent-400 text-sm">2025</span>
              </div>

              <div className="space-y-4">
                {books.filter(book => book.status === 'upcoming').map((book, index) => (
                  <Card 
                    key={book.title}
                    className="glass rounded-xl p-4 hover-lift group border border-accent-400/20 bg-accent-400/5"
                  >
                    <div className="flex gap-4">
                      {/* Placeholder Cover */}
                      <div className="w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                        <div className="text-xs text-accent-400 font-bold text-center leading-tight">
                          {book.title.split(' ').slice(0, 2).join(' ')}
                        </div>
                      </div>
                      
                      {/* Book Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h3 className="font-heading text-lg font-bold text-white group-hover:text-accent-400 transition-colors">
                              {book.title}
                            </h3>
                            <p className="text-white/60 text-sm mt-1">{book.description}</p>
                          </div>
                          <span className="text-accent-400 font-bold text-sm ml-2">2025</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className={`px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r ${book.color} text-white`}>
                            {book.genre}
                          </span>
                          <div className="text-xs text-accent-400 font-medium">Coming Soon</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* WRITING ACHIEVEMENTS */}
            <Card className="glass rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-holographic mb-4">Writing Achievements</h3>
              <div className="space-y-3">
                {[
                  { title: "Amazon Bestseller", detail: "Speech 101 - Education Category", icon: Award },
                  { title: "Reader's Choice", detail: "4.6/5 Average Rating", icon: Star },
                  { title: "Multi-Genre Author", detail: "Memoir & Educational", icon: BookOpen },
                  { title: "Industry Recognition", detail: "30+ Years Experience", icon: Globe }
                ].map((achievement) => (
                  <div key={achievement.title} className="flex items-center gap-3 p-2 rounded-lg glass">
                    <achievement.icon className="w-5 h-5 text-accent-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white text-sm">{achievement.title}</div>
                      <div className="text-white/50 text-xs">{achievement.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* CONTACT SECTION */}
            <Card className="glass rounded-xl p-6">
              <h3 className="font-heading text-xl font-bold text-holographic mb-4">Literary Collaborations</h3>
              <p className="text-white/70 text-sm mb-4 leading-relaxed">
                Interested in collaborating on writing projects, book reviews, or educational content? 
                Let's discuss your next literary venture.
              </p>
              <div className="space-y-3">
                <Button className="w-full h-12 px-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-semibold hover:scale-105 transition-all duration-300" asChild>
                  <a href="mailto:steviejohnson101@gmail.com?subject=Literary%20Collaboration">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact for Collaboration
                  </a>
                </Button>
                <div className="flex gap-2">
                  <Button className="flex-1 h-10 px-4 rounded-xl glass text-white hover:bg-white/20 transition-all text-sm" asChild>
                    <a href="https://www.amazon.com/author/steviejohnson" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-3 h-3 mr-2" />
                      Amazon
                    </a>
                  </Button>
                  <Button className="flex-1 h-10 px-4 rounded-xl glass text-white hover:bg-white/20 transition-all text-sm" asChild>
                    <a href="#view-all-books">
                      <BookOpen className="w-3 h-3 mr-2" />
                      All Books
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-in-from-top-2 {
          from {
            transform: translateY(-8px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-in {
          animation-fill-mode: both;
        }
        .slide-in-from-top-2 {
          animation-name: slide-in-from-top-2;
        }
        .duration-300 {
          animation-duration: 300ms;
        }
      `}</style>
    </ModernLayout>
  );
};