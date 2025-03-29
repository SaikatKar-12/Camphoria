"use client";
import { IoIosStar } from "react-icons/io";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-zinc-200 bg-gradient-to-b from-gray-100 to-gray-200 px-6 py-6 shadow-lg md:w-[450px] dark:border-zinc-700 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-900"
            key={idx}
          >
            <blockquote>
              {/* Reviewer Section */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border border-gray-300"
                />
                <div>
                  {/* Reviewer Name */}
                  <span className="text-md font-semibold text-neutral-800 dark:text-gray-100">
                    {item.name}
                  </span>
                  {/* Reviewer Rating */}
                  <div className="flex items-center text-yellow-500">
                    {[...Array(item.rating)].map((_, i) => (
                      <IoIosStar key={i} className="text-lg" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="relative z-20 mt-4 text-sm leading-[1.6] text-neutral-800 dark:text-gray-100">
                {item.quote}
              </p>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
