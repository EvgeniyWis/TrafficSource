import type { Meta, StoryObj } from "@storybook/react";
import { OurSocials } from "./OurSocials";

const meta = {
  title: "Pages/MainPage/Services/OurSocials",
  component: OurSocials,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof OurSocials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
