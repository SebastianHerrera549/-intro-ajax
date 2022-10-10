document.getElementById("nEnviar").addEventListener("click", function(){
    //console.log("click");

    nuevoTodo();
});

function nuevoTodo(){
    var todo = document.getElementById("todo");
    var header ="todo"+todo.value;
    var xmlhttp =new XMLHttpRequest();

    xmlhttp.onreadystatechange=function(){
        if (this.readyState == 4 && this.status == 200){
            // la solicitud se completo correratemante 
            cargarTodos();
        };
    }
    xmlhttp.open("POST", "nuevo-todo.php",true);
    xmlhttp.setRequestHeader("Content-type", "aplication/x-www-form-urlcoded");
    xmlhttp.send(header);
}

function cargarTodos(){
    var xmlhttp = new XMLHttpRequest();    
    XMLHttpRequest.onreadystatechange= function(){
        if(this.readyState == 4 && this.status==200){
            document.getElementById("mostrar-todo-container").innerHTML =this.responseText ;
        }
    };

    xmlhttp.open("GET", "mostrar-todo.php", true);

}