import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";
import "./styles/reset.scss";
import "./styles/index.scss";
import { Header } from "@/widgets/Header";
import { PageOpenAnimation } from "@/shared/ui-kit/PageOpenAnimation";
import { tablet_mediaQuery } from "@/shared/const/global";
import { Flex } from "@/shared/lib/Stack";
import { Footer } from "@/widgets/Footer";

export const App = () => {
  return (
    <>
      {!tablet_mediaQuery.matches ? (
        <Suspense>
          <Header />
          <MainPage />
          <Footer />

          <PageOpenAnimation />
        </Suspense>
      ) : (
        // TODO: убрать заглушку для мобилок
        <Flex className="zaglushka" maxWidth justify="center">
          <p>
            На данный момент сайт недоступен на мобильных и планшетных
            устройствах.
            <br />
            Приносим свои извинения.
          </p>
        </Flex>
      )}
    </>
  );
};
