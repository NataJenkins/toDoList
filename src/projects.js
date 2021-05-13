import { changeProjectName } from "./index";
const displayProject = ({ id, name }) => {
  const projectTitle = document.createElement("li");
  const anchorElement = document.createElement("a");
  projectTitle.setAttribute("class", "project-list-item");
  anchorElement.setAttribute("id", `project-display-${id}`);
  anchorElement.setAttribute("href", "#");
  anchorElement.textContent = name;
  projectTitle.appendChild(anchorElement);
  projectTitle.addEventListener("click", () => {
    changeProjectName(name, id);
  });
  return projectTitle;
};
const getLocalStorageProjects = () => {
  return JSON.parse(localStorage.getItem("projects"));
  console.log(JSON.parse(localStorage.getItem("projects")));
};
const setLocalStorageProjects = (newProjectArray) => {
  localStorage.setItem("projects", JSON.stringify(newProjectArray));
};
const renderProjects = () => {
  const projectListElement = document.querySelector(".projects-list");
  projectListElement.innerHTML = "";
  getLocalStorageProjects().forEach((project) => {
    projectListElement.appendChild(displayProject(project));
  });
};
const addProject = ({ name }) => {
  let projectArray = getLocalStorageProjects();
  if (projectArray) {
    const projectId = projectArray.length;
    setLocalStorageProjects([...projectArray, { name, id: projectId }]);
  } else {
    const projectId = 0;
    setLocalStorageProjects([{ name, id: projectId }]);
  }
  renderProjects();
};
document.querySelector("#save-project-btn").addEventListener("click", (e) => {
  const projectName = document.querySelector("#input-project-name");
  if (projectName.value) {
    addProject({ name: projectName.value });
    projectName.value = "";
  } else {
    alert("Invalid form");
  }
});
export { addProject, renderProjects };
