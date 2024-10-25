// Journal.tsx
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Portfolio = () => {
  const { sectionRefs } = useContext(NavContext);
  const portofolioSectionRef = sectionRefs["portfolio-section"];
  return (
    <div
      ref={portofolioSectionRef}
      id="portfolio-section"
      className="h-screen bg-blue-300">
      Portfolio
    </div>
  );
};

export default Portfolio;
