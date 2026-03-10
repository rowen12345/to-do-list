import {inbox, newTaskObject} from './init'
import { dialog } from './init';
import { projectsDropDown } from "./init"
import { compareAsc, format, parseISO } from "date-fns";
//import projectList from './addProject';
export const inboxList = []
export const taskList = loadTasksFromStorage()
function loadTasksFromStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}
export const colorMap ={
    Low:'green',
    Medium: 'rgba(255, 153, 0, 0.39)',
    High: 'red'
};
import { saveProjectsToStorage } from './addProject';


const savedTasks = document.querySelector('div')
export const popupTask = (mode, taskUpdateContainer) => {
    if (mode === 'create') {
        const dropDownVal = projectsDropDown.value;

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
        const taskObj = new newTaskObject(name, description, priority, dueDate,uid(),complete,dropDownVal);
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
            inbox.appendChild(taskElement);
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
    dialog.close();

   
};

export function priorityColors(taskElement, priority){
    taskElement.querySelector('.priority').style.color = colorMap[priority]
}
export function renderTask(taskObj, listType) {

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

