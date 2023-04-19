import React, { useState } from "react";
import Options_buttons from "./components/Options_button";
import Shortcut from "./components/Shortcut";

export default function Header() {
  return (
    <div>
      <Shortcut />
      <Options_buttons />
    </div>
  );
}
