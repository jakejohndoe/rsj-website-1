import React, { useState } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ExternalLink, Star, Calendar, BookOpen, ShoppingCart } from "lucide-react";

export const ModernAuthor = () => {
  const [darkMode, setDarkMode] = useState(true);
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
      color: "from-primary-500 to-primary-600"
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
      color: "from-accent-500 to-accent-600"
    }
  ];

  const upcomingBooks = [
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
      color: "from-primary-400 to-accent-400"
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
      color: "from-accent-400 to-primary-400"
    }
  ];

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="author"
    >
      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="font-display text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6">
            PUBLISHED
          </h1>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white/90 mb-8">
            WORKS
          </h2>
          <p className="text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            Explore a collection of published works spanning memoir, education, and creative arts. 
            Each book represents years of experience and passion for storytelling.
          </p>
        </div>
      </section>

      {/* Upcoming Books */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-500 mb-4">
            UPCOMING BOOKS
          </h2>
          <p className="text-xl text-white/60 font-body">
            New releases in progress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {upcomingBooks.map((book, index) => (
            <Card 
              key={book.title} 
              className="glass rounded-3xl p-6 hover-lift group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="aspect-[2/3] bg-neutral-800 rounded-2xl mb-6 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-display font-bold text-accent-400 mb-2">
                        {book.title.split(' ').slice(0, 2).join(' ')}
                      </div>
                      <div className="text-sm text-white/40">Coming Soon</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-400 group-hover:to-accent-500 transition-all duration-300">
                      {book.title}
                    </h3>
                    <p className="text-white/60 text-sm font-body italic mt-2">
                      {book.description}
                    </p>
                  </div>
                  
                  <div className="text-accent-400 font-heading font-bold text-lg">
                    {book.price}
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            </Card>
          ))}
        </div>
      </section>

      {/* Published Books */}
      <section className="py-20">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
            PUBLISHED BOOKS
          </h2>
          <p className="text-xl text-white/60 font-body">
            2 Books Published
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {books.map((book, index) => (
            <Card 
              key={book.title} 
              className="glass rounded-3xl p-6 hover-lift group overflow-hidden relative"
            >
              {/* Book Cover with 3D Effect */}
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
      </section>

      {/* Author Bio Section */}
      <section className="py-20">
        <Card className="glass rounded-3xl p-12 text-center hover-lift">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-8">
              About the Author
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2 text-left space-y-6">
                <p className="text-lg text-white/80 font-body leading-relaxed">
                  Stevie Johnson brings decades of experience in performance, education, and creative writing 
                  to his published works. As both a practicing artist and dedicated educator, his books offer 
                  unique insights that bridge theoretical knowledge with real-world application.
                </p>
                
                <p className="text-lg text-white/80 font-body leading-relaxed">
                  From intimate memoirs to comprehensive educational guides, each publication reflects 
                  Stevie's commitment to authentic storytelling and practical wisdom gained through 
                  years in the industry.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-accent-400">4</div>
                    <div className="text-white/60 text-sm">Books Published</div>
                  </div>
                  <div className="text-center glass rounded-2xl p-4">
                    <div className="font-heading text-3xl font-bold text-primary-400">4.7</div>
                    <div className="text-white/60 text-sm">Average Rating</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full overflow-hidden neon-glow">
                    <img
                      src="/stevie_headshot_287.jpg"
                      alt="Stevie Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                    <Button className="px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-heading font-medium hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View All Books
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>
    </ModernLayout>
  );
};