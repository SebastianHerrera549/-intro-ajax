<?php
    include_once 'db.php';

    class Todos extends DB{
        function nuevoTodo($texto){
            if(!empty($texto)){
                $query = $this->connect()->prepare('INSERT INTO 	todotable(texto) VALUES (:texto)');
                $query->execute(['texto' => $texto]);
            }
        }

        function mostrarTodos(){
            return $this->connect()->query('SELECT * FROM 	todotable ORDER BY timestamp DESC');
        }
    }

?>