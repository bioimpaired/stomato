import React, { Component, useState } from "react";

import { Container, Row, Col, Button } from "reactstrap";

import PlayerStatLine from "./PlayerStatLine";
import PlayerModal from "./Modal/PlayerModal";

const MatchUp = ({ allPlayers, addPlayer, removePlayer }) => {
  const [isOpen, toggleModal] = useState(false);

  const handleToggleModal = () => {
    toggleModal(!isOpen);
  };

  const handleAddNewPlayerStatLine = e => {
    e.preventDefault();
    handleToggleModal();
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
              handleToggleModal={handleToggleModal}
            />
          );
        })}
      <PlayerModal
        isOpen={isOpen}
        handleToggleModal={handleToggleModal}
        addPlayer={addPlayer}
      />
    </div>
  );
};

export default MatchUp;
