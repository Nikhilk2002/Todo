import React, { useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask';
import './Todo.css'

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (index) => {
    const newTitle = prompt('New title:', tasks[index].title);
    const newDescription = prompt('New description:', tasks[index].description);
    if (newTitle && newDescription) {
      const newTasks = [...tasks];
      newTasks[index] = { ...newTasks[index], title: newTitle, description: newDescription };
      setTasks(newTasks);
    }
  };

  const changeStatus = (index, status) => {
    const newTasks = [...tasks];
    newTasks[index].completed = status === 'Completed';
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} editTask={editTask} changeStatus={changeStatus} deleteTask={deleteTask} />
    </div>
  );
};

export default Todo;
