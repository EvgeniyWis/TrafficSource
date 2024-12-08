import styles from "./Button.module.scss";
import { memo } from "react";
import { ButtonProps } from "../model/types";
import { Flex } from "@/shared/lib/Stack";

export const Button: React.FC<ButtonProps> = memo(
  ({ children, themes, ...otherProps }): React.JSX.Element => {
    // Если тема содержит более темный фон, то добавляем и обычный тоже
    if (themes?.includes("withMoreDarkBG")) {
      themes.push("withBG");
    }

    return (
      <Flex
        align="center"
        justify="center"
        {...otherProps}
        className={`${styles.Button} 
        ${themes && themes.map((theme) => styles[`Button__${theme}`]).join(" ")}
        ${otherProps.className}`}
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
      </Flex>
    );
  },
);
