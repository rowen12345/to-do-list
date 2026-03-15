import { dialogProject } from './init';

export function saveProjectsToStorage(list) {
  localStorage.setItem('projectNames', JSON.stringify(list));
}

function loadProjectsFromStorage() {
  return JSON.parse(localStorage.getItem('projectNames')) || [];
}

export const projectNames = loadProjectsFromStorage();

export function createProjectElement(projectVal) {
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

export function createOptionElement(projectVal) {
  const option = document.createElement('option');
  option.value = projectVal.replace(/\s+/g, '');
  option.textContent = projectVal;
  return option;
}

export function addProject() {
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
  dialogProject.close();
}