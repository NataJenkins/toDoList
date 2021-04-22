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
const { addTask, renderTasks } = Tasks();
let currentProject = undefined;
renderProjects();

const saveProjectBtn = document.querySelector("#save-project-btn");
const saveTaskBtn = document.querySelector("#save-task-btn");

saveProjectBtn.addEventListener("click", (e) => {
  const projectName = document.querySelector("#input-project-name");
  addProject({ name: projectName.value });
  projectName.value = "";
});

saveTaskBtn.addEventListener("click", (e) => {
  const taskName = document.querySelector("#input-task-name");
  const taskDescription = document.querySelector("#input-task-description");
  const taskDate = document.querySelector("#input-task-date");
  addTask({
    title: taskName.value,
    project: currentProject,
    description: taskDescription.value,
    date: taskDate.value,
  });
  taskName.value = "";
});

const renderTaskContainer = (isCurrentProject) => {
  if (!isCurrentProject) {
    document.querySelector(".tasks-container").classList.add("d-none");
  } else {
    document.querySelector(".tasks-container").classList.remove("d-none");
  }
};
