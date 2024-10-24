// Journal.tsx
import React, { useState, useEffect } from "react";

const images = [
  "/images/001.jpg",
  "/images/002.jpg",
  "/images/009.jpg",
  "/images/003.jpg",
  "/images/004.jpg",
  "/images/008.jpg",
  "/images/005.jpg",
  "/images/006.jpg",
  "/images/007.jpg",
  "/images/010.jpg",
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
        className="flex justify-end h-screen overflow-clip">
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          className={
            fade
              ? " h-screen w-auto fade-enter-active"
              : " h-screen w-auto fade-exit-active"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent "></div>
      </div>
    </section>
  );
});

export default Home;
