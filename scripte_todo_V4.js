var myLocale = "ar-AE";

class Todo {
    constructor(title , content) {
        this.title = title ;
        this.content = content ; 
        this.createdAt = new Date();
    
        this.fCreatedAt = this.formatCreatedAt();
    }

    formatCreatedAt() {
        const ops = {month: 'long', day: 'numeric', year: 'numeric'};
        return new Intl.DateTimeFormat(myLocale, ops).format(this.createdAt);
    }

    // evergreen browser

    // transpiler
}

// var Todo=function (title , content){
//     this.title = title ;
//     this.content = content ; 
//     this.createdAt = new Date();

//     this.fCreatedAt = this.formatCreatedAt();
// }

// Todo.prototype.formatCreatedAt=function(){
//     const ops = {month: 'long', day: 'numeric', year: 'numeric'};
//     return new Intl.DateTimeFormat(myLocale, ops).format(this.createdAt);
// }

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

    updateGUI();

    var JQnodes = $(".btn-delete"); // jQuery
    var domnods = document.querySelectorAll(".btn-delete"); // Vanilla

    console.log(JQnodes);
    console.log(domnods);

    JQnodes.click(function (){

        console.log(this);

        // CRUD
        //  Create
        //  Read
        //  Update
        //  Delete

        // 1. Identifier le Todo
        var id = $(this).data('id');    // récupération de l'id en jQuery
        // var id = this.getAttribute("data-id");      // récupération de l'id en vanilla JS

        // 2. MAJ la structure de données todos
        todos.splice(id, 1);

        // 3. MAJ du DOM
        updateGUI();        
    });

    $title.val("");
    $content.val("");
});

var updateGUI = () => {        // closure
    var template = Handlebars.compile(        /*html*/
    `
    <ul>
        {{#each todos}}
        <li>
            <h2>{{title}} <button class="btn-delete" type="button" data-id="{{@index}}">&times;</button></h2>
            {{content}}<br>
            {{fCreatedAt}}
        </li>
        {{/each}}
    </ul> 
    `);

    $contTodos.html( template({
        todos: todos
    }));
};
