import { useState } from "react";
import logo from "./logo.svg";
import MathOperations from "./components/MathOperations";
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [stack, setStack] = useState(0);

  return (
    <main className="react-calculator">
      <Result value={stack} />
      <Numbers
        onClickNumber={(number) => {
          console.log("click en number", number);
          setStack(number);
        }}
      />
      <Functions
        onContentClear={() => console.log("content clear")}
        onDelete={() => console.log("onDelete")}
      />
      <MathOperations
        onClickOperation={(operation) => console.log("Operation " + operation)}
        onClickEqual={(equal) => console.log("Equal", equal)}
      />
    </main>
  );
}

export default App;
