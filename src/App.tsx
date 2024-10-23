// App.tsx
import { BrowserRouter } from "react-router-dom";
import { useRef } from "react";
import Menu from "./components/Menu/Menu";
import About from "./components/About";
import Journal from "./components/Journal";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";

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

  return (
    <BrowserRouter>
      <div className="flex flex-col w-screen relative">
        <header className="top-0 fixed z-50 ">
          <Menu sectionRefs={sectionRefs} />
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
