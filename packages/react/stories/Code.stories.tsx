import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Code from "../src/Code";

export default {
  title: "Code",
  component: Code,
  argTypes: {
    multiline: {
      control: "boolean",
      options: [true, false],
    },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = ({ multiline, children }) => {
  return <Code multiline={multiline}>{children}</Code>;
};

export const SingleLine = Template.bind({});
SingleLine.args = {
  multiline: false,
  children: "pip install ctrlmaniac",
};

export const Multiline = Template.bind({});
Multiline.args = {
  multiline: true,
  children: `Lorem Ipsum
Dolor Sit Amet
consectetur adipisicing elit.`,
};
