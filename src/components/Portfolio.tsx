// Journal.tsx
import React from "react";

const Portfolio = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="portfolio-section" className="h-screen bg-blue-300">
      Portfolio
    </div>
  );
});

export default Portfolio;
