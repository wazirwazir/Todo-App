
let input = document.getElementById('inputText')
let tod = document.getElementById('tod')
let light = document.getElementById('light')
let dark = document.getElementById('dark')
let inputwrap = document.querySelector('.input')
let functions = document.getElementById('functions')
let botbutton = document.querySelectorAll('.botbutton')
let itemsLeft = document.getElementById('itemsLeft')
let itemsQuantity = document.getElementById('itemsQuantity')
let html = document.querySelector('html')
let clearBtn = document.getElementById('clear')
let completeBtn = document.getElementById('completed')
let body = document.querySelector('body')
let things = document.querySelectorAll('.radinput')
let allBtn = document.getElementById('all')
let activeBtn = document.getElementById('active')
let graphs;
let list;
let todoItems;
let label;
let todoCheckbox;
let listed;


//input todo items
let doIndex = 0
function add() {
    doIndex++
    todoItems = document.createElement('li')
    label = document.createElement('label')
    todoCheckbox = document.createElement('input')
    todoCheckbox.setAttribute('id', 'item' + doIndex)
    todoCheckbox.setAttribute('type', 'checkbox')
    todoCheckbox.classList.add('radinput')
    label.setAttribute('for', 'item' + doIndex)
    todoItems.classList.add('blist')
    todoItems.appendChild(todoCheckbox)
    todoItems.appendChild(label)
    label.appendChild(document.createTextNode(input.value))
    tod.appendChild(todoItems)
    input.value = null   
    itemsQuantity.innerHTML = tod.childElementCount
    things = document.querySelectorAll('.radinput')
    list = document.querySelectorAll('.list')
    graphs = document.querySelectorAll('label')
    listed = document.querySelectorAll('.blist')

}
let boxes = document.querySelectorAll('radinput');

input.addEventListener('keypress', function myevent(event) {
    if (event.keyCode === 13) {
        if (input.value.length >= 1) {
            add();
        }
    }
})

function active() {
    things.forEach(things => {
        if (things.checked) {
            things.parentElement.classList.add('hide')
        } else {
            things.parentElement.classList.remove('hide')
            itemsQuantity.innerText = things.length
        }
    });
}
function completed() {
    things.forEach(things => {
        if (!things.checked) {
            things.parentElement.classList.add('hide')
        } else {
            things.parentElement.classList.remove('hide')
            console.log(things)
            itemsQuantity.innerText = things.length
        } 
    });
}
function all() {
    things.forEach(things => {
        things.parentElement.classList.remove('hide')
    });
}
function clear() {
    things.forEach(things => {
        if (things.checked) {
            things.parentNode.removeChild()
        } 
    });
}
activeBtn.onclick = active
completeBtn.onclick = completed
allBtn.onclick = all