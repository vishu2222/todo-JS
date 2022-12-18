import { useState } from "react";
import "./flex5.css";

export function Flex5() {
  const [name, setName] = useState("flex-end");
  const [flexStyle, setFlexStyle] = useState("flex-end");

  function handleClick() {
    if (name === "flex-end") {
      setName("flex-start");
      setFlexStyle("flex-start");
    }
    if (name === "flex-start") {
      setName("center");
      setFlexStyle("center");
    }
    if (name === "center") {
      setName("baseline");
      setFlexStyle("baseline");
    }
    if (name === "baseline") {
      setName("streach");
      setFlexStyle("streach");
    }
    if (name === "streach") {
      setName("flex-end");
      setFlexStyle("flex-end");
    }
  }
  return (
    <>
      <h3>align-self:</h3>

      <h2>
        <strong> align-self::</strong> {name}
      </h2>
      <div id="felxContainer5" class="felxContainer">
        <div class="blueBox box" id="blue3"></div>
        <div class="redBox box" id="red3"></div>
        <div class="yellowBox box" id="yellow3"></div>
        <div
          class="greenBox box"
          id="green3"
          style={{ "align-self": flexStyle }}
        ></div>
        <br />
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
