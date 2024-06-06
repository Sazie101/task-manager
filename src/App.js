import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import trashIcon from '../src/img/trash-solid.svg'; 
import editIcon from '../src/img/pen-to-square-solid.svg';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { text: task, time: new Date().toLocaleTimeString() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const editTask = (index) => {
    const newText = prompt("Edit Task", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
      const newTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: newText } : task
      );
      setTasks(newTasks);
    }
  };

  return (
    <main>
      <div className="container">
        <h1>Task Manager</h1>
        <AddTask addTask={addTask} />
        <div className="taskList">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <span className="taskText">{task.text}</span>
              <section className="buttons">
                <p className="taskTime">{task.time}</p>
                <section>
                  <button className="editBtn" onClick={() => editTask(index)}>
                    <img className="editImg" src={editIcon} alt="Edit" />
                  </button>
                  <button className="deleteBtn" onClick={() => deleteTask(index)}>
                    <img className="deleteImg" src={trashIcon} alt="Delete" />
                  </button>
                </section>
              </section>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;