
export interface ProductBundle {
  id: string;
  name: string;
  units: number;
  price: number;
  originalPrice: number;
  installments: number;
  installmentValue: number;
  discount: number;
  popular?: boolean;
  shippingFree: boolean;
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Ingredient {
  name: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
