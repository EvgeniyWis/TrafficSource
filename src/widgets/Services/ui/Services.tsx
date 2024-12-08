import styles from "./Services.module.scss";
import { memo } from "react";

export const Services: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.Services}>
      <h2 className={styles.Services__caption}>НАШИ УСЛУГИ</h2>
    </div>
  );
});
