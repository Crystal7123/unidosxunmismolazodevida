<?php
// Datos de la conexión
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ejemplo01";

// Crear la conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verificar si la conexión fue exitosa
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

?>
