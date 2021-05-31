import { renderProjects } from "./projects";
import { saveTask, renderTasks } from "./tasks";
export const changeProjectName = (name, id) => {
  currentProject = name;
  const taskHeader = document.querySelector(".tasks-container > h1");
  const selectedProject = document.querySelector(".selected-project");
  taskHeader.textContent = `${currentProject} Tasks`;
  if (selectedProject) {
    selectedProject.classList.remove("selected-project");
  }
  document
    .querySelector(`#project-display-${id}`)
    .classList.add("selected-project");
  renderTaskContainer(currentProject);
  renderTasks();
};
export const filterTaskByCurrentProject = (tasksArr) =>
  tasksArr.filter((task) => task && task.project === currentProject);
let currentProject = undefined;
if (localStorage.getItem("projects")) {
  renderProjects();
}

const renderTaskContainer = (isCurrentProject) => {
  if (!isCurrentProject) {
    document.querySelector(".tasks-container").classList.add("d-none");
  } else {
    document.querySelector(".tasks-container").classList.remove("d-none");
  }
};
