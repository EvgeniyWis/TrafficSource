import { NavSections } from "@/pages/MainPage";

export interface ServiceProps {
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  caption: string;
  desc: string;
  section: NavSections;
}
