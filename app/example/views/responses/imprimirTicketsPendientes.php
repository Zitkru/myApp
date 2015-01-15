<?php
//Conexión a BD
//Conexión a BD

date_default_timezone_set('America/Mexico_City');

if(!isset($_SESSION)){session_start();}

include ("conexion.php");

	if(isset($_GET['tablaT'])){
		
		$db2 = ("SELECT u.nombre, t.titulo, t.descripcion, t.importancia, t.estatus, DAY(t.fecha) AS dia, MONTH(t.fecha) AS mes, YEAR(t.fecha) AS ano 
					FROM Ticket t, Usuario u 
					WHERE t.Usuario_idUsuario = u.idUsuario AND t.estatus = 1
					ORDER BY ano DESC, mes DESC, dia DESC, t.importancia DESC");
		$i = 0;
		$tmp = array();
	
		$result2 = $mysqli->query($db2);
	   
		while ($row = $result2->fetch_array(MYSQLI_ASSOC)) {
		
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
