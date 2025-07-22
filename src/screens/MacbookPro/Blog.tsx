import React, { useState, useEffect } from "react";
import { ModernLayout } from "../../components/layout/ModernLayout";
import { Card } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Button } from "../../components/ui/button";
import { fetchBlogs } from "../../services/api";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
}

export const Blog = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const categories = ["All", "Public Speaking", "Writing", "Performance", "Teaching"];

  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        const data = await fetchBlogs();
        setBlogPosts(data);
      } catch (err) {
        setError("Failed to load posts. The server might be down.");
      } finally {
        setLoading(false);
      }
    };
    loadBlogPosts();
  }, []);

  if (loading) {
    return (
      <ModernLayout 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)}
        activeNavItem="blog"
      >
        <div className="flex justify-center items-center h-full">
          <p className="text-blue-200">Loading posts...</p>
        </div>
      </ModernLayout>
    );
  }

  if (error) {
    return (
      <ModernLayout 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)}
        activeNavItem="blog"
      >
        <div className="flex justify-center items-center h-full flex-col gap-4">
          <p className="text-blue-200">{error}</p>
          <Button
            onClick={() => window.location.reload()}
            className="rounded-full bg-blue-500 text-white hover:bg-blue-600"
          >
            Retry
          </Button>
        </div>
      </ModernLayout>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <ModernLayout 
        darkMode={darkMode} 
        toggleDarkMode={() => setDarkMode(!darkMode)}
        activeNavItem="blog"
      >
        <div className="flex justify-center items-center h-full">
          <p className="text-blue-200">No posts available</p>
        </div>
      </ModernLayout>
    );
  }

  const featuredPost = blogPosts[0];
  const filteredPosts = activeCategory === "All" 
    ? blogPosts.slice(1) 
    : blogPosts.slice(1).filter(post => post.category === activeCategory);

  return (
    <ModernLayout 
      darkMode={darkMode} 
      toggleDarkMode={() => setDarkMode(!darkMode)}
      activeNavItem="blog"
    >
      <div className="overflow-y-auto pt-4 px-24" style={{ 
        height: 'calc(100vh - 10rem)',
        top: '10rem',
        padding: '2rem'
      }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-[3rem] md:text-[5rem] font-fleur leading-[0.8] text-blue-100 text-glow-blue">
              The Journal
            </h1>
            <p className="text-lg md:text-xl font-serif text-blue-200/80">
              Thoughts on performance, writing, and teaching
            </p>
          </div>

          <Separator className="my-6 bg-blue-800/40" />

          {/* Featured Post */}
          <div className="mb-12">
            <h2 className="text-xl font-serif font-medium mb-4 text-blue-100">
              Featured Post
            </h2>
            <Card className="overflow-hidden rounded-3xl bg-blue-900/30 neon-glow">
              <div className="md:flex">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="text-sm mb-2 text-blue-200/60">
                    {featuredPost.date} • {featuredPost.readTime} • {featuredPost.category}
                  </div>
                  <h3 className="text-2xl font-serif font-medium mb-3 text-blue-100">
                    {featuredPost.title}
                  </h3>
                  <p className="text-blue-200/80 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-blue-400 text-blue-200 hover:bg-blue-900/30"
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
                  activeCategory === category 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'border-blue-400 text-blue-200 hover:bg-blue-900/30'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <Card 
                key={post.id} 
                className="rounded-3xl overflow-hidden bg-blue-900/30 neon-glow hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs mb-2 text-blue-200/60">
                    {post.date} • {post.readTime} • {post.category}
                  </div>
                  <h3 className="text-lg font-serif font-medium mb-2 text-blue-100">
                    {post.title}
                  </h3>
                  <p className="text-sm mb-4 text-blue-200/80">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-blue-400 text-blue-200 hover:bg-blue-900/30"
                  >
                    Read More
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <Card className="mt-12 p-8 rounded-3xl bg-blue-900/30 neon-glow">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-serif font-medium mb-3 text-blue-100">
                Get the Latest Posts
              </h2>
              <p className="text-blue-200/80 mb-6">
                Subscribe to receive new articles and updates directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 rounded-full border border-blue-800/40 bg-blue-900/20 text-blue-100 placeholder-blue-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
                <Button
                  className="rounded-full bg-blue-500 text-white hover:bg-blue-600"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </ModernLayout>
  );
};