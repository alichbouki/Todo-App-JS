var $btnAdd = document.querySelector("#btnAdd");
var $newTodo = document.querySelector("#newTodo");
var $contTodos = document.querySelector("#todos");
var $formAdd = document.querySelector("#formAdd");

var todos = [];

$formAdd.addEventListener("submit", function(evt){
    console.log($newTodo.value);
    evt.preventDefault();

    if ($newTodo.value === ""){
        return;
    }

    todos.push($newTodo.value);

    var template = Handlebars.compile(/*html*/
    `
    <ul>
        {{#each todos}}
        <li>
            {{this}}
        </li>
        {{/each}}
    </ul> 
    `);

    $contTodos.innerHTML = template({
        todos: todos
    });
    $newTodo.value=""
});