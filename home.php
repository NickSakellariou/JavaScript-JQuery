<!DOCTYPE html>
<?php
if(isset($_POST["submit"])){
if(isset($_POST['customCheck1'])){
	setcookie("name1","Σαλάτα του Σεφ",time() + 86400, "/", "", 0);
	setcookie("price1","4",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck2'])){
	setcookie("name2","Χωριάτικη Σαλάτα",time() + 86400, "/", "", 0);
	setcookie("price2","4",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck3'])){
	setcookie("name3","Σαλάτα του Καίσαρα",time() + 86400, "/", "", 0);
	setcookie("price3","4",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck4'])){
	setcookie("name4","Σαλάτα του Βασιλιά",time() + 86400, "/", "", 0);
	setcookie("price4","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck5'])){
	setcookie("name5","Τορτελίνια με τυριά",time() + 86400, "/", "", 0);
	setcookie("price5","6",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck6'])){
	setcookie("name6","Ναπολιτάνα",time() + 86400, "/", "", 0);
	setcookie("price6","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck7'])){
	setcookie("name7","Μπολονέζ",time() + 86400, "/", "", 0);
	setcookie("price7","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck8'])){
	setcookie("name8","Καρμπονάρα",time() + 86400, "/", "", 0);
	setcookie("price8","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck9'])){
	setcookie("name9","Ταλιατέλες φούρνου",time() + 86400, "/", "", 0);
	setcookie("price9","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck10'])){
	setcookie("name10","Pizza Special",time() + 86400, "/", "", 0);
	setcookie("price10","6",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck11'])){
	setcookie("name11","Pizza BBQ",time() + 86400, "/", "", 0);
	setcookie("price11","7",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck12'])){
	setcookie("name12","Pizza Margherita",time() + 86400, "/", "", 0);
	setcookie("price12","5",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck13'])){
	setcookie("name13","Μπύρα Amstel",time() + 86400, "/", "", 0);
	setcookie("price13","2",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck14'])){
	setcookie("name14","Coca-Cola",time() + 86400, "/", "", 0);
	setcookie("price14","1",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck15'])){
	setcookie("name15","Amita Motion",time() + 86400, "/", "", 0);
	setcookie("price15","2",time() + 86400, "/", "", 0);
}
if(isset($_POST['customCheck16'])){
	setcookie("name16","Delivery on the same day",time() + 86400, "/", "", 0);
}
}
?>
<html>
	<head>		
		<title>Delicatessen-Home</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
		<script src="http://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
		<link href="home.css" rel="stylesheet" type="text/css">
		<script src="home.js"></script>
	</head>
	<body>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
		  <ul class="navbar-nav">
			<li class="nav-item active">
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
			<li class="nav-item">
			  <a class="nav-link" href="past_orders.php">ΙΣΤΟΡΙΚΟ</a>
			</li>
		  </ul>
		</nav>
		<br>
		<div class="welcome">
			<h1>
				Καλώς ήλθατε στο Delicatessen
			</h1>
		</div>
		<br>
		<div class="mainrow">
			<FORM method="POST">
				<div id="mainrowTop">
					<h2>Τα προϊόντα που διαθέτουμε είναι τα παρακάτω:</h2>
				</div>
				<div>
						<span>	
							<h4>Σαλάτες:</h4>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck1" name="customCheck1" onclick="checkedBox1()">
								  <label class="custom-control-label" for="customCheck1">Σαλάτα του Σεφ : 4.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck2" name="customCheck2" onclick="checkedBox2()">
								  <label class="custom-control-label" for="customCheck2">Χωριάτικη Σαλάτα : 4.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck3" name="customCheck3" onclick="checkedBox3()">
								  <label class="custom-control-label" for="customCheck3">Σαλάτα του Καίσαρα : 4.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck4" name="customCheck4" onclick="checkedBox4()">
								  <label class="custom-control-label" for="customCheck4">Σαλάτα του Βασιλιά : 5.0 €</label>
								</div>
							</div>
							<br>
							<br>
							<br>
						</span>
						<span>
							<h4>Ζυμαρικά:</h4>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck5" name="customCheck5" onclick="checkedBox5()">
								  <label class="custom-control-label" for="customCheck5">Τορτελίνια με τυριά : 6.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck6" name="customCheck6" onclick="checkedBox6()">
								  <label class="custom-control-label" for="customCheck6">Ναπολιτάνα : 5.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck7" name="customCheck7" onclick="checkedBox7()">
								  <label class="custom-control-label" for="customCheck7">Μπολονέζ : 5.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck8" name="customCheck8" onclick="checkedBox8()">
								  <label class="custom-control-label" for="customCheck8">Καρμπονάρα : 5.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck9" name="customCheck9" onclick="checkedBox9()">
								  <label class="custom-control-label" for="customCheck9">Ταλιατέλες φούρνου : 5.0 €</label>
								</div>
							</div>
							<br>
							<br>
						</span>
						<span>
							<br>
							<br>
							<h4>Pizza:</h4>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck10" name="customCheck10" onclick="checkedBox10()" >
								  <label class="custom-control-label" for="customCheck10">Pizza Special: 6.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
									 <input type="checkbox" class="custom-control-input" id="customCheck11" name="customCheck11" onclick="checkedBox11()">
									 <label class="custom-control-label" for="customCheck11">Pizza BBQ : 7.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck12" name="customCheck12" onclick="checkedBox12()">
								  <label class="custom-control-label" for="customCheck12">Pizza Margherita : 5.0 €</label>
								</div>
							</div>
							<br>
							<br>
							<br>
							<br>
							<br>
						</span>
						<span>
							<h4>Ποτά:</h4>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck13" name="customCheck13" onclick="checkedBox13()">
								  <label class="custom-control-label" for="customCheck13">Μπύρα Amstel: 2.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck14" name="customCheck14" onclick="checkedBox14()">
								  <label class="custom-control-label" for="customCheck14">Coca-Cola : 1.0 €</label>
								</div>
							</div>
							<div class="container mt-3">
								<div class="custom-control custom-checkbox mb-3">
								  <input type="checkbox" class="custom-control-input" id="customCheck15" name="customCheck15" onclick="checkedBox15()">
								  <label class="custom-control-label" for="customCheck15">Amita Motion : 2.0 €</label>
								</div>
							</div>
							<br>
							<br>
							<br>
							<br>
							<br>
						</span>
						<hr>	
						<div class="container mt-3">
							<div class="custom-control custom-checkbox mb-3">
								 <input type="checkbox" class="custom-control-input" id="customCheck16" name="customCheck16" onclick="expressPrice()">
								<label class="custom-control-label" for="customCheck16">Αυθημερόν παράδοση: 5.0 €</label>
							</div>
						</div>
				</div>
				<div class="mainrowBottom">
					<br>
					<div id="shoppingCart">
						<h2>Τιμολόγιο</h2>
						<div id="cartItems">
						</div>
						<br>
						<strong >Products price</strong> <span id="productsPrice">0</span><br><br>
						<strong >Delivery Price</strong> <span id="deliveryPrice">0</span><br><br>
						<strong >Total price</strong> <span id="totalPrice">0</span><br>
						<br>
						<?php
							if ($_SERVER['REQUEST_METHOD'] === 'POST') {
								echo "Μπορείτε να δείτε το καλάθι για να δείτε τι έχετε επιλέξει μέχρι στιγμής!";
								echo "<br>";
							}
						?>
					</div>	
					<br>
				</div>
				<input type="submit" class="btn btn-primary" value="Καταχώρηση στοιχείων" id="finalSubmit" name="submit" disabled>
				<button type="reset" class="btn btn-primary" onclick="clearCart()" >Καθαρισμός</button>
			</FORM>
		</div>
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