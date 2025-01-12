import { lazy } from "react";

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MainPage").then(({ MainPage }) => ({
    default: MainPage,
  })),
);

export { MainPageContext } from "./model/context";

export type { MainPageScrollPositions } from "./model/context";

export { WhyWe } from "./ui/WhyWe/ui/WhyWe";
export { Services } from "./ui/Services/ui/Services";
export { MainBlock } from "./ui/MainBlock/ui/MainBlock";

export type { NavSections } from "./ui/Services/model/types";
