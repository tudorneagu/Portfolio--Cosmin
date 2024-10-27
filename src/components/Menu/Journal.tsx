// Journal.tsx
import { useContext } from "react";
import { NavContext } from "../../contexts/NavContext";

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
      className="min-h-screen bg-background flex flex-col pt-40 md:pt-[450px] pr-5 md:pr-0 items-end gap-5 mb-4 ">
      <h1 className="text-l-bold w-[300px] md:w-[500px] mb-10">Events:</h1>
      {yearSelection.map((event) => (
        <article
          key={event.id}
          className="flex justify-between gap-8 border-b pb-2 w-[300px] md:w-[500px] md:pl-0  text-xs-regular md:text-m-regular  ">
          <p className="font-bold">{event.year}</p>
          <p className="w-[200px]">{event.event}</p>
          <p className="w-[70px] text-center p-1 bg-gray-300 rounded-lg">
            {event.category}
          </p>
        </article>
      ))}
    </section>
  );
};

export default Journal;
