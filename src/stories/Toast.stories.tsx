import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Toast } from "../components/Toast";
import "../components/styles/toast.css";

const meta: Meta<typeof Toast> = {
  title: "Example/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message1: "Success Message",
    message2: "This is the Success message!",
    duration: 3000,
    onClose: () => console.log("Toast closed"), // Tambahkan log untuk onClose
  },
};

export const Failed: Story = {
  args: {
    message1: "Failed Message",
    message2: "This is the Failed message!",
    duration: 3000,
    onClose: () => console.log("Toast closed"), // Tambahkan log untuk onClose
  },
};
