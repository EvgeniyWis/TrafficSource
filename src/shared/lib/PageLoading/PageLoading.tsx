import styles from "./PageLoading.module.scss";
import { memo } from "react";
import { PageLoadingComponent } from "./PageLoadingComponent/PageLoadingComponent";

export const PageLoading: React.FC = memo((): React.JSX.Element => {
  return (
    <div className={styles.PageLoading}>
      <PageLoadingComponent />
    </div>
  );
});
PageLoading.displayName = "PageLoading";
