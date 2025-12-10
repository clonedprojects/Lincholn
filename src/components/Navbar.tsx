'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { SERVICE_CATALOG } from '@/lib/data';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Common link style for top-level items
    const linkStyle = "flex items-center space-x-1 text-sm font-medium text-slate-300 hover:text-blue-400 transition py-6";

    return (
        <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/images/logo.png"
                                alt="Linchon & Newton Inc."
                                width={180}
                                height={50}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button className={linkStyle}>
                                <span>Services</span>
                                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            {/* Services Mega Menu */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-[800px] bg-slate-900 border border-slate-700 shadow-2xl rounded-2xl p-6 grid grid-cols-2 gap-6 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0">
                                {SERVICE_CATALOG.map((pillar) => (
                                    <Link
                                        key={pillar.id}
                                        href={`/services/${pillar.id}`}
                                        className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group/item"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 text-blue-400 group-hover/item:text-white group-hover/item:bg-blue-600 transition-all">
                                            <pillar.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-200 group-hover/item:text-blue-400 transition-colors mb-1">
                                                {pillar.title}
                                            </h4>
                                            <p className="text-xs text-slate-400 line-clamp-2">
                                                {pillar.shortDesc}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                                {/* View All Link */}
                                <Link
                                    href="/services"
                                    className="col-span-2 bg-slate-800/50 hover:bg-slate-800 p-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold text-blue-400 transition-colors"
                                >
                                    View Full Service Catalog <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <Link href="/about" className={linkStyle}>About</Link>
                        <Link href="/blog" className={linkStyle}>Blog</Link>
                        <Link href="/pricing" className={linkStyle}>Pricing</Link>
                        <Link href="/contact" className={linkStyle}>Contact</Link>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-700 h-screen overflow-y-auto pb-20">
                    <div className="px-4 py-6 space-y-6">

                        <div className="space-y-4">
                            <div className="font-bold text-blue-400 uppercase text-xs tracking-wider px-2">Services</div>
                            {SERVICE_CATALOG.map((pillar) => (
                                <Link
                                    key={pillar.id}
                                    href={`/services/${pillar.id}`}
                                    className="block px-4 py-3 bg-slate-800/50 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <div className="flex items-center gap-3">
                                        <pillar.icon size={18} className="text-blue-500" />
                                        {pillar.title}
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="border-t border-slate-800 pt-6 space-y-2">
                            <div className="font-bold text-slate-500 uppercase text-xs tracking-wider px-2 mb-2">Company</div>
                            <Link href="/about" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link href="/blog" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition" onClick={() => setIsOpen(false)}>Blog</Link>
                            <Link href="/pricing" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition" onClick={() => setIsOpen(false)}>Pricing</Link>
                            <Link href="/contact" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition" onClick={() => setIsOpen(false)}>Contact</Link>
                            <Link href="/faq" className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition" onClick={() => setIsOpen(false)}>FAQ</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
