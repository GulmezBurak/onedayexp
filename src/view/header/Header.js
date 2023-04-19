import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Options_buttons from "./components/Options_button";
import Shortcut from "./components/Shortcut";

export default function Header({ options, setOptions }) {
  const [customStyleActive, setCustomStyleActive] = useState(false);

  return (
    <div>
      <Shortcut
        options={options}
        setOptions={setOptions}
        customStyleActive={customStyleActive}
        setCustomStyleActive={setCustomStyleActive}
      />
      <Options_buttons
        options={options}
        setOptions={setOptions}
        customStyleActive={customStyleActive}
        setCustomStyleActive={setCustomStyleActive}
      />
    </div>
  );
}
