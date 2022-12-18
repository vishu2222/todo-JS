import { useState } from "react";
import "./flex2.css";

export function Flex2() {
  const [name, setName] = useState("flex-start");
  const [flexStyle, setFlexStyle] = useState("flex-start");

  function handleClick() {
    if (name === "flex-start") {
      setName("center");
      setFlexStyle("center");
    }
    if (name === "center") {
      setName("flex-end");
      setFlexStyle("flex-end");
    }
    if (name === "flex-end") {
      setName("baseline");
      setFlexStyle("baseline");
    }
    if (name === "baseline") {
      setName("stretch");
      setFlexStyle("stretch");
    }
    if (name === "stretch") {
      setName("flex-start");
      setFlexStyle("flex-start");
    }
  }
  return (
    <>
      <h3>align-items:</h3>
      <p>align-items property aligns items vertically</p>
      <p>
        <strong>options</strong>
      </p>
      <ol>
        <li>
          <strong>flex-start:</strong> Items align to the top of the container.
        </li>
        <li>
          <strong>flex-end:</strong> Items align to the bottom of the container.
        </li>
        <li>
          <strong>center: </strong>Items align at the vertical center of the
          container.
        </li>
        <li>
          <strong>baseline: </strong>Items display at the baseline of the
          container.
        </li>
        <li>
          <strong>stretch:</strong> Items are stretched to fit the container.
        </li>
      </ol>
      <h2>
        <strong> align-items:</strong> {name}
      </h2>
      <div
        id="felxContainer2"
        class="felxContainer"
        style={{ "align-items": flexStyle }}
      >
        <div class="blueBox box" id="blue3"></div>
        <div class="redBox box" id="red3"></div>
        <div class="yellowBox box" id="yellow3"></div>
        <div class="greenBox box" id="green3"></div>
        <br />
      </div>
      <button onClick={handleClick}>click</button>
      <br></br>
    </>
  );
}
