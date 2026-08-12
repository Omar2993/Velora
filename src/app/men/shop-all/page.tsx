import ProductGrid from "../../../../Components/ProductGrid";
import { products } from "../../data/products";

const MenShopAll = () => {
  const menProducts = products.filter(
    (product) => product.category === "men"
  );

  return <ProductGrid products={menProducts} />;
};

export default MenShopAll;