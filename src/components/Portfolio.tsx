// Journal.tsx
import React from "react";

const Portfolio = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="portfolio-section" className="h-[1000px] bg-blue-300">
      Portfolio
    </div>
  );
});

export default Portfolio;
