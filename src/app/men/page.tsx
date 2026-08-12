"use client"
import React from "react";
import Link from "next/link";

const Men = () => {
  return (
    <main className="p-10">
      <button
        onClick={() => window.dispatchEvent(new Event("open-menu"))}
        className="rounded-2xl border border-black h-10 w-full"
      >
        MEN
      </button>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>FEATURED</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/men/new-arrivals">New Arrivals</Link>
          </li>

          <li>
            <Link href="/men/bests-sellers">Bestsellers</Link>
          </li>

          <li>
            <Link href="/men/leather-alternative">Leather Alternative</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>MEN'S SHOES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/men/shop-all">Shop All</Link>
          </li>
          <li>
            <Link href="/men/sneakers">Sneakers</Link>
          </li>
          <li>
            <Link href="/men/slip-ons">Slip Ons</Link>
          </li>
          <li>
            <Link href="/men/sandals">Sandals</Link>
          </li>
          <li>
            <Link href="/men/active">Active</Link>
          </li>
          <li>
            <Link href="/men/all-weather">All-Weather</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>CUSTOMER FAVORITES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/men/runner-nz">Runner NZ</Link>
          </li>
          <li>
            <Link href="/men/cruiser">Cruiser</Link>
          </li>
          <li>
            <Link href="/men/tree-runner-nz">Tree Runner NZ</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>APPAREL & ACCESSORIES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/men/socks">Socks</Link>
          </li>
          <li>
            <Link href="/men/mens-apparel">Men's Apparel</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Men;
