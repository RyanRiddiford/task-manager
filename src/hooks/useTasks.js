/**
 * Hook for providing task handling for tasks
 */

//Import dependencies
import { useState, useEffect } from "react";
import taskService from "../services/taskService";

/**
 * Custom hook for managing tasks, including CRUD operations and pagination.
 * Utilizes a task service to perform actual data fetching and updates.
 *
 * @returns {Object} Returns all utilities and data necessary for task management
 * including the current page's tasks, CRUD operations, pagination functions, and more.
 */
const useTasks = () => {
    //Prop for storing tasks array
    const [tasks, setTasks] = useState([]);
    //Current page index
    const [currentPage, setCurrentPage] = useState(1);
    //Max tasks per page
    const MAX_PAGE_SIZE = 10;

    /**
     * Load existing tasks from storage
     */
    useEffect(() => {
        const loadedTasks = taskService.fetchTasks();
        setTasks(loadedTasks);
    }, []);

    //Index of the last task on the current page
    const INDEX_LAST_TASK = currentPage * MAX_PAGE_SIZE;
    //Index of the first task on the current page
    const INDEX_FIRST_TASK = INDEX_LAST_TASK - MAX_PAGE_SIZE;
    //Array of tasks on the current page
    const CURR_TASKS = tasks.slice(INDEX_FIRST_TASK, INDEX_LAST_TASK);


    /**
     * Add task
     * @param {*} task The task to add
     */
    const addTask = (task) => {
        const newTask = taskService.addTask(task);
        setTasks(prevTasks => [...prevTasks, newTask]);
    };

    const calculatePages = () => Math.ceil(tasks.length / MAX_PAGE_SIZE);

    /**
     * Delete task by id
     * @param {*} taskId The task to delete's id
     */
    const deleteTask = async (taskId) => {
        await taskService.deleteTask(taskId);
        setTasks(prevTasks => {
            const filteredTasks = prevTasks.filter(t => t.id !== taskId);
            //Check if the page is now empty and we're not on the first page
            if (currentPage > calculatePages()) {
                setCurrentPage(currentPage - 1);
            }
            return filteredTasks;
        });
    };

    /**
     * Edit task
     * @param {*} updatedTask The task to update
     */
    const editTask = (updatedTask) => {
        const newTask = taskService.updateTask(updatedTask);
        setTasks(prevTasks => prevTasks.map(task => task.id === newTask.id ? newTask : task));
    };

    /**
     * Changes the current page number, affecting which tasks are displayed.
     * @param {*} pageNumber The new page number to navigate to
     */
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return {
        CURR_TASKS,
        addTask,
        deleteTask,
        editTask,
        paginate,
        currentPage,
        PAGE_SIZE: MAX_PAGE_SIZE,
        NUM_TASKS: tasks.length
    };

};

export default useTasks;