import styles from "./Button.module.scss";
import { memo } from "react";
import { ButtonProps } from "../model/types";

export const Button: React.FC<ButtonProps> = memo(
  ({ children }): React.JSX.Element => {
    return (
      <div className={styles.Button}>
        <div className={styles.Button__bg}></div>

        {children}
      </div>
    );
  },
);
