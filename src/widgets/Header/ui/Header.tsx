import styles from "./Header.module.scss";
import { memo } from "react";
import { Flex } from "@/shared/lib/Stack";
import WhatsAppSVG from "@/shared/assets/icons/global/WhatsAppSVG.svg?react";
import TelegramCircleSVG from "@/shared/assets/icons/global/TelegramCircleSVG.svg?react";
import { Button } from "@/shared/ui-kit/Button";
import { Logo } from "@/shared/ui-kit/Logo";

export const Header: React.FC = memo((): React.JSX.Element => {
  return (
    <header className={styles.Header}>
      <Flex gap="15">
        <Logo />

        <h2 className={styles.Header__caption}>
          ИСТОЧНИК
          <br />
          ТРАФФИКА
        </h2>
      </Flex>

      <nav>
        <ul className={styles.Header__navList}>
          <li
            onClick={() =>
              document.getElementById("WhyWe")!.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={styles.Header__navList__item}
          >
            О нас
          </li>

          <li
            onClick={() =>
              document.getElementById("Services")!.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={styles.Header__navList__item}
          >
            Услуги
          </li>

          <li
            onClick={() =>
              document.getElementById("Footer")!.scrollIntoView({
                behavior: "smooth",
              })
            }
            className={styles.Header__navList__item}
          >
            Контакты
          </li>
        </ul>
      </nav>

      <Flex gap="15">
        <a
          className={styles.Header__contact}
          target="_blank"
          href="tel:+79213299965"
        >
          <WhatsAppSVG />
        </a>

        <a
          className={styles.Header__contact}
          target="_blank"
          href="https://t.me/Agent_Traffic23"
        >
          <TelegramCircleSVG />
        </a>

        <Button>
          <a target="_blank" href="https://t.me/Agent_Traffic23">
            Бесплатная консультация
          </a>
        </Button>
      </Flex>
    </header>
  );
});
