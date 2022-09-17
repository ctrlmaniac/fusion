"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caption = exports.Body2 = exports.Body = exports.H6 = exports.H5 = exports.H4 = exports.H3 = exports.H2 = exports.H1 = exports.DisplaySm = exports.DisplayMd = exports.DisplayLg = exports.Overline = void 0;
const react_1 = __importDefault(require("react"));
const Typography_1 = __importDefault(require("../src/Typography"));
exports.default = {
    title: "Typography",
    component: Typography_1.default,
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
};
const Template = ({ variant }) => {
    return react_1.default.createElement(Typography_1.default, { variant: variant }, "Lorem Ipsum");
};
exports.Overline = Template.bind({});
exports.Overline.args = {
    variant: "overline",
};
exports.DisplayLg = Template.bind({});
exports.DisplayLg.args = {
    variant: "display-lg",
};
exports.DisplayMd = Template.bind({});
exports.DisplayMd.args = {
    variant: "display-md",
};
exports.DisplaySm = Template.bind({});
exports.DisplaySm.args = {
    variant: "display-sm",
};
exports.H1 = Template.bind({});
exports.H1.args = {
    variant: "h1",
};
exports.H2 = Template.bind({});
exports.H2.args = {
    variant: "h2",
};
exports.H3 = Template.bind({});
exports.H3.args = {
    variant: "h3",
};
exports.H4 = Template.bind({});
exports.H4.args = {
    variant: "h4",
};
exports.H5 = Template.bind({});
exports.H5.args = {
    variant: "h5",
};
exports.H6 = Template.bind({});
exports.H6.args = {
    variant: "h6",
};
exports.Body = Template.bind({});
exports.Body.args = {
    variant: "body",
};
exports.Body2 = Template.bind({});
exports.Body2.args = {
    variant: "body-2",
};
exports.Caption = Template.bind({});
exports.Caption.args = {
    variant: "caption",
};
