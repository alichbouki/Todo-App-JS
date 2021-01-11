var Todo=function (title , content){
    this.title = title ;
    this.content = content ; 
    this.createdAt = new Date();
}
var $btnAdd = $("#btnAdd");
var $title = $("#title");
var $content = $("#content");
var $contTodos = $("#todos");
var $formAdd = $("#formAdd");

var todos = [];

$formAdd.submit( function(evt){
    evt.preventDefault();

    if ($title.val() === "" || $content.val() === ""){
        return;
    }

    var newTodo = new Todo($title.val(),$content.val());

    console.log(newTodo);

    todos.push(newTodo);

    var template = Handlebars.compile(/*html*/
    `
    <ul>
        {{#each todos}}
        <li>
            {{title}}<br>
            {{content}}<br>
            {{createdAt}}
        </li>
        {{/each}}
    </ul> 
    `);

    $contTodos.html( template({
        todos: todos
    }));
    $title.val("");
    $content.val("");
});