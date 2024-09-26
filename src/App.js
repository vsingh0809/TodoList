import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Modal from './components/Modal';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  margin: 10px;
  padding: 8px 16px;
  background-color: #f0c040;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #e5ae10;
  }
`;

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  const openNewTaskModal = () => {
    setEditTask(null);
    setShowModal(true);
  };

  const openEditTaskModal = (task) => {
    setEditTask(task);
    setShowModal(true);
  };

  return (
    <AppContainer>
      <Header>
        <Button onClick={openNewTaskModal}>New Task</Button>
        <Button onClick={() => window.location.reload()}>Refresh</Button>
        <input type="text" placeholder="Search" />
      </Header>
      <TaskList openEditTaskModal={openEditTaskModal} />
      {showModal && <Modal closeModal={() => setShowModal(false)}>
        <TaskForm task={editTask} closeModal={() => setShowModal(false)} />
      </Modal>}
    </AppContainer>
  );
};

export default App;
