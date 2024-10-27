// Journal.tsx
import { useContext, useState } from "react";
import { NavContext } from "../contexts/NavContext";
import SeeMore from "./ui/SeeMore";

const Portfolio = () => {
  const { sectionRefs, data, activeSubMenu } = useContext(NavContext);
  const portfolioSectionRef = sectionRefs["portfolio-section"];

  const [visiblePhotos, setVisiblePhotos] = useState(6); // Show initial 6 photos

  const allPhotos = data.flatMap((event) =>
    event.photos.map((photo) => ({
      ...photo,
      year: event.year,
      category: event.category,
    }))
  );

  const filteredPhotos =
    activeSubMenu === "All"
      ? allPhotos
      : allPhotos.filter((photo) => photo.category === activeSubMenu);
  const loadMorePhotos = () => {
    setVisiblePhotos((prev) => prev + 6); // Load 6 more photos
  };
  return (
    <section
      ref={portfolioSectionRef}
      id="portfolio-section"
      className="relative min-h-screen w-full md:w-full overflow-clip bg-background flex justify-end md:justify-between pb-10">
      <div className="min-w-[400px] bg-background z-20 hidden md:block" />
      <div className="flex flex-col items-start">
        <div className=" max-w-[350px] pr-5 md:max-w-[900px] grid grid-cols-3 gap-4 flex-1  md:auto-rows-[300px] grid-flow-dense">
          {filteredPhotos.slice(0, visiblePhotos).map((photo) => (
            <div
              key={photo.src}
              className={`group bg-red-200 relative overflow-hidden rounded-lg ${
                photo.orientation === "landscape"
                  ? "col-span-2 row-span-1" // Landscape spans 2 columns
                  : "col-span-1 row-span-2" // Portrait spans 1 column but 2 rows
              }`}>
              <img
                src={photo.src}
                alt={photo.description}
                className=" h-full w-full object-cover transform transition duration-300 group-hover:scale-110 "
              />
              <article className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-1 items-start justify-end px-2 pb-2  opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-white text-s-regular">{photo.year}</span>
                <span className="text-white text-s-regular">
                  {photo.category}
                </span>
                <span className="text-white text-s-regular">
                  {photo.description}
                </span>
              </article>
            </div>
          ))}
        </div>
        {visiblePhotos < filteredPhotos.length && (
          <SeeMore onClick={loadMorePhotos} />
        )}
      </div>

      {/* Load More Button */}
    </section>
  );
};

export default Portfolio;
