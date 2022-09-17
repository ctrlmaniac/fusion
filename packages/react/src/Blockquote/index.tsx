import React from "react";
import "@ctrlmaniac/fusioncss-web/dist/fusioncss.css";

interface Props {
  children: React.ReactNode;
}

const Blockquote: React.FC<Props> = ({ children }) => {
  return <blockquote className="blockquote">{children}</blockquote>;
};

export default Blockquote;
