import { Service, Benefit, Testimonial, FAQItem, GalleryItem } from './types';
import heroImg from './assets/images/angel_card_hero_1783407405597.jpg';
import portraitImg from './assets/images/celeste_portrait_1783407420307.jpg';
import deckImg from './assets/images/angel_cards_deck_1783407432381.jpg';
import crystalsImg from './assets/images/crystals_feathers_1783407450684.jpg';

// Custom generated image paths from our generation tool
export const IMAGES = {
  hero: heroImg,
  portrait: portraitImg,
  deck: deckImg,
  crystals: crystalsImg,
};

export const SERVICES: Service[] = [
  {
    id: 'love',
    title: 'Love & Relationship Reading',
    icon: 'Heart',
    description: 'Gain deep clarity regarding soulmates, marriage, dating, and healing past heartbreaks through gentle celestial guidance.',
    duration: '45 Minutes',
    price: '$75',
    category: 'love',
    detailedDescription: 'Whether you are seeking your soulmate, navigating a transition in a marriage, or seeking closure and healing from past relationship wounds, this session taps into the angelic realms to deliver compassionate and objective spiritual insights.'
  },
  {
    id: 'career',
    title: 'Career Guidance',
    icon: 'Briefcase',
    description: 'Unlock your professional potential, align with your true talents, and navigate career transitions or promotions.',
    duration: '45 Minutes',
    price: '$80',
    category: 'career',
    detailedDescription: 'Find clarity in your career trajectory. Discover whether it is time to pivot, start a new venture, or how to resolve blockages at your current workplace. Our angels provide clear signs for your highest professional alignment.'
  },
  {
    id: 'finance',
    title: 'Finance & Prosperity Reading',
    icon: 'Coins',
    description: 'Identify abundance blocks, clear scarcity mindsets, and welcome the flow of prosperity into your life.',
    duration: '30 Minutes',
    price: '$60',
    category: 'finance',
    detailedDescription: ' Prosperity is your natural birthright. This reading exposes subconscious limitations and highlights energetic blockages stopping your financial growth, presenting actionable, heavenly steps to invite security and wealth.'
  },
  {
    id: 'purpose',
    title: 'Life Purpose Reading',
    icon: 'Sparkles',
    description: 'Connect with your soul’s blueprint, understand your birth gifts, and find the path that brings deep spiritual fulfillment.',
    duration: '60 Minutes',
    price: '$95',
    category: 'purpose',
    detailedDescription: 'Are you asking "Why am I here?" or "What is my next step?" This in-depth reading communicates directly with your guides to reveal your core spiritual mission, hidden natural gifts, and immediate milestones on your life path.'
  },
  {
    id: 'guardian',
    title: 'Guardian Angel Messages',
    icon: 'Flame',
    description: 'Receive personal, comforting, and direct messages of support from your personal lifelong celestial guardians.',
    duration: '45 Minutes',
    price: '$70',
    category: 'guardian',
    detailedDescription: 'Your guardian angels have been beside you since birth. In this sacred session, we open the channel to translate their custom, supportive, and direct words of comfort, warnings, or encouragement meant exclusively for you.'
  },
  {
    id: 'weekly',
    title: 'Weekly Angel Guidance',
    icon: 'Compass',
    description: 'A focused, energetic forecast for the upcoming 7 days to align your decisions with auspicious celestial forces.',
    duration: '20 Minutes',
    price: '$45',
    category: 'weekly',
    detailedDescription: 'A short, powerful alignment check-in. Receive custom focus themes, warnings, and opportunities for your upcoming week, ensuring you walk in peace, grace, and confident decision-making.'
  },
  {
    id: 'family',
    title: 'Family & Generational Reading',
    icon: 'Users',
    description: 'Heal generational patterns, understand family dynamics, and invite harmony and mutual understanding back home.',
    duration: '60 Minutes',
    price: '$90',
    category: 'family',
    detailedDescription: 'Unpack family karma and relationship dynamics with parents, children, or relatives. This session specializes in identifying repeating generational behaviors and bringing healing light to heal family wounds.'
  },
  {
    id: 'healing',
    title: 'Energy & Healing Session',
    icon: 'Moon',
    description: 'A soothing energetic clearing combining cards with a guided light meditation to release heavy emotional baggage.',
    duration: '75 Minutes',
    price: '$120',
    category: 'healing',
    detailedDescription: 'This premium session pairs a focused angel card layout with a remote energy clearing and chakra balancing. It leaves you feeling lighter, deeply grounded, peaceful, and reconnected to your infinite source of divine joy.'
  }
];

export const BENEFITS: Benefit[] = [
  {
    id: 'accuracy',
    title: 'Accurate Guidance',
    description: 'Highly specific and resonant messages that directly address your current situations with zero guessing.',
    icon: 'Target'
  },
  {
    id: 'confidentiality',
    title: 'Confidential Sessions',
    description: 'All sessions are completely private, forming a sacred and non-judgmental container of security and trust.',
    icon: 'ShieldCheck'
  },
  {
    id: 'energy',
    title: 'Positive Energy',
    description: 'Focus on uplifting, healing perspectives that empower you, rather than fear-based predictions.',
    icon: 'Sun'
  },
  {
    id: 'personalized',
    title: 'Personalized Reading',
    description: 'Tailored specifically to your unique vibration, energy field, and current life blueprint.',
    icon: 'User'
  },
  {
    id: 'worldwide',
    title: 'Online Worldwide',
    description: 'Connect easily from anywhere globally via clear audio/video calls in the comfort of your own home.',
    icon: 'Globe'
  },
  {
    id: 'experienced',
    title: 'Experienced Reader',
    description: 'Over 12 years of professional intuitive channeling, certified guidance, and counseling experience.',
    icon: 'Award'
  },
  {
    id: 'support',
    title: 'Spiritual Support',
    description: 'Receive continued light, ongoing encouragement, and post-session integration exercises.',
    icon: 'HeartHandshake'
  },
  {
    id: 'fast',
    title: 'Fast Booking',
    description: 'Seamless scheduling and instant secure booking options designed for your active modern schedule.',
    icon: 'CalendarDays'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    text: 'Celeste provided a clarity that was immediately life-altering. Her career guidance helped me make a massive professional pivot with complete confidence and peace. Her reading was incredibly accurate!',
    serviceReceived: 'Career Guidance'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Financial Analyst',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    text: 'I was skeptical about angel cards initially, but Celeste named specific details about my financial blockage that nobody else knew. The reading was highly therapeutic, reassuring, and completely cleared my doubts.',
    serviceReceived: 'Finance & Prosperity Reading'
  },
  {
    id: 't3',
    name: 'Elena Rostova',
    role: 'Yoga Teacher',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    text: 'The Guardian Angel session was a profoundly emotional experience. I felt an overwhelming sense of warmth and light. I left feeling a massive spiritual weight lifted from my chest.',
    serviceReceived: 'Guardian Angel Messages'
  },
  {
    id: 't4',
    name: 'David Vance',
    role: 'Software Architect',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    text: 'Celeste has a beautiful, calming presence. Her Love & Relationship reading helped me and my partner resolve long-standing communication blockages. It felt like an emotional sanctuary.',
    serviceReceived: 'Love & Relationship Reading'
  },
  {
    id: 't5',
    name: 'Amina Al-Mansoor',
    role: 'Author & Curator',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    text: 'I book a Life Purpose Reading with Celeste whenever I feel stuck in my creative flow. The symbols she channels are so deeply resonant and immediately align my writing energy back into action.',
    serviceReceived: 'Life Purpose Reading'
  },
  {
    id: 't6',
    name: 'Olivia Sterling',
    role: 'Wellness Consultant',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    text: 'The Energy & Healing Session was spectacular. It felt like an energetic bath that completely reset my nervous system. I slept soundly for the first time in months. Pure, divine magic!',
    serviceReceived: 'Energy & Healing Session'
  },
  {
    id: 't7',
    name: 'Marcus Brody',
    role: 'Entrepreneur',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    text: 'Celeste’s family reading brought so much healing to our household during a major relocation transition. Her wisdom is gentle but incredibly deep. An invaluable spiritual mentor.',
    serviceReceived: 'Family & Generational Reading'
  },
  {
    id: 't8',
    name: 'Isabella Garcia',
    role: 'Interior Designer',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    text: 'Her Weekly Angel Guidance has become my favorite self-care ritual. It’s concise, beautifully encouraging, and keeps my headspace balanced and centered through busy workweeks.',
    serviceReceived: 'Weekly Angel Guidance'
  },
  {
    id: 't9',
    name: 'Liam Peterson',
    role: 'Musician',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200',
    text: 'The precision of Celeste’s insights literally blew my mind. She spoke of obstacles that I hadn’t shared with a soul and gave me practical, divine mantras that worked instantly.',
    serviceReceived: 'Life Purpose Reading'
  },
  {
    id: 't10',
    name: 'Dr. Chloe Tremblay',
    role: 'Psychologist',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    text: 'As a therapist, I deeply appreciate Celeste’s trauma-informed, gentle, and highly supportive counseling style. Her reading acts as an excellent complementary bridge for deep emotional healing.',
    serviceReceived: 'Love & Relationship Reading'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Sacred Angel Card Deck',
    category: 'Angel Cards',
    imageUrl: IMAGES.deck
  },
  {
    id: 'g2',
    title: 'Quartz Clusters & Feathers',
    category: 'Healing Crystals',
    imageUrl: IMAGES.crystals
  },
  {
    id: 'g3',
    title: 'Sanctuary Ambient Candles',
    category: 'Candles',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g4',
    title: 'Cosmic Crystal Sphere',
    category: 'Crystal Ball',
    imageUrl: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g5',
    title: 'Morning Soul Meditation',
    category: 'Meditation',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g6',
    title: 'Ethereal White Feathers',
    category: 'White Feathers',
    imageUrl: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g7',
    title: 'Intuitive Spiritual Desk',
    category: 'Spiritual Desk',
    imageUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'g8',
    title: 'Divine Light Channeling',
    category: 'Divine Light',
    imageUrl: 'https://images.unsplash.com/photo-1464802686167-b939a6910659?auto=format&fit=crop&q=80&w=800'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How does Angel Card Reading work?',
    answer: 'Angel Card readings operate on the law of resonance and spiritual synchronicity. Unlike traditional tarot, which can look deeply into psychological complexes or physical events, angel cards tap directly into high-frequency celestial guides. As a certified reader, I act as an energetic bridge, translating the visual symbols, feelings, and messages of the cards into actionable, compassionate guidance for your life.'
  },
  {
    id: 'faq2',
    question: 'Can I book online?',
    answer: 'Yes! All my readings are conducted virtually via highly confidential WhatsApp Audio/Video calls, Google Meet sessions, or phone calls, making it easy to receive guidance safely and comfortably from anywhere in the world.'
  },
  {
    id: 'faq3',
    question: 'Do I need prior experience?',
    answer: 'Not at all! You only need to bring an open heart, an receptive mind, and any general questions you may have. I will guide you through a short, centering breathing alignment before we shuffle the deck together.'
  },
  {
    id: 'faq4',
    question: 'How long is a session?',
    answer: 'Sessions typically range between 30 to 90 minutes depending on the package you select. Each session includes time for a brief grounding meditation, the active card reading, and actionable guidance integration.'
  },
  {
    id: 'faq5',
    question: 'Is everything confidential?',
    answer: 'Absolutely. Respecting your trust is my highest commitment. Everything shared during our booking, communication, and session is completely private, forming a sacred and secure space of comfort.'
  },
  {
    id: 'faq6',
    question: 'How do I pay?',
    answer: 'Booking is completely secure. We support all major credit cards, Apple Pay, PayPal, and local bank transfers. Upon selecting a session, you will receive a secure payment link via email or WhatsApp.'
  }
];

export const PRICING_PLANS = [
  {
    id: 'p1',
    name: 'Quick Reading',
    duration: '30 Minutes',
    price: '$60',
    description: 'Perfect for a single urgent question, brief situation check-in, or quick weekly alignment.',
    features: [
      'Single focus card layout (3 cards)',
      'Direct, action-focused guidance',
      'Follow-up mantra checklist',
      'WhatsApp Audio or Phone call',
      'Recording of the session'
    ],
    recommended: false,
  },
  {
    id: 'p2',
    name: 'Detailed Reading',
    duration: '60 Minutes',
    price: '$95',
    description: 'Our most sought-after deep dive. Focuses on multiple areas like career, love, and life alignment.',
    features: [
      'Comprehensive layout (7+ cards)',
      'Detailed exploration of 2 life areas',
      'Direct connection with Guardian Angels',
      'Google Meet or Zoom Video Call',
      'Interactive Q&A during reading',
      'Written action plan summary',
      'High-resolution photo of your cards'
    ],
    recommended: true,
  },
  {
    id: 'p3',
    name: 'Premium Guidance',
    duration: '90 Minutes',
    price: '$140',
    description: 'The ultimate cosmic reset. Combines high-level multi-deck card readings with direct chakra balancing.',
    features: [
      'Advanced multi-deck master layout',
      'Full deep-dive across all life areas',
      'Chakra alignment & energy clearing',
      'Guided angelic visualization session',
      'Priority next-day scheduling',
      'Full audio recording & action e-book',
      '1 week of post-session text support'
    ],
    recommended: false,
  }
];
