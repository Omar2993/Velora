import Image from "next/image";

type Product = {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  category: string;
  type: string;
  featured: boolean;
  bestSeller: boolean;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-black">
      <div className="relative aspect-square w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium">
          {product.title}
        </h3>

        <p className="mt-1 text-xs text-gray-600">
          {product.description}
        </p>

        <p className="mt-2 text-sm font-semibold">
          ${product.price}
        </p>

        <button className="mt-3 w-full rounded-xl border border-black px-3 py-2 text-xs">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;