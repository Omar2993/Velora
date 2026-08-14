export type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  type: string;

  colors: string;

  size: string[];
  material: string;
  featured: boolean;
  bestSeller: boolean;
};