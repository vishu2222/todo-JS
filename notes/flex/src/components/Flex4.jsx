import { useState } from "react";
import "./flex4.css";

export function Flex4() {
  const [name, setName] = useState(0);
  const [flexStyle, setFlexStyle] = useState(0);

  function handleClick() {
    if (name === 0) {
      setName(-1);
      setFlexStyle(-1);
    }
    if (name === -1) {
      setName(1);
      setFlexStyle(1);
    }
    if (name === 1) {
      setName(0);
      setFlexStyle(0);
    }
  }
  return (
    <>
      <h3>order:</h3>
      <p>
        order in which elements are placed can be changed by order property
        applied on an element. Default value of order for an item is 0. changing
        to -1, -2 etc moves it to left. while changing it to 1,2,3 moves it to
        right. if order of other elements=0 (Default) then setting order of an
        element to -1 moves it to complete left and 1 to complete right.
      </p>

      <h2>
        <strong> order:</strong> {name}
      </h2>
      <div id="felxContainer4" class="felxContainer">
        <div class="blueBox box" id="blue3"></div>
        <div class="redBox box" id="red3"></div>
        <div class="yellowBox box" id="yellow3"></div>
        <div
          class="greenBox box"
          id="green3"
          style={{ order: flexStyle }}
        ></div>
        <br />
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
