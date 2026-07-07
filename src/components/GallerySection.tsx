import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { label: 'All Images', value: 'all' },
    { label: 'Angel Cards', value: 'Angel Cards' },
    { label: 'Crystals & Feathers', value: 'Healing Crystals' },
    { label: 'Altar & Candles', value: 'Candles' },
    { label: 'Cosmic & Space', value: 'Divine Light' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'Healing Crystals') return item.category === 'Healing Crystals' || item.category === 'White Feathers';
    if (activeFilter === 'Candles') return item.category === 'Candles' || item.category === 'Spiritual Desk';
    return item.category === activeFilter;
  });

  return (
    <section
      id="gallery"
      className="py-24 bg-gradient-to-b from-[#E8D9FF]/10 to-[#F8F4EC] dark:from-[#121016] dark:to-[#191522] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="uppercase tracking-[0.3em] text-[10px] text-[#D4AF37] font-bold block">
            Visual Sanctuary
          </span>
          <h2 className="font-serif italic text-3xl sm:text-4xl text-[#2F2F2F] dark:text-cream font-medium tracking-tight">
            The Angelic Gallery
          </h2>
          <div className="w-12 h-[1px] bg-[#D4AF37]/30 mx-auto" />
          <p className="text-sm sm:text-base text-[#2F2F2F]/70 dark:text-cream/70 font-light">
            Glimpse into the sacred tools, healing crystals, and meditative spaces where divine cosmic channels align.
          </p>
        </div>

        {/* Gallery Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-[#2F2F2F] text-white dark:bg-white dark:text-[#2F2F2F] shadow-sm'
                  : 'bg-white/40 dark:bg-white/5 text-[#2F2F2F]/70 dark:text-cream/70 border border-white/60 dark:border-white/5 hover:bg-white dark:hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Bento Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item.imageUrl)}
                className={`relative rounded-[24px] overflow-hidden bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 aspect-square cursor-zoom-in group shadow-sm hover:shadow-md hover:border-[#D4AF37]/30 transition-all duration-300 ${
                  idx % 3 === 0 ? 'sm:col-span-2 sm:aspect-[16/9]' : ''
                }`}
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Cover Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-semibold tracking-wider text-[#D4AF37] uppercase block mb-1">
                        {item.category}
                      </span>
                      <h3 className="font-serif italic text-base sm:text-lg text-white font-medium">
                        {item.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-[#D4AF37] text-white shadow">
                      <ZoomIn className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Small indicator icon */}
                <div className="absolute top-4 right-4 p-1.5 rounded-lg bg-black/30 backdrop-blur-md border border-white/10 text-white opacity-60 group-hover:opacity-0 transition-opacity">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-md"
              id="gallery-lightbox"
            >
              {/* Close backdrop trigger */}
              <div className="absolute inset-0" onClick={() => setSelectedImage(null)} />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white z-50 cursor-pointer border border-white/10"
                aria-label="Close Lightbox"
                id="gallery-lightbox-close"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[85vh] z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src={selectedImage}
                  alt="Expanded spiritual item"
                  className="w-full h-full max-h-[85vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
