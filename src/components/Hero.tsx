import { motion } from 'motion/react';
import { Sparkles, Phone, ArrowRight } from 'lucide-react';
import { IMAGES } from '../data';

interface HeroProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const WHATSAPP_NUMBER = '1234567890'; // Representative placeholder
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Celeste, I would like to book an Angel Card Reading.`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#F8F4EC] via-[#F8F4EC] to-[#E8D9FF]/20 dark:from-[#121016] dark:via-[#191522] dark:to-[#121016]"
    >
      {/* Soft Ethereal Glowing Spheres in Background */}
      <div className="absolute top-[-50px] right-[-50px] w-96 h-96 bg-[#E8D9FF]/40 rounded-full blur-[120px] pointer-events-none animate-glow-pulse-1" />
      <div className="absolute bottom-[-50px] left-[-50px] w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[150px] pointer-events-none animate-glow-pulse-2" />

      {/* Floating Sparkle Particles */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-[#D4AF37]/40 animate-sparkle-1" />
      <div className="absolute top-[65%] left-[8%] w-1.5 h-1.5 rounded-full bg-[#E8D9FF]/50 animate-sparkle-2" />
      <div className="absolute top-[15%] right-[15%] w-2.5 h-2.5 rounded-full bg-[#D4AF37]/50 animate-sparkle-3" />
      <div className="absolute bottom-[20%] right-[10%] w-2 h-2 rounded-full bg-[#E8D9FF]/40 animate-sparkle-1" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#E8D9FF]/30 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mx-auto lg:mx-0"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow text-[#D4AF37]" />
              <span className="text-[10px] uppercase tracking-[0.25em]">Certified Intuitive Angel Channel</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#2F2F2F] dark:text-cream leading-[1.1] font-medium tracking-tight"
            >
              Find Divine Guidance Through <span className="text-[#D4AF37] italic">Angel Cards</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-[#2F2F2F]/75 dark:text-cream/80 font-sans max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Receive accurate, compassionate, and spiritually guided angel card readings to gain clarity in love, career, relationships, finances, and life purpose.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 bg-[#D4AF37] text-white rounded-full font-serif italic text-lg hover:scale-105 transition-transform shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2 cursor-pointer group"
                id="hero-book-btn"
              >
                <span>Book Your Reading</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 border border-[#D4AF37] text-[#D4AF37] dark:text-cream rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#D4AF37]/5 transition-all duration-300"
                id="hero-whatsapp-btn"
              >
                <Phone className="w-4 h-4 text-[#D4AF37] fill-none" />
                <span className="font-sans text-sm font-semibold uppercase tracking-wider">WhatsApp Now</span>
              </a>
            </motion.div>

            {/* Micro Badges / Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D4AF37]/20 text-center lg:text-left max-w-md mx-auto lg:mx-0"
            >
              <div>
                <span className="block text-2xl font-serif italic text-[#2F2F2F] dark:text-cream">12+ Years</span>
                <span className="text-[10px] uppercase tracking-widest text-[#2F2F2F]/50 dark:text-cream/50">Experience</span>
              </div>
              <div>
                <span className="block text-2xl font-serif italic text-[#2F2F2F] dark:text-cream">10k+ Sessions</span>
                <span className="text-[10px] uppercase tracking-widest text-[#2F2F2F]/50 dark:text-cream/50">Global Clients</span>
              </div>
              <div>
                <span className="block text-2xl font-serif italic text-[#2F2F2F] dark:text-cream">4.9★ Rating</span>
                <span className="text-[10px] uppercase tracking-widest text-[#2F2F2F]/50 dark:text-cream/50">Client Love</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Media Panel */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden glass-card shadow-2xl group border border-white/40 dark:border-white/5"
            >
              {/* Inner ambient shine */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
              
              <img
                src={IMAGES.hero}
                alt="Glowing Golden Angel Wings and Floating Cards"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Floating feather accent over image */}
              <div className="absolute top-8 right-8 z-20 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-cream text-xs flex items-center space-x-1.5 animate-float-medium">
                <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
                <span>Ethereal Light Sessions</span>
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                <p className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                  Connect with your Guides
                </p>
                <p className="text-white/80 text-xs sm:text-sm font-sans font-light">
                  Direct intuitive channeled sessions for clarity and soul alignment.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
