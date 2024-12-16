import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";
import "./styles/reset.scss";
import "./styles/index.scss";
import { Header } from "@/widgets/Header";
import { PageOpenAnimation } from "@/shared/ui-kit/PageOpenAnimation";
import { Footer } from "@/widgets/Footer";

export const App = () => {
  return (
    <>
      <Suspense>
        <Header />
        <MainPage />
        <Footer />

        <PageOpenAnimation />
      </Suspense>
    </>
  );
};
