export const IsElementVisible = (element: HTMLElement) => {
  const elementPosition = {
      top: window.scrollY + element.getBoundingClientRect().top,
      left: window.scrollX + element.getBoundingClientRect().left,
      right: window.scrollX + element.getBoundingClientRect().right,
      bottom: window.scrollY + element.getBoundingClientRect().bottom,
    },
    windowPosition = {
      top: window.scrollY,
      left: window.scrollX,
      right: window.scrollX + document.documentElement.clientWidth,
      bottom: window.scrollY + document.documentElement.clientHeight,
    };

  if (
    elementPosition.bottom > windowPosition.top &&
    elementPosition.top < windowPosition.bottom &&
    elementPosition.right > windowPosition.left &&
    elementPosition.left < windowPosition.right
  ) {
    return true;
  }

  return false;
};
