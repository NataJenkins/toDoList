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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProjectName\": () => (/* binding */ changeProjectName),\n/* harmony export */   \"filterTaskByCurrentProject\": () => (/* binding */ filterTaskByCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst changeProjectName = (name, id) => {\r\n  currentProject = name;\r\n  const taskHeader = document.querySelector(\".tasks-container > h1\");\r\n  const selectedProject = document.querySelector(\".selected-project\");\r\n  taskHeader.textContent = `${currentProject} Tasks`;\r\n  if (selectedProject) {\r\n    selectedProject.classList.remove(\"selected-project\");\r\n  }\r\n  document\r\n    .querySelector(`#project-display-${id}`)\r\n    .classList.add(\"selected-project\");\r\n\r\n  renderTaskContainer(currentProject);\r\n  renderTasks();\r\n};\r\n\r\nconst filterTaskByCurrentProject = (tasksArr) =>\r\n  tasksArr.filter((task) => task && task.project === currentProject);\r\n\r\nconst { addProject, renderProjects } = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)();\r\nconst { addTask, renderTasks } = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nlet currentProject = undefined;\r\nrenderProjects();\r\n\r\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\r\nconst saveTaskBtn = document.querySelector(\"#save-task-btn\");\r\n\r\nsaveProjectBtn.addEventListener(\"click\", (e) => {\r\n  const projectName = document.querySelector(\"#input-project-name\");\r\n  addProject({ name: projectName.value });\r\n  projectName.value = \"\";\r\n});\r\n\r\nsaveTaskBtn.addEventListener(\"click\", (e) => {\r\n  const taskName = document.querySelector(\"#input-task-name\");\r\n  const taskDescription = document.querySelector(\"#input-task-description\");\r\n  const taskDate = document.querySelector(\"#input-task-date\");\r\n  addTask({\r\n    title: taskName.value,\r\n    project: currentProject,\r\n    description: taskDescription.value,\r\n    date: taskDate.value,\r\n  });\r\n  taskName.value = \"\";\r\n});\r\n\r\nconst renderTaskContainer = (isCurrentProject) => {\r\n  if (!isCurrentProject) {\r\n    document.querySelector(\".tasks-container\").classList.add(\"d-none\");\r\n  } else {\r\n    document.querySelector(\".tasks-container\").classList.remove(\"d-none\");\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nconst displayProject = ({ id, name }) => {\r\n  const projectTitle = document.createElement(\"li\");\r\n  const anchorElement = document.createElement(\"a\");\r\n\r\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\r\n  anchorElement.setAttribute(\"id\", `project-display-${id}`);\r\n  anchorElement.setAttribute(\"href\", \"#\");\r\n  anchorElement.textContent = name;\r\n\r\n  projectTitle.appendChild(anchorElement);\r\n  projectTitle.addEventListener(\"click\", () => {\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeProjectName)(name, id);\r\n  });\r\n  return projectTitle;\r\n};\r\n\r\nconst Projects = () => {\r\n  const projectList = [\r\n    { name: \"hola\", id: 0 },\r\n    { name: \"hola1\", id: 1 },\r\n    { name: \"hola2\", id: 2 },\r\n    { name: \"hola3\", id: 3 },\r\n  ];\r\n\r\n  const addProject = ({ name }) => {\r\n    const projectId = projectList.length;\r\n    projectList.push({ id: projectId, name });\r\n    renderProjects();\r\n  };\r\n\r\n  const renderProjects = () => {\r\n    const projectListElement = document.querySelector(\".projects-list\");\r\n    projectListElement.innerHTML = \"\";\r\n\r\n    projectList.forEach((project) => {\r\n      projectListElement.appendChild(displayProject(project));\r\n    });\r\n  };\r\n\r\n  const removeProject = (index) => {\r\n    projectsLists.splice(index, 1);\r\n  };\r\n\r\n  return { projectList, addProject, removeProject, renderProjects };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\r\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\r\n\r\nconst Tasks = () => {\r\n  const getLocalStorageTasks = () => JSON.parse(localStorage.getItem(\"tasks\"));\r\n  const setLocalStorageTasks = (newTaskArray) => {\r\n    localStorage.setItem(\"tasks\", JSON.stringify(newTaskArray));\r\n  };\r\n\r\n  const addTask = (taskObj) => {\r\n    let taskArray = getLocalStorageTasks();\r\n    const tasksId = taskArray.length;\r\n    setLocalStorageTasks([...taskArray, { ...taskObj, id: tasksId }]);\r\n    renderTasks();\r\n  };\r\n\r\n  const renderTasks = () => {\r\n    const taskListElement = document.querySelector(\".tasks-list\");\r\n    taskListElement.innerHTML = \"\";\r\n\r\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.filterTaskByCurrentProject)(getLocalStorageTasks()).forEach((task) => {\r\n      taskListElement.appendChild(displayTask(task));\r\n    });\r\n\r\n    console.log(getLocalStorageTasks);\r\n  };\r\n\r\n  const editTask = (taskObj) => {};\r\n\r\n  const removeTask = (id) => {\r\n    let taskArray = getLocalStorageTasks();\r\n    taskArray.splice(id, 1, null);\r\n    setLocalStorageTasks(taskArray);\r\n    renderTasks();\r\n  };\r\n\r\n  const displayTask = ({ title, description, date, id }) => {\r\n    const taskContainer = document.createElement(\"div\");\r\n    const taskInput = document.createElement(\"input\");\r\n    const taskLabel = document.createElement(\"label\");\r\n    const taskDescription = document.createElement(\"label\");\r\n    const taskDate = document.createElement(\"label\");\r\n    const icons = document.createElement(\"div\");\r\n    const deleteIcon = document.createElement(\"i\");\r\n    const deleteBtn = document.createElement(\"button\");\r\n    const editIcon = document.createElement(\"i\");\r\n    const editBtn = document.createElement(\"button\");\r\n\r\n    taskContainer.setAttribute(\"class\", \"form-check d-flex\");\r\n    taskContainer.setAttribute(\"id\", `title-${title}`);\r\n    taskInput.setAttribute(\"class\", \"form-check-input\");\r\n    taskInput.setAttribute(\"type\", \"checkbox\");\r\n    taskInput.setAttribute(\"name\", `${title}`);\r\n    taskInput.setAttribute(\"value\", `${title}`);\r\n    taskLabel.setAttribute(\"for\", `${title}`);\r\n    taskLabel.setAttribute(\"class\", \"form-check-label form-check-element\");\r\n    taskDescription.setAttribute(\"class\", \"description form-check-element\");\r\n    taskDate.setAttribute(\"class\", \"date form-check-element\");\r\n    icons.setAttribute(\"class\", \"icons\");\r\n    deleteIcon.setAttribute(\"class\", \"far fa-trash-alt\");\r\n    deleteBtn.setAttribute(\"id\", \"delete-btn\");\r\n    editIcon.setAttribute(\"class\", \"far fa-edit\");\r\n    editBtn.setAttribute(\"id\", \"edit-btn\");\r\n\r\n    taskLabel.textContent = title;\r\n    taskDescription.textContent = description;\r\n    taskDate.textContent = date;\r\n\r\n    taskContainer.appendChild(taskInput);\r\n    taskContainer.appendChild(taskLabel);\r\n    taskContainer.appendChild(taskDescription);\r\n    taskContainer.appendChild(taskDate);\r\n    taskContainer.appendChild(icons);\r\n    icons.appendChild(editBtn);\r\n    icons.appendChild(deleteBtn);\r\n    editBtn.appendChild(editIcon);\r\n    deleteBtn.appendChild(deleteIcon);\r\n\r\n    deleteBtn.addEventListener(\"click\", (e) => {\r\n      removeTask(id);\r\n    });\r\n\r\n    return taskContainer;\r\n  };\r\n\r\n  return { addTask, removeTask, renderTasks };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\r\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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