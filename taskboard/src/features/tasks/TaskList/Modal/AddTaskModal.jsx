import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../../tasksSlice';
import './Modal.css';

const AddTaskModal = ({ onClose }) => {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (newTitle.trim()) {
            dispatch(
                addTask({
                    id: Date.now(),
                    title: newTitle,
                    description: newDescription.trim() || `Task description for "${newTitle}"`,
                    completed: false,
                })
            );
            setNewTitle('');
            setNewDescription('');
            onClose();
        }
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>ADD TASK</h2>
                <input
                    type="text"
                    value={newTitle}
                    onChange={e => setNewTitle(e.target.value)}
                    placeholder="Task Name"
                    className="modal-input"
                />
                <textarea
                    value={newDescription}
                    onChange={e => setNewDescription(e.target.value)}
                    placeholder="Task Description"
                    className="modal-textarea"
                />
                <div className="modal-buttons">
                    <button onClick={onClose} className="button button-red">Cancel</button>
                    <button onClick={handleAdd} className="button button-blue">Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;