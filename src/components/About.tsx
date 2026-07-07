import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, Compass, Award } from 'lucide-react';
import { IMAGES } from '../data';

export default function About() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-[#D4AF37]" />,
      title: '12+ Years of Practice',
      desc: 'Dedicated to pure channeled wisdom, certified in Angel Counseling and intuitive spiritual healing.',
    },
    {
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Our Sacred Mission',
      desc: 'To empower you to access higher wisdom, align with your life contract, and confidently walk your true path.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Thousands Helped',
      desc: 'Supported global executives, creative writers, couples, and seekers on their evolutionary spiritual journey.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: '100% Confidential & Safe',
      desc: 'Every booking takes place within an absolute sanctuary of safety, respect, and non-judgment.',
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-[#E8D9FF]/10 to-[#F8F4EC] dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Meet the Channeler
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Greetings, I am Celeste
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            A certified intuitive channeler, therapist, and your dedicated companion for connecting with divine celestial wisdom.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Stats Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Soft decorative golden glowing aura */}
            <div className="absolute -inset-4 rounded-full bg-[#D4AF37]/10 dark:bg-gold/5 blur-3xl animate-glow-pulse-1 pointer-events-none" />
            
            <div className="relative">
              {/* Gold borders */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4AF37]/40" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4AF37]/40" />
              
              <div className="w-[280px] sm:w-[350px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/20">
                <img
                  src={IMAGES.portrait}
                  alt="Celeste spiritual guide portrait"
                  className="w-full h-full object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Float Experience Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white/50 dark:bg-[#121016]/80 backdrop-blur-md px-5 py-4 rounded-[24px] border border-white/60 dark:border-white/10 flex items-center space-x-3 shadow-lg">
                <div className="text-3xl font-serif italic font-bold text-[#D4AF37]">12+</div>
                <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#2F2F2F] dark:text-cream leading-tight">
                  Years of<br />Divine Light
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Values Grid */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif italic text-2xl text-[#2F2F2F] dark:text-cream font-medium">
                My Spiritual Journey & Mission
              </h3>
              <p className="text-sm sm:text-base text-[#2F2F2F]/80 dark:text-cream/80 leading-relaxed font-light">
                From a young age, I was deeply sensitive to the subtle energy fields and celestial whispers around us. Over the last twelve years, I have refined this raw intuitive gift into a structured, compassionate, and life-changing advisory system.
              </p>
              <p className="text-sm sm:text-base text-[#2F2F2F]/80 dark:text-cream/80 leading-relaxed font-light">
                My ultimate mission is not to predict a static future, but to reveal your celestial resources, empower your free will, and help you co-create a life filled with prosperity, love, and profound self-worth.
              </p>
            </div>

            {/* Core Values / Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-5 rounded-[24px] border border-white/60 dark:border-white/10 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-lg text-left"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-1.5 rounded-lg bg-white border border-[#D4AF37]/20 shadow-sm">
                      {item.icon}
                    </div>
                    <h4 className="font-serif italic text-sm sm:text-base text-[#2F2F2F] dark:text-cream font-medium">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-[#2F2F2F]/65 dark:text-cream/65 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
