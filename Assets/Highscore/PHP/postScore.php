<?php 
include("common.php");
	$link=dbConnect();

	$name = safe($_POST['name']);
	$score = safe($_POST['score']);
	$hash = safe($_POST['hash']);

    $real_hash = md5($name . $score . $secretKey); 
    if($real_hash == $hash) 
	{
		$query = "INSERT INTO $dbName .`scores` (`id`, `name`, `score`) VALUES (NULL, '$name', '$score');"; 
		$result = mysql_query($query);    
		$my_err = mysql_error();
		if($result === false || $my_err != '')
		{
			echo "
			<pre>
            $my_err <br />
            $query <br />
			</pre>";
			die();
		}
		
		echo "done";
	} 
?>