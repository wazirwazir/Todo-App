// Initializing references to HTML elements
let input = document.getElementById('inputText');
let tod = document.getElementById('tod');
let itemsQuantity = document.getElementById('itemsQuantity');
let clearBtn = document.getElementById('clear');
let completeBtn = document.getElementById('completed');
let allBtn = document.getElementById('all');
let activeBtn = document.getElementById('active');
let addBtn = document.getElementsByClassName('add')[0];
let things = document.querySelectorAll('.radinput');

// Load tasks from local storage on page load
window.onload = loadTasks;

let doIndex = 0;

// Add task function
function add() {
    const task = input.value.trim();
    
    if (task.length >= 1) {
        let todoItems = document.createElement('li');
        let todoCheckbox = document.createElement('input');
        let einput = document.createElement('input');
        let editBtn = document.createElement('button');

        editBtn.innerText = 'Edit';
        todoCheckbox.type = 'checkbox';
        einput.type = 'text';

        editBtn.classList.add('edit');
        todoCheckbox.classList.add('radinput');
        einput.classList.add('einput');

        einput.disabled = true;
        einput.value = task;
        todoItems.classList.add('blist');

        todoItems.appendChild(todoCheckbox);
        todoItems.appendChild(einput);
        todoItems.appendChild(editBtn);
        tod.appendChild(todoItems);

        input.value = null;
        updateItemsQuantity();

        // Add event listener for editing the task using a closure
        editBtn.onclick = (() => {
            return function() {
                toggleEditTask(einput, editBtn);
            }
        })(einput, editBtn);

        // Update local storage
        updateLocalStorage();

        things = document.querySelectorAll('.radinput'); // Update the list of things
    }
}

// Toggle task editing
function toggleEditTask(einput, editBtn) {
    if (einput.disabled) {
        einput.disabled = false;
        einput.focus();
        editBtn.innerText = 'Save';
    } else {
        einput.disabled = true;
        editBtn.innerText = 'Edit';
        // Update local storage after editing
        updateLocalStorage();
    }
}

// Update items quantity
function updateItemsQuantity() {
    itemsQuantity.innerHTML = tod.childElementCount;
}

// Filter active tasks
function active() {
    let activeCount = 0;
    things.forEach(task => {
        if (task.checked) {
            task.parentElement.classList.add('hide');
        } else {
            task.parentElement.classList.remove('hide');
            activeCount++;
        }
    });
    itemsQuantity.innerText = activeCount;
}

// Filter completed tasks
function completed() {
    let completedCount = 0;
    things.forEach(task => {
        if (!task.checked) {
            task.parentElement.classList.add('hide');
        } else {
            task.parentElement.classList.remove('hide');
            completedCount++;
        }
    });
    itemsQuantity.innerText = completedCount;
}

// Show all tasks
function all() {
    things.forEach(task => {
        task.parentElement.classList.remove('hide');
    });
    updateItemsQuantity();
}

// Clear completed tasks
function clear() {
    things.forEach(task => {
        if (task.checked) {
            task.parentElement.remove();
        }
    });
    updateItemsQuantity();
    updateLocalStorage(); // Update local storage after clearing tasks
}

// Update local storage with current tasks
function updateLocalStorage() {
    const tasks = [];
    tod.querySelectorAll('li').forEach(todoItem => {
        const task = {
            text: todoItem.querySelector('.einput').value,
            completed: todoItem.querySelector('.radinput').checked
        };
        tasks.push(task);
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    if (tasks) {
        tasks.forEach(task => {
            let todoItems = document.createElement('li');
            let todoCheckbox = document.createElement('input');
            let einput = document.createElement('input');
            let editBtn = document.createElement('button');

            editBtn.innerText = 'Edit';
            todoCheckbox.type = 'checkbox';
            einput.type = 'text';

            editBtn.classList.add('edit');
            todoCheckbox.classList.add('radinput');
            einput.classList.add('einput');

            einput.disabled = true;
            einput.value = task.text;
            todoCheckbox.checked = task.completed;
            todoItems.classList.add('blist');

            todoItems.appendChild(todoCheckbox);
            todoItems.appendChild(einput);
            todoItems.appendChild(editBtn);
            tod.appendChild(todoItems);

            // Add event listener for editing the task using a closure
            editBtn.onclick = (() => {
                return function() {
                    toggleEditTask(einput, editBtn);
                }
            })(einput, editBtn);

            things = document.querySelectorAll('.radinput'); // Update the list of things
        });
        updateItemsQuantity();
    }
}

// Event listeners
addBtn.onclick = add;
input.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        add();
    }
});
activeBtn.onclick = active;
completeBtn.onclick = completed;
allBtn.onclick = all;
clearBtn.onclick = clear;
