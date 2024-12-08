import { Flex } from "@/shared/lib/Stack";
import styles from "./WhyWe.module.scss";
import { memo, useContext } from "react";
import SpinnedLineSVG from "@/shared/assets/icons/global/SpinnedLineSVG.svg?react";
import { MainPageContext } from "@/pages/MainPage";
import { Button } from "@/shared/ui-kit/Button";

export const WhyWe: React.FC = memo((): React.JSX.Element => {
  const { scrollPosition } = useContext(MainPageContext);

  return (
    <Flex direction="column" id="WhyWe" className={styles.WhyWe}>
      <h2 className={styles.WhyWe__caption}>
        ПОЧЕМУ ВЫ <br /> ВЫБЕРЕТЕ НАС?
        {scrollPosition == "WhyWe" && (
          <SpinnedLineSVG className={styles.WhyWe__caption__line} />
        )}
      </h2>

      <Button themes={["withBG", "big-x-padding"]}>Почему?</Button>
    </Flex>
  );
});
