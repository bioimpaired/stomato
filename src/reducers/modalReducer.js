import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalActions";

const initialState = {
  modalType: null,
  modalProps: {
    name: "",
    fg: "",
    ft: "",
    threes: "",
    pts: "",
    reb: "",
    ast: "",
    st: "",
    blk: "",
    to: ""
  },
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      console.log("modal reducer showmodal", action);
      return {
        modalType: action.modalType,
        modalProps: { ...initialState.modalProps, ...action.modalProps },
        isOpen: true
      };
    }
    case HIDE_MODAL: {
      console.log("modal reducer hidemodal");
      return initialState;
    }
    default:
      return state;
  }
};
