import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import { useState, useEffect } from "react";
import { fetchTodos, addTodo_request, updateTodo_request } from "./requests.js";
import { deleteTodo_request } from "./requests.js";

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

  async function deleteTodo(id) {
    await deleteTodo_request(id);
    setTodos(await fetchTodos());
  }

  async function updateTodo(id, property, value) {
    await updateTodo_request(id, property, value);
    setTodos(await fetchTodos());
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
