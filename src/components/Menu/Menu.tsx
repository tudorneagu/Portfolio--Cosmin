import { useEffect, useState, useRef } from "react";

function Menu({
  sectionRefs,
}: {
  sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> };
}) {
  const [activeSection, setActiveSection] = useState("hover:underline");
  const [isSubMenuVisible, setIsSubMenuVisible] = useState("hover:underline");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isManualScroll = useRef(false); // Flag to track manual scrolling
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

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
    <section className="flex gap-5 h-[900px] pl-20 items-baseline relative">
      <div className="heading-xl absolute">
        <p className="absolute top-40  -rotate-90 -left-[5rem]">Cosmin</p>
        <p className="absolute top-24  -rotate-90 ">Pantea</p>
      </div>
      <div className="h-[700px] mx-12 flex flex-col items-center gap-5">
        <div className="h-full  border-l-2 border-black" />
        <div className="flex flex-col gap-3">
          <img
            className="w-6 h-6"
            src="/instaLogo.svg"
            alt="instagram page link"
          />
          <img
            className="w-6 h-6"
            src="/whatsappLogo.svg"
            alt="instagram page link"
          />
        </div>
      </div>
      <nav className="absolute bottom-72 left-40 flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => handleScroll("about-section")}
          className={` relative mb-2   ${
            activeSection === "about-section"
              ? "menu-text-active ml-2"
              : "menu-text-regular underline-hover hover-smooth  "
          }`}>
          About
        </button>
        <button
          type="button"
          onClick={() => handleScroll("journal-section")}
          className={` relative  ${
            activeSection === "journal-section"
              ? "menu-text-active ml-2"
              : "menu-text-regular underline-hover hover-smooth  "
          }`}>
          Journal
        </button>

        {/* Submenu for Journal Section */}
        <div
          className={`${
            isSubMenuVisible === "journal-section"
              ? "max-h-40 opacity-100 "
              : "max-h-0 opacity-0"
          } transition-all duration-300 overflow-hidden flex flex-col text-right justify-end relative -left-[80px] items-end`}>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-all")}
            className={
              activeSection === "journal-section-all"
                ? "font-black"
                : "hover:underline"
            }>
            All
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2024")}
            className={
              activeSection === "journal-section-2024"
                ? "font-black"
                : "hover:underline"
            }>
            2024
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2023")}
            className={
              activeSection === "journal-section-2023"
                ? "font-black"
                : "hover:underline"
            }>
            2023
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2022")}
            className={
              activeSection === "journal-section-2022"
                ? "font-black"
                : "hover:underline"
            }>
            2022
          </button>
        </div>

        <button
          type="button"
          onClick={() => handleScroll("portfolio-section")}
          className={` relative ${
            activeSection === "portfolio-section"
              ? "menu-text-active ml-2"
              : "menu-text-regular underline-hover hover-smooth"
          }`}>
          Portfolio
        </button>

        {/* Submenu for portfolio Section */}
        <div
          className={`${
            isSubMenuVisible === "portfolio-section"
              ? "max-h-40 opacity-100 "
              : "max-h-0 opacity-0"
          } transition-all duration-300 overflow-hidden flex flex-col text-right justify-end relative -left-[105px] items-end`}>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-all")}
            className={
              activeSection === "journal-section-all"
                ? "font-black"
                : "hover:underline"
            }>
            All
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2024")}
            className={
              activeSection === "journal-section-2024"
                ? "font-black"
                : "hover:underline"
            }>
            Events
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2023")}
            className={
              activeSection === "journal-section-2023"
                ? "font-black"
                : "hover:underline"
            }>
            Family
          </button>
          <button
            type="button"
            onClick={() => handleScroll("journal-section-2022")}
            className={
              activeSection === "journal-section-2022"
                ? "font-black"
                : "hover:underline"
            }>
            Lifestyle
          </button>
        </div>
        <button
          type="button"
          onClick={() => handleScroll("price-section")}
          className={` relative pb-2  ${
            activeSection === "price-section"
              ? "menu-text-active pl-2"
              : "menu-text-regular underline-hover hover-smooth"
          }`}>
          Prices
        </button>
        <button
          type="button"
          onClick={() => handleScroll("contact-section")}
          className={` relative   ${
            activeSection === "contact-section"
              ? "menu-text-active pl-2"
              : "menu-text-regular underline-hover hover-smooth"
          }`}>
          Contact
        </button>
      </nav>
    </section>
  );
}

export default Menu;
