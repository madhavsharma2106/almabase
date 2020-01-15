import { GET_PRODUCTS, COMPARE_PRODUCTS } from "../actions/types";
import { productData } from "../productData";

const initialState = {
  productData,
  compareProducts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return state;
    case COMPARE_PRODUCTS:
      let updatedState = { ...state, compareProducts: action.payload };
      return updatedState;
    default:
      return state;
  }
};
