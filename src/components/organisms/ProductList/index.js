import React from "react";
import ProductCard from "../../molecules/ProductCard";
import "./style.scss";

function ProductList({ products, compareProductsHandler }) {
  const renderProducts = () =>
    products.map(p => (
      <ProductCard
        onClick={compareProductsHandler}
        id={p.id}
        key={p.id}
        name={p.name}
        price={p.price}
        description={p.description}
      />
    ));

  return <div className="product-list">{renderProducts()}</div>;
}

export default ProductList;
