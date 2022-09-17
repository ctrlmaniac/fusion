import React from "react";
import "@ctrlmaniac/fusioncss-web/dist/fusioncss.css";

interface Props {
  variant: string;
  children: JSX.Element[] | JSX.Element | string;
}

const Typography: React.FC<Props> = ({ variant, children }) => {
  switch (variant) {
    case "overline":
      return <p className="overline">{children}</p>;

    case "display-lg":
      return <p className="display-lg">{children}</p>;

    case "display-md":
      return <p className="display-md">{children}</p>;

    case "display-sm":
      return <p className="display-sm">{children}</p>;

    case "h1":
      return <h1>{children}</h1>;

    case "h2":
      return <h2>{children}</h2>;

    case "h3":
      return <h3>{children}</h3>;

    case "h4":
      return <h4>{children}</h4>;

    case "h5":
      return <h5>{children}</h5>;

    case "h6":
      return <h6>{children}</h6>;

    case "subtitle":
      return <p className="subtitle">{children}</p>;

    case "subtitle-2":
      return <p className="subtitle-2">{children}</p>;

    case "body":
      return <p>{children}</p>;

    case "body-2":
      return <p className="body-2">{children}</p>;

    case "caption":
      return <p className="caption">{children}</p>;

    default:
      return <p>{children}</p>;
  }
};

export default Typography;
