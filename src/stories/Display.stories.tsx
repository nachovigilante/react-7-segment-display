import { Meta, StoryObj } from "@storybook/react";

import { Display } from "../components/Display";

const meta = {
    title: "Example/Display",
    component: Display,
    argTypes: {
        color: { control: "color" },
        height: { control: "number" },
        value: {
            control: "text",
        },
        count: {
            control: "number",
        },
        backgroundColor: {
            control: "color",
        },
    },
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "red",
        height: 250,
        value: "0",
        count: 2,
        backgroundColor: "black",
        skew: false,
    },
};
