import "./flex1.css";
import { useState } from "react";

export function Flex1() {
  const [name, setName] = useState("space-around");
  const [flexStyle, setFlexStyle] = useState("space-around;");

  function handleClick() {
    if (name === "space-around") {
      setName("center");
      setFlexStyle("center");
    }
    if (name === "center") {
      setName("flex-end");
      setFlexStyle("flex-end");
    }
    if (name === "flex-end") {
      setName("flex-start");
      setFlexStyle("flex-start");
    }
    if (name === "flex-start") {
      setName("space-between");
      setFlexStyle("space-between");
    }
    if (name === "space-between") {
      setName("space-evenly");
      setFlexStyle("space-evenly");
    }
    if (name === "space-evenly") {
      setName("start");
      setFlexStyle("start");
    }
    if (name === "start") {
      setName("space-around");
      setFlexStyle("space-around");
    }
  }
  return (
    <>
      <h1>Flex:</h1>
      <p>
        felx prevents overflow by dynamically expanding or shrinking item inside
        flex container
      </p>
      <h4>
        start by setting display of an element as flex. Flex applies to every
        element inside that element
      </h4>
      <h3>justify-content:</h3>
      <p>justify-content property aligns items horizontally:</p>
      <p>
        <strong>options</strong>
      </p>
      <ol>
        <li>
          <strong>flex-start:</strong> Items align to the left side of the
          container.flex-start is the default
        </li>
        <li>
          <strong>flex-end:</strong> Items align to the right side of the
          container.
        </li>
        <li>
          <strong>center:</strong> Items align at the center of the container.
        </li>
        <br />
        <p>The below options are not supported in some browsers</p>
        <li>
          <strong>space-between:</strong> Items display with equal spacing
          between them.
        </li>
        <li>
          <strong>space-around:</strong> Items display with equal spacing around
          them.
        </li>
        <li>
          <strong>space-evenly:</strong>{" "}
        </li>
        <li>
          <strong>start:</strong>
        </li>
        <li>
          <strong>end:</strong>
        </li>
        <li>
          <strong>left:</strong>
        </li>
        <li>
          <strong>right:</strong>
        </li>
      </ol>
      <h2>
        <strong>justify content:</strong> {name}
      </h2>
      <div
        id="felxContainer1"
        class="felxContainer"
        style={{ "justify-content": flexStyle }}
      >
        <div class="blueBox box" id="blue2"></div>
        <div class="redBox box" id="red2"></div>
        <div class="yellowBox box" id="yellow2"></div>
        <div class="greenBox box" id="green2"></div>
        <br />
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
