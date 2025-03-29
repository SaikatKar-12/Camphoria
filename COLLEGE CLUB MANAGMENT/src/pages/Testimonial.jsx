"use client";

import React from "react";
import { InfiniteMovingCards } from "../Components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] min-h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      {/* Testimonial Section Statement */}
      <div className="text-center mb-6 px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          What Our Customers Say!
        </h2>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          "We take pride in delivering exceptional experiences. Don't just take
          our word for it—see what our valued customers have to say about their
          journey with us!"
        </p>
      </div>

      {/* Infinite Moving Cards */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Amazing experience! The team was super helpful and I couldn't have asked for a better service.",
    name: "John Doe",
    rating: 5,
  },
  {
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    quote:
      "The customer support was excellent. I had an issue, and they resolved it within minutes!",
    name: "Jane Smith",
    rating: 4,
  },
  {
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    quote: "A seamless experience from start to finish. Highly recommended!",
    name: "Michael Brown",
    rating: 5,
  },
  {
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    quote:
      "I will definitely be coming back! The service exceeded my expectations.",
    name: "Emily White",
    rating: 5,
  },
  {
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Everything was perfect, from the design to the functionality. Loved it!",
    name: "Chris Johnson",
    rating: 4,
  },
];
