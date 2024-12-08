import { MainBlock } from "@/widgets/MainBlock";
import { memo, useEffect, useState } from "react";
import { MainPageContext, MainPageScrollPositions } from "../model/context";
import { WhyWe } from "@/widgets/WhyWe";
import { IsElementVisible } from "@/shared/utils/IsElementVisible";

export const MainPage: React.FC = memo((): React.JSX.Element => {
  // Отслеживание позиции скролла пользователя
  const [scrollPosition, setScrollPosition] =
    useState<MainPageScrollPositions>("MainBlock");

  useEffect(() => {
    const body: HTMLBodyElement = document.querySelector("body")!;
    const MainBlock: HTMLElement = document.getElementById("MainBlock")!;
    const WhyWe: HTMLElement = document.getElementById("WhyWe")!;

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
    };

    if (MainBlock && WhyWe) {
      body.addEventListener("scroll", () => changeScrollPositions());
    }

    return () => {
      body.removeEventListener("scroll", () => changeScrollPositions());
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
      </main>
    </MainPageContext.Provider>
  );
});
