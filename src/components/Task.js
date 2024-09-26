import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Task = ({ task, openEditTaskModal }) => {
  return (
    <tr>
      <Td><input type="checkbox" /></Td>
      <Td>{task.assignedTo}</Td>
      <Td>{task.status}</Td>
      <Td>{task.dueDate}</Td>
      <Td>{task.priority}</Td>
      <Td>{task.comments}
        <div>
          <ActionButton onClick={() => openEditTaskModal(task)}>Edit</ActionButton>
          <ActionButton>Delete</ActionButton>
        </div>
      </Td>
    </tr>
  );
};

export default Task;
