import type { ReactNode } from "react";
export interface MenuItemProps {
  activeSection: string;
  sectionId: string;
  onClick: (id: string) => void;
  children: ReactNode;
}
