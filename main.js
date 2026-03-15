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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --font-size: 16px;
  --bg: #f7f5f0;
  --surface: #ffffff;
  --border: #e0dbd2;
  --text: #1a1a1a;
  --text-muted: #888880;
  --accent: #c85a2a;
  --accent-light: #f9ede6;
  --inbox-color: #2a5ac8;
  --radius: 12px;
  --shadow: 0 2px 12px rgba(0,0,0,0.07);
  --transition: 0.2s ease;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'DM Sans', sans-serif;
  font-size: var(--font-size);
  background-color: var(--bg);
  color: var(--text);
  min-height: 100vh;
}

/* ── HEADER / CONTROLS ── */
.controls {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 32px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--surface);
  position: sticky;
  top: 0;
  z-index: 10;
}

#addTask, #addProject {
  position: relative;
  height: 40px;
  padding: 0 18px;
  cursor: pointer;
  border-radius: 8px;
  background-color: transparent;
  border: 1.5px solid var(--border);
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text);
  transition: background var(--transition), border-color var(--transition), transform var(--transition);
}

#addTask {
  background-color: var(--accent);
  border-color: var(--accent);
  color: white;
}

#addTask:hover {
  background-color: #b04d22;
  transform: translateY(-1px);
}

#addProject:hover {
  background-color: var(--accent-light);
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-1px);
}

/* ── MAIN LIST AREA ── */
#list-of-to-dos {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 32px;
}

#list-of-to-dos > h1 {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: var(--text);
  align-self: flex-start;
  max-width: 700px;
  width: 100%;
}

/* ── PROJECT / INBOX SECTIONS ── */
#inbox, .project {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 700px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 24px;
  box-shadow: var(--shadow);
}

#inbox > h2, .project > h2 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--inbox-color);
  margin-bottom: 6px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
}

.project > h2 {
  color: var(--accent);
}

/* ── PROJECT HEADER ROW (title + delete btn) ── */
.project-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 4px;
}

.project-header h2 {
  border-bottom: none;
  padding-bottom: 0;
  margin-bottom: 0;
}

.delete-project-btn {
  background: none;
  border: 1px solid #e0bfb8;
  border-radius: 6px;
  color: #c85a2a;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 3px 10px;
  cursor: pointer;
  transition: background var(--transition), color var(--transition);
}

.delete-project-btn:hover {
  background: #fce8e0;
  border-color: var(--accent);
}

/* ── TASKS ── */
.task {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  transition: box-shadow var(--transition);
}

.task:hover {
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.task:has(.completed:checked) {
  opacity: 0.5;
  text-decoration: line-through;
}

.name-of-task {
  flex: 1;
  font-weight: 500;
  font-size: 0.95rem;
}

.due-date {
  font-size: 0.78rem;
  color: var(--text-muted);
}

.priority {
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ── TASK BUTTONS ── */
.update-btn, .delete-btn {
  height: 30px;
  padding: 0 12px;
  border-radius: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text-muted);
  transition: background var(--transition), color var(--transition), border-color var(--transition);
}

.update-btn:hover {
  background: #e8f0fe;
  color: var(--inbox-color);
  border-color: #aac4f5;
}

.delete-btn:hover {
  background: #fce8e0;
  color: var(--accent);
  border-color: #e0bfb8;
}

/* ── CHECKBOX ── */
.completed {
  width: 16px;
  height: 16px;
  accent-color: var(--accent);
  cursor: pointer;
}

/* ── DIALOGS ── */
dialog {
  border: none;
  border-radius: var(--radius);
  box-shadow: 0 8px 40px rgba(0,0,0,0.15);
  padding: 0;
  max-width: 420px;
  width: 90vw;
}

dialog::backdrop {
  background: rgba(0,0,0,0.3);
  backdrop-filter: blur(2px);
}

#newTask, #newProject {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 28px;
}

#newTask label, #newProject label {
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-muted);
  display: block;
  margin-bottom: 4px;
}

input[type="text"], input[type="date"], select {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
  width: 100%;
  outline: none;
  transition: border-color var(--transition);
}

input[type="text"]:focus, input[type="date"]:focus, select:focus {
  border-color: var(--accent);
}

#inputName, #inputDescription {
  display: flex;
  flex-direction: column;
}

.flex-inputs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.flex-inputs input, .flex-inputs select {
  flex: 1;
  min-width: 100px;
}

.task-btn-modal {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}

#taskSubmitBtn, #cancel, #confirmProject, #cancelProject {
  flex: 1;
  height: 40px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition), transform var(--transition);
  border: 1.5px solid var(--border);
  background: transparent;
  color: var(--text);
}

#taskSubmitBtn, #confirmProject {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

#taskSubmitBtn:hover, #confirmProject:hover {
  background: #b04d22;
  transform: translateY(-1px);
}

#cancel:hover, #cancelProject:hover {
  background: var(--bg);
  transform: translateY(-1px);
}

#newProject {
  gap: 12px;
}

#newProject input {
  margin-top: 4px;
}

#newProject > div {
  display: flex;
  gap: 10px;
  margin-top: 4px;
}`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=DM+Sans:wght@300;400;500&display=swap');\r\n\r\n:root {\r\n  --font-size: 16px;\r\n  --bg: #f7f5f0;\r\n  --surface: #ffffff;\r\n  --border: #e0dbd2;\r\n  --text: #1a1a1a;\r\n  --text-muted: #888880;\r\n  --accent: #c85a2a;\r\n  --accent-light: #f9ede6;\r\n  --inbox-color: #2a5ac8;\r\n  --radius: 12px;\r\n  --shadow: 0 2px 12px rgba(0,0,0,0.07);\r\n  --transition: 0.2s ease;\r\n}\r\n\r\n*, *::before, *::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: var(--font-size);\r\n  background-color: var(--bg);\r\n  color: var(--text);\r\n  min-height: 100vh;\r\n}\r\n\r\n/* ── HEADER / CONTROLS ── */\r\n.controls {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n  gap: 12px;\r\n  padding: 24px 32px 20px;\r\n  border-bottom: 1px solid var(--border);\r\n  background: var(--surface);\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 10;\r\n}\r\n\r\n#addTask, #addProject {\r\n  position: relative;\r\n  height: 40px;\r\n  padding: 0 18px;\r\n  cursor: pointer;\r\n  border-radius: 8px;\r\n  background-color: transparent;\r\n  border: 1.5px solid var(--border);\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n  color: var(--text);\r\n  transition: background var(--transition), border-color var(--transition), transform var(--transition);\r\n}\r\n\r\n#addTask {\r\n  background-color: var(--accent);\r\n  border-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n#addTask:hover {\r\n  background-color: #b04d22;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n#addProject:hover {\r\n  background-color: var(--accent-light);\r\n  border-color: var(--accent);\r\n  color: var(--accent);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n/* ── MAIN LIST AREA ── */\r\n#list-of-to-dos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  padding: 40px 20px;\r\n  gap: 32px;\r\n}\r\n\r\n#list-of-to-dos > h1 {\r\n  font-family: 'Playfair Display', serif;\r\n  font-size: 2.2rem;\r\n  font-weight: 600;\r\n  letter-spacing: -0.5px;\r\n  color: var(--text);\r\n  align-self: flex-start;\r\n  max-width: 700px;\r\n  width: 100%;\r\n}\r\n\r\n/* ── PROJECT / INBOX SECTIONS ── */\r\n#inbox, .project {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  width: 100%;\r\n  max-width: 700px;\r\n  background: var(--surface);\r\n  border: 1px solid var(--border);\r\n  border-radius: var(--radius);\r\n  padding: 20px 24px;\r\n  box-shadow: var(--shadow);\r\n}\r\n\r\n#inbox > h2, .project > h2 {\r\n  font-family: 'Playfair Display', serif;\r\n  font-size: 1.15rem;\r\n  font-weight: 600;\r\n  color: var(--inbox-color);\r\n  margin-bottom: 6px;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid var(--border);\r\n}\r\n\r\n.project > h2 {\r\n  color: var(--accent);\r\n}\r\n\r\n/* ── PROJECT HEADER ROW (title + delete btn) ── */\r\n.project-header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding-bottom: 10px;\r\n  border-bottom: 1px solid var(--border);\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.project-header h2 {\r\n  border-bottom: none;\r\n  padding-bottom: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.delete-project-btn {\r\n  background: none;\r\n  border: 1px solid #e0bfb8;\r\n  border-radius: 6px;\r\n  color: #c85a2a;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: 0.75rem;\r\n  font-weight: 500;\r\n  padding: 3px 10px;\r\n  cursor: pointer;\r\n  transition: background var(--transition), color var(--transition);\r\n}\r\n\r\n.delete-project-btn:hover {\r\n  background: #fce8e0;\r\n  border-color: var(--accent);\r\n}\r\n\r\n/* ── TASKS ── */\r\n.task {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 10px 12px;\r\n  border: 1px solid var(--border);\r\n  border-radius: 8px;\r\n  background: var(--bg);\r\n  transition: box-shadow var(--transition);\r\n}\r\n\r\n.task:hover {\r\n  box-shadow: 0 2px 8px rgba(0,0,0,0.08);\r\n}\r\n\r\n.task:has(.completed:checked) {\r\n  opacity: 0.5;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.name-of-task {\r\n  flex: 1;\r\n  font-weight: 500;\r\n  font-size: 0.95rem;\r\n}\r\n\r\n.due-date {\r\n  font-size: 0.78rem;\r\n  color: var(--text-muted);\r\n}\r\n\r\n.priority {\r\n  font-size: 0.78rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.5px;\r\n}\r\n\r\n/* ── TASK BUTTONS ── */\r\n.update-btn, .delete-btn {\r\n  height: 30px;\r\n  padding: 0 12px;\r\n  border-radius: 6px;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: 0.78rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  border: 1px solid var(--border);\r\n  background: var(--surface);\r\n  color: var(--text-muted);\r\n  transition: background var(--transition), color var(--transition), border-color var(--transition);\r\n}\r\n\r\n.update-btn:hover {\r\n  background: #e8f0fe;\r\n  color: var(--inbox-color);\r\n  border-color: #aac4f5;\r\n}\r\n\r\n.delete-btn:hover {\r\n  background: #fce8e0;\r\n  color: var(--accent);\r\n  border-color: #e0bfb8;\r\n}\r\n\r\n/* ── CHECKBOX ── */\r\n.completed {\r\n  width: 16px;\r\n  height: 16px;\r\n  accent-color: var(--accent);\r\n  cursor: pointer;\r\n}\r\n\r\n/* ── DIALOGS ── */\r\ndialog {\r\n  border: none;\r\n  border-radius: var(--radius);\r\n  box-shadow: 0 8px 40px rgba(0,0,0,0.15);\r\n  padding: 0;\r\n  max-width: 420px;\r\n  width: 90vw;\r\n}\r\n\r\ndialog::backdrop {\r\n  background: rgba(0,0,0,0.3);\r\n  backdrop-filter: blur(2px);\r\n}\r\n\r\n#newTask, #newProject {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n  padding: 28px;\r\n}\r\n\r\n#newTask label, #newProject label {\r\n  font-size: 0.75rem;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.8px;\r\n  color: var(--text-muted);\r\n  display: block;\r\n  margin-bottom: 4px;\r\n}\r\n\r\ninput[type=\"text\"], input[type=\"date\"], select {\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: 0.95rem;\r\n  color: var(--text);\r\n  background: var(--bg);\r\n  border: 1px solid var(--border);\r\n  border-radius: 8px;\r\n  padding: 8px 12px;\r\n  width: 100%;\r\n  outline: none;\r\n  transition: border-color var(--transition);\r\n}\r\n\r\ninput[type=\"text\"]:focus, input[type=\"date\"]:focus, select:focus {\r\n  border-color: var(--accent);\r\n}\r\n\r\n#inputName, #inputDescription {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.flex-inputs {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.flex-inputs input, .flex-inputs select {\r\n  flex: 1;\r\n  min-width: 100px;\r\n}\r\n\r\n.task-btn-modal {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 4px;\r\n}\r\n\r\n#taskSubmitBtn, #cancel, #confirmProject, #cancelProject {\r\n  flex: 1;\r\n  height: 40px;\r\n  border-radius: 8px;\r\n  font-family: 'DM Sans', sans-serif;\r\n  font-size: 0.9rem;\r\n  font-weight: 500;\r\n  cursor: pointer;\r\n  transition: background var(--transition), transform var(--transition);\r\n  border: 1.5px solid var(--border);\r\n  background: transparent;\r\n  color: var(--text);\r\n}\r\n\r\n#taskSubmitBtn, #confirmProject {\r\n  background: var(--accent);\r\n  border-color: var(--accent);\r\n  color: white;\r\n}\r\n\r\n#taskSubmitBtn:hover, #confirmProject:hover {\r\n  background: #b04d22;\r\n  transform: translateY(-1px);\r\n}\r\n\r\n#cancel:hover, #cancelProject:hover {\r\n  background: var(--bg);\r\n  transform: translateY(-1px);\r\n}\r\n\r\n#newProject {\r\n  gap: 12px;\r\n}\r\n\r\n#newProject input {\r\n  margin-top: 4px;\r\n}\r\n\r\n#newProject > div {\r\n  display: flex;\r\n  gap: 10px;\r\n  margin-top: 4px;\r\n}"],"sourceRoot":""}]);
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


function saveProjectsToStorage(list) {
  localStorage.setItem('projectNames', JSON.stringify(list));
}

function loadProjectsFromStorage() {
  return JSON.parse(localStorage.getItem('projectNames')) || [];
}

const projectNames = loadProjectsFromStorage();

function createProjectElement(projectVal) {
  const newProject = document.createElement('div');
  newProject.id = projectVal.replace(/\s+/g, '');
  newProject.className = 'project';

  // Header row with title + delete button
  const header = document.createElement('div');
  header.className = 'project-header';

  const newProjectName = document.createElement('h2');
  newProjectName.textContent = projectVal;

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.className = 'delete-project-btn';
  deleteProjectBtn.textContent = 'Delete';

  deleteProjectBtn.addEventListener('click', () => {
    // Remove project from DOM
    newProject.remove();

    // Remove from dropdown
    const option = document.querySelector(`#projectsDropDown option[value="${projectVal.replace(/\s+/g, '')}"]`);
    if (option) option.remove();

    // Remove from storage
    const index = projectNames.indexOf(projectVal);
    if (index !== -1) {
      projectNames.splice(index, 1);
      saveProjectsToStorage(projectNames);
    }
  });

  header.appendChild(newProjectName);
  header.appendChild(deleteProjectBtn);
  newProject.appendChild(header);

  return newProject;
}

function createOptionElement(projectVal) {
  const option = document.createElement('option');
  option.value = projectVal.replace(/\s+/g, '');
  option.textContent = projectVal;
  return option;
}

function addProject() {
  const inputProject = document.getElementById('inputProject');
  const projectVal = inputProject.value.trim();

  if (!projectVal) return;

  if (!projectNames.includes(projectVal)) {
    projectNames.push(projectVal);
    saveProjectsToStorage(projectNames);

    const newProject = createProjectElement(projectVal);
    const newOption = createOptionElement(projectVal);

    document.getElementById('list-of-to-dos').appendChild(newProject);
    document.getElementById('projectsDropDown').appendChild(newOption);
  }

  inputProject.value = '';
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




const retrieveItems = () => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  const projectNames = JSON.parse(localStorage.getItem('projectNames'));

  if (projectNames) {
    projectNames.forEach((project) => {
      document.getElementById('list-of-to-dos').appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_2__.createProjectElement)(project));
      document.getElementById('projectsDropDown').appendChild((0,_addProject__WEBPACK_IMPORTED_MODULE_2__.createOptionElement)(project));
    });
  }

  if (taskList) {
    taskList.forEach((taskObj) => {
      const target = taskObj.projectName === 'inbox'
        ? _init__WEBPACK_IMPORTED_MODULE_1__.inbox
        : document.querySelector(`#${taskObj.projectName}`);

      if (target) {
        target.appendChild((0,_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.renderTask)(taskObj, taskObj.projectName));
      }
    });
  }
};

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
/* harmony export */   newTaskObject: () => (/* binding */ newTaskObject),
/* harmony export */   projectsDropDown: () => (/* binding */ projectsDropDown)
/* harmony export */ });
/* harmony import */ var _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up-new-task */ "./src/modules/pop-up-new-task.js");
/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addProject */ "./src/modules/addProject.js");
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getData */ "./src/modules/getData.js");





const dialog = document.getElementById('newTaskContainer');
const dialogProject = document.getElementById('newProjectContainer');
const inbox = document.getElementById('inbox');
const listOfToDo = document.getElementById('list-of-to-dos');
const projectsDropDown = document.getElementById('projectsDropDown');

class newTaskObject {
  constructor(name, description, priority, date, id, complete, projectName) {
    this.name = name;
    this.description = description;
    this.priority = priority;
    this.date = date;
    this.id = id;
    this.complete = complete;
    this.projectName = projectName;
  }
}

const init = () => {
  (0,_getData__WEBPACK_IMPORTED_MODULE_2__.retrieveItems)();

  let taskUpdateContainer = null;

  const addProjectButton = document.getElementById('addProject');
  const addTaskButton = document.getElementById('addTask');
  const confirmProject = document.getElementById('confirmProject');
  const cancelProject = document.getElementById('cancelProject');
  const cancelButton = document.getElementById('cancel');
  const taskSubmitBtn = document.getElementById('taskSubmitBtn');

  // Handle checkbox completion toggle
  document.addEventListener('change', (event) => {
    const checkbox = event.target.closest('.completed');
    if (checkbox) {
      const taskId = event.target.closest('.task').dataset.id;
      const task = _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.find(t => t.id === taskId);
      if (task) {
        task.complete = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList));
      }
    }
  });

  // Handle update and delete task clicks
  document.addEventListener('click', (event) => {
    const updateBtn = event.target.closest('.update-btn');
    const deleteBtn = event.target.closest('.delete-btn');

    if (updateBtn) {
      taskUpdateContainer = updateBtn.closest('.task');

      document.querySelector('.input').value = taskUpdateContainer.querySelector('.name-of-task').textContent;
      document.querySelector('.description').value = taskUpdateContainer.querySelector('.description-text').textContent;
      document.querySelector('#dueDate').value = taskUpdateContainer.querySelector('.due-date').textContent;
      document.querySelector('#priority').value = taskUpdateContainer.querySelector('.priority').textContent;
      document.querySelector('#projectsDropDown').value = updateBtn.dataset.listType;

      taskSubmitBtn.textContent = 'Save Task';
      taskSubmitBtn.dataset.mode = 'update';

      dialog.showModal();

    } else if (deleteBtn) {
      const deleteTask = deleteBtn.closest('.task');
      const taskId = deleteTask.dataset.id;

      const taskIndex = _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        _pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.taskList));
      }

      deleteTask.remove();
    }
  });

  addTaskButton.addEventListener('click', () => {
    dialog.showModal();
  });

  cancelButton.addEventListener('click', () => {
    dialog.close();
  });

  taskSubmitBtn.addEventListener('click', (event) => {
    const mode = event.target.dataset.mode || 'create';
    (0,_pop_up_new_task__WEBPACK_IMPORTED_MODULE_0__.popupTask)(mode, taskUpdateContainer);
  });

  addProjectButton.addEventListener('click', () => {
    dialogProject.showModal();
  });

  cancelProject.addEventListener('click', () => {
    dialogProject.close();
  });

  confirmProject.addEventListener('click', _addProject__WEBPACK_IMPORTED_MODULE_1__.addProject);
};

/***/ }),

/***/ "./src/modules/pop-up-new-task.js":
/*!****************************************!*\
  !*** ./src/modules/pop-up-new-task.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   colorMap: () => (/* binding */ colorMap),
/* harmony export */   popupTask: () => (/* binding */ popupTask),
/* harmony export */   priorityColors: () => (/* binding */ priorityColors),
/* harmony export */   renderTask: () => (/* binding */ renderTask),
/* harmony export */   taskList: () => (/* binding */ taskList)
/* harmony export */ });
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/modules/init.js");



const taskList = loadTasksFromStorage();

const colorMap = {
  Low: 'green',
  Medium: 'orange',
  High: 'red'
};

function loadTasksFromStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

function generateUID() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function getFormValues() {
  return {
    name: document.querySelector('#inputName input').value.trim(),
    description: document.querySelector('#inputDescription input').value.trim(),
    dueDate: document.getElementById('dueDate').value,
    priority: document.getElementById('priority').value,
    dropDownVal: _init__WEBPACK_IMPORTED_MODULE_0__.projectsDropDown.value,
  };
}

function resetForm() {
  document.querySelector('#inputName input').value = '';
  document.querySelector('#inputDescription input').value = '';
  document.getElementById('dueDate').value = '';
  document.getElementById('priority').value = '';
  _init__WEBPACK_IMPORTED_MODULE_0__.dialog.close();
}

const popupTask = (mode, taskUpdateContainer) => {
  if (mode === 'create') {
    const { name, description, dueDate, priority, dropDownVal } = getFormValues();

    if (!name) return; // guard against empty task name

    const taskObj = new _init__WEBPACK_IMPORTED_MODULE_0__.newTaskObject(name, description, priority, dueDate, generateUID(), false, dropDownVal);
    const taskElement = renderTask(taskObj, dropDownVal);

    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    if (dropDownVal === 'inbox') {
      _init__WEBPACK_IMPORTED_MODULE_0__.inbox.appendChild(taskElement);
    } else {
      document.querySelector(`#${dropDownVal}`).appendChild(taskElement);
    }

  } else if (mode === 'update') {
    const { name, description, dueDate, priority } = getFormValues();
    const taskId = taskUpdateContainer.dataset.id;

    taskUpdateContainer.querySelector('.name-of-task').textContent = name;
    taskUpdateContainer.querySelector('.description-text').textContent = description;
    taskUpdateContainer.querySelector('.due-date').textContent = dueDate;
    taskUpdateContainer.querySelector('.priority').textContent = priority;
    priorityColors(taskUpdateContainer, priority);

    const task = taskList.find(t => t.id === taskId);
    if (task) {
      task.name = name;
      task.description = description;
      task.date = dueDate;
      task.priority = priority;
      localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    const submitBtn = document.querySelector('#taskSubmitBtn');
    submitBtn.dataset.mode = 'create';
    submitBtn.textContent = 'Create Task';
  }

  resetForm();
};

function priorityColors(taskElement, priority) {
  taskElement.querySelector('.priority').style.color = colorMap[priority];
}

function renderTask(taskObj, listType) {
  const taskContainer = document.createElement('div');
  taskContainer.className = 'task';
  taskContainer.dataset.id = taskObj.id;

  const nameDiv = document.createElement('div');
  nameDiv.className = 'name-of-task';
  nameDiv.textContent = taskObj.name;

  const descDiv = document.createElement('div');
  descDiv.className = 'description-text';
  descDiv.textContent = taskObj.description;
  descDiv.style.display = 'none';

  const dateDiv = document.createElement('div');
  dateDiv.className = 'due-date';
  dateDiv.textContent = taskObj.date;

  const priorityDiv = document.createElement('div');
  priorityDiv.className = 'priority';
  priorityDiv.textContent = taskObj.priority;

  const updateBtn = document.createElement('button');
  updateBtn.className = 'update-btn';
  updateBtn.dataset.listType = listType;
  updateBtn.textContent = 'Update';

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.dataset.listType = listType;
  deleteBtn.textContent = 'Delete';

  const checkBox = document.createElement('input');
  checkBox.className = 'completed';
  checkBox.type = 'checkbox';
  checkBox.checked = taskObj.complete || false;

  taskContainer.append(checkBox, nameDiv, descDiv, dateDiv, priorityDiv, updateBtn, deleteBtn);
  priorityColors(taskContainer, taskObj.priority);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLGlKQUFpSixJQUFJLGtCQUFrQjtBQUN2SztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FB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QU8sbUJBQW1CLEVBQUM7Ozs7Ozs7VUN4QjdFO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztXQ05BLG1DOzs7Ozs7Ozs7Ozs7O0FDQXNDO0FBQ1Q7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzREFBSTtBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9hZGRQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9nZXREYXRhLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbml0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9wb3AtdXAtbmV3LXRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzcz9lNDViIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5OndnaHRANjAwJmZhbWlseT1ETStTYW5zOndnaHRAMzAwOzQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1mb250LXNpemU6IDE2cHg7XHJcbiAgLS1iZzogI2Y3ZjVmMDtcclxuICAtLXN1cmZhY2U6ICNmZmZmZmY7XHJcbiAgLS1ib3JkZXI6ICNlMGRiZDI7XHJcbiAgLS10ZXh0OiAjMWExYTFhO1xyXG4gIC0tdGV4dC1tdXRlZDogIzg4ODg4MDtcclxuICAtLWFjY2VudDogI2M4NWEyYTtcclxuICAtLWFjY2VudC1saWdodDogI2Y5ZWRlNjtcclxuICAtLWluYm94LWNvbG9yOiAjMmE1YWM4O1xyXG4gIC0tcmFkaXVzOiAxMnB4O1xyXG4gIC0tc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwwLDAsMC4wNyk7XHJcbiAgLS10cmFuc2l0aW9uOiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBIRUFERVIgLyBDT05UUk9MUyDilIDilIAgKi9cclxuLmNvbnRyb2xzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMjRweCAzMnB4IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbiNhZGRUYXNrLCAjYWRkUHJvamVjdCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwIDE4cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDEuNXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pLCBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbiksIHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcclxufVxyXG5cclxuI2FkZFRhc2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuI2FkZFRhc2s6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiMDRkMjI7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4jYWRkUHJvamVjdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWxpZ2h0KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4vKiDilIDilIAgTUFJTiBMSVNUIEFSRUEg4pSA4pSAICovXHJcbiNsaXN0LW9mLXRvLWRvcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gIGdhcDogMzJweDtcclxufVxyXG5cclxuI2xpc3Qtb2YtdG8tZG9zID4gaDEge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiDilIDilIAgUFJPSkVDVCAvIElOQk9YIFNFQ1RJT05TIOKUgOKUgCAqL1xyXG4jaW5ib3gsIC5wcm9qZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xyXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3cpO1xyXG59XHJcblxyXG4jaW5ib3ggPiBoMiwgLnByb2plY3QgPiBoMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWluYm94LWNvbG9yKTtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbn1cclxuXHJcbi5wcm9qZWN0ID4gaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG59XHJcblxyXG4vKiDilIDilIAgUFJPSkVDVCBIRUFERVIgUk9XICh0aXRsZSArIGRlbGV0ZSBidG4pIOKUgOKUgCAqL1xyXG4ucHJvamVjdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1oZWFkZXIgaDIge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBiZmI4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBjb2xvcjogI2M4NWEyYTtcclxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pLCBjb2xvciB2YXIoLS10cmFuc2l0aW9uKTtcclxufVxyXG5cclxuLmRlbGV0ZS1wcm9qZWN0LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZjZThlMDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBUQVNLUyDilIDilIAgKi9cclxuLnRhc2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDEycHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbi50YXNrOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcclxufVxyXG5cclxuLnRhc2s6aGFzKC5jb21wbGV0ZWQ6Y2hlY2tlZCkge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLm5hbWUtb2YtdGFzayB7XHJcbiAgZmxleDogMTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmR1ZS1kYXRlIHtcclxuICBmb250LXNpemU6IDAuNzhyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG59XHJcblxyXG4ucHJpb3JpdHkge1xyXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG4vKiDilIDilIAgVEFTSyBCVVRUT05TIOKUgOKUgCAqL1xyXG4udXBkYXRlLWJ0biwgLmRlbGV0ZS1idG4ge1xyXG4gIGhlaWdodDogMzBweDtcclxuICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjc4cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbiksIGNvbG9yIHZhcigtLXRyYW5zaXRpb24pLCBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbi51cGRhdGUtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZThmMGZlO1xyXG4gIGNvbG9yOiB2YXIoLS1pbmJveC1jb2xvcik7XHJcbiAgYm9yZGVyLWNvbG9yOiAjYWFjNGY1O1xyXG59XHJcblxyXG4uZGVsZXRlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZjZThlMDtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICBib3JkZXItY29sb3I6ICNlMGJmYjg7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBDSEVDS0JPWCDilIDilIAgKi9cclxuLmNvbXBsZXRlZCB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiAxNnB4O1xyXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIOKUgOKUgCBESUFMT0dTIOKUgOKUgCAqL1xyXG5kaWFsb2cge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDQwcHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbn1cclxuXHJcbmRpYWxvZzo6YmFja2Ryb3Age1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxufVxyXG5cclxuI25ld1Rhc2ssICNuZXdQcm9qZWN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbn1cclxuXHJcbiNuZXdUYXNrIGxhYmVsLCAjbmV3UHJvamVjdCBsYWJlbCB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJkYXRlXCJdLCBzZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLCBpbnB1dFt0eXBlPVwiZGF0ZVwiXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbiNpbnB1dE5hbWUsICNpbnB1dERlc2NyaXB0aW9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5mbGV4LWlucHV0cyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1pbnB1dHMgaW5wdXQsIC5mbGV4LWlucHV0cyBzZWxlY3Qge1xyXG4gIGZsZXg6IDE7XHJcbiAgbWluLXdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRhc2stYnRuLW1vZGFsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbiN0YXNrU3VibWl0QnRuLCAjY2FuY2VsLCAjY29uZmlybVByb2plY3QsICNjYW5jZWxQcm9qZWN0IHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pLCB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbik7XHJcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxufVxyXG5cclxuI3Rhc2tTdWJtaXRCdG4sICNjb25maXJtUHJvamVjdCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50KTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdGFza1N1Ym1pdEJ0bjpob3ZlciwgI2NvbmZpcm1Qcm9qZWN0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYjA0ZDIyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxufVxyXG5cclxuI2NhbmNlbDpob3ZlciwgI2NhbmNlbFByb2plY3Q6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbn1cclxuXHJcbiNuZXdQcm9qZWN0IHtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbiNuZXdQcm9qZWN0IGlucHV0IHtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1cclxuXHJcbiNuZXdQcm9qZWN0ID4gZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTBweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBLDRCQUE0QjtBQUM1QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QywwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHFHQUFxRztBQUN2Rzs7QUFFQTtFQUNFLCtC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QjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLE9BQU87RUFDUCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscUVBQXFFO0VBQ3JFLGlDQUFpQztFQUNqQyx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTp3Z2h0QDYwMCZmYW1pbHk9RE0rU2Fuczp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tZm9udC1zaXplOiAxNnB4O1xcclxcbiAgLS1iZzogI2Y3ZjVmMDtcXHJcXG4gIC0tc3VyZmFjZTogI2ZmZmZmZjtcXHJcXG4gIC0tYm9yZGVyOiAjZTBkYmQyO1xcclxcbiAgLS10ZXh0OiAjMWExYTFhO1xcclxcbiAgLS10ZXh0LW11dGVkOiAjODg4ODgwO1xcclxcbiAgLS1hY2NlbnQ6ICNjODVhMmE7XFxyXFxuICAtLWFjY2VudC1saWdodDogI2Y5ZWRlNjtcXHJcXG4gIC0taW5ib3gtY29sb3I6ICMyYTVhYzg7XFxyXFxuICAtLXJhZGl1czogMTJweDtcXHJcXG4gIC0tc2hhZG93OiAwIDJweCAxMnB4IHJnYmEoMCwwLDAsMC4wNyk7XFxyXFxuICAtLXRyYW5zaXRpb246IDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiB2YXIoLS1mb250LXNpemUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi8qIOKUgOKUgCBIRUFERVIgLyBDT05UUk9MUyDilIDilIAgKi9cXHJcXG4uY29udHJvbHMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxuICBwYWRkaW5nOiAyNHB4IDMycHggMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgdG9wOiAwO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxufVxcclxcblxcclxcbiNhZGRUYXNrLCAjYWRkUHJvamVjdCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBwYWRkaW5nOiAwIDE4cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRE0gU2FucycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pLCBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbiksIHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2sge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRhc2s6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwNGQyMjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWxpZ2h0KTtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDilIDilIAgTUFJTiBMSVNUIEFSRUEg4pSA4pSAICovXFxyXFxuI2xpc3Qtb2YtdG8tZG9zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDQwcHggMjBweDtcXHJcXG4gIGdhcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xpc3Qtb2YtdG8tZG9zID4gaDEge1xcclxcbiAgZm9udC1mYW1pbHk6ICdQbGF5ZmFpciBEaXNwbGF5Jywgc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyog4pSA4pSAIFBST0pFQ1QgLyBJTkJPWCBTRUNUSU9OUyDilIDilIAgKi9cXHJcXG4jaW5ib3gsIC5wcm9qZWN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDcwMHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjRweDtcXHJcXG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdyk7XFxyXFxufVxcclxcblxcclxcbiNpbmJveCA+IGgyLCAucHJvamVjdCA+IGgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1pbmJveC1jb2xvcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCA+IGgyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiDilIDilIAgUFJPSkVDVCBIRUFERVIgUk9XICh0aXRsZSArIGRlbGV0ZSBidG4pIOKUgOKUgCAqL1xcclxcbi5wcm9qZWN0LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWRlciBoMiB7XFxyXFxuICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDA7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXByb2plY3QtYnRuIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTBiZmI4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgY29sb3I6ICNjODVhMmE7XFxyXFxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCB2YXIoLS10cmFuc2l0aW9uKSwgY29sb3IgdmFyKC0tdHJhbnNpdGlvbik7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtcHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZjZThlMDtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLyog4pSA4pSAIFRBU0tTIOKUgOKUgCAqL1xcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDEwcHggMTJweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlcik7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZyk7XFxyXFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA4KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2s6aGFzKC5jb21wbGV0ZWQ6Y2hlY2tlZCkge1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLW9mLXRhc2sge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBmb250LXNpemU6IDAuOTVyZW07XFxyXFxufVxcclxcblxcclxcbi5kdWUtZGF0ZSB7XFxyXFxuICBmb250LXNpemU6IDAuNzhyZW07XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxyXFxufVxcclxcblxcclxcbi5wcmlvcml0eSB7XFxyXFxuICBmb250LXNpemU6IDAuNzhyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyog4pSA4pSAIFRBU0sgQlVUVE9OUyDilIDilIAgKi9cXHJcXG4udXBkYXRlLWJ0biwgLmRlbGV0ZS1idG4ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgcGFkZGluZzogMCAxMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC43OHJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXIpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZSk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxyXFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24pLCBjb2xvciB2YXIoLS10cmFuc2l0aW9uKSwgYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG4udXBkYXRlLWJ0bjpob3ZlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZThmMGZlO1xcclxcbiAgY29sb3I6IHZhcigtLWluYm94LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1jb2xvcjogI2FhYzRmNTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlbGV0ZS1idG46aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2ZjZThlMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcclxcbiAgYm9yZGVyLWNvbG9yOiAjZTBiZmI4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiDilIDilIAgQ0hFQ0tCT1gg4pSA4pSAICovXFxyXFxuLmNvbXBsZXRlZCB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGFjY2VudC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyog4pSA4pSAIERJQUxPR1Mg4pSA4pSAICovXFxyXFxuZGlhbG9nIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxyXFxuICBib3gtc2hhZG93OiAwIDhweCA0MHB4IHJnYmEoMCwwLDAsMC4xNSk7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gIHdpZHRoOiA5MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5kaWFsb2c6OmJhY2tkcm9wIHtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3VGFzaywgI25ld1Byb2plY3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxuICBwYWRkaW5nOiAyOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3VGFzayBsYWJlbCwgI25ld1Byb2plY3QgbGFiZWwge1xcclxcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLCBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sIHNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogJ0RNIFNhbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24pO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXTpmb2N1cywgc2VsZWN0OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuI2lucHV0TmFtZSwgI2lucHV0RGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5mbGV4LWlucHV0cyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uZmxleC1pbnB1dHMgaW5wdXQsIC5mbGV4LWlucHV0cyBzZWxlY3Qge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1pbi13aWR0aDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWJ0bi1tb2RhbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza1N1Ym1pdEJ0biwgI2NhbmNlbCwgI2NvbmZpcm1Qcm9qZWN0LCAjY2FuY2VsUHJvamVjdCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbiksIHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uKTtcXHJcXG4gIGJvcmRlcjogMS41cHggc29saWQgdmFyKC0tYm9yZGVyKTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFza1N1Ym1pdEJ0biwgI2NvbmZpcm1Qcm9qZWN0IHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudCk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiN0YXNrU3VibWl0QnRuOmhvdmVyLCAjY29uZmlybVByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogI2IwNGQyMjtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI2NhbmNlbDpob3ZlciwgI2NhbmNlbFByb2plY3Q6aG92ZXIge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmcpO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4jbmV3UHJvamVjdCB7XFxyXFxuICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbiNuZXdQcm9qZWN0IGlucHV0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuI25ld1Byb2plY3QgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDRweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLypcclxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xyXG4gIHZhciBsaXN0ID0gW107XHJcblxyXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xyXG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzJdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAobmVlZExheWVyKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcclxuICAgICAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1bMl0pIHtcclxuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtWzRdKSB7XHJcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH0pLmpvaW4oXCJcIik7XHJcbiAgfTtcclxuXHJcbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xyXG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xyXG4gICAgfVxyXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuICAgIGlmIChkZWR1cGUpIHtcclxuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XHJcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcclxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XHJcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcclxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xyXG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAobWVkaWEpIHtcclxuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcclxuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XHJcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdXBwb3J0cykge1xyXG4gICAgICAgIGlmICghaXRlbVs0XSkge1xyXG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcclxuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIGxpc3Q7XHJcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xyXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcclxuICBpZiAoIWNzc01hcHBpbmcpIHtcclxuICAgIHJldHVybiBjb250ZW50O1xyXG4gIH1cclxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xyXG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xyXG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XHJcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XHJcbiAgfVxyXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcclxufTsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xyXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgdmFyIHJlc3VsdCA9IC0xO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XHJcbiAgICAgIHJlc3VsdCA9IGk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XHJcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcclxuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcclxuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xyXG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcclxuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xyXG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XHJcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgIHZhciBvYmogPSB7XHJcbiAgICAgIGNzczogaXRlbVsxXSxcclxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXHJcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcclxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXHJcbiAgICAgIGxheWVyOiBpdGVtWzVdXHJcbiAgICB9O1xyXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xyXG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcclxuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcclxuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcclxuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxyXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXHJcbiAgICAgICAgcmVmZXJlbmNlczogMVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XHJcbiAgfVxyXG4gIHJldHVybiBpZGVudGlmaWVycztcclxufVxyXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XHJcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xyXG4gIGFwaS51cGRhdGUob2JqKTtcclxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XHJcbiAgICBpZiAobmV3T2JqKSB7XHJcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYXBpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIHVwZGF0ZXI7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xyXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xyXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xyXG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XHJcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xyXG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcclxuICAgIH1cclxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XHJcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xyXG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xyXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xyXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XHJcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XHJcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcclxuICB9O1xyXG59OyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxudmFyIG1lbW8gPSB7fTtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XHJcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcclxuXHJcbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxyXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXHJcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcclxuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcclxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xyXG4gIH1cclxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XHJcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xyXG4gIGlmICghdGFyZ2V0KSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xyXG4gIH1cclxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xyXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xyXG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xyXG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xyXG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xyXG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcclxuICBpZiAobm9uY2UpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XHJcbiAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXHJcbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XHJcbiAgdmFyIGNzcyA9IFwiXCI7XHJcbiAgaWYgKG9iai5zdXBwb3J0cykge1xyXG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcclxuICB9XHJcbiAgaWYgKG9iai5tZWRpYSkge1xyXG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XHJcbiAgfVxyXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xyXG4gIGlmIChuZWVkTGF5ZXIpIHtcclxuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcclxuICB9XHJcbiAgY3NzICs9IG9iai5jc3M7XHJcbiAgaWYgKG5lZWRMYXllcikge1xyXG4gICAgY3NzICs9IFwifVwiO1xyXG4gIH1cclxuICBpZiAob2JqLm1lZGlhKSB7XHJcbiAgICBjc3MgKz0gXCJ9XCI7XHJcbiAgfVxyXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcclxuICAgIGNzcyArPSBcIn1cIjtcclxuICB9XHJcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XHJcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XHJcbiAgfVxyXG5cclxuICAvLyBGb3Igb2xkIElFXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xyXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xyXG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxyXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xyXG59XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcclxuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxyXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XHJcbiAgICB9O1xyXG4gIH1cclxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xyXG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XHJcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cclxuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcclxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcclxuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xyXG4gIH1cclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGRpYWxvZ1Byb2plY3QgfSBmcm9tICcuL2luaXQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQcm9qZWN0c1RvU3RvcmFnZShsaXN0KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3ROYW1lcycsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFByb2plY3RzRnJvbVN0b3JhZ2UoKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKSB8fCBbXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2plY3ROYW1lcyA9IGxvYWRQcm9qZWN0c0Zyb21TdG9yYWdlKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdFZhbCkge1xyXG4gIGNvbnN0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdQcm9qZWN0LmlkID0gcHJvamVjdFZhbC5yZXBsYWNlKC9cXHMrL2csICcnKTtcclxuICBuZXdQcm9qZWN0LmNsYXNzTmFtZSA9ICdwcm9qZWN0JztcclxuXHJcbiAgLy8gSGVhZGVyIHJvdyB3aXRoIHRpdGxlICsgZGVsZXRlIGJ1dHRvblxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhlYWRlci5jbGFzc05hbWUgPSAncHJvamVjdC1oZWFkZXInO1xyXG5cclxuICBjb25zdCBuZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbmV3UHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBwcm9qZWN0VmFsO1xyXG5cclxuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZGVsZXRlUHJvamVjdEJ0bi5jbGFzc05hbWUgPSAnZGVsZXRlLXByb2plY3QtYnRuJztcclxuICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XHJcblxyXG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgcHJvamVjdCBmcm9tIERPTVxyXG4gICAgbmV3UHJvamVjdC5yZW1vdmUoKTtcclxuXHJcbiAgICAvLyBSZW1vdmUgZnJvbSBkcm9wZG93blxyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2plY3RzRHJvcERvd24gb3B0aW9uW3ZhbHVlPVwiJHtwcm9qZWN0VmFsLnJlcGxhY2UoL1xccysvZywgJycpfVwiXWApO1xyXG4gICAgaWYgKG9wdGlvbikgb3B0aW9uLnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIFJlbW92ZSBmcm9tIHN0b3JhZ2VcclxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdE5hbWVzLmluZGV4T2YocHJvamVjdFZhbCk7XHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIHByb2plY3ROYW1lcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdE5hbWVzKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3ROYW1lKTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bik7XHJcbiAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICByZXR1cm4gbmV3UHJvamVjdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdFZhbCkge1xyXG4gIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gIG9wdGlvbi52YWx1ZSA9IHByb2plY3RWYWwucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdFZhbDtcclxuICByZXR1cm4gb3B0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcclxuICBjb25zdCBpbnB1dFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcm9qZWN0Jyk7XHJcbiAgY29uc3QgcHJvamVjdFZhbCA9IGlucHV0UHJvamVjdC52YWx1ZS50cmltKCk7XHJcblxyXG4gIGlmICghcHJvamVjdFZhbCkgcmV0dXJuO1xyXG5cclxuICBpZiAoIXByb2plY3ROYW1lcy5pbmNsdWRlcyhwcm9qZWN0VmFsKSkge1xyXG4gICAgcHJvamVjdE5hbWVzLnB1c2gocHJvamVjdFZhbCk7XHJcbiAgICBzYXZlUHJvamVjdHNUb1N0b3JhZ2UocHJvamVjdE5hbWVzKTtcclxuXHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdFZhbCk7XHJcbiAgICBjb25zdCBuZXdPcHRpb24gPSBjcmVhdGVPcHRpb25FbGVtZW50KHByb2plY3RWYWwpO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0LW9mLXRvLWRvcycpLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzRHJvcERvd24nKS5hcHBlbmRDaGlsZChuZXdPcHRpb24pO1xyXG4gIH1cclxuXHJcbiAgaW5wdXRQcm9qZWN0LnZhbHVlID0gJyc7XHJcbiAgZGlhbG9nUHJvamVjdC5jbG9zZSgpO1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyVGFzayB9IGZyb20gJy4vcG9wLXVwLW5ldy10YXNrJztcclxuaW1wb3J0IHsgaW5ib3ggfSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0RWxlbWVudCwgY3JlYXRlT3B0aW9uRWxlbWVudCB9IGZyb20gJy4vYWRkUHJvamVjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgcmV0cmlldmVJdGVtcyA9ICgpID0+IHtcclxuICBjb25zdCB0YXNrTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3ROYW1lcycpKTtcclxuXHJcbiAgaWYgKHByb2plY3ROYW1lcykge1xyXG4gICAgcHJvamVjdE5hbWVzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3Qtb2YtdG8tZG9zJykuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdCkpO1xyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHNEcm9wRG93bicpLmFwcGVuZENoaWxkKGNyZWF0ZU9wdGlvbkVsZW1lbnQocHJvamVjdCkpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAodGFza0xpc3QpIHtcclxuICAgIHRhc2tMaXN0LmZvckVhY2goKHRhc2tPYmopID0+IHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gdGFza09iai5wcm9qZWN0TmFtZSA9PT0gJ2luYm94J1xyXG4gICAgICAgID8gaW5ib3hcclxuICAgICAgICA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke3Rhc2tPYmoucHJvamVjdE5hbWV9YCk7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdGFyZ2V0LmFwcGVuZENoaWxkKHJlbmRlclRhc2sodGFza09iaiwgdGFza09iai5wcm9qZWN0TmFtZSkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn07IiwiaW1wb3J0IHsgcG9wdXBUYXNrIH0gZnJvbSAnLi9wb3AtdXAtbmV3LXRhc2snO1xyXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi9hZGRQcm9qZWN0JztcclxuaW1wb3J0IHsgcmV0cmlldmVJdGVtcyB9IGZyb20gJy4vZ2V0RGF0YSc7XHJcbmltcG9ydCB7IHRhc2tMaXN0IH0gZnJvbSAnLi9wb3AtdXAtbmV3LXRhc2snO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrQ29udGFpbmVyJyk7XHJcbmV4cG9ydCBjb25zdCBkaWFsb2dQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3RDb250YWluZXInKTtcclxuZXhwb3J0IGNvbnN0IGluYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94Jyk7XHJcbmV4cG9ydCBjb25zdCBsaXN0T2ZUb0RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3Qtb2YtdG8tZG9zJyk7XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzRHJvcERvd24nKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBuZXdUYXNrT2JqZWN0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUsIGlkLCBjb21wbGV0ZSwgcHJvamVjdE5hbWUpIHtcclxuICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlO1xyXG4gICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgcmV0cmlldmVJdGVtcygpO1xyXG5cclxuICBsZXQgdGFza1VwZGF0ZUNvbnRhaW5lciA9IG51bGw7XHJcblxyXG4gIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpO1xyXG4gIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVGFzaycpO1xyXG4gIGNvbnN0IGNvbmZpcm1Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpcm1Qcm9qZWN0Jyk7XHJcbiAgY29uc3QgY2FuY2VsUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxQcm9qZWN0Jyk7XHJcbiAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbCcpO1xyXG4gIGNvbnN0IHRhc2tTdWJtaXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1N1Ym1pdEJ0bicpO1xyXG5cclxuICAvLyBIYW5kbGUgY2hlY2tib3ggY29tcGxldGlvbiB0b2dnbGVcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5jb21wbGV0ZWQnKTtcclxuICAgIGlmIChjaGVja2JveCkge1xyXG4gICAgICBjb25zdCB0YXNrSWQgPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLnRhc2snKS5kYXRhc2V0LmlkO1xyXG4gICAgICBjb25zdCB0YXNrID0gdGFza0xpc3QuZmluZCh0ID0+IHQuaWQgPT09IHRhc2tJZCk7XHJcbiAgICAgIGlmICh0YXNrKSB7XHJcbiAgICAgICAgdGFzay5jb21wbGV0ZSA9IGNoZWNrYm94LmNoZWNrZWQ7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvLyBIYW5kbGUgdXBkYXRlIGFuZCBkZWxldGUgdGFzayBjbGlja3NcclxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlQnRuID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy51cGRhdGUtYnRuJyk7XHJcbiAgICBjb25zdCBkZWxldGVCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdCgnLmRlbGV0ZS1idG4nKTtcclxuXHJcbiAgICBpZiAodXBkYXRlQnRuKSB7XHJcbiAgICAgIHRhc2tVcGRhdGVDb250YWluZXIgPSB1cGRhdGVCdG4uY2xvc2VzdCgnLnRhc2snKTtcclxuXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dCcpLnZhbHVlID0gdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcubmFtZS1vZi10YXNrJykudGV4dENvbnRlbnQ7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnZhbHVlID0gdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24tdGV4dCcpLnRleHRDb250ZW50O1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpLnZhbHVlID0gdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS50ZXh0Q29udGVudDtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JykudmFsdWUgPSB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnRleHRDb250ZW50O1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHNEcm9wRG93bicpLnZhbHVlID0gdXBkYXRlQnRuLmRhdGFzZXQubGlzdFR5cGU7XHJcblxyXG4gICAgICB0YXNrU3VibWl0QnRuLnRleHRDb250ZW50ID0gJ1NhdmUgVGFzayc7XHJcbiAgICAgIHRhc2tTdWJtaXRCdG4uZGF0YXNldC5tb2RlID0gJ3VwZGF0ZSc7XHJcblxyXG4gICAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcblxyXG4gICAgfSBlbHNlIGlmIChkZWxldGVCdG4pIHtcclxuICAgICAgY29uc3QgZGVsZXRlVGFzayA9IGRlbGV0ZUJ0bi5jbG9zZXN0KCcudGFzaycpO1xyXG4gICAgICBjb25zdCB0YXNrSWQgPSBkZWxldGVUYXNrLmRhdGFzZXQuaWQ7XHJcblxyXG4gICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrTGlzdC5maW5kSW5kZXgodCA9PiB0LmlkID09PSB0YXNrSWQpO1xyXG4gICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIHRhc2tMaXN0LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRlbGV0ZVRhc2sucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZy5jbG9zZSgpO1xyXG4gIH0pO1xyXG5cclxuICB0YXNrU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XHJcbiAgICBjb25zdCBtb2RlID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQubW9kZSB8fCAnY3JlYXRlJztcclxuICAgIHBvcHVwVGFzayhtb2RlLCB0YXNrVXBkYXRlQ29udGFpbmVyKTtcclxuICB9KTtcclxuXHJcbiAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGRpYWxvZ1Byb2plY3Quc2hvd01vZGFsKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNhbmNlbFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaWFsb2dQcm9qZWN0LmNsb3NlKCk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbmZpcm1Qcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkUHJvamVjdCk7XHJcbn07IiwiaW1wb3J0IHsgaW5ib3gsIG5ld1Rhc2tPYmplY3QgfSBmcm9tICcuL2luaXQnO1xyXG5pbXBvcnQgeyBkaWFsb2csIHByb2plY3RzRHJvcERvd24gfSBmcm9tICcuL2luaXQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRhc2tMaXN0ID0gbG9hZFRhc2tzRnJvbVN0b3JhZ2UoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb2xvck1hcCA9IHtcclxuICBMb3c6ICdncmVlbicsXHJcbiAgTWVkaXVtOiAnb3JhbmdlJyxcclxuICBIaWdoOiAncmVkJ1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9hZFRhc2tzRnJvbVN0b3JhZ2UoKSB7XHJcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZVVJRCgpIHtcclxuICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygzNikgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1WYWx1ZXMoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG5hbWU6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dE5hbWUgaW5wdXQnKS52YWx1ZS50cmltKCksXHJcbiAgICBkZXNjcmlwdGlvbjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RGVzY3JpcHRpb24gaW5wdXQnKS52YWx1ZS50cmltKCksXHJcbiAgICBkdWVEYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlLFxyXG4gICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlLFxyXG4gICAgZHJvcERvd25WYWw6IHByb2plY3RzRHJvcERvd24udmFsdWUsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dE5hbWUgaW5wdXQnKS52YWx1ZSA9ICcnO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dERlc2NyaXB0aW9uIGlucHV0JykudmFsdWUgPSAnJztcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWUgPSAnJztcclxuICBkaWFsb2cuY2xvc2UoKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvcHVwVGFzayA9IChtb2RlLCB0YXNrVXBkYXRlQ29udGFpbmVyKSA9PiB7XHJcbiAgaWYgKG1vZGUgPT09ICdjcmVhdGUnKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgZHJvcERvd25WYWwgfSA9IGdldEZvcm1WYWx1ZXMoKTtcclxuXHJcbiAgICBpZiAoIW5hbWUpIHJldHVybjsgLy8gZ3VhcmQgYWdhaW5zdCBlbXB0eSB0YXNrIG5hbWVcclxuXHJcbiAgICBjb25zdCB0YXNrT2JqID0gbmV3IG5ld1Rhc2tPYmplY3QobmFtZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlLCBnZW5lcmF0ZVVJRCgpLCBmYWxzZSwgZHJvcERvd25WYWwpO1xyXG4gICAgY29uc3QgdGFza0VsZW1lbnQgPSByZW5kZXJUYXNrKHRhc2tPYmosIGRyb3BEb3duVmFsKTtcclxuXHJcbiAgICB0YXNrTGlzdC5wdXNoKHRhc2tPYmopO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza0xpc3QpKTtcclxuXHJcbiAgICBpZiAoZHJvcERvd25WYWwgPT09ICdpbmJveCcpIHtcclxuICAgICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7ZHJvcERvd25WYWx9YCkuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICB9IGVsc2UgaWYgKG1vZGUgPT09ICd1cGRhdGUnKSB7XHJcbiAgICBjb25zdCB7IG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSB9ID0gZ2V0Rm9ybVZhbHVlcygpO1xyXG4gICAgY29uc3QgdGFza0lkID0gdGFza1VwZGF0ZUNvbnRhaW5lci5kYXRhc2V0LmlkO1xyXG5cclxuICAgIHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLm5hbWUtb2YtdGFzaycpLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRhc2tVcGRhdGVDb250YWluZXIucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLXRleHQnKS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGFza1VwZGF0ZUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XHJcbiAgICB0YXNrVXBkYXRlQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcbiAgICBwcmlvcml0eUNvbG9ycyh0YXNrVXBkYXRlQ29udGFpbmVyLCBwcmlvcml0eSk7XHJcblxyXG4gICAgY29uc3QgdGFzayA9IHRhc2tMaXN0LmZpbmQodCA9PiB0LmlkID09PSB0YXNrSWQpO1xyXG4gICAgaWYgKHRhc2spIHtcclxuICAgICAgdGFzay5uYW1lID0gbmFtZTtcclxuICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICB0YXNrLmRhdGUgPSBkdWVEYXRlO1xyXG4gICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tMaXN0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2tTdWJtaXRCdG4nKTtcclxuICAgIHN1Ym1pdEJ0bi5kYXRhc2V0Lm1vZGUgPSAnY3JlYXRlJztcclxuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdDcmVhdGUgVGFzayc7XHJcbiAgfVxyXG5cclxuICByZXNldEZvcm0oKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmlvcml0eUNvbG9ycyh0YXNrRWxlbWVudCwgcHJpb3JpdHkpIHtcclxuICB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zdHlsZS5jb2xvciA9IGNvbG9yTWFwW3ByaW9yaXR5XTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRhc2sodGFza09iaiwgbGlzdFR5cGUpIHtcclxuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgdGFza0NvbnRhaW5lci5jbGFzc05hbWUgPSAndGFzayc7XHJcbiAgdGFza0NvbnRhaW5lci5kYXRhc2V0LmlkID0gdGFza09iai5pZDtcclxuXHJcbiAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG5hbWVEaXYuY2xhc3NOYW1lID0gJ25hbWUtb2YtdGFzayc7XHJcbiAgbmFtZURpdi50ZXh0Q29udGVudCA9IHRhc2tPYmoubmFtZTtcclxuXHJcbiAgY29uc3QgZGVzY0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlc2NEaXYuY2xhc3NOYW1lID0gJ2Rlc2NyaXB0aW9uLXRleHQnO1xyXG4gIGRlc2NEaXYudGV4dENvbnRlbnQgPSB0YXNrT2JqLmRlc2NyaXB0aW9uO1xyXG4gIGRlc2NEaXYuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRhdGVEaXYuY2xhc3NOYW1lID0gJ2R1ZS1kYXRlJztcclxuICBkYXRlRGl2LnRleHRDb250ZW50ID0gdGFza09iai5kYXRlO1xyXG5cclxuICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHByaW9yaXR5RGl2LmNsYXNzTmFtZSA9ICdwcmlvcml0eSc7XHJcbiAgcHJpb3JpdHlEaXYudGV4dENvbnRlbnQgPSB0YXNrT2JqLnByaW9yaXR5O1xyXG5cclxuICBjb25zdCB1cGRhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICB1cGRhdGVCdG4uY2xhc3NOYW1lID0gJ3VwZGF0ZS1idG4nO1xyXG4gIHVwZGF0ZUJ0bi5kYXRhc2V0Lmxpc3RUeXBlID0gbGlzdFR5cGU7XHJcbiAgdXBkYXRlQnRuLnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gIGRlbGV0ZUJ0bi5jbGFzc05hbWUgPSAnZGVsZXRlLWJ0bic7XHJcbiAgZGVsZXRlQnRuLmRhdGFzZXQubGlzdFR5cGUgPSBsaXN0VHlwZTtcclxuICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcclxuXHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGNoZWNrQm94LmNsYXNzTmFtZSA9ICdjb21wbGV0ZWQnO1xyXG4gIGNoZWNrQm94LnR5cGUgPSAnY2hlY2tib3gnO1xyXG4gIGNoZWNrQm94LmNoZWNrZWQgPSB0YXNrT2JqLmNvbXBsZXRlIHx8IGZhbHNlO1xyXG5cclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZChjaGVja0JveCwgbmFtZURpdiwgZGVzY0RpdiwgZGF0ZURpdiwgcHJpb3JpdHlEaXYsIHVwZGF0ZUJ0biwgZGVsZXRlQnRuKTtcclxuICBwcmlvcml0eUNvbG9ycyh0YXNrQ29udGFpbmVyLCB0YXNrT2JqLnByaW9yaXR5KTtcclxuXHJcbiAgcmV0dXJuIHRhc2tDb250YWluZXI7XHJcbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge2luaXR9IGZyb20gJy4vbW9kdWxlcy9pbml0LmpzJ1xyXG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZXMuY3NzXCI7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGluaXQoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==