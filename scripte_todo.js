var btnAdd = document.querySelector("#btnAdd");
var newTodo = document.querySelector("#newTodo");
var contTodos = document.querySelector("#todos");
var formAdd = document.querySelector("#formAdd");

var todos = [];

formAdd.addEventListener("submit", function(evt){
    console.log(newTodo.value);
    evt.preventDefault();

    if (newTodo.value === ""){
        return;
    }

    todos.push(newTodo.value);
    
    var html = "<ul>";
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        html += "<li>" + todo + "</li>";
    }
    html += "</ul>";

    contTodos.innerHTML = html;
    newTodo.value=""
});