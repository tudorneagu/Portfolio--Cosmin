// Journal.tsx
import React from "react";

const Journal = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} id="journal-section" className="h-[1000px] bg-blue-300">
      Journal
    </div>
  );
});

export default Journal;
