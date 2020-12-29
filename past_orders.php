<!DOCTYPE html>
<html>
	<head>
		<title>Delicatessen-Order</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<link href="past_orders.css" rel="stylesheet" type="text/css">
	</head>
	<body>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		  <ul class="navbar-nav">
			<li class="nav-item">
			  <a class="nav-link" href="home.php">ΑΡΧΙΚΗ ΣΕΛΙΔΑ</a>
			</li>
			<li class="nav-item">
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
			<li class="nav-item active">
			  <a class="nav-link" href="past_orders.php">ΙΣΤΟΡΙΚΟ</a>
			</li>
		  </ul>
		</nav>
		<br>
		<div class="row1">
			<h1>Ιστορικό παραγγελιών</h1>
		</div>
		<div class="mainrow">
			<h2>Εισάγετε το όνομα και το επώνυμό σας για να δείτε τις παραγγελίες που έχετε πραγματοποιήσει</h2>
			<form method="POST">
				<hr>
				<div class="form-group">
				  <label for="name">Όνομα:</label>
				  <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" title="Must contain only letters" id="name" name="name" required>
				</div>
				<div class="form-group">
				  <label for="surname">Επίθετο:</label>
				  <input type="text" class="form-control" pattern="[a-zA-Z]{1,}" title="Must contain only letters" id="surname" name="surname" required>
				</div>
				<br>
				<center>
					<input type="submit" class="btn btn-primary" value="Αναζήτηση" id="submit" name="submit">
				</center>
			</form>
		</div>
		<br>
		<br>
		<?php
			if(isset($_POST["submit"])){
				require 'vendor/autoload.php';

				$m = new MongoDB\Client("mongodb://127.0.0.1/");

				$db = $m->delicatessendb;

				$collection = $db->purchases;
				
				$name = $_POST["name"];
				$surname = $_POST["surname"];
				
				echo '<br>';
				echo '<br>';
				
				echo '<div class="row5">';
					echo '<h1>Αποτελέσματα αναζήτησης</h1>';
				echo '</div>';
				
				echo '<div class="row3">';
					echo '<h1>Name : ' . $name . '</h1>';
					echo '<h1>Surname : ' . $surname . '</h1>';
				echo '</div>';
				echo '<br>';
				echo '<br>';
				
				$criteria = array(
					"name" => $name ,
					"surname" => $surname ,
				);
				$doc = $collection->findOne($criteria);

				if(!empty($doc)) {
					$cursor = $collection->find(array("name" => $name ,"surname" => $surname ));
					
					foreach ($cursor as $document){
						echo '<br>';
						echo '<div class="row2">';
							echo '<div>';
								echo '<h4>Date : ' . $document["date"] . '</h4>';
								echo '<h4>Title : ' . $document["title"] . '</h4>';
								echo '<h4>Cost : ' . $document["cost"] . '</h4>';
							echo '</div>';
						echo '</div>';
					}
				} else {
					echo '<br>';
					echo '<div class="row4">';
						echo '<div>';
							echo '<h4>Δεν έχετε πραγματοποιήσει καμία παραγγελία</h4>';
						echo '</div>';
					echo '</div>';
				}
			}
		?>
		<br>
		<br>
		<br>
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