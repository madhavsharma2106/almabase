import { TOGGLE_MODAL_STATE } from "../actions/types";
const initialState = { displayModal: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL_STATE:
      let modifiedState = state;
      modifiedState.displayModal = !modifiedState.displayModal;
      return { ...state, displayModal: modifiedState.displayModal };
    default:
      return state;
  }
};
