import { useEffect, useState, useRef, useContext } from "react";
import { NavContext } from "../../contexts/NavContext";
import MenuItem from "./MenuItem";

import SubMenuItem from "./SubMenuItem";

function MobileMenu() {
  //  {
  //   color: string;
  //   sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  //   toggleMenu: boolean;
  //   setToggleMenu: Dispatch<SetStateAction<boolean>>; // Prop type for the toggle state
  //   handleToggleMenu: () => void; // Prop type for the toggle handler
  const {
    titleColor,
    sectionRefs,
    toggleMenu,
    activeSubMenu,
    setActiveSubMenu,
    setToggleMenu,
    handleToggleMenu,
    handleSubMenuClick,
    eventYears,
    eventCategories,
  } = useContext(NavContext);
  const [activeSection, setActiveSection] = useState("");
  const [isSubMenuVisible, setIsSubMenuVisible] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<number | null>(null);
  const textColor = toggleMenu
    ? "text-white"
    : titleColor === "black"
    ? "text-white"
    : "text-black";
  const bgColor = toggleMenu
    ? "bg-black"
    : titleColor === "black"
    ? "bg-black"
    : "bg-white";

  // Handle scrolling to the section
  function handleScroll(id: string) {
    const element = sectionRefs[id]?.current;
    if (element) {
      isManualScroll.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setActiveSubMenu("All");

      if (id === "journal-section" || id === "portfolio-section") {
        setIsSubMenuVisible(id);
      } else {
        setIsSubMenuVisible("hover:underline");
      }

      scrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 800); // Adjust timeout according to scroll speed
      setToggleMenu(false);
    }
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScroll.current) return;

      let hasIntersectingSection = false;
      for (const entry of entries) {
        if (entry.isIntersecting) {
          hasIntersectingSection = true;
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          if (
            sectionId === "journal-section" ||
            sectionId === "portfolio-section"
          ) {
            setIsSubMenuVisible(sectionId);
          } else {
            setIsSubMenuVisible("hover:underline");
          }
        }
        if (!hasIntersectingSection) {
          setActiveSection("");
          setIsSubMenuVisible("");
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    for (const ref of Object.values(
      sectionRefs
    ) as React.RefObject<HTMLDivElement>[]) {
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    }

    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionRefs]);
  const sectionName = activeSection.split("-").slice(0, 1);

  return (
    <div className="h-screen fixed">
      <div>
        {/* Arrow Button */}
        <button
          type="button"
          className={`absolute top-2/4 left-4 z-50 p-2 rounded-full ${bgColor} ${textColor} `}
          onClick={handleToggleMenu}>
          {toggleMenu ? "<" : ">"} {/* X for close, ☰ for menu */}
        </button>

        {/* Sliding Menu */}
        <section
          className={`transform transition-transform duration-500 ease-in-out h-screen w-[180px] bg-white  fixed top-0 left-0 z-40 flex gap-5 pl-14 items-baseline ${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          }`}>
          <nav className="absolute bottom-64 right-4 flex flex-col items-end gap-2">
            <MenuItem
              activeSection={activeSection}
              sectionId="about-section"
              onClick={handleScroll}>
              About
            </MenuItem>
            <MenuItem
              activeSection={activeSection}
              sectionId="journal-section"
              onClick={handleScroll}>
              Journal
            </MenuItem>

            {/* Submenu for Journal Section */}
            <div
              className={`${
                isSubMenuVisible === "journal-section"
                  ? "max-h-40 opacity-100 "
                  : "max-h-0 opacity-0"
              } transition-all pb-1 duration-300 overflow-hidden flex flex-col gap-1 text-right justify-end relative  mr-2 items-start`}>
              <SubMenuItem
                key="All"
                activeSection={activeSection}
                sectionId="All"
                onClick={handleSubMenuClick}>
                All
              </SubMenuItem>
              {eventYears.map((year) => (
                <SubMenuItem
                  key={year}
                  activeSection={activeSection}
                  sectionId={year}
                  onClick={handleSubMenuClick}>
                  {year}
                </SubMenuItem>
              ))}
            </div>
            <MenuItem
              activeSection={activeSection}
              sectionId="portfolio-section"
              onClick={handleScroll}>
              Portfolio
            </MenuItem>

            {/* Submenu for Portfolio Section */}
            <div
              className={`${
                isSubMenuVisible === "portfolio-section"
                  ? "max-h-40 opacity-100 "
                  : "max-h-0 opacity-0"
              } transition-all pb-1 duration-300 overflow-hidden flex flex-col gap-1 text-right justify-end ml-2 items-end`}>
              <SubMenuItem
                key="All"
                activeSection={activeSection}
                sectionId="All"
                onClick={handleSubMenuClick}>
                All
              </SubMenuItem>
              {eventCategories.map((categories) => (
                <SubMenuItem
                  key={categories}
                  activeSection={activeSection}
                  sectionId={categories}
                  onClick={handleSubMenuClick}>
                  {categories}
                </SubMenuItem>
              ))}
            </div>
            <MenuItem
              activeSection={activeSection}
              sectionId="price-section"
              onClick={handleScroll}>
              Prices
            </MenuItem>
            <MenuItem
              activeSection={activeSection}
              sectionId="contact-section"
              onClick={handleScroll}>
              Contact
            </MenuItem>
          </nav>
        </section>
        <section
          className={`absolute bottom-8  capitalize  [writing-mode:vertical-lr] rotate-180 menu-text-active left-[8.5rem] z-50 transform transition-transform duration-500 ease-in-out ${
            toggleMenu ? "translate-x-0" : "-translate-x-[120px]"
          }`}>
          <div className="flex gap-2">
            <h2>{activeSection ? `${sectionName} ` : ""}</h2>
            {activeSection === "journal-section" ||
            activeSection === "portfolio-section" ? (
              <h3 className="text-m-regular">
                {activeSection ? ` / ${activeSubMenu} ` : ""}
              </h3>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>

      {/* Active Section Title */}
    </div>
  );
}

export default MobileMenu;
