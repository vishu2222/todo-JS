import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState, useEffect } from "react";
import { fetchTodos, addTodo_request } from "./requests.js";

export default function App() {
  // state
  const [todos, setTodos] = useState([]);

  // methods
  async function addTodo(txt) {
    const newTodo = {
      txt: txt,
      checkbox: false,
      date: "",
      notes: "",
      priority: "",
    };
    await addTodo_request(newTodo);
    setTodos(await fetchTodos());
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
    fetchTodos();
  }

  function updateTodo(id, property, value) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo[`${property}`] = value;
        return todo;
      } else return todo;
    });
    window.localStorage.setItem("todos", JSON.stringify(newTodos));
    fetchTodos();
  }

  // useEffect
  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
    });
  }, []);

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
