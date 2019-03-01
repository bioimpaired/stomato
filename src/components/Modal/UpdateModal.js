import React, { useState } from "react";
import { connect } from "react-redux";

import { updatePlayer } from "../../actions/playerActions";
import { hideModal } from "../../actions/modalActions";

import InputLine from "./InputLine";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

// rename modal props to initalformstate
const UpdateModal = ({ isOpen, modalProps, updatePlayer, hideModal }) => {
  const allCats = Object.keys(modalProps);

  // so option for uuid doesnt show up on modal
  const modalInputs = allCats.filter(cat => cat != "uuid");

  const [formState, setFormState] = useState(modalProps);
  console.log("update modal", modalProps);

  const handleInput = e => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // get index from redux
  const handleUpdatePlayer = e => {
    e.preventDefault();
    console.log("handle update", formState);
    updatePlayer(formState);
    hideModal();
  };

  const closeAndResetModal = e => {
    e.preventDefault();
    console.log("hiding modal");
    hideModal();
  };
  return (
    <Modal isOpen={isOpen} toggle={closeAndResetModal}>
      <ModalHeader toggle={closeAndResetModal}>Update Player</ModalHeader>
      <ModalBody>
        <Form>
          {modalInputs.map((cat, index) => (
            <InputLine
              key={index}
              inputName={cat}
              onChange={handleInput}
              label={cat}
              value={formState[cat]}
            />
          ))}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdatePlayer}>
          Add Player
        </Button>
        <Button color="secondary" onClick={closeAndResetModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default connect(
  state => ({
    isOpen: state.modal.isOpen
  }),
  dispatch => ({
    updatePlayer: playerStats => dispatch(updatePlayer(playerStats)),
    hideModal: () => dispatch(hideModal())
  })
)(UpdateModal);
