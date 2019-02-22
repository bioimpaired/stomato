import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";

import InputLine from "./InputLine";

const PlayerModal = ({ isOpen, handleToggleModal, addPlayer }) => {
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
    handleToggleModal();
  };

  return (
    <Modal isOpen={isOpen} toggle={handleToggleModal}>
      <ModalHeader toggle={handleToggleModal}>Add Player</ModalHeader>
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
        <Button color="secondary" onClick={handleToggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default PlayerModal;
