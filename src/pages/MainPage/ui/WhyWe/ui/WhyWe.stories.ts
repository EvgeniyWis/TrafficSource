import type { Meta, StoryObj } from "@storybook/react";
import { WhyWe } from "./WhyWe";

const meta = {
  title: "Pages/MainPage/WhyWe",
  component: WhyWe,
} satisfies Meta<typeof WhyWe>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
