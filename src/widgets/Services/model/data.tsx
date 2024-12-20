import { ServiceProps } from "@/entities/Service";
import AdsAfishaSVG from "@/shared/assets/icons/Services/AdsAfishaSVG.svg?react";
import AdsBannersSVG from "@/shared/assets/icons/Services/AdsBannersSVG.svg?react";
import AdsBuyingSVG from "@/shared/assets/icons/Services/AdsBuyingSVG.svg?react";
import AdsCompanySVG from "@/shared/assets/icons/Services/AdsCompanySVG.svg?react";
import BotSVG from "@/shared/assets/icons/Services/BotSVG.svg?react";
import BrandDevelopSVG from "@/shared/assets/icons/Services/BrandDevelopSVG.svg?react";
import ContentPlanDevelopSVG from "@/shared/assets/icons/Services/ContentPlanDevelopSVG.svg?react";
import CreativeSVG from "@/shared/assets/icons/Services/CreativeSVG.svg?react";
import CustomersSearchSVG from "@/shared/assets/icons/Services/CustomersSearchSVG.svg?react";
import FullOurSocialSVG from "@/shared/assets/icons/Services/FullOurSocialSVG.svg?react";
import InstagramDevelopSVG from "@/shared/assets/icons/Services/InstagramDevelopSVG.svg?react";
import MadeCustomersSystemSVG from "@/shared/assets/icons/Services/MadeCustomersSystemSVG.svg?react";
import MarketingEmailSVG from "@/shared/assets/icons/Services/MarketingEmailSVG.svg?react";
import MarketingSVG from "@/shared/assets/icons/Services/MarketingSVG.svg?react";
import PlanTargetingAdsSVG from "@/shared/assets/icons/Services/PlanTargetingAdsSVG.svg?react";
import PostsTextsSVG from "@/shared/assets/icons/Services/PostsTextsSVG.svg?react";
import ProductionSVG from "@/shared/assets/icons/Services/ProductionSVG.svg?react";
import ReBrendSVG from "@/shared/assets/icons/Services/ReBrendSVG.svg?react";
import RegionExisitingSVG from "@/shared/assets/icons/Services/RegionExisitingSVG.svg?react";
import ScriptsSVG from "@/shared/assets/icons/Services/ScriptsSVG.svg?react";
import SEODevelopSVG from "@/shared/assets/icons/Services/SEODevelopSVG.svg?react";
import SocialDevelopSVG from "@/shared/assets/icons/Services/SocialDevelopSVG.svg?react";
import StrategyProductsSVG from "@/shared/assets/icons/Services/StrategyProductsSVG.svg?react";
import TelegramDevelopSVG from "@/shared/assets/icons/Services/TelegramDevelopSVG.svg?react";
import TiktokDevelopSVG from "@/shared/assets/icons/Services/TiktokDevelopSVG.svg?react";
import TrafficSVG from "@/shared/assets/icons/Services/TrafficSVG.svg?react";
import VKDevelopSVG from "@/shared/assets/icons/Services/VKDevelopSVG.svg?react";
import VoronkaSVG from "@/shared/assets/icons/Services/VoronkaSVG.svg?react";
import WebSiteDevelopSVG from "@/shared/assets/icons/Services/WebSiteDevelopSVG.svg?react";

import AdsAfishaActiveSVG from "@/shared/assets/icons/Services/AdsAfishaActiveSVG.svg?react";
import AdsBannersActiveSVG from "@/shared/assets/icons/Services/AdsBannersActiveSVG.svg?react";
import AdsBuyingActiveSVG from "@/shared/assets/icons/Services/AdsBuyingActiveSVG.svg?react";
import AdsCompanyActiveSVG from "@/shared/assets/icons/Services/AdsCompanyActiveSVG.svg?react";
import BotActiveSVG from "@/shared/assets/icons/Services/BotActiveSVG.svg?react";
import BrandDevelopActiveSVG from "@/shared/assets/icons/Services/BrandDevelopActiveSVG.svg?react";
import ContentPlanDevelopActiveSVG from "@/shared/assets/icons/Services/ContentPlanDevelopActiveSVG.svg?react";
import CreativeActiveSVG from "@/shared/assets/icons/Services/CreativeActiveSVG.svg?react";
import CustomersSearchActiveSVG from "@/shared/assets/icons/Services/CustomersSearchActiveSVG.svg?react";
import FullOurSocialActiveSVG from "@/shared/assets/icons/Services/FullOurSocialActiveSVG.svg?react";
import InstagramDevelopActiveSVG from "@/shared/assets/icons/Services/InstagramDevelopActiveSVG.svg?react";
import MadeCustomersSystemActiveSVG from "@/shared/assets/icons/Services/MadeCustomersSystemActiveSVG.svg?react";
import MarketingEmailActiveSVG from "@/shared/assets/icons/Services/MarketingEmailActiveSVG.svg?react";
import MarketingActiveSVG from "@/shared/assets/icons/Services/MarketingActiveSVG.svg?react";
import PlanTargetingAdsActiveSVG from "@/shared/assets/icons/Services/PlanTargetingAdsActiveSVG.svg?react";
import PostsTextsActiveSVG from "@/shared/assets/icons/Services/PostsTextsActiveSVG.svg?react";
import ProductionActiveSVG from "@/shared/assets/icons/Services/ProductionActiveSVG.svg?react";
import ReBrendActiveSVG from "@/shared/assets/icons/Services/ReBrendActiveSVG.svg?react";
import RegionExisitingActiveSVG from "@/shared/assets/icons/Services/RegionExisitingActiveSVG.svg?react";
import ScriptsActiveSVG from "@/shared/assets/icons/Services/ScriptsActiveSVG.svg?react";
import SEODevelopActiveSVG from "@/shared/assets/icons/Services/SEODevelopActiveSVG.svg?react";
import SocialDevelopActiveSVG from "@/shared/assets/icons/Services/SocialDevelopActiveSVG.svg?react";
import StrategyProductsActiveSVG from "@/shared/assets/icons/Services/StrategyProductsActiveSVG.svg?react";
import TelegramDevelopActiveSVG from "@/shared/assets/icons/Services/TelegramDevelopActiveSVG.svg?react";
import TiktokDevelopActiveSVG from "@/shared/assets/icons/Services/TiktokDevelopActiveSVG.svg?react";
import TrafficActiveSVG from "@/shared/assets/icons/Services/TrafficActiveSVG.svg?react";
import VKDevelopActiveSVG from "@/shared/assets/icons/Services/VKDevelopActiveSVG.svg?react";
import VoronkaActiveSVG from "@/shared/assets/icons/Services/VoronkaActiveSVG.svg?react";
import WebSiteDevelopActiveSVG from "@/shared/assets/icons/Services/WebSiteDevelopActiveSVG.svg?react";
import { NavSections } from "./types";

// Список услуг
export const services_items: ServiceProps[] = [
  {
    icon: <CreativeSVG />,
    activeIcon: <CreativeActiveSVG />,
    caption: "Разработка завлекающего креатива",
    desc: "Ваша идея — наш креатив! Доверьтесь профессионалам, чтобы создать завлекающий контент, который будет продавать.",
    section: "Основные",
  },

  {
    icon: <PostsTextsSVG />,
    activeIcon: <PostsTextsActiveSVG />,
    caption: "Продающие текста на посты",
    desc: "Эффективные посты — залог успеха! Позвольте нам создать креативный контент, который привлечет внимание и увеличит ваши продажи.",
    section: "Третий раздел",
  },

  {
    icon: <AdsBannersSVG />,
    activeIcon: <AdsBannersActiveSVG />,
    caption: "Разработка рекламных баннеров",
    desc: "Яркие баннеры, которые привлекают! Мы создаем рекламные баннеры, способные захватить внимание вашей аудитории и увеличить конверсии.",
    section: "Основные",
  },

  {
    icon: <AdsAfishaSVG />,
    activeIcon: <AdsAfishaActiveSVG />,
    caption: "Разработка рекламных афиш",
    desc: "Ваше событие — наша афиша! Мы создаем стильные и информативные рекламные афиши, которые выделят ваше мероприятие и повысят интерес к нему.",
    section: "Основные",
  },

  {
    icon: <SocialDevelopSVG />,
    activeIcon: <SocialDevelopActiveSVG />,
    caption: "Комплексное развитие соц.сетей",
    desc: "Полное развитие ваших соц.сетей! Мы создадим стратегию, которая увеличит вашу аудиторию, повысит вовлеченность и сделает ваш бренд заметным.",
    section: "Основные",
  },

  {
    icon: <TrafficSVG />,
    activeIcon: <TrafficActiveSVG />,
    caption: "Привлечение трафика в бизнес ONLINE / OFFLINE, по гео",
    desc: "Привлечение трафика для вашего бизнеса! Мы эффективно увеличим поток клиентов как в онлайн, так и в оффлайн, используя гео-таргетинг для максимальной эффективности.",
    section: "Второй раздел",
  },

  {
    icon: <BotSVG />,
    activeIcon: <BotActiveSVG />,
    caption: "Разработка ботов и WEB- приложений на Telegram и VK",
    desc: "Оптимизация бизнеса с помощью технологий! Наши боты и веб-приложения на Telegram и VK помогут вам автоматизировать процессы и привлекать больше клиентов.",
    section: "Основные",
  },

  {
    icon: <WebSiteDevelopSVG />,
    activeIcon: <WebSiteDevelopActiveSVG />,
    caption: "Разработка дизайнерских анимированных сайтов",
    desc: "Привлекай и удерживай клиентов! Дизайнерские анимированные сайты увеличивают вовлеченность и делают ваш бизнес заметным на фоне конкурентов.",
    section: "Основные",
  },

  {
    icon: <MarketingSVG />,
    activeIcon: <MarketingActiveSVG />,
    caption: "Аналитика маркетинговой кампании",
    desc: "Достигайте целей с уверенностью! Наша команда разработает индивидуальный план маркетинговой кампании, учитывающий все нюансы вашего бизнеса и рынка.",
    section: "Основные",
  },

  {
    icon: <AdsCompanySVG />,
    activeIcon: <AdsCompanyActiveSVG />,
    caption: "Создание рекламной кампании",
    desc: "Зажгите интерес к вашему бизнесу! Мы создаем эффективные рекламные кампании, которые привлекают внимание и повышают узнаваемость вашего бренда.",
    section: "Основные",
  },

  {
    icon: <ReBrendSVG />,
    activeIcon: <ReBrendActiveSVG />,
    caption: "Ребрендинг уже существующих рекламных креативов",
    desc: "Второе дыхание для ваших креативов! Дайте новую жизнь своим рекламным материалам с помощью нашего профессионального подхода к ребрендингу.",
    section: "Третий раздел",
  },

  {
    icon: <AdsBuyingSVG />,
    activeIcon: <AdsBuyingActiveSVG />,
    caption: "Закупка рекламы по всем отраслям, на все виды ЦА",
    desc: "Реклама, которая говорит на языке вашей аудитории! Закажите закупку рекламы, и мы поможем вам подобрать наиболее эффективные каналы для привлечения клиентов из разных сегментов.",
    section: "Основные",
  },

  {
    icon: <VoronkaSVG />,
    activeIcon: <VoronkaActiveSVG />,
    caption: "Арбитраж трафика по системе воронок",
    desc: "Увеличьте конверсии с помощью воронок продаж! Мы предлагаем арбитраж трафика, основанный на эффективных системах воронок, которые помогут вам максимизировать доход.",
    section: "Основные",
  },

  {
    icon: <BrandDevelopSVG />,
    activeIcon: <BrandDevelopActiveSVG />,
    caption: "Продвижение бренда регионально и федерально",
    desc: "Наша команда специалистов разработает стратегию продвижения, которая обеспечит рост узнаваемости вашего бренда и укрепит его позиции на рынке.",
    section: "Второй раздел",
  },

  {
    icon: <RegionExisitingSVG />,
    activeIcon: <RegionExisitingActiveSVG />,
    caption: "Региональное присутствие при сопровождении встреч",
    desc: "Мы обеспечиваем сопровождение событий и встреч, гарантируя ваше региональное присутствие и высокий уровень организации.",
    section: "Второй раздел",
  },

  {
    icon: <ScriptsSVG />,
    activeIcon: <ScriptsActiveSVG />,
    caption: "Скрипты разговора и сценарий встреч",
    desc: "Наша услуга по разработке скриптов разговора и сценариев встреч поможет вам структурировать диалоги, сделать их более целенаправленными и эффективными.",
    section: "Второй раздел",
  },

  {
    icon: <CustomersSearchSVG />,
    activeIcon: <CustomersSearchActiveSVG />,
    caption: "Поиск новых сотрудников HR",
    desc: "Мы берем на себя все этапы подбора персонала — от составления вакансий до проведения собеседований, чтобы вы могли сосредоточиться на развитии вашего бизнеса.",
    section: "Второй раздел",
  },

  {
    icon: <MadeCustomersSystemSVG />,
    activeIcon: <MadeCustomersSystemActiveSVG />,
    caption: "Разработка системы обучения для новых сотрудников",
    desc: "Эффективное обучение — залог успеха! Мы создаем структурированные программы, которые ускоряют адаптацию новых сотрудников и повышают их продуктивность.",
    section: "Второй раздел",
  },

  {
    icon: <FullOurSocialSVG />,
    activeIcon: <FullOurSocialActiveSVG />,
    caption: "Полное курирование ваших социальных сетей",
    desc: "Максимум из ваших социальных сетей! Мы предлагаем полное курирование, чтобы повысить видимость вашего бренда и привлечь целевую аудиторию.",
    section: "Второй раздел",
  },

  {
    icon: <ContentPlanDevelopSVG />,
    activeIcon: <ContentPlanDevelopActiveSVG />,
    caption: "Разработка контент-плана",
    desc: "Мы создаем детализированные контент-планы, которые помогут вам эффективно достигать своих бизнес-целей и привлекать целевую аудиторию.",
    section: "Третий раздел",
  },

  {
    icon: <StrategyProductsSVG />,
    activeIcon: <StrategyProductsActiveSVG />,
    caption: "Стратегия взаимодействия лида с продуктом и с услугами",
    desc: "Мы разрабатываем стратегии, которые обеспечивают плавное взаимодействие лида с вашим продуктом и услугами, повышая шансы на конверсию.",
    section: "Второй раздел",
  },

  {
    icon: <PlanTargetingAdsSVG />,
    activeIcon: <PlanTargetingAdsActiveSVG />,
    caption: "Планирование Таргетированной рекламы",
    desc: "Индивидуальный подход! Учитываем специфику вашего бизнеса и целевую аудиторию для создания рекламных кампаний, которые действительно работают и приносят результаты!",
    section: "Третий раздел",
  },

  {
    icon: <SEODevelopSVG />,
    activeIcon: <SEODevelopActiveSVG />,
    caption: "SEO продвижение",
    desc: "Регулярный анализ и отчетность! Мы отслеживаем результаты продвижения и предоставляем подробные отчеты, чтобы вы могли видеть прогресс и эффективность наших усилий.",
    section: "Второй раздел",
  },

  {
    icon: <InstagramDevelopSVG />,
    activeIcon: <InstagramDevelopActiveSVG />,
    caption: "Развитие instagram с нуля",
    desc: "Мы поможем вам развить ваш Instagram с нуля, создавая привлекательный контент, который привлечет вашу целевую аудиторию.",
    section: "Третий раздел",
  },

  {
    icon: <VKDevelopSVG />,
    activeIcon: <VKDevelopActiveSVG />,
    caption: "Развитие сообществ и аккаунтов в VK",
    desc: "Создайте активное сообщество! Мы поможем вам развить ваше сообщество в ВКонтакте с нуля, создавая привлекательный контент и привлекая целевую аудиторию.",
    section: "Третий раздел",
  },

  {
    icon: <TelegramDevelopSVG />,
    activeIcon: <TelegramDevelopActiveSVG />,
    caption: "Развитие вашей сетки каналов в Telegram",
    desc: "Мы поможем вам развить и масштабировать вашу сетку каналов в Telegram, что позволит вам охватить более широкую аудиторию и увеличить вовлеченность.",
    section: "Третий раздел",
  },

  {
    icon: <TiktokDevelopSVG />,
    activeIcon: <TiktokDevelopActiveSVG />,
    caption: "Развитие TikTok бизнес-аккаунтов",
    desc: "Мы поможем вам развить ваш бизнес-аккаунт в TikTok, создавая уникальный контент, который привлечет внимание вашей целевой аудитории и повысит узнаваемость бренда.",
    section: "Третий раздел",
  },

  {
    icon: <MarketingEmailSVG />,
    activeIcon: <MarketingEmailActiveSVG />,
    caption: "E-mail маркетинг",
    desc: "Мы предлагаем комплексные решения по E-mail маркетингу, которые помогут вам наладить эффективное взаимодействие с клиентами и увеличить конверсии.",
    section: "Второй раздел",
  },
  {
    icon: <ProductionSVG />,
    activeIcon: <ProductionActiveSVG />,
    caption: "Продакшн съемки",
    desc: "Мы предоставляем полный спектр услуг: от предварительного планирования и сценария до съемки и пост-продакшна, обеспечивая высокое качество на каждом этапе.",
    section: "Третий раздел",
  },
];

// Список разделов в навигации мобильной версии
export const nav_sections: NavSections[] = [
  "Основные",
  "Второй раздел",
  "Третий раздел",
];
