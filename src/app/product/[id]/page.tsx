import Image from "next/image";
import { products } from "@/app/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const colorMap: Record<string, string> = {
  Black: "bg-black",
  Grey: "bg-gray-500",
  White: "bg-white",
  Beige: "bg-yellow-100",
  Brown: "bg-amber-700",
  Green: "bg-green-600",
  Blue: "bg-blue-500",
  Red: "bg-red-500",
  Yellow: "bg-yellow-400",
  Orange: "bg-orange-500",
  Purple: "bg-purple-500",
  Pink: "bg-pink-400",
};

const ProductPage = async ({ params }: ProductPageProps) => {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-gray-500">Product not found</p>
      </main>
    );
  }

  const colors = product.colors.split(" ");

  return (
    <main className="min-h-screen px-3 pb-10 pt-4 md:px-6">

      {/* BREADCRUMB */}
      <div className="mb-4 text-[10px] text-gray-500">
        Home / {product.category}
      </div>

      {/* PRODUCT */}
      <div className="mx-auto max-w-6xl">

        {/* MOBILE / TOP INFO */}
        <div className="mb-4">

          {/* PRODUCT NAME */}
          <h1 className="text-xl font-medium md:text-3xl">
            {product.title}
          </h1>

          {/* PRICE */}
          <div className="mt-2 flex items-center gap-2">
            <p className="text-base font-semibold md:text-lg">
              ${product.price}
            </p>
          </div>

          {/* NEW */}
          <span className="mt-3 inline-flex rounded-full border border-gray-300 px-2 py-1 text-[9px] font-medium">
            NEW
          </span>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-square w-full overflow-hidden rounded-xl  md:mx-auto md:max-w-2xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* PRODUCT DETAILS */}
        <div className="mt-5 md:mx-auto md:max-w-2xl">

          {/* COLOR */}
          <div className="border-b border-gray-200 pb-5">
            <div className="flex items-center gap-2 text-[10px]">
              <span className="font-medium">COLOR</span>

              <span className="text-gray-500">
                {product.colors}
              </span>
            </div>

            {/* COLOR CIRCLES */}
            <div className="mt-3 flex gap-2">
              {colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  aria-label={color}
                  className={`h-7 w-7 rounded-full border border-gray-300 p-[2px]`}
                >
                  <span
                    className={`block h-full w-full rounded-full ${
                      colorMap[color]
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* SIZE */}
          <div className="mt-5">

            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium">
                SELECT SIZE
              </p>

              <button className="text-[10px] underline">
                Size Guide
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  type="button"
                  className="rounded-lg border border-gray-300 bg-white py-3 text-xs font-medium transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-6">
            <p className="text-xs leading-5 text-gray-600">
              {product.description}
            </p>
          </div>

          {/* SELECT SIZE BUTTON */}
          <button
            type="button"
            className="mt-6 w-full rounded-full bg-gray-200 py-3 text-[10px] font-medium text-gray-500 transition hover:bg-black hover:text-white"
          >
            SELECT A SIZE
          </button>

          {/* SHIPPING */}
          <p className="mt-3 text-center text-[10px] text-gray-500">
            Free Shipping on Orders over $100
          </p>

        </div>
      </div>
    </main>
  );
};

export default ProductPage;