/**
 * TaskForm component for adding/editing tasks
 */

//Import dependencies
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';

/**
 * TaskForm is a reusable form component for adding a new task or updating an existing one.
 * It dynamically adjusts its behavior based on the presence of a task to update.
 *
 * @param {Object} props - The component props
 * @param {Function} props.addTask - Function to add a new task
 * @param {Function} props.editTask - Function to update an existing task
 * @param {Object} props.taskToUpdate - The task object to be updated (optional)
 * @returns {JSX.Element} A form for inputting task details with conditional submit behavior
 */
const TaskForm = ({
    addTask,
    editTask,
    taskToUpdate
}) => {
    //Task prop for storing task state
    const [task, setTask] = useState(taskToUpdate || { title: "", description: "", dueDate: "" });
    const [errors, setErrors] = useState({});

    /**
     * Sets task data on changes
     * @param {*} e event object containing target data
     */
    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        //Clear field errors
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    /**
     * Submits new task data for task create/update
     * @param {*} e event object containing target data
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            //Existing tasks have id -> this task is therefore an edit
            if (task.id) {
                editTask(task);
            }
            //No id found -> this task is therefore a creation 
            else {
                addTask(task);
            }
            //Empty input fields of form data after submission
            setTask({ title: "", description: "", dueDate: "" }); // Reset form
        }
    };

    const validateForm = () => {
        let newErrors = {};
        //Check required fields
        if (!task.title) newErrors.title = 'Title is required';
        if (!task.description) newErrors.description = 'Description is required';
        if (!task.dueDate) newErrors.dueDate = 'Due date is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <Form className='task-form' onSubmit={handleSubmit}>
            <h2>Task Form</h2>
            <div>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" value={task.title} onChange={handleChange} placeholder="Title" invalid={!!errors.title} />
                    {errors.title && <FormFeedback>{errors.title}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input type="text" name="description" id="description" value={task.description} onChange={handleChange} placeholder="Description" invalid={!!errors.description} />
                    {errors.description && <FormFeedback>{errors.description}</FormFeedback>}
                </FormGroup>
                <FormGroup>
                    <Label for="dueDate">Due Date</Label>
                    <Input type="date" name="dueDate" id="dueDate" value={task.dueDate} onChange={handleChange} invalid={!!errors.dueDate} />
                    {errors.dueDate && <FormFeedback>{errors.dueDate}</FormFeedback>}
                </FormGroup>
            </div>

            <Button className='btn-margin-btm' type="submit" color="primary">{task.id ? <><span className='btn-txt'>Update</span></> : <><span className='btn-txt'>Add</span></>}
            </Button>
        </Form>
    );
};

export default TaskForm;