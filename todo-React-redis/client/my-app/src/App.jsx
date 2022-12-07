import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todosarr"))
  );

  // methods
  function addTodoTxt(txt) {
    const todoId = todos.reduce((max, todo) => {
      if (todo.id > max) {
        max = todo.id;
      }
      return max + 1;
    }, 0);
    todos.push({ id: todoId, txt: txt });
    window.localStorage.setItem("todosarr", JSON.stringify(todos));
    console.log(todos);
  }

  // component return
  return (
    <div>
      <TodoForm todoTxt={addTodoTxt} />
      <div id="todoContainer">
        <div className="itemDiv">
          {todos.map((item, index) => {
            return <TodoItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
