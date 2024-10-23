// Journal.tsx
import React from "react";

const Price = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="price-section" className="h-[1000px] bg-blue-300">
      Prices
    </div>
  );
});

export default Price;
