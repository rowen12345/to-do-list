/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    font-size: var(--font-size);
}
:root{
    --font-size: 20px;
}
.controls{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    
}

.flex-inputs{
    display: flex;
    gap: 25px;
}
#list-of-to-dos{
    text-align: center;
}
#addTask:hover {
    transform: scale(1.1);
}
#addProject:hover{
    transform: scale(1.1);
}
#addTask, #addProject{
    position: relative;
    height: 40px;
    align-self: center;
    text-align: start;
    cursor: pointer;
    border-radius: 6px;
    background-color: transparent;
    border: 1px solid black;
    font-size: clamp(1rem, 4vw, 1.2rem);
    transition: transform 0.4s ease;
    margin-top: 5px;
}

#newTaskContainer{
    border-radius: 10px;
    border: 1px solid black;
}
#dueDate{
    position: relative;
    padding-bottom: 2px;
    width: 100px;
}
#inputName{
    margin: 20px;
}
#inputDescription{
    margin: 20px;
}
#newTask{
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 10px 15px;
}

#taskSubmitBtn, #cancel{
    cursor: pointer;
    border: none;
    background-color: transparent;
    border-radius: 8px;
    padding: 5px;
    border: 1px solid black;
    width: clamp(120px, 20vw, 150px);
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    font-weight: 400;
}

#list-of-to-dos{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.task-btn-modal{
    display: flex;
    gap: 15px;
    margin-top: 10px;
}
.task {
    display: flex;
    flex-direction: row;
    height: 40px;
    gap: 10px;
    border: 1px solid hsla(0, 0%, 0%, 0.313);
    border-radius: 5px;
}
.task:has(.completed:checked) {
    text-decoration: line-through;
}
#inbox, .project{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
input{
    border: none;
    border-bottom: 1px solid hsla(0, 0%, 0%, 0.313);
    outline: none;
}
.delete-btn, .update-btn{
    height: 35px;
}
`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;AAC/B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;AAEb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,kBAAkB;AACtB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,qBAAqB;AACzB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,6BAA6B;IAC7B,uBAAuB;IACvB,mCAAmC;IACnC,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,6BAA6B;IAC7B,kBAAkB;IAClB,YAAY;IACZ,uBAAuB;IACvB,gCAAgC;IAChC,qCAAqC;IACrC,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,SAAS;IACT,wCAAwC;IACxC,kBAAkB;AACtB;AACA;IACI,6BAA6B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,YAAY;IACZ,+CAA+C;IAC/C,aAAa;AACjB;AACA;IACI,YAAY;AAChB","sourcesContent":["body{\r\n    font-size: var(--font-size);\r\n}\r\n:root{\r\n    --font-size: 20px;\r\n}\r\n.controls{\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    gap: 20px;\r\n    \r\n}\r\n\r\n.flex-inputs{\r\n    display: flex;\r\n    gap: 25px;\r\n}\r\n#list-of-to-dos{\r\n    text-align: center;\r\n}\r\n#addTask:hover {\r\n    transform: scale(1.1);\r\n}\r\n#addProject:hover{\r\n    transform: scale(1.1);\r\n}\r\n#addTask, #addProject{\r\n    position: relative;\r\n    height: 40px;\r\n    align-self: center;\r\n    text-align: start;\r\n    cursor: pointer;\r\n    border-radius: 6px;\r\n    background-color: transparent;\r\n    border: 1px solid black;\r\n    font-size: clamp(1rem, 4vw, 1.2rem);\r\n    transition: transform 0.4s ease;\r\n    margin-top: 5px;\r\n}\r\n\r\n#newTaskContainer{\r\n    border-radius: 10px;\r\n    border: 1px solid black;\r\n}\r\n#dueDate{\r\n    position: relative;\r\n    padding-bottom: 2px;\r\n    width: 100px;\r\n}\r\n#inputName{\r\n    margin: 20px;\r\n}\r\n#inputDescription{\r\n    margin: 20px;\r\n}\r\n#newTask{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    width: 100%;\r\n    padding: 10px 15px;\r\n}\r\n\r\n#taskSubmitBtn, #cancel{\r\n    cursor: pointer;\r\n    border: none;\r\n    background-color: transparent;\r\n    border-radius: 8px;\r\n    padding: 5px;\r\n    border: 1px solid black;\r\n    width: clamp(120px, 20vw, 150px);\r\n    font-size: clamp(0.9rem, 2vw, 1.1rem);\r\n    font-weight: 400;\r\n}\r\n\r\n#list-of-to-dos{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.task-btn-modal{\r\n    display: flex;\r\n    gap: 15px;\r\n    margin-top: 10px;\r\n}\r\n.task {\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 40px;\r\n    gap: 10px;\r\n    border: 1px solid hsla(0, 0%, 0%, 0.313);\r\n    border-radius: 5px;\r\n}\r\n.task:has(.completed:checked) {\r\n    text-decoration: line-through;\r\n}\r\n#inbox, .project{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n}\r\ninput{\r\n    border: none;\r\n    border-bottom: 1px solid hsla(0, 0%, 0%, 0.313);\r\n    outline: none;\r\n}\r\n.delete-btn, .update-btn{\r\n    height: 35px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   createOptionElement: () => (/* binding */ createOptionElement),
/* harmony export */   createProjectElement: () => (/* binding */ createProjectElement),
/* harmony export */   projectNames: () => (/* binding */ projectNames),
/* harmony export */   saveProjectsToStorage: () => (/* binding */ saveProjectsToStorage)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/modules/init.js");
// projects.js



// Factory function for Project objects
function createProject(name) {
  return {
    name,
    tasks: []
  };
}

function saveProjectsToStorage(list) {
  localStorage.setItem('projectNames', JSON.stringify(list));
}

function loadProjectsFromStorage() {
  return JSON.parse(localStorage.getItem("projectNames")) || [];
}

// --- DOM Helpers ---
function createProjectElement(projectVal) {
  const newProject = document.createElement("div");
  const newProjectName = document.createElement("h2");

  newProjectName.textContent = projectVal;
  //Replace multiple spaces with a single space
  newProject.id = projectVal.replace(/\s+/g, "");
  newProject.className = "project";
  newProject.appendChild(newProjectName);

  return newProject;
}

function createOptionElement(projectVal) {
  const option = document.createElement("option");
  //Replace multiple spaces with a single space
  option.value = projectVal.replace(/\s+/g, "");
  option.textContent = projectVal;
  return option;
}

// --- Main Add Project Function ---
//export const projectList = [];

const projectNames = loadProjectsFromStorage();
function addProject() {
  const inputProject = document.getElementById("inputProject");
  let projectVal = inputProject.value.trim();

  if (!projectVal) return; // empty input guard

  if (!projectNames.includes(projectVal)) {
    projectNames.push(projectVal);
    saveProjectsToStorage(projectNames);

    // create DOM elements
    const newProject = createProjectElement(projectVal);
    const newOption = createOptionElement(projectVal);

    document.getElementById("list-of-to-dos").appendChild(newProject);
    document.getElementById("projectsDropDown").appendChild(newOption);
  }

  // reset input + close dialog
  inputProject.value = "";
  _init__WEBPACK_IMPORTED_MODULE_0__.dialogProject.close();
}


/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   retrieveItems: () => (/* binding */ retrieveItems)
/* harmony export */ });
/* harmony import */ var _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-new-task */ "./src/modules/pop-up-new-task.js");
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init */ "./src/modules/init.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addProject */ "./src/modules/addProject.js");






const retrieveItems = () =>  {
    const taskList = JSON.parse(localStorage.getItem('tasks'))
    const projectNames = JSON.parse(localStorage.getItem('projectNames'))
    if (projectNames){
         projectNames.forEach((project) => {
            document.getElementById("list-of-to-dos").appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_2__.createProjectElement)(project));

            document.getElementById("projectsDropDown").appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_2__.createOptionElement)(project));
        });
    }
   
    //taskList.map((taskObj) => taskObj.projectName === 'inbox'? inbox.appendChild(renderTask(taskObj, taskObj.projectName)): document.querySelector(`#${taskObj.projectName}`).appendChild(renderTask(taskObj, taskObj.projectName)))
    if(taskList){
        taskList.map((taskObj) => taskObj.projectName === 'inbox'? _init__WEBPACK_IMPORTED_MODULE_1__.inbox.appendChild((0,_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.renderTask)(taskObj, taskObj.projectName)):document.querySelector(`#${taskObj.projectName}`).appendChild((0,_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.renderTask)(taskObj, taskObj.projectName)) )
    }
}

/***/ }),

/***/ "./src/modules/init.js":
/*!*****************************!*\
  !*** ./src/modules/init.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dialog: () => (/* binding */ dialog),
/* harmony export */   dialogProject: () => (/* binding */ dialogProject),
/* harmony export */   inbox: () => (/* binding */ inbox),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   listOfToDo: () => (/* binding */ listOfToDo),
/* harmony export */   newProjectObject: () => (/* binding */ newProjectObject),
/* harmony export */   newTaskInput: () => (/* binding */ newTaskInput),
/* harmony export */   newTaskObject: () => (/* binding */ newTaskObject),
/* harmony export */   projectNames: () => (/* binding */ projectNames),
/* harmony export */   projectsDropDown: () => (/* binding */ projectsDropDown)
/* harmony export */ });
/* harmony import */ var _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-new-task */ "./src/modules/pop-up-new-task.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ "./src/modules/addProject.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.js");

//npx webpack serve to initialise

const newTaskInput = document.getElementById('newTask')
;




const dialog = document.getElementById("newTaskContainer");
const dialogProject = document.getElementById('newProjectContainer')
const inbox = document.getElementById('inbox')
const listOfToDo = document.getElementById('list-of-to-dos')
const projectsDropDown = document.getElementById('projectsDropDown')
const projectNames = ['inbox']
class newTaskObject {
            constructor(name, description, priority, date,id, complete, projectName){
                this.name = name
                this.description = description
                this.priority = priority
                this.date = date
                this.id = id
                this.complete = complete
                this.projectName = projectName
            }
    }
class newProjectObject {
        constructor(name,  list = []){
            this.name = name
            this.list = list
        }
    }



const init = () =>{
    //localStorage.clear()
    (0,_getData__WEBPACK_IMPORTED_MODULE_2__.retrieveItems)()
    let taskUpdateContainer = ''
    const addProjectButton = document.getElementById('addProject')
    const addTask = document.getElementById('addTask')
    const confirmProject = document.getElementById('confirmProject')
    const cancelProject = document.getElementById('cancelProject')
    const cancelButton = document.getElementById('cancel')
    const taskSubmitBtn = document.getElementById('taskSubmitBtn')

    document.addEventListener('change', (event)=>{
        const checkbox = event.target.closest('.completed')
        if(checkbox){
            const taskId = event.target.closest('.task').dataset.id;
            const task = _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.find(t => t.id === taskId);
            if (task) {
                task.complete = checkbox.checked
                localStorage.setItem("tasks", JSON.stringify(_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList));
            }
        }
    })
        
    document.addEventListener('click', (event) => {
        //if user presses the update button
        if (event.target.closest('.update-btn')) {
            taskUpdateContainer = event.target.closest('.task'); // parent div of everything

           // Prefill dialog fields
            document.querySelector('.input').value = taskUpdateContainer.querySelector('.name-of-task').textContent;
            document.querySelector('.description').value = taskUpdateContainer.querySelector('.description-text').textContent;
            document.querySelector('#dueDate').value = taskUpdateContainer.querySelector('.due-date').textContent;
            document.querySelector('#priority').value = taskUpdateContainer.querySelector('.priority').textContent;
            document.querySelector('#projectsDropDown').value = event.target.dataset.listType;
            // Change button text & set mode
            const submitBtn = document.querySelector('#taskSubmitBtn');
            submitBtn.textContent = 'Save Task';
            submitBtn.dataset.mode = 'update';
                        
            dialog.showModal()
        }
        // if users presses the delete button
        else if(event.target.closest('.delete-btn')){
            const deleteTask = event.target.closest('.task'); // parent div of everything
            const taskId = deleteTask.dataset.id;
            // Remove from taskList array
            const taskIndex = _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.splice(taskIndex, 1); // removes the task from array
                localStorage.setItem("tasks", JSON.stringify(_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList));
            }

            if(event.target.closest(`#inbox`)){
                event.target.closest(`#inbox`).removeChild(deleteTask)
            }
            else{
                const projectType = event.target.dataset.listType
                const projectTypeClass = event.target.closest(`#${projectType}`)
                projectTypeClass.removeChild(deleteTask)
            }
            
        }
    });
    
    addTask.addEventListener('click',()=>{
       dialog.showModal()
    })

    cancelButton.addEventListener('click', () =>{
        dialog.close()
    })
    taskSubmitBtn.addEventListener("click", (event) =>{
        const mode = event.target.dataset.mode || "create";
        (0,_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.popupTask)(mode, taskUpdateContainer);
    });

    addProjectButton.addEventListener('click',()=>{
        dialogProject.showModal()
    })
    cancelProject.addEventListener('click', () =>{
        dialogProject.close()
    })
    confirmProject.addEventListener('click', _addProject__WEBPACK_IMPORTED_MODULE_1__.addProject)
    
}

/***/ }),

/***/ "./src/modules/pop-up-new-task.js":
/*!****************************************!*\
  !*** ./src/modules/pop-up-new-task.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorMap: () => (/* binding */ colorMap),
/* harmony export */   inboxList: () => (/* binding */ inboxList),
/* harmony export */   popupTask: () => (/* binding */ popupTask),
/* harmony export */   priorityColors: () => (/* binding */ priorityColors),
/* harmony export */   renderTask: () => (/* binding */ renderTask),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/modules/init.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ "./src/modules/addProject.js");




//import projectList from './addProject';
const inboxList = []
const taskList = loadTasksFromStorage()
function loadTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
const colorMap ={
    Low:'green',
    Medium: 'rgba(255, 153, 0, 0.39)',
    High: 'red'
};



const savedTasks = document.querySelector('div')
const popupTask = (mode, taskUpdateContainer) => {
    if (mode === 'create') {
        const dropDownVal = _init__WEBPACK_IMPORTED_MODULE_0__.projectsDropDown.value;

        // Get form values
        const name = document.querySelector('#inputName input').value;
        const description = document.querySelector('#inputDescription input').value;
        const dueDate = document.getElementById('dueDate').value;
        const priority = document.getElementById('priority').value;
        const complete = false
        const uid = function(){
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
        }
        

        // Create a task object
        const taskObj = new _init__WEBPACK_IMPORTED_MODULE_0__.newTaskObject(name, description, priority, dueDate,uid(),complete,dropDownVal);
        //console.log(taskId)
        /*
        // Save to the correct list
        if (dropDownVal === 'inbox') {
            inboxList.push(taskObj);
        } else {
            projectList.forEach((project) => {
                if (project.name === dropDownVal) {
                    project.list.push(taskObj);
                }
            });
        }
    */

        // Render it in the DOM
        const taskElement = renderTask(taskObj, dropDownVal);
        taskList.push(taskObj)
        console.log(taskObj.projectName)
        localStorage.setItem('tasks', JSON.stringify(taskList));
       // console.log(taskObj.projectName)
        
        if (dropDownVal === 'inbox') {
            _init__WEBPACK_IMPORTED_MODULE_0__.inbox.appendChild(taskElement);
        } else {
            const displayTodoList = document.querySelector(`#${dropDownVal}`);
            console.log(`#${dropDownVal}`)
            displayTodoList.appendChild(taskElement);
        }

    } else if (mode === 'update') {
        const taskId = taskUpdateContainer.dataset.id;
        taskUpdateContainer.querySelector('.name-of-task').textContent = document.querySelector('.input').value;
        taskUpdateContainer.querySelector('.description-text').textContent = document.querySelector('.description').value;
        taskUpdateContainer.querySelector('.due-date').textContent = document.querySelector('#dueDate').value;
        taskUpdateContainer.querySelector('.priority').textContent = document.querySelector('#priority').value;
        priorityColors(taskUpdateContainer,document.querySelector('#priority').value)

        const task = taskList.find(t => t.id === taskId);
        if (task) {
            task.name = taskUpdateContainer.querySelector('.name-of-task').textContent;
            task.description = taskUpdateContainer.querySelector('.description-text').textContent;
            task.dueDate = taskUpdateContainer.querySelector('.due-date').textContent;
            task.priority = taskUpdateContainer.querySelector('.priority').textContent;
        }

        // save back to localStorage
        localStorage.setItem("tasks", JSON.stringify(taskList));
        const submitBtn = document.querySelector('#taskSubmitBtn');
        submitBtn.dataset.mode = 'create';
        submitBtn.textContent = 'Create Task';
    }
    // Reset and close dialog
    document.querySelector('#inputName input').value = '';
    document.querySelector('#inputDescription input').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = '';
    _init__WEBPACK_IMPORTED_MODULE_0__.dialog.close();

   
};

function priorityColors(taskElement, priority){
    taskElement.querySelector('.priority').style.color = colorMap[priority]
}
function renderTask(taskObj, listType) {

    const taskContainer = document.createElement('div');
    taskContainer.className = 'task';

    taskContainer.dataset.id = taskObj.id; // <-- added this line

    const nameDiv = document.createElement('div');
    nameDiv.className = 'name-of-task';
    nameDiv.textContent = taskObj.name;

    const descDiv = document.createElement('div');
    descDiv.className = 'description-text';
    descDiv.textContent = taskObj.description;
    descDiv.style.display = 'none'

    const dateDiv = document.createElement('div');
    dateDiv.className = 'due-date'
    dateDiv.textContent = taskObj.date;

    const priorityDiv = document.createElement('div');
    priorityDiv.className = 'priority'
    priorityDiv.textContent = taskObj.priority;

    const idDiv = document.createElement('div')
    idDiv.className = `${taskObj.id}`

    const updateBtn = document.createElement('button');
    updateBtn.className = 'update-btn';

    updateBtn.dataset.listType = listType;
    updateBtn.textContent = 'Update';
    updateBtn.appendChild(nameDiv);
    updateBtn.appendChild(descDiv);
    updateBtn.appendChild(dateDiv);
    updateBtn.appendChild(priorityDiv);
    document.body.appendChild(updateBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.listType = listType;
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    const checkBox = document.createElement('input');
    checkBox.className = 'completed'
    checkBox.type = 'checkbox';

    if(taskObj.complete){
        checkBox.checked = true
    }
    taskContainer.append(updateBtn, deleteBtn, checkBox, nameDiv, descDiv, dateDiv, priorityDiv, idDiv);
    priorityColors(taskContainer, taskObj.priority)
    return taskContainer;
}



/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/init.js */ "./src/modules/init.js");
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.css */ "./src/styles/styles.css");




document.addEventListener("DOMContentLoaded", () => {
  (0,_modules_init_js__WEBPACK_IMPORTED_MODULE_0__.init)();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7VUN4QjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ1Q7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBSTtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbml0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3AtdXAtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZSk7XHJcbn1cclxuOnJvb3R7XHJcbiAgICAtLWZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uY29udHJvbHN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5mbGV4LWlucHV0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuI2xpc3Qtb2YtdG8tZG9ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNhZGRUYXNrOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jYWRkUHJvamVjdDpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4jYWRkVGFzaywgI2FkZFByb2plY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4ycmVtKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbiNuZXdUYXNrQ29udGFpbmVye1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiNkdWVEYXRle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxufVxyXG4jaW5wdXROYW1le1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiNpbnB1dERlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiNuZXdUYXNre1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuI3Rhc2tTdWJtaXRCdG4sICNjYW5jZWx7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgd2lkdGg6IGNsYW1wKDEyMHB4LCAyMHZ3LCAxNTBweCk7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMnZ3LCAxLjFyZW0pO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuI2xpc3Qtb2YtdG8tZG9ze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi50YXNrLWJ0bi1tb2RhbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi50YXNrIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMCUsIDAuMzEzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4udGFzazpoYXMoLmNvbXBsZXRlZDpjaGVja2VkKSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4jaW5ib3gsIC5wcm9qZWN0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuaW5wdXR7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgaHNsYSgwLCAwJSwgMCUsIDAuMzEzKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmRlbGV0ZS1idG4sIC51cGRhdGUtYnRue1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1DQUFtQztJQUNuQywrQkFBK0I7SUFDL0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixTQUFTO0lBQ1Qsd0NBQXdDO0lBQ3hDLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksWUFBWTtJQUNaLCtDQUErQztJQUMvQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHl7XFxyXFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zaXplKTtcXHJcXG59XFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG4uY29udHJvbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1pbnB1dHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG59XFxyXFxuI2xpc3Qtb2YtdG8tZG9ze1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbiNhZGRUYXNrOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4jYWRkUHJvamVjdDpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbn1cXHJcXG4jYWRkVGFzaywgI2FkZFByb2plY3R7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDR2dywgMS4ycmVtKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3VGFza0NvbnRhaW5lcntcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNkdWVEYXRle1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuI2lucHV0TmFtZXtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG4jaW5wdXREZXNjcmlwdGlvbntcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG4jbmV3VGFza3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza1N1Ym1pdEJ0biwgI2NhbmNlbHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHdpZHRoOiBjbGFtcCgxMjBweCwgMjB2dywgMTUwcHgpO1xcclxcbiAgICBmb250LXNpemU6IGNsYW1wKDAuOXJlbSwgMnZ3LCAxLjFyZW0pO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG4jbGlzdC1vZi10by1kb3N7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrLWJ0bi1tb2RhbHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG4udGFzayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2xhKDAsIDAlLCAwJSwgMC4zMTMpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcbi50YXNrOmhhcyguY29tcGxldGVkOmNoZWNrZWQpIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcbiNpbmJveCwgLnByb2plY3R7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuaW5wdXR7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGhzbGEoMCwgMCUsIDAlLCAwLjMxMyk7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbi5kZWxldGUtYnRuLCAudXBkYXRlLWJ0bntcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gcHJvamVjdHMuanNcclxuXHJcbmltcG9ydCB7IGRpYWxvZ1Byb2plY3QgfSBmcm9tIFwiLi9pbml0XCI7XHJcblxyXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIGZvciBQcm9qZWN0IG9iamVjdHNcclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWUsXHJcbiAgICB0YXNrczogW11cclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZVByb2plY3RzVG9TdG9yYWdlKGxpc3QpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdE5hbWVzJywgSlNPTi5zdHJpbmdpZnkobGlzdCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvamVjdHNGcm9tU3RvcmFnZSgpIHtcclxuICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3ROYW1lc1wiKSkgfHwgW107XHJcbn1cclxuXHJcbi8vIC0tLSBET00gSGVscGVycyAtLS1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3RWYWwpIHtcclxuICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuXHJcbiAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsO1xyXG4gIC8vUmVwbGFjZSBtdWx0aXBsZSBzcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxyXG4gIG5ld1Byb2plY3QuaWQgPSBwcm9qZWN0VmFsLnJlcGxhY2UoL1xccysvZywgXCJcIik7XHJcbiAgbmV3UHJvamVjdC5jbGFzc05hbWUgPSBcInByb2plY3RcIjtcclxuICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuXHJcbiAgcmV0dXJuIG5ld1Byb2plY3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3RWYWwpIHtcclxuICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gIC8vUmVwbGFjZSBtdWx0aXBsZSBzcGFjZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxyXG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3RWYWwucmVwbGFjZSgvXFxzKy9nLCBcIlwiKTtcclxuICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsO1xyXG4gIHJldHVybiBvcHRpb247XHJcbn1cclxuXHJcbi8vIC0tLSBNYWluIEFkZCBQcm9qZWN0IEZ1bmN0aW9uIC0tLVxyXG4vL2V4cG9ydCBjb25zdCBwcm9qZWN0TGlzdCA9IFtdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lcyA9IGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KCkge1xyXG4gIGNvbnN0IGlucHV0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRQcm9qZWN0XCIpO1xyXG4gIGxldCBwcm9qZWN0VmFsID0gaW5wdXRQcm9qZWN0LnZhbHVlLnRyaW0oKTtcclxuXHJcbiAgaWYgKCFwcm9qZWN0VmFsKSByZXR1cm47IC8vIGVtcHR5IGlucHV0IGd1YXJkXHJcblxyXG4gIGlmICghcHJvamVjdE5hbWVzLmluY2x1ZGVzKHByb2plY3RWYWwpKSB7XHJcbiAgICBwcm9qZWN0TmFtZXMucHVzaChwcm9qZWN0VmFsKTtcclxuICAgIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShwcm9qZWN0TmFtZXMpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBET00gZWxlbWVudHNcclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0VmFsKTtcclxuICAgIGNvbnN0IG5ld09wdGlvbiA9IGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdFZhbCk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LW9mLXRvLWRvc1wiKS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNEcm9wRG93blwiKS5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gcmVzZXQgaW5wdXQgKyBjbG9zZSBkaWFsb2dcclxuICBpbnB1dFByb2plY3QudmFsdWUgPSBcIlwiO1xyXG4gIGRpYWxvZ1Byb2plY3QuY2xvc2UoKTtcclxufVxyXG4iLCJcclxuaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gXCIuL3BvcC11cC1uZXctdGFza1wiO1xyXG5pbXBvcnQgeyBpbmJveCB9IGZyb20gXCIuL2luaXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdEVsZW1lbnQgfSBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZU9wdGlvbkVsZW1lbnQgfSBmcm9tIFwiLi9hZGRQcm9qZWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgcmV0cmlldmVJdGVtcyA9ICgpID0+ICB7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpXHJcbiAgICBjb25zdCBwcm9qZWN0TmFtZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TmFtZXMnKSlcclxuICAgIGlmIChwcm9qZWN0TmFtZXMpe1xyXG4gICAgICAgICBwcm9qZWN0TmFtZXMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtb2YtdG8tZG9zXCIpLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RFbGVtZW50KHByb2plY3QpKTtcclxuXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHNEcm9wRG93blwiKS5hcHBlbmRDaGlsZChjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3QpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgXHJcbiAgICAvL3Rhc2tMaXN0Lm1hcCgodGFza09iaikgPT4gdGFza09iai5wcm9qZWN0TmFtZSA9PT0gJ2luYm94Jz8gaW5ib3guYXBwZW5kQ2hpbGQocmVuZGVyVGFzayh0YXNrT2JqLCB0YXNrT2JqLnByb2plY3ROYW1lKSk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tPYmoucHJvamVjdE5hbWV9YCkuYXBwZW5kQ2hpbGQocmVuZGVyVGFzayh0YXNrT2JqLCB0YXNrT2JqLnByb2plY3ROYW1lKSkpXHJcbiAgICBpZih0YXNrTGlzdCl7XHJcbiAgICAgICAgdGFza0xpc3QubWFwKCh0YXNrT2JqKSA9PiB0YXNrT2JqLnByb2plY3ROYW1lID09PSAnaW5ib3gnPyBpbmJveC5hcHBlbmRDaGlsZChyZW5kZXJUYXNrKHRhc2tPYmosIHRhc2tPYmoucHJvamVjdE5hbWUpKTpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0YXNrT2JqLnByb2plY3ROYW1lfWApLmFwcGVuZENoaWxkKHJlbmRlclRhc2sodGFza09iaiwgdGFza09iai5wcm9qZWN0TmFtZSkpIClcclxuICAgIH1cclxufSIsIlxyXG4vL25weCB3ZWJwYWNrIHNlcnZlIHRvIGluaXRpYWxpc2VcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdUYXNrSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzaycpXHJcbmltcG9ydCB7IHBvcHVwVGFzayB9IGZyb20gJy4vcG9wLXVwLW5ldy10YXNrJ1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0JztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyByZXRyaWV2ZUl0ZW1zIH0gZnJvbSAnLi9nZXREYXRhJztcclxuaW1wb3J0IHsgdGFza0xpc3QgfSBmcm9tICcuL3BvcC11cC1uZXctdGFzayc7XHJcbmV4cG9ydCBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Rhc2tDb250YWluZXJcIik7XHJcbmV4cG9ydCBjb25zdCBkaWFsb2dQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RDb250YWluZXInKVxyXG5leHBvcnQgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3gnKVxyXG5leHBvcnQgY29uc3QgbGlzdE9mVG9EbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW9mLXRvLWRvcycpXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzRHJvcERvd24nKVxyXG5leHBvcnQgY29uc3QgcHJvamVjdE5hbWVzID0gWydpbmJveCddXHJcbmV4cG9ydCBjbGFzcyBuZXdUYXNrT2JqZWN0IHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlLGlkLCBjb21wbGV0ZSwgcHJvamVjdE5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZSA9IGRhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPSBpZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWVcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5leHBvcnQgY2xhc3MgbmV3UHJvamVjdE9iamVjdCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZSwgIGxpc3QgPSBbXSl7XHJcbiAgICAgICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICAgICAgdGhpcy5saXN0ID0gbGlzdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXQgPSAoKSA9PntcclxuICAgIC8vbG9jYWxTdG9yYWdlLmNsZWFyKClcclxuICAgIHJldHJpZXZlSXRlbXMoKVxyXG4gICAgbGV0IHRhc2tVcGRhdGVDb250YWluZXIgPSAnJ1xyXG4gICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JylcclxuICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpXHJcbiAgICBjb25zdCBjb25maXJtUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb25maXJtUHJvamVjdCcpXHJcbiAgICBjb25zdCBjYW5jZWxQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbFByb2plY3QnKVxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpXHJcbiAgICBjb25zdCB0YXNrU3VibWl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tTdWJtaXRCdG4nKVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCk9PntcclxuICAgICAgICBjb25zdCBjaGVja2JveCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcuY29tcGxldGVkJylcclxuICAgICAgICBpZihjaGVja2JveCl7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzaycpLmRhdGFzZXQuaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrTGlzdC5maW5kKHQgPT4gdC5pZCA9PT0gdGFza0lkKTtcclxuICAgICAgICAgICAgaWYgKHRhc2spIHtcclxuICAgICAgICAgICAgICAgIHRhc2suY29tcGxldGUgPSBjaGVja2JveC5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAvL2lmIHVzZXIgcHJlc3NlcyB0aGUgdXBkYXRlIGJ1dHRvblxyXG4gICAgICAgIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLnVwZGF0ZS1idG4nKSkge1xyXG4gICAgICAgICAgICB0YXNrVXBkYXRlQ29udGFpbmVyID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrJyk7IC8vIHBhcmVudCBkaXYgb2YgZXZlcnl0aGluZ1xyXG5cclxuICAgICAgICAgICAvLyBQcmVmaWxsIGRpYWxvZyBmaWVsZHNcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWUgPSB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLW9mLXRhc2snKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudmFsdWUgPSB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbi10ZXh0JykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWUgPSB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5kdWUtZGF0ZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKS52YWx1ZSA9IHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0c0Ryb3BEb3duJykudmFsdWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5saXN0VHlwZTtcclxuICAgICAgICAgICAgLy8gQ2hhbmdlIGJ1dHRvbiB0ZXh0ICYgc2V0IG1vZGVcclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tTdWJtaXRCdG4nKTtcclxuICAgICAgICAgICAgc3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUgVGFzayc7XHJcbiAgICAgICAgICAgIHN1Ym1pdEJ0bi5kYXRhc2V0Lm1vZGUgPSAndXBkYXRlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpYWxvZy5zaG93TW9kYWwoKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB1c2VycyBwcmVzc2VzIHRoZSBkZWxldGUgYnV0dG9uXHJcbiAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1idG4nKSl7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2snKTsgLy8gcGFyZW50IGRpdiBvZiBldmVyeXRoaW5nXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJZCA9IGRlbGV0ZVRhc2suZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gdGFza0xpc3QgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza0xpc3QuZmluZEluZGV4KHQgPT4gdC5pZCA9PT0gdGFza0lkKTtcclxuICAgICAgICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDEpOyAvLyByZW1vdmVzIHRoZSB0YXNrIGZyb20gYXJyYXlcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYCNpbmJveGApKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KGAjaW5ib3hgKS5yZW1vdmVDaGlsZChkZWxldGVUYXNrKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VHlwZSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lmxpc3RUeXBlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0VHlwZUNsYXNzID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoYCMke3Byb2plY3RUeXBlfWApXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0VHlwZUNsYXNzLnJlbW92ZUNoaWxkKGRlbGV0ZVRhc2spXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICBkaWFsb2cuc2hvd01vZGFsKClcclxuICAgIH0pXHJcblxyXG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgZGlhbG9nLmNsb3NlKClcclxuICAgIH0pXHJcbiAgICB0YXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+e1xyXG4gICAgICAgIGNvbnN0IG1vZGUgPSBldmVudC50YXJnZXQuZGF0YXNldC5tb2RlIHx8IFwiY3JlYXRlXCI7XHJcbiAgICAgICAgcG9wdXBUYXNrKG1vZGUsIHRhc2tVcGRhdGVDb250YWluZXIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBkaWFsb2dQcm9qZWN0LnNob3dNb2RhbCgpXHJcbiAgICB9KVxyXG4gICAgY2FuY2VsUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIGRpYWxvZ1Byb2plY3QuY2xvc2UoKVxyXG4gICAgfSlcclxuICAgIGNvbmZpcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdClcclxuICAgIFxyXG59IiwiaW1wb3J0IHtpbmJveCwgbmV3VGFza09iamVjdH0gZnJvbSAnLi9pbml0J1xyXG5pbXBvcnQgeyBkaWFsb2cgfSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgeyBwcm9qZWN0c0Ryb3BEb3duIH0gZnJvbSBcIi4vaW5pdFwiXHJcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCwgcGFyc2VJU08gfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuLy9pbXBvcnQgcHJvamVjdExpc3QgZnJvbSAnLi9hZGRQcm9qZWN0JztcclxuZXhwb3J0IGNvbnN0IGluYm94TGlzdCA9IFtdXHJcbmV4cG9ydCBjb25zdCB0YXNrTGlzdCA9IGxvYWRUYXNrc0Zyb21TdG9yYWdlKClcclxuZnVuY3Rpb24gbG9hZFRhc2tzRnJvbVN0b3JhZ2UoKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc1wiKSkgfHwgW107XHJcbn1cclxuZXhwb3J0IGNvbnN0IGNvbG9yTWFwID17XHJcbiAgICBMb3c6J2dyZWVuJyxcclxuICAgIE1lZGl1bTogJ3JnYmEoMjU1LCAxNTMsIDAsIDAuMzkpJyxcclxuICAgIEhpZ2g6ICdyZWQnXHJcbn07XHJcbmltcG9ydCB7IHNhdmVQcm9qZWN0c1RvU3RvcmFnZSB9IGZyb20gJy4vYWRkUHJvamVjdCc7XHJcblxyXG5cclxuY29uc3Qgc2F2ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdicpXHJcbmV4cG9ydCBjb25zdCBwb3B1cFRhc2sgPSAobW9kZSwgdGFza1VwZGF0ZUNvbnRhaW5lcikgPT4ge1xyXG4gICAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICAgICAgY29uc3QgZHJvcERvd25WYWwgPSBwcm9qZWN0c0Ryb3BEb3duLnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBHZXQgZm9ybSB2YWx1ZXNcclxuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0TmFtZSBpbnB1dCcpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGVzY3JpcHRpb24gaW5wdXQnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gZmFsc2VcclxuICAgICAgICBjb25zdCB1aWQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpLnRvU3RyaW5nKDM2KSArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIENyZWF0ZSBhIHRhc2sgb2JqZWN0XHJcbiAgICAgICAgY29uc3QgdGFza09iaiA9IG5ldyBuZXdUYXNrT2JqZWN0KG5hbWUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSx1aWQoKSxjb21wbGV0ZSxkcm9wRG93blZhbCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0YXNrSWQpXHJcbiAgICAgICAgLypcclxuICAgICAgICAvLyBTYXZlIHRvIHRoZSBjb3JyZWN0IGxpc3RcclxuICAgICAgICBpZiAoZHJvcERvd25WYWwgPT09ICdpbmJveCcpIHtcclxuICAgICAgICAgICAgaW5ib3hMaXN0LnB1c2godGFza09iaik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcHJvamVjdExpc3QuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gZHJvcERvd25WYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lmxpc3QucHVzaCh0YXNrT2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICAgICAgLy8gUmVuZGVyIGl0IGluIHRoZSBET01cclxuICAgICAgICBjb25zdCB0YXNrRWxlbWVudCA9IHJlbmRlclRhc2sodGFza09iaiwgZHJvcERvd25WYWwpO1xyXG4gICAgICAgIHRhc2tMaXN0LnB1c2godGFza09iailcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrT2JqLnByb2plY3ROYW1lKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0YXNrT2JqLnByb2plY3ROYW1lKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkcm9wRG93blZhbCA9PT0gJ2luYm94Jykge1xyXG4gICAgICAgICAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrRWxlbWVudCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZGlzcGxheVRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZHJvcERvd25WYWx9YCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAjJHtkcm9wRG93blZhbH1gKVxyXG4gICAgICAgICAgICBkaXNwbGF5VG9kb0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgY29uc3QgdGFza0lkID0gdGFza1VwZGF0ZUNvbnRhaW5lci5kYXRhc2V0LmlkO1xyXG4gICAgICAgIHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUtb2YtdGFzaycpLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0JykudmFsdWU7XHJcbiAgICAgICAgdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tdGV4dCcpLnRleHRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICAgICAgdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJykudmFsdWU7XHJcbiAgICAgICAgdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpLnZhbHVlO1xyXG4gICAgICAgIHByaW9yaXR5Q29sb3JzKHRhc2tVcGRhdGVDb250YWluZXIsZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUpXHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2sgPSB0YXNrTGlzdC5maW5kKHQgPT4gdC5pZCA9PT0gdGFza0lkKTtcclxuICAgICAgICBpZiAodGFzaykge1xyXG4gICAgICAgICAgICB0YXNrLm5hbWUgPSB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lLW9mLXRhc2snKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXRleHQnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGFzay5kdWVEYXRlID0gdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzYXZlIGJhY2sgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh0YXNrTGlzdCkpO1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrU3VibWl0QnRuJyk7XHJcbiAgICAgICAgc3VibWl0QnRuLmRhdGFzZXQubW9kZSA9ICdjcmVhdGUnO1xyXG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XHJcbiAgICB9XHJcbiAgICAvLyBSZXNldCBhbmQgY2xvc2UgZGlhbG9nXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXROYW1lIGlucHV0JykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dERlc2NyaXB0aW9uIGlucHV0JykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWUgPSAnJztcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlID0gJyc7XHJcbiAgICBkaWFsb2cuY2xvc2UoKTtcclxuXHJcbiAgIFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByaW9yaXR5Q29sb3JzKHRhc2tFbGVtZW50LCBwcmlvcml0eSl7XHJcbiAgICB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zdHlsZS5jb2xvciA9IGNvbG9yTWFwW3ByaW9yaXR5XVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUYXNrKHRhc2tPYmosIGxpc3RUeXBlKSB7XHJcblxyXG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzayc7XHJcblxyXG4gICAgdGFza0NvbnRhaW5lci5kYXRhc2V0LmlkID0gdGFza09iai5pZDsgLy8gPC0tIGFkZGVkIHRoaXMgbGluZVxyXG5cclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVEaXYuY2xhc3NOYW1lID0gJ25hbWUtb2YtdGFzayc7XHJcbiAgICBuYW1lRGl2LnRleHRDb250ZW50ID0gdGFza09iai5uYW1lO1xyXG5cclxuICAgIGNvbnN0IGRlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NEaXYuY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uLXRleHQnO1xyXG4gICAgZGVzY0Rpdi50ZXh0Q29udGVudCA9IHRhc2tPYmouZGVzY3JpcHRpb247XHJcbiAgICBkZXNjRGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuXHJcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlRGl2LmNsYXNzTmFtZSA9ICdkdWUtZGF0ZSdcclxuICAgIGRhdGVEaXYudGV4dENvbnRlbnQgPSB0YXNrT2JqLmRhdGU7XHJcblxyXG4gICAgY29uc3QgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByaW9yaXR5RGl2LmNsYXNzTmFtZSA9ICdwcmlvcml0eSdcclxuICAgIHByaW9yaXR5RGl2LnRleHRDb250ZW50ID0gdGFza09iai5wcmlvcml0eTtcclxuXHJcbiAgICBjb25zdCBpZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpZERpdi5jbGFzc05hbWUgPSBgJHt0YXNrT2JqLmlkfWBcclxuXHJcbiAgICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHVwZGF0ZUJ0bi5jbGFzc05hbWUgPSAndXBkYXRlLWJ0bic7XHJcblxyXG4gICAgdXBkYXRlQnRuLmRhdGFzZXQubGlzdFR5cGUgPSBsaXN0VHlwZTtcclxuICAgIHVwZGF0ZUJ0bi50ZXh0Q29udGVudCA9ICdVcGRhdGUnO1xyXG4gICAgdXBkYXRlQnRuLmFwcGVuZENoaWxkKG5hbWVEaXYpO1xyXG4gICAgdXBkYXRlQnRuLmFwcGVuZENoaWxkKGRlc2NEaXYpO1xyXG4gICAgdXBkYXRlQnRuLmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgdXBkYXRlQnRuLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodXBkYXRlQnRuKTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRlbGV0ZUJ0bi5kYXRhc2V0Lmxpc3RUeXBlID0gbGlzdFR5cGU7XHJcbiAgICBkZWxldGVCdG4uY2xhc3NOYW1lID0gJ2RlbGV0ZS1idG4nO1xyXG4gICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcblxyXG4gICAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY2hlY2tCb3guY2xhc3NOYW1lID0gJ2NvbXBsZXRlZCdcclxuICAgIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG5cclxuICAgIGlmKHRhc2tPYmouY29tcGxldGUpe1xyXG4gICAgICAgIGNoZWNrQm94LmNoZWNrZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh1cGRhdGVCdG4sIGRlbGV0ZUJ0biwgY2hlY2tCb3gsIG5hbWVEaXYsIGRlc2NEaXYsIGRhdGVEaXYsIHByaW9yaXR5RGl2LCBpZERpdik7XHJcbiAgICBwcmlvcml0eUNvbG9ycyh0YXNrQ29udGFpbmVyLCB0YXNrT2JqLnByaW9yaXR5KVxyXG4gICAgcmV0dXJuIHRhc2tDb250YWluZXI7XHJcbn1cclxuXHJcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7aW5pdH0gZnJvbSAnLi9tb2R1bGVzL2luaXQuanMnXHJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlcy5jc3NcIjtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgaW5pdCgpO1xyXG59KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9