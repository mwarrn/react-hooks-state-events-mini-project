import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, setTasks, selectedCategory }) {
  let tasksToDisplay = [...tasks];

  if (selectedCategory !== "All") {
    tasksToDisplay = tasks.filter(task => task.category === selectedCategory ? true : false);
  }

  function handleOnDelete(toDelete) {
    const deletedTask = tasks.filter(task => task.text !== toDelete.text ? true : false);
    setTasks(deletedTask);
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksToDisplay.map((task) => {
        return (
          <Task
          key={uuid()}
          task={task}
          text={task.text}
          category={task.category}
          onDelete={handleOnDelete}
          />
        )}
      )}
    </div>
  );
}

export default TaskList;
