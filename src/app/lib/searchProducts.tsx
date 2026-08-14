import type { Product } from "@/app/types/product";

export function searchProducts(
  products: Product[],
  search: string
) {
  const query = search.toLowerCase().trim();

  if (!query) {
    return products;
  }

  return products.filter((product) =>
    product.title.toLowerCase().includes(query) ||
    product.description.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query) ||
    product.type.toLowerCase().includes(query) ||
    product.colors.toLowerCase().includes(query) ||
    product.material.toLowerCase().includes(query)
  );
}