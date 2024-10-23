// Contact.tsx
import React from "react";

const Contact = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="contact-section" className="h-[1000px] bg-blue-300">
      Contact
    </div>
  );
});

export default Contact;
