'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Sparkles, Zap, Shield, Globe2 } from 'lucide-react';
import { SERVICE_CATALOG, SUBSCRIPTION_PLANS } from '@/lib/data';
import { useEffect, useState } from 'react';

// Floating orb component for visual interest
import FloatingOrb from '@/components/FloatingOrb';

// Floating orb component for visual interest - REMOVED LOCAL DEFINITION


// Stats counter component
function StatItem({ number, label, delay }: { number: string; label: string; delay: number }) {
  return (
    <div
      className="text-center opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{number}</div>
      <div className="text-slate-400 text-sm uppercase tracking-wider">{label}</div>
    </div>
  );
}

// Pillar images mapping
const pillarImages: Record<string, string> = {
  'frontier-tech': '/images/ai-tech.png',
  'cloud-infrastructure': '/images/cloud-infra.png',
  'financial-ecosystem': '/images/finance.png',
  'fintech-govtech': '/images/finance.png',
  'web3-platforms': '/images/cloud-infra.png',
};

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="bg-slate-950 min-h-screen text-white overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Animated background image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 animate-drift"
            style={{
              transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
            }}
          >
            <Image
              src="/images/hero-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-purple-900/20" />
        </div>

        {/* Floating orbs for visual depth */}
        <FloatingOrb className="w-96 h-96 bg-blue-600/30 -top-20 -left-20 blur-3xl" delay={0} />
        <FloatingOrb className="w-80 h-80 bg-purple-600/20 top-1/3 -right-10 blur-3xl" delay={2} />
        <FloatingOrb className="w-64 h-64 bg-cyan-500/20 bottom-20 left-1/4 blur-3xl" delay={4} />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 opacity-0 animate-fade-in-up">
              <Sparkles size={16} className="text-blue-400" />
              <span className="text-sm text-slate-300">51+ As-a-Service Offerings</span>
            </div>

            {/* Main headline */}
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Architecting the <br />
              <span className="gradient-text animate-gradient bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                Automated Future
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              The premier developer in GenAI, Fintech Infrastructure, IoT, and GovTech.
              Building tomorrow's digital infrastructure with enterprise-grade solutions.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Link href="/services">
                <button className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40 hover:scale-105">
                  <span className="flex items-center justify-center gap-2">
                    View Service Catalog
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
              <button className="glass hover:bg-slate-800/50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                Corporate Login
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8 border-t border-slate-800/50">
              <StatItem number="51+" label="XaaS Offerings" delay={0.8} />
              <StatItem number="5" label="Business Pillars" delay={1.0} />
              <StatItem number="99.9%" label="Uptime SLA" delay={1.2} />
              <StatItem number="24/7" label="Global Support" delay={1.4} />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-slate-400 rounded-full" />
          </div>
        </div>
      </section>

      {/* TRUST INDICATORS */}
      <section className="py-12 border-y border-slate-800/50 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-slate-500">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-blue-500" />
              <span className="text-sm">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={20} className="text-yellow-500" />
              <span className="text-sm">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 size={20} className="text-green-500" />
              <span className="text-sm">GDPR Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} className="text-purple-500" />
              <span className="text-sm">Enterprise Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS GRID */}
      <section className="py-24 relative">
        <FloatingOrb className="w-72 h-72 bg-blue-600/10 -left-20 top-1/3 blur-3xl" delay={1} />

        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              What We Build
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Core Business Pillars</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Comprehensive technology stacks from AI Agents to Blockchain,
              powering the next generation of digital enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATALOG.map((pillar, index) => (
              <Link
                href={`/services/${pillar.id}`}
                key={pillar.id}
                className="group relative rounded-2xl overflow-hidden hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Card background with image */}
                <div className="absolute inset-0">
                  <Image
                    src={pillarImages[pillar.id] || '/images/ai-tech.png'}
                    alt={pillar.title}
                    fill
                    className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/95 to-slate-900/70" />
                </div>

                {/* Card content */}
                <div className="relative p-8 h-full glass border-slate-700/50 group-hover:border-blue-500/50 transition-colors">
                  <div className="h-14 w-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                    <pillar.icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {pillar.shortDesc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {pillar.categories[0].items.slice(0, 2).map(i => (
                      <span
                        key={i.id}
                        className="text-xs bg-slate-800/80 px-3 py-1.5 rounded-full text-slate-400 border border-slate-700/50"
                      >
                        {i.title}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-blue-400 text-sm font-medium">
                    <span>Explore Solutions</span>
                    <ArrowRight size={14} className="ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-slate-950 to-purple-900/20" />
        <FloatingOrb className="w-96 h-96 bg-purple-600/20 -right-40 top-0 blur-3xl" delay={2} />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-30 animate-pulse-glow" />
                <div className="relative glass rounded-3xl p-4 overflow-hidden">
                  <Image
                    src="/images/ai-tech.png"
                    alt="AI Technology"
                    width={500}
                    height={500}
                    className="rounded-2xl animate-float"
                  />
                </div>
                {/* Floating badges */}
                <div className="absolute -right-4 top-1/4 glass rounded-xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                </div>
                <div className="absolute -left-4 bottom-1/4 glass rounded-xl p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-2xl font-bold text-blue-400">51+</div>
                  <div className="text-xs text-slate-400">Services</div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Enterprise Infrastructure,<br />
                <span className="gradient-text">Startup Agility</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We combine the reliability of enterprise solutions with the innovation speed
                of a startup. Our modular architecture allows you to scale from prototype
                to production without changing vendors.
              </p>

              <div className="space-y-4">
                {[
                  'Modular XaaS architecture for flexible scaling',
                  'White-glove integration with existing systems',
                  'Dedicated infrastructure with 24/7 monitoring',
                  'Full source code access for sovereign deployments'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle size={14} className="text-blue-400" />
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUBSCRIPTION MODEL */}
      <section className="py-24 px-4 relative">
        <FloatingOrb className="w-80 h-80 bg-blue-600/10 left-1/4 top-0 blur-3xl" delay={3} />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-4 block">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Subscription Tiers</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Flexible plans designed to scale with your organization's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SUBSCRIPTION_PLANS.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl transition-all duration-300 hover-lift ${idx === 1
                    ? 'glass border-blue-500/50 bg-gradient-to-b from-blue-900/20 to-transparent'
                    : 'glass border-slate-700/50'
                  }`}
              >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-xs px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-6">
                  <span className="gradient-text">{plan.price}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-300">
                      <CheckCircle size={18} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${idx === 1
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 shadow-lg shadow-blue-900/30 hover:shadow-blue-500/40'
                      : 'glass hover:bg-slate-800/50 border border-slate-700'
                    }`}
                >
                  {idx === 2 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/90 to-slate-950/70" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your<br />
            <span className="gradient-text">Digital Infrastructure?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
            Join leading enterprises who trust Linchon & Newton for their
            mission-critical technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-slate-900 hover:bg-slate-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Schedule a Demo
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="glass hover:bg-slate-800/50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
              View Documentation
            </button>
          </div>
        </div>
      </section>

    </main>
  );
}
