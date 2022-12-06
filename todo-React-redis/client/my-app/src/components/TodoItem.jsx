import { useState } from "react";
import "./TodoItem.css";

function TodoItem({ item }) {
  // useState
  const [txt, setTxt] = useState(item.txt);
  const [checkbox, setCheckbox] = useState(item.checkbox);
  const [notes, setNotes] = useState(item.notes);
  const [date, setDate] = useState(item.date);
  const [priority, setPriority] = useState(item.priority);
  // return
  return (
    <div className="todoItem">
      <input
        type="checkbox"
        checked={checkbox}
        onChange={(e) => setCheckbox(e.target.checked)}
      />
      <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
      <div className="properties">
        <textarea
          cols="30"
          rows="10"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <label>Due Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Priority</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>None</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
