const displayTask = (task) => {
  const taskContainer = document.createElement("div");
  taskContainer.setAttribute("class", "form-check");
  const taskInput = document.createElement("input");
  taskInput.setAttribute("class", "form-check-input");
  taskInput.setAttribute("type", "checkbox");
  taskInput.setAttribute("id", `flexCheckDefault-${task.id}`);
  taskInput.setAttribute("name", `${task.title}`);
  taskInput.setAttribute("value", `${task.title}`);
  const taskLabel = document.createElement("label");
  taskLabel.setAttribute("for", `${task.title}`);
  taskLabel.setAttribute("class", "form-check-label");
  taskLabel.textContent = task.title
  taskContainer.appendChild(taskInput);
  taskContainer.appendChild(taskLabel);

  return { taskContainer };
};

const Tasks = () => {
  const tasksList = [];
  const addTask = (task) => {
    task.id = tasksList.length + 1;
    tasksList.push(displayTask(task));
    const taskListElement = document.querySelector(".tasks-list");
    taskListElement.appendChild(tasksList[tasksList.length - 1].taskContainer);
  };

  const removeTask = (index) => {
    tasksList.splice(index, 1);
  };

  return { tasksList, addTask, removeTask };
};

export default Tasks;
