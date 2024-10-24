import React from "react";

const About = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="about-section" className="h-screen bg-red-300">
      About
    </div>
  );
});

export default About;
