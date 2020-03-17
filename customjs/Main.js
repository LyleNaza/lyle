function initMenuButton() {
	document.getElementById('menu-button').onclick = function() {
		var menu = document.getElementById('header-menu');
		if(menu.className != 'show-menu') {
			menu.className = 'show-menu';
		}
		else {
			menu.className = 'hidden-menu';
		}
	}
}

function toggleHeaderButtons(status, session) {
	var headerCon = document.getElementById("header-container");
	headerCon.style.display = "block";
	var accountbtn = document.getElementById("account-btn");
	var loginbtn = document.getElementById("login-btn");
	// var signupbtn = document.getElementById("signup-btn");
	if(status == "active") {
		accountbtn.className = "menu-item show";
		if(session && session.restriction) {
			if(session.restriction == 5) {
				var flightbtn = document.getElementById("flight-btn");
				if(flightbtn) {
					flightbtn.className = "menu-item show";
				}
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 4) {
				var flightbtn = document.getElementById("flight-btn");
				if(flightbtn) {
					flightbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 3) {
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 2) {
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 1) {
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
		}
	}
	else {
		loginbtn.className = "menu-item show";
		// signupbtn.className = "menu-item show";
		accountbtn.className = "menu-item hidden";
		var flightbtn = document.getElementById("flight-btn");
		if(flightbtn) {
			flightbtn.className = "menu-item hidden";
		}
		var flightportalbtn = document.getElementById("flight-portal-btn");
		if(flightportalbtn) {
			flightportalbtn.className = "menu-item hidden";
		}
		var hotelbtn = document.getElementById("hotel-btn");
		if(hotelbtn) {
			hotelbtn.className = "menu-item hidden";
		}
	}
}

function highlightSelectedMenuItem () {
	var items = document.getElementsByClassName("menu-item");
	var pathname = window.location.pathname;
	if(pathname == '/'){
		return;
	}
	for(var x = 0; x < items.length; x++) {
		var aElement = items[x].childNodes[0];
		if(aElement.tagName == "A") {
			if(aElement.pathname.indexOf(pathname) > -1 && aElement.className != "special-button") {
				items[x].className = "menu-item show selected";
			}
		}
	}
}

function onBookingPortal() {
	var session_data = JSON.parse(sessionStorage.getItem("session_data"));
	if(session_data) {
		window.location.href="http://localhost:8080?sessionId=" + session_data.session_id;
	}
	else {
		alert("Your session has expired. Please login again.");
		logout();
	}
}

function initBookingPortal() {
	var v = document.getElementById("via-booking-portal");
	if(v) {
		var session_data = JSON.parse(sessionStorage.getItem("session_data"));
		if(session_data) {
			v.src="http://localhost:8080?sessionId=" + session_data.session_id;
		}
	}
}

window.addEventListener("load", function () {
	var session = JSON.parse(sessionStorage.getItem("session"));
	if(session && session.sessionId) {
		toggleHeaderButtons("active", session);
	}
	else {
		toggleHeaderButtons(null);
	}
	highlightSelectedMenuItem();
	initBookingPortal();
	initMenuButton();
	initModalAdvisory();
});

function redirectIfHasSession() {
	var session = JSON.parse(sessionStorage.getItem("session"));
	if(session && session.sessionId) {
		if(window.location.pathname == "/login" || window.location.pathname == "/register") {
			window.location.href = "/account";
			return;
		}
		if(session.restriction) {
			if(session.restriction == 5) {
				var flightbtn = document.getElementById("flight-btn");
				if(flightbtn) {
					flightbtn.className = "menu-item show";
				}
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 4) {
				var flightbtn = document.getElementById("flight-btn");
				if(flightbtn) {
					flightbtn.className = "menu-item show";
				}
				// var flightportalbtn = document.getElementById("flight-portal-btn");
				// if(flightportalbtn) {
				// 	flightportalbtn.className = "menu-item show";
				// }
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					window.location.href = "/account";
					return;
				}
			}
			else if(session.restriction == 3) {
				// var flightbtn = document.getElementById("flight-btn");
				// if(flightbtn) {
				// 	flightbtn.className = "menu-item show";
				// }
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 2) {
				if(window.location.pathname == "/hotel-booking") {
					window.location.href = "/account";
					return;
				}
				// var flightbtn = document.getElementById("flight-btn");
				// if(flightbtn) {
				// 	flightbtn.className = "menu-item show";
				// }
				var flightportalbtn = document.getElementById("flight-portal-btn");
				if(flightportalbtn) {
					flightportalbtn.className = "menu-item show";
				}
			}
			else if(session.restriction == 1) {
				if(window.location.pathname == "/flight-booking" || window.location.pathname == "/booking-portal") {
					window.location.href = "/account";
					return;
				}
				var hotelbtn = document.getElementById("hotel-btn");
				if(hotelbtn) {
					hotelbtn.className = "menu-item show";
				}
			}
		}
	}
	else {
		if(window.location.pathname == "/account" || window.location.pathname == "/hotel-booking" || window.location.pathname == "/flight-booking" || window.location.pathname == "/booking-portal" || window.location.pathname == "/tour-packages") {
			window.location.href = "/login";
		}
	}
}
