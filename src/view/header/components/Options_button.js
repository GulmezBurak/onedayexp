import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Modal, Form } from "react-bootstrap";

import Switch from "../../options_dialog/components/Switch";
import Title from "../../options_dialog/components/Title";
import Close_button from "../../options_dialog/components/Close_button";
import Radiobutton from "../../options_dialog/components/Radio-button";

import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useStore } from "../../options_dialog/store";

const Options_buttons = () => {
  const { configStore } = useStore();

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
        <Modal.Header closeButton={false}>
          <Title />
          <Close_button handlePopupClose={handlePopupClose} />
        </Modal.Header>
        <Modal.Body>
          <div>
            <label style={{ padding: "5px" }}>Show Border</label>
            <Switch />
          </div>
          <div>
            <label style={{ padding: "5px" }}>Font Size</label>

            <Radiobutton label="8" value="8" fontSize="8" />
            <Radiobutton label="16" value="16" fontSize="16" />
            <Radiobutton label="24" value="24" fontSize="24" />
          </div>
          <div>
            <label style={{ padding: "5px" }}>Background Color</label>

            <div style={limeBackgroundBoxStyle}></div>
            <Radiobutton label="Lime" value="#d3e39a" backgroundColor="Lime" />

            <div style={lightPinkBackgroundBoxStyle}></div>
            <Radiobutton
              label="Light Pink"
              value="#e39a9c"
              backgroundColor="Light Pink"
            />
            <div style={creamBackgroundBoxStyle}></div>
            <Radiobutton
              label="Cream"
              value="#e3bc9a"
              backgroundColor="Cream"
            />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default observer(Options_buttons);
