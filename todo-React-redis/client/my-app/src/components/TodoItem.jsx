import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ todoItem, deleteTodo }) {
  // useState
  const [txt, setTxt] = useState(todoItem.txt);
  const [checkbox, setCheckbox] = useState(todoItem.checkbox);
  const [notes, setNotes] = useState(todoItem.notes);
  const [date, setDate] = useState(todoItem.date);
  const [priority, setPriority] = useState(todoItem.priority);
  const [displayPropertyDiv, setDisplayProperty] = useState(false);
  const id = todoItem.id;

  // methods
  function toggleDisplay(e) {
    if (e.target.tagName === "DIV") {
      setDisplayProperty(!displayPropertyDiv);
    }
  }

  // function update() {}

  function delTodo() {
    deleteTodo(id);
  }

  // component return
  return (
    <div className="todoItem" onClick={toggleDisplay}>
      <div className="txtDiv">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => setCheckbox(e.target.checked)}
        />
        <input
          className="todoTxt-TodoItem"
          type="text"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          style={{ width: (txt.length + 10) * 8 + "px" }}
        />
      </div>

      {displayPropertyDiv && (
        <div className="properties">
          <textarea
            className="notes"
            cols="30"
            rows="10"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <label className="dateLabel">Due Date</label>
          <input
            className="dateInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label className="priorityLabel">Priority</label>
          <select
            className="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option>None</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={delTodo}>Delete</button>
        </div>
      )}
    </div>
  );
}
