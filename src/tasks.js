import { filterTaskByCurrentProject } from "./index";

const displayTask = ({ title, description, date }) => {
  const taskContainer = document.createElement("div");
  const taskInput = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDescription = document.createElement("label");
  const taskDate = document.createElement("label");
  const icons = document.createElement("div");
  const deleteIcon = document.createElement("i");
  const edithIcon = document.createElement("i");

  taskContainer.setAttribute("class", "form-check d-flex");
  taskInput.setAttribute("class", "form-check-input");
  taskInput.setAttribute("type", "checkbox");
  taskInput.setAttribute("name", `${title}`);
  taskInput.setAttribute("value", `${title}`);
  taskLabel.setAttribute("for", `${title}`);
  taskLabel.setAttribute("class", "form-check-label form-check-element");
  taskDescription.setAttribute("class", "description form-check-element");
  taskDate.setAttribute("class", "date form-check-element");
  icons.setAttribute("class", "icons");
  deleteIcon.setAttribute("class", "far fa-trash-alt");
  edithIcon.setAttribute("class", "far fa-edit");

  taskLabel.textContent = title;
  taskDescription.textContent = description;
  taskDate.textContent = date;

  taskContainer.appendChild(taskInput);
  taskContainer.appendChild(taskLabel);
  taskContainer.appendChild(taskDescription);
  taskContainer.appendChild(taskDate);
  taskContainer.appendChild(icons);
  icons.appendChild(edithIcon);
  icons.appendChild(deleteIcon);

  return taskContainer;
};

const Tasks = () => {
  const tasksList = [];

  const addTask = (taskObj) => {
    tasksList.push(taskObj);
    renderTasks();
  };

  const renderTasks = () => {
    const taskListElement = document.querySelector(".tasks-list");
    taskListElement.innerHTML = "";

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
