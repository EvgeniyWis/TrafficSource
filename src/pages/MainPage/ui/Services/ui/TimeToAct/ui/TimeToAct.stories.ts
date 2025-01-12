import type { Meta, StoryObj } from "@storybook/react";
import { TimeToAct } from "./TimeToAct";

const meta = {
  title: "Pages/MainPage/Services/TimeToAct",
  component: TimeToAct,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof TimeToAct>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
