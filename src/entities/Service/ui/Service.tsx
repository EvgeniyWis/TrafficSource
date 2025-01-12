import styles from "./Service.module.scss";
import { memo } from "react";
import { ServiceProps } from "../model/types";
import { Flex } from "@/shared/lib/Stack";
import { tabletSmallerMediaQueryWidth } from "@/shared/const/global";
import AdaptiveHoverServiceIconFirstPartSVG from "@/shared/assets/icons/Services/AdaptiveHoverServiceIconFirstPartSVG.svg?react";
import AdaptiveHoverServiceIconSecondPartSVG from "@/shared/assets/icons/Services/AdaptiveHoverServiceIconSecondPartSVG.svg?react";

export const Service: React.FC<ServiceProps> = memo(
  ({ icon, caption, desc, activeIcon }): React.JSX.Element => {
    return (
      <Flex align="start" relative width="100" className={styles.Service}>
        <Flex
          className={styles.Service__info}
          justify={tabletSmallerMediaQueryWidth.matches ? "between" : "end"}
          direction="column"
          align="start"
          maxHeight
        >
          {!tabletSmallerMediaQueryWidth.matches && (
            <>
              {icon}
              {activeIcon}
            </>
          )}

          {tabletSmallerMediaQueryWidth.matches && (
            <Flex width="100" justify="between">
              <Flex>
                {icon}
                {activeIcon}
              </Flex>

              <Flex
                className={styles.Service__adaptive__hoverIconWrapper}
                direction="column"
              >
                <AdaptiveHoverServiceIconFirstPartSVG
                  className={styles.Service__adaptive__hoverIcon}
                />
                <AdaptiveHoverServiceIconSecondPartSVG
                  className={styles.Service__adaptive__hoverIcon}
                />
              </Flex>
            </Flex>
          )}

          <h6 className={styles.Service__caption}>{caption}</h6>

          <p className={styles.Service__desc}>{desc}</p>
        </Flex>

        <div className={styles.Service__bg}></div>
      </Flex>
    );
  },
);

Service.displayName = "Service";
