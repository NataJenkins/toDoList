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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\n\n\nconst TaskUnit = (title, description, dueDate, priority) => {\n  return { title, description, dueDate, priority };\n};\n\nconst ProjectUnit = (name) => {\n  return { name };\n};\n\nconst myProjects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)();\nconst myTasks = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\nconst sampleProject = ProjectUnit(\"TODO App\");\nconst sampleTask = TaskUnit(\n  \"JS Code\",\n  \"Complete basic JS functionalities\",\n  \"03/30/2021\",\n  \"High\"\n);\n\nmyProjects.addProject(sampleProject);\nmyTasks.addTask(sampleTask);\n\nconst projectListElement = document.querySelector(\".projects-list\");\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\nconst saveTaskBtn = document.querySelector(\"#save-task-btn\");\n\nwindow.addEventListener(\"click\", (event) => {\n  if (event.target === saveProjectBtn) {\n    const projectName = document.querySelector(\"#input-project-name\");\n    const newProject = ProjectUnit(projectName.value);\n    myProjects.addProject(newProject);\n    projectName.value = '';\n  }\n  if (event.target === saveTaskBtn) {\n    const taskName = document.querySelector(\"#input-task-name\");\n    const newProject = TaskUnit(taskName.value);\n    myTasks.addTask(newProject);\n    taskName.value = '';\n  }\n});\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayProject = (project) => {\n  const projectTitle = document.createElement(\"li\");\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\n  const anchorElement = document.createElement(\"a\");\n  anchorElement.setAttribute(\"id\", `project-display-${project.id}`);\n  anchorElement.setAttribute(\"href\", \"#\");\n  anchorElement.textContent = project.name;\n  projectTitle.appendChild(anchorElement);\n\n  return { projectTitle };\n};\n\nconst Projects = () => {\n  const projectsList = [];\n  const addProject = (project) => {\n    project.id = projectsList.length + 1;\n    projectsList.push(displayProject(project));\n    const projectListElement = document.querySelector(\".projects-list\");\n    projectListElement.appendChild(\n      projectsList[projectsList.length - 1].projectTitle\n    );\n  };\n\n  const removeProject = (index) => {\n    projectsLists.splice(index, 1);\n  };\n\n  return { projectsList, addProject, removeProject };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayTask = (task) => {\n  const taskContainer = document.createElement(\"div\");\n  taskContainer.setAttribute(\"class\", \"form-check\");\n  const taskInput = document.createElement(\"input\");\n  taskInput.setAttribute(\"class\", \"form-check-input\");\n  taskInput.setAttribute(\"type\", \"checkbox\");\n  taskInput.setAttribute(\"id\", `flexCheckDefault-${task.id}`);\n  taskInput.setAttribute(\"name\", `${task.title}`);\n  taskInput.setAttribute(\"value\", `${task.title}`);\n  const taskLabel = document.createElement(\"label\");\n  taskLabel.setAttribute(\"for\", `${task.title}`);\n  taskLabel.setAttribute(\"class\", \"form-check-label\");\n  taskLabel.textContent = task.title\n  taskContainer.appendChild(taskInput);\n  taskContainer.appendChild(taskLabel);\n\n  return { taskContainer };\n};\n\nconst Tasks = () => {\n  const tasksList = [];\n  const addTask = (task) => {\n    task.id = tasksList.length + 1;\n    tasksList.push(displayTask(task));\n    const taskListElement = document.querySelector(\".tasks-list\");\n    taskListElement.appendChild(tasksList[tasksList.length - 1].taskContainer);\n  };\n\n  const removeTask = (index) => {\n    tasksList.splice(index, 1);\n  };\n\n  return { tasksList, addTask, removeTask };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;