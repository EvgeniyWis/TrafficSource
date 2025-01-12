import styles from "./Logo.module.scss";
import { memo } from "react";
import LogoSVG from "@/shared/assets/icons/global/LogoSVG.svg?react";

export const Logo: React.FC = memo((): React.JSX.Element => {
  return <LogoSVG className={styles.Logo} />;
});

Logo.displayName = "Logo";
