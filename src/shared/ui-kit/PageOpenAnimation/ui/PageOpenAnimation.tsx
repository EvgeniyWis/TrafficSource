import {
  transitionDurationDefault,
  transitionDurationMedium,
} from "@/shared/const/global";
import styles from "./PageOpenAnimation.module.scss";
import { memo, useEffect, useRef, useState } from "react";
import { PortalElement } from "@/shared/utils/PortalElement";

export const PageOpenAnimation: React.FC = memo((): React.JSX.Element => {
  // Убирание анимации открытия страницы
  const [isShowAnim, setIsShowAnim] = useState(true);
  const [isShowComp, setIsShowComp] = useState(true);
  const ShowAnimTimeout = useRef<NodeJS.Timeout>();
  const ShowCompTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ShowAnimTimeout.current = setTimeout(() => {
      setIsShowAnim(false);

      ShowCompTimeout.current = setTimeout(() => {
        setIsShowComp(false);
      }, transitionDurationMedium);
    }, transitionDurationDefault);

    return () => {
      clearTimeout(ShowAnimTimeout.current);
      clearTimeout(ShowCompTimeout.current);
    };
  }, []);

  return PortalElement({
    children: (
      <>
        {isShowComp && (
          <div
            className={`${styles.PageOpenAnimation} ${isShowAnim ? styles.PageOpenAnimation__show : ""}`}
          >
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
            <div className={styles.PageOpenAnimation__bar}></div>
          </div>
        )}
      </>
    ),
  });
});

PageOpenAnimation.displayName = "PageOpenAnimation";
