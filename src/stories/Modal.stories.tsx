import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal";

const meta = {
  title: "Example/Modal",
  component: Modal,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: false,
    title: "Default Modal",
    children: <p>This is the content of the modal.</p>,
  },
};

export const WithLongContent: Story = {
  args: {
    isOpen: false,
    title: "Modal with Long Content",
    children: (
      <div>
        <p>This modal contains a lot of content.</p>
        <p>Content can be quite extensive and scrollable if needed.</p>
        <p>Keep adding more paragraphs to test the scroll behavior.</p>
        <p>Here is more content for testing purposes.</p>
        <p>And even more content to fill up space and test scrolling.</p>
        <p>Finally, some concluding remarks at the end of the content.</p>
      </div>
    ),
  },
};
