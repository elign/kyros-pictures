import React, { useState, useEffect } from "react";

const images = [
  {
    url: "https://via.placeholder.com/1000x600/FF5733/000000?text=Image+1",
    alt: "Image 1"
  },
  {
    url: "https://via.placeholder.com/1000x600/C70039/000000?text=Image+2",
    alt: "Image 2"
  },
  {
    url: "https://via.placeholder.com/1000x600/900C3F/000000?text=Image+3",
    alt: "Image 3"
  },
  {
    url: "https://via.placeholder.com/1000x600/581845/000000?text=Image+4",
    alt: "Image 4"
  }
];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex].url}
        alt={images[currentImageIndex].alt}
        className="w-full object-cover object-center"
      />
    </div>
  );
};

export default ImageCarousel;
