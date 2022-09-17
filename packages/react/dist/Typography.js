"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("@ctrlmaniac/fusioncss-web/dist/fusioncss.css");
const Typography = ({ variant, children }) => {
    switch (variant) {
        case "overline":
            return react_1.default.createElement("p", { className: "overline" }, children);
        case "display-lg":
            return react_1.default.createElement("p", { className: "display-lg" }, children);
        case "display-md":
            return react_1.default.createElement("p", { className: "display-md" }, children);
        case "display-sm":
            return react_1.default.createElement("p", { className: "display-sm" }, children);
        case "h1":
            return react_1.default.createElement("h1", null, children);
        case "h2":
            return react_1.default.createElement("h2", null, children);
        case "h3":
            return react_1.default.createElement("h3", null, children);
        case "h4":
            return react_1.default.createElement("h4", null, children);
        case "h5":
            return react_1.default.createElement("h5", null, children);
        case "h6":
            return react_1.default.createElement("h6", null, children);
        case "subtitle":
            return react_1.default.createElement("p", { className: "subtitle" }, children);
        case "subtitle-2":
            return react_1.default.createElement("p", { className: "subtitle-2" }, children);
        case "body":
            return react_1.default.createElement("p", null, children);
        case "body-2":
            return react_1.default.createElement("p", { className: "body-2" }, children);
        case "caption":
            return react_1.default.createElement("p", { className: "caption" }, children);
        default:
            return react_1.default.createElement("p", null, children);
    }
};
exports.default = Typography;
