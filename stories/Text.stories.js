import React from "react";
import Text, { TextVariant } from "../src/components/atoms/Text";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  component: Text,
  title: "Text",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false }
  }
};

export const Sample = () => {
  const sample = text("text", "Hello");
  const variant = select(
    "Variant",
    [
      TextVariant.REGULAR,
      TextVariant.DESCRIPTION,
      TextVariant.HEADING,
      TextVariant.HIGHLIGHTED
    ],
    TextVariant.REGULAR
  );
  return <Text variant={variant}>{sample}</Text>;
};
