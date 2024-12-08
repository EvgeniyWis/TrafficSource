import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import styles from "./Flex.module.scss";

export type FlexJustify =
  | "start"
  | "center"
  | "end"
  | "between"
  | "evenly"
  | "around";
export type FlexAlign = "start" | "center" | "end" | "stretch";
export type FlexDirection = "row" | "column";
export type FlexGap = "0" | "3" | "5" | "10" | "15" | "20" | "30" | "40" | "50";
export type FlexWitdth =
  | "10"
  | "20"
  | "30"
  | "40"
  | "50"
  | "60"
  | "70"
  | "80"
  | "90";

const justifyClasses: Record<FlexJustify, string> = {
  start: styles.justifyStart,
  center: styles.justifyCenter,
  end: styles.justifyEnd,
  between: styles.justifyBetween,
  evenly: styles.justifyEvenly,
  around: styles.justifyAround,
};

const alignClasses: Record<FlexAlign, string> = {
  start: styles.alignStart,
  center: styles.alignCenter,
  end: styles.alignEnd,
  stretch: styles.alignStretch,
};

const directionClasses: Record<FlexDirection, string> = {
  row: styles.directionRow,
  column: styles.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  0: styles.gap0,
  3: styles.gap3,
  5: styles.gap5,
  10: styles.gap10,
  15: styles.gap15,
  20: styles.gap20,
  30: styles.gap30,
  40: styles.gap40,
  50: styles.gap50,
};

const widthClasses: Record<FlexWitdth, string> = {
  10: styles.width10,
  20: styles.width20,
  30: styles.width30,
  40: styles.width40,
  50: styles.width50,
  60: styles.width60,
  70: styles.width70,
  80: styles.width80,
  90: styles.width90,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: boolean;
  gap?: FlexGap;
  max?: boolean;
  width?: FlexWitdth;
  isSection?: boolean;
  "data-testid"?: string;
  innerRef?: React.LegacyRef<HTMLDivElement>;
}

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = "start",
    align = "center",
    direction = "row",
    gap,
    max,
    innerRef,
    isSection,
    "data-testid": dataTestId,
    wrap,
    width,
    ...otherProps
  } = props;

  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
    width && widthClasses[width],
  ];

  return (
    <>
      {isSection ? (
        <section
          ref={innerRef}
          className={`${styles.Flex} ${max ? styles.max : ""} ${wrap ? styles.wrap : ""}
           ${classes.join(" ")}`}
          data-testid={dataTestId}
          {...otherProps}
        >
          {children}
        </section>
      ) : (
        <div
          ref={innerRef}
          className={`${styles.Flex} ${max ? styles.max : ""} ${wrap ? styles.wrap : ""} ${classes.join(" ")}`}
          data-testid={dataTestId}
          {...otherProps}
        >
          {children}
        </div>
      )}
    </>
  );
};
Flex.displayName = "Flex";
