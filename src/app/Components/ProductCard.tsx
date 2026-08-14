"use client"
import Image from "next/image";
import type { Product } from "@/app/types/product";
import { useState } from "react";
import AddtocartPanel from "./AddtocartPanel";
import Link from "next/link";
type ProductCardProps = {
  product: Product;
};

const colorMap: Record<string, string> = {
  Black: "bg-black",
  Grey: "bg-gray-500",
  White: "bg-white",
  Beige: "bg-yellow-100",
  Brown: "bg-amber-700",
  Green: "bg-green-600",
  Blue: "bg-blue-500",
  Red: "bg-red-500",
  Yellow: "bg-yellow-400",
  Orange: "bg-orange-500",
  Purple: "bg-purple-500",
  Pink: "bg-pink-400",
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [showCart, setShowCart] = useState(false);
  const colors = product.colors.split(" ");

  return (
    <div className="w-full overflow-hidden rounded-xl border border-black p-3">
        <Link href={`/product/${product.id}`}>
      <div className="relative aspect-square w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

        <h3 className="text-sm font-medium">{product.title}</h3>

        <p className="mt-1 text-xs text-gray-600">{product.description}</p>

        <p className="mt-2 text-sm font-semibold">${product.price}</p>

        {/* COLORS */}
        <div className="mt-2 flex gap-2">
          {colors.map((color) => (
            <span
              key={color}
              className={`inline-block h-5 w-5 rounded-full border border-gray-300 ${
                colorMap[color]
              }`}
            />
          ))}
        </div>
  </Link>
        <button
          onClick={() => setShowCart(true)}
          className="mt-3 w-full rounded-xl border border-black px-3 py-2 text-xs"
        >
          Add to Cart
        </button>
        {showCart && (
          <AddtocartPanel
            product={product}
            onClose={() => setShowCart(false)}
          />
        )}
      </div>
  );
};

export default ProductCard;
