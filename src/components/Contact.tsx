// Contact.tsx
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Contact = () => {
  const { sectionRefs } = useContext(NavContext);
  const contactSectionRef = sectionRefs["contact-section"];
  return (
    <div
      ref={contactSectionRef}
      id="contact-section"
      className="h-screen bg-blue-300">
      Contact
    </div>
  );
};

export default Contact;
