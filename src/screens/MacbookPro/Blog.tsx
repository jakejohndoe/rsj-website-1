import React, { useState } from "react";
import { MacbookProLayout } from "../../components/layout/MacbookProLayout";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";

export const Blog = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Improvisation in Public Speaking",
      excerpt: "How spontaneous techniques from theater can transform your communication skills in professional settings.",
      date: "May 15, 2023",
      readTime: "5 min read",
      category: "Public Speaking",
      image: "/blog-improv.jpg"
    },
    {
      id: 2,
      title: "Building Complex Characters: A Writer's Guide",
      excerpt: "Psychological techniques to create multidimensional characters that resonate with audiences.",
      date: "April 2, 2023",
      readTime: "8 min read",
      category: "Writing",
      image: "/blog-characters.jpg"
    },
    {
      id: 3,
      title: "Overcoming Stage Fright: Practical Exercises",
      excerpt: "Evidence-based methods to conquer performance anxiety and own the stage.",
      date: "March 18, 2023",
      readTime: "6 min read",
      category: "Performance",
      image: "/blog-stagefright.jpg"
    },
    {
      id: 4,
      title: "The Chocolate Metaphor: Teaching Through Storytelling",
      excerpt: "How I use chocolate-making as an analogy for creative processes in my workshops.",
      date: "February 5, 2023",
      readTime: "4 min read",
      category: "Teaching",
      image: "/blog-chocolate.jpg"
    },
    {
      id: 5,
      title: "Digital Storytelling in the Modern Classroom",
      excerpt: "Adapting traditional narrative techniques for virtual learning environments.",
      date: "January 22, 2023",
      readTime: "7 min read",
      category: "Teaching",
      image: "/blog-digital.jpg"
    },
    {
      id: 6,
      title: "The Power of Silence in Effective Communication",
      excerpt: "Why what you don't say can be more important than your words.",
      date: "December 10, 2022",
      readTime: "5 min read",
      category: "Public Speaking",
      image: "/blog-silence.jpg"
    }
  ];

  const categories = ["All", "Public Speaking", "Writing", "Performance", "Teaching"];
  const featuredPost = blogPosts[0];
  const filteredPosts = activeCategory === "All" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === activeCategory);

  return (
    <MacbookProLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="blog"
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
              The Journal
            </h1>
            <p className={`text-lg md:text-xl font-serif ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
              Thoughts on performance, writing, and teaching
            </p>
          </div>

          <Separator className={`my-6 ${darkMode ? 'bg-white/20' : 'bg-black/20'}`} />

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className={`text-xl font-serif font-medium mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              Featured Post
            </h2>
            <Card className={`overflow-hidden rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <div className={`text-sm mb-2 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                    {featuredPost.date} • {featuredPost.readTime} • {featuredPost.category}
                  </div>
                  <h3 className={`text-2xl font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                    {featuredPost.title}
                  </h3>
                  <p className={`text-base mb-4 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                    {featuredPost.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className={`rounded-full ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white/10' 
                        : 'border-black text-black hover:bg-black/10'
                    }`}
                  >
                    Continue Reading
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 ${
                  darkMode 
                    ? activeCategory === category 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'border-white text-white hover:bg-white/10'
                    : activeCategory === category
                      ? 'bg-black text-white hover:bg-black/90'
                      : 'border-black text-black hover:bg-black/10'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map(post => (
              <Card key={post.id} className={`rounded-3xl overflow-hidden ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'} hover:shadow-lg transition-shadow duration-300`}>
                <div className="h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className={`text-xs mb-2 ${darkMode ? 'text-white/60' : 'text-black/60'}`}>
                    {post.date} • {post.readTime} • {post.category}
                  </div>
                  <h3 className={`text-lg font-serif font-medium mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
                    {post.title}
                  </h3>
                  <p className={`text-sm mb-4 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className={`rounded-full ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white/10' 
                        : 'border-black text-black hover:bg-black/10'
                    }`}
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className={`mt-12 p-6 rounded-3xl ${darkMode ? 'bg-black/25' : 'bg-gray-100/30'}`}>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className={`text-2xl font-serif font-medium mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
                Get the Latest Posts
              </h2>
              <p className={`text-base mb-6 ${darkMode ? 'text-white/80' : 'text-black/80'}`}>
                Subscribe to receive new articles and updates directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className={`flex-grow px-4 py-2 rounded-full border ${
                    darkMode 
                      ? 'bg-black/30 border-white/20 text-white placeholder-white/50' 
                      : 'bg-white border-black/20 text-black placeholder-black/50'
                  } focus:outline-none focus:ring-2 focus:ring-opacity-50`}
                />
                <Button
                  className={`rounded-full ${
                    darkMode 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MacbookProLayout>
  );
};