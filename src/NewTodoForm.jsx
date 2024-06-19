import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewitem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit(newItem);

    setNewitem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewitem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
