const Projects = () => {
  const projectsList = [];
  const addProject = (project) => {
    projectsList.push(project);
  };

  const removeProject = (index) => {
    projectsLists.splice(index, 1);
  };

  return { projectsList, addProject, removeProject };
};

const displayProject = (project) => {
  const projectTitle = document.createElement("li");
  projectTitle.setAttribute("class", "project-list-item");

  const projectAnc = document.createElement("a");
  projectAnc.textContent = project.name;
  projectAnc.setAttribute("id", "project-display");
  projectTitle.appendChild(projectAnc);

  return { projectTitle };
};

export { Projects, displayProject };
