import { inbox, newTaskObject } from './init';
import { dialog, projectsDropDown } from './init';

export const taskList = loadTasksFromStorage();

export const colorMap = {
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
    dropDownVal: projectsDropDown.value,
  };
}

function resetForm() {
  document.querySelector('#inputName input').value = '';
  document.querySelector('#inputDescription input').value = '';
  document.getElementById('dueDate').value = '';
  document.getElementById('priority').value = '';
  dialog.close();
}

export const popupTask = (mode, taskUpdateContainer) => {
  if (mode === 'create') {
    const { name, description, dueDate, priority, dropDownVal } = getFormValues();

    if (!name) return; // guard against empty task name

    const taskObj = new newTaskObject(name, description, priority, dueDate, generateUID(), false, dropDownVal);
    const taskElement = renderTask(taskObj, dropDownVal);

    taskList.push(taskObj);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    if (dropDownVal === 'inbox') {
      inbox.appendChild(taskElement);
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

export function priorityColors(taskElement, priority) {
  taskElement.querySelector('.priority').style.color = colorMap[priority];
}

export function renderTask(taskObj, listType) {
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