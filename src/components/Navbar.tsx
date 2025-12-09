'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICE_CATALOG } from '@/lib/data';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activePillar, setActivePillar] = useState<string | null>(null);

    return (
        <nav className="fixed w-full z-50 bg-slate-900 border-b border-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter">
                            LINCHON & NEWTON <span className="text-blue-500">INC.</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {SERVICE_CATALOG.map((pillar) => (
                            <div
                                key={pillar.id}
                                className="relative group"
                                onMouseEnter={() => setActivePillar(pillar.id)}
                                onMouseLeave={() => setActivePillar(null)}
                            >
                                <button className="flex items-center space-x-1 hover:text-blue-400 transition py-6">
                                    <span>{pillar.title.split(' ')[0]}</span>
                                    <ChevronDown size={14} />
                                </button>

                                {/* Mega Menu Dropdown */}
                                <div className={`absolute left-0 w-[600px] bg-slate-800 border border-slate-700 shadow-2xl rounded-md p-6 grid grid-cols-2 gap-6 transition-all duration-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0`}>
                                    {pillar.categories.map((cat, idx) => (
                                        <div key={idx}>
                                            <h4 className="font-bold text-blue-400 mb-2 uppercase text-xs tracking-wider">{cat.title}</h4>
                                            <ul className="space-y-2">
                                                {cat.items.map((item) => (
                                                    <li key={item.id}>
                                                        <Link href={`/services/${pillar.id}`} className="text-sm text-slate-300 hover:text-white block">
                                                            {item.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition">
                            Subscribe
                        </button>
                    </div>

                    {/* Mobile Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-4 py-4 space-y-4">
                        {SERVICE_CATALOG.map((pillar) => (
                            <div key={pillar.id}>
                                <Link
                                    href={`/services/${pillar.id}`}
                                    className="block py-2 text-slate-200 hover:text-blue-400"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {pillar.title}
                                </Link>
                            </div>
                        ))}
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition mt-4">
                            Subscribe
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
