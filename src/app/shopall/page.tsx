"use client";

import { useEffect, useState } from "react";
import { products } from "@/app/data/products";
import ProductCard from "@/app/Components/ProductCard";
import FilterPanel from "@/app/Components/FilterPanel";

import { filterProducts } from "@/app/lib/filterProducts";
import { useProductFilters } from "@/app/hooks/useProductFilters";
import { useSearch } from "@/app/hooks/useSearch";

const ShopAll = () => {
  const [filterOpen, setFilterOpen] = useState(false);

  // ================= SEARCH =================

  const {
    searchOpen,
    search,
    setSearch,
    closeSearch,
  } = useSearch();

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

  // ================= FILTER PRODUCTS =================

  const filteredProducts = filterProducts(products, {
    selectedColor,
    selectedPrice,
    selectedType,
    selectedMaterial,
    selectedSize,
  });

  // ================= SEARCH PRODUCTS =================

  const searchedProducts = filteredProducts.filter((product) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.type.toLowerCase().includes(query) ||
      product.color.toLowerCase().includes(query) ||
      product.material.toLowerCase().includes(query)
    );
  });

  return (
    <main>
      {/* ================= SEARCH BAR ================= */}

      {searchOpen && (
        <div className="mx-3 flex items-center gap-3 border-b border-black py-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            autoFocus
            className="flex-1 bg-transparent text-sm outline-none"
          />

          <button
            onClick={closeSearch}
            className="text-2xl font-light"
            aria-label="Close search"
          >
            ×
          </button>
        </div>
      )}

      {/* ================= FILTER BUTTON ================= */}

      {!filterOpen && !searchOpen && (
        <button
          onClick={() => setFilterOpen(true)}
          className="mx-3 flex h-10 w-[calc(100%-24px)] items-center justify-center rounded-2xl border border-black"
        >
          FILTER AND SORT
        </button>
      )}

      {/* ================= FILTER PANEL ================= */}

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

      {/* ================= PRODUCTS ================= */}

      <section className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {searchedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ShopAll;