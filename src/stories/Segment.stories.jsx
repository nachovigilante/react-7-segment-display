import React from "react";

import Segment from "../components/Segment";

export default {
    title: "Example/Segment",
    component: Segment,
    argTypes: {
        active: { control: "boolean" },
        color: { control: "color" },
        size: { control: "number" },
    },
};

const Template = (args) => <Segment {...args} />;

export const Default = Template.bind({});
Default.args = {
    active: true,
    color: "red",
    size: 40,
};
