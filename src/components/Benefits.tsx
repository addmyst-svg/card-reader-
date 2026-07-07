import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { BENEFITS } from '../data';

function BenefitIcon({ name, className = 'w-6 h-6 text-[#D4AF37]' }: { name: string; className?: string }) {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) {
    return <Icons.CheckCircle className={className} />;
  }
  return <IconComponent className={className} />;
}

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-24 bg-gradient-to-b from-[#F8F4EC] to-[#E8D9FF]/10 dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Why Seek Our Counsel
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            The Benefits of Angelic Readings
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Enjoy premium wellness and professional guidance tailored to help you navigate life transitions with grace, confidence, and peace.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              key={benefit.id}
              className="bg-white/40 dark:bg-white/5 backdrop-blur-md p-6 rounded-[32px] border border-white/60 dark:border-white/10 transition-all duration-300 hover:border-[#D4AF37]/30 hover:shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                {/* Icon header with check badge */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-[#D4AF37]/20 shadow-sm">
                    <BenefitIcon name={benefit.icon} />
                  </div>
                  {/* Elegant Golden Checkmark Badge */}
                  <div className="w-5 h-5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Icons.Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-serif italic text-base sm:text-lg text-[#2F2F2F] dark:text-cream font-semibold tracking-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Decorative accent dot in card corner */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40 mt-4 self-end" />
            </motion.div>
          ))}
        </div>

        {/* Fast booking reminder */}
        <div className="mt-16 bg-white/40 dark:bg-white/5 backdrop-blur-md p-8 rounded-[32px] border border-white/60 dark:border-white/10 text-center max-w-3xl mx-auto space-y-4 shadow-sm">
          <p className="font-serif italic text-lg sm:text-xl text-[#2F2F2F] dark:text-cream font-medium">
            Ready to experience healing and clarity?
          </p>
          <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 font-light max-w-xl mx-auto">
            Our virtual slots fill up quickly. Book your certified personalized Angel Card Reading session today to unlock immediate pathways of abundance and purpose.
          </p>
          <div className="pt-2">
            <a
              href="#pricing"
              className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest text-white bg-[#2F2F2F] hover:bg-black hover:shadow-lg transition-all duration-300 cursor-pointer inline-block"
            >
              Reserve Your Reading Slot
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
