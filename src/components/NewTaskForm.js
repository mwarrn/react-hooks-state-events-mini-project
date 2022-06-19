import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTask, setNewTask] = useState({
    text: "",
    category: ""
  });

  function handleSubmit(event) {
    event.preventDefault();
    onTaskFormSubmit(newTask);
  }

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewTask({ ...newTask, [name]: value});
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleOnChange} />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */}
          {categories.map((category) => {
            return (
              <option
              key={category}
              value={category}>
                {category === "ALL" ? " " : category}
              </option>
            )
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
