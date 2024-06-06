import React, { useState } from "react";
// useContext, createContext

function AddTask({ addTask }) {
  const [task, setTask] = useState("");

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className="tasks">
      <input
        className="taskInput"
        placeholder="Enter new task"
        value={task}
        onChange={handleInputChange}
      />
      <button className="addTask" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
}

export default AddTask;
