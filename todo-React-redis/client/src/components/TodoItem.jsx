import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todoItem, deleteTodo, updateTodo }) {
  const id = todoItem.id;
  // useState
  const [txt, setTxt] = useState(todoItem.txt);
  const [checkbox, setCheckbox] = useState(todoItem.checkbox);
  const [notes, setNotes] = useState(todoItem.notes);
  const [date, setDate] = useState(todoItem.date);
  const [priority, setPriority] = useState(todoItem.priority);
  const [displayPropertyDiv, setDisplayProperty] = useState(false);

  // methods
  function toggleDisplay(e) {
    if (e.target.tagName === "DIV") {
      setDisplayProperty(!displayPropertyDiv);
    }
  }

  function setBorderColor() {
    if (priority === "Low") return "groove green";
    if (priority === "Medium") return "groove orange";
    if (priority === "High") return "groove red";
  }

  // component return
  return (
    <div
      className="todoItem"
      onClick={toggleDisplay}
      style={{ "border-left": setBorderColor() }}
    >
      <div className="txtDiv">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked);
            updateTodo(id, "checkbox", e.target.checked);
          }}
        />
        <input
          className="todoTxt-TodoItem"
          type="text"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
            updateTodo(id, "txt", e.target.value);
          }}
          style={{
            width: (txt.length + 1) * 7.5 + "px",
            textDecoration: checkbox ? "line-through" : "none",
          }}
        />
      </div>

      {displayPropertyDiv && (
        <div className="properties">
          <textarea
            className="notes"
            cols="30"
            rows="10"
            value={notes}
            onChange={(e) => {
              setNotes(e.target.value);
              updateTodo(id, "notes", e.target.value);
            }}
          />
          <label className="dateLabel">Due Date</label>
          <input
            className="dateInput"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              updateTodo(id, "date", e.target.value);
            }}
          />
          <label className="priorityLabel">Priority</label>
          <select
            className="priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              updateTodo(id, "priority", e.target.value);
            }}
          >
            <option>None</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button
            onClick={() => {
              deleteTodo(id);
            }}
            className="deleteButton"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
