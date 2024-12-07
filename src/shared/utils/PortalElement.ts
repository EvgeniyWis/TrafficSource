import { createPortal } from "react-dom";
export interface PortalElementProps {
  children: React.ReactNode;
  element?: HTMLElement;
}

export const PortalElement = (props: PortalElementProps) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
