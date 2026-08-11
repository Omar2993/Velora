import React from 'react'

const Sale = () => {
  return (
<main className="p-10">
   <button className="rounded-2xl border border-black h-10  w-full ">SALE</button>
   

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>MEN</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
          <li>All Sales</li>
          <li>Sale Shoes</li>
          <li>Sale Apparel</li>
        </ul>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>WOMEN</h2>
          <div>A</div>
        </div>

        <ul className="flex flex-col gap-2">
           <li>All Sales</li>
          <li>Sale Shoes</li>
          <li>Sale Apparel</li>
        </ul>
      </div>
</main>  )
}

export default Sale
