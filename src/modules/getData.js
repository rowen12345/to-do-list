
import { renderTask } from "./pop-up-new-task";
import { inbox } from "./init";
import { createProjectElement } from "./addProject";
import { createOptionElement } from "./addProject";

export const retrieveItems = () =>  {
    const taskList = JSON.parse(localStorage.getItem('tasks'))
    const projectNames = JSON.parse(localStorage.getItem('projectNames'))
    if (projectNames){
         projectNames.forEach((project) => {
            document.getElementById("list-of-to-dos").appendChild(createProjectElement(project));

            document.getElementById("projectsDropDown").appendChild(createOptionElement(project));
        });
    }
   
    //taskList.map((taskObj) => taskObj.projectName === 'inbox'? inbox.appendChild(renderTask(taskObj, taskObj.projectName)): document.querySelector(`#${taskObj.projectName}`).appendChild(renderTask(taskObj, taskObj.projectName)))
    if(taskList){
        taskList.map((taskObj) => taskObj.projectName === 'inbox'? inbox.appendChild(renderTask(taskObj, taskObj.projectName)):document.querySelector(`#${taskObj.projectName}`).appendChild(renderTask(taskObj, taskObj.projectName)) )
    }
}