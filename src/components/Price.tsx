// Journal.tsx
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Price = () => {
  const { sectionRefs } = useContext(NavContext);
  const priceSectionRef = sectionRefs["price-section"];
  return (
    <div
      ref={priceSectionRef}
      id="price-section"
      className="h-screen bg-blue-300">
      Prices
    </div>
  );
};

export default Price;
