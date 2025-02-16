import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './TaskDetails.css';

export default function TaskDetails() {
  const { taskId } = useParams();
  const task = useSelector(state => state.tasks.find(task => String(task.id) === taskId));

  if (!task) {
    return(
      <div>
       <h2>Task is not found.</h2>
       </div>
    )
  }

  return (
    <div className='task-details'>
      <h2>{task.title}</h2>
      <p>Description : {task.description}</p>
      <p>Status : {task.completed ? 'Done' : 'In process'}</p>
    </div>
  );
}
