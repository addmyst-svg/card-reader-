import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Pause } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gradient-to-b from-[#E8D9FF]/5 to-[#F8F4EC] dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Voices of Awakening
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Client Testimonials
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Read inspiring stories of healing, guidance, and sudden emotional breakthrough experienced by our global family.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative" onMouseEnter={() => setIsPlaying(false)} onMouseLeave={() => setIsPlaying(true)}>
          {/* Subtle glow behind card */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.5 }}
              className="bg-[#E8D9FF]/20 dark:bg-white/5 backdrop-blur-lg p-8 sm:p-12 rounded-[40px] border border-[#E8D9FF]/40 dark:border-white/10 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-4 right-8 font-serif text-[100px] leading-none text-[#D4AF37]/20 pointer-events-none select-none">“</div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                
                {/* Client Photo & Metadata */}
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    {/* Ring glow */}
                    <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-md pointer-events-none" />
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover relative z-10 border-2 border-white shadow-md"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif italic text-base sm:text-lg text-[#2F2F2F] dark:text-cream font-semibold">
                      {current.name}
                    </h3>
                    <p className="text-[10px] uppercase tracking-widest text-[#2F2F2F]/50 dark:text-cream/50 mt-1">
                      {current.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Message */}
                <div className="md:col-span-8 space-y-4 text-left">
                  {/* Rating Stars */}
                  <div className="flex items-center space-x-1 text-[#D4AF37]">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current stroke-[1.5]" />
                    ))}
                  </div>

                  {/* Main Quote Text */}
                  <p className="text-base sm:text-lg font-serif italic text-[#2F2F2F]/90 dark:text-cream/90 leading-snug">
                    "{current.text}"
                  </p>

                  {/* Service Badge Tag */}
                  <div className="inline-flex px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-[#D4AF37]/20 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Session: {current.serviceReceived}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-charcoal/60 dark:text-cream/60"
                aria-label={isPlaying ? 'Pause auto-rotation' : 'Play auto-rotation'}
                id="testimonial-play-toggle"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-[#D4AF37]" /> : <Play className="w-4 h-4 text-[#D4AF37]" />}
              </button>
              <span className="text-xs font-mono text-charcoal/40 dark:text-cream/40">
                {activeIndex + 1} / {TESTIMONIALS.length}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#F8F4EC] dark:bg-white/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 dark:border-white/10 text-charcoal dark:text-cream transition-all duration-300 cursor-pointer"
                aria-label="Previous testimonial"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#F8F4EC] dark:bg-white/5 hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20 dark:border-white/10 text-charcoal dark:text-cream transition-all duration-300 cursor-pointer"
                aria-label="Next testimonial"
                id="testimonial-next-btn"
              >
                <ChevronRight className="w-5 h-5 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Bullet Index Indicators */}
          <div className="flex justify-center space-x-1.5 mt-4">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-charcoal/10 dark:bg-cream/15'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
                id={`testimonial-bullet-${idx}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
