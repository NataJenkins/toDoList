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
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "renderProjects": () => (/* binding */ renderProjects)
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

var getLocalStorageProjects = function getLocalStorageProjects() {
  return JSON.parse(localStorage.getItem("projects"));
  console.log(JSON.parse(localStorage.getItem("projects")));
};

var setLocalStorageProjects = function setLocalStorageProjects(newProjectArray) {
  localStorage.setItem("projects", JSON.stringify(newProjectArray));
};

var renderProjects = function renderProjects() {
  var projectListElement = document.querySelector(".projects-list");
  projectListElement.innerHTML = "";
  getLocalStorageProjects().forEach(function (project) {
    projectListElement.appendChild(displayProject(project));
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJjaGFuZ2VQcm9qZWN0TmFtZSIsIm5hbWUiLCJpZCIsImN1cnJlbnRQcm9qZWN0IiwidGFza0hlYWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlbGVjdGVkUHJvamVjdCIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVuZGVyVGFza0NvbnRhaW5lciIsInJlbmRlclRhc2tzIiwiZmlsdGVyVGFza0J5Q3VycmVudFByb2plY3QiLCJ0YXNrc0FyciIsImZpbHRlciIsInRhc2siLCJwcm9qZWN0IiwidW5kZWZpbmVkIiwiVGFza3MiLCJzYXZlVGFzayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJyZW5kZXJQcm9qZWN0cyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiaXNDdXJyZW50UHJvamVjdCIsImRpc3BsYXlQcm9qZWN0IiwicHJvamVjdFRpdGxlIiwiY3JlYXRlRWxlbWVudCIsImFuY2hvckVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsImdldExvY2FsU3RvcmFnZVByb2plY3RzIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInNldExvY2FsU3RvcmFnZVByb2plY3RzIiwibmV3UHJvamVjdEFycmF5Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInByb2plY3RMaXN0RWxlbWVudCIsImlubmVySFRNTCIsImZvckVhY2giLCJhZGRQcm9qZWN0IiwicHJvamVjdEFycmF5IiwicHJvamVjdElkIiwibGVuZ3RoIiwicHJvamVjdE5hbWUiLCJ2YWx1ZSIsImFsZXJ0IiwiZ2V0TG9jYWxTdG9yYWdlVGFza3MiLCJzZXRMb2NhbFN0b3JhZ2VUYXNrcyIsIm5ld1Rhc2tBcnJheSIsImFkZFRhc2siLCJ0YXNrT2JqIiwidGFza0FycmF5IiwidGFza3NJZCIsInRhc2tMaXN0RWxlbWVudCIsImNyZWF0ZVRhc2tFbGVtZW50IiwiZWRpdFRhc2siLCJlZGl0VGFza0J0biIsInRhc2tOYW1lIiwidGFza0Rlc2NyaXB0aW9uIiwidGFza0RhdGUiLCJ0YXNrUHJpb3JpdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsInByaW9yaXR5IiwiJCIsIm1vZGFsIiwicmVtb3ZlVGFzayIsInNwbGljZSIsInRhc2tDb250YWluZXIiLCJ0YXNrSW5wdXQiLCJ0YXNrTGFiZWwiLCJpY29ucyIsImRlbGV0ZUljb24iLCJkZWxldGVCdG4iLCJlZGl0SWNvbiIsImVkaXRCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNPLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFPQyxFQUFQLEVBQWM7QUFDN0NDLGdCQUFjLEdBQUdGLElBQWpCO0FBQ0EsTUFBTUcsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQW5CO0FBQ0EsTUFBTUMsZUFBZSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXhCO0FBQ0FGLFlBQVUsQ0FBQ0ksV0FBWCxhQUE0QkwsY0FBNUI7O0FBQ0EsTUFBSUksZUFBSixFQUFxQjtBQUNu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QSxTQUFLLENBQUM5QyxXQUFOLENBQWtCa0QsT0FBbEI7QUFDQUosU0FBSyxDQUFDOUMsV0FBTixDQUFrQmdELFNBQWxCO0FBQ0FFLFdBQU8sQ0FBQ2xELFdBQVIsQ0FBb0JpRCxRQUFwQjtBQUNBRCxhQUFTLENBQUNoRCxXQUFWLENBQXNCK0MsVUFBdEI7QUFFQUMsYUFBUyxDQUFDeEQsZ0JBQVYsQ0FBMkIsT0FBM0IsRUFBb0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pDZ0QsZ0JBQVUsQ0FBQ3hFLEVBQUQsQ0FBVjtBQUNELEtBRkQ7QUFJQWlGLFdBQU8sQ0FBQzFELGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN2Q29DLGNBQVEsQ0FBQzVELEVBQUQsQ0FBUjtBQUNELEtBRkQ7QUFJQSxXQUFPMEUsYUFBUDtBQUNELEdBckREOztBQXVEQSxTQUFPO0FBQUUvRCxlQUFXLEVBQVhBLFdBQUY7QUFBZVEsWUFBUSxFQUFSQTtBQUFmLEdBQVA7QUFDRCxDQWxKRDs7QUFvSkEsaUVBQWVELEtBQWYsRTs7Ozs7O1VDdEpBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyUHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0c1wiO1xyXG5pbXBvcnQgVGFza3MgZnJvbSBcIi4vdGFza3NcIjtcclxuZXhwb3J0IGNvbnN0IGNoYW5nZVByb2plY3ROYW1lID0gKG5hbWUsIGlkKSA9PiB7XHJcbiAgY3VycmVudFByb2plY3QgPSBuYW1lO1xyXG4gIGNvbnN0IHRhc2tIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lciA+IGgxXCIpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0ZWQtcHJvamVjdFwiKTtcclxuICB0YXNrSGVhZGVyLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFByb2plY3R9IFRhc2tzYDtcclxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgICBzZWxlY3RlZFByb2plY3QuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkLXByb2plY3RcIik7XHJcbiAgfVxyXG4gIGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3RvcihgI3Byb2plY3QtZGlzcGxheS0ke2lkfWApXHJcbiAgICAuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLXByb2plY3RcIik7XHJcbiAgcmVuZGVyVGFza0NvbnRhaW5lcihjdXJyZW50UHJvamVjdCk7XHJcbiAgcmVuZGVyVGFza3MoKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IGZpbHRlclRhc2tCeUN1cnJlbnRQcm9qZWN0ID0gKHRhc2tzQXJyKSA9PlxyXG4gIHRhc2tzQXJyLmZpbHRlcigodGFzaykgPT4gdGFzayAmJiB0YXNrLnByb2plY3QgPT09IGN1cnJlbnRQcm9qZWN0KTtcclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gdW5kZWZpbmVkO1xyXG5jb25zdCB7IHNhdmVUYXNrLCByZW5kZXJUYXNrcyB9ID0gVGFza3MoKTtcclxuaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHtcclxuICByZW5kZXJQcm9qZWN0cygpO1xyXG59XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZS10YXNrLWJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBzYXZlVGFzayhjdXJyZW50UHJvamVjdCk7XHJcbn0pO1xyXG5jb25zdCByZW5kZXJUYXNrQ29udGFpbmVyID0gKGlzQ3VycmVudFByb2plY3QpID0+IHtcclxuICBpZiAoIWlzQ3VycmVudFByb2plY3QpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5hZGQoXCJkLW5vbmVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgeyBjaGFuZ2VQcm9qZWN0TmFtZSB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHsgaWQsIG5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBhbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgcHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHJvamVjdC1saXN0LWl0ZW1cIik7XHJcbiAgYW5jaG9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdC1kaXNwbGF5LSR7aWR9YCk7XHJcbiAgYW5jaG9yRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcclxuICBhbmNob3JFbGVtZW50LnRleHRDb250ZW50ID0gbmFtZTtcclxuICBwcm9qZWN0VGl0bGUuYXBwZW5kQ2hpbGQoYW5jaG9yRWxlbWVudCk7XHJcbiAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBjaGFuZ2VQcm9qZWN0TmFtZShuYW1lLCBpZCk7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHByb2plY3RUaXRsZTtcclxufTtcclxuY29uc3QgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSk7XHJcbn07XHJcbmNvbnN0IHNldExvY2FsU3RvcmFnZVByb2plY3RzID0gKG5ld1Byb2plY3RBcnJheSkgPT4ge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdEFycmF5KSk7XHJcbn07XHJcbmNvbnN0IHJlbmRlclByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcclxuICBwcm9qZWN0TGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICBnZXRMb2NhbFN0b3JhZ2VQcm9qZWN0cygpLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIHByb2plY3RMaXN0RWxlbWVudC5hcHBlbmRDaGlsZChkaXNwbGF5UHJvamVjdChwcm9qZWN0KSk7XHJcbiAgfSk7XHJcbn07XHJcbmNvbnN0IGFkZFByb2plY3QgPSAoeyBuYW1lIH0pID0+IHtcclxuICBsZXQgcHJvamVjdEFycmF5ID0gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHMoKTtcclxuICBpZiAocHJvamVjdEFycmF5KSB7XHJcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0QXJyYXkubGVuZ3RoO1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlUHJvamVjdHMoWy4uLnByb2plY3RBcnJheSwgeyBuYW1lLCBpZDogcHJvamVjdElkIH1dKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvamVjdElkID0gMDtcclxuICAgIHNldExvY2FsU3RvcmFnZVByb2plY3RzKFt7IG5hbWUsIGlkOiBwcm9qZWN0SWQgfV0pO1xyXG4gIH1cclxuICByZW5kZXJQcm9qZWN0cygpO1xyXG59O1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmUtcHJvamVjdC1idG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXByb2plY3QtbmFtZVwiKTtcclxuICBpZiAocHJvamVjdE5hbWUudmFsdWUpIHtcclxuICAgIGFkZFByb2plY3QoeyBuYW1lOiBwcm9qZWN0TmFtZS52YWx1ZSB9KTtcclxuICAgIHByb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgYWxlcnQoXCJJbnZhbGlkIGZvcm1cIik7XHJcbiAgfVxyXG59KTtcclxuZXhwb3J0IHsgYWRkUHJvamVjdCwgcmVuZGVyUHJvamVjdHMgfTtcclxuIiwiaW1wb3J0IHsgZmlsdGVyVGFza0J5Q3VycmVudFByb2plY3QgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgVGFza3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgZ2V0TG9jYWxTdG9yYWdlVGFza3MgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xyXG4gIGNvbnN0IHNldExvY2FsU3RvcmFnZVRhc2tzID0gKG5ld1Rhc2tBcnJheSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeShuZXdUYXNrQXJyYXkpKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRUYXNrID0gKHRhc2tPYmopID0+IHtcclxuICAgIGxldCB0YXNrQXJyYXkgPSBnZXRMb2NhbFN0b3JhZ2VUYXNrcygpO1xyXG4gICAgaWYgKHRhc2tBcnJheSkge1xyXG4gICAgICBjb25zdCB0YXNrc0lkID0gdGFza0FycmF5Lmxlbmd0aDtcclxuICAgICAgc2V0TG9jYWxTdG9yYWdlVGFza3MoWy4uLnRhc2tBcnJheSwgeyAuLi50YXNrT2JqLCBpZDogdGFza3NJZCB9XSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB0YXNrc0lkID0gMDtcclxuICAgICAgc2V0TG9jYWxTdG9yYWdlVGFza3MoW3sgLi4udGFza09iaiwgaWQ6IHRhc2tzSWQgfV0pO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyVGFza3MoKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW5kZXJUYXNrcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHRhc2tMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtbGlzdFwiKTtcclxuICAgIHRhc2tMaXN0RWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG5cclxuICAgIGlmIChnZXRMb2NhbFN0b3JhZ2VUYXNrcygpKSB7XHJcbiAgICAgIGZpbHRlclRhc2tCeUN1cnJlbnRQcm9qZWN0KGdldExvY2FsU3RvcmFnZVRhc2tzKCkpLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICB0YXNrTGlzdEVsZW1lbnQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0VsZW1lbnQodGFzaykpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBlZGl0VGFzayA9IChpZCkgPT4ge1xyXG4gICAgbGV0IHRhc2tBcnJheSA9IGdldExvY2FsU3RvcmFnZVRhc2tzKCk7XHJcbiAgICBjb25zdCBlZGl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWJ0blwiKTtcclxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stbmFtZVwiKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC10YXNrLWRlc2NyaXB0aW9uXCIpO1xyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VkaXQtdGFzay1kYXRlXCIpO1xyXG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stcHJpb3JpdHlcIik7XHJcbiAgICB0YXNrTmFtZS52YWx1ZSA9IHRhc2tBcnJheVtpZF0udGl0bGU7XHJcbiAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSB0YXNrQXJyYXlbaWRdLmRlc2NyaXB0aW9uO1xyXG4gICAgdGFza0RhdGUudmFsdWUgPSB0YXNrQXJyYXlbaWRdLmRhdGU7XHJcbiAgICB0YXNrUHJpb3JpdHkudmFsdWUgPSB0YXNrQXJyYXlbaWRdLnByaW9yaXR5O1xyXG5cclxuICAgICQoXCIjZWRpdE1vZGFsVGFza1wiKS5tb2RhbChcInNob3dcIik7XHJcbiAgICBlZGl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlICYmIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSAmJiB0YXNrRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgIHRhc2tBcnJheVtpZF0udGl0bGUgPSB0YXNrTmFtZS52YWx1ZTtcclxuICAgICAgICB0YXNrQXJyYXlbaWRdLmRlc2NyaXB0aW9uID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gICAgICAgIHRhc2tBcnJheVtpZF0uZGF0ZSA9IHRhc2tEYXRlLnZhbHVlO1xyXG4gICAgICAgIHRhc2tBcnJheVtpZF0ucHJpb3JpdHkgPSB0YXNrUHJpb3JpdHkudmFsdWU7XHJcblxyXG4gICAgICAgIHNldExvY2FsU3RvcmFnZVRhc2tzKHRhc2tBcnJheSk7XHJcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcclxuICAgICAgICAkKFwiI2VkaXRNb2RhbFRhc2tcIikubW9kYWwoXCJoaWRlXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwiSW52YWxpZCBmb3JtXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZW1vdmVUYXNrID0gKGlkKSA9PiB7XHJcbiAgICBsZXQgdGFza0FycmF5ID0gZ2V0TG9jYWxTdG9yYWdlVGFza3MoKTtcclxuICAgIHRhc2tBcnJheS5zcGxpY2UoaWQsIDEsIG51bGwpO1xyXG4gICAgc2V0TG9jYWxTdG9yYWdlVGFza3ModGFza0FycmF5KTtcclxuICAgIHJlbmRlclRhc2tzKCk7XHJcbiAgfTtcclxuXHJcbiAgLy8gU2F2ZSBidXR0b24gb24gbW9kYWxcclxuICBjb25zdCBzYXZlVGFzayA9IChjdXJyZW50UHJvamVjdCkgPT4ge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzYXZlLXRhc2stYnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1uYW1lXCIpO1xyXG4gICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXRhc2stZGVzY3JpcHRpb25cIik7XHJcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC10YXNrLWRhdGVcIik7XHJcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdGFzay1wcmlvcml0eVwiKTtcclxuICAgICAgaWYgKHRhc2tOYW1lLnZhbHVlICYmIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSAmJiB0YXNrRGF0ZS52YWx1ZSkge1xyXG4gICAgICAgIGFkZFRhc2soe1xyXG4gICAgICAgICAgdGl0bGU6IHRhc2tOYW1lLnZhbHVlLFxyXG4gICAgICAgICAgcHJvamVjdDogY3VycmVudFByb2plY3QsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLnZhbHVlLFxyXG4gICAgICAgICAgZGF0ZTogdGFza0RhdGUudmFsdWUsXHJcbiAgICAgICAgICBwcmlvcml0eTogdGFza1ByaW9yaXR5LnZhbHVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRhc2tOYW1lLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gXCJcIjtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIkludmFsaWQgZm9ybVwiKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gQ3JlYXRlIGVsZW1ldHMgZm9yIGVhY2ggdGFza1xyXG4gIGNvbnN0IGNyZWF0ZVRhc2tFbGVtZW50ID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkYXRlLCBwcmlvcml0eSwgaWQgfSkgPT4ge1xyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xyXG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XHJcbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjayBkLWZsZXhcIik7XHJcbiAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIGB0aXRsZS0ke3RpdGxlfWApO1xyXG4gICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZm9ybS1jaGVjay1pbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBgJHt0aXRsZX1gKTtcclxuICAgIHRhc2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlIGZvcm0tY2hlY2stZWxlbWVudFwiKTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRlc2NyaXB0aW9uIGZvcm0tY2hlY2stZWxlbWVudFwiKTtcclxuICAgIHRhc2tEYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGF0ZSBmb3JtLWNoZWNrLWVsZW1lbnRcIik7XHJcbiAgICB0YXNrUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJwcmlvcml0eSBmb3JtLWNoZWNrLWVsZW1lbnRcIik7XHJcbiAgICBpY29ucy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImljb25zXCIpO1xyXG4gICAgZGVsZXRlQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlLWJ0blwiKTtcclxuICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYXIgZmEtdHJhc2gtYWx0XCIpO1xyXG4gICAgZWRpdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVkaXQtYnRuXCIpO1xyXG4gICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmYXIgZmEtZWRpdFwiKTtcclxuXHJcbiAgICB0YXNrTGFiZWwudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFza0RhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xyXG4gICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrTGFiZWwpO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGF0ZSk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGljb25zKTtcclxuICAgIGljb25zLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xyXG4gICAgaWNvbnMuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcclxuICAgIGVkaXRCdG4uYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xyXG4gICAgZGVsZXRlQnRuLmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgICAgcmVtb3ZlVGFzayhpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICBlZGl0VGFzayhpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGFza0NvbnRhaW5lcjtcclxuICB9O1xyXG5cclxuICByZXR1cm4geyByZW5kZXJUYXNrcywgc2F2ZVRhc2sgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhc2tzO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=