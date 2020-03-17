
"use strict";

function Spinner() {
	this._is_spinner_shown = false;
}

Spinner.prototype.is_shown = function() {
	return(this._is_spinner_shown);
};

Spinner.prototype.show = function() {
	var c = document.createElement("div");
	c.setAttribute("id", "spinner-container");
	var bg = document.createElement("div");
	bg.setAttribute("id", "spinner-bg");
	var t = document.createElement("div");
	t.setAttribute("id", "spinner-table-container");
	var tc = document.createElement("div");
	tc.setAttribute("class", "spinner-table-cell-container");
	var sp = document.createElement("div");
	sp.setAttribute("class", "spinner");
	tc.appendChild(sp);
	t.appendChild(tc);
	c.appendChild(bg);
	c.appendChild(t);
	document.body.appendChild(c);
	this._is_spinner_shown = true;
};

Spinner.prototype.close = function() {
	document.body.removeChild(document.getElementById("spinner-container"));
	this._is_spinner_shown = false;
};
