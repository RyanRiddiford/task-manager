/**
 * TaskList component that renders a list of tasks with pagination.
 */

//Import dependencies
import React from 'react';
import useTasks from "../hooks/useTasks";
import Task from "./Task";
import TaskForm from "./TaskForm";

/**
 * TaskList component that renders a list of tasks with pagination.
 * Utilizes the useTasks custom hook for task management operations including
 * adding, deleting, and editing tasks, as well as handling pagination.
 * 
 * @returns {JSX.Element} The component includes a task form for adding new tasks,
 * a list of current page tasks, and pagination controls.
 */
const TaskList = () => {
  //Destructure all necessary functions and state variables from the useTasks hook
  const { CURR_TASKS, addTask, deleteTask, editTask, paginate, currentPage, PAGE_SIZE, NUM_TASKS } = useTasks();
  //Calculate page numbers for pagination based on the total number of tasks and page size
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(NUM_TASKS / PAGE_SIZE); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='task-list'>
      <TaskForm addTask={addTask} />

      <h2 style={{ textAlign: "center" }}>Tasks</h2>
      {CURR_TASKS?.map((task) => (
        <Task key={task.id} task={task} deleteTask={deleteTask} editTask={editTask} />
      ))}
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a onClick={() => paginate(number)} href='#!' className={`page-link ${currentPage === number ? 'active' : ''}`}>
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TaskList;