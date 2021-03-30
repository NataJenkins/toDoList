import Projects from "./projects";
import Tasks from "./tasks";

const TaskUnit = (title, description, dueDate, priority) => {
  return { title, description, dueDate, priority };
};

const ProjectUnit = name => {
  return { name };
};

const myProjects = Projects();
const myTasks = Tasks();
const sampleProject = ProjectUnit("TODO App", "Microverse JS");
const sampleTask = TaskUnit("JS Code", "Complete basic JS functionalities", "03/30/2021", "High");
myProjects.addProject(sampleProject);
myTasks.addTask(sampleTask);

const projectListElement = document.querySelector('.projects-list');
const saveProjectBtn = document.querySelector('#save-project-btn');

window.addEventListener('click', (event) => {
  if (event.target === saveProjectBtn) {
    const projectName = document.querySelector('#input-project-name').value;
    const newProject = ProjectUnit(projectName);
    myProjects.addProject(newProject);
    console.log(myProjects.projectsList);
  }
});


// <li class="project-list-item"><a href="#">Project 1</a></li>



