import { renderTask } from './pop-up-new-task';
import { inbox } from './init';
import { createProjectElement, createOptionElement } from './addProject';

export const retrieveItems = () => {
  const taskList = JSON.parse(localStorage.getItem('tasks'));
  const projectNames = JSON.parse(localStorage.getItem('projectNames'));

  if (projectNames) {
    projectNames.forEach((project) => {
      document.getElementById('list-of-to-dos').appendChild(createProjectElement(project));
      document.getElementById('projectsDropDown').appendChild(createOptionElement(project));
    });
  }

  if (taskList) {
    taskList.forEach((taskObj) => {
      const target = taskObj.projectName === 'inbox'
        ? inbox
        : document.querySelector(`#${taskObj.projectName}`);

      if (target) {
        target.appendChild(renderTask(taskObj, taskObj.projectName));
      }
    });
  }
};