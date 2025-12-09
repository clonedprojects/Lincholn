'use client';

import Image from 'next/image';
import FloatingOrb from '@/components/FloatingOrb';
import { Shield, Users, Target, Zap, Globe2, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      icon: Zap,
      title: 'Innovation',
      desc: 'Pushing the boundaries of what is possible with emerging technologies.'
    },
    {
      icon: Award,
      title: 'Quality',
      desc: 'Delivering enterprise-grade solutions with uncompromised reliability.'
    },
    {
      icon: Users,
      title: 'Client Success',
      desc: 'Your growth is our primary metric for success.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      desc: 'Building trust through transparency and security-first architecture.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
         <div className="absolute inset-0">
            <Image
              src="/images/hero-bg.png"
              alt="About Background"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/80 to-slate-950" />
         </div>
         
         <FloatingOrb className="w-96 h-96 bg-blue-600/20 top-0 right-0 blur-3xl" delay={0} />
         <FloatingOrb className="w-64 h-64 bg-purple-600/20 bottom-0 left-0 blur-3xl" delay={1} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
                Pioneering <span className="gradient-text">Digital Futures</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Linchon & Newton INC is a global leader in software development, 
                dedicated to architecting the infrastructure of tomorrow.
              </p>
            </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="glass p-8 rounded-3xl border-l-4 border-blue-500">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Target className="text-blue-400" />
                  Our Mission
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  To deliver innovative technology solutions that solve complex business challenges 
                  and drive digital transformation for enterprises worldwide.
                </p>
              </div>
              
              <div className="glass p-8 rounded-3xl border-l-4 border-purple-500">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <Globe2 className="text-purple-400" />
                  Our Vision
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  Empowering businesses globally with autonomous, scalable, and secure 
                  digital ecosystems that redefine industry standards.
                </p>
              </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                 <Image
                   src="/images/ai-tech.png"
                   alt="Visionary Tech"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40" />
               </div>
               {/* Registration Badge */}
               <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl max-w-xs shadow-xl backdrop-blur-md">
                 <div className="text-sm text-slate-400 uppercase tracking-wider mb-2">Registration Details</div>
                 <div className="space-y-1 text-sm font-medium">
                   <p><span className="text-blue-400">Company No:</span> 242968</p>
                   <p><span className="text-blue-400">Formed:</span> Aug 6, 2024</p>
                   <p><span className="text-blue-400">Loc:</span> Victoria Mahe, Seychelles</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">
               The principles that guide every line of code we write and every partnership we build.
             </p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {coreValues.map((val, idx) => (
               <div 
                 key={idx}
                 className="glass p-8 rounded-2xl hover:bg-slate-800/60 transition-all duration-300 group hover:-translate-y-2"
               >
                 <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                   <val.icon size={24} />
                 </div>
                 <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   {val.desc}
                 </p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* EXPERTISE SUMMARY */}
      <section className="py-24 relative overflow-hidden">
        <FloatingOrb className="w-96 h-96 bg-purple-600/10 -right-20 bottom-0 blur-3xl" delay={2} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <h2 className="text-3xl md:text-4xl font-bold mb-12">Global Expertise</h2>
           <div className="flex flex-wrap justify-center gap-4">
             {['Artificial Intelligence', 'Fintech Infrastructure', 'Blockchain Solutions', 'Cloud Computing', 'GovTech Systems', 'IoT Networks'].map((tag, i) => (
               <span 
                 key={i}
                 className="px-6 py-3 glass rounded-full text-slate-300 font-medium border border-slate-700/50 hover:border-blue-500/50 transition-colors cursor-default"
               >
                 {tag}
               </span>
             ))}
           </div>
        </div>
      </section>

    </div>
  );
}
