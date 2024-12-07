import styles from "./MainBlock.module.scss";
import { memo } from "react";

export const MainBlock: React.FC = memo((): React.JSX.Element => {
  return <div className={styles.MainBlock}></div>;
});
