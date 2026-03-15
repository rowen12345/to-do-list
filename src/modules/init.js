import { popupTask } from './pop-up-new-task';
import { addProject } from './addProject';
import { retrieveItems } from './getData';
import { taskList } from './pop-up-new-task';

export const dialog = document.getElementById('newTaskContainer');
export const dialogProject = document.getElementById('newProjectContainer');
export const inbox = document.getElementById('inbox');
export const listOfToDo = document.getElementById('list-of-to-dos');
export const projectsDropDown = document.getElementById('projectsDropDown');

export class newTaskObject {
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

export const init = () => {
  retrieveItems();

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
      const task = taskList.find(t => t.id === taskId);
      if (task) {
        task.complete = checkbox.checked;
        localStorage.setItem('tasks', JSON.stringify(taskList));
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

      const taskIndex = taskList.findIndex(t => t.id === taskId);
      if (taskIndex !== -1) {
        taskList.splice(taskIndex, 1);
        localStorage.setItem('tasks', JSON.stringify(taskList));
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
    popupTask(mode, taskUpdateContainer);
  });

  addProjectButton.addEventListener('click', () => {
    dialogProject.showModal();
  });

  cancelProject.addEventListener('click', () => {
    dialogProject.close();
  });

  confirmProject.addEventListener('click', addProject);
};