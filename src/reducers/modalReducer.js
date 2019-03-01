import { SHOW_MODAL, HIDE_MODAL } from "../actions/modalActions";

const initialState = {
  modalType: null,
  modalProps: {
    uuid: "",
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
  updatePlayerIndex: null,
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: {
      console.log("modal reducer showmodal", action);
      return {
        modalType: action.modalType,
        modalProps: { ...initialState.modalProps, ...action.modalProps },
        isOpen: true,
        // fi this
        updatePlayerIndex: 1
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
