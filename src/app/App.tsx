import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";
import "./styles/reset.scss";
import "./styles/index.scss";
import { PageLoading } from "@/shared/lib/PageLoading/PageLoading";
import { Header } from "@/widgets/Header";

export const App = () => {
  return (
    <Suspense fallback={<PageLoading />}>
      <Header />
      <MainPage />
    </Suspense>
  );
};
