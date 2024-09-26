import React from 'react';
import Task from './Task';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Thead = styled.thead`
  background-color: #f5f5f5;
`;

const Th = styled.th`
  padding: 10px;
  border: 1px solid #ddd;
`;

const TaskList = ({ openEditTaskModal }) => {
  const tasks = [
    { id: 1, assignedTo: 'User 1', status: 'Completed', dueDate: '12/10/2024', priority: 'Low', comments: 'This task is good' },
    { id: 2, assignedTo: 'User 2', status: 'In Progress', dueDate: '14/09/2024', priority: 'High', comments: 'This task needs review' },
    // Add more tasks
  ];

  return (
    <Table>
      <Thead>
        <tr>
          <Th><input type="checkbox" /></Th>
          <Th >Assigned To</Th>
          <Th>Status</Th>
          <Th>Due Date</Th>
          <Th>Priority</Th>
          <Th>Comments</Th>
        </tr>
      </Thead>
      <tbody>
        {tasks.map((task) => (
          <Task key={task.id} task={task} openEditTaskModal={openEditTaskModal} />
        ))}
      </tbody>
    </Table>
  );
};

export default TaskList;
