<?php
    include_once 'todos.php';

    $todos = new Todos();

    $lista = $todos->mostrarTodos();

    foreach($lista as $todo){
        echo '<div class="pendiente">' . $todo['texto'] . '</div>';
    }


?>