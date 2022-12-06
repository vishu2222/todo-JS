export default function TodoItem({ item }) {
  return (
    <div className="todoItem">
      <input type="checkbox" value={item.checkbox} />
      <input type="text" value={item.txt} />
      <div className="properties">
        <textarea cols="30" rows="10" value={item.notes} />
        <label>Due Date</label>
        <input type="date" value={item.date} />
        <label>Priority</label>
        <select value={item.priority}>
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
