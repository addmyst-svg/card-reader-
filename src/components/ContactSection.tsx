import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Instagram, Youtube, Facebook, ShieldCheck } from 'lucide-react';
import { ContactFormInput } from '../types';

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormInput>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const WHATSAPP_NUMBER = '1234567890';
  const EMAIL_ADDRESS = 'celeste.angelreadings@gmail.com';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Basic Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);

    // Simulate sending to server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Auto clear success alert after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-[#F8F4EC] to-[#E8D9FF]/10 dark:from-[#121016] dark:to-[#191522] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Initiate Connection
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Contact & Consultation
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Have a question prior to booking, or wish to schedule a custom corporate or private wellness group card event? Send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Form & Messages */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 sm:p-10 rounded-[32px] border border-white/60 dark:border-white/10 shadow-sm relative h-full flex flex-col justify-between">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif italic text-xl sm:text-2xl text-[#2F2F2F] dark:text-cream font-semibold">
                    Send a Message
                  </h3>
                  <div className="flex items-center space-x-1.5 text-emerald-500 text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Secure & Confidential</span>
                  </div>
                </div>

                {/* Contact form */}
                <form onSubmit={handleFormSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="block text-xs font-semibold text-[#2F2F2F]/60 dark:text-cream/60 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name-input"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email-input" className="block text-xs font-semibold text-[#2F2F2F]/60 dark:text-cream/60 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email-input"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone-input" className="block text-xs font-semibold text-[#2F2F2F]/60 dark:text-cream/60 uppercase tracking-wider mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone-input"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-xs font-semibold text-[#2F2F2F]/60 dark:text-cream/60 uppercase tracking-wider mb-1.5">
                      Your Message or Questions *
                    </label>
                    <textarea
                      name="message"
                      id="message-input"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                      placeholder="Share your current situation, fields of interest, or general queries..."
                    />
                  </div>

                  {errorMsg && <p className="text-xs text-rose-500 font-medium">{errorMsg}</p>}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#2F2F2F] hover:bg-black transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer shadow disabled:opacity-50 font-sans"
                    id="contact-submit"
                  >
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message To Celeste'}</span>
                    <Send className="w-3.5 h-3.5 text-white" />
                  </button>
                </form>
              </div>

              {/* Toast message inside Card */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm flex items-center space-x-2.5 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Thank you! Your spiritual query has been successfully dispatched. Celeste will correspond with you via email within 24 hours.</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

          {/* Right Column: Directions, Map & Quick Channels */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Direct Channels Glass Card */}
            <div className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-white/60 dark:border-white/10 shadow-sm space-y-6 text-left">
              <h3 className="font-serif italic text-lg sm:text-xl text-[#2F2F2F] dark:text-cream font-semibold">
                Direct Channels
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/10 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-emerald-600 tracking-wider">Chat on WhatsApp</span>
                    <span className="text-sm font-medium text-[#2F2F2F] dark:text-cream">+1 (123) 456-7890</span>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center space-x-4 p-4 rounded-2xl bg-[#D4AF37]/5 dark:bg-[#D4AF37]/10 border border-[#D4AF37]/20 hover:bg-[#D4AF37]/10 transition-colors group"
                >
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#D4AF37] tracking-wider">Secure Email</span>
                    <span className="text-sm font-medium text-[#2F2F2F] dark:text-cream">{EMAIL_ADDRESS}</span>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-[#E8D9FF]/10 dark:bg-purple-500/10 border border-[#E8D9FF]/30 dark:border-purple-500/20">
                  <div className="p-2.5 rounded-xl bg-[#E8D9FF]/20 dark:bg-purple-500/20 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase font-semibold text-[#D4AF37] tracking-wider">Sanctuary Location</span>
                    <span className="text-sm font-medium text-[#2F2F2F] dark:text-cream">Sausalito Marina, California, USA</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4 border-t border-black/5 dark:border-white/5">
                <span className="block text-xs font-semibold text-[#2F2F2F]/50 dark:text-cream/50 uppercase tracking-widest mb-3">
                  Connect on Social Media
                </span>
                <div className="flex items-center space-x-4">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-[#D4AF37]/10 text-[#2F2F2F] dark:text-cream transition-colors">
                    <Instagram className="w-5 h-5 text-[#D4AF37]" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-[#D4AF37]/10 text-[#2F2F2F] dark:text-cream transition-colors">
                    <Youtube className="w-5 h-5 text-[#D4AF37]" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 hover:bg-[#D4AF37]/10 text-[#2F2F2F] dark:text-cream transition-colors">
                    <Facebook className="w-5 h-5 text-[#D4AF37]" />
                  </a>
                </div>
              </div>

            </div>

            {/* Google Maps placeholder visual */}
            <div className="relative h-[200px] rounded-[32px] overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm group">
              {/* Outer map style */}
              <div className="absolute inset-0 bg-[#E8E1D5] dark:bg-[#1C1824] flex items-center justify-center">
                {/* Simulated Grid Lines */}
                <div className="absolute inset-0 opacity-15 border-t border-l border-[#D4AF37]/30" style={{ backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                
                {/* Glowing beacon marker */}
                <div className="relative z-10 flex flex-col items-center">
                  {/* Rippling pulses */}
                  <div className="absolute top-0 w-8 h-8 rounded-full bg-[#D4AF37]/30 animate-ping" />
                  <div className="absolute top-1 w-6 h-6 rounded-full bg-[#D4AF37]/40 animate-pulse" />
                  
                  <MapPin className="w-8 h-8 text-[#D4AF37] drop-shadow relative z-10 animate-bounce" />
                  
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-widest text-[#2F2F2F] dark:text-cream bg-white/95 dark:bg-[#121016]/95 border border-[#D4AF37]/40 px-2.5 py-1 rounded-full shadow-md">
                    Celeste Sanctuary
                  </span>
                </div>
              </div>
              
              {/* Golden Corner Accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#D4AF37]/40 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#D4AF37]/40 pointer-events-none" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
