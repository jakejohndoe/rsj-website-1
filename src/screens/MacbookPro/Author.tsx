import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Author = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedBook, setSelectedBook] = useState<number | null>(null);
  
  const books = [
    {
      title: "Convertible Chocolate",
      cover: "/Convertible_Chocolate_Cover.png",
      price: 15.99,
      description: "One man's journey to finding true love",
      longDescription: "A heartfelt memoir exploring love, identity, and self-discovery through chocolate-making. Chronicles Stevie's personal journey with humor and vulnerability.",
      amazonUrl: "https://www.amazon.com/Convertible-Chocolate-R-Steven-Johnson/dp/0989372502",
      publishDate: "June 2013",
      pages: 218,
      rating: "4.5/5"
    },
    {
      title: "How To Survive Speech 101",
      cover: "/Speech_101_Bookcover.png",
      price: 49.99,
      description: "Essential public speaking techniques",
      longDescription: "Comprehensive guide to conquering public speaking anxiety. Packed with exercises, real-world examples, and Stevie's proven techniques from 20+ years of teaching.",
      amazonUrl: "https://www.amazon.com/How-Survive-Speech-101-Workbook/dp/1500874523",
      publishDate: "August 2014",
      pages: 192,
      rating: "4.7/5"
    },
    {
      title: "Character Deep Dive",
      cover: "/book-character-deepdive.jpg",
      price: 29.99,
      description: "Advanced character development techniques",
      longDescription: "Masterclass in creating unforgettable characters. Reveals Stevie's professional acting techniques adapted for writers and performers.",
      amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER_ISBN_3",
      publishDate: "March 2018",
      pages: 256,
      rating: "4.8/5"
    },
    {
      title: "Improvisation Unleashed",
      cover: "/book-improvisation.jpg",
      price: 22.99,
      description: "Spontaneous performance mastery",
      longDescription: "Transform your creative process with improv techniques. Covers everything from quick thinking to collaborative storytelling.",
      amazonUrl: "https://www.amazon.com/dp/PLACEHOLDER_ISBN_4",
      publishDate: "November 2019",
      pages: 180,
      rating: "4.6/5"
    }
  ];

  const toggleDetails = (index: number) => {
    setSelectedBook(selectedBook === index ? null : index);
  };

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="author"
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
              Stevie Johnson, Author
            </h1>
            <p className="text-lg md:text-xl font-serif text-blue-200/80">
              Published works and literary portfolio
            </p>
          </div>

          <Separator className="my-6 bg-blue-800/40" />

          {/* Book Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <Card key={book.title} className="p-6 rounded-3xl bg-blue-900/30 neon-glow h-full">
                <div className="flex flex-col h-full">
                  {/* Flip Container */}
                  <div className="aspect-[2/3] mb-4 relative" style={{ perspective: "1000px" }}>
                    <div 
                      className="relative w-full h-full transition-transform duration-500"
                      style={{
                        transformStyle: "preserve-3d",
                        transform: selectedBook === index ? "rotateY(180deg)" : "rotateY(0deg)"
                      }}
                    >
                      {/* Front Side */}
                      <div 
                        className="absolute inset-0 backface-hidden rounded-lg overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Back Side */}
                      <div 
                        className="absolute inset-0 backface-hidden rounded-lg bg-blue-950/90 p-4 flex flex-col justify-center items-center text-center"
                        style={{ 
                          backfaceVisibility: "hidden",
                          transform: "rotateY(180deg)"
                        }}
                      >
                        <button 
                          onClick={() => toggleDetails(index)}
                          className="absolute top-2 right-2 p-1 rounded-full bg-blue-700/50 text-blue-100 hover:bg-blue-600/60 transition-colors duration-200"
                        >
                          ✕
                        </button>
                        <h3 className="text-lg font-serif font-medium mb-2 text-blue-100">
                          {book.title}
                        </h3>
                        <p className="text-sm mb-3 text-blue-200/80">
                          {book.longDescription}
                        </p>
                        <div className="text-xs text-blue-200/60">
                          <p>{book.publishDate} • {book.pages} pages</p>
                          <p className="mt-1">Rating: {book.rating}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Book Info */}
                  <div className="flex-grow">
                    <h2 className="text-xl font-serif font-medium mb-2 text-blue-100">
                      {book.title}
                    </h2>
                    <p className="text-sm mb-4 text-blue-200/70">
                      {book.description}
                    </p>
                  </div>
                  
                  {/* Price & Buttons */}
                  <div className="mt-auto">
                    <p className="text-lg font-medium mb-4 text-blue-100">
                      ${book.price.toFixed(2)}
                    </p>
                    <div className="flex space-x-2">
                      <Button 
                        asChild
                        className="w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 bg-blue-600 hover:bg-blue-500 text-white"
                      >
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full"
                        >
                          Buy Now
                        </a>
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => toggleDetails(index)}
                        className="w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 border-blue-400 text-blue-100 hover:bg-blue-800/30"
                      >
                        {selectedBook === index ? 'Hide Details' : 'Details'}
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MacbookProLayout>
  );
};