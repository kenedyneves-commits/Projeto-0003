
import { ProductBundle, Benefit, Ingredient, FAQItem } from './types';

export const BUNDLES: ProductBundle[] = [
  {
    id: '1-bottle',
    name: 'Starter Kit (1 Bottle)',
    units: 1,
    price: 39.90,
    originalPrice: 49.90,
    installments: 1,
    installmentValue: 39.90,
    discount: 20,
    shippingFree: false
  },
  {
    id: '3-bottles',
    name: 'Bestseller (3 Bottles)',
    units: 3,
    price: 97.00,
    originalPrice: 149.70,
    installments: 1,
    installmentValue: 32.33,
    discount: 35,
    popular: true,
    shippingFree: true
  },
  {
    id: '6-bottles',
    name: 'Maximum Value (6 Bottles)',
    units: 6,
    price: 157.00,
    originalPrice: 299.40,
    installments: 1,
    installmentValue: 26.16,
    discount: 48,
    shippingFree: true
  }
];

export const BENEFITS: Benefit[] = [
  {
    title: 'Vital Strength',
    description: 'Nourishes the hair shaft from the inside out to minimize daily breakage.',
    icon: '💎'
  },
  {
    title: 'Nutrient Rich',
    description: 'A precise blend of 17+ vitamins specifically chosen for follicle support.',
    icon: '🥗'
  },
  {
    title: 'Resilient Nails',
    description: 'Supports the natural production of keratin for less brittle, healthier nails.',
    icon: '💅'
  },
  {
    title: 'Natural Radiance',
    description: 'Enhances your hair\'s natural luminosity and healthy appearance.',
    icon: '✨'
  }
];

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Ultra-Pure Biotin',
    description: 'High-concentration B7 to support the structural integrity of every strand.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Active Zinc',
    description: 'Crucial for tissue growth and repair, helping maintain healthy oil glands.',
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=400&h=400'
  },
  {
    name: 'Vitamin Complex',
    description: 'A synergistic mix of A, C, D, and E to fight oxidative stress on the scalp.',
    image: 'https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format&fit=crop&q=80&w=400&h=400'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: 'How do I take Vital Hair?',
    answer: 'Simply take one capsule daily with water, preferably during your first meal of the day.'
  },
  {
    question: 'How long should I take it?',
    answer: 'While consistency is key, most users notice significant improvements in hair texture and nail strength within the first 30 to 60 days.'
  },
  {
    question: 'Is it safe to use with other supplements?',
    answer: 'Yes, Vital Hair is a vitamin-based supplement. However, we always recommend consulting with your healthcare provider if you have specific concerns.'
  },
  {
    question: 'What is your refund policy?',
    answer: 'We offer a 30-day satisfaction guarantee. If you are not happy with your results, contact our support team for a hassle-free return.'
  }
];
