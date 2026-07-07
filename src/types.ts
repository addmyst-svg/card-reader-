export interface Service {
  id: string;
  title: string;
  icon: string; // lucide icon name
  description: string;
  duration: string;
  price: string;
  detailedDescription?: string;
  category: 'love' | 'career' | 'finance' | 'purpose' | 'guardian' | 'weekly' | 'family' | 'healing';
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  image: string;
  text: string;
  serviceReceived: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface BookingFormInput {
  name: string;
  email: string;
  phone: string;
  serviceId: string;
  dateTime: string;
  message: string;
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}
