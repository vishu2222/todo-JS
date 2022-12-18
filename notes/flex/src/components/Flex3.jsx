import { useState } from "react";
import "./flex3.css";

export function Flex3() {
  const [name, setName] = useState("row");
  const [flexStyle, setFlexStyle] = useState("row");

  function handleClick() {
    if (name === "row") {
      setName("row-reverse");
      setFlexStyle("row-reverse");
    }
    if (name === "row-reverse") {
      setName("column");
      setFlexStyle("column");
    }
    if (name === "column") {
      setName("column-reverse");
      setFlexStyle("column-reverse");
    }
    if (name === "column-reverse") {
      setName("row");
      setFlexStyle("row");
    }
  }
  return (
    <>
      <h3>flex-direction:</h3>
      <p>
        {" "}
        property defines the direction items are placed in the container.
        flex-direction property defines in which direction the container wants
        to stack the flex items
      </p>
      <p>options</p>
      <ol>
        <li>
          {" "}
          <strong>row:</strong> The row value stacks the flex items horizontally
          (from left to right):
        </li>
        <li>
          <strong>row-reverse:</strong>Items are placed opposite to the text
          direction.
        </li>
        <li>
          <strong>column:</strong> Items are placed top to bottom.
        </li>
        <li>
          <strong>column-reverse:</strong> stacks the flex items vertically (but
          from bottom to top).
        </li>
      </ol>
      <h2>
        <strong> flex-direction:</strong> {name}
      </h2>
      <div
        id="felxContainer3"
        class="felxContainer"
        style={{ "flex-direction": flexStyle }}
      >
        <div class="blueBox box" id="blue3"></div>
        <div class="redBox box" id="red3"></div>
        <div class="yellowBox box" id="yellow3"></div>
        <div class="greenBox box" id="green3"></div>
        <br />
      </div>
      <button onClick={handleClick}>click</button>
      <p>
        when flex direction is column then align-items becomes horizontal and
        justify-content becomes vertical.
      </p>
    </>
  );
}
