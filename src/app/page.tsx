import React from "react";
import Image from "next/image";
import Link from "next/link";
const newArrivalscards = [
  {
    title: "Welcome to Velora",
    image: "/images/card1.jpg",
    button1: "Shop Now",
    button2: "Learn More",
  },
  {
    title: "New Collection",
    image: "/images/card2.jpg",
    button1: "Explore",
    button2: "Details",
  },
  {
    title: "Summer Collection",
    image: "/images/card3.jpg",
    button1: "Shop Now",
    button2: "View More",
  },
];
const bestSellerscards = [
  {
    image: "/images/card1.jpg",
    title: "Velora Classic",
    price: "$100",
    color: "black",
  },
  {
    image: "/images/card2.jpg",
    title: "Velora Premium",
    price: "$100",
    color: "red",
  },
  {
    image: "/images/card3.jpg",
    title: "Velora Sport",
    price: "$100",
    color: "aqua",
  },
];
const collectionCards = [
  {
    image: "/images/card1.jpg",
    title: "New Collection",
  },
  {
    image: "/images/card2.jpg",
    title: "Men Collection",
  },
  {
    image: "/images/card3.jpg",
    title: "Women Collection",
  },
];
const infoCards = [
  {
    title: "Premium Quality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    title: "Modern Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
  {
    title: "Comfort First",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt.",
  },
];

const page = () => (
  <main className="w-full text-black">
    {/* Hero */}
    <section className="relative h-screen w-full border border-black">
      <Image
        className="absolute inset-0 object-cover"
        src="/images/hero.jpg"
        alt="Hero"
        fill
      />

      {/* Image er upor text */}
      <div className="absolute bottom-10 left-10 z-10">
        <h2>ALL NEW DASHER NZ COLLECTION</h2>

        <h1>Wildly Comfortable. Super Natural.</h1>

        <div className="mt-5 flex gap-5">
          <Link href="/men" className="border border-black px-5 py-2">
            SHOP MEN
          </Link>

          <Link href="/men" className="border border-black px-5 py-2">
            SHOP WOMEN
          </Link>
        </div>
      </div>
    </section>

    {/* Card section */}
    <section className="overflow-x-auto p-10">
      <div className="flex gap-5">
        {newArrivalscards.map((card, index) => (
          <div
            key={index}
            className="min-w-[70%] border border-black bg-cover rounded-2xl bg-center p-6"
            style={{
              backgroundImage: `url(${card.image})`,
            }}
          >
            <h1 className="mb-5">{card.title}</h1>

            <div className="flex gap-5">
              <button className="border border-black px-5 py-2 rounded-2xl">
                {card.button1}
              </button>

              <button className="border border-black px-5 py-2 rounded-2xl">
                {card.button2}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="overflow-x-auto p-6">
      <h2>BEST SELLER</h2>
      <div className="underline"></div>
      <div className="flex gap-5">
        {bestSellerscards.map((card, index) => (
          <div
            key={index}
            className="min-w-[80%] overflow-hidden rounded-2xl border border-black"
          >
            {/* Image */}
            <div className="relative h-[500px]">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="h-full w-full object-cover"
              />

              {/* Image er upor new div */}
              <div className="absolute bottom-5 left-5 right-5 border border-black p-5">
                <div className="flex items-center justify-between">
                  <h3>{card.title}</h3>

                  <p>{card.price}</p>
                </div>

                {/* Color circle */}
                <div className="mt-5 ">
                  <div
                    className="h-6 w-6 rounded-full border border-black"
                    style={{ backgroundColor: card.color }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="p-10">
      <div className="">
        {collectionCards.map((card, index) => (
          <div
            key={index}
            className="relative h-[500px] min-w-[80%] overflow-hidden rounded-2xl border border-black mt-2"
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2>{card.title}</h2>

              <div className="mt-5 flex gap-5">
                <button className="rounded-2xl border border-black px-5 py-2">
                  SHOP MEN
                </button>

                <button className="rounded-2xl border border-black px-5 py-2">
                  SHOP WOMEN
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <section className="p-10">
        <div className="">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="min-w-[80%] rounded-2xl border border-black p-10 mt-3"
            >
              <h3>{card.title}</h3>

              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  </main>
);

export default page;
