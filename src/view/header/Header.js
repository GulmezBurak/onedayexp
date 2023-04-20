import Options_buttons from "./components/Options_button";
import Shortcut from "./components/Shortcut";
import { Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar style={{ float: "right" }} bg="light" variant="light">
      <Shortcut />
      <Options_buttons />
    </Navbar>
  );
}
