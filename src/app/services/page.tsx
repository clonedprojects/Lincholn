'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SERVICE_CATALOG } from '@/lib/data';
import { useState, useEffect } from 'react';

import FloatingOrb from '@/components/FloatingOrb';

// Reusing the FloatingOrb component for consistency - REMOVED LOCAL DEFINITION

// Pillar images mapping (reused)
const pillarImages: Record<string, string> = {
  'frontier-tech': '/images/ai-tech.png',
  'cloud-infrastructure': '/images/cloud-infra.png',
  'financial-ecosystem': '/images/finance.png',
  'fintech-govtech': '/images/finance.png',
  'web3-platforms': '/images/cloud-infra.png',
};

export default function ServiceCatalog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950 z-10" />
             <Image
              src="/images/hero-bg.png"
              alt="Services Background"
              fill
              className="object-cover opacity-20"
              priority
            />
         </div>
         
         <FloatingOrb className="w-96 h-96 bg-purple-600/20 -top-20 -left-20 blur-3xl" delay={0} />
         <FloatingOrb className="w-80 h-80 bg-blue-600/20 top-1/4 -right-20 blur-3xl" delay={1.5} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                <Sparkles size={16} className="text-blue-400" />
                <span className="text-sm text-slate-300">Comprehensive Solutions</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Global Service <span className="gradient-text">Catalog</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                Explore our ecosystem of 51+ As-a-Service offerings, designed to power
                enterprise innovation from the core infrastructure to the cutting edge.
              </p>
            </div>
        </div>
      </section>

      {/* CATALOG GRID */}
      <section className="pb-32 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12">
              {SERVICE_CATALOG.map((pillar, index) => (
                <div 
                  key={pillar.id}
                  className={`group relative glass rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-blue-900/20 border border-slate-800 hover:border-blue-500/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="grid lg:grid-cols-5 gap-0">
                    
                    {/* Visual Side */}
                    <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full">
                       <Image
                        src={pillarImages[pillar.id] || '/images/ai-tech.png'}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-900/60 to-transparent opacity-90" />
                      
                      <div className="absolute bottom-8 left-8 right-8">
                         <div className="w-16 h-16 bg-blue-600/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-blue-500/30">
                            <pillar.icon size={32} />
                         </div>
                         <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{pillar.title}</h3>
                         <div className="h-1 w-12 bg-blue-500 rounded-full group-hover:w-24 transition-all duration-500" />
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:col-span-3 p-8 md:p-12 relative bg-slate-900/50 backdrop-blur-sm">
                      <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        {pillar.fullDesc}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                        {pillar.categories.map((cat, cIdx) => (
                           <div key={cIdx}>
                              <h4 className="flex items-center gap-2 text-blue-400 font-bold mb-3 uppercase text-xs tracking-wider">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                {cat.title}
                              </h4>
                              <ul className="space-y-2">
                                {cat.items.slice(0, 3).map((item) => (
                                  <li key={item.id} className="text-sm text-slate-400">
                                    {item.title}
                                  </li>
                                ))}
                                {cat.items.length > 3 && (
                                  <li className="text-xs text-slate-500 italic">
                                    + {cat.items.length - 3} more solutions
                                  </li>
                                )}
                              </ul>
                           </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-800 pt-8">
                         <div className="text-sm text-slate-500">
                           {pillar.categories.reduce((acc, c) => acc + c.items.length, 0)} Services Available
                         </div>
                         <Link 
                            href={`/services/${pillar.id}`}
                            className="inline-flex items-center gap-2 text-white font-bold hover:text-blue-400 transition-colors group/link"
                         >
                            Explore Pillar
                            <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                         </Link>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
        </div>
      </section>
      
    </div>
  );
}
