import React from "react";
import Button, { ButtonVariant } from "../src/components/atoms/Button";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";

export default {
  component: Button,
  title: "Button",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false }
  }
};

export const Sample = () => {
  const buttonText = text("text", "Hello");
  const variant = select(
    "Variant",
    [ButtonVariant.PRIMARY, ButtonVariant.SECONDARY],
    ButtonVariant.PRIMARY
  );
  return <Button variant={variant}>{buttonText}</Button>;
};
