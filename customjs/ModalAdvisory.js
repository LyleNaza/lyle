function initModalAdvisory() {
	var modal = document.getElementById("modalAdvisory");
	if(modal) {
		// Get the button that opens the modal
		var content = document.getElementById("modalAdvisoryContent");
		if(content) {
			var lines = content.innerHTML.split('\n');
			content.innerHTML = "";
			for(var i = 0; lines.length > i; i++) {
				var p = document.createElement("p");
				p.innerHTML = lines[i];
				content.appendChild(p);
			}
		}
		
		// Get the <span> element that closes the modal
		var close = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		function showModalAdvisory() {
		  modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		close.onclick = function() {
		  modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
		  if (event.target == modal) {
			modal.style.display = "none";
		  }
		}
	}
}
