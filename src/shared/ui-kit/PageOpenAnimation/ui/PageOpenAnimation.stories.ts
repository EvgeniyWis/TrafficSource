import type { Meta, StoryObj } from "@storybook/react";
import { PageOpenAnimation } from "./PageOpenAnimation";

const meta = {
  title: "UIKit/PageOpenAnimation",
  component: PageOpenAnimation,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PageOpenAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
