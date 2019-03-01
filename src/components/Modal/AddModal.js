import React, { useState } from "react";
import { connect } from "react-redux";

import { addPlayer } from "../../actions/playerActions";
import { hideModal } from "../../actions/modalActions";

import InputLine from "./InputLine";

import { generateRandomUUID } from "../../containers/App";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

// rename modal props to initalformstate
const AddModal = ({ isOpen, modalProps, addPlayer, hideModal }) => {
  const newPlayerObjectWithUUID = {
    ...modalProps,
    uuid: generateRandomUUID(8)
  };

  const allCats = Object.keys(modalProps);
  // so option for uuid doesnt show up on modal
  const modalInputs = allCats.filter(cat => cat != "uuid");

  const [formState, setFormState] = useState(newPlayerObjectWithUUID);

  const handleInput = e => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleAddPlayer = e => {
    e.preventDefault();
    addPlayer(formState);
    hideModal();
  };

  const closeAndResetModal = e => {
    e.preventDefault();
    console.log("hiding modal");
    hideModal();
  };
  return (
    <Modal isOpen={isOpen} toggle={closeAndResetModal}>
      <ModalHeader toggle={closeAndResetModal}>Add Player</ModalHeader>
      <ModalBody>
        <Form>
          {modalInputs.map((cat, index) => (
            <InputLine
              key={index}
              inputName={cat}
              onChange={handleInput}
              label={cat}
            />
          ))}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleAddPlayer}>
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
    addPlayer: formState => dispatch(addPlayer(formState)),
    hideModal: () => dispatch(hideModal())
  })
)(AddModal);
