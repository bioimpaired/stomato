import React from "react";

import { Row, Col, Button } from "reactstrap";

export default ({
  index,
  removePlayer,
  playerStatLine,
  handleUpdatePlayerStatLine
}) => {
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    console.log("clicked", index);
    removePlayer(index);
  };

  return (
    <Row className="pt-2">
      <Col className="bg-light" onClick={handleUpdatePlayerStatLine}>
        {playerStatLine.name}
      </Col>
      <Col>{playerStatLine.fg}</Col>
      <Col className="bg-light">{playerStatLine.ft}</Col>
      <Col>{playerStatLine.threes}</Col>
      <Col className="bg-light">{playerStatLine.pts}</Col>
      <Col>{playerStatLine.reb}</Col>
      <Col className="bg-light">{playerStatLine.ast}</Col>
      <Col>{playerStatLine.st}</Col>
      <Col className="bg-light">{playerStatLine.blk}</Col>
      <Col>{playerStatLine.to}</Col>
      <Col>
        <Button onClick={e => handleRemoveClick(e, index)}>D</Button>
      </Col>
    </Row>
  );
};
