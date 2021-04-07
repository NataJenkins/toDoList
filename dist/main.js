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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeProjectName\": () => (/* binding */ changeProjectName),\n/* harmony export */   \"filterTaskByCurrentProject\": () => (/* binding */ filterTaskByCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst changeProjectName = (name, id) => {\n  currentProject = name;\n  const taskHeader = document.querySelector(\".tasks-container > h1\");\n  const selectedProject = document.querySelector(\".selected-project\");\n  taskHeader.textContent = `${currentProject} Tasks`;\n  if (selectedProject) {\n    selectedProject.classList.remove(\"selected-project\");\n  }\n  document\n    .querySelector(`#project-display-${id}`)\n    .classList.add(\"selected-project\");\n\n  renderTaskContainer(currentProject);\n  renderTasks();\n};\n\nconst filterTaskByCurrentProject = (tasksArr) =>\n  tasksArr.filter((task) => task.project === currentProject);\n\nconst { addProject } = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst { addTask, renderTasks } = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\nlet currentProject = undefined;\n\naddProject({ name: \"hola\" });\naddProject({ name: \"hola1\" });\naddProject({ name: \"hola2\" });\naddProject({ name: \"hola3\" });\n\naddTask({ title: \"quetal\", project: \"hola\" });\naddTask({ title: \"quetal1\", project: \"hola1\" });\naddTask({ title: \"quetal2\", project: \"hola2\" });\naddTask({ title: \"quetal3\", project: \"hola3\" });\naddTask({ title: \"quetal\", project: \"hola\" });\naddTask({ title: \"quetal1\", project: \"hola1\" });\naddTask({ title: \"quetal2\", project: \"hola2\" });\naddTask({ title: \"quetal3\", project: \"hola3\" });\n\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\nconst saveTaskBtn = document.querySelector(\"#save-task-btn\");\n\nsaveProjectBtn.addEventListener(\"click\", (e) => {\n  const projectName = document.querySelector(\"#input-project-name\");\n  addProject({ name: projectName.value });\n  projectName.value = \"\";\n});\n\nsaveTaskBtn.addEventListener(\"click\", (e) => {\n  const taskName = document.querySelector(\"#input-task-name\");\n  addTask({ title: taskName.value, project: currentProject });\n  taskName.value = \"\";\n});\n\nconst renderTaskContainer = (isCurrentProject) => {\n  if (!isCurrentProject) {\n    document.querySelector(\".tasks-container\").classList.add(\"d-none\");\n  } else {\n    document.querySelector(\".tasks-container\").classList.remove(\"d-none\");\n  }\n};\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst displayProject = ({ id, name }) => {\n  const projectTitle = document.createElement(\"li\");\n  const anchorElement = document.createElement(\"a\");\n\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\n  anchorElement.setAttribute(\"id\", `project-display-${id}`);\n  anchorElement.setAttribute(\"href\", \"#\");\n  anchorElement.textContent = name;\n\n  projectTitle.appendChild(anchorElement);\n  projectTitle.addEventListener(\"click\", () => {\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeProjectName)(name, id);\n  });\n  return projectTitle;\n};\n\nconst Projects = () => {\n  const projectList = [];\n\n  const addProject = ({ name }) => {\n    const projectId = projectList.length;\n    projectList.push({ id: projectId, name });\n    renderProjects();\n  };\n\n  const renderProjects = () => {\n    const projectListElement = document.querySelector(\".projects-list\");\n    projectListElement.innerHTML = \"\";\n\n    projectList.forEach((project) => {\n      projectListElement.appendChild(displayProject(project));\n    });\n  };\n\n  const removeProject = (index) => {\n    projectsLists.splice(index, 1);\n  };\n\n  return { projectList, addProject, removeProject };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst displayTask = ({ title }) => {\n  const taskContainer = document.createElement(\"div\");\n  const taskInput = document.createElement(\"input\");\n  const taskLabel = document.createElement(\"label\");\n  taskContainer.setAttribute(\"class\", \"form-check\");\n  taskInput.setAttribute(\"class\", \"form-check-input\");\n  taskInput.setAttribute(\"type\", \"checkbox\");\n  taskInput.setAttribute(\"name\", `${title}`);\n  taskInput.setAttribute(\"value\", `${title}`);\n  taskLabel.setAttribute(\"for\", `${title}`);\n  taskLabel.setAttribute(\"class\", \"form-check-label\");\n  taskLabel.textContent = title;\n\n  taskContainer.appendChild(taskInput);\n  taskContainer.appendChild(taskLabel);\n\n  return taskContainer;\n};\n\nconst Tasks = () => {\n  const tasksList = [];\n\n  const addTask = (taskObj) => {\n    tasksList.push(taskObj);\n    renderTasks();\n  };\n\n  const renderTasks = () => {\n    const taskListElement = document.querySelector(\".tasks-list\");\n    taskListElement.innerHTML = \"\";\n\n    (0,_index__WEBPACK_IMPORTED_MODULE_0__.filterTaskByCurrentProject)(tasksList).forEach((task) => {\n      taskListElement.appendChild(displayTask(task));\n    });\n  };\n\n  const removeTask = (index) => {\n    tasksList.splice(index, 1);\n  };\n\n  return { tasksList, addTask, removeTask, renderTasks };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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