import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

// Map strings to Lucide icon components dynamically
function ServiceIcon({ name, className = 'w-6 h-6 text-gold' }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.Sparkles className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Services({ onOpenBooking }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    { label: 'All Readings', value: 'all' },
    { label: 'Love & Family', value: 'love-family' },
    { label: 'Abundance & Career', value: 'wealth-career' },
    { label: 'Soul & Energy', value: 'soul-energy' },
  ];

  const filteredServices = SERVICES.filter((service) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'love-family') return service.category === 'love' || service.category === 'family';
    if (selectedCategory === 'wealth-career') return service.category === 'career' || service.category === 'finance';
    if (selectedCategory === 'soul-energy') {
      return (
        service.category === 'purpose' ||
        service.category === 'guardian' ||
        service.category === 'weekly' ||
        service.category === 'healing'
      );
    }
    return true;
  });

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-[#F8F4EC] to-[#E8D9FF]/10 dark:from-[#121016] dark:to-[#191522] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 animate-fade-in">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Our Spiritual Offerings
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Guided Angel Card Readings & Sessions
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Each reading is structured as a sacred ritual of alignment, designed to connect you directly to the angelic realm for compassionate, personalized clarity.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === tab.value
                  ? 'bg-[#D4AF37] text-white shadow-lg shadow-[#D4AF37]/20'
                  : 'bg-white/40 dark:bg-white/5 text-[#2F2F2F]/70 dark:text-cream/70 border border-white/60 dark:border-white/10 hover:bg-[#D4AF37]/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative flex flex-col justify-between h-full rounded-[32px] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 p-6 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-lg shadow-sm hover:shadow-[#D4AF37]/5 group"
              >
                {/* Golden ambient background pulse on hover */}
                {hoveredId === service.id && (
                  <div className="absolute inset-0 bg-[#D4AF37]/3 dark:bg-[#D4AF37]/1 rounded-[32px] transition-opacity duration-300 pointer-events-none" />
                )}

                <div className="space-y-4">
                  {/* Service Icon Panel */}
                  <div className="inline-flex p-3 rounded-2xl bg-white border border-[#D4AF37]/20 shadow-sm">
                    <ServiceIcon name={service.icon} className="w-6 h-6 text-[#D4AF37]" />
                  </div>

                  {/* Service Titles */}
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg sm:text-xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 italic">
                      {service.title}
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-[#2F2F2F]/50 dark:text-cream/50 font-light">
                      <span>{service.duration}</span>
                      <span>•</span>
                      <span className="text-[#D4AF37] font-medium">{service.price}</span>
                    </div>
                  </div>

                  {/* Service Short Description */}
                  <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 leading-relaxed font-light line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Card Action footer */}
                <div className="pt-6 border-t border-black/5 dark:border-white/5 mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold font-serif text-[#D4AF37]">{service.price}</span>
                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2 bg-[#2F2F2F] dark:bg-[#F8F4EC] text-white dark:text-[#2F2F2F] rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider hover:bg-black dark:hover:bg-white transition-colors duration-300 cursor-pointer shadow-sm hover:shadow"
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Action Banner */}
        <div className="mt-16 text-center">
          <p className="text-xs sm:text-sm text-[#2F2F2F]/60 dark:text-cream/60 mb-4 font-light">
            Need help selecting? All readings can be adjusted to fit your specific spiritual questions on the day.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center space-x-2 px-6 py-3.5 border border-[#D4AF37] text-[#D4AF37] dark:text-cream rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer"
          >
            <span>Discuss Custom Session</span>
            <Icons.Phone className="w-3.5 h-3.5 text-[#D4AF37] animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
}
