import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Author = () => {
  const [darkMode, setDarkMode] = useState(false);
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
      className="relative"
    >
      {/* Scroll Container */}
      <div 
        className="overflow-y-auto"
        style={{ 
          height: 'calc(100vh - 10rem)',
          position: 'fixed',
          top: '10rem',
          left: 0,
          right: 0,
          padding: '2rem'
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className={`text-[3rem] md:text-[5rem] font-fleur leading-[0.8] ${darkMode ? 'text-white' : 'text-black'}`}>
              Stevie Johnson, Author
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              Published works and literary portfolio
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Book Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book, index) => (
              <Card key={book.title} className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                <div className="flex flex-col h-full">
                  {/* Book Cover with Flip Animation */}
                  <div className="aspect-[2/3] mb-4 relative group perspective-1000">
                    {/* Front of the book (cover) */}
                    <div className={`relative w-full h-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out ${selectedBook === index ? 'rotate-y-180' : 'rotate-y-0'} preserve-3d backface-hidden`}>
                      <img 
                        src={book.cover} 
                        alt={book.title}
                        className={`w-full h-full object-cover transition-transform duration-300 ${
                          selectedBook !== index && 'group-hover:scale-105'
                        }`}
                      />
                    </div>
                    
                    {/* Back of the book (details) */}
                    <div className={`absolute inset-0 p-4 rounded-lg flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${selectedBook === index ? 'rotate-y-0' : 'rotate-y-180'} preserve-3d backface-hidden ${darkMode ? 'bg-black/90' : 'bg-white/95'}`}>
                      <button 
                        onClick={() => toggleDetails(index)}
                        className={`absolute top-2 right-2 p-1 rounded-full ${
                          darkMode ? 'bg-white/20 text-white hover:bg-white/30' 
                                  : 'bg-black/20 text-black hover:bg-black/30'
                        } transition-colors duration-200`}
                      >
                        ✕
                      </button>
                      <h3 className={`text-lg font-serif font-medium mb-2 ${
                        darkMode ? 'text-white' : 'text-black'
                      }`}>
                        {book.title}
                      </h3>
                      <p className={`text-sm text-center mb-3 ${
                        darkMode ? 'text-white/80' : 'text-black/80'
                      }`}>
                        {book.longDescription}
                      </p>
                      <div className={`text-xs mt-2 ${
                        darkMode ? 'text-white/60' : 'text-black/60'
                      }`}>
                        <p>{book.publishDate} • {book.pages} pages</p>
                        <p className="mt-1">Rating: {book.rating}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Info */}
                  <div className="flex-grow">
                    <h2 className={`text-xl font-serif font-medium mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                      {book.title}
                    </h2>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-white/70' : 'text-black/70'}`}>
                      {book.description}
                    </p>
                  </div>
                  
                  {/* Price & Buttons */}
                  <div className="mt-auto">
                    <p className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                      ${book.price.toFixed(2)}
                    </p>
                    <div className="flex space-x-2">
                      <Button 
                        asChild
                        className={`w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                          darkMode ? 'bg-white text-black hover:bg-white/90' 
                                  : 'bg-black text-white hover:bg-black/90'
                        }`}
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
                        className={`w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                          darkMode ? 'border-white text-white hover:bg-white/10' 
                                  : 'border-black text-black hover:bg-black/10'
                        }`}
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

      {/* Add this style tag for the flip animation */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-0 {
          transform: rotateY(0deg);
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </MacbookProLayout>
  );
};