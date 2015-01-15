<?php
//Conexión a BD

define("server", "localhost");
define("user", 'tuquinie_ticket');
define("pass", 'Ticket#2911!');
define("mainDB", 'tuquinie_ticket');
//$mysqli=new mysqli(server,user,pass,mainDB);
$errorDB=false;
//Variable de status en conexión
if(defined('server') && defined('user') && defined('pass') && defined('mainDB')){
	//Conexión con BD
	$mysqli = new mysqli("localhost","tuquinie_ticket","Ticket#2911!","tuquinie_ticket");

	//Verificar error al conectar
	if(mysqli_connect_error()){
		$errorDB = true;
		echo "error";
	}

}
?>
