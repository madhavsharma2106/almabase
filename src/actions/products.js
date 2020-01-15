import { GET_PRODUCTS, COMPARE_PRODUCTS } from "./types";
import { fetchAndDecode } from "../utils.js";

export const getProducts = () => async dispatch => {
  const res = await fetchAndDecode();
  dispatch({
    type: GET_PRODUCTS,
    payload: res
  });
  return res;
};

export const updateCompareProducts = products => dispatch => {
  dispatch({
    type: COMPARE_PRODUCTS,
    payload: products
  });
};
