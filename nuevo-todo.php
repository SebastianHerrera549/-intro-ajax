<?php
    include_once 'todos.php';

    $todos = new Todos();

    if(isset($_POST['todo'])){
        $todos->nuevoTodo($_POST['todo']);
    }


?>