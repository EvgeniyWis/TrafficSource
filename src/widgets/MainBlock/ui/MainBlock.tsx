import { Flex } from "@/shared/lib/Stack";
import styles from "./MainBlock.module.scss";
import { memo, useEffect } from "react";
import Spline from "@splinetool/react-spline";

export const MainBlock: React.FC = memo((): React.JSX.Element => {
  // Реализация эффекта при наведении на категории
  const categoryHover = (event: MouseEvent, category: Element) => {
    const rect = category.getBoundingClientRect();

    const elementRadius = 80;

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

    for (const category of categories) {
      document.addEventListener("mousemove", (event) =>
        categoryHover(event, category),
      );
    }

    return () => {
      for (const category of categories) {
        document.removeEventListener("mousemove", (event) =>
          categoryHover(event, category),
        );
      }
    };
  }, []);

  return (
    <Flex justify="center" direction="column" className={styles.MainBlock}>
      <Flex direction="column">
        <div className={styles.MainBlock__bg}>
          <Spline
            className={styles.MainBlock__bgCircles}
            scene="https://prod.spline.design/UpP8pxQCMjK5J5QT/scene.splinecode"
          />

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
    </Flex>
  );
});
