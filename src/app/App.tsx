import { Suspense } from "react";
import { MainPage } from "@/pages/MainPage";

export const App = () => {
  return (
    <Suspense fallback="загрузка">
      <MainPage />
    </Suspense>
  );
};
