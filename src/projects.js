const displayProject = (project) => {
  const projectTitle = document.createElement("li");
  projectTitle.setAttribute("class", "project-list-item");
  const anchorElement = document.createElement("a");
  anchorElement.setAttribute("id", `project-display-${project.id}`);
  anchorElement.setAttribute("href", "#");
  anchorElement.textContent = project.name;
  projectTitle.appendChild(anchorElement);
  projectTitle.addEventListener('click', () => {
    const element = document.querySelector(`.${project.name}`);
    element.classList.toggle("hidden");
  });
  return { projectTitle };
};

const Projects = () => {
  const projectsList = [];
  const addProject = (project) => {
    project.id = projectsList.length + 1;
    projectsList.push(displayProject(project));
    const projectListElement = document.querySelector(".projects-list");
    projectListElement.appendChild(
      projectsList[projectsList.length - 1].projectTitle
    );
    const parent = document.querySelector('.tasks-list');
    const tasksSection = document.createElement("div");
    tasksSection.setAttribute("class", `${project.name} project`);
    const tasksSectionTitle = document.createElement("h2");
    tasksSectionTitle.textContent = `${project.name} Tasks`;
    tasksSection.appendChild(tasksSectionTitle);
    const tasksContainer = document.createElement("div");
    tasksContainer.setAttribute("class", "list-container");
    tasksSection.appendChild(tasksContainer);
    parent.appendChild(tasksSection);
    const options = document.querySelector("#input-select-task-name");
    const option = document.createElement("option");
    option.setAttribute("value", project.name);
    option.textContent = project.name;
    options.appendChild(option);
  };

  const removeProject = (index) => {
    projectsLists.splice(index, 1);
  };

  return { projectsList, addProject, removeProject };
};

export default Projects;
