<?php
//Conexión a BD
$tmp = array();
include ("conexion.php");
/*caturamos nuestros datos que fueron enviados desde el formulario mediante el metodo POST
**y los almacenamos en variables.*/
if(isset($_GET['usuario'])){
	$db2 = ("SELECT * FROM Usuario WHERE usuario = '".$_GET['usuario']."'");
	
	$result = $mysqli->query($db2);
   
	if ($row = $result->fetch_array(MYSQLI_ASSOC)) {
	
		//Si el usuario es correcto ahora validamos su contraseña
		 if($row["contrasena"] == $_GET['password'])
		 {
			  //Creamos sesión
			  session_start();  
			  //Almacenamos el nombre de usuario en una variable de sesión usuario
			  $_SESSION['idUsuario'] = $row["idUsuario"];  
			  $tmp['logeado'] = $_SESSION['idUsuario'];  
		 }
		 else
		 {
			  //En caso que la contraseña sea incorrecta enviamos un msj y redireccionamos a login.php
			    $tmp['logeado'] = -1;
		            
		 }

	}else
	{
		 //en caso que el nombre de administrador es incorrecto enviamos un msj y redireccionamos a login.php
		$tmp['logeado'] = -2;
		        
	}

	

	
}else{
	$tmp['logeado'] = -3;	
}

if (isset($_REQUEST['callback'])) {
		header('Content-Type: text/javascript');
		echo $_REQUEST['callback'] . '(' . json_encode($tmp) . ');';
	} else {
		header('Content-Type: application/x-json');
		echo json_encode($tmp);
	}
?>
