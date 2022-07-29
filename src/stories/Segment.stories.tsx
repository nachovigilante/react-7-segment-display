import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Segment from "../components/Segment";

export default {
    title: "Example/Segment",
    component: Segment,
    argTypes: {
        active: { control: "boolean" },
        color: { control: "color" },
        size: { control: "number" },
    },
} as ComponentMeta<typeof Segment>;

const Template: ComponentStory<typeof Segment> = (args) => (
    <Segment {...args} />
);

export const Default = Template.bind({});
Default.args = {
    active: true,
    color: "red",
    id: "A",
    size: 40,
    skew: false,
};
