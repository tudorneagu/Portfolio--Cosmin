// Journal.tsx
import React from "react";

const Price = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="price-section" className="h-screen bg-blue-300">
      Prices
    </div>
  );
});

export default Price;
