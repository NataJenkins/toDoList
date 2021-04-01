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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst TaskUnit = (title, description, dueDate, priority) => {\r\n  return { title, description, dueDate, priority };\r\n};\r\n\r\nconst ProjectUnit = (name) => {\r\n  return { name };\r\n};\r\n\r\nconst myProjects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.default)();\r\nconst myTasks = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nconst sampleProject = ProjectUnit(\"TODO App\");\r\nconst sampleProject2 = ProjectUnit(\"TODO App2\");\r\nconst sampleTask = TaskUnit(\r\n  \"JS Code\",\r\n  \"Complete basic JS functionalities\",\r\n  \"03/30/2021\",\r\n  \"High\"\r\n);\r\n\r\nmyProjects.addProject(sampleProject);\r\nmyProjects.addProject(sampleProject2);\r\nmyTasks.addTask(sampleTask);\r\n\r\nconst projectListElement = document.querySelector(\".projects-list\");\r\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\r\nconst saveTaskBtn = document.querySelector(\"#save-task-btn\");\r\n\r\nwindow.addEventListener(\"click\", (event) => {\r\n  if (event.target === saveProjectBtn) {\r\n    const projectName = document.querySelector(\"#input-project-name\");\r\n    const newProject = ProjectUnit(projectName.value);\r\n    myProjects.addProject(newProject);\r\n    projectName.value = \"\";\r\n  } else if (event.target === saveTaskBtn) {\r\n    const taskName = document.querySelector(\"#input-task-name\");\r\n    const newTask = TaskUnit(taskName.value);\r\n    mytasks.addTask(newTask);\r\n    TaskName.value = \"\";\r\n  }\r\n});\r\n\r\nconst Active = () => {\r\n  const projectsDisplay = document.querySelector(\".projects-list\");\r\n  const projectsDisChild = projectsDisplay.children;\r\n  const projectsActive = projectsDisChild[0];\r\n\r\n  projectsDisplay.addClass(\"active\");\r\n\r\n  console.log(projectsActive);\r\n};\r\n\r\nActive();\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayProject = (project) => {\r\n  const projectTitle = document.createElement(\"li\");\r\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\r\n  const anchorElement = document.createElement(\"a\");\r\n  anchorElement.setAttribute(\"id\", `project-display-${project.id}`);\r\n  anchorElement.setAttribute(\"href\", \"#\");\r\n  anchorElement.textContent = project.name;\r\n  projectTitle.appendChild(anchorElement);\r\n\r\n  return { projectTitle };\r\n};\r\n\r\nconst Projects = () => {\r\n  const projectsList = [];\r\n  const addProject = (project) => {\r\n    project.id = projectsList.length + 1;\r\n    projectsList.push(displayProject(project));\r\n    const projectListElement = document.querySelector(\".projects-list\");\r\n    projectListElement.appendChild(\r\n      projectsList[projectsList.length - 1].projectTitle\r\n    );\r\n  };\r\n\r\n  const removeProject = (index) => {\r\n    projectsLists.splice(index, 1);\r\n  };\r\n\r\n  return { projectsList, addProject, removeProject };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);\r\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayTask = (task) => {\r\n  const taskCont = document.createElement(\"div\");\r\n  taskCont.setAttribute(\"class\", \"form-check\");\r\n  const taskCheck = document.createElement(\"input\");\r\n  taskCheck.type = \"checkbox\";\r\n  const taskTitle = document.createElement(\"label\");\r\n  taskTitle.setAttribute(\"class\", \"form-check-label\");\r\n  taskTitle.textContent = task.title;\r\n  taskCont.appendChild(taskCheck);\r\n  taskCont.appendChild(taskTitle);\r\n\r\n  // console.log(task);\r\n  return { taskCont };\r\n};\r\n\r\nconst Tasks = () => {\r\n  const tasksList = [];\r\n  const addTask = (task) => {\r\n    tasksList.push(displayTask(task));\r\n    const taskListElement = document.querySelector(\".tasks-list\");\r\n    taskListElement.appendChild(tasksList[tasksList.length - 1].taskCont);\r\n    // console.log(tasksList[tasksList.length - 1].taskCont);\r\n  };\r\n  return { tasksList, addTask };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\r\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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