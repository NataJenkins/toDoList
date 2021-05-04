import { filterTaskByCurrentProject } from "./index";

const Tasks = () => {
  const getLocalStorageTasks = () => JSON.parse(localStorage.getItem("tasks"));
  const setLocalStorageTasks = (newTaskArray) => {
    localStorage.setItem("tasks", JSON.stringify(newTaskArray));
  };

  const addTask = (taskObj) => {
    let taskArray = getLocalStorageTasks();
    if (taskArray) {
      const tasksId = taskArray.length;
      setLocalStorageTasks([...taskArray, { ...taskObj, id: tasksId }]);
    } else {
      const tasksId = 0;
      setLocalStorageTasks([{ ...taskObj, id: tasksId }]);
    }
    renderTasks();
  };

  const renderTasks = () => {
    const taskListElement = document.querySelector(".tasks-list");
    taskListElement.innerHTML = "";

    if (getLocalStorageTasks()) {
      filterTaskByCurrentProject(getLocalStorageTasks()).forEach((task) => {
        taskListElement.appendChild(createTaskElement(task));
      });
    }
  };

  const editTask = (id) => {
    let taskArray = getLocalStorageTasks();
    const editTaskBtn = document.querySelector("#edit-task-btn");
    const taskName = document.querySelector("#edit-task-name");
    const taskDescription = document.querySelector("#edit-task-description");
    const taskDate = document.querySelector("#edit-task-date");
    taskName.value = taskArray[id].title;
    taskDescription.value = taskArray[id].description;
    taskDate.value = taskArray[id].date;

    $("#editModalTask").modal("show");
    editTaskBtn.addEventListener("click", (e) => {
      if (taskName.value && taskDescription.value && taskDate.value) {
        taskArray[id].title = taskName.value;
        taskArray[id].description = taskDescription.value;
        taskArray[id].date = taskDate.value;

        setLocalStorageTasks(taskArray);
        renderTasks();
        $("#editModalTask").modal("hide");
      } else {
        console.error("Invalid form");
      }
    });
  };

  const removeTask = (id) => {
    let taskArray = getLocalStorageTasks();
    taskArray.splice(id, 1, null);
    setLocalStorageTasks(taskArray);
    renderTasks();
  };

  // Save button on modal
  const saveTask = (currentProject) => {
    document.querySelector("#save-task-btn").addEventListener("click", (e) => {
      const taskName = document.querySelector("#input-task-name");
      const taskDescription = document.querySelector("#input-task-description");
      const taskDate = document.querySelector("#input-task-date");
      if (taskName.value && taskDescription.value && taskDate.value) {
        addTask({
          title: taskName.value,
          project: currentProject,
          description: taskDescription.value,
          date: taskDate.value,
        });
        taskName.value = "";
        taskDescription.value = "";
        taskDate.value = "";
      } else {
        console.error("Invalid form");
      }
    });
  };

  // Create elemets for each task
  const createTaskElement = ({ title, description, date, id }) => {
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

    editBtn.addEventListener("click", (e) => {
      editTask(id);
    });

    return taskContainer;
  };

  return { renderTasks, saveTask };
};

export default Tasks;
