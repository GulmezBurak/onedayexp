import React from "react";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { useStore } from "../../options_dialog/store";
import { action } from "mobx";

const Switch = () => {
  const { configStore } = useStore();

  const handleShowBorderChange = action(() => {
    configStore.showBorder = !configStore.showBorder;
    configStore.customStyleActive = false;
  });

  console.log("configStore", configStore);

  return (
    <BootstrapSwitchButton
      size="xs"
      value={configStore.showBorder}
      onChange={handleShowBorderChange}
      checked={configStore.showBorder}
    />
  );
};

export default Switch;
