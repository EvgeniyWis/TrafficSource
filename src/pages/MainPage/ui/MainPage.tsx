import { MainBlock } from "@/widgets/MainBlock";
import { memo } from "react";

export const MainPage: React.FC = memo((): React.JSX.Element => {
  return (
    <main>
      <MainBlock />
    </main>
  );
});
