'use client';

import { useState } from 'react';
import FloatingOrb from '@/components/FloatingOrb';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Artificial Intelligence', 'Fintech', 'Cloud & Security', 'Digital Transformation'];
  
  const filteredPosts = activeCategory === 'All' 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden relative">
      <FloatingOrb className="w-[800px] h-[800px] bg-purple-600/10 top-[-200px] right-[-200px] blur-3xl" delay={0} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Insights & <span className="gradient-text">Resources</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl">
             Expert analysis, industry trends, and strategic guides for the digital age.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/40' 
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug}
              className="group glass rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-slate-800 relative overflow-hidden">
                 <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                 <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-medium text-blue-300 bg-blue-900/40 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-500/20">
                    <Tag size={12} />
                    {post.category}
                 </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                  <Calendar size={12} />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-blue-500 font-bold text-sm mt-auto">
                  Read Full Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500">
                No articles found in this category.
            </div>
        )}

      </div>
    </div>
  );
}
