
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
let addBtn = document.getElementsByClassName('add')[0]
let graphs;
let list;

let label;

let einput;
let editBtn;
let eBtn;
//input todo items
let doIndex = 0
function add() {
    doIndex++
    if (input.value.length >= 1) {
    let todoItems = document.createElement('li')
    let todoCheckbox = document.createElement('input')
    label = document.createElement('label')
    einput = document.createElement('input')
    editBtn = document.createElement('button')
    editBtn.innerText = 'Edit'
    todoCheckbox.setAttribute('id', 'item' + doIndex)
    todoCheckbox.setAttribute('type', 'checkbox')
    einput.setAttribute('type', 'text')
    editBtn.classList.add('edit')
    todoCheckbox.classList.add('radinput')
    einput.classList.add('einput')
    einput.classList.add('hide')
    label.setAttribute('for', 'item' + doIndex)
    todoItems.classList.add('blist')
    todoItems.appendChild(todoCheckbox)
    todoItems.appendChild(label)
    todoItems.appendChild(einput)
    todoItems.appendChild(editBtn)
    label.appendChild(document.createTextNode(input.value))
    einput.value = input.value
    tod.appendChild(todoItems)
    input.value = null   
    itemsQuantity.innerHTML = tod.childElementCount
    things = document.querySelectorAll('.radinput')


    let eBtn = document.querySelectorAll('.edit')
    eBtn.forEach(eBtn => {
        eBtn.addEventListener('click',  () => {
            let label = eBtn.parentElement.children[1]
            let input = eBtn.parentElement.children[2]
            label.classList.toggle('hide')
            input.classList.toggle('hide')
            label.innerText = input.value;
           if (eBtn.innerText === 'Edit') {
               eBtn.innerText = 'Save'
           } else if (eBtn.innerText === 'Save') {
               eBtn.innerText = 'Edit'
           }          
       })      
})

    }}


let boxes = document.querySelectorAll('radinput');
addBtn.onclick = add
input.addEventListener('keypress', function myevent(event) {
    if (event.keyCode === 13) {
            add();
    }
})


function active() {
    let act = []
    things.forEach(things => {
        if (things.checked) {
            things.parentElement.classList.add('hide')
        } else {
            things.parentElement.classList.remove('hide')
            if (!act.includes(things.id)) {
                act.push(things.id)
                itemsQuantity.innerText = act.length
            }
        }
    });
}
function completed() {
    let comp = []
    things.forEach(things => {
        if (!things.checked) {
            things.parentElement.classList.add('hide')
            
        } else {
            things.parentElement.classList.remove('hide')
            if (!comp.includes(things.id)) {
                comp.push(things.id)
                itemsQuantity.innerText = comp.length
            }
        } 
    });
}


function all() {
    things.forEach(things => {
        things.parentElement.classList.remove('hide')
        itemsQuantity.innerHTML = tod.childElementCount
    });
}
function clear() {
    things.forEach(things => {
        if (things.checked) {
            things.parentElement.remove()
            itemsQuantity.innerHTML = tod.childElementCount
            comp = []
        } 
    });
}

activeBtn.onclick = active
completeBtn.onclick = completed
allBtn.onclick = all
clearBtn.onclick = clear
