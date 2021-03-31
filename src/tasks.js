const displayTask = (task) => {
  const taskCont = document.createElement("div");
  taskCont.setAttribute("class", "form-check");
  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  const taskTitle = document.createElement("label");
  taskTitle.setAttribute("class", "form-check-label");
  taskTitle.textContent = task.title;
  taskCont.appendChild(taskCheck);
  taskCont.appendChild(taskTitle);

  console.log(task);
  return { taskCont };
};

const Tasks = () => {
  const tasksList = [];
  const addTask = (task) => {
    tasksList.push(displayTask(task));
    const taskListElement = document.querySelector(".tasks-list");
    taskListElement.appendChild(tasksList[tasksList.length - 1].taskCont);
    console.log(tasksList[tasksList.length - 1].taskCont);
  };
  return { tasksList, addTask };
};

export default Tasks;
