import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTods] = useState(
    JSON.parse(window.localStorage.getItem("todos"))
  );

  // methods
  function fetchTodos() {
    setTods(JSON.parse(window.localStorage.getItem("todos")));
  }

  useEffect(() => {
    console.log("todos on updation", todos);
  }, [todos]);

  function addTodoTxt(txt) {
    const todoId = todos.reduce((max, todo) => {
      if (todo.id > max) {
        max = todo.id;
      }
      return max + 1;
    }, 0);

    const newTodos = JSON.stringify([...todos, { id: todoId, txt: txt }]);
    window.localStorage.setItem("todos", newTodos);
    fetchTodos();
  }

  function deleteTodo(id) {
    const newTods = todos.filter((todo) => todo.id !== id);
    window.localStorage.setItem("todos", JSON.stringify(newTods));
    fetchTodos();
  }

  // component return
  return (
    <div>
      <TodoForm todoTxt={addTodoTxt} />
      <div id="todoContainer">
        <div className="itemDiv">
          {todos.map((item, index) => {
            return (
              <TodoItem key={item.id} todoItem={item} deleteTodo={deleteTodo} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
