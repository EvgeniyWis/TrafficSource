import { Flex } from "@/shared/lib/Stack";
import styles from "./WhyWe.module.scss";
import { memo, useContext, useRef, useState } from "react";
import SpinnedLineSVG from "@/shared/assets/icons/WhyWe/SpinnedLineSVG.svg?react";
import ScanVioletSphereSVG from "@/shared/assets/icons/WhyWe/ScanVioletSphereSVG.svg?react";
import ScanVioletSphereAdaptiveSVG from "@/shared/assets/icons/WhyWe/ScanVioletSphereAdaptiveSVG.svg?react";
import ScanArrowSVG from "@/shared/assets/icons/WhyWe/ScanArrowSVG.svg?react";
import ScanArrowAdaptiveSVG from "@/shared/assets/icons/WhyWe/ScanArrowAdaptiveSVG.svg?react";
import { MainPageContext } from "@/pages/MainPage";
import { Button } from "@/shared/ui-kit/Button";
import AnimatedNumbers from "react-animated-numbers";
import TelegramSVG from "@/shared/assets/icons/global/TelegramSVG.svg?react";
import WhatsAppSVG from "@/shared/assets/icons/global/WhatsAppSVG.svg?react";
import EmailSVG from "@/shared/assets/icons/global/EmailSVG.svg?react";
import {
  mobileSmallerMediaQueryWidth,
  tabletMediaQueryWidth,
  tabletSmallerMediaQueryWidth,
} from "@/shared/const/global";

export const WhyWe: React.FC = memo((): React.JSX.Element => {
  // Нажатие на кнопку и появление блока
  const [isBlockVisible, setIsBlockVisible] = useState(false);

  // Появление анимации линии вокруг текста
  const { scrollPosition } = useContext(MainPageContext);
  const isSpinnedLineVisible = useRef<boolean>(false);

  if (scrollPosition === "WhyWe" && !isSpinnedLineVisible.current) {
    isSpinnedLineVisible.current = true;
  }

  return (
    <Flex id="WhyWe" relative direction="column" className={styles.WhyWe}>
      <h2 className={styles.WhyWe__caption}>
        ПОЧЕМУ ВЫ <br /> ВЫБЕРЕТЕ НАС?
        {isSpinnedLineVisible.current && (
          <SpinnedLineSVG className={styles.WhyWe__caption__line} />
        )}
      </h2>

      <Flex
        className={`${styles.WhyWe__why} ${isBlockVisible ? styles.WhyWe__why__disappear : ""}`}
        gap="20"
        direction="column"
      >
        <Button
          onClick={() => setIsBlockVisible(true)}
          themes={
            isBlockVisible ? ["big-x-padding"] : ["withBG", "big-x-padding"]
          }
        >
          Почему?
        </Button>

        <p className={styles.WhyWe__why__text}>
          *нажимай для получения информации
        </p>
      </Flex>

      {isBlockVisible && (
        <Flex
          className={styles.WhyWe__block}
          width="100"
          align="start"
          justify="between"
          gap={tabletSmallerMediaQueryWidth.matches ? "30" : "50"}
          direction={tabletSmallerMediaQueryWidth.matches ? "column" : "row"}
        >
          <Flex
            align="start"
            width={tabletSmallerMediaQueryWidth.matches ? "100" : "25"}
            gap="15"
            direction="column"
          >
            <Flex
              className={styles.WhyWe__block__text}
              align="start"
              gap="15"
              direction="column"
            >
              <h5 className={styles.WhyWe__block__caption}>
                Сделайте свой бизнес успешным!
              </h5>

              <p className={styles.WhyWe__block__desc}>
                Наше маркетинговое агентство <strong>с 2-летним опытом </strong>
                предлагает проверенные методы и инновационные подходы. Мы готовы
                работать над вашим проектом, чтобы добиться максимальных
                результатов.
                <br />
                <strong>Давайте расти вместе!</strong>
              </p>
            </Flex>

            <Flex align="start" direction="column">
              <Flex className={styles.WhyWe__block__strategyNumber}>
                <AnimatedNumbers
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 0.3,
                    delay: 0.1,
                  })}
                  animateToNumber={50}
                />
                +
              </Flex>

              <p className={styles.WhyWe__block__strategyDesc}>
                Успешных маркетинговых и рекламных стратегий
              </p>
            </Flex>
          </Flex>

          <Flex
            className={styles.WhyWe__block__marketing}
            justify="between"
            align={tabletSmallerMediaQueryWidth.matches ? "center" : "start"}
            width={tabletSmallerMediaQueryWidth.matches ? "100" : "75"}
            gap="10"
            direction={tabletSmallerMediaQueryWidth.matches ? "column" : "row"}
          >
            <Flex
              width={
                tabletSmallerMediaQueryWidth.matches
                  ? "100"
                  : tabletMediaQueryWidth.matches
                    ? "50"
                    : "65"
              }
              maxHeight
              align="start"
              direction="column"
              justify="between"
            >
              <Flex width="100" justify="between">
                <Flex
                  direction="column"
                  justify="between"
                  gap={tabletSmallerMediaQueryWidth.matches ? "10" : "20"}
                  width={!tabletSmallerMediaQueryWidth.matches ? "100" : "80"}
                  align="start"
                >
                  <h2 className={styles.WhyWe__block__marketing__caption}>
                    ЭФФЕКТИВНЫЙ МАРКЕТИНГ
                  </h2>

                  <p className={styles.WhyWe__block__marketing__desc}>
                    Получите бесплатную консультацию и узнайте, как привлечь
                    больше клиентов. Не забудьте следить за нами в соцсетях для
                    полезных обновлений!
                  </p>
                </Flex>

                {tabletSmallerMediaQueryWidth.matches && (
                  <Flex direction="column">
                    <Flex
                      className={styles.WhyWe__block__marketing__scan}
                      align="center"
                      relative
                    >
                      <ScanVioletSphereAdaptiveSVG />
                    </Flex>

                    <ScanArrowAdaptiveSVG
                      className={styles.WhyWe__block__marketing__scan__arrow}
                    />
                  </Flex>
                )}
              </Flex>

              <Flex width="100" gap="10" direction="column">
                <Button themes={["withMoreDarkBG", "maxWidth"]}>
                  <a
                    className={styles.WhyWe__block__marketing__button}
                    href="https://t.me/Agent_Traffic23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Flex gap="10">
                      <TelegramSVG />
                      Telegram
                    </Flex>
                  </a>
                </Button>

                <Flex
                  direction={!tabletMediaQueryWidth.matches ? "row" : "column"}
                  width="100"
                  gap="10"
                >
                  <Button themes={["withMoreDarkBG", "maxWidth"]}>
                    <a
                      className={styles.WhyWe__block__marketing__button}
                      href="tel:+79213299965"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Flex gap="10">
                        <WhatsAppSVG />
                        WhatsApp
                      </Flex>
                    </a>
                  </Button>

                  <Button themes={["withMoreDarkBG", "maxWidth"]}>
                    <a
                      className={styles.WhyWe__block__marketing__button}
                      href="mailto: traffic_krd23@mail.ru"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Flex gap="10">
                        <EmailSVG />
                        E-mail
                      </Flex>
                    </a>
                  </Button>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              width={
                tabletSmallerMediaQueryWidth.matches
                  ? "100"
                  : tabletMediaQueryWidth.matches
                    ? "50"
                    : "35"
              }
              justify="between"
              align="end"
              direction="column"
            >
              {!tabletSmallerMediaQueryWidth.matches && (
                <Flex direction="column">
                  <Flex
                    className={styles.WhyWe__block__marketing__scan}
                    align="center"
                    relative
                  >
                    <ScanVioletSphereSVG />
                  </Flex>

                  <ScanArrowSVG
                    className={styles.WhyWe__block__marketing__scan__arrow}
                  />
                </Flex>
              )}

              <Flex
                className={styles.WhyWe__block__marketing__scan__qrs}
                justify={
                  !tabletSmallerMediaQueryWidth.matches ? "end" : "between"
                }
                direction={
                  mobileSmallerMediaQueryWidth.matches ? "column" : "row"
                }
                gap={mobileSmallerMediaQueryWidth.matches ? "20" : "5"}
                width="100"
              >
                <img src="images/WhyWe/WhatsAppQR.webp" alt="+79213299965" />
                <img
                  src="images/WhyWe/TelegramQR.webp"
                  alt="https://t.me/Agent_Traffic23"
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}

      <span className={styles.WhyWe__anchor} id="WhyWeAnchor"></span>
    </Flex>
  );
});

WhyWe.displayName = "WhyWe";
