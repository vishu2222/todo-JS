import "./flex7.css";

export function Flex7() {
  return (
    <>
      <h3>flex-flow:</h3>
      <p>
        Is a combination of both flex-direction and flex-wrap. flex-flow
        preoperty takes two space seperated values corresponding to
        flex-direction and flex-wrap.
      </p>
      <h3>align-content:</h3>
      <p>set how multiple lines are spaced apart from each other. </p>
      <ol>
        <li> flex-start: Lines are packed at the top of the container.</li>
        <li>flex-end: Lines are packed at the bottom of the container.</li>
        <li>
          center: Lines are packed at the vertical center of the container.
        </li>
        <li>space-between: Lines display with equal spacing between them.</li>
        <li>space-around: Lines display with equal spacing around them.</li>
        <li>stretch: Lines are stretched to fit the container.</li>
      </ol>
    </>
  );
}
