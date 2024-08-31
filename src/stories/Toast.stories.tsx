import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Toast } from "../components/Toast";

const meta = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "This is a toast message!",
    duration: 3000,
  },
};

export const LongDuration: Story = {
  args: {
    message: "This is a long duration toast message!",
    duration: 3000,
  },
};

export const WithCloseButton: Story = {
  args: {
    message: "This is a with close button toast message!",
    duration: 3000,
  },
};
