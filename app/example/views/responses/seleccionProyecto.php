<?php
//Conexión a BD
//Conexión a BD

date_default_timezone_set('America/Mexico_City');

if(!isset($_SESSION)){session_start();}

include ("conexion.php");

	if(isset($_GET['tablaT'])){
		$db2 = ("SELECT idProyecto, nombre FROM Proyecto");
		$i = 0;
		$tmp = array();
	
		$result = $mysqli->query($db2);
	   
		while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		
			$tmp[$i] = $row;
			$i++;
			
	
		}
		
				
	}	
	
	if (isset($_REQUEST['callback'])) {
		header('Content-Type: text/javascript');
		echo $_REQUEST['callback'] . '(' . json_encode($tmp) . ');';
	} else {
		header('Content-Type: application/x-json');
		echo json_encode($tmp);
	}
?>
