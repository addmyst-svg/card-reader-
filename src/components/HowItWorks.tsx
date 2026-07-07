import { motion } from 'motion/react';
import { Calendar, Compass, PhoneCall, Gift, ArrowDown, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      stepNum: '01',
      title: 'Choose a Reading',
      desc: 'Browse our specialized intuitive offerings and select the session length and category that aligns with your current questions.',
      icon: <Compass className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      stepNum: '02',
      title: 'Book Appointment',
      desc: 'Select an available date and time using our scheduling system, submit your details, and finalize your booking securely.',
      icon: <Calendar className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      stepNum: '03',
      title: 'Live Session Connect',
      desc: 'Join Celeste at your selected time for your private virtual session via WhatsApp, Google Meet, or standard Phone call.',
      icon: <PhoneCall className="w-6 h-6 text-[#D4AF37]" />,
    },
    {
      stepNum: '04',
      title: 'Receive Divine Guidance',
      desc: 'Receive direct channeled wisdom, custom mantras, actions, and an integrated audio recording of your unique session.',
      icon: <Gift className="w-6 h-6 text-[#D4AF37]" />,
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-gradient-to-b from-[#E8D9FF]/10 to-[#F8F4EC] dark:from-[#191522] dark:to-[#121016] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] rounded-full bg-[#D4AF37]/5 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-[#E8D9FF]/5 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            The Celestial Path
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            How It Works
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            A simple, secure, and sacred path to booking and experiencing your professional angel card session.
          </p>
        </div>

        {/* Steps Grid (Responsive Desktop horizontal / Mobile vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connecting SVG lines for desktop screen */}
          <div className="hidden lg:block absolute top-[45px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/40 to-[#D4AF37]/10 z-0 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={step.stepNum}
              className="relative flex flex-col items-center text-center space-y-4 group z-10"
            >
              {/* Step number and icon connector */}
              <div className="relative">
                {/* Floating glow bubble */}
                <div className="absolute inset-0 rounded-full bg-[#D4AF37]/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className="relative w-16 h-16 rounded-full bg-white dark:bg-white/5 border border-[#D4AF37]/30 dark:border-white/10 flex items-center justify-center shadow-md group-hover:border-[#D4AF37] group-hover:scale-105 transition-all duration-300">
                  {step.icon}
                  
                  {/* Floating index tag */}
                  <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
                    {step.stepNum}
                  </span>
                </div>
              </div>

              {/* Step Info */}
              <div className="space-y-2 max-w-[260px] mx-auto">
                <h3 className="font-serif italic text-lg text-[#2F2F2F] dark:text-cream font-medium group-hover:text-[#D4AF37] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#2F2F2F]/75 dark:text-cream/75 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>

              {/* Connecting indicators for mobile / tablet screens */}
              {idx < steps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4 text-[#D4AF37]/50 animate-bounce">
                  <ArrowDown className="w-5 h-5" />
                </div>
              )}
              
            </div>
          ))}

        </div>

        {/* Dynamic CTA block */}
        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] hover:text-[#2F2F2F] transition-colors duration-300"
          >
            <span>Choose Your Reading Tier</span>
            <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </div>

      </div>
    </section>
  );
}
