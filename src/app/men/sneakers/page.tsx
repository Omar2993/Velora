import ProductGrid from "../../Components/ProductGrid";
import { products } from "../../data/products";

const Sneakers = () => {
  const sneakerProducts = products.filter(
    (product) => product.category === "men" && product.type === "sneakers",
  );

  return <ProductGrid products={sneakerProducts} />;
};

export default Sneakers;
