<?php
//Conexión a BD
//Conexión a BD

date_default_timezone_set('America/Mexico_City');

if(!isset($_SESSION)){session_start();}

include ("conexion.php");


	if(isset($_GET["idUsuario"])){
		$db2 = ("INSERT INTO Ticket(Proyecto_idProyecto,titulo,descripcion,importancia,fecha,Usuario_idUsuario) VALUES('".$_GET["idProyecto"]."','".$_GET["titulo"]."','".$_GET["descripcion"]."','".$_GET["importancia"]."','".date('y-m-d h:i:s')."','".$_GET["idUsuario"]."')");
		$result2 = $mysqli->query($db2);
		$tmp = array();
		$tmp['success']=1;
		
	    $tmp['resultado']=$result2;
	    //Verificando si se mandaban bien los datos

		/*$tmp['idProyecto']=$_GET["idProyecto"];
		$tmp['descripcion']=$_GET["descripcion"];
		$tmp['importancia']=$_GET["importancia"];
		$tmp['idUsuario']=$_GET["idUsuario"];
		$tmp['titulo']=$_GET["titulo"];
		$tmp['fecha']=date('y-m-d h:i:s');*/
		
				
	}	
	
	if (isset($_REQUEST['callback'])) {
		header('Content-Type: text/javascript');
		echo $_REQUEST['callback'] . '(' . json_encode($tmp) . ');';
	} else {
		header('Content-Type: application/x-json');
		echo json_encode($tmp);
	}
?>
