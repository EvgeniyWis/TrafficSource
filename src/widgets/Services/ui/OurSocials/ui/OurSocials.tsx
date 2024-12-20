import { Flex } from "@/shared/lib/Stack";
import styles from "./OurSocials.module.scss";
import { memo } from "react";
import TelegramSVG from "@/shared/assets/icons/global/TelegramSVG.svg?react";
import WhatsAppSVG from "@/shared/assets/icons/global/WhatsAppSVG.svg?react";
import EmailSVG from "@/shared/assets/icons/global/EmailSVG.svg?react";
import { Button } from "@/shared/ui-kit/Button";
import {
  mobile_mediaQuery_width,
  tablet_smaller_mediaQuery_width,
} from "@/shared/const/global";

export const OurSocials: React.FC = memo((): React.JSX.Element => {
  return (
    <Flex
      width="100"
      direction="column"
      justify="between"
      className={styles.OurSocials}
    >
      <Flex
        width={tablet_smaller_mediaQuery_width.matches ? "100" : "90"}
        direction="column"
        gap={tablet_smaller_mediaQuery_width.matches ? "5" : "10"}
      >
        <h5 className={styles.OurSocials__caption}>Наши соц.cети</h5>

        <p className={styles.OurSocials__desc}>
          Не забудьте следить за нами в соцсетях для полезных обновлений!
        </p>
      </Flex>

      <Flex width="100" direction="column" gap="5">
        <Button
          className={styles.OurSocials__button}
          themes={["withMoreDarkBG", "maxWidth"]}
        >
          <a
            className={styles.WhyWe__block__marketing__button}
            href="https://t.me/Agent_Traffic23"
            target="_blank"
          >
            <Flex gap={mobile_mediaQuery_width.matches ? "5" : "10"}>
              <TelegramSVG />
              Telegram
            </Flex>
          </a>
        </Button>

        <Button
          className={styles.OurSocials__button}
          themes={["withMoreDarkBG", "maxWidth"]}
        >
          <a
            className={styles.WhyWe__block__marketing__button}
            href="tel:+79213299965"
            target="_blank"
          >
            <Flex gap={mobile_mediaQuery_width.matches ? "5" : "10"}>
              <WhatsAppSVG />
              WhatsApp
            </Flex>
          </a>
        </Button>

        <Button
          className={styles.OurSocials__button}
          themes={["withMoreDarkBG", "maxWidth"]}
        >
          <a
            className={styles.WhyWe__block__marketing__button}
            href="mailto: traffic_krd23@mail.ru"
            target="_blank"
          >
            <Flex gap={mobile_mediaQuery_width.matches ? "5" : "10"}>
              <EmailSVG />
              E-mail
            </Flex>
          </a>
        </Button>
      </Flex>
    </Flex>
  );
});
