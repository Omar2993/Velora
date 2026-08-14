"use client";

import { useSearch } from "@/app/hooks/useSearch";

const SearchBar = () => {
  const {
    searchOpen,
    search,
    setSearch,
    closeSearch,
  } = useSearch();

  if (!searchOpen) return null;

  return (
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
  );
};

export default SearchBar;