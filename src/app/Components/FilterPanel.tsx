"use client";

type FilterPanelProps = {
  productCount: number;

  selectedColor: string;
  onColorChange: (color: string) => void;

  selectedPrice: string;
  onPriceChange: (price: string) => void;

  selectedType: string;
  onTypeChange: (type: string) => void;

  selectedMaterial: string;
  onMaterialChange: (material: string) => void;

  selectedSize: string;
  onSizeChange: (size: string) => void;

  onClose: () => void;
  onApply: () => void;
};
const FilterPanel = ({
  productCount,

  selectedColor,
  onColorChange,

  selectedPrice,
  onPriceChange,

  selectedType,
  onTypeChange,

  selectedMaterial,
  onMaterialChange,

  selectedSize,
  onSizeChange,

  onClose,
    onApply,
}: FilterPanelProps) => {
  return (
    <section className="fixed inset-0 z-[9999] h-screen w-screen overflow-y-auto bg-white">
      {/* HEADER */}

      <div className="relative flex h-14 items-center border-b border-black px-4">
        <h2 className="text-sm font-semibold">
          COLLAPSE FILTERS
        </h2>

        <span className="ml-2 text-sm text-gray-500">
          ({productCount} products)
        </span>

        <button
          onClick={onClose}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-3xl font-light leading-none"
          aria-label="Close filters"
        >
          ×
        </button>
      </div>

      {/* CONTENT */}

      <div className="space-y-10 px-4 py-6">

        {/* ================= SIZE ================= */}

        <div>
          <h3 className="mb-4 text-base font-semibold">
            SIZE
          </h3>

          <p className="mb-4 max-w-sm text-sm leading-5 text-gray-600">
            Most of our shoes only come in full sizes.
            If you're a half size, select your nearest
            whole size too.
          </p>

          <div className="grid grid-cols-4 gap-1">
            {[
              "8",
              "8.5",
              "9",
              "9.5",
              "10",
              "10.5",
              "11",
              "11.5",
              "12",
              "12.5",
              "13",
              "13.5",
              "14",
              "15",
              "W4.5 M3",
              "W5.5 M4",
              "W6.5 M5",
              "W7.5 M6",
              "W8.5 M7",
              "W9.5 M8",
              "W10.5 M9",
              "W11.5 M10",
              "W12.5 M11",
              "W13.5 M12",
              "W14.5 M13",
              "W15.5 M14",
            ].map((size) => (
              <button
                key={size}
                onClick={() =>
                  onSizeChange(
                    selectedSize === size
                      ? ""
                      : size
                  )
                }
                className={`min-h-12 border border-gray-300 px-1 text-xs ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* ================= COLOR ================= */}

        <div>
          <h3 className="mb-4 text-base font-semibold">
            COLOR
          </h3>

          <div className="grid grid-cols-2 gap-y-5">
            {[
              ["Black", "bg-black"],
              ["Grey", "bg-gray-500"],
              ["White", "bg-white"],
              ["Beige", "bg-yellow-100"],
              ["Brown", "bg-amber-700"],
              ["Green", "bg-green-600"],
              ["Blue", "bg-blue-500"],
            ].map(([name, color]) => (
              <button
                key={name}
                onClick={() =>
                  onColorChange(
                    selectedColor === name
                      ? ""
                      : name
                  )
                }
                className="flex items-center gap-3 text-left text-sm"
              >
                <span
                  className={`h-7 w-7 rounded-full border border-gray-300 ${color} ${
                    selectedColor === name
                      ? "ring-2 ring-black ring-offset-2"
                      : ""
                  }`}
                />

                {name}
              </button>
            ))}
          </div>
        </div>

        {/* ================= PRICE ================= */}

        <div>
          <h3 className="mb-4 text-base font-semibold">
            PRICE
          </h3>

          <div className="space-y-5">
            {[
              ["Under $75", "under75"],
              ["$76 - $100", "76-100"],
              ["$101 - $125", "101-125"],
              ["$126 - $150", "126-150"],
              ["Over $150", "over150"],
            ].map(([label, value]) => (
              <label
                key={value}
                className="flex items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={
                    selectedPrice === value
                  }
                  onChange={() =>
                    onPriceChange(
                      selectedPrice === value
                        ? ""
                        : value
                    )
                  }
                  className="h-4 w-4"
                />

                {label}
              </label>
            ))}
          </div>
        </div>

        {/* ================= PRODUCT TYPE ================= */}

        <div>
          <h3 className="mb-4 text-base font-semibold">
            PRODUCT TYPE
          </h3>

          <div className="space-y-5">
            {[
              ["Everyday Sneakers", "sneakers"],
              ["Active", "active"],
              ["Sandals", "sandals"],
              ["Slip Ons", "slip-ons"],
            ].map(([label, value]) => (
              <label
                key={value}
                className="flex items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={
                    selectedType === value
                  }
                  onChange={() =>
                    onTypeChange(
                      selectedType === value
                        ? ""
                        : value
                    )
                  }
                  className="h-4 w-4"
                />

                {label}
              </label>
            ))}
          </div>
        </div>

        {/* ================= MATERIAL ================= */}

        <div>
          <h3 className="mb-4 text-base font-semibold">
            MATERIAL
          </h3>

          <div className="space-y-5">
            {[
              "Alternative-Leather",
              "Canvas",
              "Corduroy",
              "Cotton",
              "Sugar",
              "Tree",
              "Wool",
            ].map((material) => (
              <label
                key={material}
                className="flex items-center gap-3 text-sm"
              >
                <input
                  type="checkbox"
                  checked={
                    selectedMaterial === material
                  }
                  onChange={() =>
                    onMaterialChange(
                      selectedMaterial === material
                        ? ""
                        : material
                    )
                  }
                  className="h-4 w-4"
                />

                {material}
              </label>
            ))}
          </div>
        </div>

      </div>
       {/* APPLY */}
  <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white p-4">
    <button
      onClick={onApply}
      className="w-full rounded-full bg-black py-4 text-sm font-semibold text-white"
    >
      APPLY
    </button>
    </div>
    </section>
  );
};

export default FilterPanel;