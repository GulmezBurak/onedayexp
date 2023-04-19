import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

export default function Shortcut({
  options,
  setOptions,
  customStyleActive,
  setCustomStyleActive,
}) {
  const [prevOptions, setPrevOptions] = useState(options);

  const handleClick = () => {
    setPrevOptions(options);
    setOptions({
      ...options,
      fontSize: 16,
      backgroundColor: "grey",
      showBorder: true,
    });
    setCustomStyleActive(true);
  };

  const handleCheckboxChange = (e) => {
    if (!e.target.checked) {
      setOptions(prevOptions);
      setCustomStyleActive(false);
    }
  };

  console.log(options);
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav>
          <input
            onChange={handleCheckboxChange}
            onClick={handleClick}
            style={{ margin: "18px " }}
            type="checkbox"
            checked={customStyleActive}
          />
          <label>custom style</label>
        </Nav>
      </Container>
    </Navbar>
  );
}
