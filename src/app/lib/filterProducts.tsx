import type { Product } from "@/app/types/product";
import type { FilterOptions } from "@/app/types/filter";

export function filterProducts(
  products: Product[],
  filters: FilterOptions
) {
  return products.filter((product) => {
    // COLOR
    if (
      filters.selectedColor &&
      product.colors !== filters.selectedColor
    ) {
      return false;
    }

    // PRICE
    if (
      filters.selectedPrice === "under75" &&
      product.price >= 75
    ) {
      return false;
    }

    if (
      filters.selectedPrice === "76-100" &&
      (product.price < 76 || product.price > 100)
    ) {
      return false;
    }

    if (
      filters.selectedPrice === "101-125" &&
      (product.price < 101 || product.price > 125)
    ) {
      return false;
    }

    if (
      filters.selectedPrice === "126-150" &&
      (product.price < 126 || product.price > 150)
    ) {
      return false;
    }

    if (
      filters.selectedPrice === "over150" &&
      product.price <= 150
    ) {
      return false;
    }

    // PRODUCT TYPE
    if (
      filters.selectedType &&
      product.type !== filters.selectedType
    ) {
      return false;
    }

    // MATERIAL
    if (
      filters.selectedMaterial &&
      product.material !== filters.selectedMaterial
    ) {
      return false;
    }

    // SIZE
    if (
      filters.selectedSize &&
      !product.size.includes(filters.selectedSize)
    ) {
      return false;
    }

    return true;
  });
}