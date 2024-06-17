/**
 * Task component that renders individual tasks with options to edit or delete
 */

//Import dependencies
import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button, Input, FormFeedback } from 'reactstrap';

/**
 * Task component that renders individual tasks with options to edit or delete
 * 
 * @param {Object} props - Contains the task object and functions to edit and delete the task
 * @param {Object} props.task - Task data with title, description, and due date
 * @param {Function} props.deleteTask - Function to delete the task
 * @param {Function} props.editTask - Function to submit changes to the task
 * @returns {JSX.Element} A card component displaying the task or an editable form if in edit mode
 */
const Task = ({ task, deleteTask, editTask }) => {
  //Tracks if the task is in edit mode
  const [isEditing, setIsEditing] = useState(false);
  //Stores edits to task
  const [editedTask, setEditedTask] = useState({
    title: task.title,
    description: task.description,
    dueDate: task.dueDate
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
    //Clear field errors
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const validateEdit = () => {
    let newErrors = {};
    //Check required fields
    if (!editedTask.title.trim()) newErrors.title = 'Title is required';
    if (!editedTask.description.trim()) newErrors.description = 'Description is required';
    if (!editedTask.dueDate.trim()) newErrors.dueDate = 'Due date is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //Handler for edit submission and exits edit mode
  const handleEdit = () => {
    if (validateEdit()) {
      editTask({ ...task, ...editedTask });
      setIsEditing(false);
      setErrors({});
    }
  };

  //Handler for cancelling edit submission and exits edit mode
  const handleCancel = () => {
    setIsEditing(false);
    setEditedTask({ title: task.title, description: task.description, dueDate: task.dueDate });
    setErrors({});
  };

  return (
    <Card className="task-card">
      <CardBody>
        {isEditing ? (
          <div className='edit-form-container'>
            <Input
              type="text"
              name="title"
              value={editedTask.title}
              onChange={handleChange}
              invalid={!!errors.title}
            />
            <FormFeedback>{errors.title}</FormFeedback>
            <Input
              type="textarea"
              name="description"
              value={editedTask.description}
              onChange={handleChange}
              invalid={!!errors.description}
            />
            <FormFeedback>{errors.description}</FormFeedback>
            <Input
              type="date"
              name="dueDate"
              value={editedTask.dueDate}
              onChange={handleChange}
              invalid={!!errors.dueDate}
            />
            <FormFeedback>{errors.dueDate}</FormFeedback>
            <div className='task-btn-container'>
              <Button onClick={handleEdit} color="success">Save</Button>
              <Button onClick={handleCancel} color="secondary">Cancel</Button>
            </div>
          </div>
        ) : (
          <>
            <CardTitle tag="h5">{task.title}</CardTitle>
            <CardText>{task.description}</CardText>
            <CardText><small className="text-muted">Due on: {task.dueDate}</small></CardText>
            <div className='task-btn-container'>
              <Button onClick={() => setIsEditing(true)} color="secondary">Edit</Button>
              <Button onClick={() => deleteTask(task.id)} color="danger">Delete</Button>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
};

export default Task;