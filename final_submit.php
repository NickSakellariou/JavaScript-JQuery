<?php
session_start();

$date=$_GET['view'];
$name=$_SESSION["name"];
$surname=$_SESSION["surname"];
$email=$_SESSION["email"];
$phone=$_SESSION["phone"];
$street=$_SESSION["street"];
$streetNumber=$_SESSION["streetNumber"];
$area=$_SESSION["area"];
$postalCode=$_SESSION["postalCode"];

require 'vendor/autoload.php';

$m = new MongoDB\Client("mongodb://127.0.0.1/");

$db = $m->delicatessendb;

$collection1 = $db->personal_information;
$collection2 = $db->purchases;

if(isset($_COOKIE["name1"])){
	$title = $_COOKIE["name1"];
	$price = $_COOKIE["price1"];	
	$document1 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document1);
	
	unset($_COOKIE["price1"]); 
	unset($_COOKIE["name1"]); 
	setcookie("name1", null, -1, '/'); 
	setcookie("price1", null, -1, '/');
}
if(isset($_COOKIE["name2"])){
	$title = $_COOKIE["name2"];
	$price = $_COOKIE["price2"];	
	$document2 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document2);
	
	unset($_COOKIE["price2"]); 
	unset($_COOKIE["name2"]); 
	setcookie("name2", null, -1, '/'); 
	setcookie("price2", null, -1, '/');
}
if(isset($_COOKIE["name3"])){
	$title = $_COOKIE["name3"];
	$price = $_COOKIE["price3"];	
	$document3 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document3);
	
	unset($_COOKIE["price3"]); 
	unset($_COOKIE["name3"]); 
	setcookie("name3", null, -1, '/'); 
	setcookie("price3", null, -1, '/');
}
if(isset($_COOKIE["name4"])){
	$title = $_COOKIE["name4"];
	$price = $_COOKIE["price4"];	
	$document4 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document4);
	
	unset($_COOKIE["price4"]); 
	unset($_COOKIE["name4"]); 
	setcookie("name4", null, -1, '/'); 
	setcookie("price4", null, -1, '/');
}
if(isset($_COOKIE["name5"])){
	$title = $_COOKIE["name5"];
	$price = $_COOKIE["price5"];	
	$document5 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document5);
	
	unset($_COOKIE["price5"]); 
	unset($_COOKIE["name5"]); 
	setcookie("name5", null, -1, '/'); 
	setcookie("price5", null, -1, '/');
}
if(isset($_COOKIE["name6"])){
	$title = $_COOKIE["name6"];
	$price = $_COOKIE["price6"];	
	$document6 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document6);
	
	unset($_COOKIE["price6"]); 
	unset($_COOKIE["name6"]); 
	setcookie("name6", null, -1, '/'); 
	setcookie("price6", null, -1, '/');
}
if(isset($_COOKIE["name7"])){
	$title = $_COOKIE["name7"];
	$price = $_COOKIE["price7"];	
	$document7 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document7);
	
	unset($_COOKIE["price7"]); 
	unset($_COOKIE["name7"]); 
	setcookie("name7", null, -1, '/'); 
	setcookie("price7", null, -1, '/');
}
if(isset($_COOKIE["name8"])){
	$title = $_COOKIE["name8"];
	$price = $_COOKIE["price8"];	
	$document8 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document8);
	
	unset($_COOKIE["price8"]); 
	unset($_COOKIE["name8"]); 
	setcookie("name8", null, -1, '/'); 
	setcookie("price8", null, -1, '/');
}
if(isset($_COOKIE["name9"])){
	$title = $_COOKIE["name9"];
	$price = $_COOKIE["price9"];	
	$document9 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document9);
	
	unset($_COOKIE["price9"]); 
	unset($_COOKIE["name9"]); 
	setcookie("name9", null, -1, '/'); 
	setcookie("price9", null, -1, '/');
}
if(isset($_COOKIE["name10"])){
	$title = $_COOKIE["name10"];
	$price = $_COOKIE["price10"];	
	$document10 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document10);
	
	unset($_COOKIE["price10"]); 
	unset($_COOKIE["name10"]); 
	setcookie("name10", null, -1, '/'); 
	setcookie("price10", null, -1, '/');
}
if(isset($_COOKIE["name11"])){
	$title = $_COOKIE["name11"];
	$price = $_COOKIE["price11"];	
	$document11 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document11);
	
	unset($_COOKIE["price11"]); 
	unset($_COOKIE["name11"]); 
	setcookie("name11", null, -1, '/'); 
	setcookie("price11", null, -1, '/');
}
if(isset($_COOKIE["name12"])){
	$title = $_COOKIE["name12"];
	$price = $_COOKIE["price12"];	
	$document12 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document12);
	
	unset($_COOKIE["price12"]); 
	unset($_COOKIE["name12"]); 
	setcookie("name12", null, -1, '/'); 
	setcookie("price12", null, -1, '/');
}
if(isset($_COOKIE["name13"])){
	$title = $_COOKIE["name13"];
	$price = $_COOKIE["price13"];	
	$document13 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document13);
	
	unset($_COOKIE["price13"]); 
	unset($_COOKIE["name13"]); 
	setcookie("name13", null, -1, '/'); 
	setcookie("price13", null, -1, '/');
}
if(isset($_COOKIE["name14"])){
	$title = $_COOKIE["name14"];
	$price = $_COOKIE["price14"];	
	$document14 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document14);
	
	unset($_COOKIE["price14"]); 
	unset($_COOKIE["name14"]); 
	setcookie("name14", null, -1, '/'); 
	setcookie("price14", null, -1, '/');
}
if(isset($_COOKIE["name15"])){
	$title = $_COOKIE["name15"];
	$price = $_COOKIE["price15"];	
	$document15 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document15);
	
	unset($_COOKIE["price15"]); 
	unset($_COOKIE["name15"]); 
	setcookie("name15", null, -1, '/'); 
	setcookie("price15", null, -1, '/');
}
if(isset($_COOKIE["name16"])){
	$title = $_COOKIE["name16"];
	$price = 5;
	$document16 = array(
		"name" => $name,
		"surname" => $surname,
		"date" => $date,
		"title" => $title,
		"cost" => $price,
	);
	$collection2->insertOne($document16);
	unset($_COOKIE["name16"]); 
	setcookie("name16", null, -1, '/'); 
}

$criteria = array(
	'name' => $name ,
);
$doc = $collection1->findOne($criteria);

if(!empty($doc)) {
	echo "<script>
	alert('Η παραγγελία σας ολοκληρώθηκε επιτυχώς!');
	window.location.href='home.php';
	</script>";
} else {
	$document17 = array(
		"name" => $name,
		"surname" => $surname,
		"email" => $email,
		"phone" => $phone,
		"street" => $street,
		"street_number" => $streetNumber,
		"area" => $area,
		"postal_code" => $postalCode,
	);
	$collection1->insertOne($document17);
	
	echo "<script>
	alert('Η παραγγελία σας ολοκληρώθηκε επιτυχώς!');
	window.location.href='home.php';
	</script>";
}
?>