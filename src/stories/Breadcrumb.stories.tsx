import React from "react";
import { Breadcrumb } from "../components/Breadcrumb"; // Sesuaikan dengan lokasi file Breadcrumb.tsx
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Separator1: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Category" },
      { label: "Product" },
    ],
    separator: "/", // Separator "/"
  },
};

export const Separator2: Story = {
  args: {
    items: [
      { label: "Home" },
      { label: "Category" },
      { label: "Product" },
    ],
    separator: ">", // Separator ">"
  },
};
