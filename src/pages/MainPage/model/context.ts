import { createContext } from "react";

export type MainPageScrollPositions =
  | "MainBlock"
  | "WhyWe"
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
