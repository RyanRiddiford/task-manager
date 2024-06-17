/**
 * Task service for Task CRUD operations
 */

/**
 * Define the task service
 */
const taskService = {
    /**
     * Fetch all tasks
     * @returns Array of tasks
     */
    fetchTasks: () => {
        //Parse tasks from JSON to array
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        return tasks;
    },
    /**
     * Add task to tasks array
     * @param {*} task The new task to add
     * @returns The newly created task
     */
    addTask: (task) => {
        //Parse tasks from JSON to array
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        //Create new task object and assign current date as id
        const newTask = { ...task, id: Date.now() };
        //Combine tasks with new task in a new array
        const updatedTasks = [...tasks, newTask];
        //Save tasks to localstorage in JSON format
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return newTask;
    },
    /**
     * Update task
     * @param {*} updatedTask The task being updated
     * @returns Updated task
     */
    updateTask: (updatedTask) => {
        //Parse tasks from JSON to array
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        //Find updated task by id and update it in the tasks array
        tasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
        //Save updated tasks to localstorage in JSON format
        localStorage.setItem("tasks", JSON.stringify(tasks));
        return updatedTask;
    },
    /**
     * Delete task by id
     * @param {*} id The id of the task to delete
     */
    deleteTask: (id) => {
        //Parse tasks from JSON to array
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        //Filter out the task to delete
        tasks = tasks.filter(task => task.id !== id);
        //Save the tasks array after filtering out the task to delete
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
};

export default taskService;