import { TOGGLE_MODAL_STATE } from "./types";

export const toggleModal = () => async dispatch => {
  dispatch({
    type: TOGGLE_MODAL_STATE,
    payload: null
  });
};
