import type { Product } from "@/app/types/product";
import Image from "next/image";
type AddtocartPanelProps = {
  product: Product;
  onClose: () => void;
};

const AddtocartPanel = ({ product, onClose }: AddtocartPanelProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 p-4">
      <div className="relative w-full max-w-3xl rounded-2xl border border-black bg-white p-6">
        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl font-light"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-xl font-semibold">Select Size</h2>

        {/* PRODUCT INFO */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          {/* LEFT */}
          <div>
            <h3 className="text-lg font-medium">{product.title}</h3>

            <p className="mt-2 text-sm text-gray-600">{product.colors}</p>

            {/* SIZE LIST */}
            <div className="mt-6 grid grid-cols-4 gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  className="rounded-lg border Sborder-gray-300 bg-white py-3 text-sm font-medium transition-all duration-200 hover:border-black hover:bg-black hover:text-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="aspect-square w-full overflow-hidden  bg-white">
             <div className="relative aspect-square w-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddtocartPanel;
