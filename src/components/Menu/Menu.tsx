import { useEffect, useState, useRef, useContext } from "react";
import MenuItem from "./MenuItem";
import Social from "./Social";
import SubMenuItem from "./SubMenuItem";
import Title from "./Title";
import { NavContext } from "../../contexts/NavContext";

function Menu() {
  //  {
  //   sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
  //   toggleMenu: boolean;
  //   color: string;
  const {
    sectionRefs,
    eventYears,
    eventCategories,
    handleSubMenuClick,
    activeSubMenu,
  } = useContext(NavContext);
  const [activeSection, setActiveSection] = useState("hover:underline");
  const [isSubMenuVisible, setIsSubMenuVisible] = useState("hover:underline");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  // Handle scrolling to the section
  function handleScroll(id: string) {
    const element = sectionRefs[id]?.current;
    if (element) {
      // Disable the observer during manual scrolling
      isManualScroll.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);

      if (id === "journal-section" || id === "portfolio-section") {
        setIsSubMenuVisible(id);
      } else {
        setIsSubMenuVisible("hover:underline");
      }

      // Re-enable the observer after scrolling is complete
      scrollTimeout.current = setTimeout(() => {
        isManualScroll.current = false;
      }, 800); // Adjust timeout according to scroll speed
    }
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isManualScroll.current) return; // Skip observer updates during manual scroll

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
          // No sections are intersecting, so clear the activeSection
          setActiveSection("hover:underline");
          setIsSubMenuVisible("hover:underline");
        }
      }
    };

    observerRef.current = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe each section
    for (const ref of Object.values(
      sectionRefs
    ) as React.RefObject<HTMLDivElement>[]) {
      if (ref.current) {
        observerRef.current.observe(ref.current);
      }
    }

    // Cleanup
    return () => {
      observerRef.current?.disconnect();
    };
  }, [sectionRefs]);

  return (
    <section className="flex gap-5 h-screen pl-14 items-baseline relative">
      <Title />
      <div className="h-[85vh] mx-12 flex flex-col items-center gap-5">
        <div className="h-full  border-l-2 border-black" />
        <Social />
      </div>
      <nav className="absolute bottom-72 left-32 flex flex-col items-start gap-2">
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
          } transition-all pb-1 duration-300 overflow-hidden flex flex-col gap-1 text-right justify-end relative -left-[80px] items-end`}>
          <SubMenuItem
            key="All"
            activeSection={activeSubMenu}
            sectionId="All"
            onClick={handleSubMenuClick}>
            All
          </SubMenuItem>
          {eventYears.map((year) => (
            <SubMenuItem
              key={year}
              activeSection={activeSubMenu}
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

        {/* Submenu for portfolio Section */}
        <div
          className={`${
            isSubMenuVisible === "portfolio-section"
              ? "max-h-40 opacity-100 "
              : "max-h-0 opacity-0"
          } transition-all pb-1 duration-300 overflow-hidden flex flex-col gap-1 text-right justify-end relative -left-[105px] items-end`}>
          <SubMenuItem
            key="All"
            activeSection={activeSubMenu}
            sectionId="All"
            onClick={handleSubMenuClick}>
            All
          </SubMenuItem>
          {eventCategories.map((categories) => (
            <SubMenuItem
              key={categories}
              activeSection={activeSubMenu}
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
  );
}

export default Menu;
