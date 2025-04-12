import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Author = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const books = [
    {
      title: "Convertible Chocolate",
      cover: "/Convertible_Chocolate_Cover.png", // Replace with your image path
      price: 15.99,
      description: "One man's journey to finding true love"
    },
    {
      title: "How To Survive Speech 101",
      cover: "/book-stage-to-screen.jpg",
      price: 19.99,
      description: "Transitioning between theatrical and film acting"
    },
    {
      title: "Character Deep Dive",
      cover: "/book-character-deepdive.jpg",
      price: 29.99,
      description: "Advanced character development techniques"
    },
    {
      title: "Improvisation Unleashed",
      cover: "/book-improvisation.jpg",
      price: 22.99,
      description: "Spontaneous performance mastery"
    }
  ];

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="author"
      className="relative"
    >
      {/* Consistent Scroll Container */}
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
            {books.map((book) => (
              <Card key={book.title} className={`p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
                <div className="flex flex-col h-full">
                  {/* Book Cover */}
                  <div className="aspect-[2/3] bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <img 
                      src={book.cover} 
                      alt={book.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
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
                        className={`w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                          darkMode ? 'bg-white text-black hover:bg-white/90' 
                                  : 'bg-black text-white hover:bg-black/90'
                        }`}
                      >
                        Buy Now
                      </Button>
                      <Button 
                        variant="outline"
                        className={`w-full py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                          darkMode ? 'border-white text-white hover:bg-white/10' 
                                  : 'border-black text-black hover:bg-black/10'
                        }`}
                      >
                        Details
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