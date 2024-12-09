import styles from "./Service.module.scss";
import { memo } from "react";
import { ServiceProps } from "../model/types";
import { Flex } from "@/shared/lib/Stack";

export const Service: React.FC<ServiceProps> = memo(
  ({ icon, caption, desc, activeIcon }): React.JSX.Element => {
    return (
      <Flex align="start" relative className={styles.Service}>
        <Flex
          className={styles.Service__info}
          justify="end"
          direction="column"
          align="start"
          maxHeight
        >
          {icon}
          {activeIcon}

          <h6 className={styles.Service__caption}>{caption}</h6>

          <p className={styles.Service__desc}>{desc}</p>
        </Flex>

        <div className={styles.Service__bg}></div>
      </Flex>
    );
  },
);
