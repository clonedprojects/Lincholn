'use client';

import { notFound } from 'next/navigation';
import { SERVICE_CATALOG } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

// Pillar images mapping
const pillarImages: Record<string, string> = {
    'frontier-tech': '/images/ai-tech.png',
    'cloud-infrastructure': '/images/cloud-infra.png',
    'financial-ecosystem': '/images/finance.png',
    'fintech-govtech': '/images/finance.png',
    'web3-platforms': '/images/cloud-infra.png',
};

// Floating orb component
function FloatingOrb({ className, delay = 0 }: { className?: string; delay?: number }) {
    return (
        <div
            className={`absolute rounded-full animate-pulse-glow ${className}`}
            style={{ animationDelay: `${delay}s` }}
        />
    );
}

export default function ServicePage({ params }: { params: { id: string } }) {
    const pillar = SERVICE_CATALOG.find(p => p.id === params.id);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    if (!pillar) {
        notFound();
    }

    const pillarIndex = SERVICE_CATALOG.findIndex(p => p.id === params.id);
    const nextPillar = SERVICE_CATALOG[(pillarIndex + 1) % SERVICE_CATALOG.length];
    const prevPillar = SERVICE_CATALOG[(pillarIndex - 1 + SERVICE_CATALOG.length) % SERVICE_CATALOG.length];

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

            {/* Hero Section with Background */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background image */}
                <div className="absolute inset-0">
                    <Image
                        src={pillarImages[pillar.id] || '/images/ai-tech.png'}
                        alt={pillar.title}
                        fill
                        className="object-cover opacity-20"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/90 to-slate-950" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
                </div>

                {/* Floating orbs */}
                <FloatingOrb className="w-80 h-80 bg-blue-600/20 -top-20 -right-20 blur-3xl" delay={0} />
                <FloatingOrb className="w-64 h-64 bg-purple-600/15 bottom-0 -left-20 blur-3xl" delay={2} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Breadcrumb */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition mb-8 group"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        <span>Back to Home</span>
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text content */}
                        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-16 w-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                                    <pillar.icon size={32} />
                                </div>
                                <span className="text-sm font-bold tracking-widest uppercase text-blue-400">
                                    Business Pillar
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                {pillar.title}
                            </h1>

                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                {pillar.fullDesc}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-3 rounded-full font-bold transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40 hover:scale-105">
                                    Request Proposal
                                </button>
                                <button className="glass hover:bg-slate-800/50 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-105">
                                    View Documentation
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className={`relative transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
                                <div className="relative glass rounded-3xl p-6 overflow-hidden">
                                    <Image
                                        src={pillarImages[pillar.id] || '/images/ai-tech.png'}
                                        alt={pillar.title}
                                        width={400}
                                        height={400}
                                        className="rounded-2xl animate-float"
                                    />
                                </div>
                                {/* Category count badge */}
                                <div className="absolute -right-4 bottom-8 glass rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="text-3xl font-bold gradient-text">
                                        {pillar.categories.reduce((acc, cat) => acc + cat.items.length, 0)}
                                    </div>
                                    <div className="text-xs text-slate-400">Solutions</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-20 relative">
                <FloatingOrb className="w-72 h-72 bg-purple-600/10 right-0 top-1/3 blur-3xl" delay={1} />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
                            Our Solutions
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Explore {pillar.title.split(' ')[0]} Services
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Comprehensive solutions designed for enterprise-scale deployments
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {pillar.categories.map((category, idx) => (
                            <div
                                key={idx}
                                className={`glass rounded-2xl p-8 hover-lift transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                    }`}
                                style={{ transitionDelay: `${idx * 150 + 300}ms` }}
                            >
                                <h2 className="text-2xl font-bold mb-8 flex items-center gap-4">
                                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                                    {category.title}
                                </h2>

                                <div className="space-y-5">
                                    {category.items.map((item, itemIdx) => (
                                        <div
                                            key={item.id}
                                            className="group p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 cursor-pointer border border-transparent hover:border-slate-700/50"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600/30 group-hover:scale-110 transition-all">
                                                    <Check size={18} className="text-blue-400" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-blue-400 transition-colors mb-1">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-500 text-sm leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-y border-slate-800/50 bg-slate-900/30">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                            <div className="text-slate-400 text-sm">Uptime SLA</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                            <div className="text-slate-400 text-sm">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">
                                {pillar.categories.reduce((acc, cat) => acc + cat.items.length, 0)}+
                            </div>
                            <div className="text-slate-400 text-sm">Solutions</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold gradient-text mb-2">SOC 2</div>
                            <div className="text-slate-400 text-sm">Compliant</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={pillarImages[pillar.id] || '/images/ai-tech.png'}
                        alt="Background"
                        fill
                        className="object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-slate-950/95 to-purple-900/40" />
                </div>

                <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to deploy <span className="gradient-text">{pillar.title}</span> solutions?
                    </h2>
                    <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg">
                        Contact our specialized team to discuss subscription tiers for
                        high-availability enterprise environments.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 group">
                            <span className="flex items-center justify-center gap-2">
                                Request Proposal
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="glass hover:bg-slate-800/50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Navigation to other pillars */}
            <section className="py-12 border-t border-slate-800/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <Link
                            href={`/services/${prevPillar.id}`}
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-all"
                        >
                            <ArrowLeft size={20} className="text-slate-400 group-hover:text-blue-400 group-hover:-translate-x-1 transition-all" />
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Previous</div>
                                <div className="font-bold group-hover:text-blue-400 transition-colors">{prevPillar.title}</div>
                            </div>
                        </Link>

                        <Link
                            href={`/services/${nextPillar.id}`}
                            className="group flex items-center gap-4 p-4 rounded-xl hover:bg-slate-900/50 transition-all text-right"
                        >
                            <div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Next</div>
                                <div className="font-bold group-hover:text-blue-400 transition-colors">{nextPillar.title}</div>
                            </div>
                            <ArrowRight size={20} className="text-slate-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
