import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Modal, Form } from "react-bootstrap";
import Switch from "../../options_dialog/components/Switch";
import Title from "../../options_dialog/components/Title";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export default function Options_buttons({
  options,
  setOptions,
  customStyleActive,
  setCustomStyleActive,
}) {
  console.log(options);
  const [showPopup, setShowPopup] = useState();

  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const backgroundBoxStyle = {
    display: "inline-block",
    width: "18px",
    height: "18px",
    marginLeft: "10px",
    border: "1px solid #999",
    verticalAlign: "middle",
  };

  const limeBackgroundBoxStyle = {
    ...backgroundBoxStyle,
    backgroundColor: "#d3e39a",
  };

  const lightPinkBackgroundBoxStyle = {
    ...backgroundBoxStyle,
    backgroundColor: "#e39a9c",
  };

  const creamBackgroundBoxStyle = {
    ...backgroundBoxStyle,
    backgroundColor: "#e3bc9a",
  };

  const handleShowBorderChange = (e) => {
    setOptions({ ...options, showBorder: !options.showBorder });
    setCustomStyleActive(false);
  };

  const handleFontSizeChange = (e) => {
    const selectedFontSize = parseInt(e.target.value);

    setOptions({ ...options, fontSize: selectedFontSize });
    setCustomStyleActive(false);
  };

  const handleBackgroundColorChange = (e) => {
    setOptions({ ...options, backgroundColor: e.target.value });
    setCustomStyleActive(false);
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Button onClick={handlePopupOpen} variant="outline-secondary">
              Options
            </Button>
          </Nav>
        </Container>
      </Navbar>
      <Modal size="lg" show={showPopup} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Title />
        </Modal.Header>
        <Modal.Body>
          <div>
            <label style={{ padding: "5px" }}>Show Border</label>
            <BootstrapSwitchButton
              size="xs"
              value={options.showBorder}
              onChange={handleShowBorderChange}
            />
          </div>
          <div>
            <label style={{ padding: "5px" }}>Font Size</label>
            <Form.Check
              type="radio"
              label="8"
              value="8"
              checked={options.fontSize === 8}
              onChange={handleFontSizeChange}
              inline
            />
            <Form.Check
              type="radio"
              label="16"
              value="16"
              checked={options.fontSize === 16}
              onChange={handleFontSizeChange}
              inline
            />
            <Form.Check
              type="radio"
              label="24"
              value="24"
              checked={options.fontSize === 24}
              onChange={handleFontSizeChange}
              inline
            />
          </div>
          <div>
            <label style={{ padding: "5px" }}>Background Color</label>

            <div style={limeBackgroundBoxStyle}></div>
            <Form.Check
              type="radio"
              label="Lime"
              value="#d3e39a"
              name="color"
              onChange={handleBackgroundColorChange}
              inline
            />
            <div style={lightPinkBackgroundBoxStyle}></div>
            <Form.Check
              type="radio"
              label="Light Pink"
              value="#e39a9c"
              name="color"
              onChange={handleBackgroundColorChange}
              inline
            />
            <div style={creamBackgroundBoxStyle}></div>
            <Form.Check
              type="radio"
              label="Cream"
              value="#e3bc9a"
              name="color"
              onChange={handleBackgroundColorChange}
              inline
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
