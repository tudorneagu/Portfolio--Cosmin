// Journal.tsx
import React from "react";

const Journal = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="journal-section" className="h-screen bg-blue-300">
      Journal
    </div>
  );
});

export default Journal;
