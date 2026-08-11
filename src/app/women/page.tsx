"use client";

import React from "react";
import Link from "next/link";

const Women = () => {
  return (
    <main className="p-10">
      <button
        onClick={() => window.dispatchEvent(new Event("open-menu"))}
        className="rounded-2xl border border-black h-10 w-full"
      >
        WOMEN
      </button>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>FEATURED</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/women/new-arrivals">New Arrivals</Link>
          </li>

          <li>
            <Link href="/women/bests-sellers">Bestsellers</Link>
          </li>

          <li>
            <Link href="/women/canvas-cruiser">Canvas Cruiser</Link>
          </li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>WOMEN'S SHOES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/women/shop-all">Shop All</Link>
          </li>

          <li>
            <Link href="/women/sneakers">Sneakers</Link>
          </li>

          <li>
            <Link href="/women/slip-ons">Slip Ons</Link>
          </li>

          <li>
            <Link href="/women/sandals">Sandals</Link>
          </li>

          <li>
            <Link href="/women/active">Active</Link>
          </li>

          <li>
            <Link href="/women/all-weather">All-Weather</Link>
          </li>

          <li>
            <Link href="/women/trainers">Trainers</Link>
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
            <Link href="/women/runner-nz">Runner NZ</Link>
          </li>

          <li>
            <Link href="/women/canvas-cruiser">Canvas Cruiser</Link>
          </li>

          <li>
            <Link href="/women/tree-runner-nz">Tree Runner NZ</Link>
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
            <Link href="/women/socks">Socks</Link>
          </li>

          <li>
            <Link href="/women/womens-apparel">Women's Apparel</Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Women;