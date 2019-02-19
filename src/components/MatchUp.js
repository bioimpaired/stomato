import React, { Component } from "react";

import { Container, Row, Col, Button } from "reactstrap";

import PlayerStatLine from "./PlayerStatLine";

const MatchUp = ({ allPlayers, addPlayer }) => {
  const handleAddNewPlayerStatLine = e => {
    e.preventDefault();
    addPlayer();
  };
  return (
    <div>
      <Row>
        <Col>
          <Button onClick={handleAddNewPlayerStatLine} color="success">
            Add New Player Stat
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>Name</Col>
        <Col>FG</Col>
        <Col>FT</Col>
        <Col>3PTM</Col>
        <Col>PTS</Col>
        <Col>REB</Col>
        <Col>AST</Col>
        <Col>ST</Col>
        <Col>BLK</Col>
        <Col>TO</Col>
      </Row>
      {allPlayers &&
        allPlayers.map((player, i) => {
          return <PlayerStatLine num={player} key={i} />;
        })}
    </div>
  );
};

export default MatchUp;
