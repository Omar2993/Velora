import { products } from "@/app/data/products";
import ProductCard from "@/app/Components/ProductCard";

export default function NewArrivalsPage() {
  return (
    <main className="w-full p-4">
      <div className="grid w-full grid-cols-2 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
