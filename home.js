function checkedBox1() {
	var checkBox = document.getElementById("customCheck1");
	id=1;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox2() {
	var checkBox = document.getElementById("customCheck2");
	id=2;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox3() {
	var checkBox = document.getElementById("customCheck3");
	id=3;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox4() {
	var checkBox = document.getElementById("customCheck4");
	id=4;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox5() {
	var checkBox = document.getElementById("customCheck5");
	id=5;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox6() {
	var checkBox = document.getElementById("customCheck6");
	id=6;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox7() {
	var checkBox = document.getElementById("customCheck7");
	id=7;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox8() {
	var checkBox = document.getElementById("customCheck8");
	id=8;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox9() {
	var checkBox = document.getElementById("customCheck9");
	id=9;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox10() {
	var checkBox = document.getElementById("customCheck10");
	id=10;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox11() {
	var checkBox = document.getElementById("customCheck11");
	id=11;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox12() {
	var checkBox = document.getElementById("customCheck12");
	id=12;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox13() {
	var checkBox = document.getElementById("customCheck13");
	id=13;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox14() {
	var checkBox = document.getElementById("customCheck14");
	id=14;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function checkedBox15() {
	var checkBox = document.getElementById("customCheck15");
	id=15;
	if (checkBox.checked == true){
		addelement();
	} else {
		removeelement();
	}	
} 
function addelement(){
	if(id==1){
		var title=document.createTextNode("Σαλάτα του Σεφ : ");
		var price=document.createTextNode("4.0€");
		
		para1 = document.createElement("p");
		para1.appendChild(title);
		para1.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para1);
		if(typeof products_price !== 'undefined' ){
			products_price += 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==2){
		var title=document.createTextNode("Χωριάτικη Σαλάτα : ");
		var price=document.createTextNode("4.0€");
		
		para2 = document.createElement("p");
		para2.appendChild(title);
		para2.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para2);
		if(typeof products_price !== 'undefined' ){
			products_price += 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==3){
		var title=document.createTextNode("Σαλάτα του Καίσαρα : ");
		var price=document.createTextNode("4.0€");
		
		para3 = document.createElement("p");
		para3.appendChild(title);
		para3.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para3);
		if(typeof products_price !== 'undefined' ){
			products_price += 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 4;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==4){
		var title=document.createTextNode("Σαλάτα του Βασιλιά : ");
		var price=document.createTextNode("5.0€");
		
		para4 = document.createElement("p");
		para4.appendChild(title);
		para4.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para4);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==5){
		var title=document.createTextNode("Τορτελίνια με τυριά : ");
		var price=document.createTextNode("6.0€");
		
		para5 = document.createElement("p");
		para5.appendChild(title);
		para5.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para5);
		if(typeof products_price !== 'undefined' ){
			products_price += 6;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 6;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==6){
		var title=document.createTextNode("Ναπολιτάνα : ");
		var price=document.createTextNode("5.0€");
		
		para6 = document.createElement("p");
		para6.appendChild(title);
		para6.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para6);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==7){
		var title=document.createTextNode("Μπολονέζ : ");
		var price=document.createTextNode("5.0€");
		
		para7 = document.createElement("p");
		para7.appendChild(title);
		para7.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para7);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==8){
		var title=document.createTextNode("Καρμπονάρα : ");
		var price=document.createTextNode("5.0€");
		
		para8 = document.createElement("p");
		para8.appendChild(title);
		para8.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para8);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==9){
		var title=document.createTextNode("Ταλιατέλες φούρνου : ");
		var price=document.createTextNode("5.0€");
		
		para9 = document.createElement("p");
		para9.appendChild(title);
		para9.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para9);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==10){
		var title=document.createTextNode("Pizza Special : ");
		var price=document.createTextNode("6.0€");
		
		para10 = document.createElement("p");
		para10.appendChild(title);
		para10.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para10);
		if(typeof products_price !== 'undefined' ){
			products_price += 6;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 6;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==11){
		var title=document.createTextNode("Pizza BBQ : ");
		var price=document.createTextNode("7.0€");
		
		para11 = document.createElement("p");
		para11.appendChild(title);
		para11.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para11);
		if(typeof products_price !== 'undefined' ){
			products_price += 7;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 7;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==12){
		var title=document.createTextNode("Pizza Margherita : ");
		var price=document.createTextNode("5.0€");
		
		para12 = document.createElement("p");
		para12.appendChild(title);
		para12.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para12);
		if(typeof products_price !== 'undefined' ){
			products_price += 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 5;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==13){
		var title=document.createTextNode("Μπύρα Amstel : ");
		var price=document.createTextNode("2.0€");
		
		para13 = document.createElement("p");
		para13.appendChild(title);
		para13.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para13);
		if(typeof products_price !== 'undefined' ){
			products_price += 2;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 2;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==14){
		var title=document.createTextNode("Coca-Cola : ");
		var price=document.createTextNode("1.0€");
		
		para14 = document.createElement("p");
		para14.appendChild(title);
		para14.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para14);
		if(typeof products_price !== 'undefined' ){
			products_price += 1;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 1;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
	else if(id==15){
		var title=document.createTextNode("Amita Motion : ");
		var price=document.createTextNode("2.0€");
		
		para15 = document.createElement("p");
		para15.appendChild(title);
		para15.appendChild(price);
		element = document.getElementById("cartItems");
		element.appendChild(para15);
		if(typeof products_price !== 'undefined' ){
			products_price += 2;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		else{
			products_price = 2;
			document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		}
		totalPrice();
	}
}
function removeelement(){
	if(id==1){
		products_price -= 4;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para1);
		totalPrice();
	}
	else if(id==2){
		products_price -= 4;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para2);
		totalPrice();
	}
	else if(id==3){
		products_price -= 4;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para3);
		totalPrice();
	}
	else if(id==4){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para4);
		totalPrice();
	}
	else if(id==5){
		products_price -= 6;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para5);
		totalPrice();
	}
	else if(id==6){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para6);
		totalPrice();
	}
	else if(id==7){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para7);
		totalPrice();
	}
	else if(id==8){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para8);
		totalPrice();
	}
	else if(id==9){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para9);
		totalPrice();
	}
	else if(id==10){
		products_price -= 6;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para10);
		totalPrice();
	}
	else if(id==11){
		products_price -= 7;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para11);
		totalPrice();
	}
	else if(id==12){
		products_price -= 5;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para12);
		totalPrice();
	}
	else if(id==13){
		products_price -= 2;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para13);
		totalPrice();
	}
	else if(id==14){
		products_price -= 1;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para14);
		totalPrice();
	}
	else if(id==15){
		products_price -= 2;
		document.getElementById("productsPrice").innerHTML=parseInt(products_price);
		element.removeChild(para15);
		totalPrice();
	}
}
function expressPrice(){
	if(typeof products_price !== 'undefined' ){
		if(products_price>10){
			if(document.getElementById("customCheck16").checked == true){
				del_price=7;
				tot_price=products_price + 7;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
			else if(document.getElementById("customCheck16").checked == false){
				del_price=2;
				tot_price=products_price + 2;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
		}
		else if(products_price<=10 && products_price>0){
			if(document.getElementById("customCheck16").checked == true){
				del_price=8;
				tot_price=products_price + 8;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
			else if(document.getElementById("customCheck16").checked == false){
				del_price=3;
				tot_price=products_price + 3;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
		}
		else if(products_price==0){
			if(document.getElementById("customCheck16").checked == true){
				del_price=5;
				tot_price=products_price + 5;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
			else if(document.getElementById("customCheck16").checked == false){
				del_price=0;
				tot_price=products_price + 0;
				document.getElementById("deliveryPrice").innerHTML=del_price;
				document.getElementById("totalPrice").innerHTML=tot_price;
			}
		}
	}
	else{
		if(document.getElementById("customCheck16").checked == true){
			del_price=5;
			tot_price=5;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
		else if(document.getElementById("customCheck16").checked == false){
			del_price=0;
			tot_price=0;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
	}
}
function totalPrice(){
	if(products_price>10){
		document.getElementById("finalSubmit").disabled = false;
		if(document.getElementById("customCheck16").checked == true){
			del_price=7;
			tot_price=products_price + 7;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
		else if(document.getElementById("customCheck16").checked == false){
			del_price=2;
			tot_price=products_price + 2;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
	}
	else if(products_price<=10 && products_price>0){
		document.getElementById("finalSubmit").disabled = false;
		if(document.getElementById("customCheck16").checked == true){
			del_price=8;
			tot_price=products_price + 8;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
		else if(document.getElementById("customCheck16").checked == false){
			del_price=3;
			tot_price=products_price + 3;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
	}
	else if(products_price==0){
		document.getElementById("finalSubmit").disabled = true;
		if(document.getElementById("customCheck16").checked == true){
			del_price=5;
			tot_price=products_price + 5;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
		else if(document.getElementById("customCheck16").checked == false){
			del_price=0;
			tot_price=products_price + 0;
			document.getElementById("deliveryPrice").innerHTML=del_price;
			document.getElementById("totalPrice").innerHTML=tot_price;
		}
	}
}
function clearCart(){
	document.getElementById("finalSubmit").disabled = true;
	element = document.getElementById("cartItems");
	element.innerHTML = "";
	products_price=0;
	del_price=0;
	tot_price=0;
	document.getElementById("productsPrice").innerHTML=parseInt(products_price);
	document.getElementById("deliveryPrice").innerHTML=del_price;
	document.getElementById("totalPrice").innerHTML=tot_price;
}