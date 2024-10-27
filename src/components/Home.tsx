import React, { useState, useEffect, useContext, useRef } from "react";
import homeImages from "../data/homeImages.json";
import { NavContext } from "../contexts/NavContext";

const Home = React.forwardRef<HTMLDivElement>((_, ref) => {
  const { setTitleColor } = useContext(NavContext);
  const [fade, setFade] = useState(true);
  const currentImageIndex = useRef(0); // useRef to store current index
  const [displayedImage, setDisplayedImage] = useState(homeImages[0]);

  const toggleImage = () => {
    setFade(false); // Start fade-out
    setTimeout(() => {
      currentImageIndex.current =
        (currentImageIndex.current + 1) % homeImages.length;
      setDisplayedImage(homeImages[currentImageIndex.current]); // Update displayed image
      setTitleColor(homeImages[currentImageIndex.current].textColor); // Update the title color
      setFade(true); // Start fade-in
    }, 1000); // Delay for the transition duration
  };

  useEffect(() => {
    const interval = setInterval(toggleImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section>
      <div
        ref={ref}
        id="home-section"
        className="relative h-screen w-full overflow-clip bg-background flex md:justify-between">
        <div className="min-w-[300px] bg-background z-20 hidden md:block" />
        <img
          src={displayedImage.src}
          alt={`Slide ${currentImageIndex.current + 1}`}
          className={`object-cover h-screen md:w-[900px] transition-opacity duration-1000 ${
            fade ? "fade-enter-active" : "fade-exit-active"
          }`}
        />
      </div>
    </section>
  );
});

export default Home;
