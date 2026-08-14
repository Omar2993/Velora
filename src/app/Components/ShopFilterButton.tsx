"use client";

type ShopFilterButtonProps = {
  onClick: () => void;
};

const ShopFilterButton = ({ onClick }: ShopFilterButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="mx-3 flex h-10 w-[calc(100%-24px)] items-center justify-center rounded-2xl border border-black"
    >
      FILTER AND SORT
    </button>
  );
};

export default ShopFilterButton;