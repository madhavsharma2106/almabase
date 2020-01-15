import React from "react";
import "./style.scss";
import Text, { TextVariant } from "../../atoms/Text";
import ConditionComponent, { ConditionColor } from "../ConditionComponent";
import ColorComponent from "../ColorComponent";
function TableComponent({ data, selectedAttributes }) {
  const headings = [];
  const conditions = [];
  const colors = [];
  const prices = [];
  const vendors = [];

  function renderHeadings() {
    return headings.map(h => (
      <th key={h}>
        <Text variant={TextVariant.HEADING}>{h}</Text>
      </th>
    ));
  }

  function renderVendors() {
    return vendors.map((v, i) => (
      <td key={i}>
        <Text variant={TextVariant.REGULAR}>{v}</Text>
      </td>
    ));
  }
  function renderPrice() {
    return prices.map((p, i) => (
      <td key={i}>
        <Text variant={TextVariant.REGULAR}>{p}</Text>
      </td>
    ));
  }

  function renderColors() {
    return colors.map((c, i) => (
      <td key={i}>
        <ColorComponent colors={c} />
      </td>
    ));
  }

  function renderConditions() {
    return conditions.map((c, i) => (
      <td key={i}>
        <ConditionComponent
          bgColor={c === "Fresh" ? ConditionColor.GREEN : ConditionColor.RED}
        >
          <Text variant={TextVariant.REGULAR} color="white">
            {c}
          </Text>
        </ConditionComponent>
      </td>
    ));
  }

  function renderTable() {
    data.forEach(d => {
      if (d.name) headings.push(d.name);
      if (d.condition) conditions.push(d.condition);
      if (d.colors) colors.push(d.colors);
      if (d.price) prices.push(d.price);
      if (d.vendors) vendors.push(d.vendors);
    });
  }

  return (
    <table className="table-component">
      {renderTable()}
      <thead>
        <tr>
          <th>
            <Text variant={TextVariant.HEADING}></Text>
          </th>
          {renderHeadings()}
        </tr>
      </thead>
      <tbody>
        {selectedAttributes["prices"] && prices.length > 0 ? (
          <tr>
            <td className="listing">
              <Text variant={TextVariant.HEADING}>Price</Text>
            </td>
            {renderPrice()}
          </tr>
        ) : (
          undefined
        )}

        {selectedAttributes["colors"] && colors.length > 0 ? (
          <tr>
            <td className="listing">
              <Text variant={TextVariant.HEADING}>Colors</Text>
            </td>
            {renderColors()}
          </tr>
        ) : (
          undefined
        )}

        {selectedAttributes["condition"] && conditions.length > 0 ? (
          <tr>
            <td className="listing">
              <Text variant={TextVariant.HEADING}>Condition</Text>
            </td>
            {renderConditions()}
          </tr>
        ) : (
          undefined
        )}
        {selectedAttributes["vendors"] && vendors.length > 0 ? (
          <tr>
            <td className="listing">
              <Text variant={TextVariant.HEADING}>Vendors</Text>
            </td>
            {renderVendors()}
          </tr>
        ) : (
          undefined
        )}
      </tbody>
    </table>
  );
}

export default TableComponent;
