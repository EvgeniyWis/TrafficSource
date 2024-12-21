import { MainBlock } from "@/widgets/MainBlock";
import { memo, useEffect, useState } from "react";
import { MainPageContext, MainPageScrollPositions } from "../model/context";
import { WhyWe } from "@/widgets/WhyWe";
import { IsElementVisible } from "@/shared/utils/IsElementVisible";
import { Services } from "@/widgets/Services";

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Отслеживание позиции скролла пользователя
  const [scrollPosition, setScrollPosition] =
    useState<MainPageScrollPositions>("MainBlock");

  useEffect(() => {
    const MainBlock: HTMLElement = document.getElementById("MainBlock")!;
    const WhyWeAnchor: HTMLElement = document.getElementById("WhyWeAnchor")!;
    const WhyWe: HTMLElement = document.getElementById("WhyWe")!;
    const Services: HTMLElement = document.getElementById("Services")!;
    const Footer: HTMLElement = document.getElementById("Footer")!;

    const changeScrollPosition = (
      element: HTMLElement,
      scrollPosition: MainPageScrollPositions,
    ) => {
      if (IsElementVisible(element)) {
        setScrollPosition(scrollPosition);
      }
    };

    const changeScrollPositions = () => {
      changeScrollPosition(MainBlock, "MainBlock");
      changeScrollPosition(WhyWe, "WhyWe");
      changeScrollPosition(WhyWeAnchor, "WhyWeAnchor");
      changeScrollPosition(Services, "Services");
      changeScrollPosition(Footer, "Footer");
    };

    if (MainBlock && WhyWeAnchor && Services && Footer && WhyWe) {
      document.addEventListener("scroll", () => changeScrollPositions());
    }

    return () => {
      document.removeEventListener("scroll", () => changeScrollPositions());
    };
  }, []);

  return (
    <MainPageContext.Provider
      value={{
        scrollPosition: scrollPosition,
        setScrollPosition: setScrollPosition,
      }}
    >
      <main>
        <MainBlock />
        <WhyWe />
        <Services />
      </main>
    </MainPageContext.Provider>
  );
});
