import { Flex } from "@/shared/lib/Stack";
import styles from "./MainBlock.module.scss";
import { lazy, memo, Suspense, useContext, useEffect } from "react";
import { MainPageContext } from "@/pages/MainPage";
import {
  mobileMediaQueryWidth,
  tabletSmallerMediaQueryWidth,
} from "@/shared/const/global";
import { randomIntFromInterval } from "@/shared/utils/randomIntFromInterval";

const Spline = lazy(() => import("@splinetool/react-spline"));

export const MainBlock: React.FC = memo((): React.JSX.Element => {
  // Реализация эффекта при наведении на категории
  const categoryHover = (event: MouseEvent, category: Element) => {
    const rect = category.getBoundingClientRect();

    const elementRadius = 70;

    const isNear =
      event.clientX >= rect.left - elementRadius &&
      event.clientX <= rect.right + elementRadius &&
      event.clientY >= rect.top - elementRadius &&
      event.clientY <= rect.bottom + elementRadius;

    if (isNear) {
      category.classList.add(styles.MainBlock__bg__category__hover);
    } else {
      category.classList.remove(styles.MainBlock__bg__category__hover);
    }
  };

  useEffect(() => {
    const categories = document.querySelectorAll(".MainBlock__bg__category");
    const intervals: NodeJS.Timeout[] = [];

    for (const category of categories) {
      if (!tabletSmallerMediaQueryWidth.matches) {
        document.addEventListener("mousemove", (event) =>
          categoryHover(event, category),
        );
      } else {
        // Реализация того, чтобы на мобилке плашки загорались автоматически
        const categoryIndex = intervals.length + 1;
        const randomInterval =
          (categoryIndex + randomIntFromInterval(1, 2)) * 1000;

        intervals.push(
          setInterval(() => {
            category.classList.add(styles.MainBlock__bg__category__hover);
          }, randomInterval),
        );

        intervals.push(
          setInterval(() => {
            category.classList.remove(styles.MainBlock__bg__category__hover);
          }, randomInterval * 2),
        );
      }
    }

    return () => {
      for (const category of categories) {
        document.removeEventListener("mousemove", (event) =>
          categoryHover(event, category),
        );
      }

      for (const interval of intervals) {
        clearInterval(interval);
      }
    };
  }, []);

  // Сфера нормальной прозрачности только, если юзер находится в главном блоке
  const { scrollPosition } = useContext(MainPageContext);

  // Оптимизация анимаций/скрытие вне видимости юзера
  const BlocksWithAnims = mobileMediaQueryWidth.matches
    ? ["MainBlock", "WhyWe"]
    : ["MainBlock", "WhyWe", "WhyWeAnchor"];
  const isAnimVisible = BlocksWithAnims.includes(scrollPosition);

  return (
    <Flex
      id="MainBlock"
      justify="center"
      direction="column"
      relative
      className={styles.MainBlock}
    >
      <Flex direction="column">
        <div className={styles.MainBlock__bg}>
          <Suspense
            fallback={
              <div
                className={styles.MainBlock__bgCircles}
                style={{ width: "100%", height: "100%", overflow: "hidden" }}
              >
                <div style={{ width: "2000px", height: "1620px" }}></div>
              </div>
            }
          >
            <Spline
              style={{
                display: isAnimVisible ? "block" : "none",
              }}
              className={`${styles.MainBlock__bgCircles} 
            ${scrollPosition === "MainBlock" ? styles.MainBlock__bgCircles__visible : ""}`}
              scene={
                mobileMediaQueryWidth.matches
                  ? "https://prod.spline.design/0mpoLPfOhbSOEkoi/scene.splinecode"
                  : "splines/CirclesAnim.splinecode"
              }
            />
          </Suspense>

          <Flex
            justify="center"
            className={`${styles.MainBlock__bg__category} MainBlock__bg__category`}
          >
            <span className={styles.MainBlock__bg__category__text}>SMM</span>
          </Flex>

          <Flex
            justify="center"
            className={`${styles.MainBlock__bg__category} MainBlock__bg__category`}
          >
            <span className={styles.MainBlock__bg__category__text}>
              WEB-DESIGN
            </span>
          </Flex>

          <Flex
            justify="center"
            className={`${styles.MainBlock__bg__category} MainBlock__bg__category`}
          >
            <span className={styles.MainBlock__bg__category__text}>DESIGN</span>
          </Flex>

          <Flex
            justify="center"
            className={`${styles.MainBlock__bg__category} MainBlock__bg__category`}
          >
            <span className={styles.MainBlock__bg__category__text}>SEO</span>
          </Flex>
        </div>
        <h1 className={styles.MainBlock__caption}>ИСТОЧНИК ТРАФФИКА</h1>

        <h2 className={styles.MainBlock__subcaption}>
          Мы - ваш инструмент в развитии бизнеса
        </h2>
      </Flex>

      <Flex
        className={styles.MainBlock__footer}
        align="end"
        width="100"
        justify="between"
      >
        <Flex
          align="start"
          gap="10"
          width={tabletSmallerMediaQueryWidth.matches ? "90" : "30"}
          className={styles.MainBlock__footer__caption}
          direction="column"
        >
          <h3 className={styles.MainBlock__footer__caption}>
            Ваш Успех — Наша Цель
          </h3>

          <p className={styles.MainBlock__footer__desc}>
            Эффективные маркетинговые стратегии, которые увеличат вашу
            клиентскую базу и повысят продажи.
          </p>
        </Flex>

        <Flex
          wrap
          justify="end"
          width="100"
          align={mobileMediaQueryWidth.matches ? "end" : "center"}
          direction={mobileMediaQueryWidth.matches ? "column" : "row"}
          gap={tabletSmallerMediaQueryWidth.matches ? "5" : "10"}
        >
          <Flex
            gap={tabletSmallerMediaQueryWidth.matches ? "5" : "10"}
            className={styles.MainBlock__footer__step}
          >
            Привлечение
          </Flex>

          <Flex
            gap={tabletSmallerMediaQueryWidth.matches ? "5" : "10"}
            className={styles.MainBlock__footer__step}
          >
            Вовлечение
          </Flex>

          <Flex
            gap={tabletSmallerMediaQueryWidth.matches ? "5" : "10"}
            className={styles.MainBlock__footer__step}
          >
            Закрытие
          </Flex>
        </Flex>
      </Flex>

      {!mobileMediaQueryWidth.matches && (
        <Suspense>
          <Spline
            style={{ display: isAnimVisible ? "block" : "none" }}
            className={`${styles.MainBlock__footer__bg} 
        ${scrollPosition === "WhyWe" ? styles.MainBlock__footer__bg__visible : ""}`}
            scene="splines/LeftLineAnim.splinecode"
          />
        </Suspense>
      )}

      {!mobileMediaQueryWidth.matches && (
        <Suspense>
          <Spline
            style={{ display: isAnimVisible ? "block" : "none" }}
            className={`${styles.MainBlock__footer__bg} 
        ${scrollPosition === "WhyWe" ? styles.MainBlock__footer__bg__visible : ""}`}
            scene="splines/RightLineAnim.splinecode"
          />
        </Suspense>
      )}

      {mobileMediaQueryWidth.matches && (
        <img
          loading="lazy"
          className={styles.MainBlock__adaptive__line}
          src="images/MainBlock/AdaptiveLine.png"
        />
      )}
    </Flex>
  );
});

MainBlock.displayName = "MainBlock";
