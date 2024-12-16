import { createRoot } from "react-dom/client";
import "./app/styles/index.scss";
import { App } from "./app/App";
import { ErrorBoundary } from "react-error-boundary";
import { Flex } from "./shared/lib/Stack";

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "Контейнер root не найден. НЕ удалось вмонтировать реакт приложение",
  );
}

const root = createRoot(container);

root.render(
  <ErrorBoundary
    fallback={
      <Flex className="plug" maxWidth justify="center">
        <p>
          На сайте возникла непредвиденная техническая ошибка.
          <br />
          Приносим свои извинения.
        </p>
      </Flex>
    }
  >
    <App />
  </ErrorBoundary>,
);
