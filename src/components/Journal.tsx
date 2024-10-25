// Journal.tsx
import { useContext } from "react";
import { NavContext } from "../contexts/NavContext";

const Journal = () => {
  const { sectionRefs, data, activeSubMenu } = useContext(NavContext);
  const journalSectionRef = sectionRefs["journal-section"];
  const yearSelection = data.filter((element) =>
    activeSubMenu === "All"
      ? element
      : element.year === activeSubMenu.toString()
  );
  return (
    <section
      ref={journalSectionRef}
      id="journal-section"
      className="h-screen bg-background flex flex-col pt-72 items-end gap-5 ">
      {yearSelection.map((event) => (
        <article
          key={event.id}
          className="flex justify-between gap-8 border-b pb-2 w-[300px] md:w-[500px] md:pl-0 pr-10 text-xs-regular md:text-m-regular ">
          <p>{event.year}</p>
          <p className="w-[150px] bg-red-300">{event.event}</p>
          <p>{event.category}</p>
        </article>
      ))}
    </section>
  );
};

export default Journal;
