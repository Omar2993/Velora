import type { Product } from "@/app/types/product";

export function getProducts(
  products: Product[],
  category?: string
) {
  if (!category) {
    return products;
  }

  return products.filter(
    (product) => product.category === category
  );
}