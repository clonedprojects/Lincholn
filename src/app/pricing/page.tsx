'use client';

import { useState } from 'react';
import FloatingOrb from '@/components/FloatingOrb';
import { Check, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/lib/data';

export default function PricingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    description: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Request submitted. We will contact you for a consultation.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden relative">
      <FloatingOrb className="w-[600px] h-[600px] bg-blue-600/10 top-[-100px] left-[-100px] blur-3xl" delay={0} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Transparent <span className="gradient-text">Pricing</span></h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl">
             Choose the right tier for your growth stage. All our solutions are customizable to meet your specific infrastructure needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-24">
           {SUBSCRIPTION_PLANS.map((plan, idx) => (
             <div 
               key={idx} 
               className={`relative p-8 rounded-3xl flex flex-col h-full border transition-all duration-300 hover:-translate-y-2 ${
                 idx === 1 
                 ? 'glass border-blue-500/50 shadow-2xl shadow-blue-900/20' 
                 : 'glass border-slate-700/50 hover:border-slate-500'
               }`}
             >
                {idx === 1 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2 gradient-text">{plan.name === 'Government/Sovereign' ? 'Custom' : 'Contact for Quote'}</div>
                <p className="text-slate-500 text-sm mb-8">
                  {idx === 0 ? 'Perfect for pilots and small integrations.' : idx === 1 ? 'For growing platforms needing scale.' : 'Full sovereignty and security.'}
                </p>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                  {idx === 1 && (
                     <li className="flex items-start gap-3 text-slate-300 text-sm">
                       <Check size={16} className="text-blue-500 mt-0.5 shrink-0" />
                       <span className="font-bold text-blue-400">Regional Node Access</span>
                     </li>
                  )}
                </ul>

                <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                   idx === 1 ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40' : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}>
                  Request Quote
                </button>
             </div>
           ))}
        </div>

        {/* Consultation Form */}
        <div className="max-w-4xl mx-auto glass rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -mr-32 -mt-32" />
           
           <div className="relative z-10">
             <div className="text-center mb-10">
               <h2 className="text-3xl font-bold mb-4">Request Free Consultation</h2>
               <p className="text-slate-400">
                 Not sure which plan fits? Tell us about your project and we'll design a custom package for you.
               </p>
             </div>

             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Name</label>
                   <input type="text" name="name" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors" onChange={handleChange} />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Email</label>
                   <input type="email" name="email" required className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors" onChange={handleChange} />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Company</label>
                   <input type="text" name="company" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors" onChange={handleChange} />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Budget Range</label>
                   <select name="budget" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors text-slate-300" onChange={handleChange}>
                     <option value="">Select Range</option>
                     <option value="10k-50k">$10k - $50k</option>
                     <option value="50k-100k">$50k - $100k</option>
                     <option value="100k+">$100k+</option>
                     <option value="enterprise">Enterprise Custom</option>
                   </select>
                 </div>
               </div>

               <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Project Description</label>
                  <textarea name="description" rows={4} className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:border-blue-500 focus:outline-none transition-colors resize-none" onChange={handleChange}></textarea>
               </div>

               <div className="flex items-center gap-2 mb-4">
                 <ShieldCheck size={16} className="text-green-500" />
                 <span className="text-xs text-slate-500">Your information is secure and NDA protected.</span>
               </div>

               <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-900/20 transition-all flex items-center justify-center gap-2">
                 Schedule Consultation <ArrowRight size={18} />
               </button>
             </form>
           </div>
        </div>

      </div>
    </div>
  );
}
