import ProductCard from "../../../Components/ProductCard";

const products = [
  {
    image: "/images/card1.jpg",
    title: "Velora Classic",
    description: "Premium everyday wear",
    price: "$12",
  },
  {
    image: "/images/card2.jpg",
    title: "Velora Premium",
    description: "Modern premium collection",
    price: "$12",
  },
  {
    image: "/images/card3.jpg",
    title: "Velora Sport",
    description: "Comfortable sport wear",
    price: "$12",
  },
  {
    image: "/images/card1.jpg",
    title: "Velora Essential",
    description: "Simple and comfortable",
    price: "$12",
  },
  {
    image: "/images/card2.jpg",
    title: "Velora Urban",
    description: "Modern urban style",
    price: "$12",
  },
  {
    image: "/images/card3.jpg",
    title: "Velora Daily",
    description: "Perfect for everyday use",
    price: "$12",
  },
];

const NewArrivals = () => {
  return (
    <>
      <div className="mx-3 flex h-10 items-center justify-center rounded-2xl border border-black">
        <h2>FILTER AND SORT</h2>
      </div>

      <section className="p-4">
        <div className="grid grid-cols-2 gap-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default NewArrivals;