import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useStore } from "../../options_dialog/store";

const Shortcut = () => {
  const { configStore } = useStore();

  const [defaultConfig, setDefaultConfig] = useState({});

  const handleClick = () => {
    setDefaultConfig({
      fontSize: configStore.fontSize,
      backgroundColor: configStore.backgroundColor,
      showBorder: configStore.showBorder,
    });

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
    <div style={{ display: "flex", alignItems: "center" }}>
      <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <label style={{ marginRight: "10px" }}>Custom Style</label>
            <div>
              <input
                onChange={handleCheckboxChange}
                onClick={handleClick}
                style={{
                  verticalAlign: "middle",
                  marginRight: "5px",
                  transform: "scale(1.5)",
                }}
                type="checkbox"
                checked={configStore.customStyleActive}
              />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default observer(Shortcut);
