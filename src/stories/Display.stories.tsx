import { Meta, StoryObj } from "@storybook/react";

import { Display } from "../components/Display";
import defaultCharMap from "../utils/charToDigit";

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
        padding: "20px",
    },
};

export const WithCharMap: Story = {
    args: {
        color: "red",
        height: 250,
        value: "_- _",
        count: 4,
        backgroundColor: "black",
        skew: false,
        padding: "20px",
        charMap: {
            _: [0, 0, 0, 1, 0, 0, 0],
            " ": [0, 0, 0, 0, 0, 0, 0],
            ...defaultCharMap,
        },
    },
};
