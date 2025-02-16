import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../../tasksSlice';
import './EditTask.css'


export default function EditTask() {
	const { taskId } = useParams();
	const task = useSelector(state => state.tasks.find(task => String(task.id) === taskId));
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [title, setTitle] = useState(task ? task.title : '');
	const [description, setDescription] = useState(task ? task.description : '');

	useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
        }
    }, [task]);

	if (!task) {
		return <h1>Task is not found.</h1>;
	}


	const handleSave = () => {
		dispatch(
			updateTask({
			id: task.id,
			title,
			description,
			completed: task.completed,
			})
		);
		navigate('/');
	};

	return (
		<div className='edit-task'>
			<h2>Edit task</h2>
			<div>
				<label>Title</label>
				<br></br>
				<input
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
			</div>
			<div>
				<label>Description</label>
				<textarea
					value={description}
					onChange={e => setDescription(e.target.value)}
				/>
			</div>
			<button className="button button-green" onClick={handleSave}>
				Save
			</button>
		</div>
	);
}
