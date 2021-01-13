var myLocale = "ar-AE";

var Todo=function (title , content){
    this.title = title ;
    this.content = content ; 
    this.createdAt = new Date();

    this.fCreatedAt = this.formatCreatedAt();
}

Todo.prototype.formatCreatedAt=function(){
    const ops = {month: 'long', day: 'numeric', year: 'numeric'};
    return new Intl.DateTimeFormat(myLocale, ops).format(this.createdAt);
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

    var template = Handlebars.compile(        /*html*/
    `
    <ul>
        {{#each todos}}
        <li>
            <h2>{{title}}</h2><br>
            {{content}}<br>
            {{fCreatedAt}}
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