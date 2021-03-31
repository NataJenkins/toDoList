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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n\r\n\r\n\r\nconst TaskUnit = (title, description, dueDate, priority) => {\r\n  return { title, description, dueDate, priority };\r\n};\r\n\r\nconst ProjectUnit = (name) => {\r\n  return { name };\r\n};\r\n\r\nconst myProjects = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.Projects)();\r\nconst myTasks = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)();\r\nconst sampleProject = ProjectUnit(\"TODO App\", \"Microverse JS\");\r\nconst sampleTask = TaskUnit(\r\n  \"JS Code\",\r\n  \"Complete basic JS functionalities\",\r\n  \"03/30/2021\",\r\n  \"High\"\r\n);\r\nmyProjects.addProject(sampleProject);\r\nmyTasks.addTask(sampleTask);\r\n\r\nconst projectListElement = document.querySelector(\".projects-list\");\r\nconst saveProjectBtn = document.querySelector(\"#save-project-btn\");\r\n\r\nwindow.addEventListener(\"click\", (event) => {\r\n  if (event.target === saveProjectBtn) {\r\n    const projectName = document.querySelector(\"#input-project-name\").value;\r\n    const newProject = ProjectUnit(projectName);\r\n    myProjects.addProject(newProject);\r\n    console.log(myProjects.projectsList);\r\n  }\r\n});\r\n\r\nfor (let i = 0; i < myProjects.projectsList.length; i += 1) {\r\n  const projectCont = document.querySelector(\".projects-list\");\r\n  const projectHTML = (0,_projects__WEBPACK_IMPORTED_MODULE_0__.displayProject)(myProjects.projectsList[i].name);\r\n  projectCont.appendChild(projectHTML.projectTitle);\r\n}\r\n\r\n// <li class=\"project-list-item\"><a href=\"#\">Project 1</a></li>\r\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Projects\": () => (/* binding */ Projects),\n/* harmony export */   \"displayProject\": () => (/* binding */ displayProject)\n/* harmony export */ });\nconst Projects = () => {\r\n  const projectsList = [];\r\n  const addProject = (project) => {\r\n    projectsList.push(project);\r\n  };\r\n\r\n  const removeProject = (index) => {\r\n    projectsLists.splice(index, 1);\r\n  };\r\n\r\n  return { projectsList, addProject, removeProject };\r\n};\r\n\r\nconst displayProject = (project) => {\r\n  const projectTitle = document.createElement(\"li\");\r\n  projectTitle.innerHTML = `<a href=\"#\" id=\"project-display\">${project.name}</a>`;\r\n  projectTitle.setAttribute(\"class\", \"project-list-item\");\r\n\r\n  return { projectTitle };\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://todolist/./src/projects.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Tasks = () => {\r\n  const taskList = {};\r\n\r\n  const addTask = (task) => {\r\n    taskList[task.name] = task;\r\n  };\r\n\r\n  const removeTask = (taskName) => {\r\n      delete taskList[taskName];\r\n  }\r\n\r\n  return { taskList, addTask, removeTask };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);\r\n\n\n//# sourceURL=webpack://todolist/./src/tasks.js?");

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