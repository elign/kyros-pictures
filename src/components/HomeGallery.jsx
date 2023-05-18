import React from "react";
import GallerySection from "./Gallery";
export default function Gallery() {
  return (
    <section className="text-white body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Steal Heart
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-20">
            "Preserving today’s precious moments for tomorrow’s cherished
            memories"
          </p>
          <GallerySection />
        </div>
      </div>
    </section>
  );
}
