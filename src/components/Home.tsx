import React, { useState, useEffect } from "react";
import homeImages from "../../data/homeImages.json";

const Home = React.forwardRef<
  HTMLDivElement,
  { setTitleColor: (color: string) => void }
>(({ setTitleColor }, ref) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const toggleImage = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      const newIndex = (currentImageIndex + 1) % homeImages.length;
      setCurrentImageIndex(newIndex); // Switch image
      setTitleColor(homeImages[newIndex].textColor); // Update the title color
      setFade(true); // Start fade-in
    }, 1000); // Delay corresponds to the transition duration
  };

  useEffect(() => {
    const interval = setInterval(toggleImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentImageIndex]);

  const currentImage = homeImages[currentImageIndex];

  return (
    <section>
      <div
        ref={ref}
        id="home-section"
        className="relative h-screen overflow-clip flex justify-end md:justify-between">
        <div className="min-w-[300px] bg-white z-20 hidden md:block"></div>
        <img
          src={currentImage.src}
          alt={`Slide ${currentImageIndex + 1}`}
          className={`object-cover h-screen transition-opacity duration-1000 ${
            fade ? "fade-enter-active" : "fade-exit-active"
          }`}
        />
      </div>
    </section>
  );
});

export default Home;
