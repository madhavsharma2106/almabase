import React from "react";
import TableComponent from "../src/components/molecules/TableComponent";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { withInfo } from "@storybook/addon-info";
import { productData } from "../src/productData";
import { attributes } from "../src/utils";

export default {
  component: TableComponent,
  title: "Table",
  decorators: [withKnobs, withInfo],
  parameters: {
    info: { inline: true, header: false }
  }
};

const data = productData;
const selectedAttributes = attributes;
export const Sample = () => {
  return <TableComponent data={data} selectedAttributes={selectedAttributes} />;
};
