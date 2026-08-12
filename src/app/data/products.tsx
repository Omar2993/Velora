export type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  type: string;
  featured: boolean;
  bestSeller: boolean;
};

export const products: Product[] = [
  {
    id: "velora-classic",
    image: "/images/card1.jpg",
    title: "Velora Classic",
    description: "Premium everyday wear",
    price: 12,
    category: "men",
    type: "sneakers",
    featured: true,
    bestSeller: true,
  },

  {
    id: "velora-premium",
    image: "/images/card2.jpg",
    title: "Velora Premium",
    description: "Modern premium collection",
    price: 15,
    category: "women",
    type: "sneakers",
    featured: true,
    bestSeller: false,
  },

  {
    id: "velora-sport",
    image: "/images/card3.jpg",
    title: "Velora Sport",
    description: "Comfortable sport wear",
    price: 20,
    category: "men",
    type: "active",
    featured: false,
    bestSeller: true,
  },

  {
    id: "velora-essential",
    image: "/images/card1.jpg",
    title: "Velora Essential",
    description: "Simple and comfortable",
    price: 12,
    category: "women",
    type: "sandals",
    featured: false,
    bestSeller: false,
  },

  {
    id: "velora-urban",
    image: "/images/card2.jpg",
    title: "Velora Urban",
    description: "Modern urban style",
    price: 18,
    category: "men",
    type: "slip-ons",
    featured: false,
    bestSeller: true,
  },

  {
    id: "velora-daily",
    image: "/images/card3.jpg",
    title: "Velora Daily",
    description: "Perfect for everyday use",
    price: 14,
    category: "women",
    type: "sneakers",
    featured: true,
    bestSeller: false,
  },
];