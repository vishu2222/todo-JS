import { useState } from "react";

function TodoForm() {
  // state
  let [todoInput, setTodoInput] = useState("");

  // callback methods
  function addTodo() {
    // console.log(todoInput);
    setTodoInput("");
  }

  // return
  return (
    <div id="todoForm" style={{ backgroundColor: "green" }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>ToDo</label>
        <br />
        <input
          type="text"
          placeholder="what needs to be done?"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
