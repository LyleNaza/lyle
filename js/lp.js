
var current = 1;
var position = 10;
var speed = 100;
var luffy = document.getElementById("luffy");

function update() {  

    if (current == 1) {
      luffy.src = "pic/l1.png";
    }
    if (current == 2) {
      luffy.src = "pic/l2.png";
    }
    if (current == 3) {
      luffy.src = "pic/l3.png";
    }
    if (current == 4) {
      luffy.src = "pic/l1.png";
    }


    current = current + 1;
    if (current > 4) {
        current = 1;
    }

    position = position + speed;
    luffy.style = position + "px";
  
  if (position > 800) {
    speed = -speed;
    luffy.style.transform = "scaleX(-0)";
  }
  
  if (position < 0) {
    speed = -speed;
    luffy.style.transform = "scaleX(1)";
  }
}

setInterval(update, 150);
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
    
 