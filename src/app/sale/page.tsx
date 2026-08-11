"use client"
import React from "react";
import Link from "next/link";

const Sale = () => {
  return (
    <main className="p-10">
     <button
        onClick={() => window.dispatchEvent(new Event("open-menu"))}
        className="rounded-2xl border border-black h-10 w-full"
      >
        SALE
      </button>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>MEN</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/sale/mens-all-sales">All Sales</Link>
          </li>
          <li>
            <Link href="/sale/mens-sale-shoes">Sale Shoes</Link>
          </li>
          <li>
            <Link href="/sale/mens-sale-apparel">Sale Apparel</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>WOMEN</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/sale/womens-all-sales">All Sales</Link>
          </li>
          <li>
            <Link href="/sale/womens-sale-shoes">Sale Shoes</Link>
          </li>
          <li>
            <Link href="/sale/womens-sale-apparel">Sale Apparel</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Sale;
