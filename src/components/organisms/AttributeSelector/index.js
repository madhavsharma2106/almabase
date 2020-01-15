import React from "react";
import Modal from "../../atoms/Modal";
import Text, { TextVariant } from "../../atoms/Text";
import "./style.scss";
import classnames from "classnames";

function AttributeSelector({ selectedAttributes, handleSelectedAttributes }) {
  const attributes = ["prices", "colors", "condition", "vendors"];
  const classes = classnames("attribute-selector");

  function renderCheckBoxes() {
    return attributes.map(a => (
      <div key={a}>
        <input
          type="checkbox"
          checked={selectedAttributes[a]}
          onChange={e => handleSelectedAttributes(a, e.target.checked)}
        />
        <Text variant={TextVariant.REGULAR}> {a} </Text>
      </div>
    ));
  }

  return (
    <Modal>
      <div className={classes}>{renderCheckBoxes()}</div>
    </Modal>
  );
}

export default AttributeSelector;
