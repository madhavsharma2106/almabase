import { combineReducers } from "redux";
import products from "./productsReducer";
import utils from "./utilsReducer";
export default combineReducers({
  products,
  utils
});
