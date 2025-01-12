import type { Meta, StoryObj } from "@storybook/react";
import { MainBlock } from "./MainBlock";

const meta = {
  title: "Pages/MainPage/MainBlock",
  component: MainBlock,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
} satisfies Meta<typeof MainBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
