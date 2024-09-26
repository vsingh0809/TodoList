import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  padding: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

// Define valid priorities
const validPriorities = ["low", "normal", "high"];

const TaskForm = ({ task, closeModal }) => {
  const [formData, setFormData] = useState({
    assignedTo: task?.assignedTo || '',
    status: task?.status || '',
    dueDate: task?.dueDate || '',
    priority: task?.priority || 'normal', // Default to 'normal'
    comments: task?.comments || '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is priority and validate it
    if (name === 'priority') {
      if (validPriorities.includes(value)) {
        setFormData({ ...formData, [name]: value });
      } else {
        setFormData({ ...formData, [name]: 'normal' }); // Default to 'normal' if invalid
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that all fields are filled
    if (!formData.assignedTo || !formData.status || !formData.dueDate || !formData.priority || !formData.comments) {
      setError('All fields are required.');
      return; // Prevent form submission
    }

    // Clear error message and handle form submission (edit or create logic here)
    setError('');
    closeModal();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Input
        name="assignedTo"
        placeholder="Assigned To"
        value={formData.assignedTo}
        onChange={handleChange}
      />
      <Input
        name="status"
        placeholder="Status"
        value={formData.status}
        onChange={handleChange}
      />
      <Input
        name="dueDate"
        placeholder="Due Date"
        type="date"
        value={formData.dueDate}
        onChange={handleChange}
      />
      <Input
        name="priority"
        placeholder="Priority (low, normal, high)"
        value={formData.priority}
        onChange={handleChange}
      />
      <Input
        name="comments"
        placeholder="Comments"
        value={formData.comments}
        onChange={handleChange}
      />
      <Button type="submit">Save</Button>
    </Form>
  );
};

export default TaskForm;
