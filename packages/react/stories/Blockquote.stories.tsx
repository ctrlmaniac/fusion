import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Blockquote from "../src/Blockquote";

export default {
  title: "Blockquote",
  component: Blockquote,
} as ComponentMeta<typeof Blockquote>;

export const WithoutSource: ComponentStory<typeof Blockquote> = () => (
  <Blockquote>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. A, totam. Aut nisi
    provident corrupti vel dicta tempora quam impedit amet suscipit. Quas optio
    veniam dignissimos molestiae non ab temporibus commodi!
  </Blockquote>
);

export const WithSource: ComponentStory<typeof Blockquote> = () => (
  <Blockquote>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, magni
    dicta? In similique eligendi doloribus ducimus! Adipisci inventore odit
    quisquam! Odio quisquam velit sint, alias nobis doloremque aliquam cum eius.
    <footer>Lorem Ipsum</footer>
  </Blockquote>
);

export const SourceWithCite: ComponentStory<typeof Blockquote> = () => (
  <Blockquote>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
    consequuntur ipsa inventore quidem corporis maiores mollitia!
    <footer>
      Lorem Ipsum <cite>Dolor Sit Amet</cite>
    </footer>
  </Blockquote>
);
