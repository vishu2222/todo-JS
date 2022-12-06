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
  {
    id: 2,
    checkbox: false,
    txt: "todo1",
    date: "2022-12-22",
    priority: "Low",
    notes: "notes2",
  },
];

export default function App() {
  return (
    <div>
      <TodoForm />
      <div className="itemDiv">
        {todos.map((item, index) => {
          return <TodoItem key={index} item={item} />;
        })}
      </div>
    </div>
  );
}

// <TodoItem item={todos[0]} />
