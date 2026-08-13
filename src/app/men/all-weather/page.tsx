import { products } from "@/app/data/products";
import ProductCard from "../../../../Components/ProductCard";

const allWeatherProducts = products.filter(
  (product) => product.category === "men",
);

export default function AllWeatherPage() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allWeatherProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
