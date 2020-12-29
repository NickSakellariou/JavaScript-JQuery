<?php
session_start();
?>
<!DOCTYPE html>
<html>
	<head>
		<title>Delicatessen-Order</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<link href="checkout.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <a class="nav-link" href="home.php">ΑΡΧΙΚΗ ΣΕΛΙΔΑ</a>
			</li>
			<li class="nav-item active">
			  <a class="nav-link" href="order.html">ΠΑΡΑΓΓΕΛΙΑ</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="ratings.html">ΑΞΙΟΛΟΓΗΣΕΙΣ</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="contact.html">ΕΠΙΚΟΙΝΩΝΙΑ</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="cart.php">ΚΑΛΑΘΙ</a>
			</li>
			<li class="nav-item">
			  <a class="nav-link" href="past_orders.php">ΙΣΤΟΡΙΚΟ</a>
			</li>
		  </ul>
		</nav>
		<br>
		<div class="row1">
			<h1>Ολοκλήρωση παραγγελίας</h1>
		</div>
		<div class="mainrow">
			<?php
				if($_SERVER["REQUEST_METHOD"]=="POST"){
					echo "<h2>";
					echo "Τα προσωπικά σας στοιχεία";
					echo "</h2>";
					echo "<br>";
					echo "<h4>";
					$_SESSION["name"] = $_POST["name"];
					echo "Όνομα : " . $_SESSION["name"];
					echo "<br>";
					$_SESSION["surname"] = $_POST["surname"];
					echo "Επίθετο : " . $_SESSION["surname"];
					echo "<br>";
					$_SESSION["email"] = $_POST["email"];
					echo "E-mail : " . $_SESSION["email"];
					echo "<br>";
					$_SESSION["phone"] = $_POST["phone"];
					echo "Τηλέφωνο : " . $_SESSION["phone"];
					echo "<br>";
					echo "</h4>";
					echo "<hr>";
					echo "<h2>";
					echo "Τα στοιχεία αποστολής της παραγγελίας";
					echo "</h2>";
					echo "<br>";
					echo "<h4>";
					$_SESSION["street"] = $_POST["street"];
					echo "Οδός : " . $_SESSION["street"];
					echo "<br>";
					$_SESSION["streetNumber"] = $_POST["streetNumber"];
					echo "Αριθμός οδού : " . $_SESSION["streetNumber"];
					echo "<br>";
					$_SESSION["area"] = $_POST["area"];
					echo "Περιοχή : " . $_SESSION["area"];
					echo "<br>";
					$_SESSION["postalCode"] = $_POST["postalCode"];
					echo "Ταχυδρομικός κώδικας : " . $_SESSION["postalCode"];
					echo "<br>";
					echo "</h4>";
				}
			?>
		</div>
		<br>
		<br>
		<br>
		<div class="row2">
			<h1>Το καλάθι σας</h1>
		</div>
		<br>
		<div id="shoppingCart">
			<div id="cartItems">
				<br>
				<?php
					$products_price = 0;
					$delivery_price = 0;
					$total_price = 0;
					$id = 0;
					if(isset($_COOKIE["name1"])){
						$products_price += 4;
						echo "<h5>";
						echo $_COOKIE["name1"] . " : ";
						echo $_COOKIE["price1"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name2"])){
						$products_price += 4;
						echo "<h5>";
						echo $_COOKIE["name2"] . " : ";
						echo $_COOKIE["price2"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name3"])){
						$products_price += 4;
						echo "<h5>";
						echo $_COOKIE["name3"] . " : ";
						echo $_COOKIE["price3"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name4"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name4"] . " : ";
						echo $_COOKIE["price4"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name5"])){
						$products_price += 6;
						echo "<h5>";
						echo $_COOKIE["name5"] . " : ";
						echo $_COOKIE["price5"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name6"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name6"] . " : ";
						echo $_COOKIE["price6"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name7"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name7"] . " : ";
						echo $_COOKIE["price7"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name8"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name8"] . " : ";
						echo $_COOKIE["price8"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name9"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name9"] . " : ";
						echo $_COOKIE["price9"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name10"])){
						$products_price += 6;
						echo "<h5>";
						echo $_COOKIE["name10"] . " : ";
						echo $_COOKIE["price10"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name11"])){
						$products_price += 7;
						echo "<h5>";
						echo $_COOKIE["name11"] . " : ";
						echo $_COOKIE["price11"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name12"])){
						$products_price += 5;
						echo "<h5>";
						echo $_COOKIE["name12"] . " : ";
						echo $_COOKIE["price12"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name13"])){
						$products_price += 2;
						echo "<h5>";
						echo $_COOKIE["name13"] . " : ";
						echo $_COOKIE["price13"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name14"])){
						$products_price += 1;
						echo "<h5>";
						echo $_COOKIE["name14"] . " : ";
						echo $_COOKIE["price14"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if(isset($_COOKIE["name15"])){
						$products_price += 2;
						echo "<h5>";
						echo $_COOKIE["name15"] . " : ";
						echo $_COOKIE["price15"]. "€";
						echo "</h5>";
						$id = 1;
					}
					if($id == 0){
						echo "<h4>";
						echo "<center>";
						echo "Δεν έχετε επιλέξει προϊόντα";
						echo "</center>";
						echo "</h4>";
					}
					if(isset($_COOKIE["name16"])){
						$delivery_price += 5;
					}
					if($products_price > 10){
						$delivery_price += 2;
					}
					else if($products_price <= 10 && $products_price > 0){
						$delivery_price += 3;
					}
					$total_price = $products_price + $delivery_price;
				?>
			</div>
			<br>
			<hr>
			<br>
			<?php
				echo "<h5>";
				echo "Products price : ";
				echo $products_price . "€";
				echo "</h5>";
				echo "<br>";
				
				echo "<h5>";
				echo "Delivery price : ";
				echo $delivery_price . "€";
				echo "</h5>";
				echo "<br>";
				
				echo "<h5>";
				echo "Total price : ";
				echo $total_price . "€";
				echo "</h5>";
				echo "<br>";
				echo "<br>";
				
				if($id == 1){
					echo '<form action="final_submit.php?view='.date("Y-m-d H:i:s").'" method="post">';
					echo 	'<input type="submit" class="btn btn-primary" value="Επιβεβαίωση Αγοράς" name="submit" >';
					echo '</form>';
				}
			?>
		</div>	
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<div class="footer">
			&copy;
			<a href="http://www.ds.unipi.gr/" target="_blank">2020 DS_UNIPI
			</a>.
			All rights reserved.
		</div>
	</body>
</html>