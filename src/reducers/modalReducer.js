import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalActions";

const initialState = {
  modalType: null,
  modalProps: {},
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      console.log("modal reducer showmodal", action.payload);
      return {
        ...state,
        modalType: action.modalType,
        modalProps: action.modalProps,
        isOpen: true
      };
    }
    case HIDE_MODAL: {
      console.log("modal reducer hidemodal");
      return {
        ...state,
        ...initialState
      };
    }
    default:
      return state;
  }
};
