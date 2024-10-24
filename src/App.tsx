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
  const [toggleMenu, setToggleMenu] = useState(false); // Lifted state
  const [titleColor, setTitleColor] = useState("black"); // Add state to hold the title color

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

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <BrowserRouter>
      <div className="flex flex-col w-screen h-screen relative">
        <header className="top-0 fixed z-50 ">
          {isMobile ? (
            <>
              <MobileMenu
                color={titleColor}
                sectionRefs={sectionRefs}
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                handleToggleMenu={handleToggleMenu}
              />
              <div className="absolute top-4 -right-4 z-50">
                {" "}
                <Title toggleMenu={toggleMenu} color={titleColor} />
              </div>
            </>
          ) : (
            <Menu sectionRefs={sectionRefs} />
          )}
        </header>
        <main>
          <Home setTitleColor={setTitleColor} />
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
