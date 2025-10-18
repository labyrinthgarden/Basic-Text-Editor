import { useState } from "react";
import Titlebar from "./components/Titlebar";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [fontColor, setFontColor] = useState("#FFFFFF");
  const [editorFontColor, setEditorFontColor] = useState("#FFFFFF");
  const [bgColor, setBgColor] = useState("rgba(0,0,0,0.5)");
  const [editorBgColor, setEditorBgColor] = useState("rgba(0,0,0,0.5)");

  const updateCSSVariable = (variable: string, value: string) => {
    document.documentElement.style.setProperty(variable, value);
  };

  const handleFontColorChange = (color: string) => {
    setFontColor(color);
    updateCSSVariable("--font-color", color);
  };
  const handleEditorFontColorChange = (color: string) => {
    setEditorFontColor(color);
    updateCSSVariable("--editor-font-color", color);
  };
  const handleBgColorChange = (color: string) => {
    setBgColor(color);
    updateCSSVariable("--bg-color", color);
  };
  const handleEditorBgColorChange = (color: string) => {
    setEditorBgColor(color);
    updateCSSVariable("--editor-background-color", color);
  };

  return (
    <div className="app-container">
      <Titlebar title="Basic Text Editor" />
      <div className="main-container">
        <Navbar
          onFontColorChange={handleFontColorChange}
          onEditorFontColorChange={handleEditorFontColorChange}
          onBgColorChange={handleBgColorChange}
          onEditorBgColorChange={handleEditorBgColorChange}
        />
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
