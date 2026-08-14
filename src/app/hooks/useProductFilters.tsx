"use client";

import { useState } from "react";

export function useProductFilters() {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  return {
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
  };
}