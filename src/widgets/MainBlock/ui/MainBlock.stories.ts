import type { Meta, StoryObj } from "@storybook/react";
import { MainBlock } from "./MainBlock";

const meta = {
  title: "Widgets/MainBlock",
  component: MainBlock,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof MainBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
