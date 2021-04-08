import { filterTaskByCurrentProject } from './index';

const displayTask = ({ title }) => {
  const taskContainer = document.createElement('div');
  const taskInput = document.createElement('input');
  const taskLabel = document.createElement('label');
  taskContainer.setAttribute('class', 'form-check');
  taskInput.setAttribute('class', 'form-check-input');
  taskInput.setAttribute('type', 'checkbox');
  taskInput.setAttribute('name', `${title}`);
  taskInput.setAttribute('value', `${title}`);
  taskLabel.setAttribute('for', `${title}`);
  taskLabel.setAttribute('class', 'form-check-label');
  taskLabel.textContent = title;

  taskContainer.appendChild(taskInput);
  taskContainer.appendChild(taskLabel);

  return taskContainer;
};

const Tasks = () => {
  const tasksList = [];

  const addTask = (taskObj) => {
    tasksList.push(taskObj);
    renderTasks();
  };

  const renderTasks = () => {
    const taskListElement = document.querySelector('.tasks-list');
    taskListElement.innerHTML = '';

    filterTaskByCurrentProject(tasksList).forEach((task) => {
      taskListElement.appendChild(displayTask(task));
    });
  };

  const removeTask = (index) => {
    tasksList.splice(index, 1);
  };

  return { tasksList, addTask, removeTask, renderTasks };
};

export default Tasks;
