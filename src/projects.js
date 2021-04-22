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

const Projects = () => {
  const getLocalStorageProjects = () =>
    JSON.parse(localStorage.getItem("projects"));
  const setLocalStorageProjects = (newProjectArray) => {
    localStorage.setItem("projects", JSON.stringify(newProjectArray));
  };

  const addProject = ({ name }) => {
    let projectArray = getLocalStorageProjects();
    const projectId = projectArray.length;
    setLocalStorageProjects([...projectArray, { name, id: projectId }]);
    renderProjects();
  };

  const renderProjects = () => {
    const projectListElement = document.querySelector(".projects-list");
    projectListElement.innerHTML = "";

    getLocalStorageProjects().forEach((project) => {
      projectListElement.appendChild(displayProject(project));
    });
  };

  // const removeProject = (index) => {
  //   projectsLists.splice(index, 1);
  // };

  return { addProject, renderProjects };
};

export default Projects;
