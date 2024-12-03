import { Meta, StoryObj } from "@storybook/react";

import { Digit } from "../components/Digit";
import defaultCharMap from "../utils/charToDigit";

const meta = {
    title: "Example/Digit",
    component: Digit,
    argTypes: {
        color: { control: "color" },
        height: { control: "number" },
        char: { control: "text" },
    },
} satisfies Meta<typeof Digit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        color: "red",
        height: 250,
        char: "0",
        skew: false,
    },
};

export const WithCharMap: Story = {
    args: {
        color: "red",
        height: 250,
        char: "_",
        skew: false,
        charMap: { _: [0, 0, 0, 1, 0, 0, 0], ...defaultCharMap },
    },
};

export const IllegalChar: Story = {
    args: {
        color: "red",
        height: 250,
        char: "^",
        skew: false,
    },
};
