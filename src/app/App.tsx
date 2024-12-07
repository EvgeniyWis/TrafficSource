import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";
import "./styles/reset.scss";
import "./styles/index.scss";
import { Header } from "@/widgets/Header";
import { PageOpenAnimation } from "@/shared/ui-kit/PageOpenAnimation";

export const App = () => {
  return (
    <Suspense>
      <Header />
      <MainPage />

      <PageOpenAnimation />
    </Suspense>
  );
};
