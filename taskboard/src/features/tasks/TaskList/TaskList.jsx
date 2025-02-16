import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AddTaskModal from './Modal/AddTaskModal';
import TaskItem from './TaskItem/TaskItem';
import './TaskList.css';

const TaskList = () => {
    const tasks = useSelector(state => state.tasks);
    const [showModal, setShowModal] = useState(false);
    const [filter, setFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTasks = tasks.filter(task => {
        const matchesFilter = filter === 'all' || (filter === 'completed' ? task.completed : !task.completed);
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <div>
            <div className="add-task-container">
                <button onClick={() => setShowModal(true)} className="button button-blue">
                    Add task
                </button>
            </div>

            <div className="filter-container">
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('completed')}>Completed</button>
                <button onClick={() => setFilter('incomplete')}>Unfinished</button>
            </div>

            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <ul className="task-list">
                {filteredTasks.map(task => <TaskItem key={task.id} task={task} />)}
            </ul>

            {showModal && <AddTaskModal onClose={() => setShowModal(false)} />}
        </div>
    );
};

export default TaskList;