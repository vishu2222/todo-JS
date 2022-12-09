import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState } from "react";

export default function App() {
  // state
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos"))
  );
  // methods
  function fetchTodos() {
    setTodos(JSON.parse(window.localStorage.getItem("todos")));
  }

  function addTodo(txt) {
    const nextId = todos.reduce((max, todo) => {
      if (todo.id > max) {
        max = todo.id;
      }
      return max + 1;
    }, 0);

    const newTodos = JSON.stringify([...todos, { id: nextId, txt: txt }]);
    window.localStorage.setItem("todos", newTodos);
    fetchTodos();
  }

  function deleteTodo(id) {
    const newTods = todos.filter((todo) => todo.id !== id);
    window.localStorage.setItem("todos", JSON.stringify(newTods));
    fetchTodos();
  }

  function updateTodo() {
    console.log("");
  }

  // component return
  return (
    <div>
      <TodoForm addTodoProp={addTodo} />
      <div id="todoContainer">
        <div className="itemDiv">
          {todos.map((item) => {
            return (
              <TodoItem
                key={item.id}
                todoItem={item}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
