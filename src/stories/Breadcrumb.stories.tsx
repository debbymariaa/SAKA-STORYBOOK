import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Breadcrumb } from "../components/Breadcrumb";

const meta = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: "Home", link: "/" },
      { label: "Category", link: "/category" },
      { label: "Subcategory", link: "/category/subcategory" },
      { label: "Item", link: "/category/subcategory/item" },
    ],
  },
};

export const WithoutLink: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Category" },
      { label: "Subcategory" },
      { label: "Item" },
    ],
  },
};
