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
    children: <>Button</>,
  },
};

export const WithBG: Story = {
  args: {
    children: <>Button</>,
    themes: ["withBG"],
  },
};

export const BigXPadding: Story = {
  args: {
    children: <>Button</>,
    themes: ["big-x-padding"],
  },
};

export const WithMoreDarkBG: Story = {
  args: {
    children: <>Button</>,
    themes: ["withMoreDarkBG"],
  },
};
