import { changeProjectName } from './index';

const displayProject = ({ id, name }) => {
  const projectTitle = document.createElement('li');
  const anchorElement = document.createElement('a');

  projectTitle.setAttribute('class', 'project-list-item');
  anchorElement.setAttribute('id', `project-display-${id}`);
  anchorElement.setAttribute('href', '#');
  anchorElement.textContent = name;
 
  projectTitle.appendChild(anchorElement);
  projectTitle.addEventListener('click', () => {
    changeProjectName(name, id);
  });
  return projectTitle;
};

const Projects = () => {
  const projectList = [];

  const addProject = ({ name }) => {
    const projectId = projectList.length;
    projectList.push({ id: projectId, name });
    renderProjects();
  };

  const renderProjects = () => {
    const projectListElement = document.querySelector('.projects-list');
    projectListElement.innerHTML = '';

    projectList.forEach((project) => {
      projectListElement.appendChild(displayProject(project));
    });
  };

  const removeProject = (index) => {
    projectsLists.splice(index, 1);
  };

  return { projectList, addProject, removeProject };
};

export default Projects;
