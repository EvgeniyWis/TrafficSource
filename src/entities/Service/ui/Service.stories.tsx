import type { Meta, StoryObj } from "@storybook/react";
import { Service } from "./Service";
import LogoSVG from "@/shared/assets/icons/global/LogoSVG.svg?react";

const meta = {
  title: "Entities/Service",
  component: Service,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Service>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <LogoSVG />,
    caption: "Пример заголовка",
    desc: "Пример описания",
  },
};
