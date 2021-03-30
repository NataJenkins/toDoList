let projects = [];

function addProject(text){
    const todoProject = {
        text,
        checked = false
    };

    projects.push(todoProject);
}