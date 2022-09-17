import React from "react";
import "@ctrlmaniac/fusioncss-web/dist/fusioncss.css";

interface Props {
  children: React.ReactNode;
  multiline?: boolean;
}

const Code: React.FC<Props> = ({ multiline, children }) => {
  if (multiline) {
    return (
      <pre>
        <code>{children}</code>
      </pre>
    );
  } else {
    return <code>{children}</code>;
  }
};

export default Code;
