interface Photo {
  description: string;
  src: string;
  orientation: string;
}

interface EventEntry {
  id: number;
  year: string;
  event: string;
  category: string;
  photos: Photo[];
}

interface ISectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
  "about-section": React.RefObject<HTMLDivElement>;
  "journal-section": React.RefObject<HTMLDivElement>;
  "journal-section-all": React.RefObject<HTMLDivElement>;
  "journal-section-2024": React.RefObject<HTMLDivElement>;
  "journal-section-2023": React.RefObject<HTMLDivElement>;
  "journal-section-2022": React.RefObject<HTMLDivElement>;
  "portfolio-section": React.RefObject<HTMLDivElement>;
  "price-section": React.RefObject<HTMLDivElement>;
  "contact-section": React.RefObject<HTMLDivElement>;
}

export interface INavContext {
  data: EventEntry[];
  eventYears: string[];
  eventCategories: string[];
  sectionRefs: ISectionRefs;
  isMobile: boolean;
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMenu: boolean;
  setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
  titleColor: string;
  setTitleColor: React.Dispatch<React.SetStateAction<string>>;
  activeSubMenu: string;
  setActiveSubMenu: React.Dispatch<React.SetStateAction<string>>;
  handleToggleMenu: () => void;
  handleSubMenuClick: (id: string) => void;
}
