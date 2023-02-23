//your code here


let button = document.getElementById('addTodoBtn');
let ol = document.getElementById('todoList');

function addTodo(event){
    event.preventDefault();
    let inputValue = document.getElementById('newTodoInput').value;
    if(inputValue != ""){
		 //1.create li element
         let li = document.createElement('li');
        //2.set content of li element
        li.textContent = inputValue;
       //3. now add li to ol parent element
       ol.appendChild(li);
       document.getElementById('newTodoInput').value = ""; 
    }
}

button.addEventListener('click',addTodo);



