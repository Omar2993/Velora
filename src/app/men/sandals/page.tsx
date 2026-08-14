import { products } from "@/app/data/products";
import ProductCard from "../../Components/ProductCard";

const sandalProducts = products.filter((product) => product.type === "sandals");

export default function SandalsPage() {
  return (
    <main className="w-full">
      <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sandalProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
