import { Service } from "@/entities/Service";
import { services_items } from "../model/data";
import styles from "./Services.module.scss";
import { Fragment, memo } from "react";
import { FreeConsultation } from "./FreeConsultation";
import { OurSocials } from "./OurSocials";
import { TimeToAct } from "./TimeToAct";

export const Services: React.FC = memo((): React.JSX.Element => {
  return (
    <div id="Services" className={styles.Services}>
      <h2 className={styles.Services__caption}>НАШИ УСЛУГИ</h2>

      <div className={styles.Services__items}>
        {services_items.map((service, index) => {
          return (
            <Fragment key={service.caption}>
              <Service
                icon={service.icon}
                activeIcon={service.activeIcon}
                caption={service.caption}
                desc={service.desc}
              />

              {index == 9 && <FreeConsultation />}

              {index == 20 && <OurSocials />}

              {index == services_items.length - 1 && <TimeToAct />}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
});
