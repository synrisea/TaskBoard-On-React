import React from 'react';
import { Outlet } from 'react-router-dom';
import TaskList from './features/tasks/TaskList/TaskList';

export default function Layout() {
  return (
    <div id="root">
      <aside id="sidebar">
        <h2>Tasks</h2>
        <TaskList />
      </aside>
      <main id="detail">
        <Outlet />
      </main>
    </div>
  );
}