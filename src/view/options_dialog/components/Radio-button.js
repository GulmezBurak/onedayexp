import React from "react";
import configStore from "../configStore";
import { Form } from "react-bootstrap";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

const Radiobutton = ({ label, value, fontSize, backgroundColor }) => {
  const handleRadioChange = action((e) => {
    if (fontSize !== undefined) {
      configStore.fontSize = parseInt(e.target.value);
    }
    if (backgroundColor !== undefined) {
      configStore.backgroundColor = e.target.value;
    }
    configStore.customStyleActive = false;
  });

  let checked;
  if (fontSize !== undefined) {
    checked = configStore.fontSize === parseInt(fontSize);
  } else if (backgroundColor !== undefined) {
    checked = configStore.backgroundColor === value;
  }

  return (
    <Form.Check
      type="radio"
      inline
      label={label}
      value={value}
      checked={checked}
      onChange={handleRadioChange}
    />
  );
};

export default observer(Radiobutton);
