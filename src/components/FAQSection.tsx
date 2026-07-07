import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq1');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const filteredFAQs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="py-24 bg-gradient-to-b from-[#E8D9FF]/10 to-[#F8F4EC] dark:from-[#191522] dark:to-[#121016] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Wisdom & Clarity
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Answers to common questions regarding our channeled sessions, energetic expectations, and payment protocols.
          </p>
        </div>

        {/* Optional Search bar to elevate the premium feel */}
        <div className="mb-8 relative max-w-md mx-auto">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#D4AF37]/60">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs (e.g. pay, how long, online)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-full text-xs sm:text-sm bg-white/40 dark:bg-white/5 border border-white/60 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
            id="faq-search"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFAQs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  key={faq.id}
                  className="rounded-[24px] bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 overflow-hidden transition-all duration-300 shadow-sm"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-serif text-sm sm:text-base font-semibold text-[#2F2F2F] dark:text-cream hover:bg-[#D4AF37]/5 transition-colors duration-300 cursor-pointer italic"
                    aria-expanded={isOpen}
                    id={`faq-btn-${faq.id}`}
                  >
                    <div className="flex items-start space-x-3.5 pr-4">
                      <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                    <div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#D4AF37] shrink-0" />
                      )}
                    </div>
                  </button>

                  {/* Expandable Answer Box */}
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#E8D9FF]/5 dark:bg-black/10"
                    >
                      <div className="p-5 border-t border-black/5 dark:border-white/5 text-xs sm:text-sm text-[#2F2F2F]/75 dark:text-cream/75 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-[#2F2F2F]/50 dark:text-cream/50 text-xs sm:text-sm font-light">
              No matching questions found. Feel free to contact us directly via the form below!
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
