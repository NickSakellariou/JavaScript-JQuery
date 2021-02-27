$(document).ready(function(){
	$("#customCheck1").click(function(){
		var checkBox = $(this);
		id=1;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck2").click(function(){
		var checkBox = $("#customCheck2");
		id=2;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck3").click(function(){
		var checkBox = $("#customCheck3");
		id=3;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck4").click(function(){
		var checkBox = $("#customCheck4");
		id=4;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck5").click(function(){
		var checkBox = $("#customCheck5");
		id=5;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck6").click(function(){
		var checkBox = $("#customCheck6");
		id=6;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck7").click(function(){
		var checkBox = $("#customCheck7");
		id=7;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck8").click(function(){
		var checkBox = $("#customCheck8");
		id=8;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck9").click(function(){
		var checkBox = $("#customCheck9");
		id=9;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck10").click(function(){
		var checkBox = $("#customCheck10");
		id=10;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck11").click(function(){
		var checkBox = $("#customCheck11");
		id=11;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck12").click(function(){
		var checkBox = $("#customCheck12");
		id=12;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck13").click(function(){
		var checkBox = $("#customCheck13");
		id=13;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck14").click(function(){
		var checkBox = $("#customCheck14");
		id=14;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck15").click(function(){
		var checkBox = $("#customCheck15");
		id=15;
		if (checkBox.is(':checked')){
			addelement();
		} else {
			removeelement();
		}
	});
	
	$("#customCheck16").click(function(){
		if(typeof $products_price !== 'undefined' ){
			if($products_price>10){
				if($("#customCheck16").is(':checked')){
					$del_price=7;
					$tot_price=$products_price + 7;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
				else if(!$("#customCheck16").is(':checked')){
					$del_price=2;
					$tot_price=$products_price + 2;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
			}
			else if($products_price<=10 && $products_price>0){
				if($("#customCheck16").is(':checked')){
					$del_price=8;
					$tot_price=$products_price + 8;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
				else if(!$("#customCheck16").is(':checked')){
					$del_price=3;
					$tot_price=$products_price + 3;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
			}
			else if($products_price==0){
				if($("#customCheck16").is(':checked')){
					$del_price=5;
					$tot_price=$products_price + 5;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
				else if(!$("#customCheck16").is(':checked')){
					$del_price=0;
					$tot_price=$products_price + 0;
					$("#deliveryPrice").html($del_price);
					$("#totalPrice").html($tot_price);
				}
			}
		}
		else{
			if($("#customCheck16").is(':checked')){
				$del_price=5;
				$tot_price=5;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
			else if(!$("#customCheck16").is(':checked')){
				$del_price=0;
				$tot_price=0;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
		}
	});
	
	$("#allReset").click(function(){
		$("#finalSubmit").prop('disabled', true);
		$("#cartItems").html("");
		$products_price=0;
		$del_price=0;
		$tot_price=0;
		$("#productsPrice").html(parseInt($products_price));
		$("#deliveryPrice").html($del_price);
		$("#totalPrice").html($tot_price);
	});
	
	function addelement(){
		if(id==1){
			var title=$(document.createTextNode("Σαλάτα του Σεφ : "));
			var price=$(document.createTextNode("4.0€"));
			
			para1 = $(document.createElement("p"));
			para1.append(title);
			para1.append(price);
			$("#cartItems").append(para1);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==2){
			var title=$(document.createTextNode("Χωριάτικη Σαλάτα : "));
			var price=$(document.createTextNode("4.0€"));
			
			para2 = $(document.createElement("p"));
			para2.append(title);
			para2.append(price);
			$("#cartItems").append(para2);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==3){
			var title=$(document.createTextNode("Σαλάτα του Καίσαρα : "));
			var price=$(document.createTextNode("4.0€"));
			
			para3 = $(document.createElement("p"));
			para3.append(title);
			para3.append(price);
			$("#cartItems").append(para3);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 4;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==4){
			var title=$(document.createTextNode("Σαλάτα του Βασιλιά : "));
			var price=$(document.createTextNode("5.0€"));
			
			para4 = $(document.createElement("p"));
			para4.append(title);
			para4.append(price);
			$("#cartItems").append(para4);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==5){
			var title=$(document.createTextNode("Τορτελίνια με τυριά : "));
			var price=$(document.createTextNode("6.0€"));
			
			para5 = $(document.createElement("p"));
			para5.append(title);
			para5.append(price);
			$("#cartItems").append(para5);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 6;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 6;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==6){
			var title=$(document.createTextNode("Ναπολιτάνα : "));
			var price=$(document.createTextNode("5.0€"));
			
			para6 = $(document.createElement("p"));
			para6.append(title);
			para6.append(price);
			$("#cartItems").append(para6);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==7){
			var title=$(document.createTextNode("Μπολονέζ : "));
			var price=$(document.createTextNode("5.0€"));
			
			para7 = $(document.createElement("p"));
			para7.append(title);
			para7.append(price);
			$("#cartItems").append(para7);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==8){
			var title=$(document.createTextNode("Καρμπονάρα : "));
			var price=$(document.createTextNode("5.0€"));
			
			para8 = $(document.createElement("p"));
			para8.append(title);
			para8.append(price);
			$("#cartItems").append(para8);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==9){
			var title=$(document.createTextNode("Ταλιατέλες φούρνου : "));
			var price=$(document.createTextNode("5.0€"));
			
			para9 = $(document.createElement("p"));
			para9.append(title);
			para9.append(price);
			$("#cartItems").append(para9);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==10){
			var title=$(document.createTextNode("Pizza Special : "));
			var price=$(document.createTextNode("6.0€"));
			
			para10 = $(document.createElement("p"));
			para10.append(title);
			para10.append(price);
			$("#cartItems").append(para10);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 6;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 6;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==11){
			var title=$(document.createTextNode("Pizza BBQ : "));
			var price=$(document.createTextNode("7.0€"));
			
			para11 = $(document.createElement("p"));
			para11.append(title);
			para11.append(price);
			$("#cartItems").append(para11);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 7;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 7;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==12){
			var title=$(document.createTextNode("Pizza Margherita : "));
			var price=$(document.createTextNode("5.0€"));
			
			para12 = $(document.createElement("p"));
			para12.append(title);
			para12.append(price);
			$("#cartItems").append(para12);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 5;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==13){
			var title=$(document.createTextNode("Μπύρα Amstel : "));
			var price=$(document.createTextNode("2.0€"));
			
			para13 = $(document.createElement("p"));
			para13.append(title);
			para13.append(price);
			$("#cartItems").append(para13);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 2;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 2;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==14){
			var title=$(document.createTextNode("Coca-Cola : "));
			var price=$(document.createTextNode("1.0€"));
			
			para14 = $(document.createElement("p"));
			para14.append(title);
			para14.append(price);
			$("#cartItems").append(para14);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 1;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 1;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
		else if(id==15){
			var title=$(document.createTextNode("Amita Motion : "));
			var price=$(document.createTextNode("2.0€"));
			
			para15 = $(document.createElement("p"));
			para15.append(title);
			para15.append(price);
			$("#cartItems").append(para15);
			if(typeof $products_price !== 'undefined' ){
				$products_price += 2;
				$("#productsPrice").html(parseInt($products_price));
			}
			else{
				$products_price = 2;
				$("#productsPrice").html(parseInt($products_price));
			}
			totalPrice();
		}
	}
	function removeelement(){
		if(id==1){
			$products_price -= 4;
			$("#productsPrice").html(parseInt($products_price));
			para1.remove();
			totalPrice();
		}
		else if(id==2){
			$products_price -= 4;
			$("#productsPrice").html(parseInt($products_price));
			para2.remove();
			totalPrice();
		}
		else if(id==3){
			$products_price -= 4;
			$("#productsPrice").html(parseInt($products_price));
			para3.remove();
			totalPrice();
		}
		else if(id==4){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para4.remove();
			totalPrice();
		}
		else if(id==5){
			$products_price -= 6;
			$("#productsPrice").html(parseInt($products_price));
			para5.remove();
			totalPrice();
		}
		else if(id==6){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para6.remove();
			totalPrice();
		}
		else if(id==7){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para7.remove();
			totalPrice();
		}
		else if(id==8){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para8.remove();
			totalPrice();
		}
		else if(id==9){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para9.remove();
			totalPrice();
		}
		else if(id==10){
			$products_price -= 6;
			$("#productsPrice").html(parseInt($products_price));
			para10.remove();
			totalPrice();
		}
		else if(id==11){
			$products_price -= 7;
			$("#productsPrice").html(parseInt($products_price));
			para11.remove();
			totalPrice();
		}
		else if(id==12){
			$products_price -= 5;
			$("#productsPrice").html(parseInt($products_price));
			para12.remove();
			totalPrice();
		}
		else if(id==13){
			$products_price -= 2;
			$("#productsPrice").html(parseInt($products_price));
			para13.remove();
			totalPrice();
		}
		else if(id==14){
			$products_price -= 1;
			$("#productsPrice").html(parseInt($products_price));
			para14.remove();
			totalPrice();
		}
		else if(id==15){
			$products_price -= 2;
			$("#productsPrice").html(parseInt($products_price));
			para15.remove();
			totalPrice();
		}
	}
	function totalPrice(){
		if($products_price>10){
			$("#finalSubmit").prop('disabled', false);
			if($("#customCheck16").is(':checked')){
				$del_price=7;
				$tot_price=$products_price + 7;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
			else if(!$("#customCheck16").is(':checked')){
				$del_price=2;
				$tot_price=$products_price + 2;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
		}
		else if($products_price<=10 && $products_price>0){
			$("#finalSubmit").prop('disabled', false);
			if($("#customCheck16").is(':checked')){
				$del_price=8;
				$tot_price=$products_price + 8;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
			else if(!$("#customCheck16").is(':checked')){
				$del_price=3;
				$tot_price=$products_price + 3;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
		}
		else if($products_price==0){
			$("#finalSubmit").prop('disabled', false);
			if($("#customCheck16").is(':checked')){
				$del_price=5;
				$tot_price=$products_price + 5;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
			else if(!$("#customCheck16").is(':checked')){
				$del_price=0;
				$tot_price=$products_price + 0;
				$("#deliveryPrice").html($del_price);
				$("#totalPrice").html($tot_price);
			}
		}
	}
});