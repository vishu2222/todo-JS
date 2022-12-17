import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";
import TodoFooter from "./components/TodoFooter";
import { useState, useEffect } from "react";
import reqs from "./requests.js";

export default function App() {
  // state
  const [todos, setTodos] = useState([]);
  const [filterOption, setFilterOption] = useState("Show All");

  // methods
  async function addTodo(txt) {
    const newTodo = {
      txt: txt,
      checkbox: false,
      date: "",
      notes: "",
      priority: "",
    };
    await reqs.addTodo(newTodo);
    setTodos(await reqs.fetchTodos());
  }

  async function deleteTodo(id) {
    await reqs.deleteTodo(id);
    setTodos(await reqs.fetchTodos());
  }

  async function updateTodo(id, property, value) {
    await reqs.updateTodo(id, property, value);
    setTodos(await reqs.fetchTodos());
  }

  async function deleteCompleted() {
    await reqs.deleteCompleted();
    setTodos(await reqs.fetchTodos());
  }

  function filterRender(checkboxStatus) {
    if (filterOption === "Show Completed") return checkboxStatus;
    if (filterOption === "Show pending") return !checkboxStatus;
    return true;
  }

  // useEffect
  useEffect(() => {
    reqs.fetchTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  return (
    <div>
      <TodoForm addTodoProp={addTodo} />
      <div id="todoContainer">
        <div className="itemDiv">
          {todos.map(
            (item) =>
              filterRender(item.checkbox) && (
                <TodoItem
                  key={item.id}
                  todoItem={item}
                  deleteTodo={deleteTodo}
                  updateTodo={updateTodo}
                />
              )
          )}
        </div>
      </div>
      <TodoFooter
        showOptions={setFilterOption}
        deleteCompleted={deleteCompleted}
      />
    </div>
  );
}
