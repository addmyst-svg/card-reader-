import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, Sparkles } from 'lucide-react';

// Subcomponents
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Loading timer
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  // Dark mode class syncing
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Drifting angel feathers specification
  const FEATHERS = [
    { id: 1, left: '5%', delay: '0s', duration: '24s', size: 16 },
    { id: 2, left: '22%', delay: '4s', duration: '18s', size: 12 },
    { id: 3, left: '40%', delay: '1s', duration: '28s', size: 20 },
    { id: 4, left: '58%', delay: '7s', duration: '22s', size: 14 },
    { id: 5, left: '74%', delay: '2s', duration: '26s', size: 18 },
    { id: 6, left: '92%', delay: '5s', duration: '20s', size: 11 },
  ];

  // WhatsApp click coordinate
  const WHATSAPP_NUMBER = '1234567890';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hello Celeste, I would like to book an Angel Card Reading.`;

  // SEO Schema Markup (Structured Local Business Data)
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Celeste Angel Guidance & Healing",
    "image": "https://images.unsplash.com/photo-1518199266791-5375a83190b7",
    "description": "Premium, elegant, and modern Angel Card Reading website offering compassionate, spiritually guided advice in love, career, and life purpose.",
    "url": window?.location?.href || "https://celeste-guidance.com",
    "telephone": "+1-123-456-7890",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sausalito",
      "addressRegion": "CA",
      "addressCountry": "US"
    }
  };

  return (
    <div className="min-h-screen relative text-charcoal dark:text-cream bg-[#F8F4EC] dark:bg-[#121016] transition-colors duration-300">
      
      {/* Schema injection */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>

      {/* Floating Feather Layer (Drifting from above) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {FEATHERS.map((f) => (
          <svg
            key={f.id}
            className="feather-particle"
            style={{
              left: f.left,
              animationDelay: f.delay,
              animationDuration: f.duration,
              width: f.size,
              height: f.size,
            }}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Elegant single feather path */}
            <path
              className="text-amber-300/20 dark:text-amber-100/10"
              d="M20.62 3.38a4.5 4.5 0 0 0-6.36 0L5.03 12.61a11.5 11.5 0 0 0-2.65 4.75 3 3 0 0 0 4.14 4.14 11.5 11.5 0 0 0 4.75-2.65l9.23-9.23a4.5 4.5 0 0 0 0-6.36z M3.5 20.5l3-3"
            />
          </svg>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          /* Celestial Shimmer Loader */
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-[#F8F4EC] dark:bg-[#121016] flex flex-col items-center justify-center"
            id="celestial-loader"
          >
            <div className="relative flex flex-col items-center space-y-6">
              {/* Rotating glowing aura */}
              <div className="w-24 h-24 rounded-full bg-gold/10 dark:bg-gold/5 border border-gold/25 flex items-center justify-center relative animate-spin-slow">
                <Sparkles className="w-10 h-10 text-gold animate-pulse" />
                <div className="absolute inset-0 rounded-full border border-dashed border-gold/40 animate-pulse" />
              </div>

              {/* Shimmer text */}
              <div className="text-center space-y-2">
                <h1 className="font-serif text-2xl tracking-widest text-charcoal dark:text-cream">
                  CELESTE <span className="text-gold font-light">GUIDANCE</span>
                </h1>
                <p className="text-[10px] uppercase tracking-widest text-gold font-semibold animate-pulse">
                  Aligning Cosmic Resonance...
                </p>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Entire Sanctuary Page layout */
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header / Sticky Navigation */}
            <Header
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              onOpenBooking={handleOpenBooking}
            />

            {/* Core Page sections */}
            <main>
              <Hero onOpenBooking={handleOpenBooking} />
              <About />
              <Services onOpenBooking={handleOpenBooking} />
              <HowItWorks />
              <Benefits />
              <Testimonials />
              <VideoSection />
              <GallerySection />
              <PricingSection onOpenBooking={handleOpenBooking} />
              <FAQSection />
              <ContactSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Sticky/Floating Core Features */}
            
            {/* Floating Back to Top Button */}
            <AnimatePresence>
              {showBackToTop && (
                <motion.button
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={scrollToTop}
                  className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-white/95 dark:bg-[#121016]/95 border border-gold/30 hover:border-gold hover:bg-gold text-charcoal hover:text-charcoal dark:text-cream transition-all duration-300 shadow-lg cursor-pointer"
                  aria-label="Scroll Back to Top"
                  id="back-to-top-btn"
                >
                  <ArrowUp className="w-5 h-5 text-gold group-hover:text-charcoal" />
                </motion.button>
              )}
            </AnimatePresence>

            {/* Floating WhatsApp Quick Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-emerald-500 hover:bg-emerald-600 hover:scale-105 active:scale-95 text-white transition-all duration-300 shadow-xl flex items-center justify-center group"
              aria-label="Direct Chat on WhatsApp"
              id="whatsapp-fixed-btn"
            >
              {/* Dynamic pulse ripple */}
              <span className="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping pointer-events-none group-hover:hidden" />
              
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.989 3.3 1.503 4.94 1.505 5.54.004 10.05-4.506 10.054-10.059.002-2.689-1.041-5.216-2.937-7.114-1.894-1.897-4.414-2.943-7.114-2.944-5.543 0-10.053 4.51-10.058 10.06-.002 1.833.483 3.623 1.405 5.174l-.992 3.613 3.702-.971zm11.367-7.51c-.305-.153-1.802-.889-2.08-.99-.28-.101-.482-.153-.685.153-.203.305-.787.99-.965 1.193-.177.202-.355.228-.66.076-.304-.152-1.285-.474-2.449-1.512-.903-.806-1.512-1.802-1.69-2.107-.177-.304-.019-.469.133-.62.137-.136.305-.355.457-.533.152-.178.203-.305.305-.508.102-.203.05-.381-.025-.533-.076-.153-.685-1.65-.938-2.261-.247-.594-.497-.512-.685-.522-.178-.008-.38-.01-.584-.01-.203 0-.533.076-.812.381-.28.305-1.066 1.042-1.066 2.54s1.091 2.946 1.243 3.149c.152.204 2.148 3.28 5.204 4.602.727.314 1.293.502 1.735.643.73.232 1.396.199 1.922.12.586-.088 1.802-.736 2.057-1.448.254-.71.254-1.321.178-1.448-.076-.127-.28-.203-.585-.356z" />
              </svg>
              
              {/* Tooltip on Hover */}
              <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-300 origin-right px-3 py-1.5 rounded-lg bg-[#121016] text-white text-xs font-semibold whitespace-nowrap tracking-wider shadow border border-white/10">
                Need Guidance? Chat Now
              </span>
            </a>

            {/* Dynamic Pre-selecting Booking Modal component */}
            <BookingModal
              isOpen={bookingOpen}
              onClose={() => setBookingOpen(false)}
              preselectedServiceId={selectedServiceId}
            />

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
