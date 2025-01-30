const input = document.getElementById('input');
const btn = document.getElementById('addbtn');
const cle = document.querySelector('.cle');

// Add task
const addTask = () => {
    if (input.value === "") {
        btn.disabled = true;
        btn.style.backgroundColor = "grey";

    } else {
        btn.disabled = false;
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        btn.classList = "ad"
        tasks.push(input.value);

        localStorage.setItem('tasks', JSON.stringify(tasks));
        displaysingletask(input.value);

        input.value = "";
    }
}

// Clear task
const ClearTask = () => {
    localStorage.clear();
    ul.innerHTML = "";
}


input.addEventListener("input", () => {
    if (input.value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
});

const ul = document.getElementById('ul');

// Display all tasks
const displaytask = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    ul.innerHTML = "";

    tasks.forEach((task) => {
        displaysingletask(task);
    });
}

// Display a single task
const displaysingletask = (task) => {
    cle.classList = "cleb";
    let li = document.createElement("li");

    li.addEventListener("click", (e) => {
        if (e.target.tagName === "SPAN") {
            e.target.style.textDecoration = e.target.style.textDecoration === "line-through" ? "none" : "line-through";
        }
    });

    ul.appendChild(li);

    //Create span tag
    const taskText = document.createElement("span");
    taskText.textContent = task;
    // taskText.style.marginRight = "10px";
    taskText.classList = "spann"
    li.appendChild(taskText);

    const editbtn = document.createElement("button");
    editbtn.textContent = "Edit";
    editbtn.classList = "ed";
    editbtn.addEventListener('click', () => editTask(taskText, task));
    li.appendChild(editbtn);

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.className = "de";
    deletebtn.addEventListener('click', () => deleteTask(li, task));
    li.appendChild(deletebtn);
}

// Edit function
const editTask = (taskText, oldTask) => {
    let newTask = prompt("Edit Your Old Task", taskText.textContent);

    if (newTask && newTask.trim() !== "") {
        taskText.textContent = newTask;

        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        let index = tasks.indexOf(oldTask);

        if (index !== -1) {
            tasks[index] = newTask;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
}

// Delete task
const deleteTask = (li, task) => {
    li.remove();

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter((t) => t !== task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
}


displaytask();  
