import { Flex } from "@/shared/lib/Stack";
import styles from "./Footer.module.scss";
import { memo } from "react";
import FooterLogoSVG from "@/shared/assets/icons/Footer/FooterLogoSVG.svg?react";
import FooterLogoAdaptiveSVG from "@/shared/assets/icons/Footer/FooterLogoAdaptiveSVG.svg?react";
import WhatsAppSVG from "@/shared/assets/icons/global/WhatsAppSVG.svg?react";
import TelegramCircleSVG from "@/shared/assets/icons/global/TelegramCircleSVG.svg?react";
import EmailCircleSVG from "@/shared/assets/icons/global/EmailCircleSVG.svg?react";
import { mobileMediaQueryWidth } from "@/shared/const/global";

export const Footer: React.FC = memo((): React.JSX.Element => {
  return (
    <footer id="Footer" className={styles.Footer}>
      <Flex
        gap={mobileMediaQueryWidth.matches ? "20" : "0"}
        align="start"
        maxHeight
        justify="between"
        direction="column"
      >
        <Flex gap={mobileMediaQueryWidth.matches ? "10" : "20"}>
          {mobileMediaQueryWidth.matches ? (
            <FooterLogoAdaptiveSVG />
          ) : (
            <FooterLogoSVG />
          )}

          <h2 className={styles.Footer__caption}>
            ИСТОЧНИК
            <br />
            ТРАФФИКА
          </h2>
        </Flex>

        <Flex
          direction={mobileMediaQueryWidth.matches ? "column" : "row"}
          gap={mobileMediaQueryWidth.matches ? "30" : "50"}
        >
          <Flex
            align="start"
            gap={mobileMediaQueryWidth.matches ? "5" : "15"}
            direction="column"
          >
            <h6 className={styles.Footer__subcaption}>Контакты</h6>

            <Flex
              align="start"
              gap={mobileMediaQueryWidth.matches ? "0" : "10"}
              direction="column"
            >
              <a
                className={styles.Footer__link}
                href="mailto: traffic_krd23@mail.ru"
                target="_blank"
                rel="noreferrer"
              >
                traffic_krd23@mail.ru
              </a>

              <a
                className={styles.Footer__link}
                href="tel: +79213299965"
                target="_blank"
                rel="noreferrer"
              >
                +7 921 329 99-65
              </a>
            </Flex>
          </Flex>

          <Flex
            align="start"
            gap={mobileMediaQueryWidth.matches ? "10" : "15"}
            direction="column"
          >
            <h6 className={styles.Footer__subcaption}>Социальные сети</h6>

            <Flex gap={mobileMediaQueryWidth.matches ? "15" : "20"}>
              <a
                className={styles.Footer__contact}
                target="_blank"
                href="https://t.me/Agent_Traffic23"
                rel="noreferrer"
              >
                <TelegramCircleSVG />
              </a>

              <a
                className={styles.Footer__contact}
                target="_blank"
                href="tel:+79213299965"
                rel="noreferrer"
              >
                <WhatsAppSVG />
              </a>

              <a
                className={styles.Footer__contact}
                target="_blank"
                href="mailto: traffic_krd23@mail.ru"
                rel="noreferrer"
              >
                <EmailCircleSVG />
              </a>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" maxHeight align="end" gap="20">
        <Flex align="end" className={styles.Footer__rights} direction="column">
          <span>© 2022-2024 «ИСТОЧНИК ТРАФФИКА».</span>

          <span>Все права защищены.</span>
        </Flex>

        <span className={styles.Footer__legal}>Юридическая информация</span>

        <Flex align="end" className={styles.Footer__legal} direction="column">
          <span>ИП Гусейнов Я. А.</span>

          <span>ИНН: 471511779391</span>

          <span>ОГРН: 324237500466545</span>
        </Flex>
      </Flex>
    </footer>
  );
});

Footer.displayName = "Footer";
