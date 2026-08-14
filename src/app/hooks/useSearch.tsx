"use client";

import { useEffect, useState } from "react";

export function useSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const openSearch = () => {
      setSearchOpen(true);
    };

    window.addEventListener("open-search", openSearch);

    return () => {
      window.removeEventListener("open-search", openSearch);
    };
  }, []);

  const closeSearch = () => {
    setSearchOpen(false);
    setSearch("");
  };

  return {
    searchOpen,
    search,
    setSearch,
    closeSearch,
  };
}