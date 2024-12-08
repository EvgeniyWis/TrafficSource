import { HTMLAttributes } from "react";

export type ButtonThemes =
  | "withBG"
  | "big-x-padding"
  | "withMoreDarkBG"
  | "maxWidth";

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  themes?: ButtonThemes[];
}
