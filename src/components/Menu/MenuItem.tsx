import type { MenuItemProps } from "../../@types/menu";
function MenuItem({
  activeSection,
  sectionId,
  onClick,
  children,
}: MenuItemProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(sectionId)}
      className={` relative ${
        sectionId !== "portfolio-section" && sectionId !== "journal-section"
          ? "mb-2"
          : ""
      }  ${
        activeSection === sectionId
          ? "menu-text-mobile-active md:menu-text-active md:ml-2"
          : "menu-text-mobile-regular md:menu-text-regular underline-hover hover-smooth  "
      }`}>
      {children}
    </button>
  );
}

export default MenuItem;
