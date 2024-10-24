import type { ReactNode } from "react";

interface SubMenuItemProps {
  activeSection: string;
  sectionId: string;
  onClick: (id: string) => void;
  children: ReactNode;
}
function SubMenuItem({
  children,
  activeSection,
  onClick,
  sectionId,
}: SubMenuItemProps) {
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
