/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "changeProjectName": () => (/* binding */ changeProjectName),
/* harmony export */   "filterTaskByCurrentProject": () => (/* binding */ filterTaskByCurrentProject)
/* harmony export */ });
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.js");
/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ "./src/tasks.js");

 //const { renderProjects } = Projects();

var changeProjectName = function changeProjectName(name, id) {
  currentProject = name;
  var taskHeader = document.querySelector(".tasks-container > h1");
  var selectedProject = document.querySelector(".selected-project");
  taskHeader.textContent = "".concat(currentProject, " Tasks");

  if (selectedProject) {
    selectedProject.classList.remove("selected-project");
  }

  document.querySelector("#project-display-".concat(id)).classList.add("selected-project");
  renderTaskContainer(currentProject);
  renderTasks();
};
var filterTaskByCurrentProject = function filterTaskByCurrentProject(tasksArr) {
  return tasksArr.filter(function (task) {
    return task && task.project === currentProject;
  });
};
var currentProject = undefined;

var _Tasks = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.default)(),
    saveTask = _Tasks.saveTask,
    renderTasks = _Tasks.renderTasks;

if (localStorage.getItem("projects")) {
  (0,_projects__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
}

document.querySelector("#save-task-btn").addEventListener("click", function (e) {
  saveTask(currentProject);
});

var renderTaskContainer = function renderTaskContainer(isCurrentProject) {
  if (!isCurrentProject) {
    document.querySelector(".tasks-container").classList.add("d-none");
  } else {
    document.querySelector(".tasks-container").classList.remove("d-none");
  }
};

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var displayProject = function displayProject(_ref) {
  var id = _ref.id,
      name = _ref.name;
  var projectTitle = document.createElement("li");
  var anchorElement = document.createElement("a");
  projectTitle.setAttribute("class", "project-list-item");
  anchorElement.setAttribute("id", "project-display-".concat(id));
  anchorElement.setAttribute("href", "#");
  anchorElement.textContent = name;
  projectTitle.appendChild(anchorElement);
  projectTitle.addEventListener("click", function () {
    (0,_index__WEBPACK_IMPORTED_MODULE_0__.changeProjectName)(name, id);
  });
  return projectTitle;
};

var Projects = function Projects() {
  var getLocalStorageProjects = function getLocalStorageProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  };

  var setLocalStorageProjects = function setLocalStorageProjects(newProjectArray) {
    localStorage.setItem("projects", JSON.stringify(newProjectArray));
  };

  var addProject = function addProject(_ref2) {
    var name = _ref2.name;
    var projectArray = getLocalStorageProjects();

    if (projectArray) {
      var projectId = projectArray.length;
      setLocalStorageProjects([].concat(_toConsumableArray(projectArray), [{
        name: name,
        id: projectId
      }]));
    } else {
      var _projectId = 0;
      setLocalStorageProjects([{
        name: name,
        id: _projectId
      }]);
    }

    renderProjects();
  };

  var renderProjects = function renderProjects() {
    var projectListElement = document.querySelector(".projects-list");
    projectListElement.innerHTML = "";
    getLocalStorageProjects().forEach(function (project) {
      projectListElement.appendChild(displayProject(project));
    });
  };

  document.querySelector("#save-project-btn").addEventListener("click", function (e) {
    var projectName = document.querySelector("#input-project-name");

    if (projectName.value) {
      addProject({
        name: projectName.value
      });
      projectName.value = "";
    } else {
      alert("Invalid form");
    }
  });
  return {
    addProject: addProject,
    renderProjects: renderProjects
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var Tasks = function Tasks() {
  var getLocalStorageTasks = function getLocalStorageTasks() {
    return JSON.parse(localStorage.getItem("tasks"));
  };

  var setLocalStorageTasks = function setLocalStorageTasks(newTaskArray) {
    localStorage.setItem("tasks", JSON.stringify(newTaskArray));
  };

  var addTask = function addTask(taskObj) {
    var taskArray = getLocalStorageTasks();

    if (taskArray) {
      var tasksId = taskArray.length;
      setLocalStorageTasks([].concat(_toConsumableArray(taskArray), [_objectSpread(_objectSpread({}, taskObj), {}, {
        id: tasksId
      })]));
    } else {
      var _tasksId = 0;
      setLocalStorageTasks([_objectSpread(_objectSpread({}, taskObj), {}, {
        id: _tasksId
      })]);
    }

    renderTasks();
  };

  var renderTasks = function renderTasks() {
    var taskListElement = document.querySelector(".tasks-list");
    taskListElement.innerHTML = "";

    if (getLocalStorageTasks()) {
      (0,_index__WEBPACK_IMPORTED_MODULE_0__.filterTaskByCurrentProject)(getLocalStorageTasks()).forEach(function (task) {
        taskListElement.appendChild(createTaskElement(task));
      });
    }
  };

  var editTask = function editTask(id) {
    var taskArray = getLocalStorageTasks();
    var editTaskBtn = document.querySelector("#edit-task-btn");
    var taskName = document.querySelector("#edit-task-name");
    var taskDescription = document.querySelector("#edit-task-description");
    var taskDate = document.querySelector("#edit-task-date");
    var taskPriority = document.querySelector("#edit-task-priority");
    taskName.value = taskArray[id].title;
    taskDescription.value = taskArray[id].description;
    taskDate.value = taskArray[id].date;
    taskPriority.value = taskArray[id].priority;
    $("#editModalTask").modal("show");
    editTaskBtn.addEventListener("click", function (e) {
      if (taskName.value && taskDescription.value && taskDate.value) {
        taskArray[id].title = taskName.value;
        taskArray[id].description = taskDescription.value;
        taskArray[id].date = taskDate.value;
        taskArray[id].priority = taskPriority.value;
        setLocalStorageTasks(taskArray);
        renderTasks();
        $("#editModalTask").modal("hide");
      } else {
        alert("Invalid form");
      }
    });
  };

  var removeTask = function removeTask(id) {
    var taskArray = getLocalStorageTasks();
    taskArray.splice(id, 1, null);
    setLocalStorageTasks(taskArray);
    renderTasks();
  }; // Save button on modal


  var saveTask = function saveTask(currentProject) {
    document.querySelector("#save-task-btn").addEventListener("click", function (e) {
      var taskName = document.querySelector("#input-task-name");
      var taskDescription = document.querySelector("#input-task-description");
      var taskDate = document.querySelector("#input-task-date");
      var taskPriority = document.querySelector("#input-task-priority");

      if (taskName.value && taskDescription.value && taskDate.value) {
        addTask({
          title: taskName.value,
          project: currentProject,
          description: taskDescription.value,
          date: taskDate.value,
          priority: taskPriority.value
        });
        taskName.value = "";
        taskDescription.value = "";
        taskDate.value = "";
      } else {
        alert("Invalid form");
      }
    });
  }; // Create elemets for each task


  var createTaskElement = function createTaskElement(_ref) {
    var title = _ref.title,
        description = _ref.description,
        date = _ref.date,
        priority = _ref.priority,
        id = _ref.id;
    var taskContainer = document.createElement("div");
    var taskInput = document.createElement("input");
    var taskLabel = document.createElement("p");
    var taskDescription = document.createElement("p");
    var taskDate = document.createElement("p");
    var taskPriority = document.createElement("p");
    var icons = document.createElement("div");
    var deleteIcon = document.createElement("i");
    var deleteBtn = document.createElement("button");
    var editIcon = document.createElement("i");
    var editBtn = document.createElement("button");
    taskContainer.setAttribute("class", "form-check d-flex");
    taskContainer.setAttribute("id", "title-".concat(title));
    taskInput.setAttribute("class", "form-check-input");
    taskInput.setAttribute("type", "checkbox");
    taskInput.setAttribute("name", "".concat(title));
    taskLabel.setAttribute("class", "title form-check-element");
    taskDescription.setAttribute("class", "description form-check-element");
    taskDate.setAttribute("class", "date form-check-element");
    taskPriority.setAttribute("class", "priority form-check-element");
    icons.setAttribute("class", "icons");
    deleteBtn.setAttribute("id", "delete-btn");
    deleteIcon.setAttribute("class", "far fa-trash-alt");
    editBtn.setAttribute("id", "edit-btn");
    editIcon.setAttribute("class", "far fa-edit");
    taskLabel.textContent = title;
    taskDescription.textContent = description;
    taskDate.textContent = date;
    taskPriority.textContent = priority;
    taskContainer.appendChild(taskInput);
    taskContainer.appendChild(taskLabel);
    taskContainer.appendChild(taskDescription);
    taskContainer.appendChild(taskDate);
    taskContainer.appendChild(taskPriority);
    taskContainer.appendChild(icons);
    icons.appendChild(editBtn);
    icons.appendChild(deleteBtn);
    editBtn.appendChild(editIcon);
    deleteBtn.appendChild(deleteIcon);
    deleteBtn.addEventListener("click", function (e) {
      removeTask(id);
    });
    editBtn.addEventListener("click", function (e) {
      editTask(id);
    });
    return taskContainer;
  };

  return {
    renderTasks: renderTasks,
    saveTask: saveTask
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tasks);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjaGFuZ2VQcm9qZWN0TmFtZSIsIm5hbWUiLCJpZCIsImN1cnJlbnRQcm9qZWN0IiwidGFza0hlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdGVkUHJvamVjdCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVuZGVyVGFza0NvbnRhaW5lciIsInJlbmRlclRhc2tzIiwiZmlsdGVyVGFza0J5Q3VycmVudFByb2plY3QiLCJ0YXNrc0FyciIsImZpbHRlciIsInRhc2siLCJwcm9qZWN0IiwidW5kZWZpbmVkIiwiVGFza3MiLCJzYXZlVGFzayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW5kZXJQcm9qZWN0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNDdXJyZW50UHJvamVjdCIsImRpc3BsYXlQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImFuY2hvckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIlByb2plY3RzIiwiZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHMiLCJKU09OIiwicGFyc2UiLCJzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0cyIsIm5ld1Byb2plY3RBcnJheSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRQcm9qZWN0IiwicHJvamVjdEFycmF5IiwicHJvamVjdElkIiwibGVuZ3RoIiwicHJvamVjdExpc3RFbGVtZW50IiwiaW5uZXJIVE1MIiwiZm9yRWFjaCIsInByb2plY3ROYW1lIiwidmFsdWUiLCJhbGVydCIsImdldExvY2FsU3RvcmFnZVRhc2tzIiwic2V0TG9jYWxTdG9yYWdlVGFza3MiLCJuZXdUYXNrQXJyYXkiLCJhZGRUYXNrIiwidGFza09iaiIsInRhc2tBcnJheSIsInRhc2tzSWQiLCJ0YXNrTGlzdEVsZW1lbnQiLCJjcmVhdGVUYXNrRWxlbWVudCIsImVkaXRUYXNrIiwiZWRpdFRhc2tCdG4iLCJ0YXNrTmFtZSIsInRhc2tEZXNjcmlwdGlvbiIsInRhc2tEYXRlIiwidGFza1ByaW9yaXR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJwcmlvcml0eSIsIiQiLCJtb2RhbCIsInJlbW92ZVRhc2siLCJzcGxpY2UiLCJ0YXNrQ29udGFpbmVyIiwidGFza0lucHV0IiwidGFza0xhYmVsIiwiaWNvbnMiLCJkZWxldGVJY29uIiwiZGVsZXRlQnRuIiwiZWRpdEljb24iLCJlZGl0QnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRU8sSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQU9DLEVBQVAsRUFBYztBQUM3Q0MsZ0JBQWMsR0FBR0YsSUFBakI7QUFDQSxNQUFNRyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkI7QUFDQSxNQUFNQyxlQUFlLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBeEI7QUFDQUYsWUFBVSxDQUFDSSxXQUFYLGFBQTRCTCxjQUE1Qjs7QUFDQSxNQUFJSSxlQUFKLEVBQXFCO0FBQ25CQSxt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QWEsQ0FBQzFDLFdBQWQsQ0FBMEI2QyxLQUExQjtBQUNBQSxTQUFLLENBQUM3QyxXQUFOLENBQWtCaUQsT0FBbEI7QUFDQUosU0FBSyxDQUFDN0MsV0FBTixDQUFrQitDLFNBQWxCO0FBQ0FFLFdBQU8sQ0FBQ2pELFdBQVIsQ0FBb0JnRCxRQUFwQjtBQUNBRCxhQUFTLENBQUMvQyxXQUFWLENBQXNCOEMsVUFBdEI7QUFFQUMsYUFBUyxDQUFDdkQsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDK0MsZ0JBQVUsQ0FBQ3ZFLEVBQUQsQ0FBVjtBQUNELEtBRkQ7QUFJQWdGLFdBQU8sQ0FBQ3pELGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN2Q21DLGNBQVEsQ0FBQzNELEVBQUQsQ0FBUjtBQUNELEtBRkQ7QUFJQSxXQUFPeUUsYUFBUDtBQUNELEdBckREOztBQXVEQSxTQUFPO0FBQUU5RCxlQUFXLEVBQVhBLFdBQUY7QUFBZVEsWUFBUSxFQUFSQTtBQUFmLEdBQVA7QUFDRCxDQWxKRDs7QUFvSkEsaUVBQWVELEtBQWYsRTs7Ozs7O1VDdEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuXHJcbi8vY29uc3QgeyByZW5kZXJQcm9qZWN0cyB9ID0gUHJvamVjdHMoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VQcm9qZWN0TmFtZSA9IChuYW1lLCBpZCkgPT4ge1xyXG4gIGN1cnJlbnRQcm9qZWN0ID0gbmFtZTtcclxuICBjb25zdCB0YXNrSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXIgPiBoMVwiKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdGVkLXByb2plY3RcIik7XHJcbiAgdGFza0hlYWRlci50ZXh0Q29udGVudCA9IGAke2N1cnJlbnRQcm9qZWN0fSBUYXNrc2A7XHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgc2VsZWN0ZWRQcm9qZWN0LmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xyXG4gIH1cclxuICBkb2N1bWVudFxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LWRpc3BsYXktJHtpZH1gKVxyXG4gICAgLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1wcm9qZWN0XCIpO1xyXG5cclxuICByZW5kZXJUYXNrQ29udGFpbmVyKGN1cnJlbnRQcm9qZWN0KTtcclxuICByZW5kZXJUYXNrcygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGZpbHRlclRhc2tCeUN1cnJlbnRQcm9qZWN0ID0gKHRhc2tzQXJyKSA9PlxyXG4gIHRhc2tzQXJyLmZpbHRlcigodGFzaykgPT4gdGFzayAmJiB0YXNrLnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0KTtcclxuXHJcbmxldCBjdXJyZW50UHJvamVjdCA9IHVuZGVmaW5lZDtcclxuXHJcbmNvbnN0IHsgc2F2ZVRhc2ssIHJlbmRlclRhc2tzIH0gPSBUYXNrcygpO1xyXG5cclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcclxuICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtdGFzay1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgc2F2ZVRhc2soY3VycmVudFByb2plY3QpO1xyXG59KTtcclxuXHJcbmNvbnN0IHJlbmRlclRhc2tDb250YWluZXIgPSAoaXNDdXJyZW50UHJvamVjdCkgPT4ge1xyXG4gIGlmICghaXNDdXJyZW50UHJvamVjdCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIikuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImQtbm9uZVwiKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IGNoYW5nZVByb2plY3ROYW1lIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcblxyXG4gIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInByb2plY3QtbGlzdC1pdGVtXCIpO1xyXG4gIGFuY2hvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYHByb2plY3QtZGlzcGxheS0ke2lkfWApO1xyXG4gIGFuY2hvckVsZW1lbnQuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XHJcbiAgYW5jaG9yRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XHJcblxyXG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChhbmNob3JFbGVtZW50KTtcclxuICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGNoYW5nZVByb2plY3ROYW1lKG5hbWUsIGlkKTtcclxuICB9KTtcclxuICByZXR1cm4gcHJvamVjdFRpdGxlO1xyXG59O1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHMgPSAoKSA9PlxyXG4gICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcclxuICBjb25zdCBzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0cyA9IChuZXdQcm9qZWN0QXJyYXkpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdEFycmF5KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gICAgbGV0IHByb2plY3RBcnJheSA9IGdldExvY2FsU3RvcmFnZVByb2plY3RzKCk7XHJcbiAgICBpZiAocHJvamVjdEFycmF5KSB7XHJcbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RBcnJheS5sZW5ndGg7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZVByb2plY3RzKFsuLi5wcm9qZWN0QXJyYXksIHsgbmFtZSwgaWQ6IHByb2plY3RJZCB9XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSAwO1xyXG4gICAgICBzZXRMb2NhbFN0b3JhZ2VQcm9qZWN0cyhbeyBuYW1lLCBpZDogcHJvamVjdElkIH1dKTtcclxuICAgIH1cclxuICAgIHJlbmRlclByb2plY3RzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcbiAgICBwcm9qZWN0TGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGdldExvY2FsU3RvcmFnZVByb2plY3RzKCkuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9qZWN0TGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoZGlzcGxheVByb2plY3QocHJvamVjdCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlLXByb2plY3QtYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXByb2plY3QtbmFtZVwiKTtcclxuICAgIGlmIChwcm9qZWN0TmFtZS52YWx1ZSkge1xyXG4gICAgICBhZGRQcm9qZWN0KHsgbmFtZTogcHJvamVjdE5hbWUudmFsdWUgfSk7XHJcbiAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGFsZXJ0KFwiSW52YWxpZCBmb3JtXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4geyBhZGRQcm9qZWN0LCByZW5kZXJQcm9qZWN0cyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiIsImltcG9ydCB7IGZpbHRlclRhc2tCeUN1cnJlbnRQcm9qZWN0IH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IFRhc2tzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdldExvY2FsU3RvcmFnZVRhc2tzID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKTtcclxuICBjb25zdCBzZXRMb2NhbFN0b3JhZ2VUYXNrcyA9IChuZXdUYXNrQXJyYXkpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkobmV3VGFza0FycmF5KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrT2JqKSA9PiB7XHJcbiAgICBsZXQgdGFza0FycmF5ID0gZ2V0TG9jYWxTdG9yYWdlVGFza3MoKTtcclxuICAgIGlmICh0YXNrQXJyYXkpIHtcclxuICAgICAgY29uc3QgdGFza3NJZCA9IHRhc2tBcnJheS5sZW5ndGg7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZVRhc2tzKFsuLi50YXNrQXJyYXksIHsgLi4udGFza09iaiwgaWQ6IHRhc2tzSWQgfV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgdGFza3NJZCA9IDA7XHJcbiAgICAgIHNldExvY2FsU3RvcmFnZVRhc2tzKFt7IC4uLnRhc2tPYmosIGlkOiB0YXNrc0lkIH1dKTtcclxuICAgIH1cclxuICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVuZGVyVGFza3MgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWxpc3RcIik7XHJcbiAgICB0YXNrTGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAoZ2V0TG9jYWxTdG9yYWdlVGFza3MoKSkge1xyXG4gICAgICBmaWx0ZXJUYXNrQnlDdXJyZW50UHJvamVjdChnZXRMb2NhbFN0b3JhZ2VUYXNrcygpKS5mb3JFYWNoKCh0YXNrKSA9PiB7XHJcbiAgICAgICAgdGFza0xpc3RFbGVtZW50LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tFbGVtZW50KHRhc2spKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWRpdFRhc2sgPSAoaWQpID0+IHtcclxuICAgIGxldCB0YXNrQXJyYXkgPSBnZXRMb2NhbFN0b3JhZ2VUYXNrcygpO1xyXG4gICAgY29uc3QgZWRpdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1idG5cIik7XHJcbiAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLW5hbWVcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kZXNjcmlwdGlvblwiKTtcclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZGF0ZVwiKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLXByaW9yaXR5XCIpO1xyXG4gICAgdGFza05hbWUudmFsdWUgPSB0YXNrQXJyYXlbaWRdLnRpdGxlO1xyXG4gICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gdGFza0FycmF5W2lkXS5kZXNjcmlwdGlvbjtcclxuICAgIHRhc2tEYXRlLnZhbHVlID0gdGFza0FycmF5W2lkXS5kYXRlO1xyXG4gICAgdGFza1ByaW9yaXR5LnZhbHVlID0gdGFza0FycmF5W2lkXS5wcmlvcml0eTtcclxuXHJcbiAgICAkKFwiI2VkaXRNb2RhbFRhc2tcIikubW9kYWwoXCJzaG93XCIpO1xyXG4gICAgZWRpdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmICh0YXNrTmFtZS52YWx1ZSAmJiB0YXNrRGVzY3JpcHRpb24udmFsdWUgJiYgdGFza0RhdGUudmFsdWUpIHtcclxuICAgICAgICB0YXNrQXJyYXlbaWRdLnRpdGxlID0gdGFza05hbWUudmFsdWU7XHJcbiAgICAgICAgdGFza0FycmF5W2lkXS5kZXNjcmlwdGlvbiA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICAgICAgICB0YXNrQXJyYXlbaWRdLmRhdGUgPSB0YXNrRGF0ZS52YWx1ZTtcclxuICAgICAgICB0YXNrQXJyYXlbaWRdLnByaW9yaXR5ID0gdGFza1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuICAgICAgICBzZXRMb2NhbFN0b3JhZ2VUYXNrcyh0YXNrQXJyYXkpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgICAgICAgJChcIiNlZGl0TW9kYWxUYXNrXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIkludmFsaWQgZm9ybVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgcmVtb3ZlVGFzayA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHRhc2tBcnJheSA9IGdldExvY2FsU3RvcmFnZVRhc2tzKCk7XHJcbiAgICB0YXNrQXJyYXkuc3BsaWNlKGlkLCAxLCBudWxsKTtcclxuICAgIHNldExvY2FsU3RvcmFnZVRhc2tzKHRhc2tBcnJheSk7XHJcbiAgICByZW5kZXJUYXNrcygpO1xyXG4gIH07XHJcblxyXG4gIC8vIFNhdmUgYnV0dG9uIG9uIG1vZGFsXHJcbiAgY29uc3Qgc2F2ZVRhc2sgPSAoY3VycmVudFByb2plY3QpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZS10YXNrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgY29uc3QgdGFza05hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXRhc2stbmFtZVwiKTtcclxuICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC10YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1kYXRlXCIpO1xyXG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXRhc2stcHJpb3JpdHlcIik7XHJcbiAgICAgIGlmICh0YXNrTmFtZS52YWx1ZSAmJiB0YXNrRGVzY3JpcHRpb24udmFsdWUgJiYgdGFza0RhdGUudmFsdWUpIHtcclxuICAgICAgICBhZGRUYXNrKHtcclxuICAgICAgICAgIHRpdGxlOiB0YXNrTmFtZS52YWx1ZSxcclxuICAgICAgICAgIHByb2plY3Q6IGN1cnJlbnRQcm9qZWN0LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbi52YWx1ZSxcclxuICAgICAgICAgIGRhdGU6IHRhc2tEYXRlLnZhbHVlLFxyXG4gICAgICAgICAgcHJpb3JpdHk6IHRhc2tQcmlvcml0eS52YWx1ZSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJJbnZhbGlkIGZvcm1cIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIENyZWF0ZSBlbGVtZXRzIGZvciBlYWNoIHRhc2tcclxuICBjb25zdCBjcmVhdGVUYXNrRWxlbWVudCA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZGF0ZSwgcHJpb3JpdHksIGlkIH0pID0+IHtcclxuICAgIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IGljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcclxuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb25zdCBlZGl0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2sgZC1mbGV4XCIpO1xyXG4gICAgdGFza0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgdGl0bGUtJHt0aXRsZX1gKTtcclxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImZvcm0tY2hlY2staW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgYCR7dGl0bGV9YCk7XHJcbiAgICB0YXNrTGFiZWwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZSBmb3JtLWNoZWNrLWVsZW1lbnRcIik7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkZXNjcmlwdGlvbiBmb3JtLWNoZWNrLWVsZW1lbnRcIik7XHJcbiAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRhdGUgZm9ybS1jaGVjay1lbGVtZW50XCIpO1xyXG4gICAgdGFza1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJpb3JpdHkgZm9ybS1jaGVjay1lbGVtZW50XCIpO1xyXG4gICAgaWNvbnMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpY29uc1wiKTtcclxuICAgIGRlbGV0ZUJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS1idG5cIik7XHJcbiAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFyIGZhLXRyYXNoLWFsdFwiKTtcclxuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlZGl0LWJ0blwiKTtcclxuICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmFyIGZhLWVkaXRcIik7XHJcblxyXG4gICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcclxuICAgIHRhc2tEYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcclxuICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG5cclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xhYmVsKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpY29ucyk7XHJcbiAgICBpY29ucy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcclxuICAgIGljb25zLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcbiAgICBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRJY29uKTtcclxuICAgIGRlbGV0ZUJ0bi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIHJlbW92ZVRhc2soaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgZWRpdFRhc2soaWQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHsgcmVuZGVyVGFza3MsIHNhdmVUYXNrIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXNrcztcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9