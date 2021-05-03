import Projects from "./projects";
import Tasks from "./tasks";

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

const { addProject, renderProjects } = Projects();
const { renderTasks } = Tasks();
let currentProject = undefined;
renderProjects();

const saveProjectBtn = document.querySelector("#save-project-btn");

saveProjectBtn.addEventListener("click", (e) => {
  const projectName = document.querySelector("#input-project-name");
  addProject({ name: projectName.value });
  projectName.value = "";
});

const renderTaskContainer = (isCurrentProject) => {
  if (!isCurrentProject) {
    document.querySelector(".tasks-container").classList.add("d-none");
  } else {
    document.querySelector(".tasks-container").classList.remove("d-none");
  }
};
