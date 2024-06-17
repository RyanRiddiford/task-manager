/**
 * Root React component
 */

//DEPENDENCIES
import React from 'react';
//Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Components
import TaskList from './components/TaskList';
import Weather from './components/Weather';

/**
 * Define root react component
 * @returns The root react component
 */
function App() {
  return (
    <div className="container">
      <h1>Simple Task Manager</h1>
      <Weather />
      <TaskList />
    </div>
  );
}

export default App;