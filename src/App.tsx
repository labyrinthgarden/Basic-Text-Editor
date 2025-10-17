import { useState } from "react";
import Titlebar from "./components/Titlebar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="app-container">
      <Titlebar title="Basic Text Editor" />
      <div className="main-container">
      <Navbar/>
        <div className="filename">
          <h1>main.c</h1>
        </div>
        <div className="editor-wrapper">
          <textarea
            className="typingarea"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
