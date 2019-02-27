import React from "react";
import { connect } from "react-redux";

import { showModal, SHOW_MODAL } from "../actions/modalActions";

import { Row, Col, Button } from "reactstrap";

import PlayerStatLine from "./PlayerStatLine";
import PlayerModal from "./Modal/PlayerModal";

const MatchUp = ({ allPlayers, removePlayer, showModal }) => {
  const handleUpdatePlayerStatLine = (e, playerIndex) => {
    e.preventDefault();
  };

  const handleAddNewPlayerStatLine = e => {
    e.preventDefault();
    console.log("toggling");
    showModal(SHOW_MODAL, {});
  };

  return (
    <div>
      <Row>
        <Col>
          <Button onClick={handleAddNewPlayerStatLine} color="danger">
            Add New Player Stat
          </Button>
        </Col>
      </Row>
      <Row className="p-2">
        <Col className="bg-light">Name</Col>
        <Col>FG</Col>
        <Col className="bg-light">FT</Col>
        <Col>3PTM</Col>
        <Col className="bg-light">PTS</Col>
        <Col>REB</Col>
        <Col className="bg-light">AST</Col>
        <Col>ST</Col>
        <Col className="bg-light">BLK</Col>
        <Col>TO</Col>
        <Col>Remove</Col>
      </Row>
      {allPlayers &&
        allPlayers.map((playerStatLine, index) => {
          return (
            <PlayerStatLine
              playerStatLine={playerStatLine}
              removePlayer={removePlayer}
              index={index}
              key={index}
              handleUpdatePlayerStatLine={handleUpdatePlayerStatLine}
            />
          );
        })}
      <PlayerModal />
    </div>
  );
};

export default connect(
  // state => ({
  //   stateHere: state
  // })
  null,
  dispatch => ({
    showModal: (modalType, modalProps) =>
      dispatch(showModal(modalType, modalProps))
  })
)(MatchUp);
