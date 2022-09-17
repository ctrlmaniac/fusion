import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "../src/Typography";

export default {
  title: "Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "overline",
        "display-lg",
        "display-md",
        "display-sm",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "body",
        "body-2",
      ],
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = ({ variant }) => {
  return <Typography variant={variant}>Lorem Ipsum</Typography>;
};

export const Overline = Template.bind({});
Overline.args = {
  variant: "overline",
};

export const DisplayLg = Template.bind({});
DisplayLg.args = {
  variant: "display-lg",
};

export const DisplayMd = Template.bind({});
DisplayMd.args = {
  variant: "display-md",
};

export const DisplaySm = Template.bind({});
DisplaySm.args = {
  variant: "display-sm",
};

export const H1 = Template.bind({});
H1.args = {
  variant: "h1",
};

export const H2 = Template.bind({});
H2.args = {
  variant: "h2",
};

export const H3 = Template.bind({});
H3.args = {
  variant: "h3",
};

export const H4 = Template.bind({});
H4.args = {
  variant: "h4",
};

export const H5 = Template.bind({});
H5.args = {
  variant: "h5",
};

export const H6 = Template.bind({});
H6.args = {
  variant: "h6",
};

export const Body = Template.bind({});
Body.args = {
  variant: "body",
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: "body-2",
};

export const Caption = Template.bind({});
Caption.args = {
  variant: "caption",
};
