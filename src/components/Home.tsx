// Journal.tsx
import React from "react";

const Home = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="home-section" className="h-[1000px] bg-blue-300">
      Home
    </div>
  );
});

export default Home;
