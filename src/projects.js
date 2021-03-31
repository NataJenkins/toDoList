const displayProject = (project) => {
  const projectTitle = document.createElement("li");
  projectTitle.setAttribute("class", "project-list-item");
  const anchorElement = document.createElement('a');
  anchorElement.setAttribute('id', `project-display-${project.id}`);
  anchorElement.setAttribute('href', '#');
  anchorElement.textContent = project.name;
  projectTitle.appendChild(anchorElement);

  return { projectTitle };
};

const Projects = () => {
  const projectsList = [];
  const addProject = (project) => {

    project.id = projectsList.length + 1;
    projectsList.push(displayProject(project));
    const projectListElement = document.querySelector(".projects-list");
    projectListElement.appendChild(projectsList[projectsList.length - 1].projectTitle);
  };

  const removeProject = (index) => {
    projectsLists.splice(index, 1);
  };

  return { projectsList, addProject, removeProject };
};

export default Projects;
