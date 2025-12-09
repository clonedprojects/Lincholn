'use client';

import { useParams, useRouter } from 'next/navigation';
import FloatingOrb from '@/components/FloatingOrb';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Tag, Clock, Share2 } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/blog-data';

export default function BlogPostPage() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;

    const post = BLOG_POSTS.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
                <Link href="/blog" className="text-blue-500 hover:underline">Back to Blog</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 relative overflow-hidden">
             {/* Background Effects */}
             <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-slate-950 z-0" />
             <FloatingOrb className="w-[600px] h-[600px] bg-blue-600/10 top-[-100px] left-1/2 -translate-x-1/2 blur-3xl z-0" delay={0} />

             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                <Link href="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Blog
                </Link>

                {/* Article Header */}
                <div className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-slate-400 mb-6">
                        <span className="flex items-center gap-1 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700"><Tag size={12} /> {post.category}</span>
                        <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> 5 min read</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">{post.excerpt}</p>
                </div>

                {/* Featured Image */}
                <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20 mb-12 border border-slate-800">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-p:text-slate-400 prose-a:text-blue-400 prose-strong:text-white glass p-8 md:p-12 rounded-3xl border border-slate-800">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </div>

                {/* Footer / Share */}
                <div className="mt-12 pt-8 border-t border-slate-800 flex justify-between items-center">
                    <div className="text-slate-400 text-sm">
                        &copy; 2024 Linchon & Newton INC.
                    </div>
                    <button className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <Share2 size={16} /> Share Article
                    </button>
                </div>

             </div>
        </div>
    );
}
