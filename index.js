
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
let clear = document.getElementById('clear')
let complete = document.getElementById('clear')
let body = document.querySelector('body')
let things = document.querySelectorAll('.radinput')
let activeBtn = document.getElementById('active')

let graphs;
let list;
let todoItems;
let par;
let todoCheckbox;
let listed;


//mark to do items when checked
 function checkMaster() {
    /* things.forEach(things => {
        things.addEventListener('click', () => {    
            if (things.hasAttribute('checked')) {
                things.removeAttribute('checked')
            } else {
                things.setAttribute('checked', 'checked')
            }
            console.log('works')
        })
    }); */
    } 
    
    

//input todo items
function add() {
    todoItems = document.createElement('div')
    par = document.createElement('p')
    todoCheckbox = document.createElement('input')
    todoCheckbox.setAttribute('id', 'checking')
    todoCheckbox.setAttribute('type', 'checkbox')
    todoCheckbox.classList.add('radinput')
    todoItems.classList.add('blist')
    todoItems.appendChild(todoCheckbox)
    todoItems.appendChild(par)
    par.appendChild(document.createTextNode(input.value))
    tod.appendChild(todoItems)
    /* localStorage.setItem('say', JSON.stringify(tod)) */
    input.value = null   
    itemsQuantity.innerHTML = tod.childElementCount
    things = document.querySelectorAll('.radinput')
    list = document.querySelectorAll('.list')
    graphs = document.querySelectorAll('p')
    listed = document.querySelectorAll('.blist')

}


input.addEventListener('keypress', function myevent(event) {
    if (event.keyCode === 13) {
        if (input.value.length >= 1) {
            add();
            
        }
         
        
    }
})







// navigational functions
function active() {
    things.forEach(things => {
        if (things.hasAttribute('checked')) {
            things.parentElement.classList.add('hide')
        }
        itemsQuantity.innerHTML = tod.childElementCount
        console.log('active btn works!')
    }
    )}
activeBtn.onclick = active()

//make light theme
function lightTheme() {  
     if (listed) {
        listed.forEach(list => {
            list.classList.add('lightback')    
        });
    }
    if (graphs) {
        graphs.forEach(graphs => {
            graphs.classList.add('lightback')    
        });
    }
    botbutton.forEach(buttons => {
        buttons.classList.add('lightback')    
    });
    body.style.backgroundImage = 'url(bg-desktop-light.jpg)'
    html.classList.add('lightback')
    itemsQuantity.classList.add('lightback')
    itemsLeft.classList.add('lightback')
    functions.classList.add('lightback')
    inputwrap.classList.add('lightback')
    input.classList.add('lightback')
    dark.classList.remove('hide')
    light.replaceWith(dark)
}
light.onclick = lightTheme

// make dark theme
function darkTheme() {
    botbutton.forEach(buttons => {
        buttons.classList.remove('lightback')    
    });
    if (listed) {
        listed.forEach(list => {
            list.classList.remove('lightback')    
        });
    }
    if (graphs) {
        graphs.forEach(graphs => {
            graphs.classList.remove('lightback')    
        });
    }
    body.style.backgroundImage = 'url(bg-desktop-dark.jpg)'
    html.classList.remove('lightback')
    itemsQuantity.classList.remove('lightback')
    itemsLeft.classList.remove('lightback')
    functions.classList.remove('lightback')
    inputwrap.classList.remove('lightback')
    input.classList.remove('lightback')
    light.classList.remove('hide')
    dark.replaceWith(light)
}
dark.onclick = darkTheme


// save todo items on local storage
/* let sayout = JSON.parse(localStorage.getItem('say'))
    console.log(sayout)
clear.addEventListener('click', function() {
    let sayout = JSON.parse(localStorage.getItem('say'))
    console.log(sayout)
})
complete.addEventListener('click', function() {
    localStorage.clear()
}) */