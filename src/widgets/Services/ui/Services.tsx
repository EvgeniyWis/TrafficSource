import { Service } from "@/entities/Service";
import { nav_sections, services_items } from "../model/data";
import styles from "./Services.module.scss";
import { Fragment, memo, useState } from "react";
import { FreeConsultation } from "./FreeConsultation";
import { OurSocials } from "./OurSocials";
import { TimeToAct } from "./TimeToAct";
import { tablet_smaller_mediaQuery_width } from "@/shared/const/global";
import { Flex } from "@/shared/lib/Stack";
import { NavSections } from "../model/types";

export const Services: React.FC = memo((): React.JSX.Element => {
  // Переключение разделов в навигации мобильной версии
  const [navSection, setNavSection] = useState<NavSections>(nav_sections[0]);

  return (
    <div id="Services" className={styles.Services}>
      <h2 className={styles.Services__caption}>НАШИ УСЛУГИ</h2>

      {tablet_smaller_mediaQuery_width.matches && (
        <Flex className={styles.Services__nav} width="100" justify="between">
          {nav_sections.map((section) => (
            <span
              onClick={() => setNavSection(section)}
              key={section}
              className={`${styles.Services__nav__item} 
          ${navSection == section ? styles.Services__nav__item__active : ""}`}
            >
              {section}
            </span>
          ))}
        </Flex>
      )}

      <div className={styles.Services__items}>
        {services_items.map((service, index) => {
          return (
            <Fragment key={service.caption}>
              {(service.section == navSection ||
                !tablet_smaller_mediaQuery_width.matches) && (
                <Service
                  icon={service.icon}
                  activeIcon={service.activeIcon}
                  caption={service.caption}
                  desc={service.desc}
                  section={service.section}
                />
              )}

              {!tablet_smaller_mediaQuery_width.matches && (
                <>
                  {index == 9 && <FreeConsultation />}

                  {index == 20 && <OurSocials />}

                  {index == services_items.length - 1 && <TimeToAct />}
                </>
              )}
            </Fragment>
          );
        })}

        {tablet_smaller_mediaQuery_width.matches && (
          <>
            {navSection == "Основные" && <OurSocials />}

            {navSection == "Второй раздел" && <FreeConsultation />}

            {navSection == "Третий раздел" && <TimeToAct />}
          </>
        )}
      </div>
    </div>
  );
});
