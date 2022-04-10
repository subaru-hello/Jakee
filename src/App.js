import { React } from "react";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
function App() {
  const button = {
    name: "PrimaryButton",
    role: "submit",
  };
  return (
    <div className="App">
      <PrimaryButton button={button} />
    </div>
  );
}

export default App;
