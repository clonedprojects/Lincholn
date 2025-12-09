'use client';

import { useState } from 'react';
import FloatingOrb from '@/components/FloatingOrb';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What services does Linchon & Newton INC offer?",
    answer: "We offer a comprehensive suite of digital services including Artificial Intelligence (GenAI, Agents), Cloud Infrastructure (XaaS), Fintech solutions (Banking, Trading), Blockchain development, and Government Technology (GovTech) systems. Our catalog includes over 51 specialized services."
  },
  {
    question: "What industries do you serve?",
    answer: "Our primary focus is on Finance, Government, Logistics, and High-Tech Enterprise sectors. However, our modular XaaS architecture allows us to adapt to Healthcare, Education, and Retail industries with ease."
  },
  {
    question: "Where is your company located?",
    answer: "Linchon & Newton INC is registered and headquartered in Victoria Mahe, Seychelles (Reg No: 242968). We maintain a distributed global presence with operational nodes in major financial hubs to support international clients."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary significantly based on scope. A simplified SaaS module integration can take 2-4 weeks, while a full-scale enterprise digital transformation or custom GovTech system may span 6-12 months. We provide detailed timelines during the consultation phase."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer tiered support packages ranging from standard business hour support to 24/7 priority access for mission-critical infrastructure. All our enterprise subscriptions include dedicated account management."
  },
  {
    question: "What technologies do you work with?",
    answer: "We maximize the use of modern, scalable stacks. This includes Next.js/React for frontends, Go/Rust/Python for high-performance backends, Kubernetes for orchestration, and industry-specific protocols for Blockchain and Banking integration."
  },
  {
    question: "How can I get a quote?",
    answer: "You can request a quote by visiting our Pricing page or Contact page. For enterprise solutions, we typically schedule a discovery call to understand your requirements before providing a detailed proposal."
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely. We are a global-first company. Our diverse team and distributed infrastructure allow us to effectively serve clients in North America, Europe, Asia, and emerging markets."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden relative">
      <FloatingOrb className="w-96 h-96 bg-blue-600/10 top-0 left-1/2 -translate-x-1/2 blur-3xl" delay={0} />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <HelpCircle size={18} className="text-blue-400" />
            <span className="text-sm text-slate-300">Frequently Asked Questions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Common <span className="gradient-text">Queries</span></h1>
          <p className="text-slate-400 text-lg">
            Everything you need to know about partnering with Linchon & Newton INC.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`glass rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-slate-800/60 border-blue-500/50' : 'border-slate-800 hover:border-slate-700'}`}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className={`text-lg font-medium pr-8 ${openIndex === idx ? 'text-blue-400' : 'text-slate-200'}`}>
                  {faq.question}
                </span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-blue-500/20 text-blue-400' : 'bg-slate-800 text-slate-400'}`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-700/50 mt-2 mx-6 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
           <p className="text-slate-400 mb-6">Still have questions?</p>
           <a href="/contact" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
             Contact Support
           </a>
        </div>
      </div>
    </div>
  );
}
