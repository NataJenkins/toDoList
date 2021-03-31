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
  projectTitle.innerHTML = `<a href="#" id="project-display">${project.name}</a>`;
  projectTitle.setAttribute("class", "project-list-item");

  return { projectTitle };
};

export { Projects, displayProject };
