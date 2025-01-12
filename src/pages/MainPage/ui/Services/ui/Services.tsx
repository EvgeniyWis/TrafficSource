import { Service } from "@/entities/Service";
import { navSections, servicesItems } from "../model/data";
import styles from "./Services.module.scss";
import { Fragment, memo, useState } from "react";
import { FreeConsultation } from "./FreeConsultation";
import { OurSocials } from "./OurSocials";
import { TimeToAct } from "./TimeToAct";
import { tabletSmallerMediaQueryWidth } from "@/shared/const/global";
import { Flex } from "@/shared/lib/Stack";
import { NavSections } from "../model/types";

export const Services: React.FC = memo((): React.JSX.Element => {
  // Переключение разделов в навигации мобильной версии
  const [navSection, setNavSection] = useState<NavSections>(navSections[0]);

  return (
    <div id="Services" className={styles.Services}>
      <h2 className={styles.Services__caption}>НАШИ УСЛУГИ</h2>

      {tabletSmallerMediaQueryWidth.matches && (
        <Flex className={styles.Services__nav} width="100" justify="between">
          {navSections.map((section) => (
            <span
              onClick={() => setNavSection(section)}
              key={section}
              className={`${styles.Services__nav__item} 
          ${navSection === section ? styles.Services__nav__item__active : ""}`}
            >
              {section}
            </span>
          ))}
        </Flex>
      )}

      <div className={styles.Services__items}>
        {servicesItems.map((service, index) => {
          return (
            <Fragment key={service.caption}>
              {(service.section === navSection ||
                !tabletSmallerMediaQueryWidth.matches) && (
                <Service
                  icon={service.icon}
                  activeIcon={service.activeIcon}
                  caption={service.caption}
                  desc={service.desc}
                  section={service.section}
                />
              )}

              {!tabletSmallerMediaQueryWidth.matches && (
                <>
                  {index === 9 && <FreeConsultation />}

                  {index === 20 && <OurSocials />}

                  {index === servicesItems.length - 1 && <TimeToAct />}
                </>
              )}
            </Fragment>
          );
        })}

        {tabletSmallerMediaQueryWidth.matches && (
          <>
            {navSection === "Основные" && <OurSocials />}

            {navSection === "Второй раздел" && <FreeConsultation />}

            {navSection === "Третий раздел" && <TimeToAct />}
          </>
        )}
      </div>
    </div>
  );
});

Services.displayName = "Services";
