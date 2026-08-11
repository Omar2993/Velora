"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Full Screen Menu */}

      {menuOpen && (
        <div className="fixed inset-0 z-10 h-screen w-full border border-black bg-[#edeae4]">
          <div className="flex h-full flex-col items-center justify-center gap-5">
            <Link href="/newarrivals" onClick={() => setMenuOpen(false)}>
              NEW ARRIVALS
            </Link>

            <Link href="/shopall" onClick={() => setMenuOpen(false)}>
              SHOP ALL
            </Link>

            <Link href="/men" onClick={() => setMenuOpen(false)}>
              MEN
            </Link>

            <Link href="/women" onClick={() => setMenuOpen(false)}>
              WOMEN
            </Link>

            <Link href="/sale" onClick={() => setMenuOpen(false)}>
              SALE
            </Link>
          </div>
        </div>
      )}

      <nav className="w-full px-6 py-4 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left - Menu */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="border border-black px-5 py-2 rounded-2xl"
          >
            {menuOpen ? "CLOSE" : "MENU"}
          </button>

          {/* Center - Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-2xl font-bold tracking-tight">Velora</h1>
          </div>

          {/* Right - Search + Cart */}
          <div className="ml-auto flex items-center gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
              🔍
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5">
              🛒
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
