import { useState } from 'react';
import { Play, Volume2, Sparkles, CheckCircle } from 'lucide-react';
import { IMAGES } from '../data';

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  // High-quality calming spiritual healing / meditation chime embed
  const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/5F_S-v8mE00?autoplay=1&mute=0';

  return (
    <section
      id="video"
      className="py-24 bg-gradient-to-b from-[#F8F4EC] to-[#E8D9FF]/10 dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Virtual Sanctuary
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Experience an Angel Card Reading
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Take a 1-minute pause to see how I channel guidance, align our chakras, and draw cards in real-time to answer your questions.
          </p>
        </div>

        {/* Custom Video Player Wrapper */}
        <div className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 group animate-fade-in">
          
          {isPlaying ? (
            <iframe
              src={YOUTUBE_EMBED_URL}
              title="Experience an Angel Card Reading"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
              
              {/* Blur Cover Background */}
              <div className="absolute inset-0 bg-black/45 z-0" />
              <img
                src={IMAGES.deck}
                alt="Reading setup cover"
                className="absolute inset-0 w-full h-full object-cover z-[-1] scale-105 group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Play Button Trigger */}
              <button
                onClick={() => setIsPlaying(true)}
                className="relative z-10 w-20 h-20 rounded-full bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-white flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform duration-300 cursor-pointer focus:outline-none"
                aria-label="Play video"
                id="video-play-btn"
              >
                <Play className="w-8 h-8 fill-current stroke-[1.5] translate-x-0.5 text-white" />
              </button>

              <div className="relative z-10 mt-6 space-y-2">
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-widest backdrop-blur-md">
                  <Volume2 className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Calming Audio Enabled</span>
                </span>
                <p className="font-serif italic text-xl sm:text-2xl text-white font-medium">
                  Introduction to Celestial Resonance
                </p>
                <p className="text-white/80 text-xs sm:text-sm font-sans font-light max-w-md mx-auto">
                  A short preview session demonstrating energy alignment and real-time guidance.
                </p>
              </div>

            </div>
          )}

          {/* Golden Corner Accents */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4AF37]/40 z-20 pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4AF37]/40 z-20 pointer-events-none" />
        </div>

        {/* Video Bottom Metadata */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center space-y-2">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-serif italic font-semibold text-[#2F2F2F] dark:text-cream">100% Virtual Sessions</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Sparkles className="w-5 h-5 text-[#D4AF37] animate-pulse" />
            <span className="text-xs sm:text-sm font-serif italic font-semibold text-[#2F2F2F] dark:text-cream">Sacred Energetic Cleansing</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-xs sm:text-sm font-serif italic font-semibold text-[#2F2F2F] dark:text-cream">Interactive Channeled Chat</span>
          </div>
        </div>

      </div>
    </section>
  );
}
