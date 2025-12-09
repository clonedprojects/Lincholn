'use client';

import FloatingOrb from '@/components/FloatingOrb';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

const posts = [
  {
    id: 1,
    title: "The Future of GenAI in Enterprise",
    excerpt: "How large language models are reshaping internal workflows and automating complex decision-making processes in Fortune 500 companies.",
    date: "Dec 8, 2025",
    category: "AI",
    image: "/images/ai-blog.png", // We will use a colorful gradient placeholder if image fails or use CSS
    bgGradient: "from-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "Fintech 2.0: Beyond Traditional Banking",
    excerpt: "Exploring the shift towards decentralized finance protocols and how traditional banks are adopting blockchain infrastructure.",
    date: "Dec 5, 2025",
    category: "Fintech",
    bgGradient: "from-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "Secure Cloud Migration Strategies",
    excerpt: "A step-by-step guide to moving mission-critical legacy systems to the cloud without compromising security or uptime.",
    date: "Nov 28, 2025",
    category: "Cloud",
    bgGradient: "from-blue-800 to-indigo-900"
  },
  {
    id: 4,
    title: "Blockchain for Supply Chain Transparency",
    excerpt: " leveraging distributed ledgers to create immutable records for logistics, proving authenticity from manufacturer to consumer.",
    date: "Nov 20, 2025",
    category: "Blockchain",
    bgGradient: "from-green-500 to-emerald-700"
  },
  {
    id: 5,
    title: "Digital Transformation in Government",
    excerpt: "Case studies on how smart gov-tech solutions are reducing bureaucracy and improving citizen engagement.",
    date: "Nov 15, 2025",
    category: "GovTech",
    bgGradient: "from-orange-500 to-red-600"
  },
  {
    id: 6,
    title: "The IoT Revolution in Manufacturing",
    excerpt: "Using smart sensors and real-time data analytics to predict maintenance needs and optimize production lines.",
    date: "Nov 10, 2025",
    category: "IoT",
    bgGradient: "from-cyan-600 to-blue-700"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden relative">
      <FloatingOrb className="w-96 h-96 bg-purple-600/10 top-0 right-0 blur-3xl" delay={0} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <BookOpen size={18} className="text-purple-400" />
            <span className="text-sm text-slate-300">Insights & Resources</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Latest <span className="gradient-text">Thinking</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Deep dives into technology trends, industry analysis, and engineering best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
             <article key={post.id} className="group glass rounded-3xl overflow-hidden hover-lift flex flex-col h-full border border-slate-800 hover:border-slate-600 transition-all">
               {/* Image Placeholder */}
               <div className={`h-48 w-full bg-gradient-to-br ${post.bgGradient} relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
                 {/* Decorative circles */}
                 <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse" />
                 <div className="absolute bottom-4 left-4 inline-block px-3 py-1 bg-black/30 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider text-white border border-white/10">
                   {post.category}
                 </div>
               </div>

               <div className="p-8 flex flex-col flex-grow">
                 <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                   <Calendar size={14} />
                   <span>{post.date}</span>
                 </div>
                 
                 <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight">
                   {post.title}
                 </h3>
                 
                 <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                   {post.excerpt}
                 </p>
                 
                 <button className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                   Read Full Article
                   <ArrowRight size={16} className="text-blue-400" />
                 </button>
               </div>
             </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="glass px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
