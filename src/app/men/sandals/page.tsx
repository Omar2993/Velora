import ProductCard from "../../../../Components/ProductCard";

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
      {/* Big Card */}
      <section className="p-4">
        <div className="overflow-hidden rounded-2xl border border-black">
          <div className="relative h-[300px] w-full">
            <img
              src="/images/card1.jpg"
              alt="New Arrivals"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="p-5">
            <h2 className="text-2xl font-semibold">
              NEW ARRIVALS
            </h2>

            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing
              elit sed do eiusmod tempor incididunt.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + New Button */}
      <div className="mx-3 flex gap-2">
        <div className="flex h-10 flex-1 items-center justify-center rounded-2xl border border-black">
          <h2>FILTER AND SORT</h2>
        </div>

        <button className="h-10 flex-1 rounded-2xl border border-black">
          MEN / WOMEN
        </button>
      </div>

      {/* Products — same as before */}
      <section className="p-4">
  <div className="flex flex-wrap gap-3">
    {products.map((product, index) => (
      <div key={index} className="w-[calc(50%-6px)]">
        <ProductCard product={product} />
      </div>
    ))}
  </div>
</section>
    </>
  );
};

export default NewArrivals;