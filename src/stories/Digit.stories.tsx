import { Meta, StoryObj } from "@storybook/react";

import { Digit } from "../components/Digit";

const meta = {
    title: "Example/Digit",
    component: Digit,
    argTypes: {
        color: { control: "color" },
        height: { control: "number" },
        char: {
            control: "select",
            options: [
                "0",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "a",
                "b",
                "c",
                "d",
                "e",
                "f",
                "-",
            ],
        },
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
