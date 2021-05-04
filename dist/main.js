/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProjectName\": () => (/* binding */ changeProjectName),\n/* harmony export */   \"filterTaskByCurrentProject\": () => (/* binding */ filterTaskByCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst changeProjectName = (name, id) => {\n  currentProject = name;\n  const taskHeader = document.querySelector(\".tasks-container > h1\");\n  const selectedProject = document.querySelector(\".selected-project\");\n  taskHeader.textContent = `${currentProject} Tasks`;\n  if (selectedProject) {\n    selectedProject.classList.remove(\"selected-project\");\n  }\n  document\n    .querySelector(`#project-display-${id}`)\n    .classList.add(\"selected-project\");\n\n  renderTaskContainer(currentProject);\n  renderTasks();\n};\n\nconst filterTaskByCurrentProject = (tasksArr) =>\n  tasksArr.filter((task) => task && task.project === currentProject);\n\nlet currentProject = undefined;\nconst { addProject, renderProjects } = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst { saveTask, renderTasks } = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\n\nif (localStorage.getItem(\"projects\")) {\n  renderProjects();\n}\n\ndocument.querySelector(\"#save-task-btn\").addEventListener(\"click\", (e) => {\n  saveTask(currentProject);\n});\n\nconst renderTaskContainer = (isCurrentProject) => {\n  if (!isCurrentProject) {\n    document.querySelector(\".tasks-container\").classList.add(\"d-none\");\n  } else {\n    document.querySelector(\".tasks-container\").classList.remove(\"d-none\");\n  }\n};\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst displayProject = ({ id, name }) => {\n  const projectTitle = document.createElement(\"li\");\n  const anchorElement = document.createElement(\"a\");\n\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\n  anchorElement.setAttribute(\"id\", `project-display-${id}`);\n  anchorElement.setAttribute(\"href\", \"#\");\n  anchorElement.textContent = name;\n\n  projectTitle.appendChild(anchorElement);\n  projectTitle.addEventListener(\"click\", () => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeProjectName)(name, id);\n  });\n  return projectTitle;\n};\n\nconst Projects = () => {\n  const getLocalStorageProjects = () =>\n    JSON.parse(localStorage.getItem(\"projects\"));\n  const setLocalStorageProjects = (newProjectArray) => {\n    localStorage.setItem(\"projects\", JSON.stringify(newProjectArray));\n  };\n\n  const addProject = ({ name }) => {\n    let projectArray = getLocalStorageProjects();\n    if (projectArray) {\n      const projectId = projectArray.length;\n      setLocalStorageProjects([...projectArray, { name, id: projectId }]);\n    } else {\n      const projectId = 0;\n      setLocalStorageProjects([{ name, id: projectId }]);\n    }\n    renderProjects();\n  };\n\n  const renderProjects = () => {\n    const projectListElement = document.querySelector(\".projects-list\");\n    projectListElement.innerHTML = \"\";\n    getLocalStorageProjects().forEach((project) => {\n      projectListElement.appendChild(displayProject(project));\n    });\n  };\n\n  document.querySelector(\"#save-project-btn\").addEventListener(\"click\", (e) => {\n    const projectName = document.querySelector(\"#input-project-name\");\n    if (projectName.value) {\n      addProject({ name: projectName.value });\n      projectName.value = \"\";\n    } else {\n      alert(\"Invalid form\");\n    }\n  });\n\n  return { addProject, renderProjects };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst Tasks = () => {\n  const getLocalStorageTasks = () => JSON.parse(localStorage.getItem(\"tasks\"));\n  const setLocalStorageTasks = (newTaskArray) => {\n    localStorage.setItem(\"tasks\", JSON.stringify(newTaskArray));\n  };\n\n  const addTask = (taskObj) => {\n    let taskArray = getLocalStorageTasks();\n    if (taskArray) {\n      const tasksId = taskArray.length;\n      setLocalStorageTasks([...taskArray, { ...taskObj, id: tasksId }]);\n    } else {\n      const tasksId = 0;\n      setLocalStorageTasks([{ ...taskObj, id: tasksId }]);\n    }\n    renderTasks();\n  };\n\n  const renderTasks = () => {\n    const taskListElement = document.querySelector(\".tasks-list\");\n    taskListElement.innerHTML = \"\";\n\n    if (getLocalStorageTasks()) {\n      (0,_index__WEBPACK_IMPORTED_MODULE_0__.filterTaskByCurrentProject)(getLocalStorageTasks()).forEach((task) => {\n        taskListElement.appendChild(createTaskElement(task));\n      });\n    }\n  };\n\n  const editTask = (id) => {\n    let taskArray = getLocalStorageTasks();\n    const editTaskBtn = document.querySelector(\"#edit-task-btn\");\n    const taskName = document.querySelector(\"#edit-task-name\");\n    const taskDescription = document.querySelector(\"#edit-task-description\");\n    const taskDate = document.querySelector(\"#edit-task-date\");\n    const taskPriority = document.querySelector(\"#edit-task-priority\");\n    taskName.value = taskArray[id].title;\n    taskDescription.value = taskArray[id].description;\n    taskDate.value = taskArray[id].date;\n    taskPriority.value = taskArray[id].priority;\n\n    $(\"#editModalTask\").modal(\"show\");\n    editTaskBtn.addEventListener(\"click\", (e) => {\n      if (taskName.value && taskDescription.value && taskDate.value) {\n        taskArray[id].title = taskName.value;\n        taskArray[id].description = taskDescription.value;\n        taskArray[id].date = taskDate.value;\n        taskArray[id].priority = taskPriority.value;\n\n        setLocalStorageTasks(taskArray);\n        renderTasks();\n        $(\"#editModalTask\").modal(\"hide\");\n      } else {\n        alert(\"Invalid form\");\n      }\n    });\n  };\n\n  const removeTask = (id) => {\n    let taskArray = getLocalStorageTasks();\n    taskArray.splice(id, 1, null);\n    setLocalStorageTasks(taskArray);\n    renderTasks();\n  };\n\n  // Save button on modal\n  const saveTask = (currentProject) => {\n    document.querySelector(\"#save-task-btn\").addEventListener(\"click\", (e) => {\n      const taskName = document.querySelector(\"#input-task-name\");\n      const taskDescription = document.querySelector(\"#input-task-description\");\n      const taskDate = document.querySelector(\"#input-task-date\");\n      const taskPriority = document.querySelector(\"#input-task-priority\");\n      if (taskName.value && taskDescription.value && taskDate.value) {\n        addTask({\n          title: taskName.value,\n          project: currentProject,\n          description: taskDescription.value,\n          date: taskDate.value,\n          priority: taskPriority.value,\n        });\n        taskName.value = \"\";\n        taskDescription.value = \"\";\n        taskDate.value = \"\";\n      } else {\n        alert(\"Invalid form\");\n      }\n    });\n  };\n\n  // Create elemets for each task\n  const createTaskElement = ({ title, description, date, priority, id }) => {\n    const taskContainer = document.createElement(\"div\");\n    const taskInput = document.createElement(\"input\");\n    const taskLabel = document.createElement(\"p\");\n    const taskDescription = document.createElement(\"p\");\n    const taskDate = document.createElement(\"p\");\n    const taskPriority = document.createElement(\"p\");\n    const icons = document.createElement(\"div\");\n    const deleteIcon = document.createElement(\"i\");\n    const deleteBtn = document.createElement(\"button\");\n    const editIcon = document.createElement(\"i\");\n    const editBtn = document.createElement(\"button\");\n\n    taskContainer.setAttribute(\"class\", \"form-check d-flex\");\n    taskContainer.setAttribute(\"id\", `title-${title}`);\n    taskInput.setAttribute(\"class\", \"form-check-input\");\n    taskInput.setAttribute(\"type\", \"checkbox\");\n    taskInput.setAttribute(\"name\", `${title}`);\n    taskLabel.setAttribute(\"class\", \"title form-check-element\");\n    taskDescription.setAttribute(\"class\", \"description form-check-element\");\n    taskDate.setAttribute(\"class\", \"date form-check-element\");\n    taskPriority.setAttribute(\"class\", \"priority form-check-element\");\n    icons.setAttribute(\"class\", \"icons\");\n    deleteBtn.setAttribute(\"id\", \"delete-btn\");\n    deleteIcon.setAttribute(\"class\", \"far fa-trash-alt\");\n    editBtn.setAttribute(\"id\", \"edit-btn\");\n    editIcon.setAttribute(\"class\", \"far fa-edit\");\n\n    taskLabel.textContent = title;\n    taskDescription.textContent = description;\n    taskDate.textContent = date;\n    taskPriority.textContent = priority;\n\n    taskContainer.appendChild(taskInput);\n    taskContainer.appendChild(taskLabel);\n    taskContainer.appendChild(taskDescription);\n    taskContainer.appendChild(taskDate);\n    taskContainer.appendChild(taskPriority);\n    taskContainer.appendChild(icons);\n    icons.appendChild(editBtn);\n    icons.appendChild(deleteBtn);\n    editBtn.appendChild(editIcon);\n    deleteBtn.appendChild(deleteIcon);\n\n    deleteBtn.addEventListener(\"click\", (e) => {\n      removeTask(id);\n    });\n\n    editBtn.addEventListener(\"click\", (e) => {\n      editTask(id);\n    });\n\n    return taskContainer;\n  };\n\n  return { renderTasks, saveTask };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;