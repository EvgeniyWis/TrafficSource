import type { Meta, StoryObj } from "@storybook/react";
import { Service } from "./Service";
import CreativeSVG from "@/shared/assets/icons/Services/CreativeSVG.svg?react";
import CreativeActiveSVG from "@/shared/assets/icons/Services/CreativeActiveSVG.svg?react";

const meta = {
  title: "Entities/Service",
  component: Service,
} satisfies Meta<typeof Service>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    icon: <CreativeSVG />,
    activeIcon: <CreativeActiveSVG />,
    caption: "Разработка завлекающего креатива",
    desc: "Ваша идея — наш креатив! Доверьтесь профессионалам, чтобы создать завлекающий контент, который будет продавать.",
    section: "Основные",
  },
};
