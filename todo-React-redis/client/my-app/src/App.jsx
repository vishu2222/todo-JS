import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";

export default function App() {
  const [todos, setTods] = useState(
    JSON.parse(window.localStorage.getItem("todosArr"))
  );

  // methods
  function addTodoTxt(txt) {
    const todoId = todos.reduce((max, todo) => {
      if (todo.id > max) {
        max = todo.id;
      }
      return max + 1;
    }, 0);
    window.localStorage.setItem(
      "todosArr",
      JSON.stringify([...todos, { id: todoId, txt: txt }])
    );
    setTods(JSON.parse(window.localStorage.getItem("todosArr")));
  }

  // component return
  return (
    <div>
      <TodoForm todoTxt={addTodoTxt} />
      <div id="todoContainer">
        <div className="itemDiv">
          {todos.map((item, index) => {
            return <TodoItem key={index} todoItem={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
