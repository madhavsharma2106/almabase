import React, { useState } from "react";
import ProductList from "../../organisms/ProductList";
import Text, { TextVariant } from "../../atoms/Text";
import Button from "../../atoms/Button";
import "./style.scss";
import { connect } from "react-redux";
import TableComponent from "../../molecules/TableComponent";
import { toggleModal } from "../../../actions/utils";
import { updateCompareProducts } from "../../../actions/products";
import AttributeSelector from "../../organisms/AttributeSelector";
import { attributes } from "../../../utils";

function Products(props) {
  let { products, toggleModal, updateCompareProducts, compareProducts } = props;
  let cp = [...compareProducts];
  const [selectedAttributes, setSelectedAttributes] = useState(attributes);

  function handleSelectedAttributes(attr, selected) {
    const updatedAttr = { ...selectedAttributes, [attr]: selected };
    setSelectedAttributes(updatedAttr);
  }

  function compareProductsHandler(id) {
    if (cp.filter(p => p.id === id).length === 0) {
      cp.push(products.filter(p => p.id === id)[0]);
      updateCompareProducts(cp);
    } else {
      updateCompareProducts(cp.filter(p => p.id !== id));
    }
  }

  function modifyAttributesHandler() {
    toggleModal();
  }

  return (
    <div>
      <AttributeSelector
        selectedAttributes={selectedAttributes}
        handleSelectedAttributes={handleSelectedAttributes}
      />
      <div className="section-header">
        <Text variant={TextVariant.HEADING}>PRODUCTS LIST</Text>
        <Button onClick={modifyAttributesHandler}>Modify Attributes</Button>
      </div>
      <ProductList
        products={products}
        compareProductsHandler={compareProductsHandler}
      />
      {compareProducts.length > 0 ? (
        <React.Fragment>
          <div className="section-header">
            <Text variant={TextVariant.HEADING}>COMPARE PRODUCTS</Text>
          </div>
          <TableComponent
            data={compareProducts}
            selectedAttributes={selectedAttributes}
          />
        </React.Fragment>
      ) : (
        undefined
      )}
    </div>
  );
}

const mapStateToProps = ({ products }) => ({
  products: products.productData,
  compareProducts: products.compareProducts
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal()),
  updateCompareProducts: products => dispatch(updateCompareProducts(products))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
