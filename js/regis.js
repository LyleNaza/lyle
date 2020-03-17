function chck()
{
	var p = document.getElementById("password").value;
	var cp = document.getElementById("confirm-password").value;
	if( p != cp)
	{
	alert("incorrect password!");
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