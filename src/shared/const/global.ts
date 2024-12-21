export const tablet_mediaQuery_width: MediaQueryList = window.matchMedia(
  "(max-width: 1450px)",
);

export const tablet_smaller_mediaQuery_width: MediaQueryList =
  window.matchMedia("(max-width: 1050px)");

export const mobile_mediaQuery_width: MediaQueryList =
  window.matchMedia("(max-width: 750px)");

export const mobile_smaller_mediaQuery_width: MediaQueryList =
  window.matchMedia("(max-width: 415px)");

export const transition_duration_default: number = 300;
export const transition_duration_medium: number = 1000;
