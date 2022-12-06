import "./App.css";
import TodoForm from "./components/TodoForm.jsx";
import TodoItem from "./components/TodoItem.jsx";

const todos = [
  {
    id: 1,
    checkbox: true,
    txt: "todo1",
    date: "2022-11-15",
    priority: "Medium",
    notes: "notes1",
  },
];

export default function App() {
  return (
    <div>
      <TodoForm />
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
