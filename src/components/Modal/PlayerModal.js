import React from "react";
import { connect } from "react-redux";

import AddModal from "./AddModal";
import UpdateModal from "./UpdateModal";

const PlayerModal = ({ modalProps, modalType, stateHere }) => {
  // very important as it causes app to crash if modalType undefined not handled
  if (!modalType) {
    return null;
  }

  // interface
  // not sure why ADD_MODAL_TYPE doesnt have to be imported from action
  const MODAL_COMPONENTS = {
    ADD_MODAL_TYPE: AddModal,
    UPDATE_MODAL_TYPE: UpdateModal
  };
  const SpecificModal = MODAL_COMPONENTS[modalType];
  console.log("player modal", stateHere, modalType);

  return <SpecificModal modalProps={modalProps} />;
};

export default connect(state => ({
  stateHere: state,
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps
}))(PlayerModal);
