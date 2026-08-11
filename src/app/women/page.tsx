import React from 'react'

const Women = () => {
  return (
   <main className="p-10">
      <button className="rounded-2xl border border-black h-10  w-full ">WOMEN</button>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>FEATURED</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>New Arrivals</li>
          <li>Bestsellers</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>WOMEN'S SHOES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Shop All</li>
          <li>Trainer</li>
          <li>Sneakers</li>
          <li>Slip Ons</li>
          <li>Sandals</li>
          <li>Active</li>
          <li>All-Weather</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>POPULER PICKS</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Tree Runner NZ</li>
          <li>Canvas Cruiser</li>
        </ul>
      </div>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>APPAREL & ACCESSORIES</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>Socks</li>
          <li>Women's Apparel</li>
        </ul>
      </div>

    </main>
  )
}

export default Women
