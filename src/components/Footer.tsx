import React, { useState } from 'react';
import { Sparkles, Send } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-white/60 dark:bg-[#0D0B10] border-t border-white/60 dark:border-white/5 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand & Intro */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center space-x-2 group">
              <div className="p-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <span className="font-serif text-lg tracking-wider font-semibold text-[#2F2F2F] dark:text-cream group-hover:text-[#D4AF37] transition-colors">
                Celeste <span className="text-[#D4AF37] font-light italic">Guidance</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 font-light leading-relaxed">
              Experience certified, compassionate, and life-altering Angel Card Readings. Our mission is to illuminate your current pathways and empower you to co-create a life of love and abundance.
            </p>
            {/* Disclaimer */}
            <p className="text-[10px] text-[#2F2F2F]/40 dark:text-cream/40 font-light leading-relaxed">
              Disclaimer: Angel Card Readings represent intuitive spiritual counseling and coaching. They do not substitute for official professional medical, financial, or legal advice.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif italic text-sm font-semibold text-[#2F2F2F] dark:text-cream tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#home" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Home</a>
              </li>
              <li>
                <a href="#about" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">About Celeste</a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Pricing Tiers</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif italic text-sm font-semibold text-[#2F2F2F] dark:text-cream tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#services" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Love & Relationship</a>
              </li>
              <li>
                <a href="#services" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Career & Guidance</a>
              </li>
              <li>
                <a href="#services" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Finance & Prosperity</a>
              </li>
              <li>
                <a href="#services" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Guardian Angel Messages</a>
              </li>
              <li>
                <a href="#services" className="text-[#2F2F2F]/75 dark:text-cream/75 hover:text-[#D4AF37] transition-colors font-light">Energy Healing Session</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif italic text-sm font-semibold text-[#2F2F2F] dark:text-cream tracking-wider uppercase">
              Daily Guidance
            </h4>
            <p className="text-xs text-[#2F2F2F]/70 dark:text-cream/70 font-light leading-relaxed">
              Subscribe to receive weekly channeled angelic forecasts, meditations, and exclusive early booking discounts.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="flex relative items-center">
              <input
                type="email"
                required
                placeholder="Enter email address..."
                className="w-full px-4 py-3 rounded-full text-xs bg-white dark:bg-white/5 border border-[#D4AF37]/20 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                id="newsletter-email"
              />
              <button
                type="submit"
                className="absolute right-1 p-2 rounded-full bg-[#2F2F2F] dark:bg-white text-white dark:text-[#2F2F2F] hover:bg-black transition-colors cursor-pointer"
                aria-label="Submit newsletter"
                id="newsletter-submit"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium animate-fade-in mt-2">
                ✓ Perfect! You are now subscribed to Celeste's Angel Guidance.
              </p>
            )}
          </div>

        </div>

        <hr className="border-[#D4AF37]/10 my-8" />

        {/* Legal & Copyright bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#2F2F2F]/50 dark:text-cream/50 font-light">
          <div>
            <span>© {currentYear} Celeste Guidance. All Rights Reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#privacy" className="hover:text-[#D4AF37] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-[#D4AF37] transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
