function SeeMore({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      className=" flex gap-2 w-8mx-auto mt-3 justify-start "
      onClick={onClick}>
      <p className="text-xs-regular md:text-l-regular hover:font-bold transition-all duration-300">
        See more
      </p>
      <img className="w-4 hover: " src="/public/arrowDown.svg" alt="see more" />
    </button>
  );
}

export default SeeMore;
