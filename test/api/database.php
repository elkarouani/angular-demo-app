<?php  

	session_start();

	$user = $_SESSION['user'];

	if ($user == 'admin') {
		echo '{"success": true, "secret": "this is the secret"}';
	} else {
		echo '{"success": false, "secret": "Invalid credentials"}';
	}

?>