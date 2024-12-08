import type { Meta, StoryObj } from "@storybook/react";
import { Services } from "./Services";

const meta = {
  title: "Widgets/Services",
  component: Services,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
