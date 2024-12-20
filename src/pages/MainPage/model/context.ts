import { createContext } from "react";

export type MainPageScrollPositions =
  | "MainBlock"
  | "WhyWeAnchor"
  | "Services"
  | "Footer";

export interface MainPageContext {
  scrollPosition: MainPageScrollPositions;
  setScrollPosition: React.Dispatch<
    React.SetStateAction<MainPageScrollPositions>
  >;
}

export const MainPageContext = createContext<MainPageContext>({
  scrollPosition: "MainBlock",
  setScrollPosition: () => {},
});
