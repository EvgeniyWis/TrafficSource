export const tabletMediaQueryWidth: MediaQueryList = window.matchMedia(
  "(max-width: 1450px)",
);

export const tabletSmallerMediaQueryWidth: MediaQueryList = window.matchMedia(
  "(max-width: 1050px)",
);

export const mobileMediaQueryWidth: MediaQueryList =
  window.matchMedia("(max-width: 750px)");

export const mobileSmallerMediaQueryWidth: MediaQueryList =
  window.matchMedia("(max-width: 415px)");

export const transitionDurationDefault: number = 300;
export const transitionDurationMedium: number = 1000;
