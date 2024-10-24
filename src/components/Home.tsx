// Journal.tsx
import React, { useState, useEffect } from "react";

const images = [
  "/images/001.jpg",
  "/images/002.jpg",
  "/images/007.jpg",
  "/images/003.jpg",
  "/images/004.jpg",
  "/images/008.jpg",
  "/images/005.jpg",
  "/images/010.jpg",
  "/images/009.jpg",
  "/images/006.jpg",
];

const Home = React.forwardRef<HTMLDivElement>((_, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const toggleImage = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Switch image
      setFade(true); // Start fade-in
    }, 1000); // Delay corresponds to the transition duration
  };

  useEffect(() => {
    const interval = setInterval(toggleImage, 5000); // Change image every 8 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section>
      <div
        ref={ref}
        id="home-section"
        className="relative h-screen overflow-clip flex justify-between ">
        {/* The image positioned on the right side */}
        <div className="min-w-[300px] bg-white z-20 hidden md:visible"></div>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={` object-cover h-screen transition-opacity duration-1000 ${
            fade ? "fade-enter-active" : "fade-exit-active"
          }`}
        />

        {/* The gradient overlay aligned with the image */}
      </div>
    </section>
  );
});

export default Home;
