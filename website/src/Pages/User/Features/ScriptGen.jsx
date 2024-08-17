import React, { useState, useRef, useImperativeHandle, forwardRef } from "react";
import Herofonts from "../../../ReusableComponents/Herofonts";
import Searchbar from "../components/Searchbar";
import ScriptGenWork from "../components/ScriptGenWork";

const ScriptGen = (props) => {
  const { setIsCustomStyle, isCustomStyle } = props;
  const [prompt, setprompt] = useState("");

  const toggleStyles = () => {
    setIsCustomStyle(!isCustomStyle);
  };

  // Declare a ref to access generateUserScript in ScriptGenWork
  const generateUserScriptRef = useRef(null);

  return (
    <div
      className={`app-container ${
        isCustomStyle ? "custom-style container_outlet" : "container_outlet"
      }`}
    >
      <Herofonts text="ScriptGeneration" background="black" />
      <ScriptGenWork 
        prompt={prompt} 
        ref={generateUserScriptRef} // Pass the ref to ScriptGenWork
        setprompt={setprompt}
      />
      <Searchbar
        prompt={prompt}
        setprompt={setprompt}
        onGenerate={() => generateUserScriptRef.current?.generateUserScript()} // Call generateUserScript when generate is clicked
      />
    </div>
  );
};
export default ScriptGen;
