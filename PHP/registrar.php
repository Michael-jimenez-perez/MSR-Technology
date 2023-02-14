<?php 
include("con_db.php");

if (isset($_POST['register'])) {
    if (strlen($_POST['nombre']) >= 1 && strlen($_POST['email']) >= 1) {
	    $nombre = trim($_POST['nombre']);
	    $email = trim($_POST['email']);
	    $contraseña = trim($_POST['contraseña']);
	    $consulta = "INSERT INTO clientes(nombre, email, contraseña) VALUES ('$nombre','$email','$contraseña')";
	    $resultado = mysqli_query($conex,$consulta);
	    if ($resultado) {
			header("Location: http://msrtechnology.mywebcommunity.org/index_sesion.html");
	    } else {
			echo '<script language="javascript">alert("falta");</script>';
	    }
    }   else {
		echo '<script language="javascript">alert("mal");</script>';
    }
}
?>