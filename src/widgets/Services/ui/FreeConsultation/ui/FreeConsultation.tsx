import { Flex } from "@/shared/lib/Stack";
import styles from "./FreeConsultation.module.scss";
import { memo } from "react";
import FreeConsultationSVG from "@/shared/assets/icons/Services/FreeConsultationSVG.svg?react";
import { Button } from "@/shared/ui-kit/Button";
import { mobile_mediaQuery_width } from "@/shared/const/global";

export const FreeConsultation: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      width="100"
      justify="between"
      direction="column"
      className={styles.FreeConsultation}
    >
      <Flex width="100" justify="between">
        <Flex
          width="75"
          gap={mobile_mediaQuery_width.matches ? "5" : "20"}
          direction="column"
        >
          <h5 className={styles.FreeConsultation__caption}>
            Получите экспертизу и советы от профессионалов!
          </h5>

          <p className={styles.FreeConsultation__desc}>
            Закажите бесплатную консультацию и узнайте, как наши услуги могут
            помочь вашему бизнесу вырасти и достичь новых высот.
          </p>
        </Flex>

        <FreeConsultationSVG className={styles.FreeConsultation__icon} />
      </Flex>

      <Button
        className={styles.FreeConsultation__button}
        themes={["withMoreDarkBG", "maxWidth"]}
      >
        <a target="_blank" href="https://t.me/Agent_Traffic23">
          Бесплатная консультация
        </a>
      </Button>
    </Flex>
  );
});
