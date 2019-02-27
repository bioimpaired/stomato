import React, { useState } from "react";
import { addPlayer, togglePlayerModal } from "../../actions/playerActions";

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
import { loadInitialFormState } from "../../actions/modalActions";

const PlayerModal = ({
  isOpen,
  addPlayer,
  togglePlayerModal,
  loadInitialFormState
}) => {
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
    togglePlayerModal();
  };

  return (
    <Modal isOpen={isOpen} toggle={togglePlayerModal}>
      <ModalHeader toggle={togglePlayerModal}>Add Player</ModalHeader>
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
        <Button color="secondary" onClick={togglePlayerModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default connect(
  state => ({
    isOpen: state.players.playerModalOpen
  }),
  dispatch => ({
    addPlayer: formState => dispatch(addPlayer(formState)),
    togglePlayerModal: () => dispatch(togglePlayerModal()),
    loadInitialFormState: playerIndex =>
      dispatch(loadInitialFormState(playerIndex))
  })
)(PlayerModal);
