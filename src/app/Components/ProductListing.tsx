"use client";

import { useEffect, useState } from "react";
import { products } from "@/app/data/products";
import FilterPanel from "@/app/Components/FilterPanel";
import SearchBar from "@/app/Components/SearchBar";
import ShopFilterButton from "@/app/Components/ShopFilterButton";
import ProductGrid from "@/app/Components/ProductGrid";

import { searchProducts } from "@/app/lib/searchProducts";
import { filterProducts } from "@/app/lib/filterProducts";

import { useProductFilters } from "@/app/hooks/useProductFilters";
import { useSearch } from "@/app/hooks/useSearch";

const ProductListing = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // ================= SEARCH =================

  const { searchOpen, search } = useSearch();

  // ================= PRODUCT FILTERS =================

  const {
    selectedColor,
    setSelectedColor,

    selectedPrice,
    setSelectedPrice,

    selectedType,
    setSelectedType,

    selectedMaterial,
    setSelectedMaterial,

    selectedSize,
    setSelectedSize,
  } = useProductFilters();

  // ================= BODY SCROLL =================

  useEffect(() => {
    document.body.style.overflow = filterOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [filterOpen]);

  // ================= FILTER =================

  const filteredProducts = filterProducts(products, {
    selectedColor,
    selectedPrice,
    selectedType,
    selectedMaterial,
    selectedSize,
  });

  // ================= SEARCH =================

  const searchedProducts = searchProducts(filteredProducts, search);

  return (
    <main>
      {/* SEARCH BAR */}

      <SearchBar />

      {/* FILTER BUTTON */}

      {!filterOpen && !searchOpen && (
        <ShopFilterButton onClick={() => setFilterOpen(true)} />
      )}

      {/* FILTER PANEL */}

      {filterOpen && (
        <FilterPanel
          productCount={searchedProducts.length}
          selectedColor={selectedColor}
          onColorChange={setSelectedColor}
          selectedPrice={selectedPrice}
          onPriceChange={setSelectedPrice}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedMaterial={selectedMaterial}
          onMaterialChange={setSelectedMaterial}
          selectedSize={selectedSize}
          onSizeChange={setSelectedSize}
          onClose={() => setFilterOpen(false)}
          onApply={() => setFilterOpen(false)}
        />
      )}

      {/* PRODUCTS */}

      <section className="p-4">
        <ProductGrid products={searchedProducts} />
      </section>
    </main>
  );
};

export default ProductListing;