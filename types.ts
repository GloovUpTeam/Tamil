
export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  category: 'Men' | 'Women' | 'Kids' | 'Daily' | 'Custom';
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  isTrending: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Category {
  id: string;
  title: string;
  image: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  text: string;
  stars: number;
}
