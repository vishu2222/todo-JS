import { useState } from 'react';
import './TodoItem.css';

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
    if (e.target.tagName === 'DIV') {
      setDisplayProperty(!displayPropertyDiv);
    }
  }

  function updateHandler(property, value) {
    updateTodo(id, property, value);
  }

  function deleteHandler() {
    deleteTodo(id);
  }

  function setBorderColor() {
    if (priority === 'Low') return 'groove green';
    if (priority === 'Medium') return 'groove orange';
    if (priority === 'High') return 'groove red';
  }

  function textDecor() {
    if (checkbox === true) return 'line-through';
    return 'none';
  }

  // component return
  return (
    <div className="todoItem" onClick={toggleDisplay} style={{ border: setBorderColor() }}>
      <div className="txtDiv">
        <input
          type="checkbox"
          checked={checkbox}
          onChange={(e) => {
            setCheckbox(e.target.checked);
            updateHandler('checkbox', e.target.checked);
          }}
        />
        <input
          className="todoTxt-TodoItem"
          type="text"
          value={txt}
          onChange={(e) => {
            setTxt(e.target.value);
            updateHandler('txt', e.target.value);
          }}
          style={{ width: (txt.length + 3) * 7.5 + 'px', textDecoration: textDecor() }}
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
              updateHandler('notes', e.target.value);
            }}
          />
          <label className="dateLabel">Due Date</label>
          <input
            className="dateInput"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              updateHandler('date', e.target.value);
            }}
          />
          <label className="priorityLabel">Priority</label>
          <select
            className="priority"
            value={priority}
            onChange={(e) => {
              setPriority(e.target.value);
              updateHandler('priority', e.target.value);
            }}
          >
            <option>None</option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      )}
    </div>
  );
}
