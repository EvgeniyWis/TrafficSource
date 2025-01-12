import type { Meta, StoryObj } from "@storybook/react";
import { Services } from "./Services";

const meta = {
  title: "Pages/MainPage/Services",
  component: Services,
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
