import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import TaskDetails from './features/tasks/TaskDetails/TaskDetails';
import EditTask from './features/tasks/EditTask/EditTask';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<h1>Welcome to the Task Manager!</h1>} />
        <Route path=":taskId" element={<TaskDetails />} />
        <Route path=":taskId/edit" element={<EditTask />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
