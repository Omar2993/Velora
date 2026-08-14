import ProductGrid from "../../Components/ProductGrid";
import { products } from "../../data/products";

const Active = () => {
  const activeProducts = products.filter(
    (product) => product.category === "men" && product.type === "active",
  );

  return <ProductGrid products={activeProducts} />;
};

export default Active;
