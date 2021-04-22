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
  const projectList = [
    { name: "hola", id: 0 },
    { name: "hola1", id: 1 },
    { name: "hola2", id: 2 },
    { name: "hola3", id: 3 },
  ];

  const addProject = ({ name }) => {
    const projectId = projectList.length;
    projectList.push({ id: projectId, name });
    renderProjects();
  };

  const renderProjects = () => {
    const projectListElement = document.querySelector(".projects-list");
    projectListElement.innerHTML = "";

    projectList.forEach((project) => {
      projectListElement.appendChild(displayProject(project));
    });
  };

  const removeProject = (index) => {
    projectsLists.splice(index, 1);
  };

  return { projectList, addProject, removeProject, renderProjects };
};

export default Projects;
