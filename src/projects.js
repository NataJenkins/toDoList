const Projects = () => {
  const projectsList = {};
  const addProject = project => {
    projectsList[project] = project;
  }

  const removeProject = projectName => {
    delete projectsList[projectName];
  }

  return { projectsList, addProject, removeProject };
}

export default Projects;
