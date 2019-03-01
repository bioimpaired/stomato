import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

const InputLine = ({ inputName, onChange, label, value }) => {
  return (
    <FormGroup>
      <Label for={inputName}>{label}</Label>
      <Input type="text" name={inputName} onChange={onChange} value={value} />
    </FormGroup>
  );
};

export default InputLine;
