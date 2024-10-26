import { createContext, useState, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import data from "../data/data.json";
import type { INavContext } from "../@types";
// @ts-ignore: i dont need to initialise
const NavContext = createContext<INavContext>();

function NavProvider({ children }: { children: ReactNode }) {
  const eventYears = [...new Set(data.map((event) => event.year))];
  const eventCategories = [...new Set(data.map((event) => event.category))];
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
  const [toggleMenu, setToggleMenu] = useState(false);
  const [titleColor, setTitleColor] = useState("black");
  const [activeSubMenu, setActiveSubMenu] = useState("All");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleToggleMenu() {
    setToggleMenu(!toggleMenu);
  }

  function handleSubMenuClick(id: string) {
    setActiveSubMenu(id);
    setToggleMenu(!toggleMenu);
    console.log("Clicked:", id); // Logs the correct value immediately
    console.log("Current activeSubMenu:", id); // Ensures correct use without delay
  }

  return (
    <NavContext.Provider
      value={{
        data,
        eventYears,
        eventCategories,
        sectionRefs,
        isMobile,
        setIsMobile,
        toggleMenu,
        setToggleMenu,
        titleColor,
        setTitleColor,
        setActiveSubMenu,
        activeSubMenu,
        handleToggleMenu,
        handleSubMenuClick,
      }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavProvider, NavContext };
