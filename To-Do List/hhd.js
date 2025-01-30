const input = document.getElementById('input');
const btn = document.getElementById('addbtn');
const cle = document.querySelector('.cle');


// add task
const addTask = () => {
    if (input.value == "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        tasks.push(input.value)

        localStorage.setItem('tasks', JSON.stringify(tasks));
        displaysingletask(input.value);

        input.value = ""
    }
}

//clear task

const ClearTask = () => {
    localStorage.clear();
    ul.innerHTML = ""
}

//event listener
input.addEventListener("input", () => {
    if (input.value == "") {
        btn.disabled = true;
        
    } else {
        btn.disabled = false;
    }
});


ul = document.getElementById('ul')

// Display all tasks
const displaytask = () => {

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    ul.innerHTML = "";

    tasks.forEach((task) => {
        displaySingleTask(task);
    })
}
// Display a single task
const displaysingletask = (task) => {

    cle.classList="cleb"

    let li = document.createElement("li");

    // li.textContent = task;
    // li.addEventListener("click", () => {
    //     li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
    // });
    li.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
            e.target.style.textDecoration = e.target.style.textDecoration === "line-through" ? "none" : "line-through";
        }
    });
    ul.appendChild(li);

    //create task
    const taskText = document.createElement("span");
    taskText.textContent = task;
    taskText.style.marginRight = "10px";
    li.appendChild(taskText);


    //edite btn
    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit"
    editbtn.classList = "ed"
    editbtn.classList="editbtn"
    editbtn.addEventListener('click', () => editTask(taskText, task))
    li.appendChild(editbtn)

    //delete btn
    const deletebtn = document.createElement("button")
    deletebtn.textContent = "Delete"
    deletebtn.className = "de";
    deletebtn.addEventListener('click', () => deleteTask(li, task));
    li.appendChild(deletebtn);
}

//edit fun
const editTask = (taskText, oldTask) => {
    let newTask = prompt("Edit Youer Old Task", taskText.textContent);

    if (newTask && newTask.trim() !== "") {
        taskText.textContent = newTask;

        //update task in local
        let task = JSON.parse(localStorage.getItem('task')) || [];

        let index = task.indexOf(oldTask);

        if (index !== -1) {
            tasks[index] = newTask;
            localStorage.setItem('task', JSON.stringify(task));

        }
    }

}
const deleteTask = (li, task) => {
    li.remove();

    //delete from local

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((t) => t !== task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


displaytask();