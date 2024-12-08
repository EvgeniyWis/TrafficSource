import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Shared/UIKit/Button",
  component: Button,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <a target="_blank" href="https://t.me/Agent_Traffic23">
        Бесплатная консультация
      </a>
    ),
  },
};
