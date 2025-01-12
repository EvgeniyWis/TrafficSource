import styles from "./Header.module.scss";
import { memo, useState } from "react";
import { Flex } from "@/shared/lib/Stack";
import WhatsAppSVG from "@/shared/assets/icons/global/WhatsAppSVG.svg?react";
import TelegramCircleSVG from "@/shared/assets/icons/global/TelegramCircleSVG.svg?react";
import { Button } from "@/shared/ui-kit/Button";
import { Logo } from "@/shared/ui-kit/Logo";
import { tabletSmallerMediaQueryWidth } from "@/shared/const/global";
import AdaptiveBurgerIconSVG from "@/shared/assets/icons/Header/AdaptiveBurgerIconSVG.svg?react";
import AdaptiveBurgerMenuSeparatorSVG from "@/shared/assets/icons/Header/AdaptiveBurgerMenuSeparatorSVG.svg?react";

export const Header: React.FC = memo((): React.JSX.Element => {
  // Открытие бургер-меню
  const [burgerMenuIsOpened, setBurgerMenuIsOpened] = useState<boolean>(false);

  return (
    <header className={styles.Header}>
      <Flex gap={!tabletSmallerMediaQueryWidth.matches ? "15" : "10"}>
        <Logo />

        <h2 className={styles.Header__caption}>
          ИСТОЧНИК
          <br />
          ТРАФФИКА
        </h2>
      </Flex>

      {!tabletSmallerMediaQueryWidth.matches && (
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
      )}

      {!tabletSmallerMediaQueryWidth.matches && (
        <Flex className={styles.Header__contacts} gap="15">
          <a
            className={styles.Header__contact}
            target="_blank"
            href="tel:+79213299965"
            rel="noreferrer"
          >
            <WhatsAppSVG />
          </a>

          <a
            className={styles.Header__contact}
            target="_blank"
            href="https://t.me/Agent_Traffic23"
            rel="noreferrer"
          >
            <TelegramCircleSVG />
          </a>

          <Button>
            <a
              target="_blank"
              href="https://t.me/Agent_Traffic23"
              rel="noreferrer"
            >
              Бесплатная консультация
            </a>
          </Button>
        </Flex>
      )}

      {tabletSmallerMediaQueryWidth.matches && (
        <Flex justify="end" relative>
          <Flex
            className={`${styles.Header__burger}
            ${burgerMenuIsOpened ? styles.Header__burger__active : ""}`}
            onClick={() => setBurgerMenuIsOpened(!burgerMenuIsOpened)}
          >
            <AdaptiveBurgerIconSVG />
          </Flex>

          <Flex
            className={`${styles.Header__burger__itemsWrapper} 
          ${burgerMenuIsOpened ? styles.Header__burger__itemsWrapper__active : ""}`}
          >
            <Flex
              className={styles.Header__burger__items}
              width="100"
              direction="column"
            >
              <a
                onClick={() =>
                  document.getElementById("WhyWe")!.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className={styles.Header__navList__item}
              >
                О нас
              </a>

              <AdaptiveBurgerMenuSeparatorSVG />

              <a
                onClick={() =>
                  document.getElementById("Services")!.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className={styles.Header__navList__item}
              >
                Услуги
              </a>

              <AdaptiveBurgerMenuSeparatorSVG />

              <a
                onClick={() =>
                  document.getElementById("Footer")!.scrollIntoView({
                    behavior: "smooth",
                  })
                }
                className={styles.Header__navList__item}
              >
                Контакты
              </a>

              <AdaptiveBurgerMenuSeparatorSVG />

              <Flex className={styles.Header__contacts} gap="5">
                <a
                  className={styles.Header__contact}
                  target="_blank"
                  href="tel:+79213299965"
                  rel="noreferrer"
                >
                  <WhatsAppSVG />
                </a>

                <a
                  className={styles.Header__contact}
                  target="_blank"
                  href="https://t.me/Agent_Traffic23"
                  rel="noreferrer"
                >
                  <TelegramCircleSVG />
                </a>
              </Flex>

              <Button>
                <a
                  target="_blank"
                  href="https://t.me/Agent_Traffic23"
                  rel="noreferrer"
                >
                  Бесплатная консультация
                </a>
              </Button>
            </Flex>

            <div className={styles.Header__burger__items__bg}></div>
          </Flex>
        </Flex>
      )}
    </header>
  );
});

Header.displayName = "Header";
