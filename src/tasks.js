import { filterTaskByCurrentProject } from "./index";

const Tasks = () => {
  const getLocalStorageTasks = () => JSON.parse(localStorage.getItem("tasks"));
  const setLocalStorageTasks = (newTaskArray) => {
    localStorage.setItem("tasks", JSON.stringify(newTaskArray));
  };

  const addTask = (taskObj) => {
    let taskArray = getLocalStorageTasks();
    const tasksId = taskArray.length;
    setLocalStorageTasks([...taskArray, { ...taskObj, id: tasksId }]);
    renderTasks();
  };

  const renderTasks = () => {
    const taskListElement = document.querySelector(".tasks-list");
    taskListElement.innerHTML = "";

    filterTaskByCurrentProject(getLocalStorageTasks()).forEach((task) => {
      taskListElement.appendChild(displayTask(task));
    });

    console.log(getLocalStorageTasks);
  };

  const editTask = (taskObj) => {};

  const removeTask = (id) => {
    let taskArray = getLocalStorageTasks();
    taskArray.splice(id, 1, null);
    setLocalStorageTasks(taskArray);
    renderTasks();
  };

  const displayTask = ({ title, description, date, id }) => {
    const taskContainer = document.createElement("div");
    const taskInput = document.createElement("input");
    const taskLabel = document.createElement("label");
    const taskDescription = document.createElement("label");
    const taskDate = document.createElement("label");
    const icons = document.createElement("div");
    const deleteIcon = document.createElement("i");
    const deleteBtn = document.createElement("button");
    const editIcon = document.createElement("i");
    const editBtn = document.createElement("button");

    taskContainer.setAttribute("class", "form-check d-flex");
    taskContainer.setAttribute("id", `title-${title}`);
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
    deleteBtn.setAttribute("id", "delete-btn");
    editIcon.setAttribute("class", "far fa-edit");
    editBtn.setAttribute("id", "edit-btn");

    taskLabel.textContent = title;
    taskDescription.textContent = description;
    taskDate.textContent = date;

    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(icons);
    icons.appendChild(editBtn);
    icons.appendChild(deleteBtn);
    editBtn.appendChild(editIcon);
    deleteBtn.appendChild(deleteIcon);

    deleteBtn.addEventListener("click", (e) => {
      removeTask(id);
    });

    return taskContainer;
  };

  return { addTask, removeTask, renderTasks };
};

export default Tasks;
