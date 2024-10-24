// Contact.tsx
import React from "react";

const Contact = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} id="contact-section" className="h-screen bg-blue-300">
      Contact
    </div>
  );
});

export default Contact;
