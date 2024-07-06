import React from 'react';

const ListTask = ({ tasks, editTask, toggleComplete, deleteTask, changeStatus }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>
              <select
                value={task.completed ? 'Completed' : 'Not Completed'}
                onChange={(e) => changeStatus(index, e.target.value)}
              >
                <option value="Not Completed">Not Completed</option>
                <option value="Completed">Completed</option>
              </select>
            </td>
            <td>
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListTask;
