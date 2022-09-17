import React from "react";
import "@ctrlmaniac/fusioncss-web/dist/fusioncss.css";
interface Props {
    variant: string;
    children: JSX.Element[] | JSX.Element | string;
}
declare const Typography: React.FC<Props>;
export default Typography;
