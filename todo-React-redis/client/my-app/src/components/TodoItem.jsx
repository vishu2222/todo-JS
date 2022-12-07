import { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ item }) {
  // useState
  const [txt, setTxt] = useState(item.txt);
  const [checkbox, setCheckbox] = useState(item.checkbox);
  const [notes, setNotes] = useState(item.notes);
  const [date, setDate] = useState(item.date);
  const [priority, setPriority] = useState(item.priority);
  const [displayPropertyDiv, setDisplayProperty] = useState(false);

  // methods
  function toggleDisplay(e) {
    if (e.target.tagName === "DIV") {
      setDisplayProperty(!displayPropertyDiv);
    }
  }

  // react component return
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
          <button>Delete</button>
        </div>
      )}
    </div>
  );
}
