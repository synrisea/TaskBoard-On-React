import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../../../tasksSlice';
import '../TaskList.css'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = location.pathname === `/${task.id}` || location.pathname === `/${task.id}/edit`;

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
        if (isActive) navigate('/');
    };

    return (
        <li>
            <div className={`task-item-container ${isActive ? 'task-item-active' : ''}`}>
                <div>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => dispatch(toggleTask(task.id))}
                    />
                    <Link to={`/${task.id}`} className="task-link">{task.title}</Link>
                </div>
                <div>
                    <button onClick={() => navigate(`/${task.id}/edit`)} className="edit-button">Redact</button>
                    <button onClick={handleDelete} className="button button-red">Delete</button>
                </div>
            </div>
        </li>
    );
};

export default TaskItem;
