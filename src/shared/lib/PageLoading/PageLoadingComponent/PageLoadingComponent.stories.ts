import type { Meta, StoryObj } from "@storybook/react";
import { PageLoadingComponent } from "./PageLoadingComponent";

const meta = {
  title: "Shared/PageLoadingComponent",
  component: PageLoadingComponent,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof PageLoadingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "#000",
    size: "small",
  },
};
