const Tasks = () => {
  const taskList = {};

  const addTask = (task) => {
    taskList[task.name] = task;
  };

  const removeTask = (taskName) => {
      delete taskList[taskName];
  }

  return { taskList, addTask, removeTask };
}

export default Tasks;
