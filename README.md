# Лендинг "Источник Траффика"

# Запуск сайта

Инструкция по запуску сайта на ваш локальный компьютер:

1.  Склонируйте данный репозиторий.
2.  Напиши в терминале `npm install` для установки всех зависимостей.
3.  Напишите в терминале команду `npm run dev`.

Или вы можете просто зайти на [сайт](kriswis.github.io/TrafficSource/), загруженный на Github Pages.

---

## Скрипты

- `npm run dev` - Запуск проекта в dev режиме на Vite
- `npm run build` - Сборка проекта с помощью Vite
- `npm run deploy` - Деплой проекта на Github Pages
- `npm run stylelint:check` - Запуск проверки scss файлов проекта с помощью styleLint
- `npm run stylelint:fix` - Запуск исправления scss файлов проекта, там где это возможно, с помощью styleLint
- `npm run eslint:check` - Запуск проверки ts файлов проекта с помощью esLint
- `npm run eslint:fix` - Запуск исправления ts файлов проекта, там где это возможно, с помощью esLint
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design.

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Тесты

В проекте используется:

Скриншотное тестирование с loki - `npm run test:ui`

Подробнее о тестах - [документация тестирования](/docs/tests.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.

Файл со сторикейсами создаётся рядом с компонентом с расширением .stories.tsx

Запустить сторибук можно командой:

- `npm run storybook`

Подробнее о [Storybook](/docs/storybook.md)

Пример:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ButtonTypes } from "../model/Button__types";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonRed: Story = {
  args: {
    to: "/",
    text: "Красная кнопка",
    type: ButtonTypes.RED,
  },
};

export const ButtonBlue: Story = {
  args: {
    to: "/",
    text: "Синяя кнопка",
    type: ButtonTypes.BLUE,
  },
};

export const ButtonGray: Story = {
  args: {
    to: "/",
    text: "Серая кнопка",
    type: ButtonTypes.GRAY,
  },
};

export const ButtonBlack: Story = {
  args: {
    to: "/",
    text: "Чёрная кнопка",
    type: ButtonTypes.BLACK,
  },
};
```

---

## Конфигурация проекта

Для разработки проект содержит конфиг:
Vite - vite.config.ts

Cборщика адаптирован под основные фичи приложения.

Вся конфигурация хранится в корне проекта:

- vite.config.ts - конфигурация Vite
- /.storybook - конфигурация Storybook

---

## Прочие особенности:
