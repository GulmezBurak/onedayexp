import Header from "./view/header/Header";
import Card from "./view/card/Card";
import options_dialog from "./view/options_dialog/options_dialog";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState({
    backgroundColor: "#2311",
    fontSize: "12",
    showBorder: false,
  });
  return (
    <div className="App">
      <Header options={options} setOptions={setOptions} />
      <Card options={options} />
    </div>
  );
}

export default App;
