import type { Meta, StoryObj } from "@storybook/react";
import { FreeConsultation } from "./FreeConsultation";

const meta = {
  title: "Pages/MainPage/Services/FreeConsultation",
  component: FreeConsultation,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FreeConsultation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
