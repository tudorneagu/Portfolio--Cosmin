import React from "react";

const About = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="about-section" className="h-[1000px] bg-red-300">
      About
    </div>
  );
});

export default About;
