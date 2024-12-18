import { Flex } from "@/shared/lib/Stack";
import styles from "./TimeToAct.module.scss";
import { memo } from "react";
import TelegramCircleDarkSVG from "@/shared/assets/icons/global/TelegramCircleDarkSVG.svg?react";
import { Button } from "@/shared/ui-kit/Button";

export const TimeToAct: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      width="100"
      justify="between"
      direction="column"
      className={styles.TimeToAct}
    >
      <Flex direction="column" gap="15">
        <Flex width="100" justify="between" align="start">
          <h5 className={styles.TimeToAct__caption}>Время Действовать</h5>

          <TelegramCircleDarkSVG />
        </Flex>

        <p className={styles.TimeToAct__desc}>
          Получите персонализированные рекомендации для роста вашего бизнеса!
        </p>
      </Flex>

      <Button
        className={styles.TimeToAct__button}
        themes={["withMoreDarkBG", "maxWidth"]}
      >
        <a target="_blank" href="https://t.me/Agent_Traffic23">
          Бесплатная консультация
        </a>
      </Button>
    </Flex>
  );
});
