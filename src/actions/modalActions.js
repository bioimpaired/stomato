export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const ADD_MODAL_TYPE = "ADD_MODAL_TYPE";

export const showModal = (modalType, modalProps) => {
  console.log("action showModal", modalType, modalProps);
  return {
    type: SHOW_MODAL,
    modalType: modalType,
    modalProps: modalProps
  };
};

export const hideModal = () => {
  console.log("actions hidemodal");
  return {
    type: HIDE_MODAL
  };
};
