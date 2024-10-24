function SubMenuItem({ children, activeSection, onClick, sectionId }) {
  return (
    <button
      type="button"
      onClick={() => onClick(sectionId)}
      className={`relative ${
        activeSection === sectionId
          ? "menu-text-active ml-2"
          : "menu-text-regular underline-hover hover-smooth"
      }`}>
      {children}
    </button>
  );
}

export default SubMenuItem;
