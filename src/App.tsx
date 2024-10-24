// App.tsx
import { BrowserRouter } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import About from "./components/About";
import Journal from "./components/Journal";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MobileMenu from "./components/Menu/Mobile/MobileMenu";
import Title from "./components/Menu/Title";

function App() {
  const sectionRefs = {
    "about-section": useRef<HTMLDivElement>(null),
    "journal-section": useRef<HTMLDivElement>(null),
    "journal-section-all": useRef<HTMLDivElement>(null),
    "journal-section-2024": useRef<HTMLDivElement>(null),
    "journal-section-2023": useRef<HTMLDivElement>(null),
    "journal-section-2022": useRef<HTMLDivElement>(null),
    "portfolio-section": useRef<HTMLDivElement>(null),
    "price-section": useRef<HTMLDivElement>(null),
    "contact-section": useRef<HTMLDivElement>(null),
  };
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold for mobile
    };

    // Run on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <BrowserRouter>
      <div className="flex flex-col w-screen h-screen relative">
        <header className="top-0 fixed z-50 ">
          {isMobile ? (
            <>
              <MobileMenu sectionRefs={sectionRefs} />
              <div className="absolute  top-4 -right-4 z-50">
                {" "}
                <Title />
              </div>
            </>
          ) : (
            <Menu sectionRefs={sectionRefs} />
          )}
        </header>
        <main>
          <Home />
          <About ref={sectionRefs["about-section"]} />
          <Journal ref={sectionRefs["journal-section"]} />
          <Portfolio ref={sectionRefs["portfolio-section"]} />
          <Price ref={sectionRefs["price-section"]} />
          <Contact ref={sectionRefs["contact-section"]} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
