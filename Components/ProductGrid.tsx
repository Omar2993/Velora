import ProductCard from "./ProductCard";

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

type ProductGridProps = {
  products: Product[];
};

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;