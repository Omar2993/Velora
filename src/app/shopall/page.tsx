import { products } from "@/app/data/products";
import ProductCard from "../../../Components/ProductCard";

const ShopAll = () => {
  return (
    <>
      <div className="mx-3 flex h-10 items-center justify-center rounded-2xl border border-black">
        <h2>FILTER AND SORT</h2>
      </div>

      <section className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ShopAll;
