import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useStore } from "../../options_dialog/store";

const Shortcut = () => {
  const { configStore } = useStore();

  const [defaultConfig, setDefaultConfig] = useState({});

  const handleClick = () => {
    // varsayılan değerleri sakla
    setDefaultConfig({
      fontSize: configStore.fontSize,
      backgroundColor: configStore.backgroundColor,
      showBorder: configStore.showBorder,
    });

    // otomatik değerleri ayarla
    configStore.fontSize = 12;
    configStore.backgroundColor = "grey";
    configStore.showBorder = true;
    configStore.customStyleActive = true;
  };

  const handleCheckboxChange = (e) => {
    if (!e.target.checked) {
      configStore.customStyleActive = false;
      configStore.fontSize = defaultConfig.fontSize;
      configStore.backgroundColor = defaultConfig.backgroundColor;
      configStore.showBorder = defaultConfig.showBorder;
    }
  };

  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Nav>
          <input
            onChange={handleCheckboxChange}
            onClick={handleClick}
            style={{ margin: "18px " }}
            type="checkbox"
            checked={configStore.customStyleActive}
          />
          <label>Custom Style</label>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default observer(Shortcut);
