<html>   

<head>   
    <title>Guardamos los datos en la base de datos</title>   
</head>   

<body>   
<?php   

// Recibimos por POST los datos procedentes del formulario   

$nombre = $_POST["nombre"];   
$email = $_POST["email"];   
$contraseña = $_POST["contraseña"]  

// Abrimos la conexion a la base de datos   
include("abre_conexion.php");   

$_GRABAR_SQL = "INSERT INTO $clientes (nombre,email,contraseña) VALUES ('$nombre','$email','$contraseña')";   
mysqli_query($conexion_db,$_GRABAR_SQL);  

// Cerramos la conexion a la base de datos   
include("cierra_conexion.php");   

// Confirmamos que el registro ha sido insertado con exito   

echo "   
<p>Los datos han sido guardados con exito.</p>   

<p><a href='javascript:history.go(-1)'>VOLVER ATRÁS</a></p>   
";   
?>   
</body>   

</html>  