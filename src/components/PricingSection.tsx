import { motion } from 'motion/react';
import { Check, Sparkles, AlertCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data';

interface PricingProps {
  onOpenBooking: (serviceId?: string) => void;
}

export default function PricingSection({ onOpenBooking }: PricingProps) {
  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#FAF6EE] to-[#E8D9FF]/10 dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Sacred Exchanges
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Reading Packages & Pricing
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Invest in your healing and future clarity. Select a package below that matches the depth and range of your questions.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-[32px] p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-left ${
                plan.recommended
                  ? 'bg-[#E8D9FF]/20 dark:bg-white/10 backdrop-blur-md border-2 border-[#D4AF37] shadow-xl shadow-[#D4AF37]/5'
                  : 'bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 shadow-sm'
              }`}
            >
              {/* Highlight background glow for recommended */}
              {plan.recommended && (
                <div className="absolute inset-0 bg-[#D4AF37]/3 dark:bg-[#D4AF37]/2 rounded-[32px] pointer-events-none" />
              )}

              {/* Recommended Badge */}
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#D4AF37] text-white text-[10px] font-bold uppercase tracking-widest flex items-center space-x-1 shadow">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Most Popular Guidance</span>
                </span>
              )}

              {/* Card Header */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#2F2F2F]/50 dark:text-cream/50 block">
                    {plan.duration} Session
                  </span>
                  <h3 className="font-serif italic text-2xl text-[#2F2F2F] dark:text-cream font-semibold tracking-tight">
                    {plan.name}
                  </h3>
                </div>

                {/* Pricing Area */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl sm:text-5xl font-bold font-serif text-[#D4AF37]">{plan.price}</span>
                  <span className="text-xs text-[#2F2F2F]/50 dark:text-cream/50 font-light">USD total</span>
                </div>

                <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 leading-relaxed font-light">
                  {plan.description}
                </p>

                <hr className="border-black/5 dark:border-white/5" />

                {/* Features List */}
                <ul className="space-y-3 pt-2">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#2F2F2F]/80 dark:text-cream/85">
                      <div className="p-0.5 rounded-full bg-white text-[#D4AF37] shrink-0 mt-0.5 border border-[#D4AF37]/20">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="font-light leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-8 mt-8 border-t border-black/5 dark:border-white/5">
                <button
                  onClick={() => onOpenBooking(plan.id === 'p1' ? 'weekly' : plan.id === 'p2' ? 'purpose' : 'healing')}
                  className={`w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-all duration-300 cursor-pointer text-center ${
                    plan.recommended
                      ? 'bg-[#2F2F2F] hover:bg-black text-white dark:bg-[#F8F4EC] dark:text-[#2F2F2F] dark:hover:bg-white shadow-md'
                      : 'bg-white/40 dark:bg-white/5 hover:bg-[#D4AF37] border border-white/60 dark:border-white/10 hover:text-white rounded-full text-xs font-bold uppercase tracking-widest active:scale-95 transition-all duration-300 cursor-pointer text-center text-[#2F2F2F] dark:text-cream shadow-sm hover:border-[#D4AF37]'
                  }`}
                  id={`pricing-book-${plan.id}`}
                >
                  Book {plan.name}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Warning / Note Block */}
        <div className="mt-12 flex items-center justify-center space-x-2 text-xs text-[#2F2F2F]/65 dark:text-cream/65 font-light">
          <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>Note: Standard session recordings and photo guides are delivered digitally within 24 hours post-reading.</span>
        </div>

      </div>
    </section>
  );
}
