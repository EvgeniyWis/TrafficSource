import styles from "./Button.module.scss";
import { memo } from "react";
import { ButtonProps } from "../model/types";

export const Button: React.FC<ButtonProps> = memo(
  ({ children, themes }): React.JSX.Element => {
    return (
      <div
        className={`${styles.Button} 
        ${themes && themes.map((theme) => styles[`Button__${theme}`]).join(" ")}`}
      >
        <div className={styles.Button__bg}></div>

        {themes?.includes("withBG") && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}

        {children}
      </div>
    );
  },
);
