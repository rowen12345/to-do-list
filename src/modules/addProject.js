// projects.js

import { dialogProject } from "./init";

// Factory function for Project objects
function createProject(name) {
  return {
    name,
    tasks: []
  };
}

export function saveProjectsToStorage(list) {
  localStorage.setItem('projectNames', JSON.stringify(list));
}

function loadProjectsFromStorage() {
  return JSON.parse(localStorage.getItem("projectNames")) || [];
}

// --- DOM Helpers ---
export function createProjectElement(projectVal) {
  const newProject = document.createElement("div");
  const newProjectName = document.createElement("h2");

  newProjectName.textContent = projectVal;
  //Replace multiple spaces with a single space
  newProject.id = projectVal.replace(/\s+/g, "");
  newProject.className = "project";
  newProject.appendChild(newProjectName);

  return newProject;
}

export function createOptionElement(projectVal) {
  const option = document.createElement("option");
  //Replace multiple spaces with a single space
  option.value = projectVal.replace(/\s+/g, "");
  option.textContent = projectVal;
  return option;
}

// --- Main Add Project Function ---
//export const projectList = [];

export const projectNames = loadProjectsFromStorage();
export function addProject() {
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
  dialogProject.close();
}
