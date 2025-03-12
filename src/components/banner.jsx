"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";

export function Banner({ items }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const showControls = items.length > 1;

  return (
    <div className="w-full overflow-hidden relative">
      <Carousel
        plugins={showControls ? [plugin.current] : []}
        className="w-full"
        onMouseEnter={showControls ? plugin.current.stop : undefined}
        onMouseLeave={showControls ? plugin.current.reset : undefined}
      >
        <CarouselContent>
          {items.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full md:aspect-[21/8] aspect-square">
                <Image
                  src={item.image}
                  alt={`Banner ${index + 1}`}
                  fill
                  sizes="100vw"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(40%)",
                  }}
                  priority={index === 0}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                  <h2 className="text-3xl md:text-7xl font-bold mb-4 text-center select-none text-white">
                    {item.heading} <br />Apartments
                  </h2>
                  <Link href={"/"} className="  hidden sm:block">
                    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-blue-400 rounded-md group">
                      <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
                        <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0"></span>
                      <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                        Discover Property
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {showControls && (
          <>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </>
        )}
      </Carousel>
    </div>
  );
}