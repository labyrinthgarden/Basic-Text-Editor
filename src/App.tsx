import { useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const minimizeWindow = () => window.minimize();
  const maximizeWindow = () => window.toggleMaximize();
  const closeWindow = () => window.close();
  return (
    <div className="app-container">
      <div className="titlebar">
        <div className="titlebar-left">
          <button 
            className="titlebar-button close-btn"
            onClick={closeWindow}
          >
            ×
          </button>
          <button 
            className="titlebar-button maximize-btn"
            onClick={maximizeWindow}
          >
            □
          </button>
          <button 
            className="titlebar-button minimize-btn"
            onClick={minimizeWindow}
          >
            −
          </button>
        </div>
        <div data-tauri-drag-region className="titlebar-right">
          <span className="title">Basic Text Editor</span>
        </div>
      </div>
      <div className="main-container">
        <div className="filename">
          <h1>main.c</h1>
        </div>
        <div className="editor-wrapper">
          <textarea className="typingarea"
            value={text}
            onChange={(e)=>setText(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
