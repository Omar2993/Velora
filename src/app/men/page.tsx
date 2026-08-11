import React from "react";
import Link from "next/link";

const Men = () => {
  return (
    <main className="p-10">
      <button className="rounded-2xl border border-black h-10  w-full ">
        MEN
      </button>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>FEATURED</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/new-arrivals">New Arrivals</Link>
          </li>

          <li>
            <Link href="/bestsellers">Bestsellers</Link>
          </li>

          <li>
            <Link href="/leather-alternative">Leather Alternative</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>MEN'S SHOES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Shop All</li>
          <li>Sneakers</li>
          <li>Slip Ons</li>
          <li>Sandals</li>
          <li>Active</li>
          <li>All-Weather</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>CUSTOMER FAVORITES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Runner NZ</li>
          <li>Cruiser</li>
          <li>Tree Runner NZ</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>APPAREL & ACCESSORIES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Socks</li>
          <li>Men's Apparel</li>
        </ul>
      </div>
    </main>
  );
};

export default Men;
