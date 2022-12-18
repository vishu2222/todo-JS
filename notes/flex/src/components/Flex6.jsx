import { useState } from "react";
import "./flex6.css";

export function Flex6() {
  const [name, setName] = useState("nowrap");
  const [flexStyle, setFlexStyle] = useState("nowrap");

  function handleClick() {
    if (name === "nowrap") {
      setName("wrap");
      setFlexStyle("wrap");
    }
    if (name === "wrap") {
      setName("wrap-reverse");
      setFlexStyle("wrap-reverse");
    }
    if (name === "wrap-reverse") {
      setName("nowrap");
      setFlexStyle("nowrap");
    }
  }
  return (
    <>
      <h3>flex-wrap:</h3>

      <h2>
        <strong> flex-wrap:</strong> {name}
      </h2>
      <div
        id="felxContainer6"
        class="felxContainer"
        style={{ "flex-wrap": flexStyle }}
      >
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>
        <div class="blueBox box2" id="blue6"></div>
        <div class="redBox box2" id="red6"></div>
        <div class="yellowBox box2" id="yellow6"></div>
        <div class="greenBox box2" id="green3"></div>
        <div class="empty box2"></div>

        <br />
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
}
