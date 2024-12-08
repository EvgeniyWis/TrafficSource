export type ButtonThemes = "withBG" | "big-x-padding";

export interface ButtonProps {
  children: React.ReactNode;
  themes?: ButtonThemes[];
}
