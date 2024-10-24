const Title = ({
  color,
  toggleMenu,
}: {
  toggleMenu: boolean;
  color: string;
}) => {
  const textColor = toggleMenu
    ? "text-black"
    : color === "black"
    ? "text-black"
    : "text-white";
  return (
    <div
      className={`heading-xl absolute mt-10 text-${color} md:text-black ${textColor}`}>
      <p className="absolute top-32  -rotate-90 -left-[4rem] md:-left-[6rem]">
        Cosmin
      </p>
      <p className="absolute top-16  -rotate-90 ">Pantea</p>
    </div>
  );
};

export default Title;
