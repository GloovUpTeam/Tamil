
import { Product, Category, Testimonial } from '../types';

export const CATEGORIES: Category[] = [
  { id: '1', title: 'Men', image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=800', slug: 'men' },
  { id: '2', title: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=800', slug: 'women' },
  { id: '3', title: 'Kids', image: 'https://images.unsplash.com/photo-1519748771451-a94c59ad3a75?auto=format&fit=crop&q=80&w=800', slug: 'kids' },
  { id: '4', title: 'Daily Wear', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800', slug: 'daily' },
  { id: '5', title: 'Custom Fashion', image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800', slug: 'custom' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Midnight Velvet Blazer',
    price: 299,
    oldPrice: 399,
    description: 'A premium velvet blazer for the ultimate luxury look. Designed with a custom fit for an elegant silhouette.',
    category: 'Men',
    images: [
      'https://images.unsplash.com/photo-1594932224828-b4b059b6ffc0?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Deep Black', hex: '#000000' }, { name: 'Royal Blue', hex: '#002366' }],
    isTrending: true,
    rating: 4.8,
    reviewsCount: 124,
    tags: ['Luxury', 'Evening']
  },
  {
    id: 'p2',
    name: 'Silk Evening Gown',
    price: 450,
    description: 'Breathtaking silk gown that flows like water. Perfect for high-end events and galas.',
    category: 'Women',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1518722394534-4034293f772e?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [{ name: 'Magenta', hex: '#EC4899' }, { name: 'Gold', hex: '#FFD700' }],
    isTrending: true,
    rating: 5.0,
    reviewsCount: 89,
    tags: ['Premium', 'Event']
  },
  {
    id: 'p3',
    name: 'Urban Tech Hoodie',
    price: 120,
    oldPrice: 150,
    description: 'Style meets comfort in this urban tech hoodie featuring breathable fabric and sleek teal accents.',
    category: 'Daily',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['M', 'L', 'XL'],
    colors: [{ name: 'Teal', hex: '#2DD4BF' }, { name: 'Grey', hex: '#4B5563' }],
    isTrending: false,
    rating: 4.5,
    reviewsCount: 210,
    tags: ['Urban', 'Daily']
  },
  {
    id: 'p4',
    name: 'Luxe Kids Tuxedo',
    price: 180,
    description: 'Because style starts young. A miniature tuxedo crafted with the same quality as our adult lines.',
    category: 'Kids',
    images: [
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1503919919749-646ddc46af11?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['2T', '4T', '6T'],
    colors: [{ name: 'Classic Black', hex: '#000000' }],
    isTrending: false,
    rating: 4.9,
    reviewsCount: 45,
    tags: ['Formal', 'Kids']
  },
  {
    id: 'p5',
    name: 'Custom Embroidered Jacket',
    price: 350,
    description: 'Personalize your style with our custom embroidery service. Select your pattern and thread colors.',
    category: 'Custom',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [{ name: 'Leather Black', hex: '#111111' }],
    isTrending: true,
    rating: 4.7,
    reviewsCount: 67,
    tags: ['Custom', 'Unique']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?u=james', text: 'CRT Trendz has completely redefined my wardrobe. The luxury feel is unmatched.', stars: 5 },
  { id: '2', name: 'Sophia Chen', avatar: 'https://i.pravatar.cc/150?u=sophia', text: 'The custom embroidery service is incredible. Truly one of a kind pieces.', stars: 5 },
  { id: '3', name: 'Marcus King', avatar: 'https://i.pravatar.cc/150?u=marcus', text: 'Fast delivery and the fit is perfect. Highly recommended for premium fashion.', stars: 4 },
];
