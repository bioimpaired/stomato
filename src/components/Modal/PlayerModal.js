import React, { useState } from "react";
import { addPlayer } from "../../actions/playerActions";
import { hideModal } from "../../actions/modalActions";

import { connect } from "react-redux";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

import InputLine from "./InputLine";

const PlayerModal = ({ isOpen, addPlayer, hideModal }) => {
  //should be in redux
  const initialFormState = {
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
  };

  const allCats = Object.keys(initialFormState);
  const [formState, setFormState] = useState(initialFormState);

  const handleInput = e => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleAddPlayer = e => {
    e.preventDefault();
    addPlayer(formState);
    setFormState(initialFormState);
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
          {allCats.map((cat, index) => (
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
)(PlayerModal);
