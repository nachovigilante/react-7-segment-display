import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Digit } from "../components/Digit";

export default {
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
} as ComponentMeta<typeof Digit>;

const Template: ComponentStory<typeof Digit> = (args) => <Digit {...args} />;

export const Default = Template.bind({});
Default.args = {
    color: "red",
    height: 250,
    char: "0",
};
