import { Meta, StoryObj } from "@storybook/react";

import Segment from "../components/Segment";

const meta = {
    title: "Example/Segment",
    component: Segment,
    argTypes: {
        active: { control: "boolean" },
        color: { control: "color" },
        size: { control: "number" },
    },
} satisfies Meta<typeof Segment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        active: true,
        color: "red",
        id: "A",
        size: 40,
        skew: false,
    },
};
