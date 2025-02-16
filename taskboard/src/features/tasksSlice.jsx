import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask: (state, action) => {
			state.push(action.payload);
			localStorage.setItem('tasks', JSON.stringify(state));
		},
		updateTask: (state, action) => {
			const index = state.findIndex(task => task.id === action.payload.id);
			if (index !== -1) {
				state[index] = action.payload;
				localStorage.setItem('tasks', JSON.stringify(state));
			}
		},
		deleteTask: (state, action) => {
			const filteredTasks = state.filter(task => task.id !== action.payload);
			localStorage.setItem('tasks', JSON.stringify(filteredTasks));
			return filteredTasks;
		},
		toggleTask: (state, action) => {
			const task = state.find(task => task.id === action.payload);
			if (task) {
			task.completed = !task.completed;
			localStorage.setItem('tasks', JSON.stringify(state));
			}
		},
	},
});

export const { addTask, updateTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer;
