import React, { useState } from "react";
import Text, { TextVariant } from "../../atoms/Text";
import Button, { ButtonVariant } from "../../atoms/Button";
import "./style.scss";

function ProductCard(props) {
  const [overlay, setOverlay] = useState("hidden");
  const { id, name, price, description, onClick } = props;

  return (
    <div
      className="product-card"
      onMouseEnter={() => setOverlay("visible")}
      onMouseLeave={() => setOverlay("hidden")}
    >
      <div className="image-overlay" style={{ visibility: overlay }}>
        <Button variant={ButtonVariant.SECONDARY} onClick={() => onClick(id)}>
          Compare
        </Button>
      </div>
      <div className="product-image">
        <img src={require("./product.jpeg")} alt={description} />
      </div>
      <div className="product-description">
        <div className="product-description-meta">
          <Text variant={TextVariant.HEADING}>{name}</Text>
          <Text variant={TextVariant.HIGHLIGHTED}>{price}</Text>
        </div>
        <div className="product-description-desc">
          <Text variant={TextVariant.DESCRIPTION}>{description}</Text>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
