import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const About = () => {
  const { sectionRefs } = useContext(NavContext);
  const aboutSectionRef = sectionRefs["about-section"];
  return (
    <section
      ref={aboutSectionRef}
      id="about-section"
      className="h-screen bg-background flex flex-col justify-center items-end gap-5 pt-72 pl-24 md:pl-0 pr-10 text-s-regular md:text-m-regular">
      <p className="max-w-[500px]">
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar.{" "}
      </p>
      <p className="max-w-[500px]">
        Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam
        metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
        amet magna non ligula vestibulum eleifend.
      </p>
      <p className="max-w-[500px]">
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar.{" "}
      </p>
    </section>
  );
};

export default About;
