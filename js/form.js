

function get()
{
	var B = 12;
	var Tok = 10;
	var Tu = 5;
	var Cala = 10;
	
	var Food1 = B * document.getElementById('bananacue').value;
	var Food2 = Tok * document.getElementById('tokneneng').value;
	var Food3 = Tu * document.getElementById('turon').value;
	var Food4 = Cala * document.getElementById('calamares').value;
	
	var t1 = 1 *document.getElementById('bananacue').value;
	var t2 = 1 * document.getElementById('tokneneng').value;
	var t3 = 1 *document.getElementById('turon').value;
	var t4 = 1 *document.getElementById('calamares').value;
	
	var titem = t1 + t2 + t3 + t4;
	
	document.getElementById('ti').value = titem;
	
	var totalItem = Food1 + Food2 + Food3 + Food4;
	document.getElementById('tp').value = totalItem;

}

function conf()
{
		
	var B = 12;
	var Tok = 10;
	var Tu = 5;
	var Cala = 10;
	
	var Food1 = B * document.getElementById('bananacue').value;
	var Food2 = Tok * document.getElementById('tokneneng').value;
	var Food3 = Tu * document.getElementById('turon').value;
	var Food4 = Cala * document.getElementById('calamares').value;
	
	var totalItem = Food1 + Food2 + Food3 + Food4;
	document.getElementById('tp').value = totalItem;

	var payment = document.getElementById('ma').value;
	var total = totalItem;
	var change;
	
	if (payment < total){
		alert("Not enough payment.");
	}
	
	else if (total == 0)
	{
		alert("Please buy something.")		
	}
	else if (payment == 0)
	{
		alert("Please input an amount.")
	}
	else if (payment >= total){
	var B = 12;
	var Tok = 10;
	var Tu = 5;
	var Cala = 10;
	
	var Food1 = B * document.getElementById('bananacue').value;
	var Food2 = Tok * document.getElementById('tokneneng').value;
	var Food3 = Tu * document.getElementById('turon').value;
	var Food4 = Cala * document.getElementById('calamares').value;
	var totalItem = Food1 + Food2 + Food3 + Food4;
	var t1 = 1 *document.getElementById('bananacue').value;
	var t2 = 1 * document.getElementById('tokneneng').value;
	var t3 = 1 *document.getElementById('turon').value;
	var t4 = 1 *document.getElementById('calamares').value;
	
	var titem = t1 + t2 + t3 + t4;
	
	document.getElementById('ti').value = titem;
			// Get the modal
var modal = document.getElementById("myModal");
{
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("button");

  modal.style.display = "block";
  
  document.getElementById('m0').value =("Your Receipt");
  document.getElementById('m1').value =("BehneneQue:");
  document.getElementById('m2').value =Food1;
  document.getElementById('m3').value =("Talkneneng:");
  document.getElementById('m4').value =Food2;
  document.getElementById('m5').value =("Tworon:");
  document.getElementById('m6').value = Food3;
  document.getElementById('m7').value =("Killermares:");
  document.getElementById('m8').value =Food4;
  document.getElementById('toti').value =("Total Item:");
  document.getElementById('totem').value =titem;
  document.getElementById('m9').value =("Total Payment:");
  document.getElementById('m10').value =totalItem;
  document.getElementById('m11').value =("Your Payment:");
  document.getElementById('m12').value =document.getElementById("ma").value;
  document.getElementById('m13').value =("Your Change: ");
  document.getElementById('m14').value = document.getElementById("ma").value - totalItem;
  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";  
}
}
}		
}

function lp()
{
	  window.location = "lp.html";
}
function reg()
{
	  window.location = "index.html";	
}
function order()
{
	  window.location = "order.html";	
}