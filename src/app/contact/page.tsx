'use client';

import { useState } from 'react';
import FloatingOrb from '@/components/FloatingOrb';
import { Mail, MapPin, Clock, Send, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Consultation',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    alert('Thank you for your message. We will be in touch shortly.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 overflow-hidden relative">
       <FloatingOrb className="w-[500px] h-[500px] bg-blue-600/10 top-0 left-[-100px] blur-3xl" delay={0} />
       <FloatingOrb className="w-[400px] h-[400px] bg-purple-600/10 bottom-0 right-[-100px] blur-3xl" delay={2} />

       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Get in <span className="gradient-text">Touch</span></h1>
           <p className="text-slate-400 max-w-2xl mx-auto text-lg">
             Ready to start your next project? Using the form below, or reach out to us directly.
             Our global team is available to assist you.
           </p>
         </div>

         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
           
           {/* Info Side */}
           <div className="space-y-12">
             <div className="glass p-8 rounded-3xl">
               <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
               
               <div className="space-y-6">
                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center shrink-0 text-blue-400">
                     <MapPin size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Headquarters</h4>
                     <p className="text-slate-400">306 Victoria House,<br />Victoria Mahe, Seychelles</p>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center shrink-0 text-purple-400">
                     <Mail size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Email Us</h4>
                     <a href="mailto:contact@linchonnewton.com" className="text-slate-400 hover:text-white transition-colors">
                       contact@linchonnewton.com
                     </a>
                   </div>
                 </div>

                 <div className="flex items-start gap-4">
                   <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center shrink-0 text-green-400">
                     <Clock size={24} />
                   </div>
                   <div>
                     <h4 className="font-bold text-lg mb-1">Business Hours</h4>
                     <p className="text-slate-400">Monday - Friday: 9:00 AM - 6:00 PM (GMT+4)<br />24/7 Support for Enterprise Clients</p>
                   </div>
                 </div>
               </div>
             </div>

             <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 p-8 rounded-3xl border border-blue-500/20">
               <h3 className="text-xl font-bold mb-2">Global Presence</h3>
               <p className="text-slate-400 text-sm">
                 While headquartered in Seychelles, we operate nodes in London, Singapore, and New York to ensure 
                 seamless service delivery across all time zones.
               </p>
             </div>
           </div>

           {/* Form Side */}
           <div className="glass p-8 md:p-10 rounded-3xl border border-slate-700/50 shadow-2xl">
             <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
             <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Full Name</label>
                   <input 
                     type="text" name="name" required placeholder="John Doe"
                     onChange={handleChange}
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Email Address</label>
                   <input 
                     type="email" name="email" required placeholder="john@company.com"
                     onChange={handleChange}
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                   />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Phone Number</label>
                   <input 
                     type="tel" name="phone" placeholder="+1 (555) 000-0000"
                     onChange={handleChange}
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-slate-300">Company Name</label>
                   <input 
                     type="text" name="company" placeholder="Acme Corp"
                     onChange={handleChange}
                     className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium text-slate-300">Service Interest</label>
                 <select 
                    name="service"
                    onChange={handleChange}
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-300"
                 >
                   <option>General Consultation</option>
                   <option>AI & Machine Learning</option>
                   <option>Cloud Infrastructure</option>
                   <option>Fintech Solutions</option>
                   <option>Blockchain Development</option>
                   <option>GovTech Systems</option>
                   <option>Other</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-sm font-medium text-slate-300">Message</label>
                 <textarea 
                   name="message" required rows={4} placeholder="How can we help you?"
                   onChange={handleChange}
                   className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                 />
               </div>

               <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                 Send Message
                 <Send size={18} />
               </button>
             </form>
           </div>

         </div>
       </div>
    </div>
  );
}
