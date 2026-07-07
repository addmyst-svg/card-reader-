import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Calendar, Clock, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data';
import { BookingFormInput } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceId?: string;
}

export default function BookingModal({ isOpen, onClose, preselectedServiceId }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingFormInput>({
    name: '',
    email: '',
    phone: '',
    serviceId: preselectedServiceId || 'love',
    dateTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: preselectedServiceId }));
    }
  }, [preselectedServiceId, isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.dateTime) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const selectedService = SERVICES.find((s) => s.id === formData.serviceId) || SERVICES[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/65"
          id="booking-modal-overlay"
        >
          {/* Backdrop dismiss */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-lg bg-[#F8F4EC] dark:bg-[#121016] rounded-[32px] p-6 sm:p-8 border border-white/60 dark:border-white/10 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            id="booking-modal-content"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#2F2F2F]/60 dark:text-cream/60 transition-colors cursor-pointer"
              aria-label="Close Booking Modal"
              id="booking-modal-close-btn"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            {!isSuccess ? (
              <div className="space-y-6 text-left">
                {/* Header */}
                <div className="space-y-1 pr-6">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Reserve Channeled Session</span>
                  </span>
                  <h2 className="font-serif italic text-2xl text-[#2F2F2F] dark:text-cream font-semibold">
                    Book Your Angelic Reading
                  </h2>
                  <p className="text-xs text-[#2F2F2F]/65 dark:text-cream/65 font-light">
                    Complete this brief request form. Celeste will coordinate your session link and payment gateway instructions immediately.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="modal-name" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="modal-name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="modal-email" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="modal-email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                        placeholder="jane@gmail.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="modal-phone" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                        WhatsApp / Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="modal-phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div>
                    <label htmlFor="modal-service" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                      Select Channeled Reading *
                    </label>
                    <select
                      name="serviceId"
                      id="modal-service"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-[#1C1824] border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                    >
                      {SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.id}>
                          {srv.title} ({srv.duration} - {srv.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time Selector */}
                  <div>
                    <label htmlFor="modal-datetime" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                      Target Date & Time *
                    </label>
                    <input
                      type="datetime-local"
                      name="dateTime"
                      id="modal-datetime"
                      required
                      value={formData.dateTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                    />
                  </div>

                  {/* Intentions Note */}
                  <div>
                    <label htmlFor="modal-message" className="block text-[10px] font-semibold text-[#2F2F2F]/65 dark:text-cream/65 uppercase tracking-widest mb-1.5">
                      Intention / Main Questions (Optional)
                    </label>
                    <textarea
                      name="message"
                      id="modal-message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-white/5 border border-[#D4AF37]/20 dark:border-white/10 text-[#2F2F2F] dark:text-cream focus:outline-none focus:ring-1 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition-all"
                      placeholder="E.g., Seeking advice on career redirection, soulmate matching, chakra cleansing..."
                    />
                  </div>

                  {/* Warning label */}
                  <div className="flex items-center space-x-2 text-[10px] text-[#2F2F2F]/50 dark:text-cream/50 font-light">
                    <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    <span>Cancel easily up to 24 hours prior without fee.</span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#2F2F2F] hover:bg-black transition-all duration-300 shadow flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-50 font-sans"
                    id="modal-submit-btn"
                  >
                    <span>{isSubmitting ? 'Channeling Request...' : 'Confirm Sacred Booking'}</span>
                  </button>
                </form>
              </div>
            ) : (
              // Booking success confirmation panel
              <div className="text-center space-y-6 py-6 text-left">
                <div className="relative flex justify-center">
                  <div className="absolute inset-0 w-16 h-16 rounded-full bg-emerald-500/10 blur animate-ping mx-auto" />
                  <CheckCircle className="w-16 h-16 text-emerald-500 relative z-10" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif italic text-2xl text-[#2F2F2F] dark:text-cream font-semibold">
                    Appointment Requested!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2F2F2F]/70 dark:text-cream/70 font-light max-w-sm mx-auto">
                    Greetings, {formData.name}. Your connection request has been successfully dispatched to the celestial guides.
                  </p>
                </div>

                {/* Reservation Summary */}
                <div className="p-5 rounded-2xl bg-white/60 dark:bg-white/5 border border-[#D4AF37]/20 text-left space-y-3">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                    Summary details
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#2F2F2F]/80 dark:text-cream/80 font-light">
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{selectedService.title}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{selectedService.duration} / {selectedService.price}</span>
                    </div>
                    <div className="flex items-center space-x-2 col-span-1 sm:col-span-2">
                      <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
                      <span>{new Date(formData.dateTime).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Guidance coaching steps */}
                <div className="space-y-2.5 text-xs text-[#2F2F2F]/65 dark:text-cream/65 text-left font-light max-w-sm mx-auto">
                  <p className="font-semibold text-[#2F2F2F] dark:text-cream">Next Steps:</p>
                  <p>1. Check your email inbox for a secure booking confirmation containing the PayPal/Stripe link.</p>
                  <p>2. Once finalized, you will receive your Google Meet link or WhatsApp scheduling coordinate.</p>
                  <p>3. Rest, drink plenty of water, and stay open to cosmic channelling guidance.</p>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-[#2F2F2F] hover:bg-black transition-all duration-300 shadow font-sans"
                  id="modal-success-close-btn"
                >
                  Return to Sanctuary
                </button>
              </div>
            )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
