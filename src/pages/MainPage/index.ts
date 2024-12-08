import { lazy } from "react";

export const MainPage: React.LazyExoticComponent<React.FC> = lazy(() =>
  import("./ui/MainPage").then(({ MainPage }) => ({
    default: MainPage,
  })),
);

export { MainPageContext } from "./model/context";
export type { MainPageScrollPositions } from "./model/context";
