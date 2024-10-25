export interface MenuItemProps {
  activeSection: string;
  sectionId: string;
  onClick: (id: string) => void;
  children: ReactNode;
}
