
//npx webpack serve to initialise

export const newTaskInput = document.getElementById('newTask')
import { popupTask } from './pop-up-new-task'
import { addProject } from './addProject';
import { add } from 'date-fns';
import { retrieveItems } from './getData';
import { taskList } from './pop-up-new-task';
export const dialog = document.getElementById("newTaskContainer");
export const dialogProject = document.getElementById('newProjectContainer')
export const inbox = document.getElementById('inbox')
export const listOfToDo = document.getElementById('list-of-to-dos')
export const projectsDropDown = document.getElementById('projectsDropDown')
export const projectNames = ['inbox']
export class newTaskObject {
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
export class newProjectObject {
        constructor(name,  list = []){
            this.name = name
            this.list = list
        }
    }



export const init = () =>{
    //localStorage.clear()
    retrieveItems()
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
            const task = taskList.find(t => t.id === taskId);
            if (task) {
                task.complete = checkbox.checked
                localStorage.setItem("tasks", JSON.stringify(taskList));
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
            const taskIndex = taskList.findIndex(t => t.id === taskId);
            if (taskIndex !== -1) {
                taskList.splice(taskIndex, 1); // removes the task from array
                localStorage.setItem("tasks", JSON.stringify(taskList));
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
        popupTask(mode, taskUpdateContainer);
    });

    addProjectButton.addEventListener('click',()=>{
        dialogProject.showModal()
    })
    cancelProject.addEventListener('click', () =>{
        dialogProject.close()
    })
    confirmProject.addEventListener('click', addProject)
    
}