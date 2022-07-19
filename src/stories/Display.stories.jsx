import React from "react";

import { Display } from "../components/Display";

export default {
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
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: "red",
    height: 250,
    value: "0",
    count: 2,
    backgroundColor: "black",
};
