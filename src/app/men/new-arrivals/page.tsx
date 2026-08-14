import ProductGrid from "../../Components/ProductGrid";
import { products } from "../../data/products";

const NewArrivals = () => {
  return (
    <ProductGrid products={products.filter((product) => product.featured)} />
  );
};

export default NewArrivals;
