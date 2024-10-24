import type { ReactNode } from "react";

interface MenuItemProps {
  activeSection: string;
  sectionId: string;
  onClick: (id: string) => void;
  children: ReactNode;
}

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
          ? "menu-text-active ml-2"
          : "menu-text-regular underline-hover hover-smooth  "
      }`}>
      {children}
    </button>
  );
}

export default MenuItem;
